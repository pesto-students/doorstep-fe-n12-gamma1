import * as React from 'react';
import { styled } from '@mui/system';
import TablePaginationUnstyled from '@mui/base/TablePaginationUnstyled';
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ImageListItem from '@mui/material/ImageListItem';
import IncDec from './IncDec';
import Theme from "../styleHelpers/customTheme";
import Typography from "@mui/material/Typography";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function createData(srNo, date, total, name,status) {
  return { srNo, date, total, name, status };
}

const rows = [
  createData(1,"22 January 2022",525, 'JOHN DOE','Shipping'),
  createData(2,"21 January 2022",525, 'JOHN DOE','Shipping' ),
  createData(3,"20 January 2022",525, 'JOHN DOE','Shipping'),
  createData(4,"19 January 2022",525, 'JOHN DOE','Delivered'),
  createData(5,"18 January 2022",525, 'JOHN DOE','Delivered'),
  createData(6,"17 January 2022",525, 'JOHN DOE','Delivered'),
  createData(7,"16 January 2022",525, 'JOHN DOE','Delivered'),
  createData(8,"15 January 2022",525, 'JOHN DOE','Delivered'),
  createData(9,"14 January 2022",525, 'JOHN DOE','Delivered'),
  createData(10,"13 January 2022",525, 'JOHN DOE','Delivered'),
];

const blue = {
  200: '#A5D8FF',
  400: '#3399FF',
};

const grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};

const Root = styled('div')(
  ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    text-align: left;
    padding: 6px;
  }

  th {
    background-color: ${theme.palette.mode === 'dark' ? grey[900] : grey[100]};
  }
  `,
);

const CustomTablePagination = styled(TablePaginationUnstyled)(
  ({ theme }) => `
  & .MuiTablePaginationUnstyled-spacer {
    display: none;
  }
  & .MuiTablePaginationUnstyled-toolbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }
  & .MuiTablePaginationUnstyled-selectLabel {
    margin: 0;
  }
  & .MuiTablePaginationUnstyled-select {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    border-radius: 50px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    }
  }
  & .MuiTablePaginationUnstyled-displayedRows {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }
  & .MuiTablePaginationUnstyled-actions {
    padding: 2px;
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    border-radius: 50px;
    text-align: center;
  }
  & .MuiTablePaginationUnstyled-actions > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${theme.palette.mode === 'dark' ? blue[400] : blue[200]};
    }
  }
  `,
);

export default function UnstyledTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Root sx={{maxWidth: '100%' }}>
      <table aria-label="custom pagination table">
        <thead>
          <tr align="center">
            <th align="center" sx={{textAlign:"center"}}><Typography variant="h5">Sr. No. </Typography></th>
            <th><Typography variant="h5">ORDER PLACED</Typography></th>
            <th><Typography variant="h5">SEND TO</Typography></th>
            <th><Typography variant="h5">TOTAL</Typography></th>
            <th><Typography variant="h5">STATUS</Typography></th>
            <th><Typography variant="h5">VIEW DETAILS</Typography></th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <tr key={row.srNo}>
              <td><Typography variant="h6">{row.srNo}</Typography></td>
              <td ><Typography variant="h6">{row.date}</Typography></td>  
              <td ><Typography variant="h6">{row.name}</Typography></td>  
              <td style={{ width: 120 }} align="center">
                <Typography variant="h6">{row.total + " INR"}</Typography>
              </td>
              <td ><Typography variant="h6">{row.status}</Typography></td>
              <td>
                <Button variant="contained" align="center" sx={{align:"center",backgroundColor:Theme.Colors.primary || "#2592AA"}}>
                  View Details
                </Button>
              </td>
            </tr>
          ))}

          {emptyRows > 0 && (
            <tr style={{ height: 41 * emptyRows }}>
              <td colSpan={7} />
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={7}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              componentsProps={{
                select: {
                  'aria-label': 'rows per page',
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                },
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </tr>
        </tfoot>
      </table>
    </Root>
  );
}
