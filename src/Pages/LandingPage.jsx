import React,{useState,useEffect} from "react";
import Header from "./../library/components/Header";
import brands from "../services/brands";
import Brands from "../library/components/Brands";
import categories from "../services/categories";
import Categories from "../library/components/Categories";
import Content from "../library/components/Content";
import Card from "../library/components/Card";
import ImagesGrid from "../library/components/Grid";
import Slider from "../library/components/Slider";
import Buttons from "../library/components/Buttons";
import products from "../services/products";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../app/reducers/productReducer";


const LandingPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();
  const data=useSelector(state => state);
  console.log("data",data)
  const productList=data.productReducer.productList.result;
  const categoryList=data.categoryReducer.categoryList.result;
  console.log("categoryList",categoryList)
  console.log("productResult",productList)
  useEffect(() => {
    dispatch(productActions.fetchProduct())
  }, []);
  return (
   
    <Container maxWidth="false">
      
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={20}>
            <Grid item xs={3}>
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
            <Grid item xs={9}>
              <ImagesGrid values={productList}/>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Container>
  );
};

export default LandingPage;
