/*eslint-disable*/
import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import cx from "classnames";
import Button from "./Button";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import SweetAlert from "react-bootstrap-sweetalert";

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

  const handleContactChange = (e) => {
    e.preventDefault();
    setContact({
      ...contact,
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
      <Col style={{width: "100%"}}>
      <Row style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        paddingTop: "3%",
        marginRight: "0",
        marginLeft: "0"
      }}>
        <Button color="rose" style={{
          width: "100px"
        }} onClick={() => {
          window.open('https://www.instagram.com/collectibles_guru/')
        }}><InstagramIcon /></Button>
        <Button color="twitter" style={{
          width: "100px"
        }} onClick={() => {
          window.open('https://twitter.com/CryptoLuxury_io')
        }}><TwitterIcon /></Button>
        <Button color="twitter" style={{
          width: "100px"
        }} onClick={handleVaultingShow}>Vaulting</Button>
        <Button color="twitter" style={{
          width: "100px"
        }} onClick={handleWhiteShow}>White Glove</Button>
      </Row>
      </Col>
      <Row style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        margin: "0 auto",
        marginTop: "2%",
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
    onClick={() => {
      history.push('/watches')
    }}
    style={{
      width: "100px",
      margin: "0 auto",
      marginBottom: ".2%",
      opacity: "100%",
    }}
  >
    Watches
  </Button>
  <Button
  color="warning"
  simple
  onClick={() => {
    history.push('/cards')
  }}
  style={{
    width: "100px",
    margin: "0 auto",
    marginBottom: ".2%",
    opacity: "100%",
  }}
>
  Cards
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
    </div>
  );
}
