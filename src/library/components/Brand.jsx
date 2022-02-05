import { Checkbox } from "@mui/material";
import CLabel from "./Label";
import Content from "./Content";
import Grid from "@mui/material/Grid";
import Theme from "../styleHelpers/customTheme";

const Brand = ({ checked, children }) => {
  return (
    <Grid container>
      <Grid item>
        <Checkbox
          defaultChecked
          sx={{
            color: "#C1C1C1",
            "&.Mui-checked": {
              color: Theme.Colors.primary,
            },
          }}
        />
      </Grid>
      <Grid item sx={{ display: "flex", alignItems: "center" }}>
        {children}
      </Grid>
    </Grid>
  );
};

export default Brand;
