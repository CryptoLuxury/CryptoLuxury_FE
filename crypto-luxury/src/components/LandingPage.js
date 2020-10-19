import React from "react";
import Navigation from "./Nav";

import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const LandingPage = () => {

    return (
        <div>
            <Navigation />
            <div><Carousel /></div>
        </div>
    );
};

export default LandingPage;