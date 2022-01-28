import React from "react";
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
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
const LandingPage = () => {
  return (
    // <>
    //   <Header />
    //   <Content className="main_content">
    //     <Content className="page_left">
    //       <Categories values={categories} />
    //       <Brands values={brands} />
    //       <Slider />
    //       <Content className="flex">
    //         <Buttons>Apply </Buttons>
    //         <Buttons disabled>Reset</Buttons>
    //       </Content>
    //     </Content>
    //     <Content className="page_right">
    //       <Grid values={products} />
    //     </Content>
    //   </Content>
    // </>
    <>
      <Header />
      <Container maxWidth="false" style={{ marginTop: "100px" }}>
        <Grid container>
          {/* <Grid item xs={12}>
          <Header />
        </Grid> */}
          <Grid item xs={12}>
            <Grid container columnSpacing={20}>
              <Grid item xs={3}>
                <Grid container rowSpacing={8}>
                  <Grid item xs={12} fullWidth>
                    <Categories values={categories} />
                  </Grid>
                  <Grid item xs={12} fullWidth>
                    <Brands values={brands} />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container rowSpacing={4}>
                      <Grid item xs={12}>
                        <Slider />
                      </Grid>
                      <Grid item xs={12} fullWidth>
                        <Grid container>
                          <Grid item xs={6}>
                            <Buttons>Apply </Buttons>
                          </Grid>
                          <Grid
                            item
                            xs={6}
                            fullWidth
                            sx={{
                              display: "flex",
                              alignItems: "start",
                              flexDirection: "column",
                            }}
                          >
                            <Button
                              sx={{
                                color: "#A9A9A9",
                                border: "1px solid #A9A9A9",
                                borderRadius: "12px",
                                maxHeight: "48px",
                              }}
                            >
                              Reset
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={9}>
                <ImagesGrid values={products} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LandingPage;
