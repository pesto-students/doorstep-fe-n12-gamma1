import React from "react";
import Header from "./../library/components/Header";
import brands from "../services/brands";
import Brands from "../library/components/Brands";
import categories from "../services/categories";
import Categories from "../library/components/Categories";
import Content from "../library/components/Content";
import Card from "../library/components/Card";
import Grid from "../library/components/Grid";
import Slider from "../library/components/Slider";
import Buttons from "../library/components/Buttons";
import products from "../services/products";
const LandingPage = () => {
  return (
    <>
      <Header />
      <Content className="main_content">
        <Content className="page_left">
          <Categories values={categories} />
          <Brands values={brands} />
          <Slider />
          <Content className="flex">
            <Buttons>Apply </Buttons>
            <Buttons disabled>Reset</Buttons>
          </Content>
        </Content>
        <Content className="page_right">
          <Grid values={products} />
        </Content>
      </Content>
    </>
  );
};

export default LandingPage;
