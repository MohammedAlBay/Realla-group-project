import React from 'react';
import { Link } from '@inertiajs/react';

const LoginOptions = () => {
    return (
        <div className="flex bg-gray-900 text-white p-8 pt-6 h-screen" style={{ backgroundColor: '#292F36' }}> {/* Increased margin-top to 6 and set height to full screen */}
            <div className="relative w-2/3 mr-20"> {/* Set width to 2/3 of the page and added margin to push image more to the left */}
                <div className="absolute inset-0 flex justify-center items-center">
                <div style={{ position: 'relative', top: '2rem', width: '500px', height: '625px', flexShrink: 0, borderRadius: '0px 0px 100px 100px', border: '3px solid rgba(0, 0, 0, 0.00)', background: '#1E2127' }}></div>
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
