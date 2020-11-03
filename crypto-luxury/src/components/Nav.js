import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  Modal,
  Container
} from "react-bootstrap";
import Button from "./dashComps/Button";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import Logo from "./logo.png";

import SweetAlert from "react-bootstrap-sweetalert";

import { makeStyles } from "@material-ui/core/styles";

import styles from "./dashComps/dashboardStyle";

import "./Nav.css";

import { Row, Col } from "react-bootstrap";

import Search from "./Search";

const useStyles = makeStyles(styles);

const Navigation = () => {
  const classes = useStyles();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const history = useHistory();

  const handleContactChange = (e) => {
    e.preventDefault();
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const successAlert = () => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "100px" }}
        title="Submitted!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        We've received your ticket, and will get back to you shortly!
      </SweetAlert>
    );
  };

  const errorAlert = () => {
    setAlert(
      <SweetAlert
        danger
        style={{ display: "block", marginTop: "80px" }}
        title="Error!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        That's not supposed to happen :( Try again!
      </SweetAlert>
    );
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://crypto-luxury.herokuapp.com/api/form/contact`, contact)
      .then((res) => {
        successAlert();
        setTimeout(() => {
          setShow(false);
        }, 1500);
      })
      .catch((err) => {
        alert(
          "There was an error, if the issue persists, email us: Z@cryptoluxury.com"
        );
        console.log(err);
      });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [alert, setAlert] = React.useState(null);
  const hideAlert = () => {
    setAlert(null);
  };

  return (
    <div>
      {alert}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit a Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  onChange={handleContactChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={handleContactChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="message"
                  onChange={handleContactChange}
                />
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="warning" onClick={handleContactSubmit}>
            Send Ticket
          </Button>
        </Modal.Footer>
      </Modal>
      <Navbar bg="dark" expand="lg" className="navbar">
      <div style={{width: "100%"}}>
      <div style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        borderBottom: ".35px solid #e0c470",
        paddingBottom: "1%"
      }}>
      <div style={{
        display: "flex",
        justifyContent: "flex-start",
        width: "100%"
      }}>
        <Navbar.Brand>
          <img src={Logo} alt="our logo" className="logoimage" style={{
            paddingLeft: "5%",
            paddingTop: "3%",
            height: "50px"
          }} onClick={() => {
            history.push('/')
          }} />
        </Navbar.Brand>
        </div>
        <div style={{
          margin: "0 auto",
          alignSelf: "center",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          paddingTop: "1%"
        }}>
          <Search />
        </div>
        <div style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "2%"
        }}>
        <Button color="warning" simple justIcon className="snipcart-checkout">
          <ShoppingCartIcon />
        </Button>
      </div>
      </div>
        <div
          style={{
            display: "flex",
            flexFlow: "column wrap",
            width: "100%",
            margin: "0 auto",
            alignSelf: "center",
            alignItems: "center"
          }}
        >
        <div
        className="navtop"
        style={{
            textAlign: "center",
        }}>
              
            </div>
          <Row>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="collapse" id="basic-navbar-nav">
              <Nav
                className="mr-auto"
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-evenly",
                  paddingTop: "3%"
                }}>
              <div style={{width: "100%", display: "flex", justifyContent: "space-evenly"}}>
                <div className="navbutton" style={{width: "75px", textAlign: "center", fontFamily: "Roboto, sans-serif"}} onClick={() => {
                  history.push('/')
                }}>
                  Home
                </div>
                <div className="navbutton" style={{width: "75px", textAlign: "center", fontFamily: "Roboto, sans-serif"}} onClick={() => {
                  history.push('/watches')
                }}>
                  Watches
                </div>
                <div className="navbutton" style={{width: "75px", textAlign: "center", fontFamily: "Roboto, sans-serif"}} onClick={() => {
                  history.push('/cards')
                }}>
                  Cards
                </div>
                <div className="navbutton" style={{width: "75px", textAlign: "center", fontFamily: "Roboto, sans-serif"}} onClick={() => {
                  history.push('/team')
                }}>
                Team
              </div>
              <div className="navbutton" style={{width: "75px", textAlign: "center", fontFamily: "Roboto, sans-serif"}} onClick={handleShow}>
              Contact
            </div>
            </div>
              </Nav>
            </Navbar.Collapse>
          </Row>
          <Row
            style={{
              display: "flex",
              flexFlow: "row nowrap",
              justifyContent: "flex-start",
            }}
          >
          </Row>
        </div>
        </div>
      </Navbar>
    </div>
  );
};

export default Navigation;
