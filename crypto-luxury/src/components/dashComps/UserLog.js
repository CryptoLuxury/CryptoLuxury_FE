import React, { useState } from "react";
import axios from "axios";
import { Switch, Route, Redirect } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import AuthNavbar from "./AuthNavbar.js";
import Footer from "./Footer.js";

import routes from "./userRoutes.js";

import styles from "./authStyle.js";

import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import LockIcon from '@material-ui/icons/Lock';

// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
// import LockOutline from "@material-ui/icons/LockOutline";

// core components
import Container from "react-bootstrap/Container"
import GridContainer from "./GridContainer";
import GridItem from "./GridItem.js";
import CustomInput from "./CustomInput.js";
import Button from "./Button";
import Card from "./Card.js";
import CardBody from "./CardBody.js";
import CardHeader from "./CardHeader.js";
import CardFooter from "./CardFooter.js";

import register from "./register.jpeg";
import login from "./login.jpeg";
import lock from "./lock.jpeg";
import error from "./clint-mckoy.jpg";
import pricing from "./bg-pricing.jpeg";

const useStyles = makeStyles(styles);

export default function Pages(props) {

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: ""
  })

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
    <Container style={{
      marginTop: "5%",
      display: "flex",
      justifyContent: "center"
    }}>
      <h1 style={{
        paddingBottom: "10%"
      }}>Login</h1>
    </Container>

      <div>
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
                <CustomInput
                  labelText="Email"
                  name="email"
                  onChange={handleChange}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Face className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    )
                  }}
                />
                <CustomInput
                  labelText="Password"
                  name="password"
                  onChange={handleChange}
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <LockIcon className={classes.inputAdornmentIcon}>
                          lock_outline
                        </LockIcon>
                      </InputAdornment>
                    ),
                    type: "password",
                    autoComplete: "off"
                  }}
                />
              </CardBody>
              <CardFooter className={classes.justifyContentCenter}>
                <Button onClick={handleLogin} color="warning" simple size="lg" block>
                  Let{"'"}s Go
                </Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
          <Footer white />
        </div>
      </div>
  );
}
