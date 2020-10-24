import React, { useState } from "react";

import axios from "axios";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { makeStyles } from "@material-ui/core/styles";
import styles from "../../adminDash/src/assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";
import SweetAlert from "react-bootstrap-sweetalert";
import Button from "../../adminDash/src/components/CustomButtons/Button";
import Card from "../../adminDash/src/components/Card/Card.js";
import CardBody from "../../adminDash/src/components/Card/CardBody.js";
import CardFooter from "../../adminDash/src/components/Card/CardFooter.js";
import CardAvatar from "../../adminDash/src/components/Card/CardAvatar";

import avatar from "../logoavatar.png";

const useStyles = makeStyles(styles);

const TeamCard = ({membersInfo}) => {

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

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  React.useEffect(() => {
    let id = setTimeout(function() {
      setCardAnimation("");
    }, 700);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.clearTimeout(id);
    };
  });

  const classes = useStyles();

    const { name, role } = membersInfo;

    return (
        <Card
        profile
        className={classes.customCardClass + " " + classes[cardAnimaton]}
        >
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
        <CardAvatar profile className={classes.cardAvatar}>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img src={avatar} alt="generic avatar with a mask for the rona" />
          </a>
        </CardAvatar>
        <CardBody profile>
          <h4 className={classes.cardTitle} style={{
              color: "#e0a72b"
          }}>{name}</h4>
            <h6 style={{
                color: "#523c0d"
            }}>{role}</h6>
        </CardBody>
        <CardFooter className={classes.justifyContentCenter}>
        <div style={{
          margin: "0 auto"
        }}>
          <Button color="warning" onClick={() => {
            setShow(true)
          }} round>
            Message
          </Button>
        </div>
        </CardFooter>
      </Card>
    )
}

export default TeamCard;