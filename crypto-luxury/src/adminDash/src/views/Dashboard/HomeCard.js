import React from "react";

import { axiosWithAuthUser } from "../../../../utils/AxiosWithAuthUser";

import SweetAlert from 'react-bootstrap-sweetalert';

import "./HomeCard.css";

import styles from "../../assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

const HomeCard = ({itemInfo}) => {

  const classes = useStyles();

    const { id, image, title, subtitle, link } = itemInfo;

    const [alert, setAlert] = React.useState(null);
    const hideAlert = () => {
      setAlert(null);
    }
  
    const successAlert = () => {
      setAlert(
        <SweetAlert
          success
          style={{ display: "block", marginTop: "100px" }}
          title="Success!"
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          confirmBtnCssClass={classes.button + " " + classes.success}
        >
          You've deleted that card!
        </SweetAlert>
      );
    };
  
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

    const handleDeleteCard = (id) => {
        axiosWithAuthUser()
          .delete(`/api/store/features/${id}`)
          .then((res) => {
            successAlert()
          })
          .catch((err) => {
            errorAlert();
          });
      };

    return (
        <div onClick={() => {
            handleDeleteCard(id)
          }} className="homecardstyle">
        <div>
        {alert}
        <img className="imagehome" style={{ opacity: ".7", position: "absolute", zIndex: "-1"}} src={image} alt="homecard" />
        </div>
            <div style={{
                width: "100%",
                textAlign: "right",
                marginTop: "88%",
            }}>
                <h4 style={{color: "#38342d", paddingRight: "3%"}}>{title}</h4>
            </div>
        </div>
    )
}

export default HomeCard;