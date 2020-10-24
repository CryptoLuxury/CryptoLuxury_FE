import React, {useState} from "react";

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";

import { loadStripe } from '@stripe/stripe-js';
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
import FlightIcon from '@material-ui/icons/FlightTakeoff';
import Edit from "@material-ui/icons/Edit";
import ViewIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import AddIcon from '@material-ui/icons/AddShoppingCart';
import AccountIcon from '@material-ui/icons/AccountBalanceWallet';

import blastoise from "./blastoise.png";

const useStyles = makeStyles(styles);

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const ProductCard = ({cardInfo}) => {

    const { name, price, description, quantity, bitpay } = cardInfo;

    const classes = useStyles();

    const [order, setOrder] = useState({
      name: `${name}`,
      price: {price},
      quantity: {quantity},
      
    })

      const [alert, setAlert] = React.useState(null);
  const hideAlert = () => {
    setAlert(null);
  }

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
              title="Add to Cart"
              placement="bottom"
              classes={{ tooltip: classes.tooltip }}
            >
            <Button color="warning" class="snipcart-add-item"
            data-item-id="rolex-watch"
            data-item-price={price}
            data-item-url="/admin"
            data-item-description={description}
            data-item-image="/avatar.png"
            data-item-name={name}>
            Add to cart
          </Button>
            </Tooltip>
            <Tooltip
            id="tooltip-top"
            title="Purchase with Crypto"
            placement="bottom"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button color="success" simple onClick={() => {
              window.open(`${bitpay}`)
            }} justIcon>
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
            <h4 style={{textAlign: "center", color: "#389c66"}}><span style={{color: "#187d20"}}>$</span>{price} <span style={{color: "#0a381f"}}>/card</span></h4>
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