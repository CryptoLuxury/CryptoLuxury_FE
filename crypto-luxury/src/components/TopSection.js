import React, {useState, useEffect} from "react";
import axios from "axios";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./TopSection.css";

import {Container} from "react-bootstrap";
import 'antd/dist/antd.css';
import Fade from "react-reveal/Fade";

import HomeCard from "./HomeCard";

export default() => {

  const [homeCards, setHomeCards] = useState([]);

      useEffect(() => {
      axios.get(`https://crypto-luxury.herokuapp.com/api/store/features`)
      .then(res => {
        setHomeCards([
          ...res.data
        ])
      })
    }, []);

    return (
        <Container style={{
            display: "flex",
            flexFlow: "column wrap",
        }}>
        <Col className="images" style={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignSelf: "center",
          margin: ".1%",
        }}><div className="images"></div></Col>
            <Row className="toprow" style={{
              display: "flex",
              justifyContent: "center",
            }}>
            { homeCards.map(item => ( 
              <HomeCard itemInfo={item} key={item.id}/> 
              ))}
            </Row>

        </Container>
    )
}

