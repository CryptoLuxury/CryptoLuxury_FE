import React from "react";

import axios from "axios";

const HomeCard = ({itemInfo}) => {

    const { id, image, title, subtitle, link } = itemInfo;

    const handleDeleteCard = (id) => {
        axios
          .delete(`https://crypto-luxury.herokuapp.com/api/store/features/:${id}`, {data: {id}})
          .then((res) => {
            alert("success");
            console.log(res);
          })
          .catch((err) => {
            alert("Failed to Delete");
            console.log(err);
          });
      };

    return (
        <div onClick={() => {
            handleDeleteCard({id});
          }} style={{
            height: "200px",
            width: "200px",
            margin: ".1%"
        }}>
        <img style={{ height: "200px", width: "200px", opacity: ".7", position: "absolute", zIndex: "-1"}} src={image} alt="homecard" />
        <div style={{paddingLeft: "1.5%"}}>
            <h2 className="title" style={{
                opacity: "100%",
                color: "black",
                paddingTop: "5%",
                paddingLeft: "2%"
            }}>{title}</h2>
            <h4 className="subtitle" style={{
                opacity: "100%",
                color: "black",
                paddingTop: "40%",
                marginLeft: "45%",
                paddingRight: ".5%"
            }}>{subtitle}</h4>
            </div>
        </div>
    )
}

export default HomeCard;