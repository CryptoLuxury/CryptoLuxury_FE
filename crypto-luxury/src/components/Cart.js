import React from "react";

import axios from "axios";

import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GridContainer from "./dashComps/GridContainer";
import GridItem from "./dashComps/GridItem";

import Button from "./dashComps/Button";
import Dropdown from "react-bootstrap/Dropdown";

import Navbar from "react-bootstrap/Navbar";

import Typing from "react-typing-animation";

//import other components
import CartTable from "./dashComps/CartTable";

const Cart = () => {

    let history = useHistory();

    return (
        <Container>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
            Crypto Luxury
            </Navbar.Brand>
            <GridContainer>
            <GridItem>
            <Button onClick={() => {
                history.push("/")
            }} color="warning" style={{
                width: "100px"
            }}>Home</Button>
            </GridItem>
            <GridItem>
            <Button onClick={() => {
                history.push("/team")
            }} color="warning" style={{
                width: "100px"
            }}>Team</Button>
            </GridItem>
            <GridItem>
            <Button onClick={() => {
                history.push("/contact")
            }} color="warning" style={{
                width: "100px"
            }}>Contact Us</Button>
            </GridItem>
            <GridItem>
            <Dropdown>
            <Dropdown.Toggle variant="dark"  style={{
                width: "100px",
                marginTop: "4%"
            }} id="dropdown-basic">
                Account
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/cart">Your Cart</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/products">Products</Dropdown.Item>
                <Dropdown.Item href="/team">Team</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Contact Us</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/login">Login</Dropdown.Item>
                <Dropdown.Item href="/register">Register</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </GridItem>
            </GridContainer>
        </Navbar>

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