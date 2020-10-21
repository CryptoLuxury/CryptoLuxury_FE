import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

import { Link } from "react-dom";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";
import Container from "react-bootstrap/Container";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

import Form from "react-bootstrap/Form";

// @material-ui/icons
// import ContentCopy from "@material-ui/icons/ContentCopy";
import Store from "@material-ui/icons/Store";
// import InfoOutline from "@material-ui/icons/InfoOutline";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Refresh from "@material-ui/icons/Refresh";
import Edit from "@material-ui/icons/Edit";
import Place from "@material-ui/icons/Place";
import ArtTrack from "@material-ui/icons/ArtTrack";
import Language from "@material-ui/icons/Language";
import BlurOnIcon from '@material-ui/icons/BlurOn';
import TaskIcon from '@material-ui/icons/AssignmentTurnedIn';
import AccountIcon from '@material-ui/icons/AccountBalanceWallet';
import MoneyIcon from '@material-ui/icons/LocalAtm';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CodeIcon from '@material-ui/icons/Code';
import FlightIcon from '@material-ui/icons/FlightTakeoff';
import ViewIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import CameraIcon from '@material-ui/icons/Camera';

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Danger from "../../components/Typography/Danger.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import SweetAlert from "react-bootstrap-sweetalert";

//undraws
import Mailbox from "./mailbox.svg";
import Sales from "./Sales.svg";
import Cube from "./cube.svg";
import Blastoise from "./blastoise.png";

import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";

import styles from "../../assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";
import Success from "../../components/Typography/Success.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const BASE_URL = process.env.REACT_APP_BASE_URL;

export default function Dashboard() {

  let history = useHistory();
  
  const classes = useStyles();
  const [devTicketModal, setDevTicketModal] = useState(false);
  const [devTicket, setDevTicket] = useState({
    name: "",
    email: "",
    message: ""
  })
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
        You've submitted a ticket!
      </SweetAlert>
    );
  };

  const errorAlert = () => {
    setAlert(
      <SweetAlert
        danger
        style={{ display: "block", marginTop: "80px" }}
        title="Error!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        That's not supposed to happen :(
      </SweetAlert>
    );
  };

  const ComingSoon = () => {
    setAlert(
      <SweetAlert
        danger
        style={{ display: "block", marginTop: "80px" }}
        title="Not Yet!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        The "New Campaign" feature is in development
      </SweetAlert>
    );
  };

  const handleDevChange = (e) => {
    e.preventDefault();
    setDevTicket({
      ...devTicket,
      [e.target.name]: e.target.value
    })
  }

  const handleDevTicketSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://crypto-luxury.herokuapp.com/api/form/devTicket`, devTicket)
    .then(res => {
      successAlert();
      setTimeout(() => {
        setDevTicketModal(false)
      }, 1000)
    })
    .catch(err => {
      errorAlert()
    })
  }

  return (
    <div>
    {alert}
      <div>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={devTicketModal}
          transition={Transition}
          keepMounted
          onClose={() => setDevTicketModal(false)}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description"
        >
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <Button
              justIcon
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="transparent"
              onClick={() => setDevTicketModal(false)}
            >
              <Close className={classes.modalClose} />
            </Button>
            <h4 className={classes.modalTitle}>Submit a Dev Ticket</h4>
          </DialogTitle>
          <DialogContent
            id="modal-slide-description"
            className={classes.modalBody}
          >
          <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name..." onChange={handleDevChange} name="name" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" onChange={handleDevChange} name="email" />
        </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows="8" onChange={handleDevChange} name="message" />
        </Form.Group>
          </Form>
          </DialogContent>
          <DialogActions
            className={classes.modalFooter + " " + classes.modalFooterCenter}
          >
            <Button onClick={() => setDevTicketModal(false)}>Cancel</Button>
            <Button onClick={handleDevTicketSubmit} color="warning">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <GridContainer style={{
        marginBottom: "3%"
      }}>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="warning" stats icon style={{
              paddingBottom: "5%"
            }}>
              <CardIcon color="warning">
                <BlurOnIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Today's Orders</p>
              <h3 className={classes.cardTitle}>
                5
              </h3>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="warning" stats icon style={{
              paddingBottom: "5%"
            }}>
              <CardIcon color="warning">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$65,285</h3>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="warning" stats icon style={{
              paddingBottom: "5%"
            }}>
              <CardIcon color="warning">
                <TaskIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Completed Orders</p>
              <h3 className={classes.cardTitle}>34</h3>
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={6} lg={3}>
          <Card>
            <CardHeader color="warning" stats icon style={{
              paddingBottom: "5%"
            }}>
              <CardIcon color="warning">
                <AccountIcon />
              </CardIcon>
              <p className={classes.cardCategory}>Crypto Balance</p>
              <h3 className={classes.cardTitle}>
                13.7 /btc
              </h3>
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card className={classes.cardHover}>
            <CardHeader color="warning" className={classes.cardHeaderHover}>
              <Container>
              <img src={Sales} alt="finance chart from undraw" style={{
                height: "100px",
                width: "100px",
                display: "flex",
                justifyContent: "center",
                margin: "0 auto"
              }} />
              </Container>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Orders"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="warning" onClick={() => {
                    history.push('/admin/orders')
                  }} justIcon>
                    <LowPriorityIcon className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="View Products"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" onClick={() => {
                    history.push('/admin/productmanager')
                  }} simple justIcon>
                    <MoneyIcon className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>Orders</h4>
              <p className={classes.cardCategory}>View and Manage Orders</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Updated Just Now
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="warning" className={classes.cardHeaderHover}>
            <Container>
            <img src={Mailbox} alt="a mailbox" style={{
              height: "100px",
              width: "100px",
              display: "flex",
              justifyContent: "center",
              margin: "0 auto"
            }} />
            </Container>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Manage"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="warning" justIcon>
                    <SubscriptionsIcon className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Coming Soon"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button onClick={ComingSoon} color="transparent" simple justIcon>
                    <MailOutlineIcon className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>Email Subscribers</h4>
              <p className={classes.cardCategory}>Manage your audience</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Updated Just Now
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="warning" className={classes.cardHeaderHover}>
            <Container>
            <img src={Cube} alt="a cube i made :)" style={{
              height: "100px",
              width: "100px",
              display: "flex",
              justifyContent: "center",
              margin: "0 auto"
            }} />
            </Container>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Manage Tickets"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple onClick={() => {
                    history.push('/admin/tickets')
                  }} color="warning" justIcon>
                    <ListAltIcon className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Create Dev Ticket"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon onClick={() => setDevTicketModal(true)} >
                    <CodeIcon className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>Help Tickets</h4>
              <p className={classes.cardCategory}>Resolve Open Tickets</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Updated Just Now
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <h3>Manage Products</h3>
      <br />
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={Blastoise} alt="blastoise" />
              </a>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Details"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="warning" simple justIcon>
                    <ViewIcon className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Delete"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="danger" simple justIcon>
                    <DeleteIcon className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  High-PSA Rated Card
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
                This is an example of what you could put here regarding cards or watches, or whatever really.
              </p>
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <h4>$15,954/card</h4>
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                <FlightIcon /> International
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src="https://cdn.swisswatchexpo.com/productphotos/7/2/rolex-president-datejust-yellow-gold-pyramid-diamond-bezel-watch-69258-28273_010e2.jpg" alt="rolex presidential" />
              </a>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Details"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="warning" simple justIcon>
                    <ViewIcon className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Delete"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="danger" simple justIcon>
                    <DeleteIcon className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Rolex Presidential
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
              This is an example of what you could put here regarding cards or watches, or whatever really.
              </p>
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <h4>$49,999/kit</h4>
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                <FlightIcon /> International
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card product className={classes.cardHover}>
            <CardHeader image className={classes.cardHeaderHover}>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src="https://cdn-products.chronext.com/V/2/V26422/V26422_1_det.png" alt="king air vector" />
              </a>
            </CardHeader>
            <CardBody>
              <div className={classes.cardHoverUnder}>
                <Tooltip
                  id="tooltip-top"
                  title="Details"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="warning" simple justIcon>
                    <ViewIcon className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="transparent" simple justIcon>
                    <Edit className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="Delete"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="danger" simple justIcon>
                    <DeleteIcon className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
              </div>
              <h4 className={classes.cardProductTitle}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Rolex Air King
                </a>
              </h4>
              <p className={classes.cardProductDesciprion}>
              This is an example of what you could put here regarding cards or watches, or whatever really.
              </p>
            </CardBody>
            <CardFooter product>
              <div className={classes.price}>
                <h4>$49,542/kit</h4>
              </div>
              <div className={`${classes.stats} ${classes.productStats}`}>
                <FlightIcon /> International
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
