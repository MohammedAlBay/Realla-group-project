import React, { useState, useEffect } from 'react';
import PropertyCard from './PropertyCard';
import "../../css/app.css"

const PropertyList = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch('/api/properties');
                if (!response.ok) {
                    throw new Error('Failed to fetch properties');
                }
                const data = await response.json();
                console.log('Fetched properties:', data);
                setProperties(data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };

        fetchProperties();
    }, []);

    const limitedProperties = properties.slice(0, 6);

    return (
        <main className="main">
            {limitedProperties.map(property => (
                <PropertyCard key={property.id} property={property}/>
            ))}
        </main>
    );
};

export default PropertyList;
