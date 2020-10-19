import React from "react";


import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default() => {
    return (
        <Carousel autoPlay>
        <div>
            <img style={{height: "92vh"}} alt="" src="https://images.unsplash.com/photo-1598624725582-39c9f21bc565?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
            <div><p className="legend">High-End Watches from Rolex, Patek, and more!</p></div>
        </div>
        <div>
            <img style={{height: "92vh"}} alt="" src="https://images.unsplash.com/photo-1432462770865-65b70566d673?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img style={{height: "92vh"}} alt="" src="https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" />
            <p className="legend">Legend 3</p>
        </div>
        <div>
            <img style={{height: "92vh"}} alt="" src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1506&q=80" />
            <div><h3>This is displaying</h3></div>
        </div>
    </Carousel>
    )
}