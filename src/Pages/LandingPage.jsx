import React, { useEffect } from "react";
import Header from "./../library/components/Header";
// import brands from "../services/brands";
// import Brands from "../library/components/Brands";
import Categories from "../library/components/Categories";
import ImagesGrid from "../library/components/Grid";
// import Slider from "../library/components/Slider";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../app/reducers/productReducer";
import config from "../config.json";

const LandingPage = () => {
  // const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const productList = data.productReducer.productList.result;
  const categoryList = data.categoryReducer.categoryList.result;
  const apiName=`user/productList?prefix=${config.result.prefix}`
  useEffect(() => {
    dispatch(productActions.fetchProduct({
      apiName:apiName
    }));
  },[]);
  return (
    <Container maxWidth="false" justify="center">
      <Grid container rowSpacing={10}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={8}>
            <Grid item xs={2}>
              <Grid container rowSpacing={8}>
                <Grid item xs={12} fullwidth={1}>
                  <Categories values={categoryList} />
                </Grid>
                {/* <Grid item xs={12} fullwidth={1}>
                  <Brands values={brands} />
                </Grid> */}
                {/* <Grid item xs={12}>
                  <Grid container  rowSpacing={4}>
                    <Grid item xs={12}>
                      <Slider/>
                    </Grid>
                    <Grid item xs={12} fullwidth={1}>
                      <Grid container >
                        <Grid item xs={6}>
                          <Buttons>Apply </Buttons>
                        </Grid>
                        <Grid item xs={6} fullwidth={1} sx={{display:'flex', alignItems:'start',flexDirection: 'column'}}>
                          <Button sx={{color:'#A9A9A9', border:'1px solid #A9A9A9', borderRadius:'12px',maxHeight:'48px'}}>Reset</Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid> */}
              </Grid>
            </Grid>
            <Grid item xs={10}>
              <ImagesGrid values={productList} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
