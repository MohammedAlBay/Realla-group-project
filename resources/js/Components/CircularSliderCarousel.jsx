import React, { useState, useEffect } from 'react';
import "../../css/circular.css"

const CircularSliderCarousel = () => {
    // Define state variables for user name and address
    const [userName, setUserName] = useState("");
    const [userAddress, setUserAddress] = useState("");

    // Fetch user data (name and address) from an API or other data source
    useEffect(() => {
        // Example: Fetch user data from an API
        fetchUserData()
            .then(data => {
                setUserName(data.name);
                setUserAddress(data.address);
            })
            .catch(error => console.error("Error fetching user data:", error));
    }, []);

    // Example function to fetch user data from an API
    const fetchUserData = async () => {
        // Example API endpoint to fetch user data
        const response = await fetch('/api/user');
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
        }
        return await response.json();
    };

    return (
        <div className="circular-slider-carousel">
            {/* Render user name with dynamic value */}
            <h1 className="text-dashboard-landing">Welcome <span>Olivia Janssens {/*{userAddress}*/} </span>!</h1>
            {/* Render user address with dynamic value */}
            <h4 className="address-dashboard-landing"><i className='bx bxs-map' style={{ color: '#FDB414', fontSize: '30px' }}></i> <span>Sint Niklass {userAddress} </span>
            </h4>

            <div className="home-img-dashboard">
                <img src="./images/Mask Group.png" alt="Bungalow" />
            </div>
            <div className="Shadow2"></div>
        </div>
    );
};

export default CircularSliderCarousel;
