import React from 'react';
import 'boxicons/css/boxicons.min.css';
import "../../css/mockup4.css"

const MockUp4 = () => {
    return (
        <div className={"MockUp4"}>
            <section className="cards">

                <div className={"block"}></div>
                <div className="card card1">
                    <h3>FREE</h3>

                    <ul>
                        <li>Basic weather info for your location</li>
                        <li>Share with one partner</li>
                        <li>Daily and hourly forecasts</li>
                        <li>Beautiful and intuitive interface</li>
                    </ul>
                    <button className={"subscribe"}>Subscribe</button>
                </div>

                <div className="card card2">
                    <h3>COUPLE</h3>
                    <ul>
                        <li>Basic weather info for your location</li>
                        <li>Share with one partner</li>
                        <li>Daily and hourly forecasts</li>
                        <li>Beautiful and intuitive interface</li>
                    </ul>
                    <button className={"subscribe"}>Subscribe</button>
                </div>

                <div className="card card3">
                    <h3>PRO</h3>

                    <ul>
                        <li>Basic weather info for your location</li>
                        <li>Share with one partner</li>
                        <li>Daily and hourly forecasts</li>
                        <li>Beautiful and intuitive interface</li>
                    </ul>
                    <button className={"subscribe"}>Subscribe</button>
                </div>
            </section>
        </div>
    );
};

export default MockUp4;
