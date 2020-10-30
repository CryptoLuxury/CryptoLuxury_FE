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

const NewCardWatch = ({cardInfo}) => {

    const { id, name, price, description, bitpay } = cardInfo;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [order, setOrder] = useState({
        name: `${name}`,
        price: cardInfo.price,
        quantity: cardInfo.quantity
      })

    const [cartInfo, setCartInfo] = useState({
        user_id: window.localStorage.getItem('id'),
        watch_id: cardInfo.id
    })

    const addToCart = () => {
    axiosWithAuthUser().post(`https://crypto-luxury.herokuapp.com/api/form/watchOrders`, cartInfo)
    .then(res => {
      alert('success')
    })
    .catch(err => {
      console.log(err)
    })
  }

    return (
        <div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title wariant="warning">{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{width: "100%", display: "flex", justifyContent: "center", margin: "0 auto"}}>
            <img src="https://i.ebayimg.com/images/g/4Z4AAOSwePRd-U1P/s-l500.jpg" style={{height: "200px", width: "200px", display: "flex", justifyContent: "center"}} alt="product info" />
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
        data-item-url={`/cards/${id}`}
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
        <Row style={{
          marginTop: "2%",
        }}>
          <h4 style={{
            color: "#24221e",
            fontSize: ".75rem",
          }}>{name}</h4>
        </Row>
          <Row style={{
            marginTop: "3%",
          }}>
          <h4 style={{
            color: "#24221e",
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
        data-item-url={`/cards/${id}`}
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