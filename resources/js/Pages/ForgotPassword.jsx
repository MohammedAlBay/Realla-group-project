import React, { useState } from 'react';
import Button from '../Components/RegisterButton'; 
import TextInput from '../Components/RegisterTextInput'; 
import { Link } from '@inertiajs/react'; 

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
            <div className="relative w-2/3 ml-52" style={{ marginTop: '-4rem' }}>
                <div style={{ position: 'relative', width: '500px', height: '725px', flexShrink: 0, borderRadius: '0px 0px 100px 100px', border: '3px solid rgba(0, 0, 0, 0.00)', background: '#1E2127' }}>
                </div>
                <div className="absolute inset-0 flex justify-start items-center" style={{ marginLeft: '-3rem' }}>
                    <img src="/images/ForgotPasswordImage.png" alt="ForgotPassword" className="object-cover w-auto h-4/5"/> 
                </div>
            </div>
            <div className="w-4/5 max-w-md ml-auto mr-20 mt-24 mb-20">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 mt-40">Forgot Password</h2>
                    <p>Enter your email account to reset your password</p>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <TextInput
                            label="Your Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button type="submit">Reset Password</Button>
                    </form>   
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
