import React from 'react';

const Authenticated = ({ auth, errors, header, children }) => {
    // Check if user is authenticated, redirect if not authenticated, or render the content otherwise
    return (
        <div>
            {header}
            {children}
        </div>
    );
};

export default Authenticated;
