import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, NavDropdown, DropdownButton, Modal } from "react-bootstrap";
import Button from "./dashComps/Button";

import Search from "./SearchNav";

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import Marble from "./Marble.png"

import SweetAlert from "react-bootstrap-sweetalert";

import { makeStyles } from "@material-ui/core/styles";

import styles from "./dashComps/dashboardStyle";

import "./Nav.css";

import { Row, Col } from "react-bootstrap";

const useStyles = makeStyles(styles);

const Navigation = () => {

    const classes = useStyles();

    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
      })

      const handleContactChange = (e) => {
        e.preventDefault();
        setContact({
          ...contact,
          [e.target.name]: e.target.value
        })
      }

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
        axios.post(`https://crypto-luxury.herokuapp.com/api/form/contact`, contact)
        .then(res => {
          successAlert()
          setTimeout(() => {
            setShow(false)
          }, 1500);
        })
        .catch(err => {
          alert("There was an error, if the issue persists, email us: Z@cryptoluxury.com")
          console.log(err)
        })
      }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [alert, setAlert] = React.useState(null);
    const hideAlert = () => {
      setAlert(null);
    }

    let history = useHistory();

    return (
        <div className="wrap">
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
            <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleContactChange} />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" name="email" onChange={handleContactChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="3" name="message" onChange={handleContactChange} />
        </Form.Group>
          </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="warning" onClick={handleContactSubmit}>
            Send Ticket
          </Button>
        </Modal.Footer>
        </Modal>
        <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">CryptoLuxury</Navbar.Brand>
        <div>
          <Search />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-evenly"
          }}>
            <Button color="warning" small href="/" style={{width: "100px", margin: "0 auto", marginBottom: ".2%"}}>Home</Button>
            <Button color="warning" small href="/products" style={{width: "100px", margin: "0 auto", marginBottom: ".2%"}}>Products</Button>
            <Button color="warning" small href="/team" style={{width: "100px", margin: "0 auto", marginBottom: ".2%"}}>Team</Button>
            <Button color="warning" small onClick={handleShow} style={{width: "100px", margin: "0 auto", marginBottom: ".2%"}}>Contact Us</Button>
          </Nav>
          <div style={{marginLeft: "5%", marginRight: "5%", width: "20%"}}>
            <Button color="warning" style={{width: "100px"}} onClick={() => {
                window.open('/cart')
            }}><ShoppingCartIcon /></Button>
          </div>
        </Navbar.Collapse>
      </Navbar>
        </div>
    )
}

export default Navigation;