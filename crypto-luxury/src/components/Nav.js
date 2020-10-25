import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Button, Navbar, Nav, Form, FormControl, NavDropdown, DropdownButton, Modal } from "react-bootstrap";

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
          <Button color="dark" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="warning" onClick={handleContactSubmit}>
            Send Ticket
          </Button>
        </Modal.Footer>
        </Modal>
        <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">CryptoLuxury</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/team">Team</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/watches">Watches</NavDropdown.Item>
              <NavDropdown.Item href="/card">Cards</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/products">All Products</NavDropdown.Item>
            </NavDropdown>
            <button onClick={handleShow}>ContactUs</button>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search Products" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <div style={{marginLeft: "5%", marginRight: "5%"}}>
            <button onClick={() => {
                window.open('/cart')
            }}>Cart</button>
          </div>
        </Navbar.Collapse>
      </Navbar>
        </div>
    )
}

export default Navigation;