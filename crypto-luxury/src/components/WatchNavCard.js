import React, {useState} from "react";

import { axiosWithAuthUser } from "../utils/AxiosWithAuthUser";

import Col from "react-bootstrap/Col";

import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import ViewIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/AddShoppingCart';
import AccountIcon from '@material-ui/icons/AccountBalanceWallet';
import ToolTip from "@material-ui/core"

import Modal from "react-bootstrap/Modal";
import Button from "./dashComps/Button";


const { Meta } = Card;

const NewCardWatch = ({watchInfo}) => {

    const { id, name, price, description, bitpay } = watchInfo;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [order, setOrder] = useState({
        name: `${name}`,
        price: watchInfo.price,
        quantity: watchInfo.quantity
      })

    const [cartInfo, setCartInfo] = useState({
        user_id: window.localStorage.getItem('id'),
        watch_id: watchInfo.id
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
        <div style={{
          backgroundColor: "#f2f2f2"
        }}>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title wariant="warning">{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{width: "100%"}}>
            <img src="https://i.ebayimg.com/images/g/4Z4AAOSwePRd-U1P/s-l500.jpg" style={{height: "200px", width: "200px"}} alt="product info" />
            </div>
            <div>
                <p>{description}</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="warning" onClick={() => {
              addToCart()
          }}>
            Add to Fiat Cart
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
          <img src="https://i.ebayimg.com/images/g/4Z4AAOSwePRd-U1P/s-l500.jpg" alt="adamaaa" style={{
            height: "50px",
            width: "50px"
          }} /> 
          </Col>
            <Col style={{
              marginTop: "2%"
            }}>
              <h4 style={{
                color: "#24221e",
                fontSize: ".75rem",
              }}>{name}</h4>
            </Col>
              <Col style={{
                marginTop: "3%"
              }}>
              <h4 style={{
                color: "#24221e",
                fontSize: ".75rem"
              }}>${price}</h4>
            </Col>
            <Col style={{
              paddingTop: "2%",
              paddingLeft: "3%"
            }}>
              <ViewIcon color="warning" onClick={() => {
                setShow(true)
              }} />
            </Col>
            <Col>
            <Button color="warning" simple onClick={() => {
              addToCart()
          }}>
            Add to Fiat Cart
          </Button>
          </Col>
            <Col>
            <Button color="warning" simple onClick={() => {
              window.open(`${bitpay}`)
            }}>
            Add to Crypto Cart
            </Button>
          </Col>
          </div>
      </div>
    )
}

export default NewCardWatch;