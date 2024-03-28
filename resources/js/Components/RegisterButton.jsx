import React from 'react';

const Button = ({ onClick, children }) => {
    return (
        <button onClick={onClick} className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-full">
            {children}
        </button>
    );
};

export default Button;