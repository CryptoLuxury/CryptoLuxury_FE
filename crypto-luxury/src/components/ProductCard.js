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


import Container from "react-bootstrap/Container"

const useStyles = makeStyles(styles);

const ProductCard = () => {

    const classes = useStyles();

    return (
      <div style={{
        height: "60vh",
        width: "33%",
        marginTop: "5%"
      }}>
        <Card product className={classes.cardHover}>
        <CardHeader image className={classes.cardHeaderHover}>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img src="https://cdn-products.chronext.com/V/2/V26422/V26422_1_det.png" alt="king air vector" />
          </a>
        </CardHeader>
        <CardBody>
          <div className={classes.cardHoverUnder}>
            <Tooltip
              id="tooltip-top"
              title="View Listing"
              placement="bottom"
              classes={{ tooltip: classes.tooltip }}
            >
              <Button color="warning" simple justIcon>
                <ViewIcon className={classes.underChartIcons} />
              </Button>
            </Tooltip>
            <Tooltip
              id="tooltip-top"
              title="Add to Cart"
              placement="bottom"
              classes={{ tooltip: classes.tooltip }}
            >
              <Button color="transparent" simple justIcon>
                <Edit className={classes.underChartIcons} />
              </Button>
            </Tooltip>
            <Tooltip
              id="tooltip-top"
              title="Delete"
              placement="bottom"
              classes={{ tooltip: classes.tooltip }}
            >
              <Button color="danger" simple justIcon>
                <DeleteIcon className={classes.underChartIcons} />
              </Button>
            </Tooltip>
          </div>
          <h4 className={classes.cardProductTitle}>
            <a href="#pablo" onClick={e => e.preventDefault()}>
              Rolex Air King
            </a>
          </h4>
          <p className={classes.cardProductDesciprion}>
          This is an example of what you could put here regarding cards or watches, or whatever really.
          </p>
        </CardBody>
        <CardFooter product>
          <div className={classes.price}>
            <h4>$49,542/kit</h4>
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