import { Link } from '@inertiajs/react';

function Navigation() {
    return (
        <div className="navigation">
            <img src="./images/realla_logo.png" className="logo" alt="Logo"/>
            <nav className="navbar">
                <Link href="/" className="active">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/gallery">Gallery</Link>
                <Link href="/contact">Contact</Link>
            </nav>

            {/*
            <div className="buttons">
                <Link to="/login" className="login">Login</Link> {/* Use Link instead of InertiaLink */}
            {/*
                <Link to="/register" className="register">Register</Link> {/* Use Link instead of InertiaLink */}
            {/* </div>
            */}
        </div>
    );
}

export default Navigation;
