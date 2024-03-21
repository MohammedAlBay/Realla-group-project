import React, { useState } from 'react';

const LoginPanelTenant = () => {
    // Define state variables to store form input values
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Login logic
        console.log('Form submitted');
    };

    return (
        <div className="flex bg-gray-900 text-white p-8">
            <div className="relative w-2/3 ml-52" style={{ marginTop: '-4rem' }}> {/* Set width to 2/3 of the page and added margin to push image more to the left */}
                <div style={{ position: 'relative', width: '500px', height: '625px', flexShrink: 0, borderRadius: '0px 0px 100px 100px', border: '3px solid rgba(0, 0, 0, 0.00)', background: '#1E2127' }}></div>
            </div>            
            <div className="flex-grow">
                <h2 className="text-2xl font-semibold mb-4">Welcome Back to REALLA!</h2>
                <p>Sign in your account</p>
                <form onSubmit={handleSubmit} className="mt-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your Email"
                        className="border rounded-lg p-2 mt-2"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="border rounded-lg p-2 mt-2"
                    />
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        className="border rounded-lg p-2 mt-2"
                    />
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={isLandlord}
                                onChange={(e) => setIsLandlord(e.target.checked)}
                                className="mr-2"
                            />
                            <label>Remember Me</label>
                        </div>
                        <a href="#" className="text-white">Forgot Password?</a>
                    </div>
                    <button type="submit" className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg">Login</button>
                </form>   
                <p className="mt-4">Don’t have an account? <a href="#" className="text-yellow-500">Register</a></p>
            </div>
            <div className="absolute inset-0 flex justify-start items-center" style={{ marginLeft: '10.5rem' }}>
                <img src="/images/LoginPanelTenantImage.png" alt="LoginOptions" className="object-cover w-1/2 h-auto"/> 
            </div>
        </div>
    );
};

export default LoginPanelTenant;
