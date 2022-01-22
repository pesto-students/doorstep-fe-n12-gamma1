import Paper from "@mui/material/Paper";
import Content from "../components/Content";
import styled from "styled-components";
import IncDec from "../components/IncDec";
import Grid from "@mui/material/Grid";
import Theme from "../styleHelpers/customTheme";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
const Item = styled(Paper)(({ theme }) => ({
  color: "#ffddff",
}));

const CartItem = ({ imgUrl, title, sellingPrice, totalPrice }) => {
  return (
    <>
      <Content className="cartRow">
        <>
          <CardMedia
            style={{ width: "5%", padding: "16px 16px 16px 14px" }}
            component="img"
            height="100"
            width="100"
            borderradius="12"
            image={
              imgUrl ||
              "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
            }
            alt="Image Not Available"
          />
          <CardContent style={{ padding: "7px" }}>
            <h5
              style={{
                margin: "0px",
                textAlign: "left",
                lineHeight: "23px",
                fontSize: "15px",
                color: Theme.Colors.cardTitle,
              }}
            >
              {title || "Product Title"}
            </h5>
          </CardContent>
          <h3
            style={{
              display: "inline",
              textAlign: "left",
              fontSize: "18px",
              color: Theme.Colors.cardTitle,
            }}
          >
            {title}
          </h3>
        </>
        <h3
          style={{
            display: "inline",
            textAlign: "left",
            fontSize: "18px",
            color: Theme.Colors.cardTitle,
          }}
        >
          {(sellingPrice || 36.84) + " INR"}
        </h3>
        <IncDec initvalue={1} />
        <h3
          style={{
            display: "inline",
            textAlign: "left",
            fontSize: "18px",
            color: Theme.Colors.cardTitle,
          }}
        >
          {(totalPrice || 36.84) + " INR"}
        </h3>
      </Content>
    </>
  );
};

export default CartItem;
