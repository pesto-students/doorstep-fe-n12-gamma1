import React from "react";
import Header from "./../library/components/Header";
import brands from "../services/brands";
import Brands from "../library/components/Brands";
import categories from "../services/categories";
import Categories from "../library/components/Categories";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Categories values={categories} />
      <Brands values={brands} />
    </>
  );
};

export default LandingPage;
