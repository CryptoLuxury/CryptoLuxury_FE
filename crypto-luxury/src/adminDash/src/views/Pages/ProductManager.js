import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

import ProductManagerCardWatch from "./ProductManagerCardWatch";
import ProductManagerCardCard from "./ProductManagerCardCard";

import SweetAlert from "react-bootstrap-sweetalert";
import Form from "react-bootstrap/Form";

//reactstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../../components/CustomButtons/Button";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../assets/jss/material-dashboard-pro-react/hoverCardStyle";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

export default function ProductManager() {

  let history = useHistory();

  const classes = useStyles();
  const [watchModal, setWatchModal] = React.useState(false);
  const [cardModal, setCardModal] = React.useState(false);

    // useState
    const [cardProduct, setCardProduct] = useState({
        title: "",
        description: "",
        price: "",
    })
    const [watchProduct, setWatchProduct] = useState({
        title: "",
        description: "",
        price: "",
    })

    const [watches, setWatches] = useState([]);
    const [cards, setCards] = useState([]);
    const [alert, setAlert] = React.useState(null);
    const hideAlert = () => {
      setAlert(null);
    }
  
    const successAlertWatch = () => {
      setAlert(
        <SweetAlert
          success
          style={{ display: "block", marginTop: "100px" }}
          title="Watch Added!"
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          confirmBtnCssClass={classes.button + " " + classes.success}
        >
          You've added a new watch!  Sell them bitches!
        </SweetAlert>
      );
    };
    const successAlertCard = () => {
      setAlert(
        <SweetAlert
          success
          style={{ display: "block", marginTop: "100px" }}
          title="Card Added!"
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          confirmBtnCssClass={classes.button + " " + classes.success}
        >
          You've added a new card!  Sell them bitches!
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
          That didn't work!  Try again or reach out to Carl!
        </SweetAlert>
      );
    };

    const SureWatch = () => {
      setAlert(
        <SweetAlert
          warning
          style={{ display: "block", marginTop: "100px" }}
          title="Are you sure?"
          onConfirm={() => handleSureWatch()}
          onCancel={() => cancelDetele()}
          confirmBtnCssClass={classes.button + " " + classes.success}
          cancelBtnCssClass={classes.button + " " + classes.danger}
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          showCancel
        >
          You will not be able to recover these watch listings!
        </SweetAlert>
      );
    };
    const SureCard = () => {
      setAlert(
        <SweetAlert
          warning
          style={{ display: "block", marginTop: "100px" }}
          title="Are you sure?"
          onConfirm={() => handleSureCard()}
          onCancel={() => cancelDetele()}
          confirmBtnCssClass={classes.button + " " + classes.success}
          cancelBtnCssClass={classes.button + " " + classes.danger}
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          showCancel
        >
          You will not be able to recover these card listings!
        </SweetAlert>
      );
    };
    const successDelete = () => {
      setAlert(
        <SweetAlert
          success
          style={{ display: "block", marginTop: "100px" }}
          title="Wiped!"
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          confirmBtnCssClass={classes.button + " " + classes.success}
        >
          Changes take effect on next reload!
        </SweetAlert>
      );
    };
    const cancelDetele = () => {
      setAlert(
        <SweetAlert
          danger
          style={{ display: "block", marginTop: "100px" }}
          title="Aborted!"
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          confirmBtnCssClass={classes.button + " " + classes.success}
        >
          We knew you didnt want to do that...
        </SweetAlert>
      );
    };
    const handleSureWatch = () => {
      axios.delete(`https://crypto-luxury.herokuapp.com/api/store/watches`)
      .then(res => {
        successDelete();
      })
      .catch(err => {
        errorAlert();
      })
    }

    const handleSureCard = () => {
      axios.delete(`https://crypto-luxury.herokuapp.com/api/store/cards`)
      .then(res => {
        successDelete();
      })
      .catch(err => {
        errorAlert();
      })
    }

    useEffect(() => {
      axios.get(`https://crypto-luxury.herokuapp.com/api/store/watches`)
      .then(res => {
        setWatches([
          ...res.data
        ])
      })
    }, []);
    useEffect(() => {
      axios.get(`https://crypto-luxury.herokuapp.com/api/store/cards`)
      .then(res => {
        setCards(
          ...res.data
      )
      })
    }, []);

    const handleWatchChange = (e) => {
        e.preventDefault();
        setWatchProduct({
        ...watchProduct,
        [e.target.name]: e.target.value
        })
    }

    const handleCardChange = (e) => {
        e.preventDefault();
        setCardProduct({
        ...cardProduct,
        [e.target.name]: e.target.value
        })
    }

  const handleWatchSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://crypto-luxury.herokuapp.com/api/store/watches`, watchProduct)
    .then(res => {
        successAlertWatch();
        setWatchModal(false)
    })
    .catch(err => {
      errorAlert();
    })
  }

  const handleCardSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://crypto-luxury.herokuapp.com/api/store/cards`, cardProduct)
    .then(res => {
      successAlertCard();
    })
    .catch(err => {
      errorAlert();
    })
  }

  return (
    <Container style={{
      paddingBottom: "5%"
    }}>
    {alert}
        <h2>Product Manager</h2>
        <Container style={{
            display: "flex",
            flexDirection: "row"
        }}>
        <Button color="warning" round style={{margin: "3%"}} onClick={() => setWatchModal(true)}>Add Watch</Button>
        <div>
            <Dialog
                classes={{
                root: classes.center,
                paper: classes.modal
                }}
                open={watchModal}
                transition={Transition}
                keepMounted
                onClose={() => setWatchModal(false)}
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
                    color="danger"
                    onClick={() => setWatchModal(false)}
                >
                    <Close className={classes.modalClose} />
                </Button>
                </DialogTitle>
                <DialogContent
                style={{width: "750px"}}
                id="modal-slide-description"
                className={classes.modalBody}
                >
                <Container>
                <h2>Add New Watch</h2>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="Title..." onChange={handleWatchChange} name="title" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Price</Form.Label>
                <Form.Control type="Price" placeholder="'100', '100,000'" onChange={handleWatchChange} name="price" />
                </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows="3" onChange={handleWatchChange} name="description" />
                </Form.Group>
                </Form>
                </Container>
                </DialogContent>
                <DialogActions
                className={classes.modalFooter + " " + classes.modalFooterCenter}
                >
                <Button style={{
                    margin: "0 auto"
                }}
                onClick={() => setWatchModal(false)}>Cancel</Button>
                <Button style={{
                    margin: "0 auto"
                }} onClick={handleWatchSubmit} color="warning">
                    Submit
                </Button>
                </DialogActions>
            </Dialog>
        </div>

        <Button color="warning" round style={{margin: "3%"}} onClick={() => setCardModal(true)}>Add Card</Button>
        <div>
            <Dialog
                classes={{
                root: classes.center,
                paper: classes.modal
                }}
                open={cardModal}
                transition={Transition}
                keepMounted
                onClose={() => setCardModal(false)}
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
                    color="danger"
                    onClick={() => setCardModal(false)}
                >
                    <Close className={classes.modalClose} />
                </Button>
                </DialogTitle>
                <DialogContent
                style={{width: "750px"}}
                id="modal-slide-description"
                className={classes.modalBody}
                >
                <Container>
                <h2>Add New Card</h2>
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Listing Title</Form.Label>
                  <Form.Control type="text" placeholder="Title..." onChange={handleCardChange} name="title" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Price (USD)</Form.Label>
                <Form.Control type="Price" placeholder="'100', '100,000'" onChange={handleCardChange} name="price" />
                </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Listing Description</Form.Label>
                  <Form.Control as="textarea" rows="3" onChange={handleCardChange} name="description" />
                </Form.Group>
                </Form>
                </Container>
                </DialogContent>
                <DialogActions
                className={classes.modalFooter + " " + classes.modalFooterCenter}
                >
                <Button style={{
                    margin: "0 auto"
                }}
                onClick={() => setCardModal(false)}>Cancel</Button>
                <Button style={{
                    margin: "0 auto"
                }} onClick={handleCardSubmit} color="warning">
                    Submit
                </Button>
                </DialogActions>
            </Dialog>
        </div>
        <div style={{
          paddingTop: "2.4%",
          marginLeft: "1%"
        }}>
          <Button round color="danger" onClick={SureWatch}>Delete All Watches</Button>
        </div>
        <div style={{
          paddingTop: "2.4%",
          marginLeft: "1%"
        }}>
          <Button round color="danger" onClick={SureCard}>Delete All Cards</Button>
        </div>
        </Container>
        <Row style={{
          marginBottom: "5%",
          display: "flex",
          justifyContent: "space-evenly",
          paddingBottom: "3%"
        }}>
        <Col style={{
          margin: "2%",
          display: "flex",
          flexFlow: "row nowrap",
        }}>
          { watches.map(watch => ( 
          <ProductManagerCardWatch watchInfo={watch} key={watch.id}/> 
          ))}
        </Col>
        </Row>
        <Row style={{
          marginBottom: "5%",
          display: "flex",
          justifyContent: "space-evenly",
          paddingBottom: "3%"
        }}>
        <Col style={{
          margin: "2%",
          display: "flex",
          flexFlow: "row nowrap",
        }}>
          { cards.map(card => ( 
          <ProductManagerCardCard cardInfo={card} key={card.id}/> 
          ))}
        </Col>
        </Row>

    </Container>
  );
}