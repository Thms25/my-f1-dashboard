'use client';

import { useState, useCallback } from 'react';
// @mui
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Container from '@mui/material/Container';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import TableContainer from '@mui/material/TableContainer';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
// components
import Scrollbar from 'src/components/scrollbar';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';
import {
  useTable,
  getComparator,
  emptyRows,
  TableNoData,
  TableEmptyRows,
  TableHeadCustom,
  TablePaginationCustom,
} from 'src/components/table';

// Components
import StandingsTableFiltersResult from './standings-table-filters-result';
import StandingsTableRow from './standings-table-row';
import StandingsTableToolbar from './standings-table-toolbar';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Driver' },
  { id: 'team', label: 'Team' },
  { id: 'points', label: 'Points' },
];

const defaultFilters = {
  name: '',
  status: 'all',
  startDate: null,
};

// ----------------------------------------------------------------------

export default function StandingsTable({ data }: { data: any[] }) {
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
    (name, value) => {
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
      router.push(paths.driver.details(id));
    },
    [router]
  );

  return (
    <>
      <Container maxWidth="xl">
        <Card>
          <StandingsTableToolbar
            filters={filters}
            onFilters={handleFilters}
            //
            canReset={canReset}
            onResetFilters={handleResetFilters}
          />

          {canReset && (
            <StandingsTableFiltersResult
              filters={filters}
              onFilters={handleFilters}
              //
              onResetFilters={handleResetFilters}
              //
              results={dataFiltered.length}
              sx={{ p: 2.5, pt: 0 }}
            />
          )}

          <TableContainer>
            <Scrollbar>
              <Table size="medium" sx={{ minWidth: 300 }}>
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
                    .map((row) => (
                      <StandingsTableRow
                        key={row.driver_number}
                        row={row}
                        onViewRow={() => handleViewRow(row.name_acronym)}
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

          <TablePaginationCustom
            count={dataFiltered.length}
            page={table.page}
            rowsPerPage={table.rowsPerPage}
            onPageChange={table.onChangePage}
            onRowsPerPageChange={table.onChangeRowsPerPage}
            dense={table.dense}
          />
        </Card>
      </Container>
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter({ inputData, comparator, filters }) {
  const { name } = filters;

  const stabilizedThis = inputData.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (name) {
    inputData = inputData.filter(
      (driver: Driver) =>
        driver.full_name.toLowerCase().indexOf(name.toLowerCase()) !== -1 ||
        driver.full_name.toLowerCase().indexOf(name.toLowerCase()) !== -1 ||
        driver.country_code.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }

  return inputData;
}
