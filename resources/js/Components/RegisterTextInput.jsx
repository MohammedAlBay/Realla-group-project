import React from 'react';

const RegisterTextInput  = ({ value, onChange, label, type, placeholder, name}) => {
    return (
        <div className="mb-4">
            <label>{label}:</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-yellow-500"
                required
            />
        </div>
    );
};

export default RegisterTextInput;
