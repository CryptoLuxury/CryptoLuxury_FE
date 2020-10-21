import React, { useState } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardAvatar from "../../components/Card/CardAvatar";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";

import Button from "../../components/CustomButtons/Button";

import avatar from "./avatar.png";

import styles from "../../assets/jss/material-dashboard-pro-react/views/errorPageStyles.js";
import Modal from "react-bootstrap/Modal";

const useStyles = makeStyles(styles);

export default function TeamPage() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const classes = useStyles();

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  React.useEffect(() => {
    let id = setTimeout(function() {
      setCardAnimation("");
    }, 700);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.clearTimeout(id);
    };
  });
  return (
    <Container>
                  <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>New Member</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button color="warning" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
        <Row>
        <h3>Manage the Team</h3>
        </Row>
        <Row>
          <Col style={{
            marginTop: "2%",
            marginBottom: "2%"
          }}>
            <Button rounded color="warning" onClick={handleShow}>Add New Member</Button>
          </Col>
        </Row>
        <Row>
            <Card
            profile
            className={classes.customCardClass + " " + classes[cardAnimaton]}
          >
            <CardAvatar profile className={classes.cardAvatar}>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="generic avatar with a mask for the rona" />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h4 className={classes.cardTitle} style={{
                  color: "#e0a72b"
              }}>Carl Sachs</h4>
                <h6 style={{
                    color: "#523c0d"
                }}>Developer</h6>
            </CardBody>
            <CardFooter className={classes.justifyContentCenter}>
            <div style={{
              margin: "0 auto"
            }}>
              <Button color="warning" round>
                Message
              </Button>
            </div>
            </CardFooter>
          </Card>
          <Card
          profile
          className={classes.customCardClass + " " + classes[cardAnimaton]}
        >
          <CardAvatar profile className={classes.cardAvatar}>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              <img src={avatar} alt="generic avatar with a mask for the rona" />
            </a>
          </CardAvatar>
          <CardBody profile>
            <h4 className={classes.cardTitle} style={{
                color: "#e0a72b"
            }}>Will Ryan</h4>
              <h6 style={{
                  color: "#523c0d"
              }}>Developer</h6>
          </CardBody>
          <CardFooter className={classes.justifyContentCenter}>
          <div style={{
            margin: "0 auto"
          }}>
            <Button color="warning" round>
              Message
            </Button>
          </div>
          </CardFooter>
        </Card>
        <Card
        profile
        className={classes.customCardClass + " " + classes[cardAnimaton]}
        >
        <CardAvatar profile className={classes.cardAvatar}>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img src={avatar} alt="generic avatar with a mask for the rona" />
          </a>
        </CardAvatar>
        <CardBody profile>
          <h4 className={classes.cardTitle} style={{
              color: "#e0a72b"
          }}>Neko</h4>
            <h6 style={{
                color: "#523c0d"
            }}>Co-Founder</h6>
        </CardBody>
        <CardFooter className={classes.justifyContentCenter}>
        <div style={{
          margin: "0 auto"
        }}>
          <Button color="warning" round>
            Message
          </Button>
        </div>
        </CardFooter>
        </Card>
            </Row>
    </Container>
  );
}
