import React, { useState, useEffect } from "react";

import Pagination from './Pagination.js';
import ProductMap from "./ProductMap";

import axios from "axios";

import { Modal, Form } from "react-bootstrap";

import SweetAlert from "react-bootstrap-sweetalert"

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Search from "./CardSearch.js";

import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "./dashComps/Footer";

import Nav from "./Nav.js";
import Button from "./dashComps/Button";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./dashComps/dashboardStyle";

const useStyles = makeStyles(styles);

const Products = () => {

  const classes = useStyles();

  const [alert, setAlert] = React.useState(null);
  const hideAlert = () => {
    setAlert(null);
  };

    let history = useHistory();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ products, setProducts ] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setProductsPerPage] = useState(8);

    useEffect(() => {
      const fetchProducts = async () => {
        setLoading(true);
        const res = await axios.get(`https://crypto-luxury.herokuapp.com/api/store/products/type/Card`);
        setProducts(res.data);
        setLoading(false);
    };
    fetchProducts();
   }, []);

   const indexOfLastProduct = currentPage * productsPerPage;
   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

   const paginate = pageNumber => {
     setCurrentPage(pageNumber)
   }


    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
      })
  
      const handleContactChange = (e) => {
        e.preventDefault();
        setContact({
          ...contact,
          [e.target.name]: e.target.value
        })
      }
  
      const handleContactSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://crypto-luxury.herokuapp.com/api/form/contact`, contact)
        .then(res => {
          successAlert();
          setTimeout(() => {
            setShow(false)
          }, 1500);
        })
        .catch(err => {
          errorAlert();
        })
      }

      const successAlert = () => {
        setAlert(
          <SweetAlert
            success
            style={{ display: "block", marginTop: "100px" }}
            title="Submitted!"
            onConfirm={() => hideAlert()}
            onCancel={() => hideAlert()}
            confirmBtnCssClass={classes.button + " " + classes.success}
          >
            We've received your ticket, and will get back to you shortly!
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
            That's not supposed to happen :( Try again!
          </SweetAlert>
        );
      };


    return (
      <div>
      {alert}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Submit a Ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  onChange={handleContactChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={handleContactChange}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="message"
                  onChange={handleContactChange}
                />
              </Form.Group>
            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button color="warning" onClick={handleContactSubmit}>
            Send Ticket
          </Button>
        </Modal.Footer>
      </Modal>
      <Nav />
      <Row>
      <h2 style={{width: "100%", textAlign: "center", marginTop: "3%", color: "#523c0d", fontFamily: "'Raleway', sans-serif"}}>Cards</h2>
  </Row>
    <Row style={{width: "100%" , textAlign: "center", margin: "0 auto", marginTop: "1%", marginBottom: "1.5%"}}>
        <Search />
    </Row>
    <Container>
            <ProductMap products={currentProducts} loading={loading} />
            <Row style={{
              width: "100%",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              marginTop: "3%"
            }}>
              <Pagination productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
            </Row>
            </Container>
                <Footer />
        </div>
    )
}

export default Products;