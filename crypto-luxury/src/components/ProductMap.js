import React from 'react';
import ItemCard from "./NewCard";
const ProductMap = ({ products, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
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