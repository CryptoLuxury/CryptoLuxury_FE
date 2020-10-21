import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";
import GridContainer from "./dashComps/GridContainer";
import GridItem from "./dashComps/GridItem";
import Button from "./dashComps/Button";

//card
import Card from "./dashComps/Card.js";
import CardAvatar from "./dashComps/CardAvatar";
import CardBody from "./dashComps/CardBody";
import CustomInput from "./dashComps/CustomInput";
import CardFooter from "./dashComps/CardFooter"

import avatar from "./avatar.png"

import styles from "./dashComps/lockScreenPageStyle.js";

const useStyles = makeStyles(styles);

const TeamPage = () => {

  let history = useHistory();

    const classes = useStyles();
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

    return (
        <Container>
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
        Crypto Luxury
        </Navbar.Brand>
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
        <Dropdown>
        <Dropdown.Toggle variant="dark"  style={{
            width: "100px",
            marginTop: "4%"
        }} 
        id="dropdown-basic">
            Account
        </Dropdown.Toggle>
    
        <Dropdown.Menu>
            <Dropdown.Item href="/cart">Your Cart</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/contact">Contact Us</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="/login">Login</Dropdown.Item>
            <Dropdown.Item href="/register">Register</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        </GridItem>
        </GridContainer>
    </Navbar>
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
    <Row>
    <Card
    profile
    className={classes.customCardClass + " " + classes[cardAnimaton]}
  >
    <CardAvatar profile className={classes.cardAvatar}>
      <a href="#pablo" onClick={e => e.preventDefault()}>
        <img src={avatar} alt="team member Carl sachs" />
      </a>
    </CardAvatar>
    <CardBody profile>
      <h4 className={classes.cardTitle} style={{
          color: "#e0a72b"
      }}>Carl Sachs</h4>
        <h6 style={{
            color: "#523c0d"
        }}>Developer</h6>
    </CardBody>
    <CardFooter className={classes.justifyContentCenter}>
      <Button color="warning" round>
        Unlock
      </Button>
    </CardFooter>
  </Card>
  <Card
  profile
  className={classes.customCardClass + " " + classes[cardAnimaton]}
>
  <CardAvatar profile className={classes.cardAvatar}>
    <a href="#pablo" onClick={e => e.preventDefault()}>
      <img src={avatar} alt="team member Carl sachs" />
    </a>
  </CardAvatar>
  <CardBody profile>
    <h4 className={classes.cardTitle} style={{
        color: "#e0a72b"
    }}>Carl Sachs</h4>
      <h6 style={{
          color: "#523c0d"
      }}>Developer</h6>
  </CardBody>
  <CardFooter className={classes.justifyContentCenter}>
    <Button color="warning" round>
      Unlock
    </Button>
  </CardFooter>
</Card>
<Card
profile
className={classes.customCardClass + " " + classes[cardAnimaton]}
>
<CardAvatar profile className={classes.cardAvatar}>
  <a href="#pablo" onClick={e => e.preventDefault()}>
    <img src={avatar} alt="team member Carl sachs" />
  </a>
</CardAvatar>
<CardBody profile>
  <h4 className={classes.cardTitle} style={{
      color: "#e0a72b"
  }}>Carl Sachs</h4>
    <h6 style={{
        color: "#523c0d"
    }}>Developer</h6>
</CardBody>
<CardFooter className={classes.justifyContentCenter}>
  <Button color="warning" round>
    Unlock
  </Button>
</CardFooter>
</Card>
    </Row>
</Container>
    )
}

export default TeamPage;