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
                setProperties(data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };

        fetchProperties();
    }, []);

    return (
        <main className="main">


                {properties.map(property => (


                        <PropertyCard key={property.id} property={property}/>


                ))}


        </main>
    );
};

export default PropertyList;
