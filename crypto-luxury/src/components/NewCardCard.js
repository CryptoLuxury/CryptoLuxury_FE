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


    return (
        <div style={{
          marginBottom: "1%"
        }}>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div style={{width: "100%", display: "flex", justifyContent: "center", margin: "0 auto"}}>
            <img style={{height: "100px", width: "100px"}} src="https://i.imgur.com/V0gtztn.png" alt="product info" />
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
            src="https://i.imgur.com/V0gtztn.png"
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
          data-item-url={`/cards/${id}`}
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
        <Meta
          title={name}
          description={'$' + `${price}`}
        />
      </Card>
        </div>
    )
}

export default NewCardWatch;