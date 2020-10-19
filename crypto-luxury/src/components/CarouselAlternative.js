import React from "react";
import styled from "styled-components";

import {Container} from "react-bootstrap";
import Carousel from "./CarouselTwo";

export default() => {

    return (
        <Container style={{
            height: "92vh",
            display: "flex",
            flexFlow: "column nowrap"
        }}>

            <div style={{
                height: "4vh",
                background: "grey",
                width: "100%",
                margin: ".2%",
                marginTop: "0",
                alignSelf: "center"
            }}>
                <h6 style={{
                    fontSize: ".8rem",
                    textAlign: "center",
                    paddingTop: ".5%",
                    paddingBottom: ".2%",
                }}>White-Glove complimentary on all orders over $100,000</h6>
            </div>
            
            <div>
                <Carousel />
            </div>

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
                    background: "red",
                    width: "100%",
                    margin: ".1%"
                }}>
                    one
                </div>
                <div style={{
                    background: "darkred",
                    width: "100%",
                    margin: ".1%"
                }}>
                    two
                </div>
                <div style={{
                    background: "green",
                    width: "100%",
                    margin: ".1%"
                }}>
                    three
                </div>

            </div>
            <div style={{
                height: "30vh",
                background: "blue",
                width: "100%",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "space-evenly",
                margin: ".2%",
                alignSelf: "center"
            }}>
                another something here maybe a promotion
            </div>

            <div style={{
                height: "30vh",
                background: "purple",
                width: "100%",
                display: "flex",
                flexFlow: "row nowrap",
                justifyContent: "space-evenly",
                margin: ".2%",
                alignSelf: "center",
                marginBottom: ".35%",
                marginBottom: "5%" //TEMPORARY
            }}>
                
                <div style={{
                    background: "lightgreen",
                    height: "100%",
                    width: "50%",
                    alignSelf: "center"
                }}>
                    one
                </div>
                <div style={{
                    background: "lightblue",
                    height: "100%",
                    width: "50%",
                    alignSelf: "center"
                }}>
                    two
                </div>

            </div>
        
        </Container>
    )
}