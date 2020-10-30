import React, {useState} from "react";

import axios from "axios";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Footer from "./dashComps/Footer";

import "./LandingPage.css";

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


const LandingPage = () => {

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