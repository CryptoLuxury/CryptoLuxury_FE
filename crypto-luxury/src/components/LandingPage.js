import React from "react";
import Navigation from "./Nav";

import TopSection from './CarouselAlternative';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const LandingPage = () => {

    return (
        <div>
            <Navigation />
            <div><TopSection /></div>
        </div>
    );
};

export default LandingPage;