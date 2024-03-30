import React from 'react';

const RegisterCheckbox = ({   checked, onChange, label, name}) => {
    return (
        <div className="mb-4">
            <label>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    className="mr-2"
                    name={name}

                />
                {label}
            </label>
        </div>
    );
};

export default RegisterCheckbox;
