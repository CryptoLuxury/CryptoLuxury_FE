import React, { useState } from "react";

import axios from "axios";

import AddWatch from "../Forms/AddWatch";
import AddCard from "../Forms/AddCard";

//reactstrap
import Container from "react-bootstrap/Container";
import Button from "../../components/CustomButtons/Button";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import ProductsTable from "../Tables/ProductsTable";

import styles from "../../assets/jss/material-dashboard-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

export default function ProductManager() {

  const classes = useStyles();
  const [watchModal, setWatchModal] = React.useState(false);
  const [cardModal, setCardModal] = React.useState(false);

    // useState
    const [cardProduct, setCardProduct] = useState({
        title: "",
        description: "",
        price: null,
    })
    const [watchProduct, setWatchProduct] = useState({
        title: "",
        description: "",
        price: null,
    })

  const handleWatchSubmit = (e) => {
    e.preventDefault();
    axios.post(``, watchProduct)
    .then(res => {
      console.log("######", watchProduct)
    })
    .catch(err => {
      console.log(err, "There was an error")
    })
  }

  const handleCardSubmit = (e) => {
    e.preventDefault();
    axios.post(``, cardProduct)
    .then(res => {
      console.log("######", cardProduct)
    })
    .catch(err => {
      console.log(err, "There was an error")
    })
  }

  return (
    <Container>
        <h2>Product Manager</h2>
        <Container style={{
            display: "flex",
            flexDirection: "row"
        }}>
        <Button color="warning" round style={{margin: "3%"}} onClick={() => setWatchModal(true)}>Add Watch</Button>
        <div>
            <Dialog
                classes={{
                root: classes.center,
                paper: classes.modal
                }}
                open={watchModal}
                transition={Transition}
                keepMounted
                onClose={() => setWatchModal(false)}
                aria-labelledby="modal-slide-title"
                aria-describedby="modal-slide-description"
            >
                <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
                >
                <Button
                    justIcon
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    color="danger"
                    onClick={() => setWatchModal(false)}
                >
                    <Close className={classes.modalClose} />
                </Button>
                </DialogTitle>
                <DialogContent
                style={{width: "750px"}}
                id="modal-slide-description"
                className={classes.modalBody}
                >
                <AddWatch />
                </DialogContent>
                <DialogActions
                className={classes.modalFooter + " " + classes.modalFooterCenter}
                >
                <Button style={{
                    margin: "0 auto"
                }}
                onClick={() => setWatchModal(false)}>Cancel</Button>
                <Button style={{
                    margin: "0 auto"
                }} onClick={handleWatchSubmit} color="warning">
                    Submit
                </Button>
                </DialogActions>
            </Dialog>
        </div>

        <Button color="warning" round style={{margin: "3%"}} onClick={() => setCardModal(true)}>Add Card</Button>
        <div>
            <Dialog
                classes={{
                root: classes.center,
                paper: classes.modal
                }}
                open={cardModal}
                transition={Transition}
                keepMounted
                onClose={() => setCardModal(false)}
                aria-labelledby="modal-slide-title"
                aria-describedby="modal-slide-description"
            >
                <DialogTitle
                id="classic-modal-slide-title"
                disableTypography
                className={classes.modalHeader}
                >
                <Button
                    justIcon
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    color="danger"
                    onClick={() => setCardModal(false)}
                >
                    <Close className={classes.modalClose} />
                </Button>
                </DialogTitle>
                <DialogContent
                style={{width: "750px"}}
                id="modal-slide-description"
                className={classes.modalBody}
                >
                <AddCard />
                </DialogContent>
                <DialogActions
                className={classes.modalFooter + " " + classes.modalFooterCenter}
                >
                <Button style={{
                    margin: "0 auto"
                }}
                onClick={() => setCardModal(false)}>Cancel</Button>
                <Button style={{
                    margin: "0 auto"
                }} onClick={handleCardSubmit} color="warning">
                    Submit
                </Button>
                </DialogActions>
            </Dialog>
        </div>

        </Container>
        <Container>
            <ProductsTable />
        </Container>

    </Container>
  );
}