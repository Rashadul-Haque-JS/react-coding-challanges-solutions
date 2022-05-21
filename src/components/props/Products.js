import { useState } from "react";
import style from "../../module/index.module.css";
import Card from "./Card";

const Products = ({ productArray }) => {
  const [productList, setPList] = useState(productArray);

  return (
    <div className={style.productViews}>
      {productList.map((product, index) => {
        return <Card key={index} product={product} />;
      })}
    </div>
  );
};

export default Products;
