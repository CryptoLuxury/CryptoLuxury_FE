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
          <Form.Label>Message</Form.Label>
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
        <Navbar bg="dark" variant="light" className="marblebar" sticky="top">
        <Container>
        <Row style={{
          display: "flex",
          margin: "0 auto",
          flexFlow: "row wrap",
          justifyContent: "space-between"
        }}>
        <Row style={{
          margin: "0 auto"
        }}>
        <Navbar.Brand href="/" style={{color: "#e39c0e"}}>
        Crypto Luxury
        </Navbar.Brand>
        </Row>
        <Row style={{
          margin: "0 auto"
        }}>
        <Col>
        <Button onClick={() => {
            history.push("/")
        }} color="warning" style={{
            width: "100px"
        }}>Home</Button>
        </Col>
        <Col>
        <Button onClick={() => {
            history.push("/team")
        }} color="warning" style={{
            width: "100px"
        }}>Team</Button>
        </Col>
        <Col>
        <Button onClick={handleShow} color="warning" style={{
          width: "100px"
      }}>Contact</Button>
        </Col>
      </Row>
      </Row>
        </Container>
        
    </Navbar>
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
            </Container>
            <Row>
                <Footer />
            </Row>
        </div>
    )
}

export default Products;