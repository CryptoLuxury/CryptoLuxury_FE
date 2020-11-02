import React, {useState, useEffect} from "react";

import axios from "axios";
import { axiosWithAuthUser } from "../../../../utils/AxiosWithAuthUser";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import SweetAlert from "react-bootstrap-sweetalert";

// core components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
    axiosWithAuthUser().get(`/api/form/devTicket/`)
    .then(res => {
      setOpenDevTickets([
        ...res.data
      ])
    })
  }, []);


  return (
    <Container>
    {alert}
      <Row style={{width: "100%", display : "flex", justifyContent: "center"}}>
        <h2 style={{textAlign: "center", color: "#523c0d"}}>Manage Dev Tickets</h2>
      </Row>
      <Row style={{display: "flex", flexFlow: "row nowrap", justifyContent: "center"}}>
        <Col style={{
          margin: "2%"
        }}>
        { openDevTickets.map(ticket => ( 
          <DevTicket ticketInfo={ticket} key={ticket.id}/> 
      ))}
        </Col>
      </Row>
    </Container>
  );
}
