import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { axiosWithAuthUser } from "../../../../utils/AxiosWithAuthUser";

import axios from "axios";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import HomeCard from "./HomeCard.js";

import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
import Store from "@material-ui/icons/Store";
import AccessTime from "@material-ui/icons/AccessTime";
import BlurOnIcon from '@material-ui/icons/BlurOn';
import TaskIcon from '@material-ui/icons/AssignmentTurnedIn';
import MoneyIcon from '@material-ui/icons/LocalAtm';
import LowPriorityIcon from '@material-ui/icons/LowPriority';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ListAltIcon from '@material-ui/icons/ListAlt';
import CodeIcon from '@material-ui/icons/Code';

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import SweetAlert from "react-bootstrap-sweetalert";

//undraws
import Mailbox from "./mailbox.svg";
import Sales from "./Sales.svg";
import Cube from "./cube.svg";

import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import AccountIcon from '@material-ui/icons/AccountBalanceWallet';

// @material-ui/icons
import Close from "@material-ui/icons/Close";

import styles from "../../assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Dashboard() {

  const [show, setShow] = useState(false);
  const [homeCardShow, setHomeCardShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleHomeCardClose = () => setHomeCardShow(false);
  const handleHomeCardShow = () => setHomeCardShow(true);

  let history = useHistory();
  
  const classes = useStyles();
  const [devTicketModal, setDevTicketModal] = useState(false);
  const [devTicket, setDevTicket] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [homeCard, setHomeCard] = useState({
    image: "",
    title: "",
    link: ""
  })

  const [homeCards, setHomeCards] = useState([]);
  const [watches, setWatches] = useState([]);
  const [cards, setCards] = useState([]);
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
    axiosWithAuthUser().post(`/api/form/devTicket`, devTicket)
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

    const handleCardChange = (e) => {
    e.preventDefault();
    setHomeCard({
      ...homeCard,
      [e.target.name]: e.target.value
    })
  }

  const handleHomeCardSubmit = (e) => {
    e.preventDefault();
    axiosWithAuthUser().post(`/api/store/features`, homeCard)
    .then(res => {
      successAlert();
      setTimeout(() => {
        setHomeCardShow(false)
      }, 1000)
    })
    .catch(err => {
      errorAlert()
    })
  }

  useEffect(() => {
    axiosWithAuthUser().get(`/api/store/watches`)
    .then(res => {
      setWatches([
        ...res.data
      ])
    })
  }, []);

  useEffect(() => {
    axiosWithAuthUser().get(`/api/store/features`)
    .then(res => {
      setHomeCards([
        ...res.data
      ])
    })
  }, []);


  return (
    <div>
    {alert}
      <div>
        <Modal show={homeCardShow} onHide={handleHomeCardClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a HomeCard</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="Enter Firebase Image url" onChange={handleCardChange} name="image" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="email" placeholder="25% OFF" onChange={handleCardChange} name="title" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>SubTitle</Form.Label>
      <Form.Control type="email" placeholder="25% OFF" onChange={handleCardChange} name="subtitle" />
    </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
      <Form.Label>Redirect Link</Form.Label>
      <Form.Control type="text" rows="8" placeholder="https/www.cryptoluxury.io" onChange={handleCardChange} name="link" />
    </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button color="danger" onClick={handleHomeCardClose}>
            Cancel
          </Button>
          <Button color="warning" onClick={handleHomeCardSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
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
                  title="Product Manager"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button simple color="transparent" onClick={() => {
                    history.push('/admin/productmanager')
                  }} justIcon>
                    <LowPriorityIcon className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                  id="tooltip-top"
                  title="View Crypto Sales"
                  placement="bottom"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button color="warning" onClick={() => {
                    window.open('https://bitpay.com/dashboard/payments')
                  }} simple justIcon>
                    <AccountIcon className={classes.underChartIcons} />
                  </Button>
                </Tooltip>
                <Tooltip
                id="tooltip-top"
                title="View Fiat Sales"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button color="warning" onClick={() => {
                  window.open('https://app.snipcart.com/dashboard')
                }} simple justIcon>
                  <MoneyIcon className={classes.underChartIcons} />
                </Button>
              </Tooltip>
              </div>
              <h4 className={classes.cardTitle}>Products</h4>
              <p className={classes.cardCategory}>View and Manage Products</p>
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
                  <Button simple color="warning" onClick={() => {
                    history.push('/admin/subscribers')
                  }} justIcon>
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
      <h3 style={{width: "100%", textAlign: "center", color: "#523c0d"}}>Manage Home Cards</h3>
      <br />
      <Row style={{
        display: "flex",
        justifyContent: "center"
      }}>
      <Button color="warning" onClick={() => setHomeCardShow(true)}>Add Card</Button>
      </Row>
      <br />
      <Container>
      <Row style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "2%"
      }}>
        <div style={{
          margin: "1%",
          display: "flex",
          justifyContent: "center",
          flexFlow: "row wrap"
        }}>
        { homeCards.map(item => ( 
          <HomeCard itemInfo={item} key={item.id}/> 
          ))}
        </div>
        </Row>
        
      </Container>
    </div>
  );
}
