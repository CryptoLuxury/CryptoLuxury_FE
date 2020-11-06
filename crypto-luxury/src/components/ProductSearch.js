import React, {useState} from "react";

import { axiosWithAuthUser } from "../utils/AxiosWithAuthUser";



import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import ViewIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/AddShoppingCart';
import AccountIcon from '@material-ui/icons/AccountBalanceWallet';
import ToolTip from "@material-ui/core"

import Modal from "react-bootstrap/Modal";
import Button from "./dashComps/Button";


const { Meta } = Card;

const NewCardWatch = ({productInfo}) => {

    const { id, brand, image, name, price, description, bitpay } = productInfo;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{
        }}>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title variant="warning">{brand} {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{width: "100%", display: "flex", justifyContent: "center", margin: "0 auto"}}>
            <img src={image} style={{height: "200px", width: "200px"}} alt="product info" />
            </div>
            <div>
                <p style={{width: "100%", display: "flex", justifyContent: "center", margin: "0 auto", paddingTop: "3%"}}>{description}</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
        <Button color="warning" justIcon
        className="buy-button snipcart-add-item"
        data-item-id={`${id}`}
        data-item-image={image}
        data-item-price={price}
        data-item-url={`/api/store/products/${id}`}
        data-item-description={`${description}`}
        data-item-name={`${name}`}
        >
        <AddIcon />
        </Button>
          <Button color="warning" onClick={() => {
            window.open(`${bitpay}`)
          }}>
            Add to Crypto Cart
          </Button>
        </Modal.Footer>
      </Modal>
          <div style={{
            display: "flex",
            justifyContent: "space-evenly"
          }}>
          <Col>
          <img src={image} alt="product searchnail" style={{width: "30px", height: "30px", paddingTop: "20%"}} />
          </Col>
          <Col>
          <Row style={{
            paddingTop: "15%",
          }}>
            <h4 style={{
              color: "#cca964",
              fontSize: ".75rem",
            }}>{brand}</h4>
          </Row>
            <Row style={{
              marginTop: "3%",
            }}>
              <h4 style={{
                color: "#cca964",
                fontSize: ".75rem",
              }}>{name}</h4>
            </Row>
              <Row style={{
                marginTop: "3%",
              }}>
              <h4 style={{
                color: "#cca964",
                fontSize: ".75rem"
              }}>${price}</h4>
            </Row>
            </Col>
            <Col>
            <Button justIcon onClick={handleShow}>
            <ViewIcon />
            </Button>
            </Col>
            <Col>
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
          </Col>
            <Col>
            <Button color="warning" justIcon onClick={() => {
              window.open(`${bitpay}`)
              }}>
              <AccountIcon />
            </Button>
          </Col>
          </div>
      </div>
    )
}

export default NewCardWatch;