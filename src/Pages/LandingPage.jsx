import React from "react";
import Header from "./../library/components/Header";
import brands from "../services/brands";
import Brands from "../library/components/Brands";
import categories from "../services/categories";
import Categories from "../library/components/Categories";
import Content from "../library/components/Content";
import Card from "../library/components/Card";
import Grid from "../library/components/Grid";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Content className="main_content">
        <Content className="page_left">
          <Categories values={categories} />
          <Brands values={brands} />
          <p>Price</p>
          <p>Min-Max Scaling</p>
          <p>Buttons</p>
        </Content>
        <Content className="page_right">
          <Grid />
        </Content>
      </Content>
    </>
  );
};

export default LandingPage;
