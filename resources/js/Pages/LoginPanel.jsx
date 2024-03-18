import React, { useState } from 'react';

const LoginPanel = () => {
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
        <div className="flex bg-gray-900 text-white p-8 rounded-lg">
            <div className="relative mr-8">
                <div className="absolute inset-0 bg-gray-700 rounded-lg border-2 border-transparent"></div>
                <img src="./images/LoginPanelImage.png" alt="LoginPanel" className="absolute inset-0 object-cover w-full h-full" />
            </div>
            <div className="flex-grow">
                <h2 className="text-2xl font-semibold mb-4">Welcome Back to REALLA!</h2>
                <p>Sign in your account</p>   
                <p className="mt-4">Don’t have an account? <a href="#" className="text-yellow-500">Register</a></p>
            </div>
        </div>
    );
};

export default LoginPanel;
