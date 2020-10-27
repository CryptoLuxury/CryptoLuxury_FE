import React, {useState} from "react";

import axios from "axios";

import {useHistory} from "react-router-dom";

//reactstrap
import Container from "react-bootstrap/Container";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import LockIcon from '@material-ui/icons/Lock';

// @material-ui/icons
import Face from "@material-ui/icons/Face";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardFooter from "../../components/Card/CardFooter.js";

import styles from "../../assets/jss/material-dashboard-pro-react/views/loginPageStyle.js";

const useStyles = makeStyles(styles);

export default function LoginPage() {
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

  let history = useHistory();

  const [adminLogin, setAdminLogin] = useState({
    name: "",
    password: ""
  })

  const handleChange = (e) => {
    e.preventDefault();
    setAdminLogin({
      ...adminLogin,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post(`https://crypto-luxury.herokuapp.com/api/auth/loginadmin`, adminLogin)
    .then(res => {
      window.localStorage.setItem('token', res.data.token)
      window.localStorage.setItem('id', res.data.id)
      setTimeout(() => {
        history.push('/admin/dashboard')
      })
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  const classes = useStyles();
  return (
    <Container>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <form>
            <Card login className={classes[cardAnimaton]}>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="warning"
              >
                <h4 className={classes.cardTitle}>Log in</h4>
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText="Name"
                  name="name"
                  placeholder="Carl"
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
                <Button color="warning" simple size="lg" onClick={handleLogin} block>
                  Let{"'"}s Go
                </Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    </Container>
  );
}
