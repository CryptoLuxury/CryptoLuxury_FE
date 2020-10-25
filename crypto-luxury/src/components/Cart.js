import React, { useState, useEffect } from "react";

import axios from "axios";

import { useHistory } from "react-router-dom";

import CartItem from "./CartItem";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GridContainer from "./dashComps/GridContainer";
import GridItem from "./dashComps/GridItem";

import Button from "./dashComps/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { loadStripe } from "@stripe/stripe-js";

//modal
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import Navbar from "react-bootstrap/Navbar";

import Typing from "react-typing-animation";

//import other components
import CartTable from "./dashComps/CartTable";

// const stripePromise = loadStripe('pk_test_51HKzDHEcVyNtCHEW4SzW2thg3LOVBUJOdrdHniqfEJPL4RyaUgI94YpSSeBXjazqy49kjIS5scvqZu1Ai1GVnGMK003ADuPohG');

import { useCart, useRemoveItem, useTotal } from "../CartContext";

const Cart = () => {
  const user = window.localStorage.getItem("id");

  const cartItems = useCart();
  const cartRemoveItem = useRemoveItem();
  const cartTotal = useTotal();

  let history = useHistory();
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState([]);
  const [cardOrders, setCardOrders] = useState(cartItems);
  const [watchOrders, setWatchOrders] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    axios
      .get(`https://crypto-luxury.herokuapp.com/api/form/cardOrders/${user}`)
      .then((res) => {
        setCardOrders([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`https://crypto-luxury.herokuapp.com/api/form/watchOrders/${user}`)
      .then((res) => {
        setWatchOrders([...res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleContactChange = (e) => {
    e.preventDefault();
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  //       const handleStripeClick = async () => {

  //   try {

  //   // Get Stripe.js instance
  //   const stripe = await stripePromise;
  //   // Call your backend to create the Checkout Session
  //   const response = await axios.post(`https://crypto-luxury.herokuapp.com/api/stripe/create-checkout-session`, order)

  //   // When the customer clicks on the button, redirect them to Checkout.
  //   const result = await stripe.redirectToCheckout({
  //     sessionId: response.data.id,
  //   });

  //   if (result.error) {
  //     console.log("error");
  //   }
  // } catch(error) {
  //   console.log(error)
  // }
  // };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://crypto-luxury.herokuapp.com/api/form/contact`, contact)
      .then((res) => {
        alert("POST SUCCESS");
        console.log(res);
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

  return (
    <Container>
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
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                />
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
        <Navbar.Brand href="/">Crypto Luxury</Navbar.Brand>
        <GridContainer>
          <GridItem>
            <Button
              onClick={() => {
                history.push("/");
              }}
              color="warning"
              style={{
                width: "100px",
              }}
            >
              Home
            </Button>
          </GridItem>
          <GridItem>
            <Button
              onClick={() => {
                history.push("/team");
              }}
              color="warning"
              style={{
                width: "100px",
              }}
            >
              Team
            </Button>
          </GridItem>
          <GridItem>
            <Dropdown>
              <Dropdown.Toggle
                variant="dark"
                style={{
                  width: "100px",
                  marginTop: "4%",
                }}
                id="dropdown-basic"
              >
                Account
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/cart">Your Cart</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={() => {
                    setShow(true);
                  }}
                >
                  Contact Us
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/login">Login</Dropdown.Item>
                <Dropdown.Item href="/register">Register</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </GridItem>
        </GridContainer>
      </Navbar>
      <Row>
        {watchOrders.map((item) => (
          <CartItem itemInfo={item} key={item.id} />
        ))}
        {cartItems.map((item) => (
          <CartItem
            itemInfo={item}
            key={item.id}
            id={item.id}
            removeFromCart={cartRemoveItem}
          />
        ))}
      </Row>
      <h2>Total: ${cartTotal}</h2>
    </Container>
  );
};

export default Cart;
