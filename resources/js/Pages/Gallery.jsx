import React from 'react';
import PropertyList from "@/Components/PropertyList.jsx";
import '../../css/Home.css'

const Gallery = ({ isDashboardGallery }) => {
    const galleryClassName = isDashboardGallery ? 'dashboard-gallery' : 'gallery';

    return (
        <div className={galleryClassName}>
            <PropertyList/>
        </div>
    );
};

export default Gallery;
