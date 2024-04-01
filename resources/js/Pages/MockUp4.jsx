import React from 'react';
import 'boxicons/css/boxicons.min.css';
import "../../css/mockup4.css"

const MockUp4 = () => {
    return (
        <div className={"MockUp4"}>
            <section className="cards">

                <div className={"block"}></div>
                <div className="subscribe-card card1">
                    <div className='cards-heading'>
                        <h3>BASIC</h3>
                        <h5>€ 0.00</h5>
                    </div>

                    <ul>
                        <li> Basic property search functionality</li>
                            <li> Access to limited property listings</li>
                                <li> Save favorite properties for future reference</li>
                                    <li>Receive basic notifications about new listings in your area</li>
                    </ul>
                    <button className={"subscribe"}>Subscribe</button>
                </div>

                <div className="subscribe-card card2">
                    <div className='cards-heading'>
                        <h3>FAMILY</h3>
                        <h5>€ 2.89</h5>
                        </div>
                    <ul>
                        <li>All features of the Basic Plan</li>
                            <li>Expanded access to property listings for multiple family members</li>
                                <li>Customizable search filters for specific property criteria</li>
                                    <li>Priority support for finding the perfect home for your family</li>
                    </ul>
                    <button className={"subscribe"}>Subscribe</button>
                </div>

                <div className="subscribe-card card3">
                    <div className='cards-heading'>
                        <h3>PRO</h3>
                        <h5>€ 4.89</h5>
                    </div>

                    <ul>
                        <li>All features of the Family Plan </li>
                            <li>Advanced property analytics and market insights</li>
                                <li>Personalized recommendations based on your property preferences</li>
                                    <li>Exclusive access to premium property listings and off-market deals</li>
                    </ul>
                    <button className={"subscribe"}>Subscribe</button>
                </div>
            </section>
        </div>
    );
};

export default MockUp4;
