import React from "react";

//alerts
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardBody from "../../components/Card/CardBody.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardHeader from "../../components/Card/CardHeader.js";
import ReactTable from "../../components/ReactTable/ReactTable.js";

import { dataTable } from "../../variables/general.js";

import { cardTitle } from "../../assets/jss/material-dashboard-pro-react.js";
import styles from "../../assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.js";

const stylesTwo = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

const useStyles = makeStyles(stylesTwo);

export default function ReactTables() {

    const [alert,setAlert] = React.useState(null);
    const hideAlert = () => {
      setAlert(null);
    }
    const successAlert = () => {
      setAlert(
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Good job!"
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            classes.button + " " + classes.success
          }
        >
        You've clicked LIKE button on 
        </SweetAlert>
      );
    }
  const [data, setData] = React.useState(
    dataTable.dataRows.map((prop, key) => {
      return {
        id: key,
        name: prop[0],
        position: prop[1],
        office: prop[2],
        age: prop[3],
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to add a like kind of action */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                let obj = data.find(o => o.id === key);
                setAlert()
              }}
              color="warning"
              className="like"
            >
              <Favorite />
            </Button>{" "}
            {/* use this button to add a edit kind of action */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                let obj = data.find(o => o.id === key);
                alert(
                  "You've clicked EDIT button on \n{ \nName: " +
                    obj.name +
                    ", \nposition: " +
                    obj.position +
                    ", \noffice: " +
                    obj.office +
                    ", \nage: " +
                    obj.age +
                    "\n}."
                );
              }}
              color="warning"
              className="edit"
            >
              <Dvr />
            </Button>{" "}
            {/* use this button to remove the data row */}
            <Button
              justIcon
              round
              simple
              onClick={() => {
                var newData = data;
                newData.find((o, i) => {
                  if (o.id === key) {
                    // here you should add some custom code so you can delete the data
                    // from this component and from your server as well
                    newData.splice(i, 1);
                    return true;
                  }
                  return false;
                });
                setData([...newData]);
              }}
              color="danger"
              className="remove"
            >
              <Close />
            </Button>{" "}
          </div>
        )
      };
    })
  );
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="warning" icon>
            <CardIcon color="warning">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>All Orders</h4>
          </CardHeader>
          <CardBody>
            <ReactTable
              columns={[
                {
                  Header: "Name",
                  accessor: "name"
                },
                {
                  Header: "Order ID",
                  accessor: "orderId"
                },
                {
                  Header: "Product",
                  accessor: "product"
                },
                {
                  Header: "Status",
                  accessor: "status"
                },
                {
                  Header: "Actions",
                  accessor: "actions"
                }
              ]}
              data={data}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
