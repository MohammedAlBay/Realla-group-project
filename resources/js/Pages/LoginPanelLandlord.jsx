import React, { useState } from 'react';
import Button from '../Components/RegisterButton'; 
import RegisterTextInput from '../Components/RegisterTextInput';
import RegisterCheckbox from '../Components/RegisterCheckbox';
import { Link } from '@inertiajs/react';
import {useHistory} from "@inertiajs/inertia-react";

const LoginPanelLandlord = () => {

    // Define state variables to store form input values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);



    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Login logic
        console.log('Form submitted');
    };

    return (
        <div className="flex bg-gray-900 text-white p-8 justify-between" style={{ backgroundColor: '#292F36' }}>
            <div className="relative w-2/3 ml-52" style={{ marginTop: '-4rem' }}>
                <div style={{ position: 'relative', width: '500px', height: '725px', flexShrink: 0, borderRadius: '0px 0px 100px 100px', border: '3px solid rgba(0, 0, 0, 0.00)', background: '#1E2127' }}>
                </div>
                <div className="absolute inset-0 flex justify-start items-center" style={{ marginLeft: '-2rem' }}>
                    <img src="/images/LoginPanelLandlordImage.png" alt="LoginPanelLandlord" className="object-cover w-auto h-4/5"/> 
                </div>
            </div>
            <div className="w-4/5 max-w-md ml-auto mr-20 mt-24 mb-20">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 mr-44">Welcome Back to REALLA!</h2>
                    <p>Sign in your account</p>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <RegisterTextInput
                            label="Your Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <RegisterTextInput
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="flex items-center justify-between mb-4">
                            <RegisterCheckbox
                                label="Remember Me"
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            {/* Use the Link component for navigation */}
                            <Link href="/forgot-password" className="text-white -mt-4">Forgot Password?</Link>
                        </div>
                        <Button type="submit">Login</Button>
                    </form>   
                    <p className="mt-4">Don’t have an account? <Link href="/Auth/Register" className="text-yellow-500">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPanelLandlord;
