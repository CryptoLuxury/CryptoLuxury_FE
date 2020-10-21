import React from "react";

import { useHistory } from "react-router-dom";

import TopSection from './CarouselAlternative';
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Navbar from "react-bootstrap/Navbar";
import GridContainer from "./dashComps/GridContainer";
import GridItem from "./dashComps/GridItem";
import Button from "./dashComps/Button";


const LandingPage = () => {

    let history = useHistory();

    return (
        <div>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
            Crypto Luxury
            </Navbar.Brand>
            <GridContainer>
            <GridItem>
            <Button color="warning" style={{
                width: "100px"
            }}>Team</Button>
            </GridItem>
            <GridItem>
            <Button color="warning" style={{
                width: "100px"
            }}>Contact Us</Button>
            </GridItem>
            <GridItem>
            <Dropdown>
            <Dropdown.Toggle variant="dark"  style={{
                width: "100px",
                marginTop: "4%"
            }} id="dropdown-basic">
                Products
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
            <div><TopSection /></div>
        </div>
    );
};

export default LandingPage;