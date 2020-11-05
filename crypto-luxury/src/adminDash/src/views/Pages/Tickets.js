import React, { useState, useEffect } from "react";

import { axiosWithAuthUser } from "../../../../utils/AxiosWithAuthUser";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ContactTicket from "./ContactTicket";

import styles from "../../assets/jss/material-dashboard-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(styles);

export default function TicketsPage() {

  const classes = useStyles();
  const [ openTickets, setOpenTickets ] = useState([]);

  useEffect(() => {
    axiosWithAuthUser().get(`/api/form/contact`)
    .then(res => {
      setOpenTickets([
        ...res.data
      ])
    })
  }, []);

  return (
    <Container>
      <Row style={{width: "100%", display : "flex", justifyContent: "center"}}>
        <h2 style={{textAlign: "center", color: "#523c0d"}}>Manage Tickets</h2>
      </Row>
      <Row style={{display: "flex", flexFlow: "row wrap", justifyContent: "center"}}>
        { openTickets.map(ticket => ( 
          <ContactTicket ticketInfo={ticket} key={ticket.id}/> 
      ))}
        </Row>
    </Container>
  );
}
