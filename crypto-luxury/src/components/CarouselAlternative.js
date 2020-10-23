import React from "react";
import styled from "styled-components";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {Container} from "react-bootstrap";

import { Card } from 'antd';
import 'antd/dist/antd.css';

//react-reveal
import Slide from "react-reveal/Slide";
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

    return (
        <Container style={{
            height: "92vh",
            display: "flex",
            flexFlow: "column nowrap",
        }}>

            <div style={{
                height: "4vh",
                background: "grey",
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
                }}>White-Glove complimentary on all orders over $100,000</h6>
                </Typing>
            </div>
            <Row>
            
            </Row>

            <Fade bottom duration={1000}>
            <Row style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                margin: ".2%",
                alignSelf: "center"
            }}>


            <Carousel autoplay>
                <div style={{
                    background: "red"
                }}>
                <h3>1</h3>
                </div>
                <div style={{
                    background: "green"
                }}>
                <h3>2</h3>
                </div>
                <div style={{
                    background: "purple"
                }}>
                <h3>3</h3>
                </div>
                <div style={{
                    background: "blue"
                }}>
                <h3>4</h3>
                </div>
            </Carousel>









            </Row>
            </Fade>
            <Fade up>
            <div style={{
                height: "30vh",
                background: "#959595",
                width: "100%",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "space-evenly",
                margin: ".2%",
                alignSelf: "center"
            }}>
                another something here maybe a promotion
            </div>
            </Fade>
            
            <div style={{
                height: "30vh",
                background: "white",
                width: "100%",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "space-evenly",
                margin: ".2%",
                alignSelf: "center",
                marginBottom: ".35%",
            }}>
            <Slide left duration={750}>
                <div style={{
                    background: "#d1a303",
                    height: "100%",
                    width: "50%",
                    alignSelf: "center",
                    margin: ".1%",
                    borderRadius: "1%"
                }}>
                    one
                </div>
            </Slide>
            <Slide right duration={750}>
                <div style={{
                    background: "#d1a303",
                    height: "100%",
                    width: "50%",
                    alignSelf: "center",
                    margin: ".1%",
                    borderRadius: "1%"
                }}>
                    two
                </div>
            </Slide>

            </div>
        
        </Container>
    )
}