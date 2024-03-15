import React from 'react';

const TextInput = ({ value, onChange, label, type }) => {
    return (
        <div className="mb-4">
            <label>{label}:</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                className="w-full bg-gray-800 text-white border border-gray-700 rounded-md py-2 px-3 focus:outline-none focus:border-yellow-500"
                required
            />
        </div>
    );
};

export default TextInput;
