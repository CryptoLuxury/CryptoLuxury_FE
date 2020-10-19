import React from "react";
import styled from "styled-components";

import {Container} from "react-bootstrap";

export default() => {

    return (
        <Container style={{
            height: "92vh",
            background: "darkgrey",
            display: "flex"
        }}>

            <div style={{
                width: "100%",
                background: "blue",
                display: "flex"
            }}>
                <div>One</div>
                <div>Two</div>
            </div>

            <div style={{
                width: "100%",
                background: "red"
            }}>
                <div>One</div>
                <div>Two</div>
            </div>
        
        </Container>
    )
}