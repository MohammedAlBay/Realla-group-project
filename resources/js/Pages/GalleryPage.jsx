import React from 'react';
import 'boxicons/css/boxicons.min.css';
import Gallery from '@/Pages/Gallery.jsx'
import SearchBarGallery from "@/Components/SearchBarGallery.jsx";
import SearchOptionsGallery from "@/Components/SearchOptionsGallery.jsx";

const GalleryPage = () => {
    return (
        <div className="galleryPage">
            < SearchBarGallery />
            < SearchOptionsGallery />
            < Gallery />
        </div>
    );
};

export default GalleryPage;

