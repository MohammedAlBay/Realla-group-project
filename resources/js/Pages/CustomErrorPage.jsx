import React from 'react';
import { Link } from '@inertiajs/react';

const CustomErrorPage = () => {
    return (
        <div className="bg-gray-900 flex items-center justify-center min-h-screen px-4">
            <div className="text-center">
                <div className="flex justify-center mb-6">
                    {/* Icon */}
                    <div className="rounded-full border-4 border-yellow-600 inline-flex items-center justify-center shadow-xl bg-gray-800 hover:bg-gray-700 transition duration-700 ease-in-out animate-pulse" style={{ width: '300px', height: '300px' }}>
                        <h1 className="text-9xl font-bold text-white">404</h1>
                    </div>
                </div>
                <p className="text-2xl text-yellow-600 mb-8">Oops! Page not found.</p>
                <Link href = "/" className="text-lg text-gray-500 hover:underline">Go back home</Link>
            </div>
        </div>
    );
};

export default CustomErrorPage;
