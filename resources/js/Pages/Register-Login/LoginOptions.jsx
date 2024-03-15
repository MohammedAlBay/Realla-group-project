import React from 'react';
import registrationImage from './LoginOptionsImage.png'; 

const LoginOptions = () => {
    return (
        <div className="flex bg-gray-900 text-white p-8 rounded-lg">
            <div className="relative mr-8">
                <div className="absolute inset-0 bg-gray-700 rounded-lg border-2 border-transparent"></div>
                <img src={registrationImage} alt="Registration" className="absolute inset-0 object-cover w-full h-full" />
            </div>
            <div className="flex flex-col justify-between">
                <div>
                <h2 className="text-2xl font-semibold mb-4">Login Options</h2>
                <p>Choose your login option</p>
            </div>
            <div>
                <button className="w-1962 h-223 flex-shrink-0 rounded-lg border-3 border-transparent bg-yellow-500 text-gray-900 py-4 px-8 mb-4">Login as Landlord</button>
                <button className="w-1962 h-223 flex-shrink-0 rounded-lg border-3 border-transparent bg-yellow-500 text-gray-900 py-4 px-8">Login as Tenant</button>
                </div>
            </div>
        </div>
    );
};

export default LoginOptions;
