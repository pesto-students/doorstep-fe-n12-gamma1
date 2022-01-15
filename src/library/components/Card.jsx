import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345, width:"269px", height: "332px", borderRadius: '12px' }}>
      <CardMedia style={{width: "90%", padding: "16px 16px 16px 14px" }}
        component="img"
        height="180"
        width="536"
        borderradius="12"
        image= {props.imgUrl || "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"}
        alt="Image Not Available"
      />
      <CardContent style={{    padding: "7px"}}>
        <h5 style={{    margin: '0px', textAlign: 'left', 'lineHeight': '23px', 'fontSize': '15px'}}>{props.title || "Product Title"}</h5>
        <h6 style={{    padding: "0px", margin: "0px", textAlign: 'left', lineHeight: '16px', fontSize: '12px', color: '#A9A9A9'}}>{props.description || "Space for small product description"}</h6>
      </CardContent>
      <CardActions>
        <div style={{padding: "5px",width: "100%", textAlign: "left"}}>
          <Button size="small" variant="contained" style={{float:"right", backgroundColor: '#2592AA', height: '36px', width: '112px', borderRadius: '12px'}}>Add to cart</Button>
          <div style={{display: "inline",width: "50%", textAlign: "left"}}>
            <h3 style={{display: "inline", textAlign: "left" , fontSize: '18px'}}>{(props.actualPrice || 36.84) + "INR"}</h3>
            <br></br>
            <h6 style={{display: "inline", color: '#A9A9A9', fontSize: '12px'}}>{(props.mrp || 48.86)}</h6>
          </div>
        </div>
      </CardActions>
    </Card>
  );
}
