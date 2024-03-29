import React, { useState, useEffect } from 'react';
import PropertyList from '@/Components/PropertyList.jsx';
import "../../css/app.css";

const SearchResults = ({ searchQuery }) => {
    const [filteredProperties, setFilteredProperties] = useState([]);

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch('/api/properties');
                if (!response.ok) {
                    throw new Error('Failed to fetch properties');
                }
                const data = await response.json();

                // Filter properties based on search query
                const filtered = data.filter(property =>
                    property.location.toLowerCase().includes(searchQuery?.toLowerCase() ?? '')
                );

                setFilteredProperties(filtered);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        };

        fetchProperties();
    }, [searchQuery]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Property Search Results</h1>
            <div className="w-full max-w-screen-lg">
                {filteredProperties.length === 0 ? (
                    <p>Sorry, no properties match your search.</p>
                ) : (
                    <PropertyList searchQuery={searchQuery} properties={filteredProperties} />
                )}
            </div>
        </div>
    );
};

export default SearchResults;
