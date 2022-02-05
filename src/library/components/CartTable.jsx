import * as React from "react";
import { styled } from "@mui/system";
import TablePaginationUnstyled from "@mui/base/TablePaginationUnstyled";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import ImageListItem from "@mui/material/ImageListItem";
import IncDec from "./IncDec";
import Theme from "../styleHelpers/customTheme";
import Typography from "@mui/material/Typography";
import { useDispatch,useSelector } from "react-redux";
import { cartActions } from "../../app/reducers/cartReducer";
import Icon from "./Icon";
import Button from "../components/Buttons";

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



const blue = {
  200: "#A5D8FF",
  400: "#3399FF",
};

const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const Root = styled("div")(
  ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    text-align: left;
    padding: 6px;
  }

  th {
    background-color: ${theme.palette.mode === "dark" ? grey[900] : grey[100]};
  }
  `
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
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark" ? blue[400] : blue[200]
      };
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
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    border-radius: 50px;
    text-align: center;
  }
  & .MuiTablePaginationUnstyled-actions > button {
    margin: 0 8px;
    border: transparent;
    border-radius: 2px;
    background-color: transparent;
    &:hover {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    }
    &:focus {
      outline: 1px solid ${
        theme.palette.mode === "dark" ? blue[400] : blue[200]
      };
    }
  }
  `
);

export default function UnstyledTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const dispatch = useDispatch();

  const onDeleteProductEntryFromCart=(product)=>{
    alert("Do you want to delete product from cart");
    dispatch(cartActions.deleteProductEntryFromCart(product));
  }

    const data = useSelector((state) => state);
    const productList = data.cartReducer.products;  

  // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =
  //   page > 0 ? Math.max(0, (1 + page) * rowsPerPage - productList.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Root >
      <table aria-label="custom pagination table">
        <thead>
          <tr align="center">
            <th style={{textAlign:"center"}}>
              <Typography variant="h6">Sr. No. </Typography>
            </th>
            <th style={{textAlign:"center"}}>
              <Typography variant="h6">Product</Typography>
            </th>
            <th style={{textAlign:"center"}}>
              <Typography variant="h6">Product Name</Typography>
            </th>
            <th style={{textAlign:"center"}}>
              <Typography variant="h6">Price</Typography>
            </th>
            <th style={{textAlign:"center"}}>
              <Typography variant="h6">Discounted Price</Typography>
            </th>
            <th style={{textAlign:"center"}}>
              <Typography variant="h6">Quantity</Typography>
            </th>
            <th style={{textAlign:"center"}}>
              <Typography variant="h6">Total</Typography>
            </th>
            <th style={{textAlign:"center"}}>
              <Typography variant="h6">Action</Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0
            ? productList.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : productList
          ).map((product, index) => (
            <tr key={++index}>
              <td style={{textAlign:"right"}}>
                <Typography >{++index}</Typography>
              </td>
              <td style={{textAlign:"center"}}>
                <ImageListItem sx={{ width: 50 }} key={product.title} cols={1} rows={1}>
                {/* src={product.img}
                    srcSet={product.img} {...srcset(product.img, 50, 1, 1)} */}
                  <img
                    src={product.img}
                    srcSet={product.img}
                    alt={product.title}
                    loading={"lazy"}
                    style={{ borderRadius: "7px" }}
                  />
                </ImageListItem>
              </td>
              <td>
                <Typography >{product.title}</Typography>
              </td>
              <td style={{textAlign:"right", textDecoration: "line-through"}}>
                <Typography >{product.price + " INR"}</Typography>
              </td>
              <td style={{textAlign:"right"}}>
                <Typography >{product.discounted_price + " INR"}</Typography>
              </td>
              <td  style={{textAlign:"center"}}>
                <IncDec initvalue={product.qty} product={product} />
              </td>
              <td  style={{textAlign:"right"}}>
                <Typography >
                  {product.total} INR
                </Typography>
              </td>
              <td  style={{color: `${Theme.Colors.primary}`,textAlign: 'center'}}>
                <div onClick={() => onDeleteProductEntryFromCart(product)}>
              <Icon  >
          delete
        </Icon>
        </div>
                {/* <Button  onClick={(product) => onRemoveProductFromCart(product)} >
                  Remove
                </Button> */}
              </td>
            </tr>
          ))}

          {/* {emptyRows > 0 && (
            <tr style={{ height: 41 * emptyRows }}>
              <td colSpan={7} />
            </tr>
          )} */}
        </tbody>
        {/* <tfoot>
          <tr>
            <CustomTablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={7}
              count={productList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              componentsProps={{
                select: {
                  "aria-label": "rows per page",
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
        </tfoot> */}
      </table>
    </Root>
  );
}
