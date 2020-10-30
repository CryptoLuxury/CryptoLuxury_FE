import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { axiosWithAuthUser } from "../../../../utils/AxiosWithAuthUser";

import axios from "axios";

import ProductManagerCardWatch from "./NewCard";
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
    const [product, setProduct] = useState({
        name: "",
        image: "",
        description: "",
        price: 0.00,
        bitpay: ""
    })

    const [products, setProducts] = useState([])
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
          You've added a new product!
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
          You've edited this product!
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

    const handleEditProduct = (e, id) => {
      e.preventDefault();
      axiosWithAuthUser().put(`/api/store/products/${id}` , product)
      .then(res => {
        editAlertSuccessWatch();
      })
      .catch(err => {
        errorAlert();
      })
    } 

    const handleSureWatch = () => {
      axiosWithAuthUser().delete(`/api/store/products`)
      .then(res => {
        successDelete();
      })
      .catch(err => {
        errorAlert();
      })
    }


    useEffect(() => {
      axiosWithAuthUser().get(`/api/store/products`)
      .then(res => {
        setProducts([
          ...res.data
        ])
      })
    }, []);

    const handleProductChange = (e) => {
        e.preventDefault();
        setProduct({
        ...product,
        [e.target.name]: e.target.value
        })
    }


    const handleDeleteListing = (id) => {
      axiosWithAuthUser().delete(`/api/store/products/:${id}`)
      .then(res => {
        successAlertWatch();
      })
      .catch(err => {
        errorAlert();
      })
    } 

  const handleProductSubmit = (e) => {
    e.preventDefault();
    axiosWithAuthUser().post(`/api/store/products`, product)
    .then(res => {
        successAlertWatch();
        setCardShow(false)
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
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Listing Title</Form.Label>
          <Form.Control type="text" placeholder="Title..." onChange={handleProductChange} name="name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Image" onChange={handleProductChange} name="image" />
      </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Price (USD)</Form.Label>
        <Form.Control type="number" placeholder="100, 100,000" onChange={handleProductChange} name="price" />
        </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Listing Description</Form.Label>
          <Form.Control as="textarea" rows="3" onChange={handleProductChange} name="description" />
        </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Bitpay Product Link</Form.Label>
          <Form.Control type="text" placeholder="Title..." onChange={handleProductChange} name="bitpay" />
        </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCardClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleProductSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
        <Row style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          height: "50px",
          marginTop: "5%",
          marginBottom: "3%"
        }}>
        <Button color="warning" onClick={() => setCardShow(true)}>Add Product</Button>
        <Button color="danger" onClick={SureWatch}>Delete All Products</Button>
        </Row>
        </Container>
        <Row style={{
          marginBottom: "5%",
          display: "flex",
          justifyContent: "center",
          paddingBottom: "3%"
        }}>
        <Col style={{
          margin: "2%",
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-evenly"
        }}>
          { products.map(product => {
            return (
              <ProductManagerCardWatch productInfo={product} key={product.id} id={product.id}/>
            )
          } 
          )}
        </Col>
        </Row>

    </Container>
  );
}                