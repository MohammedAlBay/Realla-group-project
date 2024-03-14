import React, { useState } from 'react';

const SearchOptionsGallery = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className={"search-options"}>
            <label>
                <input
                    type="checkbox"
                    checked={selectedOption === 'rent'}
                    onChange={() => handleOptionChange('rent')}
                />
                Rent
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={selectedOption === 'sale'}
                    onChange={() => handleOptionChange('sale')}
                />
                Sale
            </label>
        </div>
    );
};

export default SearchOptionsGallery;
