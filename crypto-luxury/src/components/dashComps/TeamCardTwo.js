import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import styles from "../../adminDash/src/assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";

import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";
import Button from "../../adminDash/src/components/CustomButtons/Button";
import Card from "../../adminDash/src/components/Card/Card.js";
import CardHeader from "../../adminDash/src/components/Card/CardHeader.js";
import CardBody from "../../adminDash/src/components/Card/CardBody.js";
import CardFooter from "../../adminDash/src/components/Card/CardFooter.js";
import CardAvatar from "../../adminDash/src/components/Card/CardAvatar";

import avatar from "../logoavatar.png";

const useStyles = makeStyles(styles);

const TeamCard = ({membersInfo}) => {

  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  React.useEffect(() => {
    let id = setTimeout(function() {
      setCardAnimation("");
    }, 700);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.clearTimeout(id);
    };
  });

  const classes = useStyles();

    const { name, role } = membersInfo;

    return (

        <Card
        profile
        className={classes.customCardClass + " " + classes[cardAnimaton]}
        >
        <CardAvatar profile className={classes.cardAvatar}>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img src={avatar} alt="generic avatar with a mask for the rona" />
          </a>
        </CardAvatar>
        <CardBody profile>
          <h4 className={classes.cardTitle} style={{
              color: "#e0a72b"
          }}>{name}</h4>
            <h6 style={{
                color: "#523c0d"
            }}>{role}</h6>
        </CardBody>
        <CardFooter className={classes.justifyContentCenter}>
        <div style={{
          margin: "0 auto"
        }}>
          <Button color="warning" round>
            Message
          </Button>
        </div>
        </CardFooter>
      </Card>

    )
}

export default TeamCard;