/*eslint-disable*/
import React, {useState} from "react";
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

  const handleContactSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://crypto-luxury.herokuapp.com/api/form/contact`, contact)
      .then((res) => {
        successAlert();
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

  const [show, setShow] = useState(false);

  const [isShowing, setIsShowing] = useState(true)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [alert, setAlert] = React.useState(null);
  const hideAlert = () => {
    setAlert(null);
  };

  return (
    <div style={{
      width: "100%",
      backgroundColor: "#fffcf7"
    }}>
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
          <Button color="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="warning" onClick={handleContactSubmit}>
            Send Ticket
          </Button>
        </Modal.Footer>
      </Modal>
      <Row style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        paddingTop: "3%"
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
        }} onClick={() => {
          window.open('https://twitter.com/CryptoLuxury_io')
        }}>Vaulting</Button>
        <Button color="twitter" style={{
          width: "100px"
        }} onClick={() => {
          window.open('https://twitter.com/CryptoLuxury_io')
        }}>White Glove</Button>
      </Row>
      <Row style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        margin: "0 auto",
        marginTop: "2%",
        paddingBottom: "2%"
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
      history.push('/products')
    }}
    style={{
      width: "100px",
      margin: "0 auto",
      marginBottom: ".2%",
      opacity: "100%",
    }}
  >
    Store
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
