import React, {useState, useEffect} from "react";
import axios from "axios";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./TopSection.css";

import {Container} from "react-bootstrap";
import 'antd/dist/antd.css';
import Fade from "react-reveal/Fade";

import HomeCard from "./HomeCard";

//typing
import Typing from "react-typing-animation";
import { Carousel } from 'antd';

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

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
      const contentStyle2 = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: 'red',
      };

    return (
        <Container style={{
            height: "92vh",
            display: "flex",
            flexFlow: "column nowrap",
        }}>
            <Row style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "14%"
            }}>
            { homeCards.map(item => ( 
              <HomeCard itemInfo={item} key={item.id}/> 
              ))}
            </Row>

        </Container>
    )
}