import React from "react";

import "./HomeCard.css";

const HomeCard = ({itemInfo}) => {

    const { image, title, subtitle, link } = itemInfo;

    return (
        <div onClick={() => {
            window.open(`${link}`)
        }} style={{
            height: "300px",
            width: "300px",
            margin: ".1%"
        }}>
        <img style={{ height: "300px", width: "300px", opacity: ".7", position: "absolute", zIndex: "-1"}} src={image} alt="homecard" />
        <div style={{paddingLeft: "1.5%"}}>
            <h2 className="title" style={{
                opacity: "100%",
                fontFamily: "Roboto, sans",
                color: "#523c0d",
                paddingTop: "10%",
                paddingLeft: "2%"
            }}>{title}</h2>
            <h4 className="subtitle" style={{
                opacity: "100%",
                fontFamily: "Roboto, sans",
                color: "#523c0d",
                paddingTop: "40%",
                marginLeft: "45%",
                paddingRight: ".5%"
            }}>{subtitle}</h4>
            </div>
        </div>
    )
}

export default HomeCard;