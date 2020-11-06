import React, { useState } from "react";

import { axiosWithAuthUser } from "../utils/AxiosWithAuthUser";

import "./NewCard.css";

import { Card, Avatar } from "antd";
import ViewIcon from "@material-ui/icons/Visibility";
import AddIcon from "@material-ui/icons/AddShoppingCart";
import AccountIcon from "@material-ui/icons/AccountBalanceWallet";
import ToolTip from "@material-ui/core";

import Modal from "react-bootstrap/Modal";
import Button from "./dashComps/Button";

const { Meta } = Card;

const NewCardWatch = ({ productInfo }) => {
  const { id, type, brand, name, image, price, description, bitpay } = productInfo;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{
        margin: "0 auto",
        marginTop: "1.25%",
        marginBottom: "1.25%"
      }}
    >
    <div style={{color: "black", borderTop: "2px solid #e0c470", width: "50%", margin: "0 auto", textAlign: "center", fontSize: "1.1rem", paddingBottom: "1%", fontFamily: "'Raleway', sans-serif"}}>
    {brand}
  </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{
            display: "flex",
            justifyContent: "center"
          }}>{brand} {name}</Modal.Title>
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
            <p style={{width: "100%", display: "flex", justifyContent: "center", margin: "0 auto", marginTop: "5%"}}>{description}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
        <Button style={{color: "#e0c470"}} justIcon simple
        className="snipcart-add-item"
        data-item-id={`${id}`}
        data-item-image={image}
        data-item-price={price}
        data-item-url={`/api/store/products/${id}`}
        data-item-description={`${description}`}
        data-item-name={`${name}`}
      >
        <AddIcon />
      </Button>

          <Button style={{color: "#e0c470"}} justIcon simple onClick={handleClose}>
            <AccountIcon />
          </Button>
        </Modal.Footer>
      </Modal>
      <Card
        style={{ width: 200, margin: "0 auto", fontFamily: "'Raleway', sans-serif" }}
        cover={
          <img
            alt="product"
            src={image}
            style={{backgroundSize: "contain"}}
          />
        }
        actions={[
          <Button style={{color: "#e0c470"}} justIcon simple onClick={handleShow}>
            <ViewIcon />
          </Button>,
          <Button style={{color: "#e0c470"}} justIcon simple
          className="snipcart-add-item"
          data-item-image={image}
          data-item-id={`${id}`}
          data-item-price={price}
          data-item-url={`/api/store/products/${id}`}
          data-item-description={`${description}`}
          data-item-name={`${name}`}
        >
          <AddIcon />
        </Button>,
        <Button style={{color: "#e0c470"}} justIcon simple onClick={() => {
          window.open(`${bitpay}`)
        }}>
        <AccountIcon />
        </Button>,
        ]}
      >
        <Meta title={name} description={'$' + `${price}`} />
      </Card>
    </div>
  );
};

export default NewCardWatch;
