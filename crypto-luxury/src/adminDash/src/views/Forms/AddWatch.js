/*eslint-disable*/
import React, { useState } from "react";

import axios from "axios";

//styling
import Container from "react-bootstrap/Container";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";

// material ui icons
import MailOutline from "@material-ui/icons/MailOutline";
import Contacts from "@material-ui/icons/Contacts";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardText from "../../components/Card/CardText.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

// style for this view
import styles from "../../assets/jss/material-dashboard-pro-react/views/validationFormsStyle.js";

const useStyles = makeStyles(styles);

export default function ValidationForms() {

  // useState
  const [watchProduct, setWatchProduct] = useState({
    title: "",
    description: "",
    price: null,
  })

  const classes = useStyles();

  const handleChange = (e) => {
    e.preventDefault();
    setWatchOroduct({
      ...watchProduct,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(``, watchProduct)
    .then(res => {
      console.log("######", watchProduct)
    })
    .catch(err => {
      console.log(err, "There was an error")
    })
  }

  return (
    <Container>
      <form>
      <div style={{
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignSelf: "center",
        width: "60%",
        marginLeft: "7.5%",
        marginBottom: "3%"
      }}>
        <label>Title</label>
        <input placeholder = "title" name="title" type="text" />
      </div>
      <div style={{
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignSelf: "center",
        width: "60%",
        marginLeft: "7.5%",
        marginBottom: "3%"
      }}>
        <label>Description</label>
        <input placeholder = "Price" name="description" type="text-field" />
      </div>
      <div style={{
        display: "flex",
        flexFlow: "column nowrap",
        justifyContent: "center",
        alignSelf: "center",
        width: "60%",
        marginLeft: "7.5%",
        marginBottom: "3%"
      }}>
        <label>Price</label>
        <input type='number' step="1" placeholder='Price Value' />
      </div>
      </form>
    </Container>
  );
}