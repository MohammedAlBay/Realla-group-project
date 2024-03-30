import React, { useState } from 'react';
import Button from '../../Components/RegisterButton.jsx';
import TextInput from '../../Components/RegisterTextInput.jsx';
import Checkbox from '../../Components/RegisterCheckbox.jsx';
import '../../../css/register.css';
import RegisterTextInput from "../../Components/RegisterTextInput.jsx";

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        isLandlord: false,
        agreeToPolicy: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData(prevState => ({
            ...prevState,
            [name]: newValue
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', formData);
            // You can call your API to submit the form data here
        }
    };

    const validateForm = (data) => {
        let errors = {};
        if (!data.name || data.name.length < 3) {
            errors.name = 'Name must be at least 3 characters long';
        }
        if (!data.email || !isValidEmail(data.email)) {
            errors.email = 'Please enter a valid email address';
        }
        if (!data.password || data.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }
        if (data.password !== data.password_confirmation) {
            errors.password_confirmation = 'Passwords do not match';
        }
        return errors;
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className="flex flex-col lg:flex-row bg-gray-900 text-white p-8 pt-24 relative" style={{ backgroundColor: '#292F36' }}>

            <div className="register-left lg:w-1/2 lg:ml-0 lg:mt-0 lg:mb-0 relative m-10">
                <img src="/images/RegisterImage.png" alt="LoginOptions" className="object-cover w-full h-auto lg:absolute lg:inset-0  lg:h-full z-1" style={{ position: 'absolute', top: '40%', left: '70%', transform: 'translate(-50%, -50%)', zIndex: '1' }} />
                <div className='register-image'></div>
            </div>

            <div className="w-full max-w-md lg:w-1/2 lg:max-w-md lg:ml-auto lg:mr-20 mt-4 lg:mt-0 lg:mb-0 lg:ml-28 lg:mr-0">
                <h2 className="text-2xl font-semibold mb-4">Create your Free Account</h2>
                <p>Submit your data for registration</p>
                <form onSubmit={handleSubmit} className="mt-4">
                    <RegisterTextInput
                        label="Name:"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        error={errors.name}
                    />
                    <RegisterTextInput
                        label="Email:"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Write your email"
                        error={errors.email}
                    />
                    <RegisterTextInput
                        label="Password:"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Create a password"
                        error={errors.password}
                    />
                    <RegisterTextInput
                        label="Confirm Password:"
                        type="password"
                        name="password_confirmation"
                        value={formData.password_confirmation}
                        onChange={handleChange}
                        placeholder="Confirm your password"
                        error={errors.password_confirmation}
                    />

                    <div className="mb-4">
                        <label className="mr-4">Register as:</label>
                        <div className="flex items-center">
                            <Checkbox
                                label="Landlord"
                                name="isLandlord"
                                checked={formData.isLandlord}
                                onChange={handleChange}
                            />
                            <div style={{ width: '2rem' }}></div>
                            <Checkbox
                                label="Tenant"
                                name="isLandlord"
                                checked={!formData.isLandlord}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <Checkbox
                            label={<span className="text-white">I agree to <span className="text-yellow-500">Realla Security</span> and <span className="text-yellow-500">Privacy Policy</span></span>}
                            name="agreeToPolicy"
                            checked={formData.agreeToPolicy}
                            onChange={handleChange}
                            required
                            checkboxClassName="rounded-full"
                        />
                    </div>

                    <Button type="submit">Get started</Button>
                </form>
                <p className="mt-4 text-center">I have an account? <a href="#" className="text-yellow-500">Login</a></p>
            </div>

        </div>
    );
};

export default Register;
