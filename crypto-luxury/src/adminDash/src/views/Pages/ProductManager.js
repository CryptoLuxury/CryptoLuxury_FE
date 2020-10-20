import React from "react";

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
import OrderTables from "../Tables/OrderTable";
import { Modal as ReactComponent } from "../Components/Modal";

import styles from "../../assets/jss/material-dashboard-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

export default function ProductManager() {

  const classes = useStyles();
  const [modal, setModal] = React.useState(false);

  return (
    <Container>
        <h2>Product Manager</h2>
        <Button color="warning" round onClick={() => setModal(true)}>Add Product</Button>
        <div>
            <Dialog
                classes={{
                root: classes.center,
                paper: classes.modal
                }}
                open={modal}
                transition={Transition}
                keepMounted
                onClose={() => setModal(false)}
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
                    color="transparent"
                    onClick={() => setModal(false)}
                >
                    <Close className={classes.modalClose} />
                </Button>
                <h4 className={classes.modalTitle}>Add a Product</h4>
                </DialogTitle>
                <DialogContent
                id="modal-slide-description"
                className={classes.modalBody}
                >
                <h5>Are you sure you want to do this?</h5>
                </DialogContent>
                <DialogActions
                className={classes.modalFooter + " " + classes.modalFooterCenter}
                >
                <Button style={{
                    margin: "0 auto"
                }}
                onClick={() => setModal(false)}>Never Mind</Button>
                <Button style={{
                    margin: "0 auto"
                }} onClick={() => setModal(false)} color="success">
                    Yes
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    </Container>
  );
}