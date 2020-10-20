import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";
import Person from "@material-ui/icons/Person";
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import ViewIcon from '@material-ui/icons/Visibility';

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Table from "../../components/Table/Table.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardHeader from "../../components/Card/CardHeader.js";

import styles from "../../assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";

import product1 from "../../assets/img/product1.jpg";
import product2 from "../../assets/img/product2.jpg";
import product3 from "../../assets/img/product3.jpg";

const useStyles = makeStyles(styles);

export default function Products() {
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
    { color: "success", icon: ViewIcon },
    { color: "warning", icon: Edit },
    { color: "danger", icon: Close }
  ].map((prop, key) => {
    return (
      <Button color={prop.color} className={classes.actionButton} key={key}>
        <prop.icon className={classes.icon} />
      </Button>
    );
  });
  const simpleButtons = [
    { color: "warning", icon: ViewIcon },
    { color: "warning", icon: Edit },
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
    { color: "warning", icon: Person },
    { color: "warning", icon: Edit },
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
    <GridItem xs={12}>
    <Card>
      <CardHeader color="warning" icon>
        <CardIcon color="warning">
          <DynamicFeedIcon />
        </CardIcon>
        <h4 className={classes.cardIconTitle}>All Products</h4>
      </CardHeader>
      <CardBody>
        <Table
          tableHead={[
            "#",
            "Product Name",
            "Category",
            "Qty",
            "Price",
            "Manage"
          ]}
          tableData={[
            [
              "1",
              "Blastoise PSA Graded",
              "Card",
              "13",
              "$ 14,599",
              fillButtons
            ],
            ["2", "Rolex Day Date", "Watch", "8", "$ 47,599", fillButtons],
            ["3", "Rolex President", "Watch", "19", "$ 39,999", fillButtons],
            [
              "4",
              "Charizard PSA Graded",
              "Card",
              "47",
              "€ 4,350",
              fillButtons
            ],
          ]}
          customCellClasses={[classes.center, classes.right, classes.right]}
          customClassesForCells={[0, 4, 5]}
          customHeadCellClasses={[
            classes.center,
            classes.right,
            classes.right
          ]}
          customHeadClassesForCells={[0, 4, 5]}
        />
      </CardBody>
    </Card>
  </GridItem>
      
    </GridContainer>
  );
}
