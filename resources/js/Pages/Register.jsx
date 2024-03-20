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
        <div className="flex bg-gray-900 text-white p-8 justify-between" style={{ backgroundColor: '#292F36' }}> {/* Space between items */}
            <div className="w-4/5 max-w-md ml-auto mr-20 mt-32 mb-20"> {/* Push to the right with ml-auto, and a bit to the left with mr-4 */}
                <div className="relative mr-8">
                    <div className="absolute inset-0"></div>
                    <img src="/images/RegisterImage.png" alt="Registration" className="absolute inset-0 object-cover w-full h-full" />
                </div>
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
                                <div style={{ width: '2rem' }}></div> {/* Adjust the width as needed */}
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
                                checkboxClassName="rounded-full" // Apply rounded corners to the checkbox
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