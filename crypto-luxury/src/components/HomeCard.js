import React from "react";

import "./HomeCard.css";

const HomeCard = ({itemInfo}) => {

    const { image, title, link } = itemInfo;

    return (
        <div onClick={() => {
            window.open(`${link}`)
        }} className="homecardstyle">
        <div>
        <img className="imagehome" style={{ opacity: ".9", position: "absolute", zIndex: "-1"}} src={image} alt="homecard" />
        </div>
            <div style={{
                width: "100%",
                textAlign: "right",
                marginTop: "88%",
            }}>
                <h4 style={{color: "#e0c470", paddingRight: "3%"}}>{title}</h4>
            </div>
        </div>
    )
}

export default HomeCard;