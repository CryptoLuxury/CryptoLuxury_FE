import React, { useState } from "react";

import axios from "axios";

import { axiosWithAuthUser } from "../../../../utils/AxiosWithAuthUser";

import { Card } from "antd";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import styles from "../../assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import Button from "../../components/CustomButtons/Button";
import SweetAlert from "react-bootstrap-sweetalert";

import Edit from "@material-ui/icons/Edit";
import ViewIcon from "@material-ui/icons/Visibility";
import SweepIcon from "@material-ui/icons/DeleteSweep";
import AddIcon from "@material-ui/icons/AddShoppingCart";
import AccountIcon from "@material-ui/icons/AccountBalanceWallet";
import ToolTip from "@material-ui/core";

import { Modal, Form } from "react-bootstrap";

const useStyles = makeStyles(styles);

const { Meta } = Card;

const NewCardWatch = ({ productInfo }) => {

  const classes = useStyles();
  const { id, name, image, price, description, bitpay } = productInfo;
  const [edited, setEdited] = useState({
    name: "",
    image: "",
    description: "",
    price: 0.00,
    bitpay: ""
  })

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
          You've edited this product!
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
          You've deleted this product!
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [editShow, setEditShow] = useState(false);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const handleDeleteListing = (id) => {
    axiosWithAuthUser()
      .delete(`/api/store/products/${id}`)
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
    axiosWithAuthUser().put(`/api/store/products/${id}`, edited)
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
        marginBottom: "1%",
      }}
    >
    {alert}
    <Modal show={editShow} onHide={handleEditClose}>
    <Modal.Header closeButton>
      <Modal.Title>Edit Product</Modal.Title>
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{
            display: "flex",
            justifyContent: "center"
          }}>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{width: "100%", display: "flex", justifyContent: "center", margin: "0 auto"}}>
            <img
              src={image}
              style={{ height: "200px", width: "200px" }}
              alt="product info"
            />
          </div>
          <div>
            <p style={{width: "100%", display: "flex", justifyContent: "center", margin: "0 auto"}}>{description}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
        <Button color="warning" justIcon
        className="snipcart-add-item"
        data-item-id={`${id}`}
        data-item-price={price}
        data-item-url={`/api/store/products/${id}`}
        data-item-description={`${description}`}
        data-item-name={`${name}`}
      >
        <AddIcon />
      </Button>

          <Button color="warning" onClick={handleClose}>
            <AccountIcon />
          </Button>
        </Modal.Footer>
      </Modal>
      <Card
        style={{ width: 200 }}
        cover={
          <img
            alt="product"
            src={image}
            style={{height: "200px", width: "200px"}}
          />
        }
        actions={[
          <Tooltip
              id="tooltip-top"
              title="Edit Listing"
              placement="bottom"
            >
              <Edit style={{paddingTop: "2%"}} color="warning" simple justIcon onClick={() => {
                handleEditShow(true);
              }} />
            </Tooltip>,
            <Tooltip
            id="tooltip-top"
            title="View Listing"
            placement="bottom"
          >
            <ViewIcon style={{paddingTop: "2%"}} color="warning" simple justIcon onClick={() => {
              handleShow(true);
            }} />
          </Tooltip>,
          <Tooltip
          id="tooltip-top"
          title="Delete Listing"
          placement="bottom"
        >
          <SweepIcon style={{paddingTop: "2%"}} color="warning" simple justIcon onClick={() => {
            handleDeleteListing(id);
          }} />
        </Tooltip>,
        ]}
      >
        <Meta title={name} description={'$' + `${price}`} />
      </Card>
    </div>
  );
};

export default NewCardWatch;
