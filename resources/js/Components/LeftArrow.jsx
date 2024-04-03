import React from 'react';

const LeftArrow = ({ onClick, disabled }) => {
    return (
        <button onClick={onClick} disabled={disabled} className="arrow-button left-arrow">
            <i className='bx bx-chevron-left' style={{color: '#ecaa16'}}></i>
        </button>
    );
};

export default LeftArrow;
