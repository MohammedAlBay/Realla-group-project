import React, { useState } from 'react';
import "../../css/circular.css"

const CircularSliderCarousel = () => {

    return (
        <div className="circular-slider-carousel">

          <h1 className="text-dashboard-landing">Welcome <span> User Name</span></h1>
            <h4 className="address-dashboard-landing">Address: lorem ipsum, lorem ipsum 1111 lorem ipsum</h4>

            <div className="home-img-dashboard">
                <img src="./images/Mask Group.png" alt="Bungalov"/>
            </div>
        </div>
    );
};

export default CircularSliderCarousel;
