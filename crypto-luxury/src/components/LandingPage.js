import React from "react";
import Footer from "./dashComps/Footer";

import { Carousel } from "antd";

import "./LandingPage.css";

import Nav from "./Nav";
import Button from "./dashComps/Button";
import Browse from "./Browse";

import "./Navbar.css"

import TopSection from './TopSection';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const LandingPage = () => {

    return (
        <div style={{
          display: "flex",
          flexDirection: "column"
        }}>
        {alert}
        <Nav />
        <div className="carouselTop">
        <Carousel autoplay dots={false}>
            <div className="topOne">
                <h6>White-Glove Service Complimentary on ALL ORDERS $100,000+</h6>
            </div>
            <div className="topTwo">
                <h6>Ask us about how we authenticate and store our products!</h6>
            </div>
            <div className="topTwo">
            <h6>All of our cards are verified legitimate by our third party firm!</h6>
        </div>
        </Carousel>
    </div>
        <div className="carouselHome">
            <Carousel autoplay dotPosition="top">
                <div className="slideOne">
                    <Button style={{color: "#e0c470"}} justIcon simple>Browse Our Watch Collection</Button>
                </div>
                <div className="slideTwo">

                </div>
                <div className="slideThree">

                </div>
                <div className="slideFour">

                </div>
            </Carousel>
        </div>
        <div><Browse /></div>
            <div><TopSection /></div>
        <div>
        <Footer />
        </div>
        </div>
    );
};

export default LandingPage;