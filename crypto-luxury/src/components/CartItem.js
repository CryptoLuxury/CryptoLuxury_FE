import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const CartItem = ({itemInfo}) => {

    const { name, price, quantity } = itemInfo;

    return (
        <div>

            <div style={{ width: 300 }}>
            <p>{name}</p>
            <p>{price}</p>
            <p>{quantity}</p>
            </div>


        </div>
    )
}

export default CartItem;