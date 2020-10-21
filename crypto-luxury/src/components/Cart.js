import React from "react";

import axios from "axios";

import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Button from "./dashComps/Button";

import Navbar from "react-bootstrap/Navbar";

import Typing from "react-typing-animation";

//import other components
import CartTable from "./dashComps/CartTable";

const Cart = () => {

    let history = useHistory();

    return (
        <Container>
            <div>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                Crypto Luxury
                </Navbar.Brand>
                <div style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "100%"
                }}>
                    <Button style={{width: "30vh"}} onClick={() => {
                        history.push("/")
                    }} color="warning">Home</Button>
                    <Button style={{width: "30vh"}} onClick={() => {
                        history.push("/admin/dashboard")
                    }} color="warning">Products</Button>
                </div>
                </Navbar>
            </div>

            <div style={{
                height: "4vh",
                background: "grey",
                width: "100%",
                marginTop: "0",
                alignSelf: "center",
                borderRadius: "1%",
                alignSelf: "center"
            }}>
                <Typing speed={5}>
                <h6 style={{
                    fontSize: ".8rem",
                    textAlign: "center",
                    paddingTop: ".5%",
                    paddingBottom: ".2%",
                }}>White-Glove complimentary on all orders over $100,000</h6>
                </Typing>
            </div>
            <Row>
            <CartTable />
            </Row>
        </Container>
    )
}

export default Cart;