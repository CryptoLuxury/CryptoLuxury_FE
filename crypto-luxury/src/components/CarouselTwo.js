import React, {useState} from "react";

//react-bootstrap
import { Carousel } from "react-bootstrap";

const CarouselTwo = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item >
                <img src="https://i.imgur.com/6rrabit.png" alt="team educating on cards" style={{
                    height: "70vh"
                }} />
        
                <Carousel.Caption>
                    <h3>Meet the Team</h3>
                    <p>Learn more about the professionals that will help you get where you want to be.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                style={{
                    height: "70vh"
                }}
                    src="https://i.imgur.com/pFcAmJd.png"
                    alt="Japanese Card"
                />
        
                <Carousel.Caption>
                    <h3>Products</h3>
                    <p>
                    Browse our exquisite collection of Rolex, Patek, and Pokemon.
                    </p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img
                style={{
                    height: "70vh"
                }}
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                    alt="First slide"
                />
                <Carousel.Caption style={{
                    marginBottom: "10%"
                }}>
                    <div>
                        <h3>Security Services</h3>
                        <p>Ask us about our vaulting and white-glove programs.</p>
                    </div>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselTwo;