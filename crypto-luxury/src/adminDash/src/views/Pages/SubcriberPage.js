import React, { useState, useEffect } from "react";

import { axiosWithAuthUser } from "../../../../utils/AxiosWithAuthUser";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import SubscriberInfo from "./SubscriberInfo";

import styles from "../../assets/jss/material-dashboard-pro-react/views/errorPageStyles.js";
import { SettingsBackupRestoreSharp } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function TicketsPage() {

  const classes = useStyles();
  const [ subscribers, setSubscribers ] = useState([]);

  useEffect(() => {
    axiosWithAuthUser().get(`/api/form/enlist`)
    .then(res => {
      setSubscribers([
        ...res.data
      ])
    })
  }, []);

  return (
    <Container>
      <Row style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "2.5%",
      }}>
        <h2 style={{textAlign: "center"}}>Manage Subscriber Info</h2>
      </Row>
      <Row>
        <div>
        { subscribers.map(subscriber => ( 
          <SubscriberInfo subscriberInfo={subscriber} key={subscriber.id}/> 
      ))}
        </div>
      </Row>
    </Container>
  );
}