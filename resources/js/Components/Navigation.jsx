import React from 'react';

function Navigation() {
    return (
        <div className="navigation">

            <img src="./images/logo.svg" className="logo" alt="Logo"/>

            <nav className="navbar">
                <a href="#" className="active">Home</a>
                <a href="#">About</a>
                <a href="#">Gallery</a>
                <a href="#">Contact</a>
            </nav>
            <div className="buttons">
                <button className="login">Login</button>
                <hr/>
                <button className="register">Register</button>
            </div>

        </div>
    );
}

export default Navigation;
