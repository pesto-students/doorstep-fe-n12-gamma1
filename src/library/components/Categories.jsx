import Content from "./Content";
import Category from "./Category";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Categories = ({ values }) => {
  return (
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Categories
        </Typography>
      </Grid>
      <Grid item>
        <Grid container rowSpacing={1}>
          {values && values.length != 0
            ? values.map((category, index) => {
                return (
                  <Grid key={category._id} item xs={12}>
                    <Category
                      key={category._id}
                      name={category.categoryName}
                      label={category.number_of_product}
                    ></Category>
                  </Grid>
                );
              })
            : ""}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Categories;
