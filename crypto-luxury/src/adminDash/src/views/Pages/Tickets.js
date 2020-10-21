import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Container from "react-bootstrap/Container";
import TicketTable from "../Tables/TicketTable";

import styles from "../../assets/jss/material-dashboard-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(styles);

export default function TicketsPage() {
  const classes = useStyles();
  return (
    <Container>
        <h3>Open Help Tickets</h3>
        <TicketTable />
    </Container>
  );
}
