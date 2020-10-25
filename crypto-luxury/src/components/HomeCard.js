import React from "react";

const HomeCard = ({itemInfo}) => {

    const { image, title, subtitle } = itemInfo;

    return (
        <div style={{height: "300px", width: "300px", backgroundColor: "grey"}}>
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
        </div>
    )
}

export default HomeCard