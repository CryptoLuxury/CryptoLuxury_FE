import React, {useEffect, useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Footer from "./dashComps/Footer";

import SweetAlert from "react-bootstrap-sweetalert";

import { makeStyles } from "@material-ui/core/styles";

import Nav from "./Nav";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import TeamCardTwo from "./dashComps/TeamCardTwo";

import styles from "./dashComps/lockScreenPageStyle.js";

const useStyles = makeStyles(styles);

const TeamPage = () => {

  const [devTicketModal, setDevTicketModal] = useState(false);
  const [devTicket, setDevTicket] = useState({
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
        title="Success!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        You've submitted a developer ticket!
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
        That's not supposed to happen :(
      </SweetAlert>
    );
  };

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
        <Nav />
    <Container>
    <Row style={{
    }}>
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
            color: "#523c0d"
        }}>Meet our Team</h2>
        <h5 style={{
            textAlign: "center",
            marginTop: "2%",
            color: "#e0a72b"
        }}>We at Crypto Luxury are committed to bringing you the highest-quality service to match our high-quality products and prices.  Meet the people responsible.</h5>
        </div>
    </Row>
    <Col style={{
      marginTop: "5%"
    }}>
        <Row style={{
          marginBottom: "7.5%"
        }}>
        { team.map(member => ( 
          <TeamCardTwo membersInfo={member} key={member.id}/> 
          ))}
        </Row>
    </Col>
    </Container>
        <Footer />
</div>
    )
}

export default TeamPage;