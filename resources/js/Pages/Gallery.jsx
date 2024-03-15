import React from 'react';
import 'boxicons/css/boxicons.min.css';

const Gallery = () => {
    return (
        <div className="gallery">

            <main className="main">
                <div className="all-cards">

                    <div className="card">
                        <img src="./images/house-is-designed-by-person_8659.jpeg" alt="House"/>
                        <div className="overlay">

                            <div className={"card-text"}>
                                <div className={"card-location"}>
                                    <i className='bx bxs-map' style={{color: '#ecaa16'}}></i>
                                    <h3>LOCATION</h3>
                                </div>

                                <h4>Rent</h4>
                            </div>

                            <button>View Details</button>

                            <div className={"card-mini-text"}>
                                <p>4 rooms</p>
                                <p> 365 m²</p>
                                <p> 2 bathrooms</p>
                            </div>

                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Gallery;

