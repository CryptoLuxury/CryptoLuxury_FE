/*eslint-disable*/
import React from "react";
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

  // type validation
  const [required, setrequired] = React.useState("");
  const [requiredState, setrequiredState] = React.useState("");
  const [typeEmail, settypeEmail] = React.useState("");
  const [typeEmailState, settypeEmailState] = React.useState("");
  const [number, setnumber] = React.useState("");
  const [numberState, setnumberState] = React.useState("");
  const [url, seturl] = React.useState("");
  const [urlState, seturlState] = React.useState("");
  const [equalTo, setequalTo] = React.useState("");
  const [whichEqualTo, setwhichEqualTo] = React.useState("");
  const [equalToState, setequalToState] = React.useState("");

  // function that returns true if value is email, false otherwise
  const verifyEmail = value => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };
  // function that verifies if a string has a given length or not
  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };
  // function that verifies if value contains only numbers
  const verifyNumber = value => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };
  // verifies if value is a valid URL
  const verifyUrl = value => {
    try {
      new URL(value);
      return true;
    } catch (_) {
      return false;
    }
  };

  const typeClick = () => {
    if (requiredState === "") {
      setrequiredState("error");
    }
    if (typeEmailState === "") {
      settypeEmailState("error");
    }
    if (numberState === "") {
      setnumberState("error");
    }
    if (urlState === "") {
      seturlState("error");
    }
    if (equalToState === "") {
      setequalToState("error");
    }
  };

  const classes = useStyles();
  return (
    <GridItem xs={12} sm={12} md={12}>
    <Card>
      <CardHeader color="rose" text>
        <CardText color="rose">
          <h4 className={classes.cardTitle}>Form Elements</h4>
        </CardText>
      </CardHeader>
      <CardBody>
        <form>
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <FormLabel className={classes.labelHorizontal}>
                With Help
              </FormLabel>
            </GridItem>
            <GridItem xs={12} sm={10}>
              <CustomInput
                id="help-text"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "text"
                }}
                helpText="A block of help text that breaks onto a new line."
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <FormLabel className={classes.labelHorizontal}>
                Password
              </FormLabel>
            </GridItem>
            <GridItem xs={12} sm={10}>
              <CustomInput
                id="pass"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "password",
                  autoComplete: "off"
                }}
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <FormLabel className={classes.labelHorizontal}>
                Placeholder
              </FormLabel>
            </GridItem>
            <GridItem xs={12} sm={10}>
              <CustomInput
                id="placeholder"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  placeholder: "placeholder"
                }}
              />
            </GridItem>
          </GridContainer>
        </form>
      </CardBody>
    </Card>
  </GridItem>
  );
}
