import React, { useState } from "react";

import { axiosWithAuthUser } from "../utils/AxiosWithAuthUser";



import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import ViewIcon from "@material-ui/icons/Visibility";
import AddIcon from "@material-ui/icons/AddShoppingCart";
import AccountIcon from "@material-ui/icons/AccountBalanceWallet";
import ToolTip from "@material-ui/core";

import Modal from "react-bootstrap/Modal";
import Button from "./dashComps/Button";

const { Meta } = Card;

const NewCardWatch = ({ productInfo }) => {
  const { id, name, image, price, description, bitpay } = productInfo;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{
        marginBottom: "1%",
      }}
    >
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
        data-item-url={`/products/:${id}`}
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
          <Button justIcon onClick={handleShow}>
            <ViewIcon />
          </Button>,
          <Button color="warning" justIcon
          className="snipcart-add-item"
          data-item-id={`${id}`}
          data-item-price={price}
          data-item-url={`/products/:${id}`}
          data-item-description={`${description}`}
          data-item-name={`${name}`}
        >
          <AddIcon />
        </Button>,
        <Button color="warning" justIcon onClick={() => {
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
