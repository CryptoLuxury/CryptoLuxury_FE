import React, { useState } from "react";

import axios from "axios";
import { axiosWithAuthUser } from "../utils/AxiosWithAuthUser";

import Container from "react-bootstrap/Container";

import { makeStyles } from "@material-ui/core/styles";

import { loadStripe } from "@stripe/stripe-js";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import styles from "./dashComps/dashboardStyle.js";
import Button from "./dashComps/Button.js";
import Danger from "./dashComps/Danger.js";
import Card from "./dashComps/Card.js";
import CardHeader from "./dashComps/CardHeader.js";
import CardIcon from "./dashComps/CardIcon.js";
import CardBody from "./dashComps/CardBody.js";
import CardFooter from "./dashComps/CardFooter.js";
import SweetAlert from "react-bootstrap-sweetalert";

//icons
import FlightIcon from "@material-ui/icons/FlightTakeoff";
import Edit from "@material-ui/icons/Edit";
import ViewIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import AddIcon from "@material-ui/icons/AddShoppingCart";
import AccountIcon from "@material-ui/icons/AccountBalanceWallet";

import blastoise from "./blastoise.png";

const useStyles = makeStyles(styles);

// const stripePromise = loadStripe('pk_test_51HKzDHEcVyNtCHEW4SzW2thg3LOVBUJOdrdHniqfEJPL4RyaUgI94YpSSeBXjazqy49kjIS5scvqZu1Ai1GVnGMK003ADuPohG');

const ProductCard = ({ cardInfo }) => {
  const productId = cardInfo.id;

  const { id, name, price, description, quantity, bitpay } = cardInfo;

  const [cartInfo, setCartInfo] = useState({
    user_id: window.localStorage.getItem("id"),
    card_id: cardInfo.id,
  });

  const addToCart = () => {
    axiosWithAuthUser()
      .post(`https://crypto-luxury.herokuapp.com/api/form/cardOrders`, cartInfo)
      .then((res) => {
        alert("success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const classes = useStyles();

  const [order, setOrder] = useState({
    name: `${name}`,
    price: cardInfo.price,
    quantity: cardInfo.quantity,
  });

  const [alert, setAlert] = React.useState(null);
  const hideAlert = () => {
    setAlert(null);
  };

  const errorAlert = () => {
    setAlert(
      <SweetAlert
        danger
        style={{ display: "block", marginTop: "80px" }}
        title="Error!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        That's not supposed to happen :(
      </SweetAlert>
    );
  };

  return (
    <Container
      style={{
        height: "60vh",
        width: "100%",
        marginTop: "5%",
      }}
    >
      {alert}
      <Card product className={classes.cardHover}>
        <CardHeader image className={classes.cardHeaderHover}>
          <div>
            <img src={blastoise} alt="blastoise" />
          </div>
        </CardHeader>
        <CardBody>
          <div className={classes.cardHoverUnder}>
            <Tooltip
              id="tooltip-top"
              title="View Listing"
              placement="bottom"
              classes={{ tooltip: classes.tooltip }}
            >
              <Button color="transparent" simple justIcon>
                <ViewIcon className={classes.underChartIcons} />
              </Button>
            </Tooltip>
            <Tooltip
              id="tooltip-top"
              title="Add to Carts"
              placement="bottom"
              classes={{ tooltip: classes.tooltip }}
            >
              <Button color="warning" onClick={addToCart}>
                Add to cart
              </Button>
            </Tooltip>
            <Tooltip
              id="tooltip-top"
              title="Purchase with Crypto"
              placement="bottom"
              classes={{ tooltip: classes.tooltip }}
            >
              <Button
                color="success"
                simple
                onClick={() => {
                  window.open(`${bitpay}`);
                }}
                justIcon
              >
                <AccountIcon className={classes.underChartIcons} />
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
              {name}
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
        </CardBody>
        <CardFooter product>
          <div className={classes.price}>
            <h4 style={{ textAlign: "center", color: "#389c66" }}>
              <span style={{ color: "#187d20" }}>$</span>
              {price} <span style={{ color: "#0a381f" }}>/card</span>
            </h4>
          </div>
          <div className={`${classes.stats} ${classes.productStats}`}>
            <FlightIcon /> International
          </div>
        </CardFooter>
      </Card>
    </Container>
  );
};
export default ProductCard;
