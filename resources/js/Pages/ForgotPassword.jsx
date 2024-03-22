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
        <div className="flex bg-gray-900 text-white p-8 justify-between" style={{ backgroundColor: '#292F36' }}>
            <div className="relative w-2/3 ml-52" style={{ marginTop: '-4rem' }}> {/* Set width to 2/3 of the page and added margin to push image more to the left */}
                <div style={{ position: 'relative', width: '500px', height: '725px', flexShrink: 0, borderRadius: '0px 0px 100px 100px', border: '3px solid rgba(0, 0, 0, 0.00)', background: '#1E2127' }}></div>
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
            <div className="absolute inset-0 flex justify-start items-center" style={{ marginLeft: '10.5rem' }}>
                <img src="/images/ForgotPasswordImage.png" alt="ForgotPassword" className="object-cover w-1/2 h-auto"/> 
            </div>
        </div>
    );
};

export default ForgotPassword;
