import React from "react";
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, DropdownButton } from "react-bootstrap";
import styled from "styled-components";

import "./Nav.css";

const Navigation = () => {

    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top">
            <div style={{
                marginRight: "3%"
            }}>
            <Navbar.Brand href="#home">Crypto Luxury</Navbar.Brand>
            </div>
            <Nav className="mr-auto">
            <Nav.Link style={{color: "gold"}} href="/">Home</Nav.Link>
            <Nav.Link style={{color: "gold"}} href="#pricing">Team</Nav.Link>
            <Nav.Link style={{color: "gold"}} href="#pricing">Services</Nav.Link>
            <div style={{
                marginLeft: "15%"
            }}>
            <NavDropdown className="bgnav" variant="warning" title="Products" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.2">Luxury Watches</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Cards</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">All Products</NavDropdown.Item>
            </NavDropdown>
            </div>
            </Nav>
            <div>
            <Button variant="outline-warning">Account</Button>
            </div>
            <div style={{
                marginLeft: "1%"
            }}>
            <Form inline>
            <FormControl type="text" placeholder="Search Products" className="mr-sm-2" />
            <Button variant="dark">Search</Button>
            </Form>
            </div>
        </Navbar>
      </div>
    )
}

export default Navigation;