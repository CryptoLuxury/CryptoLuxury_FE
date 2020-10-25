import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRemoveItem } from "../CartContext";

const CartItem = ({ itemInfo }) => {
  const { name, price, quantity, id } = itemInfo;

  const removeFromCart = useRemoveItem();

  return (
    <div>
      <div style={{ width: 300 }}>
        <p>{name}</p>
        <p>{price}</p>
        <p>{quantity}</p>
      </div>
      <button
        onClick={() => {
          removeFromCart(id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
