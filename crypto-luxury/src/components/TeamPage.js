import React, {useEffect, useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Footer from "./dashComps/Footer";
import { makeStyles } from "@material-ui/core/styles";

//modal
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import GridContainer from "./dashComps/GridContainer";
import GridItem from "./dashComps/GridItem";
import Button from "./dashComps/Button";

import TeamCard from "./dashComps/TeamCardTwo";

import styles from "./dashComps/lockScreenPageStyle.js";

const useStyles = makeStyles(styles);

const TeamPage = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let history = useHistory();

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

    const classes = useStyles();
    const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
    const [team, setTeam ] = useState([]);

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
        <div>
        <Navbar.Brand href="/" style={{color: "#e39c0e"}}>
        Crypto Luxury
        </Navbar.Brand>
        </div>
        <div>
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
            history.push("/products")
        }} color="warning" style={{
            width: "100px"
        }}>Products</Button>
        </GridItem>
        <GridItem>
        <Button onClick={handleShow} color="warning" style={{
          width: "100px"
      }}>Contact</Button>
        </GridItem>
        </GridContainer>
        </div>
        </Container>
        
    </Navbar>
    <Container>
    <Row>
        <div style={{
            width: "70%",
            display: "flex",
            justifyContent: "center",
            flexFlow: "column nowrap",
            margin: "0 auto"
        }}>
        <h2 style={{
            textAlign: "center",
            marginTop: "2%",
            color: "#c9af4f"
        }}>Meet our Team</h2>
        <h5 style={{
            textAlign: "center",
            marginTop: "2%",
            color: "#c9af4f"
        }}>We at Crypto Luxury are committed to bringing you the highest-quality service to match our high-quality products and prices.  Meet the people responsible.</h5>
        </div>
    </Row>
    <Row style={{
      marginTop: "3%",
      marginBottom: "3%"
    }}>
        <Col>
        { team.map(member => ( 
          <TeamCard membersInfo={member} key={member.id}/> 
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

export default TeamPage;