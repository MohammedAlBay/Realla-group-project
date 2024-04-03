import React from 'react';

const MailboxButton = ({ text, color, textColor }) => {
    const buttonStyle = {
        padding: '5px 10px',
        borderRadius: '20px', // Fully rounded border
        border: 'none',
        background: color,
        color: textColor,
        fontSize: '0.75rem',
        marginLeft: '60px', // Added left margin
    };

    return (
        <button style={buttonStyle}>{text}</button>
    );
};

export default MailboxButton;
