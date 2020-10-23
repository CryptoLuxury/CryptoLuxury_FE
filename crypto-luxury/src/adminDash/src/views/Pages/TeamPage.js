import React, { useState, useEffect } from "react";

import axios from "axios";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import TeamCard from "./TeamCard";

import Button from "../../components/CustomButtons/Button";

import avatar from "./avatar.png";

import styles from "../../assets/jss/material-dashboard-pro-react/views/errorPageStyles.js";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import SweetAlert from "react-bootstrap-sweetalert";

const useStyles = makeStyles(styles);

export default function TeamPage() {

  const [show, setShow] = useState(false);
  const [members, setMembers] = useState({
    name: "",
    role: ""
  });
  const [ team, setTeam ] = useState([]);
  const [devTicket, setDevTicket] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [devTicketModal, setDevTicketModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const classes = useStyles();
  const [alert, setAlert] = React.useState(null);
  const hideAlert = () => {
    setAlert(null);
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

  useEffect(() => {
    axios.get(`https://crypto-luxury.herokuapp.com/api/team`)
    .then(res => {
      setTeam([
        ...res.data
      ])
    })
  }, []);

  const successAlert = () => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "100px" }}
        title="New Member!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        Welcome them to the Team!
      </SweetAlert>
    );
  };
  const successAlertDev = () => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "100px" }}
        title="Success!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        Your Dev Ticket has been submitted!
      </SweetAlert>
    );
  };
  const errorAlert = () => {
    setAlert(
      <SweetAlert
        danger
        style={{ display: "block", marginTop: "80px" }}
        title="Oh No!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        That didn't work!  Try again or reach out to Carl!
      </SweetAlert>
    );
  };

  const handleMembersChange = (e) => {
    e.preventDefault();
    setMembers({
      ...members,
      [e.target.name]: e.target.value
    })
  }

    const handleMemberSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://crypto-luxury.herokuapp.com/api/team`, members)
    .then(res => {
      successAlert();
    })
    .catch(err => {
      errorAlert();
    })
  }

  const handleDevChange = (e) => {
    e.preventDefault();
    setDevTicket({
      ...devTicket,
      [e.target.name]: e.target.value
    })
  }

  const handleDevSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://crypto-luxury.herokuapp.com/api/form/devTicket`, devTicket)
    .then(res => {
      successAlertDev();
      setTimeout(() => {
        setDevTicketModal(false)
      }, 1000)
    })
    .catch(err => {
      errorAlert()
    })
  }


  return (
    <Container>
    {alert}
                  <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>New Member</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <Form>
                  <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Name..." name="name" onChange={handleMembersChange} />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Role</Form.Label>
                  <Form.Control type="text" placeholder="Developer" name="role" onChange={handleMembersChange} />
                  </Form.Group>
                  </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button color="warning" onClick={handleMemberSubmit}>
                      LETS GOOO!
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>New Dev Ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name..." name="name" onChange={handleDevChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="example@example.com" name="email" onChange={handleDevChange} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Message</Form.Label>
                <Form.Control type="text-area" placeholder="What's the issue you're dealing with?" name="message" onChange={handleDevChange} />
                </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="transparent" onClick={handleClose}>
                    Close
                  </Button>
                  <Button color="warning" onClick={handleDevSubmit}>
                    LETS GOOO!
                  </Button>
                </Modal.Footer>
              </Modal>
        <Row>
        <h3>Manage the Team</h3>
        </Row>
        <Row>
        <Row>
          <Col style={{
            marginTop: "2%",
            marginBottom: "2%"
          }}>
            <Button rounded color="warning" onClick={handleShow}>Add New Member</Button>
          </Col>
          <Col style={{
            marginTop: "2%",
            marginBottom: "2%"
          }}>
            <Button rounded color="warning" onClick={handleShow}>Submit Dev Ticket</Button>
          </Col>
        </Row>
        </Row>
        <Col style={{
          marginTop: "5%"
        }}>
            <Row style={{
              marginBottom: "7.5%"
            }}>
            { team.map(member => ( 
              <TeamCard membersInfo={member} key={member.id}/> 
              ))}
            </Row>
        </Col>
    </Container>
  );
}
