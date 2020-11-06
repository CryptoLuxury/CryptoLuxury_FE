import React from "react";

import "./HomeCard.css";

const HomeCard = ({itemInfo}) => {

    const { image, title, subtitle, link } = itemInfo;

    return (
        <div onClick={() => {
            window.open(`${link}`)
        }} className="homecardstyle">
        <div>
        <img className="imagehome" style={{ opacity: ".9", position: "absolute", zIndex: "-1"}} src={image} alt="homecard" />
        </div>
        <div>
            <h2 style={{
                fontFamily: "'Raleway', sans-serif",
                color: "#e0c470",
                paddingLeft: "2%",
                paddingTop: "2%",
                fontSize: "1rem"
            }}>{title}</h2>
        </div>
            <div style={{
                width: "100%",
                textAlign: "center",
                marginTop: "75%",
            }}>
                <h4 style={{color: "black", paddingRight: "3%", fontFamily: "'Raleway', sans-serif", fontSize: ".8rem", backgroundColor: "white"}}>{subtitle}</h4>
            </div>
        </div>
    )
}

export default HomeCard;