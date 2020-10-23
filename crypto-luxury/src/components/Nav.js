import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, DropdownButton } from "react-bootstrap";
import styled from "styled-components";

import "./Nav.css";

const Navigation = () => {

    let history = useHistory();

    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top">
            <div style={{
                marginRight: "3%"
            }}>
            <Navbar.Brand href="#home">Crypto Luxury</Navbar.Brand>
            </div>
            <Nav className="mr-auto">
            <Nav.Link style={{color: "#EAB709"}} href="/">Home</Nav.Link>
            <Nav.Link style={{color: "#EAB709"}} href="#pricing">Team</Nav.Link>
            <Nav.Link style={{color: "#EAB709"}} href="#pricing">Services</Nav.Link>
            </Nav>
            <div>
            <Button onClick={() => history.push('/admin/login')} variant="outline-warning">Account</Button>
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