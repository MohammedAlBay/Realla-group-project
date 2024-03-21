import React, { useState } from 'react';
import Button from '../Components/RegisterButton'; 
import TextInput from '../Components/RegisterTextInput'; 
import Checkbox from '../Components/RegisterCheckbox'; 

const Register = () => {
    // Define state variables to store form input values
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLandlord, setIsLandlord] = useState(false);
    const [agreeToPolicy, setAgreeToPolicy] = useState(false);

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Registration logic
        console.log('Form submitted');
    };

    return (
        <div className="flex bg-gray-900 text-white p-8 justify-between" style={{ backgroundColor: '#292F36' }}>
            <div className="relative w-2/3 ml-52" style={{ marginTop: '-4rem' }}>
                <div style={{ position: 'relative', width: '500px', height: '725px', flexShrink: 0, borderRadius: '0px 0px 100px 100px', border: '3px solid rgba(0, 0, 0, 0.00)', background: '#1E2127' }}>
                </div>
                <div className="absolute inset-0 flex justify-start items-center" style={{ marginLeft: '-7rem' }}>
                    <img src="/images/RegisterImage.png" alt="LoginOptions" className="object-cover w-auto h-4/5"/> 
                </div>
            </div>
            <div className="w-4/5 max-w-md ml-auto mr-20 mt-24 mb-20">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Create your Free Account</h2>
                    <p>Submit your data for registration</p>
                    <form onSubmit={handleSubmit} className="mt-4">
                        <TextInput
                            label="Full Name"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <TextInput
                            label="Your Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextInput
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <TextInput
                            label="Confirm Password"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <div className="mb-4">
                            <label className="mr-4">Register as:</label>
                            <div className="flex items-center">
                                <Checkbox
                                    label="Landlord"
                                    checked={isLandlord}
                                    onChange={(e) => setIsLandlord(e.target.checked)}
                                />
                                <div style={{ width: '2rem' }}></div>
                                <Checkbox
                                    label="Tenant"
                                    checked={!isLandlord}
                                    onChange={(e) => setIsLandlord(!e.target.checked)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <Checkbox
                                label={<span className="text-white">I agree to <span className="text-yellow-500">Realla Security</span> and <span className="text-yellow-500">Privacy Policy</span></span>}
                                checked={agreeToPolicy}
                                onChange={(e) => setAgreeToPolicy(e.target.checked)}
                                required
                                checkboxClassName="rounded-full"
                            />
                        </div>
                        <Button type="submit">Get Started</Button>
                    </form>   
                    <p className="mt-4">I have an account? <a href="#" className="text-yellow-500">Login</a></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
