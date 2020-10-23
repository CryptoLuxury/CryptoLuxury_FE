import React, {useState} from "react";

import axios from "axios";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Footer from "./dashComps/Footer";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Navbar.css"

import { useHistory } from "react-router-dom";

import Marble from "./Marble.png";

import TopSection from './TopSection';
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import Navbar from "react-bootstrap/Navbar";
import GridContainer from "./dashComps/GridContainer";
import GridItem from "./dashComps/GridItem";
import Button from "./dashComps/Button";
import Card from "./dashComps/Card.js";
import CardBody from "./dashComps/CardBody.js";
import AccountIcon from '@material-ui/icons/AccountBalanceWallet';
import Timeline from "./dashComps/Timeline";

import Testimonies from "./Testimonies";

//modal
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import SweetAlert from "react-bootstrap-sweetalert";
import { makeStyles } from "@material-ui/core/styles";

import styles from "./dashComps/dashboardStyle";

const useStyles = makeStyles(styles);

const stories = [
  {
    // First story
    inverted: true,
    badgeColor: "warning",
    badgeIcon: AccountIcon,
    title: "PSA Rated",
    titleColor: "warning",
    body: (
      <Slide right>
      <p>
        Wifey made the best Father{"'"}s Day meal ever. So thankful so happy so
        blessed. Thank you for making my family We just had fun with the
        “future” theme !!! It was a fun night all together ... The always rude
        Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in
        downtown.
      </p>
      </Slide>
    ),
    footer: (
      <Button color="warning" style={{
        margin: "0 auto",
        marginTop: "4%",
        alignSelf: "center"
      }}>View Cards</Button>
    )
  },
  {
    // Second story
    badgeColor: "warning",
    badgeIcon: AccountIcon,
    title: "Luxury",
    titleColor: "warning",
    body: (
      <Slide left>
      <p>
        Wifey made the best Father{"'"}s Day meal ever. So thankful so happy so
        blessed. Thank you for making my family We just had fun with the
        “future” theme !!! It was a fun night all together ... The always rude
        Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in
        downtown.
      </p>
      </Slide>
    ),
    footer: (
      <Button color="warning" style={{
        margin: "0 auto",
        marginTop: "4%",
        alignSelf: "center"
      }}>View Watches</Button>
    )
  },
  {
    // Third story
    inverted: true,
    badgeColor: "warning",
    badgeIcon: AccountIcon,
    title: "Vaulting",
    titleColor: "warning",
    body: (
      <div>
      <Slide right>
        <p>
          Called I Miss the Old Kanye That’s all it was Kanye And I love you
          like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown
          LA 11:10PM
        </p>
        </Slide>
        <Slide right>
        <p>
          What if Kanye made a song about Kanye Royère doesn{"'"}t make a Polar
          bear bed but the Polar bear couch is my favorite piece of furniture we
          own It wasn’t any Kanyes Set on his goals Kanye
        </p>
        </Slide>
      </div>
    ),
    footer: (
      <Button color="warning" style={{
        margin: "0 auto",
        marginTop: "4%",
        alignSelf: "center"
      }}>Learn More</Button>
    )
  },
  {
    // Fourth story
    badgeColor: "warning",
    badgeIcon: AccountIcon,
    title: "White Glove",
    titleColor: "warning",
    body: (
      <Slide left>
      <p>
        Wifey made the best Father{"'"}s Day meal ever. So thankful so happy so
        blessed. Thank you for making my family We just had fun with the
        “future” theme !!! It was a fun night all together ... The always rude
        Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in
        downtown.
      </p>
      </Slide>
    ),
    footer: (
      <Button color="warning" style={{
        margin: "0 auto",
        marginTop: "4%",
        alignSelf: "center"
      }}>Learn More</Button>
    )
  }
];


const LandingPage = () => {

    const classes = useStyles();
    let history = useHistory();
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
            history.push("/team")
        }} color="warning" style={{
            width: "100px"
        }}>Team</Button>
        </Col>
        <Col>
        <Button onClick={() => {
            history.push("/products")
        }} color="warning" style={{
            width: "100px"
        }}>Products</Button>
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
            <div><TopSection /></div>
            <Container>
            <Row xs={12}>
              <Col>
              <Card plain>
                <CardBody plain>
                  <Timeline stories={stories} />
                </CardBody>
              </Card>
              </Col>
            </Row>
          </Container>
          <div>
              <Testimonies />
          </div>
          <div>
              <Footer />
          </div>
        </div>
    );
};

export default LandingPage;