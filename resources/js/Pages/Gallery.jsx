import React, { useState, useEffect } from 'react';
import PropertyList from "@/Components/PropertyList.jsx";
import '../../css/Home.css'

const Gallery = ({ isDashboardGallery }) => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch('/api/properties');
                if (!response.ok) {
                    throw new Error('Failed to fetch properties');
                }
                const data = await response.json();
                setProperties(data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };

        fetchProperties();
    }, []);

    const galleryClassName = isDashboardGallery ? 'dashboard-gallery' : 'gallery';

    return (
        <div className={galleryClassName}>
            <PropertyList properties={properties} />
        </div>
    );
};

export default Gallery;
