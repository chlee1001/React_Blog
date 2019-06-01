import React, { Component } from 'react';
import Slider from "react-slick";
import './MainSplash.css';
export default class MainSplash extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <img src="http://placekitten.com/g/400/200" />
                    </div>
                    <div>
                        <img src="http://placekitten.com/g/400/200" />
                    </div>
                    <div>
                        <img src="http://placekitten.com/g/400/200" />
                    </div>
                </Slider>
            </div>
        );
    }
}