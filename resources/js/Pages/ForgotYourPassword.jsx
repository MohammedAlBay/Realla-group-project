import React, { useState } from 'react';

const ForgotPassword = () => {
    // Define state variables to store form input values
    const [email, setEmail] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Forgot Password logic
        console.log('Form submitted');
    };

    return (
        <div className="flex bg-gray-900 text-white p-8">
            <div className="relative mr-8">
                <div className="absolute inset-0 bg-gray-700 rounded-lg border-2 border-transparent"></div>
                <img src="./images/ForgotYourPasswordImage.png" alt="ForgotYourPassword" className="absolute inset-0 object-cover w-full h-full" />
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
                <p>Enter your email account to reset your password</p>
                <form onSubmit={handleSubmit} className="mt-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        className="border rounded-lg p-2 mt-2"
                    />
                    <button type="submit" className="bg-yellow-500 text-yellow-500 py-2 px-4 rounded-lg">Reset Password</button>
                </form>   
            </div>
        </div>
    );
};

export default ForgotPassword;
