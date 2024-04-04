import React, { useState, useEffect } from 'react';
import "../../css/circular.css";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const CircularSliderCarousel = ({ user }) => {
    // Define state variables for user name and address
    const [userName, setUserName] = useState("");
    const [userAddress, setUserAddress] = useState("");

    // Fetch user data (name and address) from the user object passed from the controller
    useEffect(() => {
        if (user) {
            setUserName(user.name);
            setUserAddress(user.address);
        }
    }, [user]);

    return (

        <div className="circular-slider-carousel">
            {/* Render user name with dynamic value */}
            <h1 className="text-dashboard-landing">Welcome <span>{userName}</span>!</h1>
            {/* Render user address with dynamic value */}
            <h4 className="address-dashboard-landing"><i className='bx bxs-map' style={{ color: '#FDB414', fontSize: '30px' }}></i> <span>{userAddress}</span>
            </h4>

            <div className="home-img-dashboard">
                <img src="./images/Mask Group.png" alt="Bungalow" />
            </div>
            <div className="Shadow2"></div>
        </div>

    );
};

export default CircularSliderCarousel;
