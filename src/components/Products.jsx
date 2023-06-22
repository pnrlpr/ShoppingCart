/* eslint-disable react/prop-types */
import { ProductItem } from "./ProductItem";
import productData from "../productData";

export const Products = (props) => {
  return (
    <div className="grid grid-cols-3 gap-10 mb-8">
      {productData.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          setCart={props.setCart}
        />
      ))}
    </div>
  );
};
