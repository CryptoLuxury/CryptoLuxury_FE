import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Footer from "./dashComps/Footer.js";
import styles from "./dashComps/authStyle.js";

import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import LockIcon from '@material-ui/icons/Lock';

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";

// core components
import Container from "react-bootstrap/Container"
import GridContainer from "./dashComps/GridContainer";
import GridItem from "./dashComps/GridItem.js";
import CustomInput from "./dashComps/CustomInput.js";
import Button from "./dashComps/Button";
import Card from "./dashComps/Card.js";
import CardBody from "./dashComps/CardBody.js";
import CardHeader from "./dashComps/CardHeader.js";
import CardFooter from "./dashComps/CardFooter.js";

import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

//modal
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const useStyles = makeStyles(styles);

export default function Pages(props) {

  let history = useHistory();

  const [ userRegister, setUserRegister ] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    e.preventDefault();
    setUserRegister({
      ...userRegister,
      [e.target.name]: e.target.value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post(`https://crypto-luxury.herokuapp.com/api/users/register`, userRegister)
    .then(res => {
      alert("SUCCESS")
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  // styles
  const classes = useStyles();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  const handleContactSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://crypto-luxury.herokuapp.com/api/form/contact`, contact)
    .then(res => {
      alert("POST SUCCESS")
      console.log(res)
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
    <div>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Submit a Ticket</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div>
      <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name="name" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" name="email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Example textarea</Form.Label>
      <Form.Control as="textarea" rows="3" />
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
      <Container>
        <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <form>
            <Card>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="warning"
              >
                <h4 className={classes.cardTitle}>Register</h4>
              </CardHeader>
              <CardBody>
              <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" name="email" onChange={handleChange} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
            </Form.Group>
              </Form>
              </CardBody>
              <CardFooter className={classes.justifyContentCenter}>
                <Button onClick={handleRegister} color="warning" simple size="lg" block>
                  Let{"'"}s Go
                </Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
          <Footer white />
        </Container>
      </div>
  );
}
