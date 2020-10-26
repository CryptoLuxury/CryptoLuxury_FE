/*eslint-disable*/
import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import cx from "classnames";
import Button from "./Button";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { Col, Row } from "react-bootstrap";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import styles from "./footerStyle.js";

const useStyles = makeStyles(styles);

export default function Footer(props) {

  let history = useHistory();

  const classes = useStyles();
  const { fluid, white, rtlActive } = props;
  var container = cx({
    [classes.container]: !fluid,
    [classes.containerFluid]: fluid,
    [classes.whiteColor]: white
  });
  var anchor =
    classes.a +
    cx({
      [" " + classes.whiteColor]: white
    });
  var block = cx({
    [classes.block]: true,
    [classes.whiteColor]: white
  });
  return (
    <div>
      <Row style={{
        height: "100px",
        backgroundColor: "#121212",
        display: "flex",
        flexFlow: "row nowrap",
        width: "100%"
      }}>
        <Col style={{backgroundColor: "lightgrey", width: "100%", display: "flex", flexDirection: "column"}}>
          <Row><h3>Reach out to us!</h3></Row>
          <Row>
          <Button justIcon onClick={() => {
            window.open('www.twitter.com')
          }} color="twitter">
          <TwitterIcon />
        </Button>
        <Button justIcon onClick={() => {
          window.open('www.facebook.com')
        }} color="facebook">
        <FacebookIcon />
        </Button>
        <Button justIcon onClick={() => {
          window.open('www.linkedin.com')
        }} color="facebook">
        <LinkedInIcon />
        </Button>
        </Row>
        </Col>
        <Col style={{backgroundColor: "grey", width: "100%"}}>
          one
        </Col>
      </Row>
      </div>
  );
}

Footer.propTypes = {
  fluid: PropTypes.bool,
  white: PropTypes.bool,
  rtlActive: PropTypes.bool
};
