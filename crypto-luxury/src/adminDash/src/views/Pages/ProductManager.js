import React from "react";

import AddWatch from "../Forms/AddWatch";

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

import styles from "../../assets/jss/material-dashboard-pro-react/views/errorPageStyles.js";

const useStyles = makeStyles(styles);

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

export default function ProductManager() {

  const classes = useStyles();
  const [watchModal, setWatchModal] = React.useState(false);

  return (
    <Container>
        <h2>Product Manager</h2>
        <Button color="warning" round onClick={() => setWatchModal(true)}>Add Watch</Button>
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
                }} onClick={() => setWatchModal(false)} color="warning">
                    Submit
                </Button>
                </DialogActions>
            </Dialog>
        </div>

    </Container>
  );
}