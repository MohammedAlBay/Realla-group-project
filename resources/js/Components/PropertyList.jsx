import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import 'boxicons/css/boxicons.min.css';
import toggleBookmarks from '../utils/toggleBookmarks';
import "../../css/Home.css";

const PropertyList = () => {
    const [properties, setProperties] = useState([]);
    const [bookmarks, setBookmarks] = useState([]);

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

    useEffect(() => {
        const fetchBookmarks = async () => {
            try {
                const response = await fetch('/api/bookmarks');
                if (!response.ok) {
                    throw new Error('Failed to fetch bookmarks');
                }
                const data = await response.json();
                setBookmarks(data);
            } catch (error) {
                console.error('Error fetching bookmarks:', error);
            }
        };
        fetchBookmarks();
    }, []);

    const handleToggleBookmark = async (propertyId) => {
        try {
            await toggleBookmarks(propertyId, bookmarks, setBookmarks);
        } catch (error) {
            console.error('Error toggling property bookmark status:', error);
        }
    };

    return (
            <div className="all-cards">
                {properties.map(property => (
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

                            <button onClick={() => handleToggleBookmark(property.id)}>
                            {bookmarks.some(bookmark => bookmark.property_id === property.id) ? 'Remove from Bookmarks' : 'Add to Bookmarks'}
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
