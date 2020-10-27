import React, { useState, useEffect } from "react";

import axios from "axios";

import { Modal, Form } from "react-bootstrap";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Search from "./Search.js";

import image from "./logo.png";

import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WatchCard from "./NewCard";
import CardCard from "./NewCardCard";
import Footer from "./dashComps/Footer";

import Button from "./dashComps/Button";

const Products = () => {

    let history = useHistory();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ watches, setWatches ] = useState([]);
    const [ cards, setCards ] = useState([]);

    useEffect(() => {
      axios.get(`https://crypto-luxury.herokuapp.com/api/store/watches`)
      .then(res => {
        setWatches([
          ...res.data
        ])
      })
    }, []);

    useEffect(() => {
      axios.get(`https://crypto-luxury.herokuapp.com/api/store/cards`)
      .then(res => {
        setCards([
          ...res.data
        ])
      })
    }, []);

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
          <Button color="warning" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="warning" onClick={handleContactSubmit}>
            Send Ticket
          </Button>
        </Modal.Footer>
      </Modal>
      <Row style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "5%"
      }}>
        <img src={image} alt="advanced logo" />
      </Row>
    <Row style={{width: "100%" , textAlign: "center", margin: "0 auto", marginTop: "3%"}}>
        <Search />
    </Row>
    <Row style={{
      width: "100%",
      display: "flex",
      justifyContent: "center"
    }}>
    <div>
    <Button color="warning" className="snipcart-checkout" style={{
      display: "flex",
      justifyContent: "space-evenly"
    }}>
      <ShoppingCartIcon />
      <span class="snipcart-items-count"></span>
      <span style={{
        marginLeft: "0.5%",
        marginRight: "0.5%"
      }}> / </span>
      <span class="snipcart-total-price"></span>
    </Button>
  </div>
    </Row>
    <Container>
              <Row style={{
              marginBottom: "5%",
              display: "flex",
              justifyContent: "space-evenly",
              paddingBottom: "3%"
            }}>
            <Col style={{
              margin: "2%",
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-evenly"
            }}>
              { watches.map(watch => ( 
              <WatchCard watchInfo={watch} key={watch.id}/> 
              ))}
              { cards.map(card => ( 
              <CardCard cardInfo={card} key={card.id}/> 
              ))}
            </Col>
            </Row>
            </Container>
            <Row>
                <Footer />
            </Row>
        </div>
    )
}

export default Products;