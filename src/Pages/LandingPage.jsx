import React, { useEffect, useState } from "react";
import Header from "./../library/components/Header";
import Categories from "../library/components/Categories";
import ImagesGrid from "../library/components/Grid";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { productActions } from "../app/reducers/productReducer";
import config from "../config.json";

const LandingPage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const resultedData = data.productReducer.productList.result;

  const categoryList = data.categoryReducer.categoryList.result;
  const apiName = `user/productList?prefix=${config.result.prefix}`;
  useEffect(() => {
    dispatch(
      productActions.fetchProduct({
        apiName: apiName,
      })
    );
  }, []);

  return (
    <Container maxWidth="false" justify="center">
      <Grid container rowSpacing={10}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={8}>
            <Grid item xs={3}>
              <Grid container rowSpacing={8}>
                <Grid item xs={12} fullwidth={1}>
                  <Categories values={categoryList} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={9} sx={{ textAlign: "center" }}>
              {resultedData && resultedData.length != 0 ? (
                <ImagesGrid values={resultedData} />
              ) : (
                <h3>No Data</h3>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LandingPage;
