import React from "react";
import styled from "styled-components";

import marble from "./marble.jpg";

//react-reveal
import RubberBand from "react-reveal/RubberBand";
import BelowStats from "./adminComponents/BelowStats";

const DashHome = () => {

    return (

        <div>

        <div style={{
            width: "100%",
            background: "black",
            height: "20vh",
            display: "flex",
            flexFlow: "row nowrap"
        }}>

            
            <div style={{
                background: "black",
                width: "100%",
                display: "flex",
                flexFlow: "column nowrap",
                textAlign: "center",
                paddingTop: "1%" 
            }}>
                <h2 style={{color: "white"}}>Total Sales</h2>
                <RubberBand>
                <h1 style={{color: "lightgreen"}}>$74,658</h1>
                </RubberBand>
            </div>

            <div style={{
                background: "darkgrey",
                width: "100%",
                display: "flex",
                flexFlow: "column nowrap",
                textAlign: "center",
                paddingTop: "1%" 
            }}>
                <h2 style={{color: "white"}}>Total Orders</h2>
                <RubberBand delay={250}>
                <h1 style={{color: "lightgreen"}}>1,245</h1>
                </RubberBand>
            </div>

            <div style={{
                background: "black",
                width: "100%",
                display: "flex",
                flexFlow: "column nowrap",
                textAlign: "center",
                paddingTop: "1%" 
            }}>
                <h2 style={{color: "white"}}>Sales Today</h2>
                <RubberBand delay={500}>
                <h1 style={{color: "lightgreen"}}>$6,328</h1>
                </RubberBand>
            </div>

        </div>

            <div>
                <BelowStats />
            </div>

    </div>
    )
}

export default DashHome;