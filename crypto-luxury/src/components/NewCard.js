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
          marginBottom: "1%"
        }}>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
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
          <Button color="warning" onClick={handleClose}>
            Add to Crypto Cart
          </Button>
        </Modal.Footer>
      </Modal>
        <Card
        style={{ width: 200 }}
        cover={
          <img
            alt="product"
            src="https://i.ebayimg.com/images/g/4Z4AAOSwePRd-U1P/s-l500.jpg"
          />
        }
        actions={[
          <ViewIcon onClick={handleShow} key="setting" />,
          <AddIcon onClick={() => {
            addToCart(id)
          }} key="edit" />,
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