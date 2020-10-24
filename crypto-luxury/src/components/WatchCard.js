import React, {useState} from "react";

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

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const useStyles = makeStyles(styles);

const ProductCard = ({watchInfo}) => {

  const { id, name, price, description, quantity, bitpay } = watchInfo;

  const [order, setOrder] = useState({
    name: `${name}`,
    price: {price},
    quantity: {quantity}
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

  // const handleStripeClick = async (event) => {
  //   // Get Stripe.js instance
  //   const stripe = await stripePromise;

  //   // Call your backend to create the Checkout Session
  //   const response = await fetch(`https://crypto-luxury.herokuapp.com/api/stripe/create-checkout-session`, order, { 
  //     method: 'POST'
  //   }, { headers: {
  //     Content: 'application/json'
  //   } } );
  //   const { error } = await stripe.redirectToCheckout({
  //     mode: 'payment',
  //     successUrl: 'https://localhost:3000/success',
  //     cancelUrl: 'https://localhost:3000/cancel',
  //   });

  //   const session = await response.json();

  //   // When the customer clicks on the button, redirect them to Checkout.
  //   const result = await stripe.redirectToCheckout({
  //     sessionId: session.id,
  //   });

  //   if (result.error) {
  //     errorAlert();
  //   }
  // };

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
            <Button color="warning" class="snipcart-add-item"
            data-item-id={`${id}`}
            data-item-price={`${price}`}
            data-item-url="/admin"
            data-item-description={`${description}`}
            data-item-image="/team.png"
            data-item-name={`${name}`}>
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
      </div>
    )
}
export default ProductCard;