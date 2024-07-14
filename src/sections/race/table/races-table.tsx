'use client';

import { useState, useCallback } from 'react';
// @mui
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// utils
import { fTimestamp } from 'src/utils/format-time';
// components
import Scrollbar from 'src/components/scrollbar';
import {
  useTable,
  getComparator,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
} from 'src/components/table';
//
import { alpha } from '@mui/material/styles';
import { Tab, TablePagination, Tabs } from '@mui/material';
import Label from 'src/components/label';

import RacesTableFiltersResult from './races-table-filters-result';
import RacesTableRow from './races-table-row';
import RacesTableToolbar from './races-table-toolbar';
import { Race } from '@/utils/types/types';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Circuit Name' },
  { id: 'country', label: 'Country' },
  { id: 'date', label: 'Date' },
  { id: 'status', label: 'Status' },
  { id: 'view', label: '' },
];
const STATUS_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'completed', label: 'Completed' },
  { value: 'upcoming', label: 'Upcoming' },
];

const defaultFilters = {
  name: '',
  status: 'all',
  startDate: null,
};

// ----------------------------------------------------------------------

export default function RacesTable({ data }: { data: Race[] }) {
  const table = useTable();

  const router = useRouter();

  const [filters, setFilters] = useState(defaultFilters);

  const dataFiltered = applyFilter({
    inputData: data,
    comparator: getComparator(table.order, table.orderBy),
    filters,
  });

  const denseHeight = table.dense ? 52 : 72;

  const canReset = !!filters.name || filters.status !== 'all' || !!filters.startDate;

  const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

  const handleFilters = useCallback(
    (name: string, value: string) => {
      table.onResetPage();
      setFilters((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [table]
  );

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters);
  }, []);

  const handleViewRow = useCallback(
    (id: string) => {
      router.push(paths.race.details(id));
    },
    [router]
  );

  const handleFilterStatus = useCallback(
    (event: any, newValue: any) => {
      handleFilters('status', newValue);
    },
    [handleFilters]
  );

  return (
    <Container maxWidth="xl">
      <Card>
        <Tabs
          value={filters.status}
          onChange={handleFilterStatus}
          sx={{
            px: 2.5,
            boxShadow: (theme) => `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
          }}
        >
          {STATUS_OPTIONS.map((tab) => (
            <Tab
              key={tab.value}
              iconPosition="end"
              sx={{ gap: 0.75 }}
              value={tab.value}
              label={tab.label}
              icon={
                <Label
                  variant={
                    ((tab.value === 'all' || tab.value === filters.status) && 'filled') || 'soft'
                  }
                  color={
                    (tab.value === 'completed' && 'success') ||
                    (tab.value === 'upcoming' && 'info') ||
                    'default'
                  }
                >
                  {tab.value === 'all' && data.length}
                  {tab.value === 'completed' && data.filter((race) => race.completed).length}
                  {tab.value === 'upcoming' && data.filter((race) => !race.completed).length}
                </Label>
              }
            />
          ))}
        </Tabs>

        <RacesTableToolbar
          filters={filters}
          onFilters={handleFilters}
          //
          canReset={canReset}
          onResetFilters={handleResetFilters}
        />

        {canReset && (
          <RacesTableFiltersResult
            filters={filters}
            onFilters={handleFilters}
            //
            onResetFilters={handleResetFilters}
            //
            results={dataFiltered.length}
            sx={{ p: 2.5, pt: 0 }}
          />
        )}

        <TableContainer sx={{ position: 'relative', overflow: 'unset' }}>
          <Scrollbar>
            <Table size={table.dense ? 'small' : 'medium'} sx={{ minWidth: 300 }}>
              <TableHeadCustom
                order={table.order}
                orderBy={table.orderBy}
                headLabel={TABLE_HEAD}
                rowCount={data.length}
                numSelected={table.selected.length}
                onSort={table.onSort}
              />

              <TableBody>
                {dataFiltered
                  .slice(
                    table.page * table.rowsPerPage,
                    table.page * table.rowsPerPage + table.rowsPerPage
                  )
                  .map((row: Race, index: number) => (
                    <RacesTableRow
                      key={index}
                      row={row}
                      onViewRow={() => handleViewRow(row.country_code)}
                    />
                  ))}

                <TableEmptyRows
                  height={denseHeight}
                  emptyRows={emptyRows(table.page, table.rowsPerPage, data.length)}
                />

                <TableNoData notFound={notFound} />
              </TableBody>
            </Table>
          </Scrollbar>
        </TableContainer>

        <TablePagination
          component="div"
          count={dataFiltered.length}
          page={table.page}
          rowsPerPage={table.rowsPerPage}
          onPageChange={table.onChangePage}
          onRowsPerPageChange={table.onChangeRowsPerPage}
        />
      </Card>
    </Container>
  );
}

// ----------------------------------------------------------------------

function applyFilter({ inputData, comparator, filters }) {
  const { status, name, startDate } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (name) {
    inputData = inputData.filter(
      (race) =>
        race.circuit_short_name.toLowerCase().indexOf(name.toLowerCase()) !== -1 ||
        race.meeting_name.toLowerCase().indexOf(name.toLowerCase()) !== -1 ||
        race.meeting_official_name.toLowerCase().indexOf(name.toLowerCase()) !== -1 ||
        race.location.toLowerCase().indexOf(name.toLowerCase()) !== -1 ||
        race.country_name.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }

  if (status !== 'all') {
    inputData = inputData.filter((race) =>
      status === 'completed' ? race.completed : !race.completed
    );
  }

  if (startDate) {
    inputData = inputData.filter((race) => fTimestamp(race.date_start) >= fTimestamp(startDate));
  }

  return inputData;
}
