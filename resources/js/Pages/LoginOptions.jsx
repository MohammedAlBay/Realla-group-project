import React from 'react';
import { Link } from '@inertiajs/react';

const LoginOptions = () => {
    return (
        <div className="flex bg-gray-900 text-white p-8">
            <div className="relative mr-8">
                <div className="absolute inset-0 bg-gray-700 rounded-lg border-2 border-transparent"></div>
                <img src="./LoginOptionsImage.png" alt="LoginOptions" className="absolute inset-0 object-cover w-full h-full" />
            </div>
            <div className="flex flex-col justify-between">
                <div className="flex flex-col"> {/* Adjusted to display buttons vertically */}
                    <button className="w-1962 h-223 flex-shrink-0 rounded-lg border-3 border-transparent bg-yellow-500 text-gray-900 py-4 px-8 mb-4">Login as Landlord</button>
                    <div style={{ marginBottom: '20px' }}></div> {/* Added space between buttons */}
                    <button className="w-1962 h-223 flex-shrink-0 rounded-lg border-3 border-transparent bg-yellow-500 text-gray-900 py-4 px-8">Login as Tenant</button>
                </div>
            </div>
        </div>
    );
};

export default LoginOptions;

