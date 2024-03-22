import React from 'react';
import { Link } from '@inertiajs/react';

const LoginOptions = () => {
    return (
        <div className="flex bg-gray-900 text-white p-8 pt-6 h-screen" style={{ backgroundColor: '#292F36' }}>
            <div className="relative w-2/3 ml-52" style={{ marginTop: '-4rem' }}>
                <div style={{ position: 'relative', width: '500px', height: '725px', flexShrink: 0, borderRadius: '0px 0px 100px 100px', border: '3px solid rgba(0, 0, 0, 0.00)', background: '#1E2127' }}></div>
            </div>
            <div className="absolute inset-0 flex justify-start items-center" style={{ marginLeft: '6rem', zIndex: '1' }}> {/* Ensure this div is above the buttons */}
                <img src="/images/LoginOptionsImage.png" alt="LoginOptions" className="object-cover w-3/5 h-auto" style={{ marginTop: '-4rem' }}/> 
            </div>
            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-center items-center mr-28" style={{ zIndex: '2' }}> {/* Ensure this div is above the image */}
                    <button className="w-72 h-12 rounded-lg border-3 border-transparent bg-yellow-500 text-gray-900 py-2 px-4 mb-4">Login as Landlord</button>
                    <button className="w-72 h-12 rounded-lg border-3 border-transparent bg-yellow-500 text-gray-900 py-2 px-4">Login as Tenant</button>
                </div>
            </div>
        </div>
    );
};

export default LoginOptions;
