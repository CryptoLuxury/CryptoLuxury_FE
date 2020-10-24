import React, {useState} from "react";

import axios from "axios";

import { loadStripe } from '@stripe/stripe-js';

import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import styles from "./dashComps/dashboardStyle.js";
import Button from "./dashComps/Button.js";
import Card from "./dashComps/Card.js";
import CardHeader from "./dashComps/CardHeader.js";
import CardBody from "./dashComps/CardBody.js";
import CardFooter from "./dashComps/CardFooter.js";
import SweetAlert from "react-bootstrap-sweetalert";

//icons
import FlightIcon from '@material-ui/icons/FlightTakeoff';
import ViewIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/AddShoppingCart';
import AccountIcon from '@material-ui/icons/AccountBalanceWallet';

const stripePromise = loadStripe('pk_test_51HKzDHEcVyNtCHEW4SzW2thg3LOVBUJOdrdHniqfEJPL4RyaUgI94YpSSeBXjazqy49kjIS5scvqZu1Ai1GVnGMK003ADuPohG');

const useStyles = makeStyles(styles);

const ProductCard = ({watchInfo}) => {

  const { id, name, price, description, quantity, bitpay } = watchInfo;

  const [order, setOrder] = useState({
    name: `${name}`,
    price: watchInfo.price,
    quantity: watchInfo.quantity
  })

  const [alert, setAlert] = React.useState(null);
  const hideAlert = () => {
    setAlert(null);
  }

  const successAlert = () => {
    setAlert(
      <SweetAlert
        success
        style={{ display: "block", marginTop: "100px" }}
        title="Success!"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        confirmBtnCssClass={classes.button + " " + classes.success}
      >
        You've submitted a ticket!
      </SweetAlert>
    );
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

  const handleStripeClick = async () => {

    try {

    // Get Stripe.js instance
    const stripe = await stripePromise;
    // Call your backend to create the Checkout Session
    const response = await axios.post(`https://crypto-luxury.herokuapp.com/api/stripe/create-checkout-session`, order)

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: response.data.id,
    });

    if (result.error) {
      errorAlert();
    }
  } catch(error) {
    console.log(error)
  }
  };

    const classes = useStyles();

    return (
      <div style={{
        height: "60vh",
        width: "33%",
        marginTop: "5%"
      }}>
      {alert}
        <Card product className={classes.cardHover}>
        <CardHeader image className={classes.cardHeaderHover}>
          <div>
            <img src="https://cdn.swisswatchexpo.com/productphotos/7/2/rolex-president-datejust-yellow-gold-pyramid-diamond-bezel-watch-69258-28273_010e2.jpg" alt="king air vector" />
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
              title="Add to Cart"
              placement="bottom"
              classes={{ tooltip: classes.tooltip }}
            >
            <Button color="warning" onClick={handleStripeClick}>
            Add to cart
          </Button>
            </Tooltip>
            <Tooltip
            id="tooltip-top"
            title="Purchase with Crypto"
            placement="bottom"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button color="success" onClick={() => {
              window.open(`${bitpay}`)
            }} simple justIcon>
              <AccountIcon className={classes.underChartIcons} />
            </Button>
          </Tooltip>
          </div>
          <h4 className={classes.cardProductTitle}>
            <a style={{
              color: "#eba92d",
              display: "flex",
              justifyContent: "center",
              textAlign: "center"
            }} href="#pablo" onClick={e => e.preventDefault()}>
              {name}
            </a>
          </h4>
          <p style={{
            color: "#997023",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            height: "5vh"
          }} className={classes.cardProductDesciprion}>
            {description}
          </p>
        </CardBody>
        <CardFooter product>
          <div className={classes.price}>
            <h4 style={{textAlign: "center", color: "#389c66"}}><span style={{color: "#187d20"}}>$</span>{price} <span style={{color: "#0a381f"}}>/kit</span></h4>
          </div>
          <div className={`${classes.stats} ${classes.productStats}`}>
            <FlightIcon /> International
          </div>
        </CardFooter>
      </Card>
      <div hidden id="snipcart" data-api-key="NThiZmE2M2EtNDQ4Yy00MGMzLWEwYTYtOTNmNDJjYjZlMTlhNjM3MzkxMjM3MjA2MDc3NDcw" data-config-add-product-behavior="none"></div>
      </div>
    )
}
export default ProductCard;