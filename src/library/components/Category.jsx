import Chip from "./Chip";
import CLabel from "./Label";
import Content from "./Content";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Category = ({ name, label, children }) => {
  return (
    <Grid container>
      <Grid item xs={10}>
        <Typography variant="p">{name}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Chip clickable label={label} size="small"></Chip>
      </Grid>
    </Grid>
  );
};

export default Category;
