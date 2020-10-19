import React from "react";
import styled from "styled-components";

//reactstrap
import Container from "react-bootstrap/Container";

import Typing from 'react-typing-animation';
import Slide from "react-reveal";

const BelowStats = () => {

    return (
        <Container className="wrap">
            <Container style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                paddingTop: "10%",
                paddingBottom: "7%"
            }}>
                <Typing>
                    <h3>Hello, Admin, what would you like to do?</h3>
                </Typing>
            </Container>

            <div style={{
                width: "100%",
                background: "lightgrey",
                display: "flex",
                flexFlow: "row nowrap"
            }}>

                <div style={{
                    height: "15vh",
                    width: "33.333333%",
                    background: "red",
                    margin: "3%"
                }}>
                    one
                </div>
 
           
                <div style={{
                    height: "15vh",
                    width: "33.333333%",
                    background: "green",
                    margin: "3%"
                }}>
                    two
                </div>

                <div style={{
                    height: "15vh",
                    width: "33.3333333%",
                    background: "blue",
                    margin: "3%"
                }}>
                    three
                </div>
            </div>
        </Container>
    )
}
export default BelowStats;