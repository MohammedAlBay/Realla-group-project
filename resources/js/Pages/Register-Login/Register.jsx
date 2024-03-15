import React, { useState } from 'react';
import registrationImage from './RegisterImage.png';
import Button from '../../Components/RegisterButton'; 
import TextInput from '../../Components/RegisterTextInput'; 
import Checkbox from '../../Components/RegisterCheckbox'; 
import Navigation from '../../Components/Navigation'; 

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
        <div>
            <Navigation />
            <div className="flex bg-gray-900 text-white p-8 rounded-lg">
                <div className="relative mr-8">
                    <div className="absolute inset-0 bg-gray-700 rounded-lg border-2 border-transparent"></div>
                    <img src={registrationImage} alt="Registration" className="absolute inset-0 object-cover w-full h-full" />
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
                        <Checkbox
                            label="Register as Landlord"
                            checked={isLandlord}
                            onChange={(e) => setIsLandlord(e.target.checked)}
                        />
                        <Checkbox
                            label="I agree to Realla Security and Privacy Policy"
                            checked={agreeToPolicy}
                            onChange={(e) => setAgreeToPolicy(e.target.checked)}
                            required
                        />
                        <Button type="submit">Get Started</Button>
                    </form>   
                    <p className="mt-4">I have an account? <a href="#" className="text-yellow-500">Login</a></p>
                </div>
            </div>
        </div>
    );
};


export default Register;
