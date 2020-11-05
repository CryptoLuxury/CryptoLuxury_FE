import React from "react";

import Card from "react-bootstrap/Card";
import { axiosWithAuthUser } from "../../../../utils/AxiosWithAuthUser";


import axios from "axios";
import Button from "../../components/CustomButtons/Button";
import SweetAlert from "react-bootstrap-sweetalert";
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/material-dashboard-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(styles);

const ContactTicket = ({ticketInfo}) => {

    const classes = useStyles();

    const { id, name, email, message } = ticketInfo;

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

    const handleDelete = (id) => {
        axiosWithAuthUser().delete(`/api/form/contact/${id}`)
        .then(res => {
          successAlert();
        })
        .catch(err => {
          errorAlert();
        })
      }

    return (
        <Card style={{ width: '18rem', margin: "1%" }}>
            <Card.Body>
            {alert}
                <Card.Title style={{textAlign: "center"}}>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{textAlign: "center"}}>{email}</Card.Subtitle>
                <Card.Text style={{textAlign: "center"}}>
                    {message}
                </Card.Text>
                <div style={{display: "flex", justifyContent: "center"}}>
                <Button color="danger" onClick={() => {
                    handleDelete(id);
                }}>Delete</Button>
                </div>
            </Card.Body>
            </Card>
    )
}

export default ContactTicket;