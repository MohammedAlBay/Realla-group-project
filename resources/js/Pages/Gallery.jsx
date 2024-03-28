import React from 'react';
import 'boxicons/css/boxicons.min.css';
import PropertyList from "@/Components/PropertyList.jsx";
import '../../css/Home.css'

const  Gallery = ({ isDashboardTenantLanding }) => {
    const galleryClassName = isDashboardGallery ? 'dashboard-gallery' : 'gallery';

    return (
        <div className={galleryClassName}>
            <PropertyList/>
        </div>
    );
};

export default Gallery;

