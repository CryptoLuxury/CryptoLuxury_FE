import React, {useState} from "react";

import axios from "axios";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Footer from "./dashComps/Footer";

import Nav from "./Nav";

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
        <div style={{
          display: "flex",
          flexDirection: "column"
        }}>
        {alert}
        <Nav />
            <div><TopSection /></div>
        <div>
        <Footer />
        </div>
        </div>
    );
};

export default LandingPage;