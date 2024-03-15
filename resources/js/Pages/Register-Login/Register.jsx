import React, { useState } from 'react';
import registrationImage from './RegisterImage.png'; // Change to own image (this is an example)

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
        <div className="flex bg-gray-900 text-white p-8 rounded-lg">
            <div className="relative mr-8">
                <div className="absolute inset-0 bg-gray-700 rounded-lg border-2 border-transparent"></div>
                <img src={registrationImage} alt="Registration" className="absolute inset-0 object-cover w-full h-full" />
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-4">Create your Free Account</h2>
                <p>Submit your data for registration</p>
                <form onSubmit={handleSubmit} className="mt-4">
                    <div className="mb-4">
                        <label>Full Name:</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-yellow-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Your Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-yellow-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-yellow-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>Confirm Password:</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-yellow-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label>
                            Register as:
                            <input
                                type="checkbox"
                                checked={isLandlord}
                                onChange={(e) => setIsLandlord(e.target.checked)}
                                className="mr-2"
                            />
                            Landlord
                        </label>
                    </div>
                    <div className="mb-4">
                        <label>
                            <input
                                type="checkbox"
                                checked={agreeToPolicy}
                                onChange={(e) => setAgreeToPolicy(e.target.checked)}
                                required
                                className="mr-2"
                            />
                            I agree to Realla Security and Privacy Policy
                        </label>
                    </div>
                    <button type="submit" className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-md">Get Started</button>
                </form>
                <p className="mt-4">I have an account? <a href="#" className="text-yellow-500">Login</a></p>
            </div>
        </div>
    );
};

export default Register;
