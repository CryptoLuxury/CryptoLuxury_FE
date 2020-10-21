import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

import Container from "react-bootstrap/Container";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Delete from '@material-ui/icons/DeleteForever';

// core components
import GridContainer from "../../adminDash/src/components/Grid/GridContainer.js";
import GridItem from "../../adminDash/src/components/Grid/GridItem.js";
import Table from "../../adminDash/src/components/Table/Table.js";
import Button from "../../adminDash/src/components/CustomButtons/Button.js";
import Card from "../../adminDash/src/components/Card/Card.js";
import CardBody from "../../adminDash/src/components/Card/CardBody.js";
import CardIcon from "../../adminDash/src/components/Card/CardIcon.js";
import CardHeader from "../../adminDash/src/components/Card/CardHeader.js";

import styles from "../../adminDash/src/assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";

import product1 from "./example.png";


const useStyles = makeStyles(styles);

export default function CartTable() {
  const [checked, setChecked] = React.useState([]);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const classes = useStyles();
  const fillButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button color={prop.color} className={classes.actionButton} key={key}>
        <prop.icon className={classes.icon} />
      </Button>
    );
  });
  const simpleButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button
        color={prop.color}
        simple
        className={classes.actionButton}
        key={key}
      >
        <prop.icon className={classes.icon} />
      </Button>
    );
  });
  const roundButtons = [
    { color: "info", icon: Person },
    { color: "success", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button
        round
        color={prop.color}
        className={classes.actionButton + " " + classes.actionButtonRound}
        key={key}
      >
        <prop.icon className={classes.icon} />
      </Button>
    );
  });
  return (
    <GridContainer>
      <Container>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Your Cart</h4>
          </CardHeader>
          <CardBody style={{
            display: "flex",
            flexFlow: "column nowrap"
          }}>
            <Table
              tableHead={[
                "",
                "PRODUCT",
                "PRICE",
                "QTY",
                ""
              ]}
              tableData={[
                [
                  <div className={classes.imgContainer} key="key">
                    <img src={product1} alt="..." className={classes.img} />
                  </div>,
                  <span key="key">
                    <a href="#jacket" className={classes.tdNameAnchor}>
                      Blastoise
                    </a>
                    <br />
                    <small className={classes.tdNameSmall}>
                      by Dolce&amp;Gabbana
                    </small>
                  </span>,
                  <span key="key">
                    <small className={classes.tdNumberSmall}>$</small> 15,549
                  </span>,
                  <span key="key">
                    {` `}1{` `}
                  </span>,
                  <Button simple className={classes.actionButton} key="key">
                    <Close className={classes.icon} />
                  </Button>,
                  <Button color="danger"><Delete /></Button>
                ],
                [
                  <div className={classes.imgContainer} key="key">
                    <img src={product1} alt="..." className={classes.img} />
                  </div>,
                  <span key="key">
                    <a href="#jacket" className={classes.tdNameAnchor}>
                      Rolex Day Date{" "}
                    </a>
                    <br />
                    <small className={classes.tdNameSmall}>by Rolex</small>
                  </span>,
                  <span key="key">
                    <small className={classes.tdNumberSmall}>$</small> 49,499
                  </span>,
                  <span key="key">
                    2{` `}
                    <div className={classes.buttonGroup}>
                      <Button
                        color="info"
                        size="sm"
                        round
                        className={classes.firstButton}
                      >
                        <Remove className={classes.icon} />
                      </Button>
                      <Button
                        color="info"
                        size="sm"
                        round
                        className={classes.lastButton}
                      >
                        <Add className={classes.icon} />
                      </Button>
                    </div>
                  </span>,
                ],
                [
                  <div className={classes.imgContainer} key="key">
                    <img src={product1} alt="..." className={classes.img} />
                  </div>,
                  <span key="key">
                    <a href="#jacket" className={classes.tdNameAnchor}>
                      Rolex President
                    </a>
                    <br />
                    <small className={classes.tdNameSmall}>by Rolex</small>
                  </span>,
                  <span key="key">
                    <small className={classes.tdNumberSmall}>$</small> 59,799
                  </span>,
                  <span key="key">
                    1{` `}
                    <div className={classes.buttonGroup}>
                      <Button
                        color="info"
                        size="sm"
                        round
                        className={classes.firstButton}
                      >
                        <Remove className={classes.icon} />
                      </Button>
                      <Button
                        color="info"
                        size="sm"
                        round
                        className={classes.lastButton}
                      >
                        <Add className={classes.icon} />
                      </Button>
                    </div>
                  </span>,
                  <Button simple className={classes.actionButton} key="key">
                    <Close className={classes.icon} />
                  </Button>
                ],
                {
                  total: true,
                  colspan: "2",
                  amount: (
                    <span key="key">
                      <small>€</small>2,346
                    </span>
                  )
                },
                {
                  purchase: true,
                  colspan: "2",
                  col: {
                    colspan: 2,
                    text: (
                      <Button color="info" round>
                        Complete Purchase{" "}
                        <KeyboardArrowRight className={classes.icon} />
                      </Button>
                    )
                  }
                }
              ]}
              tableShopping
              customHeadCellClasses={[
                classes.center,
                classes.description,
                classes.description,
                classes.right,
                classes.right,
                classes.right
              ]}
              customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
              customCellClasses={[
                classes.tdName,
                classes.customFont,
                classes.customFont,
                classes.tdNumber,
                classes.tdNumber + " " + classes.tdNumberAndButtonGroup,
                classes.tdNumber
              ]}
              customClassesForCells={[1, 2, 3, 4, 5, 6]}
            />
          </CardBody>
        </Card>
      </Container>
    </GridContainer>
  );
}
