import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useRemoveItem } from "../CartContext";

const CartItem = ({ itemInfo }) => {
  const { watchName, watchPrice, watchQty, watch_id } = itemInfo;

  const removeFromCart = useRemoveItem();

  return (
    <div>
      <div style={{ width: 300 }}>
        <p>{watchName}</p>
        <p>{watchPrice}</p>
        <p>{watchQty}</p>
      </div>
      <button
        onClick={() => {
          removeFromCart(watch_id);
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
