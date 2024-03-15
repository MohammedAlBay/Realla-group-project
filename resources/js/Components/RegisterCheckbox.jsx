import React from 'react';

const Checkbox = ({ checked, onChange, label }) => {
    return (
        <div className="mb-4">
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className="mr-2"
                />
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
