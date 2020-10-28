import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

import ProductManagerCardWatch from "./ProductManagerCardWatch";
import ProductManagerCardCard from "./ProductManagerCardCard";

import SweetAlert from "react-bootstrap-sweetalert";

//reactstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "../../components/CustomButtons/Button";
import Slide from "@material-ui/core/Slide";
import {Modal, Form} from "react-bootstrap";

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
  const [cardShow, setCardShow] = useState(false);

  const handleCardClose = () => setCardShow(false);
  const handleCardShow = () => setCardShow(true);
  const [watchShow, setWatchShow] = useState(false);

  const handleWatchClose = () => setWatchShow(false);
  const handleWatchShow = () => setWatchShow(true);

    // useState
    const [cardProduct, setCardProduct] = useState({
        name: "",
        description: "",
        price: 0.00,
        quantity: 0,
        bitpay: ""
    })
    const [watchProduct, setWatchProduct] = useState({
        name: "",
        description: "",
        price: 0.00,
        quantity: 0,
        bitpay: ""
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

    const editAlertSuccessWatch = () => {
      setAlert(
        <SweetAlert
          success
          style={{ display: "block", marginTop: "100px" }}
          title="Confirmed!"
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          confirmBtnCssClass={classes.button + " " + classes.success}
        >
          You've edited this watch!
        </SweetAlert>
      );
    };

    const editAlertSuccessCard = () => {
      setAlert(
        <SweetAlert
          success
          style={{ display: "block", marginTop: "100px" }}
          title="Confirmed!"
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          confirmBtnCssClass={classes.button + " " + classes.success}
        >
          You've edited this card!
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

    const handleEditWatch = (e, id) => {
      e.preventDefault();
      axios.put(`https://crypto-luxury.herokuapp.com/api/store/watches:${id}` , watchProduct)
      .then(res => {
        editAlertSuccessWatch();
      })
      .catch(err => {
        errorAlert();
      })
    } 

    const handleEditCard = (e, id) => {
      e.preventDefault();
      axios.put(`https://crypto-luxury.herokuapp.com/api/store/card:${id}` , cardProduct)
      .then(res => {
        editAlertSuccessWatch();
      })
      .catch(err => {
        errorAlert();
      })
    } 

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
        setCards([
          ...res.data
        ])
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


    const handleDeleteListing = (id) => {
      axios.delete(`https://crypto-luxury.herokuapp.com/api/store/watches/:${id}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    } 

  const handleWatchSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://crypto-luxury.herokuapp.com/api/store/watches`, watchProduct)
    .then(res => {
        successAlertWatch();
        setWatchShow(false)
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
      setCardShow(false);
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
        <h2 style={{width: "100%", textAlign: "center", color: "#523c0d"}}>Product Manager</h2>
        <Container style={{
            display: "flex",
            flexDirection: "row"
        }}>
        <Modal show={cardShow} onHide={handleCardClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Card</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Listing Title</Form.Label>
          <Form.Control type="text" placeholder="Title..." onChange={handleCardChange} name="name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Price (USD)</Form.Label>
        <Form.Control type="number" placeholder="100, 100,000" onChange={handleCardChange} name="price" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" placeholder="input a number" onChange={handleCardChange} name="quantity" />
        </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Listing Description</Form.Label>
          <Form.Control as="textarea" rows="3" onChange={handleCardChange} name="description" />
        </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Bitpay Product Link</Form.Label>
          <Form.Control type="text" placeholder="Title..." onChange={handleCardChange} name="bitpay" />
        </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCardClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleCardSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={watchShow} onHide={handleWatchClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Watch</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Listing Title</Form.Label>
        <Form.Control type="text" placeholder="Title..." onChange={handleWatchChange} name="name" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>Price (USD)</Form.Label>
      <Form.Control type="number" placeholder="100, 100,000" onChange={handleWatchChange} name="price" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>Quantity</Form.Label>
      <Form.Control type="number" placeholder="input a number" onChange={handleWatchChange} name="quantity" />
      </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Listing Description</Form.Label>
        <Form.Control as="textarea" rows="3" onChange={handleWatchChange} name="description" />
      </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Bitpay Product Link</Form.Label>
        <Form.Control type="text" placeholder="Title..." onChange={handleWatchChange} name="bitpay" />
      </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleWatchClose}>
          Cancel
        </Button>
        <Button variant="warning" onClick={handleWatchSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
        <Row style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          height: "50px",
          marginTop: "5%"
        }}>
        <Button color="warning" onClick={() => setWatchShow(true)}>Add Watch</Button>
        <Button color="warning" onClick={() => setCardShow(true)}>Add Card</Button>
        <Button color="danger" onClick={SureWatch}>Delete All Watches</Button>
        <Button color="danger" onClick={SureCard}>Delete All Cards</Button>
        </Row>
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
          { watches.map(watch => {
            console.log(watch)
            return (
              <ProductManagerCardWatch watchInfo={watch} key={watch.id} id={watch.id}/>
            )
          } 
          )}
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