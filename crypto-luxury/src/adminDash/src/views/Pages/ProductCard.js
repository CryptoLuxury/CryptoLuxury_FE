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
import SweetAlert from "react-bootstrap-sweetalert";

//icons
import FlightIcon from "@material-ui/icons/FlightTakeoff";
import Edit from "@material-ui/icons/Edit";
import ViewIcon from "@material-ui/icons/Visibility";
import AddIcon from "@material-ui/icons/AddShoppingCart";
import SweepIcon from "@material-ui/icons/DeleteSweep";

const useStyles = makeStyles(styles);

const ProductManagerCardWatch = ({ productInfo }) => {

  const [alert, setAlert] = React.useState(null);
  const hideAlert = () => {
    setAlert(null);
  }

  const successEditAlert = () => {
      setAlert(
        <SweetAlert
          success
          style={{ display: "block", marginTop: "100px" }}
          title="Nice!"
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          confirmBtnCssClass={classes.button + " " + classes.success}
        >
          You've edited this watch!
        </SweetAlert>
      );
    };

    const successDeleteAlert = () => {
      setAlert(
        <SweetAlert
          success
          style={{ display: "block", marginTop: "100px" }}
          title="Nice!"
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          confirmBtnCssClass={classes.button + " " + classes.success}
        >
          You've deleted this watch!
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
          That's didn't work :( , if this consists, email Carl: sachscarl@gmail.com
        </SweetAlert>
      );
    };

  const [edited, setEdited] = useState({
    name: "",
    image: "",
    description: "",
    price: 0.00,
    bitpay: ""
  })
  const classes = useStyles();
  const { id, name, image, price, description, bitpay } = productInfo;

  const [editShow, setEditShow] = useState(false);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const handleDeleteListing = (id) => {
    axios
      .delete(`https://crypto-luxury.herokuapp.com/api/store/products/${id}`)
      .then((res) => {
        successDeleteAlert();
      })
      .catch((err) => {
        errorAlert();
      });
  };

  const handleProductChange = (e) => {
    e.preventDefault();
    setEdited({
    ...edited,
    [e.target.name]: e.target.value
    })
}

const handleEditSubmit = (id) => {
axios.put(`https://crypto-luxury.herokuapp.com/api/store/watches/${id}`, edited)
.then(res => {
  successEditAlert();
  setEditShow(false);
})
.catch(err => {
  errorAlert();
})
}

  return (
    <div
      style={{
        margin: ".5%",
        marginTop: "5%",
      }}
    >
    {alert}
      <Card product className={classes.cardHover}>
      <Modal show={editShow} onHide={handleEditClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Watch</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Product Title</Form.Label>
        <Form.Control type="text" placeholder="Title of Product" onChange={handleProductChange} name="name" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>Image</Form.Label>
      <Form.Control type="text" placeholder="Image" onChange={handleProductChange} name="image" />
    </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>Price (USD)</Form.Label>
      <Form.Control type="number" placeholder="4500, 45000" onChange={handleProductChange} name="price" />
      </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Listing Description</Form.Label>
        <Form.Control as="textarea" placeholder="Description" rows="3" onChange={handleProductChange} name="description" />
      </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Bitpay Product Link</Form.Label>
        <Form.Control type="text" placeholder="Title..." onChange={handleProductChange} name="bitpay" />
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
              src={image}

              alt="product image"
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
              {name}
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
