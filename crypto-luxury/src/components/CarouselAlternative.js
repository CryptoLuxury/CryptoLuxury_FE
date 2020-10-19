import React from "react";
import styled from "styled-components";

import {Container} from "react-bootstrap";
import Carousel from "./CarouselTwo";

//react-reveal
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

//typing
import Typing from "react-typing-animation";

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

            
            <div>
                <Carousel />
            </div>
            <Fade bottom duration={1000}>
            <div style={{
                height: "35vh",
                background: "white",
                width: "100%",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "space-evenly",
                margin: ".2%",
                alignSelf: "center"
            }}>
                
                <div style={{
                    background: "#101010",
                    width: "100%",
                    margin: ".1%",
                    borderRadius: "1%"
                }}>
                    one
                </div>
                <div style={{
                    background: "#141414",
                    width: "100%",
                    margin: ".1%",
                    borderRadius: "1%"
                }}>
                    two
                </div>
                <div style={{
                    background: "#181818",
                    width: "100%",
                    margin: ".1%",
                    borderRadius: "1%"
                }}>
                    three
                </div>

            </div>
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