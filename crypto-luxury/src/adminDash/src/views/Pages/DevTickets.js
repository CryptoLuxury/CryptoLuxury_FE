import React, {useState, useEffect} from "react";

import axios from "axios";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import DevTicket from "./DevTicket";

import styles from "../../assets/jss/material-dashboard-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(styles);

export default function DevTicketsPage() {

  const classes = useStyles();
  const [ openDevTickets, setOpenDevTickets ] = useState([]);

  useEffect(() => {
    axios.get(`https://crypto-luxury.herokuapp.com/api/form/contact`)
    .then(res => {
      setOpenDevTickets([
        ...res.data
      ])
    })
  }, []);
  return (
    <Container>
      <Row>
        <h2>Manage Dev Tickets</h2>
      </Row>
      <Row>
        <div>
        { openDevTickets.map(ticket => ( 
          <DevTicket ticketInfo={ticket} key={ticket.id}/> 
      ))}
        </div>
      </Row>
    </Container>
  );
}
