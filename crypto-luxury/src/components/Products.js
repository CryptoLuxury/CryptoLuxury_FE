import React, { useState, useEffect } from "react";

import axios from "axios";

import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WatchCard from "./WatchCard";
import Dropdown from "react-bootstrap/Dropdown";
import GridContainer from "./dashComps/GridContainer";
import GridItem from "./dashComps/GridItem";
import CardCard from "./CardCard";
import Footer from "./dashComps/Footer";

import Button from "./dashComps/Button";

//modal
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import Navbar from "react-bootstrap/Navbar";

import Typing from "react-typing-animation";

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

            <div style={{
                height: "4vh",
                background: "grey",
                width: "100%",
                marginTop: "0",
                alignSelf: "center",
                borderRadius: "1%",
                alignSelf: "center"
            }}>
                <Typing speed={5}>
                <h6 style={{
                    fontSize: ".8rem",
                    textAlign: "center",
                    paddingTop: ".5%",
                    paddingBottom: ".2%",
                }}>All of our cards are PSA approved!  Send us a message to learn more.</h6>
                </Typing>
            </div>
            <Row style={{
              marginBottom: "5%",
              display: "flex",
              justifyContent: "space-evenly",
              paddingBottom: "3%"
            }}>
            <Col style={{
              margin: "2%",
              display: "flex",
              flexFlow: "row nowrap",
            }}>
              { watches.map(watch => ( 
              <WatchCard watchInfo={watch} key={watch.id}/> 
              ))}
            </Col>
            </Row>
            <Row style={{
              marginBottom: "5%",
              display: "flex",
              justifyContent: "space-evenly",
              paddingBottom: "3%"
            }}>
            <Col style={{
              margin: "2%",
              display: "flex",
              flexFlow: "row nowrap",
            }}>
              { cards.map(card => ( 
              <CardCard cardInfo={card} key={card.id}/> 
              ))}
            </Col>
            </Row>
            <div>
                <Footer />
            </div>
        </Container>
    )
}

export default Products;