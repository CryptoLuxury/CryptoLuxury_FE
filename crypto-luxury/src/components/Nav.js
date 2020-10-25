import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, DropdownButton } from "react-bootstrap";
import styled from "styled-components";

import "./Nav.css";

import { Row, Col } from "react-bootstrap";

const Navigation = () => {

    let history = useHistory();

    return (
        <div className="wrap">
            <Row>
                <Col>
                    Watches
                </Col>
                <Col>
                Cards
                </Col>
                <div>
                Team
                </div>
                <div>
                Vaulting
                </div>
            </Row>
        </div>
    )
}

export default Navigation;