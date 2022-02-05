import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import placeHolder from "../../library/images/placeholder.jpg";

export default function SummaryCard(props) {
  return (
    <Card sx={{ padding: "5px", borderBottom: "1px solid #C1C1C1" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Grid container spacing={2} fullwidth={1}>
            <Grid item fullwidth={1}>
              <CardMedia
                component="img"
                height="104"
                image={props.product.img || placeHolder}
                sx={{ borderRadius: "12px" }}
                alt={props.product.title}
                fullwidth={1}
              />
            </Grid>
            <Grid item></Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={"3px"}>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold" }}
                color="text.primary"
              >
                {props.product.title}
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Rating></Rating>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h6">
                        {props.product.discounted_price} INR
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="p" sx={{ color: "#C1C1C1" }}>
                        48.56 INR
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item style={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="p">Quantity: 1</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <CardActions></CardActions>
    </Card>
  );
}
