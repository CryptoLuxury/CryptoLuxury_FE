import React from "react";

import "./HomeCard.css";

const HomeCard = ({itemInfo}) => {

    const { image, title, subtitle, link } = itemInfo;

    return (
        <div onClick={() => {
            window.open(`${link}`)
        }} className="homecardstyle">
        <div>
        <img className="imagehome" style={{ opacity: ".7", position: "absolute", zIndex: "-1"}} src={image} alt="homecard" />
        </div>
        </div>
    )
}

export default HomeCard;