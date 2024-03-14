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

            <div className="buttons">
                <Link href="/login" className="login">Login</Link>
                <Link href="/register" className="register">Register</Link>
            </div>
        </div>
    );
}

export default Navigation;
