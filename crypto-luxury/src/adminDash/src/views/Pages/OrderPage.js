import React from "react";

//reactstrap
import Container from "react-bootstrap/Container";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import OrderTables from "../Tables/OrderTable";

import styles from "../../assets/jss/material-dashboard-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(styles);

export default function OrderPage() {
  const classes = useStyles();
  return (
    <Container>
        <h2>All Orders</h2>
        <OrderTables />
    </Container>
  );
}
