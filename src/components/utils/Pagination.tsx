import TablePagination from '@mui/material/TablePagination';
import { ChangeEvent, MouseEvent } from 'react';
import { FlowersType } from '../types/types';

export default function Pagination({
  rowsPerPage,
  setRowsPerPage,
  page,
  setPage,
  basket,
}: {
  rowsPerPage: number;
  setRowsPerPage: (arg0: number) => void;
  page: number;
  setPage: (arg0: number) => void;
  basket: FlowersType[];
}) {
  const handleChangePage = (event: MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TablePagination
      component="div"
      count={basket.length}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={[5, 10, 15, 20]}
    />
  );
}
