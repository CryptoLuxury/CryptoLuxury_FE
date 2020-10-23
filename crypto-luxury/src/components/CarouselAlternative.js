import React from "react";
import styled from "styled-components";

import {Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HealthCard from 'react-health-card';

import { Card } from 'antd';
import 'antd/dist/antd.css';

//react-reveal
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//typing
import Typing from "react-typing-animation";

const { Meta } = Card;

export default() => {

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

            <Fade bottom duration={1000}>
            <Row style={{
                background: "white",
                width: "100%",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "space-evenly",
                margin: ".2%",
                alignSelf: "center"
            }}>
                
                <Col>
                <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="watchbox" src="https://images.pexels.com/photos/380782/pexels-photo-380782.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />}
              >
                <Meta title="10% OFF Select Watches" description="" />
              </Card>
                </Col>
                <Col style={{
                    background: "#141414",
                    width: "100%",
                    margin: ".1%",
                    borderRadius: "1%"
                }}>
                    two
                </Col>
                <Col style={{
                    background: "#181818",
                    width: "100%",
                    margin: ".1%",
                    borderRadius: "1%"
                }}>
                    three
                </Col>

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