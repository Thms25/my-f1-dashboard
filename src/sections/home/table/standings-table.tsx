'use client';

import { useState, useCallback } from 'react';
// @mui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
// routes
import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
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

// Components
import StandingsTableFiltersResult from './standings-table-filters-result';
import StandingsTableRow from './standings-table-row';
import StandingsTableToolbar from './standings-table-toolbar';
import { Driver } from '@/utils/types/types';
import { TablePagination } from '@mui/material';

// ----------------------------------------------------------------------

const defaultFilters = {
  name: '',
  status: 'all',
  startDate: null,
};

// ----------------------------------------------------------------------

type StandingsTableProps = {
  data: any[];
  showSearch?: boolean;
  head: any[];
};

export default function StandingsTable({ data, showSearch = false, head }: StandingsTableProps) {
  const table = useTable({
    orderBy: 'Rank',
  });
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
      router.push(paths.driver.details(id));
    },
    [router]
  );

  return (
    <>
      {showSearch && (
        <StandingsTableToolbar
          filters={filters}
          onFilters={handleFilters}
          canReset={canReset}
          onResetFilters={handleResetFilters}
        />
      )}

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
          <Table size="medium">
            <TableHeadCustom
              order={table.order}
              orderBy={table.orderBy}
              headLabel={head}
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
                .map((row: any, index: number) => (
                  <StandingsTableRow
                    key={index}
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
      <TablePagination
        component="div"
        count={dataFiltered.length}
        page={table.page}
        rowsPerPage={table.rowsPerPage}
        onPageChange={table.onChangePage}
        onRowsPerPageChange={table.onChangeRowsPerPage}
      />
    </>
  );
}

// ----------------------------------------------------------------------

function applyFilter({ inputData, comparator, filters }) {
  const { name } = filters;

  const stabilizedThis = inputData.map((el: any, index: number) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  inputData = stabilizedThis.map((el) => el[0]);

  if (name) {
    inputData = inputData.filter(
      (driver: any) =>
        driver.name.toLowerCase().indexOf(name.toLowerCase()) !== -1 ||
        driver.team.toLowerCase().indexOf(name.toLowerCase()) !== -1
    );
  }

  return inputData;
}
