import React from "react";

import { makeStyles } from "@material-ui/core/styles";
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

//icons
import FlightIcon from '@material-ui/icons/FlightTakeoff';
import Edit from "@material-ui/icons/Edit";
import ViewIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import AddIcon from '@material-ui/icons/AddShoppingCart';


import Container from "react-bootstrap/Container"

const useStyles = makeStyles(styles);

const ProductCard = ({watchInfo}) => {

    const { title, price, description, bitpay } = watchInfo;

    const classes = useStyles();

    return (
      <div style={{
        height: "60vh",
        width: "33%",
        marginTop: "5%"
      }}>
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
              <Button color="warning" simple justIcon>
                <AddIcon className={classes.underChartIcons} />
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
              <AddIcon className={classes.underChartIcons} />
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
              {title}
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