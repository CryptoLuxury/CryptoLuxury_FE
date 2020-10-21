import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import styles from "../../assets/jss/material-dashboard-pro-react/hoverCardStyle";
import Button from "../../components/CustomButtons/Button";
import Danger from "../../components/Typography/Danger";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

//icons
import FlightIcon from '@material-ui/icons/FlightTakeoff';
import Edit from "@material-ui/icons/Edit";
import ViewIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import AddIcon from '@material-ui/icons/AddShoppingCart';


import Container from "react-bootstrap/Container"

const useStyles = makeStyles(styles);

const ProductManagerCardWatch = ({watchInfo}) => {

    const classes = useStyles();
    const { title, price, description } = watchInfo;

    return (
      <div style={{
        height: "60vh",
        width: "33%",
        marginTop: "5%"
      }}>
        <Card product className={classes.cardHover}>
        <CardHeader image className={classes.cardHeaderHover}>
          <div>
            <img src="https://cdn-products.chronext.com/V/2/V26422/V26422_1_det.png" alt="king air vector" />
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
              title="Edit Listing"
              placement="bottom"
              classes={{ tooltip: classes.tooltip }}
            >
              <Button color="warning" simple justIcon>
                <AddIcon className={classes.underChartIcons} />
              </Button>
            </Tooltip>
            <Tooltip
            id="tooltip-top"
            title="Delete Listing"
            placement="bottom"
            classes={{ tooltip: classes.tooltip }}
          >
            <Button color="danger" simple justIcon>
              <AddIcon className={classes.underChartIcons} />
            </Button>
          </Tooltip>
          </div>
          <h4 className={classes.cardProductTitle}>
            <a style={{ color: "#7d5a19" }} href="#pablo" onClick={e => e.preventDefault()}>
              {title}
            </a>
          </h4>
          <p className={classes.cardProductDesciprion}>
            {description}
          </p>
        </CardBody>
        <CardFooter product>
          <div className={classes.price}>
            <h4>${price} /kit</h4>
          </div>
          <div className={`${classes.stats} ${classes.productStats}`}>
            <FlightIcon /> International
          </div>
        </CardFooter>
      </Card>
      </div>
    )
}
export default ProductManagerCardWatch;