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

function createData(srNo, imgUrl, name, price, quantity) {
  return { srNo, imgUrl, name, price, quantity };
}

const rows = [
  createData(1,"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",'Tomato', 305, 3),
  createData(2,"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",'Capsicum', 305, 3),
  createData(3,"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",'Sweet Potato', 305, 3),
  createData(4,"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",'Broccoli', 305, 3),
  createData(5,"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",'Sweet Corn', 305, 3),
  createData(6,"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",'Betel Leaf', 305, 3),
  createData(7,"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",'Broccoli', 305, 3),
  createData(8,"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",'Sweet Corn', 305, 3),
  createData(9,"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",'Betel Leaf', 305, 3),
  createData(10,"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",'Tomato', 305, 3),
  createData(11,"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",'Capsicum', 305, 3),
  createData(12,"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",'Sweet Corn', 305, 3),
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
            <th><Typography variant="h5">Product</Typography></th>
            <th><Typography variant="h5">Product Name</Typography></th>
            <th><Typography variant="h5">Price</Typography></th>
            <th><Typography variant="h5">Quantity</Typography></th>
            <th><Typography variant="h5">Total</Typography></th>
            <th><Typography variant="h5">Remove</Typography></th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <tr key={row.srNo}>
              <td><Typography variant="h6">{row.srNo}</Typography></td>
              <td >
                <ImageListItem key={row.name} cols={1} rows={1}>
                  <img
                    {...srcset(row.imgUrl, 121, 1, 1)}
                    alt={row.name}
                    loading="lazy"
                    style={{borderRadius:"7px"}}
                  />
                </ImageListItem>
              </td>  
              <td><Typography variant="h6">{row.name}</Typography></td>
              <td style={{ width: 120 }} align="center">
                <Typography variant="h6">{row.price + " INR"}</Typography>
              </td>
              <td style={{ width: 120 }} align="right">
                <IncDec initvalue={row.quantity}/>
              </td>
              <td style={{ width: 120 }} align="right">
                <Typography variant="h6">{row.price *row.quantity} INR</Typography>
              </td>
              <td>
                <Button variant="contained" align="center" sx={{align:"center",backgroundColor:Theme.Colors.primary || "#2592AA"}}>
                  Remove
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
