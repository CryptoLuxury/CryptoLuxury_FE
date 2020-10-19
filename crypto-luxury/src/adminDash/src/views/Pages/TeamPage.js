import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Container from "react-bootstrap/Container";
import TeamTable from "../Tables/TeamTable";

import styles from "../../assets/jss/material-dashboard-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(styles);

export default function TeamPage() {
  const classes = useStyles();
  return (
    <Container>
        <h3>Manage the Team</h3>
        <TeamTable />
    </Container>
  );
}
