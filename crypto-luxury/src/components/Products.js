import React, { useState, useEffect } from "react";

import axios from "axios";

import Nav from "./Nav.js";
import Search from "./Search.js";

import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WatchCard from "./NewCard";
import CardCard from "./NewCardCard";
import Footer from "./dashComps/Footer";

import Button from "./dashComps/Button";

const Products = () => {

    let history = useHistory();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [ watches, setWatches ] = useState([]);
    const [ cards, setCards ] = useState([]);

    useEffect(() => {
      axios.get(`https://crypto-luxury.herokuapp.com/api/store/watches`)
      .then(res => {
        setWatches([
          ...res.data
        ])
      })
    }, []);

    console.log(watches)

    useEffect(() => {
      axios.get(`https://crypto-luxury.herokuapp.com/api/store/cards`)
      .then(res => {
        setCards([
          ...res.data
        ])
      })
    }, []);

    const [contact, setContact] = useState({
        name: "",
        email: "",
        message: ""
      })
  
      const handleContactChange = (e) => {
        e.preventDefault();
        setContact({
          ...contact,
          [e.target.name]: e.target.value
        })
      }
  
      const handleContactSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://crypto-luxury.herokuapp.com/api/form/contact`, contact)
        .then(res => {
          alert("POST SUCCESS")
          console.log(res)
          setTimeout(() => {
            setShow(false)
          }, 1500);
        })
        .catch(err => {
          alert("There was an error, if the issue persists, email us: Z@cryptoluxury.com")
          console.log(err)
        })
      }

    return (
      <div>
        <div style={{
          width: "100%"
        }}>
        <Nav />
        </div>
    <Row style={{width: "100%" , textAlign: "center", marginTop: "9%"}}>
        <Search />
    </Row>
    <Container>
    <div hidden id="snipcart" data-api-key="NThiZmE2M2EtNDQ4Yy00MGMzLWEwYTYtOTNmNDJjYjZlMTlhNjM3MzkxMjM3MjA2MDc3NDcw" data-config-add-product-behavior="none">
    <billing section="bottom">
      <fieldset class="snipcart-form__set">
          <div class="snipcart-form__field">
              <div class="snipcart-form__field-checkbox">
                  <snipcart-checkbox name="subscribeToNewsletter"></snipcart-checkbox>
                  <snipcart-label for="subscribeToNewsletter" class="snipcart__font--tiny snipcart-form__label--checkbox" for="subscribeToNewsletter">
                      Subscribe to newsletter
                  </snipcart-label>
              </div>
          </div>
      </fieldset>
  </billing>
  </div>
              <Row style={{
              marginBottom: "5%",
              display: "flex",
              justifyContent: "space-evenly",
              paddingBottom: "3%"
            }}>
            <Col style={{
              margin: "2%",
              display: "flex",
              flexFlow: "row wrap",
              justifyContent: "space-evenly"
            }}>
              { watches.map(watch => ( 
              <WatchCard watchInfo={watch} key={watch.id}/> 
              ))}
              { cards.map(card => ( 
              <CardCard cardInfo={card} key={card.id}/> 
              ))}
            </Col>
            </Row>
            </Container>
            <Row>
                <Footer />
            </Row>
        </div>
    )
}

export default Products;