import React from 'react';
import 'boxicons/css/boxicons.min.css';

const SearchBarGallery = () => {
    return (
        <div className={"search-bar-gallery"}>
            <div className="input-container">
                <input type="search" id={"search"} placeholder={"Find your dream house now"}/>
                <button href={'#'}>
                <i className='bx bx-search-alt' style={{ color: '#ecaa16' }}></i>
                </button>
            </div>
        </div>
    );
};

export default SearchBarGallery;
