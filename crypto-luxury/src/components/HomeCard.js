import React from "react";

import "./HomeCard.css";

const HomeCard = ({itemInfo}) => {

    const { image, title, subtitle } = itemInfo;

    return (
        <div style={{
            height: "230px",
            width: "230px",
            margin: ".1%"
        }}>
        <img style={{ height: "230px", width: "230px", opacity: ".75", position: "absolute", zIndex: "-1"}} src={image} alt="homecard" />
        <div style={{marginTop: "40%", paddingLeft: "5%"}}>
            <h2 className="title" style={{
                opacity: "100%",
                color: "white"  
            }}>{title}</h2>
            <h4 className="subtitle" style={{
                opacity: "100%",
                color: "lightgrey"
            }}>{subtitle}</h4>
            </div>
        </div>
    )
}

export default HomeCard;