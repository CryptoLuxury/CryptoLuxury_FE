import React from "react";

import "./HomeCard.css";

const HomeCard = ({itemInfo}) => {

    const { image, title, subtitle, link } = itemInfo;

    return (
        <div onClick={() => {
            window.open(`${link}`)
        }} style={{
            height: "200px",
            width: "200px",
            margin: ".1%"
        }}>
        <img style={{ height: "200px", width: "200px", opacity: ".7", position: "absolute", zIndex: "-1"}} src={image} alt="homecard" />
        <div style={{marginTop: "40%", paddingLeft: "5%"}}>
            <h2 className="title" style={{
                opacity: "100%",
                color: "black"  
            }}>{title}</h2>
            <h4 className="subtitle" style={{
                opacity: "100%",
                color: "black"
            }}>{subtitle}</h4>
            </div>
        </div>
    )
}

export default HomeCard;