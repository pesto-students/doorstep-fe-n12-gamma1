import Content from "./Content";
import Category from "./Category";

const Categories = ({ values }) => {
  return (
    <Content>
      <Content>
        <p>Categories</p>
      </Content>
      {values.map((category, index) => {
        return (
          <Category
            key={category.id}
            name={category.name}
            label={category.qty}
          ></Category>
        );
      })}
    </Content>
  );
};

export default Categories;
