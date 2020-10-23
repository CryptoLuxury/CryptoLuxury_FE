import React from "react";
import styled from "styled-components";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./TopSection.css";

import {Container} from "react-bootstrap";
import 'antd/dist/antd.css';
import Fade from "react-reveal/Fade";

//typing
import Typing from "react-typing-animation";
import { Carousel } from 'antd';

export default() => {

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
            <div className="typingone" style={{
                height: "4vh",
                width: "100%",
                margin: ".2%",
                marginTop: "0",
                alignSelf: "center",
                borderRadius: "1%"
            }}>
                <Typing speed={5}>
                <h6 style={{
                    fontSize: ".8rem",
                    textAlign: "center",
                    paddingTop: ".5%",
                    paddingBottom: ".2%",
                    color: "white"
                }}>White-Glove complimentary on all orders over $100,000</h6>
                </Typing>
            </div>

            <Fade bottom duration={1000}>
            <Row style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                margin: ".2%",
                alignSelf: "center"
            }}>

            </Row>
            </Fade>
            <Row style={{
                background: "white",
                display: "flex",
                justifyContent: "row nowrap",
                width: "100%",
                margin: ".1%",
                alignSelf: "center",
                marginBottom: "0"
            }}>
                <Col style={{
                    alignSelf: "center",
                    margin: ".1%",
                    borderRadius: "1%",
                    maringBottom: "0"
                }}>
                    <div>
                    <Carousel vertical={true} autoplay dots={false}>
                    <div>
                      <h3 style={contentStyle}>10% OFF Select Watches</h3>
                    </div>
                    <div>
                      <h3 style={contentStyle}>25% OFF Select Pokemon Cards</h3>
                    </div>
                  </Carousel>
                    </div>
                </Col>
                <Col style={{
                    alignSelf: "center",
                    margin: ".1%",
                    borderRadius: "1%",
                    marginBottom: "0"
                }}>
                <div>
                <Carousel autoplay dots={false} vertical={true}>
                <div>
                  <h3 style={contentStyle2}>Vaulting Available Free on ALL ORDERS!</h3>
                </div>
                <div>
                  <h3 style={contentStyle2}>White-Glove Complimentary on orders over $100,000!</h3>
                </div>
              </Carousel>
                </div>
                </Col>

            </Row>
        </Container>
    )
}