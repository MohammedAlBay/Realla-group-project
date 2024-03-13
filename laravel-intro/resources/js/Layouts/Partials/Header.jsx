import React from 'react';
import Navigation from "@/Components/Navigation.jsx";

function Header() {
    return (
        <header className="header">

            <Navigation/>

                <section className="home section">

                    <div className="home-content">

                        <h1>The <span> smartest</span> way <br/>
                            to connect</h1>

                        <input id={"search"} placeholder={"Find your dream house now"}/>

                    </div>

                    <div className="home-img">
                        <img src="./images/home_page_background.png" alt="Bungalov"/>
                    </div>
                </section>
        </header>
);
}


export default Header;

