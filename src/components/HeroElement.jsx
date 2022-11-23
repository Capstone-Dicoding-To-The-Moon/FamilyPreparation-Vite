import React from "react";
import Heroimg from '../assets/Hero-img.png';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';

export default function HeroElement () {
    return (
        <div className="hero-image">
            <img className="images" src={ Heroimg } alt="Hero Element"/>
            <Carousel.Caption>
                <Card bsPrefix="carousel-caption-card" >
                    <Card.Body bsPrefix="carousel-body-card">
                        <Card.Text>
                            <h2>Artikel</h2>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Caption>
        </div>
    );
}