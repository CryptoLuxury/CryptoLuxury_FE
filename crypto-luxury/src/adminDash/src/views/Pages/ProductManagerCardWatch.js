import React, { useState, useEffect } from "react";

import {Modal, Form} from "react-bootstrap";

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import styles from "../../assets/jss/material-dashboard-pro-react/hoverCardStyle";
import Button from "../../components/CustomButtons/Button";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

//icons
import FlightIcon from "@material-ui/icons/FlightTakeoff";
import Edit from "@material-ui/icons/Edit";
import ViewIcon from "@material-ui/icons/Visibility";
import AddIcon from "@material-ui/icons/AddShoppingCart";
import SweepIcon from "@material-ui/icons/DeleteSweep";

import blastoise from "../Dashboard/blastoise.png";
import { ContactPhone } from "@material-ui/icons";

const useStyles = makeStyles(styles);

const ProductManagerCardWatch = ({ watchInfo }) => {

  const [edited, setEdited] = useState({
    name: "",
    description: "",
    price: 0.00,
    quantity: 0,
    bitpay: ""
  })
  const classes = useStyles();
  const { id, title, price, description, bitpay } = watchInfo;

  const [editShow, setEditShow] = useState(false);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const handleDeleteListing = (id) => {
    axios
      .delete(`https://crypto-luxury.herokuapp.com/api/store/watches/${id}`)
      .then((res) => {
        alert("success");
      })
      .catch((err) => {
        alert("Failed to Delete");
      });
  };

  const handleWatchChange = (e) => {
    e.preventDefault();
    setEdited({
    ...edited,
    [e.target.name]: e.target.value
    })
}

const handleEditSubmit = (id) => {
axios.put(`https://crypto-luxury.herokuapp.com/api/store/watches/${id}`, edited)
.then(res => {
  alert("working");
  setEditShow(false);
})
.catch(err => {
  alert("not working");
})
}

  return (
    <div
      style={{
        height: "60vh",
        width: "33%",
        margin: ".5%",
        marginTop: "5%",
      }}
    >
      <Card product className={classes.cardHover}>
      <Modal show={editShow} onHide={handleEditClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Watch</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Listing Title</Form.Label>
        <Form.Control type="text" placeholder="Title of Product" onChange={handleWatchChange} name="name" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>Price (USD)</Form.Label>
      <Form.Control type="number" placeholder="4500, 45000" onChange={handleWatchChange} name="price" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>Quantity</Form.Label>
      <Form.Control type="number" placeholder="number 1-10" onChange={handleWatchChange} name="quantity" />
      </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Listing Description</Form.Label>
        <Form.Control as="textarea" placeholder="Description" rows="3" onChange={handleWatchChange} name="description" />
      </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Bitpay Product Link</Form.Label>
        <Form.Control type="text" placeholder="Title..." onChange={handleWatchChange} name="bitpay" />
      </Form.Group>
      </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button color="danger" onClick={handleEditClose}>
          Cancel
        </Button>
        <Button color="warning" onClick={() => {
          handleEditSubmit(id)
        }}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
        <CardHeader image className={classes.cardHeaderHover}>
          <div>
            <img
              src="https://cdn.swisswatchexpo.com/productphotos/7/2/rolex-president-datejust-yellow-gold-pyramid-diamond-bezel-watch-69258-28273_010e2.jpg"
              alt="watch"
            />
          </div>
        </CardHeader>
        <CardBody>
          <div className={classes.cardHoverUnder}>
            <Tooltip
              id="tooltip-top"
              title="Edit Listing"
              placement="bottom"
              classes={{ tooltip: classes.tooltip }}
            >
              <Edit color="warning" simple justIcon onClick={() => {
                handleEditShow(true);
              }}>
                <AddIcon className={classes.underChartIcons} />
              </Edit>
            </Tooltip>
            <Tooltip
              id="tooltip-top"
              title="Delete Listing"
              placement="bottom"
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="danger"
                onClick={() => {
                  handleDeleteListing(id);
                }}
                simple
                justIcon
              >
                <SweepIcon className={classes.underChartIcons} />
              </Button>
            </Tooltip>
          </div>
          <h4 className={classes.cardProductTitle}>
            <a
              style={{
                color: "#eba92d",
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              {title}
            </a>
          </h4>
          <p
            style={{
              color: "#997023",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              height: "5vh",
            }}
            className={classes.cardProductDesciprion}
          >
            {description}
          </p>
          <p
            style={{
              color: "#997023",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              height: "5vh",
            }}
            className={classes.cardProductDesciprion}
          >
            {price}
          </p>
        </CardBody>
      </Card>
    </div>
  );
};
export default ProductManagerCardWatch;
