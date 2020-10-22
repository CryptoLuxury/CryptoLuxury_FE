import React, {useState} from "react";

import axios from "axios";

import { useHistory } from "react-router-dom";

import TopSection from './CarouselAlternative';
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Navbar from "react-bootstrap/Navbar";
import GridContainer from "./dashComps/GridContainer";
import GridItem from "./dashComps/GridItem";
import Button from "./dashComps/Button";

//modal
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import SweetAlert from "react-bootstrap-sweetalert";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./dashComps/dashboardStyle";

const useStyles = makeStyles(styles);


const LandingPage = () => {

    const classes = useStyles();
    let history = useHistory();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
      })
      const [alert, setAlert] = React.useState(null);
      const hideAlert = () => {
        setAlert(null);
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
  
      const handleContactChange = (e) => {
        e.preventDefault();
        setContact({
          ...contact,
          [e.target.name]: e.target.value
        })
      }
  
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

    return (
        <Container>
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
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
        Crypto Luxury
        </Navbar.Brand>
        <GridContainer>
        <GridItem>
        <Button onClick={() => {
            history.push("/team")
        }} color="warning" style={{
            width: "100px"
        }}>Team</Button>
        </GridItem>
        <GridItem>
        <Button onClick={() => {
            history.push("/products")
        }} color="warning" style={{
            width: "100px"
        }}>Products</Button>
        </GridItem>
        <GridItem>
        <Dropdown>
        <Dropdown.Toggle variant="dark"  style={{
            width: "100px",
            marginTop: "4%"
        }} 
        id="dropdown-basic">
            Account
        </Dropdown.Toggle>
    
        <Dropdown.Menu>
            <Dropdown.Item href="/cart">Your Cart</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={() => {
                setShow(true)
              }}>Contact Us</Dropdown.Item>
              <Dropdown.Divider />
            <Dropdown.Item href="/login">Login</Dropdown.Item>
            <Dropdown.Item href="/register">Register</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </GridItem>
        </GridContainer>
    </Navbar>
            <div><TopSection /></div>
        </Container>
    );
};

export default LandingPage;