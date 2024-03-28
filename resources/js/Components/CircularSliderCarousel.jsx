import React, { useState } from 'react';
import "../../css/circular.css"
import ReminderTenant from "@/Pages/ReminderTenant.jsx";

const CircularSliderCarousel = () => {

    return (
        <div className="circular-slider-carousel">

            <ReminderTenant/>

            <div className="home-img-dashboard">
                <img src="./images/Mask Group.png" alt="Bungalov"/>
            </div>
        </div>
    );
};

export default CircularSliderCarousel;
