import Content from "./Content";
import Category from "./Category";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Categories = ({ values }) => {
  return (
    // <Content>
    //   <Content>
    //     <p>Categories</p>
    //   </Content>
    //   {values.map((category, index) => {
    //     return (
    //       <Category
    //         key={category.id}
    //         name={category.name}
    //         label={category.qty}
    //       ></Category>
    //     );
    //   })}
    // </Content>
    <Grid container rowSpacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" sx={{fontWeight:'bold'}}>Categories</Typography>
      </Grid>
      <Grid item>
        <Grid container rowSpacing={1}>
          {values.map((category, index) => {
            return (
              <Grid item xs={12}>
                <Category
                  key={category.id}
                  name={category.name}
                  label={category.qty}
                ></Category>
              </Grid>
            );
          })}
        </Grid> 

      </Grid>
    </Grid>
  );
};

export default Categories;
