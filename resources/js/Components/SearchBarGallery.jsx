import React from 'react';

const SearchBarGallery = () => {
    return (
        <div className="search-bar-gallery">
                <input type="search" id="search" placeholder="Find your dream house..." />
                <button>
                    <i className='bx bx-search-alt' style={{ color: '#ecaa16' }}></i>
                </button>
</div>
)
    ;
};

export default SearchBarGallery;
