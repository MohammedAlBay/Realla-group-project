import React from 'react';

const RightArrow2 = ({ onClick, disabled }) => {
    return (
        <button onClick={onClick} disabled={disabled} className="arrow-button right-arrow-2">
            <i className='bx bx-chevron-right' style={{color: '#ecaa16'}}></i>
        </button>
    );
};

export default RightArrow2;