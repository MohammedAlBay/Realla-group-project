import React, { useState } from 'react';
import { Link } from '@inertiajs/react';


const About = () => {
    return (
        <div className="bg-gray-900 text-white">
            <div className="about-section py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">ABOUT US</h1>
                <p className="text-lg mb-4">At Realla we pride ourselves on our unique features 
                that allow for easy and efficient communication between property owners and their tenants. 
                Take advantage of having all your rental needs met under one simple and effective platform.
                Planning and managing has never been so easy.
                Still looking for a property to rent or let?
                Check out the Find a Home feature to connect with property owners or potential tenants.</p>
                <p className="text-lg">Manage your rent and unitilies in one place.
                                       Report and solve issues quickly and efficiently.
                                       Chat with your landlord or tenant using our latest chatbox feature.
                                       Our Find a Home feature allows future tenants / property owners to find each other easiliy and connect.</p>
            </div>

            <h2 className="text-3xl text-center mb-10">OUR TEAM</h2>

            <div className="flex flex-wrap justify-center">
                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                    <div className="bg-white shadow-md rounded-md">
                        <img src="/w3images/team1.jpg" alt="Jana" className="w-full" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">Jana</h2>
                            <p className="text-sm text-gray-600">CEO & Founder</p>
                            <p className="text-sm">Some text that describes me lorem ipsum ipsum lorem.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                    <div className="bg-white shadow-md rounded-md">
                        <img src="/w3images/team2.jpg" alt="Mohammed" className="w-full" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">Mohammed</h2>
                            <p className="text-sm text-gray-600">Art Director</p>
                            <p className="text-sm">Some text that describes me lorem ipsum ipsum lorem.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                    <div className="bg-white shadow-md rounded-md">
                        <img src="/w3images/team3.jpg" alt="Sezin" className="w-full" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">Sezin</h2>
                            <p className="text-sm text-gray-600">Designer</p>
                            <p className="text-sm">Some text that describes me lorem ipsum ipsum lorem.</p>
                        </div>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
                    <div className="bg-white shadow-md rounded-md">
                        <img src="/w3images/team3.jpg" alt="Funda" className="w-full" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">Funda</h2>
                            <p className="text-sm text-gray-600">Designer</p>
                            <p className="text-sm">Some text that describes me lorem ipsum ipsum lorem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;