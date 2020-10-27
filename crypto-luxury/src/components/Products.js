import React, { useState, useEffect } from "react";

import axios from "axios";

import { Modal, Form } from "react-bootstrap";

import SweetAlert from "react-bootstrap-sweetalert"

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
import { makeStyles } from "@material-ui/core/styles";
import styles from "./dashComps/dashboardStyle";

const useStyles = makeStyles(styles);

const Products = () => {

  const classes = useStyles();

  const [alert, setAlert] = React.useState(null);
  const hideAlert = () => {
    setAlert(null);
  };

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
          successAlert();
          console.log(res)
          setTimeout(() => {
            setShow(false)
          }, 1500);
        })
        .catch(err => {
          errorAlert();
          console.log(err)
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
      <Row style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "3%"
      }}>
      <div>
      <Button color="warning" className="snipcart-checkout" style={{
        display: "flex",
        marginBottom: "3%",
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
      <Row style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        margin: "0 auto",
        marginTop: "4%"
      }}>
      <Button
      color="warning"
      simple
      onClick={() => {
        history.push('/')
      }}
      style={{
        width: "100px",
        margin: "0 auto",
        marginBottom: ".2%",
        opacity: "100%",
      }}
    >
      Home
    </Button>
    <Button
      color="warning"
      simple
      onClick={() => {
        history.push('/team')
      }}
      style={{
        width: "100px",
        margin: "0 auto",
        marginBottom: ".2%",
        opacity: "100%",
      }}
    >
      Team
    </Button>
    <Button
      color="warning"
      simple
      onClick={handleShow}
      style={{
        width: "100px",
        margin: "0 auto",
        marginBottom: ".2%",
        opacity: "100%",
      }}
    >
      Contact Us
    </Button>
      </Row>
    <Row style={{width: "100%" , textAlign: "center", margin: "0 auto", marginTop: "3%"}}>
        <Search />
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
                <Footer />
        </div>
    )
}

export default Products;