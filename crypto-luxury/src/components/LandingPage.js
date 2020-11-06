import React from "react";
import Footer from "./dashComps/Footer";

import { Carousel } from "antd";
import CoolAnim from "./CoolAnimWatch";
import CoolAnimAll from "./CoolAnimAll";
import CoolAnimCard from "./CoolAnimCard";
import Vaulting from "./Vaulting";
import Glove from "./Glove";

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
          flexDirection: "column",
          overflowX: "hidden"
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
                </div>
                <div className="slideTwo">

                </div>
            </Carousel>
        </div>
        <div className="threewrap">
        <CoolAnim />
        <CoolAnimCard />
        </div>
        <div className="services">

        <Vaulting />
        <Glove />

        </div>


            <div><TopSection /></div>
        <div>
        <Footer />
        </div>
        </div>
    );
};

export default LandingPage;