import React, { useState, useEffect } from "react";

import axios from "axios";

import ProductManagerCard from "./ProductManagerCardWatch";

import SweetAlert from "react-bootstrap-sweetalert";

//reactstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
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

import styles from "../../assets/jss/material-dashboard-pro-react/hoverCardStyle";

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

    const [watches, setWatches] = useState([]);
    const [cards, setCards] = useState([]);
    const [alert, setAlert] = React.useState(null);
    const hideAlert = () => {
      setAlert(null);
    }
  
    const successAlertWatch = () => {
      setAlert(
        <SweetAlert
          success
          style={{ display: "block", marginTop: "100px" }}
          title="Watch Added!"
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          confirmBtnCssClass={classes.button + " " + classes.success}
        >
          You've added a new watch!  Sell them bitches!
        </SweetAlert>
      );
    };
    const successAlertCard = () => {
      setAlert(
        <SweetAlert
          success
          style={{ display: "block", marginTop: "100px" }}
          title="Card Added!"
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          confirmBtnCssClass={classes.button + " " + classes.success}
        >
          You've added a new card!  Sell them bitches!
        </SweetAlert>
      );
    };

    const errorAlert = () => {
      setAlert(
        <SweetAlert
          danger
          style={{ display: "block", marginTop: "80px" }}
          title="Oh No!"
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          confirmBtnCssClass={classes.button + " " + classes.success}
        >
          That didn't work!  Try again or reach out to Carl!
        </SweetAlert>
      );
    };

    const Sure = () => {
      setAlert(
        <SweetAlert
          warning
          style={{ display: "block", marginTop: "-100px" }}
          title="Are you sure?"
          onConfirm={() => successDelete()}
          onCancel={() => cancelDetele()}
          confirmBtnCssClass={classes.button + " " + classes.success}
          cancelBtnCssClass={classes.button + " " + classes.danger}
          confirmBtnText="Yes, delete it!"
          cancelBtnText="Cancel"
          showCancel
        >
          You will not be able to recover this imaginary file!
        </SweetAlert>
      );
    };
    const successDelete = () => {
      setAlert(
        <SweetAlert
          success
          style={{ display: "block", marginTop: "-100px" }}
          title="Deleted!"
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          confirmBtnCssClass={classes.button + " " + classes.success}
        >
          Your imaginary file has been deleted.
        </SweetAlert>
      );
    };
    const cancelDetele = () => {
      setAlert(
        <SweetAlert
          danger
          style={{ display: "block", marginTop: "-100px" }}
          title="Cancelled"
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          confirmBtnCssClass={classes.button + " " + classes.success}
        >
          Your imaginary file is safe :)
        </SweetAlert>
      );
    };

    useEffect(() => {
      axios.get(`https://crypto-luxury.herokuapp.com/api/store/watches`)
      .then(res => {
        setWatches([
          ...res.data
        ])
      })
    }, []);
    useEffect(() => {
      axios.get(`https://crypto-luxury.herokuapp.com/api/store/cards`)
      .then(res => {
        setCards([
          ...res.data
        ])
      })
    }, []);

    const handleWatchChange = (e) => {
        e.preventDefault();
        setWatchProduct({
        ...watchProduct,
        [e.target.name]: e.target.value
        })
    }

    const handleCardChange = (e) => {
        e.preventDefault();
        setCardProduct({
        ...cardProduct,
        [e.target.name]: e.target.value
        })
    }

  const handleWatchSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://crypto-luxury.herokuapp.com/api/form/watches`, watchProduct)
    .then(res => {
        successAlertWatch();
        setWatchModal(false)
        console.log(res)
    })
    .catch(err => {
      errorAlert();
      console.log(err, "There was an error")
    })
  }

  const handleCardSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://crypto-luxury.herokuapp.com/api/form/cards`, cardProduct)
    .then(res => {
      successAlertCard();
      console.log("######", cardProduct)
    })
    .catch(err => {
      errorAlert();
      console.log(err, "There was an error")
    })
  }

  const handleSure = () => {
    
  }

  return (
    <Container>
    {alert}
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
                <Container>
                <h2>Add New Watch</h2>
                  <form>
                  <div style={{
                    display: "flex",
                    flexFlow: "column nowrap",
                    justifyContent: "center",
                    alignSelf: "center",
                    width: "60%",
                    marginLeft: "7.5%",
                    marginBottom: "3%"
                  }}>
                    <label>Title</label>
                    <input placeholder = "title" name="title" type="text" onChange={handleWatchChange} />
                  </div>
                  <div style={{
                    display: "flex",
                    flexFlow: "column nowrap",
                    justifyContent: "center",
                    alignSelf: "center",
                    width: "60%",
                    marginLeft: "7.5%",
                    marginBottom: "3%"
                  }}>
                    <label>Description</label>
                    <input placeholder = "Description" name="description" type="text-field" onChange={handleWatchChange} />
                  </div>
                  <div style={{
                    display: "flex",
                    flexFlow: "column nowrap",
                    justifyContent: "center",
                    alignSelf: "center",
                    width: "60%",
                    marginLeft: "7.5%",
                    marginBottom: "3%"
                  }}>
                    <label>Price</label>
                    <input type='number' step="1" placeholder='Price Value' onChange={handleWatchChange} />
                  </div>
                  </form>
                </Container>
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
                <Container>
                <h2>Add New Card</h2>
                  <form>
                  <div style={{
                    display: "flex",
                    flexFlow: "column nowrap",
                    justifyContent: "center",
                    alignSelf: "center",
                    width: "60%",
                    marginLeft: "7.5%",
                    marginBottom: "3%"
                  }}>
                    <label>Title</label>
                    <input placeholder = "title" name="title" type="text" onChange={handleCardChange} />
                  </div>
                  <div style={{
                    display: "flex",
                    flexFlow: "column nowrap",
                    justifyContent: "center",
                    alignSelf: "center",
                    width: "60%",
                    marginLeft: "7.5%",
                    marginBottom: "3%"
                  }}>
                    <label>Description</label>
                    <input placeholder = "Description" name="description" type="text-field" onChange={handleCardChange} />
                  </div>
                  <div style={{
                    display: "flex",
                    flexFlow: "column nowrap",
                    justifyContent: "center",
                    alignSelf: "center",
                    width: "60%",
                    marginLeft: "7.5%",
                    marginBottom: "3%"
                  }}>
                    <label>Price</label>
                    <input type='number' step="1" placeholder='Price Value' onChange={handleCardChange} />
                  </div>
                  </form>
                </Container>
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
        <div>
          <Button color="danger" onClick={handleSure}>Delete All Products</Button>
        </div>
        </Container>
        <Row style={{
          marginBottom: "10%"
        }}>
        <div style={{
          margin: "2%"
        }}>
          { watches.map(watch => ( 
          <ProductManagerCard watchInfo={watch} key={watch.id}/> 
          ))}
        </div>
        </Row>
        <Row style={{
          marginBottom: "10%"
        }}>
        <div style={{
          margin: "2%"
        }}>
          { cards.map(card => ( 
          <ProductManagerCard cardInfo={card} key={card.id}/> 
          ))}
        </div>
        </Row>

    </Container>
  );
}