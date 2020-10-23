import React, {useState} from "react";
import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Button from "../../components/CustomButtons/Button";
import styles from "../../assets/jss/material-dashboard-pro-react/views/errorPageStyles.js";

import Card from "react-bootstrap/Card";
import SweetAlert from "react-bootstrap-sweetalert";
const useStyles = makeStyles(styles);

const ContactTicket = ({ticketInfo}) => {

    const classes = useStyles();

    const { name,  message } = ticketInfo;
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
            You've closed this ticket!
          </SweetAlert>
        );
      };
    
      const errorAlert = () => {
        setAlert(
          <SweetAlert
            danger
            style={{ display: "block", marginTop: "80px" }}
            title="Oh No!"
            onConfirm={() => hideAlert()}
            onCancel={() => hideAlert()}
            confirmBtnCssClass={classes.button + " " + classes.success}
          >
            That's didn't work :( , if this consists, email Carl: sachscarl@gmail.com
          </SweetAlert>
        );
      };

    const handleDelete = () => {
        axios.delete(`https://crypto-luxury.herokuapp.com/api/form/devTicket/:{2}`, ticketInfo)
        .then(res => {
          alert();
        })
        .catch(err => {
          errorAlert();
        })
      }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {message}
                </Card.Text>
                <Button color="danger" onClick={handleDelete}>Delete</Button>
            </Card.Body>
            </Card>
    )
}

export default ContactTicket;