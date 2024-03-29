import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import 'boxicons/css/boxicons.min.css';
import "../../css/Home.css";

const PropertyList = ({ searchQuery }) => {
    const query = searchQuery || '';

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

    const [bookmarkedProperties, setBookmarkedProperties] = useState(new Set());

    const toggleBookmark = (id) => {
        const updatedBookmarks = new Set(bookmarkedProperties);
        if (updatedBookmarks.has(id)) {
            updatedBookmarks.delete(id);
        } else {
            updatedBookmarks.add(id);
        }
        setBookmarkedProperties(updatedBookmarks);
    };

    const filteredProperties = properties.filter(property => {
        console.log('property.location:', property.location);
        console.log('searchQuery:', searchQuery);
        return searchQuery && property.location.toLowerCase().includes(searchQuery.toLowerCase());
    });


    console.log('filteredProperties:', filteredProperties);

    const propertiesToDisplay = searchQuery ? filteredProperties : properties;


    return (
        <div className="all-cards">
            {propertiesToDisplay.map(property => (
                <div key={property.id} className="card-real-estates">
                    <img className={"gallery-image"} src={`/${property.image_path}`} alt={property.location}/>
                    <div className="overlay">

                        <div className="card-text">
                            <div className="card-location">
                                <i className='bx bxs-map' style={{color: '#ecaa16'}}></i>
                                <h3>{property.location}</h3>
                            </div>
                            <h4>{property.for_rent ? 'Rent' : 'Sale'}</h4>
                        </div>

                        <button onClick={() => toggleBookmark(property.id)}>
                            {bookmarkedProperties.has(property.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                        </button>

                        <Link href={`/property/${property.id}`}>
                            <button>View Details</button>
                        </Link>

                        <div className="card-mini-text">
                            <p>{property.rooms} Rooms</p>
                            <p>{property.square_meters} m²</p>
                            <p>{property.bathrooms} bathrooms</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default PropertyList;
