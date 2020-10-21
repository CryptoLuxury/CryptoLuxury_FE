import React, {useState, useEffect} from "react";

import axios from "axios";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import SweetAlert from "react-bootstrap-sweetalert";

// core components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row"
import DevTicket from "./DevTicket";

import styles from "../../assets/jss/material-dashboard-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(styles);

export default function DevTicketsPage() {

  const classes = useStyles();
  const [ openDevTickets, setOpenDevTickets ] = useState([]);
  const [alert, setAlert] = React.useState(null);
  const hideAlert = () => {
    setAlert(null);
  }

  useEffect(() => {
    axios.get(`https://crypto-luxury.herokuapp.com/api/form/devTicket/`)
    .then(res => {
      setOpenDevTickets([
        ...res.data
      ])
    })
  }, []);


  return (
    <Container>
    {alert}
      <Row>
        <h2>Manage Dev Tickets</h2>
      </Row>
      <Row>
        <div style={{
          margin: "2%"
        }}>
        { openDevTickets.map(ticket => ( 
          <DevTicket ticketInfo={ticket} key={ticket.id}/> 
      ))}
        </div>
      </Row>
    </Container>
  );
}
