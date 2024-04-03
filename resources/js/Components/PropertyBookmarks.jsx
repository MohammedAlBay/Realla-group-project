import React, { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import toggleBookmarks from '../utils/toggleBookmarks';
import carouselBookmarks from '../utils/carouselBookmarks';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

const PropertyBookmarks = () => {
    const [bookmarks, setBookmarks] = useState([]);

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

    return (
        <div className="bookmarks-container">
            <h2 className="bookmark-heading">Bookmark List</h2>
            <div className="carousel">
                <div className="carousel-inner">
                    {bookmarks.map(bookmark => (
                        <div key={bookmark.id} className="carousel-item">
                            <div className="card-real-estates">
                                <img className="gallery-image" src={`/${bookmark.property.image_path}`} alt={bookmark.property.location}/>
                                <div className="overlay">
                                    <div className="card-text">
                                        <div className="card-location">
                                            <i className='bx bxs-map' style={{color: '#ecaa16'}}></i>
                                            <h3>{bookmark.property.location}</h3>
                                        </div>
                                        <h4>{bookmark.property.for_rent ? 'Rent' : 'Sale'}</h4>
                                    </div>
                                    <button onClick={() => handleToggleBookmark(bookmark.property.id)}>
                                        {bookmarks.some(b => b.property_id === bookmark.property.id) ? 'Remove from Bookmarks' : 'Add to Bookmarks'}
                                    </button>
                                    <Link href={`/property/${bookmark.property.id}`}>
                                        <button>View Details</button>
                                    </Link>
                                    <div className="card-mini-text">
                                        <p>{bookmark.property.rooms} Rooms</p>
                                        <p>{bookmark.property.square_meters} m²</p>
                                        <p>{bookmark.property.bathrooms} bathrooms</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <a className="carousel-control-prev" role="button" data-slide="prev">
                        <FiArrowLeft />
                    </a>
                    <a className="carousel-control-next" role="button" data-slide="next">
                        <FiArrowRight />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PropertyBookmarks;