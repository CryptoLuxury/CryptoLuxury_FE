import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Nav from "./Nav";

import { axiosWithAuthUser } from "../utils/AxiosWithAuthUser";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Footer from "./dashComps/Footer.js";

import styles from "./dashComps/authStyle.js";

import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import LockIcon from '@material-ui/icons/Lock';

// @material-ui/icons
import Face from "@material-ui/icons/Face";

// core components
import Container from "react-bootstrap/Container"
import GridContainer from "./dashComps/GridContainer";
import GridItem from "./dashComps/GridItem.js";
import CustomInput from "./dashComps/CustomInput.js";
import Button from "./dashComps/Button";
import Card from "./dashComps/Card.js";
import CardBody from "./dashComps/CardBody.js";
import CardHeader from "./dashComps/CardHeader.js";
import CardFooter from "./dashComps/CardFooter.js";

//modal
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

const useStyles = makeStyles(styles);

export default function Pages(props) {

  let history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userLogin, setUserLogin] = useState({
    name: "",
    email: "",
    password: ""
  })

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
    axiosWithAuthUser().post(`https://crypto-luxury.herokuapp.com/api/form/contact`, contact)
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

  const handleChange = (e) => {
    e.preventDefault();
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post(`https://crypto-luxury.herokuapp.com/api/users/login`, userLogin)
    .then(res => {
      alert("SUCCESS")
      window.localStorage.setItem('token', res.data.token)
      window.localStorage.setItem('id', res.data.id)
      setTimeout(() => {
        history.push('/cart')
      })
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }
  // ref for the wrapper div
  const wrapper = React.createRef();
  // styles
  const classes = useStyles();
  React.useEffect(() => {
    document.body.style.overflow = "unset";
    // Specify how to clean up after this effect:
    return function cleanup() {};
  });
  return (
    <div>
      <Nav />
      <Container>
        <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <form>
            <Card>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="warning"
              >
                <h4 className={classes.cardTitle}>Log in</h4>
              </CardHeader>
              <CardBody>
              <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" name="email" onChange={handleChange} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
            </Form.Group>
              </Form>
              </CardBody>
              <CardFooter className={classes.justifyContentCenter}>
                <Button onClick={handleLogin} color="warning" simple size="lg" block>
                  Let{"'"}s Go
                </Button>
                <Button onClick={() => {
                  history.push('register')
                }} color="warning" simple size="lg" block>
                or Register
              </Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
          <Footer white />
        </Container>
      </div>
  );
}
