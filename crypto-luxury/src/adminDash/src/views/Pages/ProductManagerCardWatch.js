import React, { useState, useEffect } from "react";

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import styles from "../../assets/jss/material-dashboard-pro-react/hoverCardStyle";
import Button from "../../components/CustomButtons/Button";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

//icons
import FlightIcon from '@material-ui/icons/FlightTakeoff';
import Edit from "@material-ui/icons/Edit";
import ViewIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/AddShoppingCart';
import SweepIcon from '@material-ui/icons/DeleteSweep';

import blastoise from "../Dashboard/blastoise.png";
import { ContactPhone } from "@material-ui/icons";


const useStyles = makeStyles(styles);

const ProductManagerCardWatch = ({watchInfo}) => {

    const classes = useStyles();
    const { id, title, price, description, bitpay } = watchInfo;

    const handleDeleteListing = (id) => {
      axios.delete(`https://crypto-luxury.herokuapp.com/api/store/watches/:${id}`)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    } 

    return (
      <div style={{
        height: "60vh",
        width: "33%",
        marginTop: "5%"
      }}>
        <Card product className={classes.cardHover}>
          <CardHeader image className={classes.cardHeaderHover}>
            <div>
              <img src="https://cdn.swisswatchexpo.com/productphotos/7/2/rolex-president-datejust-yellow-gold-pyramid-diamond-bezel-watch-69258-28273_010e2.jpg" alt="watch" />
            </div>
          </CardHeader>
          <CardBody>
            <div className={classes.cardHoverUnder}>
              <Tooltip
                id="tooltip-top"
                title="Edit Listing"
                placement="bottom"
                classes={{ tooltip: classes.tooltip }}
              >
                <Edit color="warning" simple justIcon>
                  <AddIcon className={classes.underChartIcons} />
                </Edit>
              </Tooltip>
              <Tooltip
              id="tooltip-top"
              title="Delete Listing"
              placement="bottom"
              classes={{ tooltip: classes.tooltip }}
            >
              <Button color="danger" onClick={handleDeleteListing({id})} simple justIcon>
                <SweepIcon className={classes.underChartIcons} />
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
              <FlightIcon color="warning" /> <span style={{color: "#0a381f"}}>International</span>
            </div>
          </CardFooter>
        </Card>
      </div>
    )
}
export default ProductManagerCardWatch;