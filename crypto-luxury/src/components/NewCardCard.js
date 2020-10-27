import React, {useState} from "react";

import { axiosWithAuthUser } from "../utils/AxiosWithAuthUser";

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
        card_id: cardInfo.id
    })

    const addToCart = () => {
    axiosWithAuthUser().post(`https://crypto-luxury.herokuapp.com/api/form/cardOrders`, cartInfo)
    .then(res => {
      alert('success')
    })
    .catch(err => {
      console.log(err)
    })
  }

    return (
        <div style={{
          marginBottom: "1%"
        }}>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div>
            <img style={{height: "100px", width: "100px"}} src="https://i.imgur.com/V0gtztn.png" alt="product info" />
            </div>
            <div>
                <p>{description}</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={() => {
              addToCart()
          }}>
            Add to Fiat Cart
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Add to Crypto Cart
          </Button>
        </Modal.Footer>
      </Modal>
        <Card
        style={{ width: 200 }}
        cover={
          <img
            alt="product"
            src="https://i.imgur.com/V0gtztn.png"
          />
        }
        actions={[
          <ViewIcon onClick={handleShow} key="setting" />,
          <Button justIcon
          className="snipcart-add-item"
          data-item-id={`${name}`}
          data-item-price={price.toFixed(2)}
          data-item-url="http://localhost:3000"
          data-item-description={`${description}`}
          data-item-name={`${name}`}
        >
          <AddIcon />
        </Button>,
          <AccountIcon onClick={() => {
              window.open(`${bitpay}`)
          }} key="ellipsis" />,
        ]}
      >
        <Meta
          title={name}
          description={price}
        />
      </Card>
        </div>
    )
}

export default NewCardWatch;