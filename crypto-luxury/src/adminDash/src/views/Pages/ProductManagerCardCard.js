import React, {useState} from "react";

import axios from "axios";

import {Modal, Form} from "react-bootstrap";

import SweetAlert from "react-bootstrap-sweetalert";

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
import AddIcon from "@material-ui/icons/AddShoppingCart";
import SweepIcon from "@material-ui/icons/DeleteSweep";

import blastoise from "../Dashboard/blastoise.png";

const useStyles = makeStyles(styles);

const ProductManagerCardCard = ({ cardInfo }) => {
  const { id, title, price, description } = cardInfo;

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
          You've edited this card!
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
          You've deleted this card!
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

  const [editShow, setEditShow] = useState(false);

  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);

  const [edited, setEdited] = useState({
    name: "",
    description: "",
    price: 0.00,
    bitpay: ""
  })

      const handleCardChange = (e) => {
        e.preventDefault();
        setEdited({
        ...edited,
        [e.target.name]: e.target.value
        })
    }

  const handleEditSubmit = (id) => {
    axios.put(`https://crypto-luxury.herokuapp.com/api/store/cards/${id}`, edited)
    .then(res => {
      successEditAlert();
      setEditShow(false);
    })
    .catch(err => {
      errorAlert();
    })
  }

  const handleDelete = (id) => {
    axios
      .delete(`https://crypto-luxury.herokuapp.com/api/store/cards/${id}`)
      .then((res) => {
        successDeleteAlert();
      })
      .catch((err) => {errorAlert();});
  };

  const classes = useStyles();

  return (
    <div
      style={{
        height: "60vh",
        width: "33%",
        margin: ".5%",
        marginTop: "8%",
      }}
    >
      <Card product className={classes.cardHover}>
      <Modal show={editShow} onHide={handleEditClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Card</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Listing Title</Form.Label>
        <Form.Control type="text" placeholder={title} onChange={handleCardChange} name="name" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
      <Form.Label>Price (USD)</Form.Label>
      <Form.Control type="number" placeholder="100, 100,000" onChange={handleCardChange} name="price" />
      </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Listing Description</Form.Label>
        <Form.Control as="textarea" placeholder="description" rows="3" onChange={handleCardChange} name="description" />
      </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Bitpay Product Link</Form.Label>
        <Form.Control type="text" placeholder="Title..." onChange={handleCardChange} name="bitpay" />
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
            <img src={blastoise} alt="blastoise" />
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
                setEditShow(true)
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
                  handleDelete(id);
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
export default ProductManagerCardCard;
