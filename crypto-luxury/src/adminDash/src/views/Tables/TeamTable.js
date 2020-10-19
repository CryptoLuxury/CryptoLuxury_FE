import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";

// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";

import { cardTitle } from "../../assets/jss/material-dashboard-pro-react.js";

const styles = {
  customCardContentClass: {
    paddingLeft: "0",
    paddingRight: "0"
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

const useStyles = makeStyles(styles);

export default function RegularTables() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Your Team</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Location", "Position", "Zone"]}
              tableData={[
                ["Carl Sachs", "Detroit", "Developer", "EST"],
                ["William Ryan", "Virginia", "Developer", "EST"],
                ["Neko", "California", "Owner", "PST"],
              ]}
              coloredColls={[3]}
              colorsColls={["primary"]}
            />
          </CardBody>
        </Card>
      </GridItem>
      </GridContainer>
  );
}
