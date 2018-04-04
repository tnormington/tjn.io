import React from 'react'
import Carousel from 'react-slick'

import Slide1 from './Slides/Slide1'
import Slide2 from './Slides/Slide2'
import Slide3 from './Slides/Slide3'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import './Carousel.sass'

export default (props) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Carousel
            {...settings}>
            <div>
                <Slide1 />
            </div>
            <div>
                <Slide2 />
            </div>
            <div>
                <Slide3 />
            </div>
        </Carousel>
    )
}