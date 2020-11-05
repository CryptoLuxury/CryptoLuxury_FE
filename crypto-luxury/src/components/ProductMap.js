import React from 'react';
import ItemCard from "./NewCard";
import { Spin } from "antd";
const ProductMap = ({ products, loading }) => {
  if (loading) {
    return <Spin style={{display: "flex", justifyContent: "center"}} size="large" />;
  }
  return (
      <div style={{
        width: "100%",
        display: "flex",
        flexFlow: "row wrap"
      }}>
      {products.map(product => (
        <ItemCard key={product.id} productInfo={product} />
      ))}
      </div>
  );
};
export default ProductMap;