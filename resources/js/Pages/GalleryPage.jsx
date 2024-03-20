import React from 'react';
import 'boxicons/css/boxicons.min.css';
import Gallery from '@/Pages/Gallery.jsx'
import SearchBarGallery from "@/Components/SearchBarGallery.jsx";
import SearchOptionsGallery from "@/Components/SearchOptionsGallery.jsx";

const GalleryPage = () => {
    return (
        <div className="galleryPage">
            <h1>Explore Real Estates</h1>
            <div className={"SearchGallery"}>
                <div className="search-bar-gallery__page">
                    <input type="search" id="search" placeholder="Find your dream house..."/>
                    <button className="gallery-page-icon">
                        <i className='bx bx-search-alt' style={{color: '#ecaa16'}}></i>
                    </button>
                </div>

                < SearchOptionsGallery/>
            </div>
            <div className={"gallery-card"}>
                < Gallery/>
            </div>

        </div>
    );
};

export default GalleryPage;

