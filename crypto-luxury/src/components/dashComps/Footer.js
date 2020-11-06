/*eslint-disable*/
import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Button from "./Button";
import SweetAlert from "react-bootstrap-sweetalert";
import SendIcon from '@material-ui/icons/Send';

import { makeStyles } from "@material-ui/core/styles";

import styles from "./dashboardStyle";

import "./Footer.css";

import {Modal, Form} from "react-bootstrap"

import { Container, Col, Row } from "react-bootstrap";
const useStyles = makeStyles(styles);



export default function Footer() {

  let history = useHistory();
  const classes = useStyles();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [subscriber, setSubscriber] = useState({
    email: ""
  })

  const handleContactChange = (e) => {
    e.preventDefault();
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

    const handleSubscriberChange = (e) => {
    e.preventDefault();
    setContact({
      ...subscriber,
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

  const successFooterAlert = () => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "100px" }}
        title="Nice!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        Keep an eye out on your inbox!
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

  const handleContactSubmit = () => {
    axios
      .post(`https://crypto-luxury.herokuapp.com/api/form/contact`, contact)
      .then((res) => {
        successAlert();
        setTimeout(() => {
          setShow(false);
        }, 1500);
      })
      .catch((err) => {
        errorAlert();
      });
  };

  const handleSubscriberSubmit = () => {
    axios
      .post(`https://crypto-luxury.herokuapp.com/api/form/enlist`, subscriber)
      .then((res) => {
        successFooterAlert();
        setTimeout(() => {
          setShow(false);
        }, 1500);
      })
      .catch((err) => {
        errorAlert();
      });
  };

  const [show, setShow] = useState(false);

  const [vaultingModal, setVaultingModal] = useState(false);

  const handleVaultingClose = () => setVaultingModal(false);
  const handleVaultingShow = () => setVaultingModal(true);
  const [whiteModal, setWhiteModal] = useState(false);

  const handleWhiteClose = () => setWhiteModal(false);
  const handleWhiteShow = () => setWhiteModal(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [alert, setAlert] = React.useState(null);
  const hideAlert = () => {
    setAlert(null);
  };

  return (
    <div className="footbomb">
          {alert}
        <Modal show={vaultingModal} onHide={handleVaultingClose}>
          <Modal.Header closeButton>
            <Modal.Title>Vaulting</Modal.Title>
          </Modal.Header>
          <Modal.Body><p style={{width: "100%", margin: "0 auto", textAlign: "center"}}>We offer full vaulting services for all luxury collectible goods. This vaulting service is partnered with Chase Bank, and all goods are insured for your safe keeping. All vaults are equiped with humidity control, fire protection, and sealed against theft around the clock.</p></Modal.Body>
          <Modal.Footer>
            <Button color="danger" onClick={handleVaultingClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={whiteModal} onHide={handleWhiteClose}>
        <Modal.Header closeButton>
          <Modal.Title>White Glove Service</Modal.Title>
        </Modal.Header>
        <Modal.Body><p style={{width: "100%", margin: "0 auto", textAlign: "center"}}>We offer a unique white glove service for our top clientelle. This white glove service includes hand delivery of the product and transfer of your collectible to be made in-person. We offer private consultation with the service for our valued clients as well as professional recording of the event to share with your social media presence or simply keep for your own commemoration.</p></Modal.Body>
        <Modal.Footer>
          <Button color="danger" onClick={handleWhiteClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
          <Button color="warning" onClick={() => {
            handleContactSubmit()
          }}>
            Send Ticket
          </Button>
        </Modal.Footer>
      </Modal>
      <Row style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        margin: "0 auto",
        marginTop: "2%",
      }}>
      <Button
      simple
      onClick={() => {
        history.push('/')
      }}
      style={{
        width: "100px",
        margin: "0 auto",
        marginBottom: ".2%",
        opacity: "100%",
        color: "#e0c470",
        fontFamily: "'Raleway', sans-serif"
      }}
    >
      Home
    </Button>
    <Button
      simple
      onClick={() => {
        history.push('/team')
      }}
      style={{
        width: "100px",
        margin: "0 auto",
        marginBottom: ".2%",
        opacity: "100%",
        color: "#e0c470",
        fontFamily: "'Raleway', sans-serif"
      }}
    >
      Team
    </Button>
    <Button
    color="warning"
    simple
    onClick={() => {
      history.push('/watches')
    }}
    style={{
      width: "100px",
      margin: "0 auto",
      marginBottom: ".2%",
      opacity: "100%",
      color: "#e0c470",
      fontFamily: "'Raleway', sans-serif"
    }}
  >
    Watches
  </Button>
  <Button
  simple
  onClick={() => {
    history.push('/cards')
  }}
  style={{
    width: "100px",
    margin: "0 auto",
    marginBottom: ".2%",
    opacity: "100%",
    color: "#e0c470",
    fontFamily: "'Raleway', sans-serif"
  }}
>
  Cards
</Button>
    <Button
      simple
      onClick={handleShow}
      style={{
        width: "100px",
        margin: "0 auto",
        marginBottom: ".2%",
        opacity: "100%",
        color: "#e0c470",
        fontFamily: "'Raleway', sans-serif"
      }}
    >
      Contact Us
    </Button>
      </Row>
      <Row style={{marginTop: "1%", display: "flex", justifyContent: "center"}}>
        <div className="form__group">
        <input type="text" className="form__input" id="name" placeholder="Subscribe to Newsletter" required="" onChange={handleSubscriberChange} />
        <label for="name" className="form__label">Email Address</label>
        </div>
        <Button style={{color: "#e0c470"}} justIcon simple onClick={handleSubscriberSubmit}>
          <SendIcon />
        </Button>
      </Row>
    </div>
  );
}
