import React, { useState } from 'react';
import 'boxicons/css/boxicons.min.css';
import '../../css/SearchBar.css';

const SearchBarGallery = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        if (searchQuery.trim() !== '') {
            window.location.href = `/search-results?query=${encodeURIComponent(searchQuery)}`;
        }
    };

    return (

            <div className="search-bar-container">
                <input
                    type="search"
                    id="search"
                    placeholder="Find your dream house..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSearch}>
                    <i className='bx bx-search-alt' style={{ color: '#ecaa16', fontSize: '25px' }}></i>
                </button>
            </div>

    );
};

export default SearchBarGallery;
