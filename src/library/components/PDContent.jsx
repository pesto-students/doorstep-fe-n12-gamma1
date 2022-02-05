import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import IncDec from "./IncDec";
import Theme from "../styleHelpers/customTheme";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../app/reducers/cartReducer";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Content(props) {
  const dispatch = useDispatch();
  const onAddProductToCart = () => {
    dispatch(cartActions.addProductToCart(props.product));
  };
  return (
    <Grid container rowSpacing={2}>
      <Grid item>
        <Grid container rowSpacing={1}>
          <Grid item xs={12}>
            <h1 style={{ padding: 0, margin: 0 }}>{props.product.title}</h1>
          </Grid>
          <Grid item>
            <Rating
              name="read-only"
              value={4}
              sx={{ color: "black", display: "flex" }}
              readOnly
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <p>
          {props.product.desc ||
            "Carrots from Tomissy Farm are one of the best on the market. Tomisso and his family are giving a full love to his Bio products. Tomisso’s carrots are growing on the fields naturally."}
        </p>
      </Grid>
      <Grid item xs={12}>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td style={{ color: "#C1C1C1" }}>Category:</td>
              <td>{props.product.categories}</td>
              <td style={{ color: "#C1C1C1" }}>Buy By:</td>
              <td>{props.product.unit}</td>
            </tr>
            <tr>
              <td style={{ color: "#C1C1C1" }}>Stock:</td>
              <td>{props.product.inStock ? "In Stock" : "NA"}</td>
              <td style={{ color: "#C1C1C1" }}>Delivery:</td>
              <td>In 2days</td>
            </tr>
          </tbody>
        </table>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          sx={{
            border: "2px solid #F5F5F5",
            padding: "7px",
            borderRadius: "12px",
            marginTop: "5px",
          }}
        >
          <Grid item xs={6}>
            <h2 style={{ margin: 0, padding: "2px" }}>
              {props.product.discounted_price} INR
            </h2>
            <h3
              style={{ margin: 0, padding: 0, textDecoration: "line-through" }}
            >
              {props.product.price} INR
            </h3>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Grid container rowSpacing={2} columnSpacing={4}>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <IncDec initvalue={props.product.qty} product={props.product} />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Button
                  size="small"
                  variant="contained"
                  style={{
                    backgroundColor: Theme.Colors.primary,
                  }}
                  onClick={onAddProductToCart}
                >
                  Add to cart
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
