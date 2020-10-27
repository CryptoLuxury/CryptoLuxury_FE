/*eslint-disable*/
import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import cx from "classnames";
import Button from "./Button";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

import { Container, Col, Row } from "react-bootstrap";



export default function Footer() {

  let history = useHistory();

  return (
    <div style={{
      width: "100%",
      backgroundColor: "darkgrey",
      display: "flex",
      justifyContent: "space-evenly"
    }}>
      <Row>
        <Button onClick={() => {
          window.open('https://www.instagram.com/collectibles_guru/')
        }}><InstagramIcon /></Button>
      </Row>
    </div>
  );
}
