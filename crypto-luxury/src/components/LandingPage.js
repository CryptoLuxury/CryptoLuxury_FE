import React from "react";
import Footer from "./dashComps/Footer";

import "./LandingPage.css";

import Nav from "./Nav";

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
            <div><TopSection /></div>
        <div>
        <Footer />
        </div>
        </div>
    );
};

export default LandingPage;