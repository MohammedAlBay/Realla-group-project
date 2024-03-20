import React from 'react';
import { Link } from '@inertiajs/react';

const LoginOptions = () => {
    return (
        <div className="flex bg-gray-900 text-white p-8 pt-10 h-screen"> {/* Increased margin-top to 10 and set height to full screen */}
            <div className="relative w-2/3 mr-20"> {/* Set width to 2/3 of the page and added margin to push image more to the left */}
                <div className="absolute inset-0">
                    <img src="/images/LoginOptionsImage.png" alt="LoginOptions" className="absolute inset-0 object-cover w-full h-full" />
                </div>
            </div>
            <div className="flex justify-center items-center"> {/* Centered vertically and horizontally */}
                <div className="flex flex-col justify-center items-center"> {/* Centered vertically and horizontally */}
                    <button className="w-72 h-12 rounded-lg border-3 border-transparent bg-yellow-500 text-gray-900 py-2 px-4 mb-4">Login as Landlord</button>
                    <button className="w-72 h-12 rounded-lg border-3 border-transparent bg-yellow-500 text-gray-900 py-2 px-4">Login as Tenant</button>
                </div>
            </div>
        </div>
    );
};

export default LoginOptions;
