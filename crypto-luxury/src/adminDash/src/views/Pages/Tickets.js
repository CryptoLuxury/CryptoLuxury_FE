import React, { useState, useEffect } from "react";

import axios from "axios";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TicketTable from "../Tables/TicketTable";

import ContactTicket from "./ContactTicket";

import styles from "../../assets/jss/material-dashboard-pro-react/views/errorPageStyles.js";
import { SettingsBackupRestoreSharp } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function TicketsPage() {

  const classes = useStyles();
  const [ openTickets, setOpenTickets ] = useState([]);

  useEffect(() => {
    axios.get(`https://crypto-luxury.herokuapp.com/api/form/contact`)
    .then(res => {
      setOpenTickets([
        ...res.data
      ])
    })
  }, []);

  return (
    <Container>
      <Row style={{width: "100%", display : "flex", justifyContent: "center"}}>
        <h2 style={{textAlign: "center"}}>Manage Tickets</h2>
      </Row>
      <Row style={{display: "flex", flexFlow: "row nowrap", justifyContent: "center"}}>
        <Col style={{
          margin: "2%"
        }}>
        { openTickets.map(ticket => ( 
          <ContactTicket ticketInfo={ticket} key={ticket.id}/> 
      ))}
        </Col> 
        </Row>
    </Container>
  );
}
