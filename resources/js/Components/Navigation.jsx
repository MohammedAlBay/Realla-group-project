import React, { useEffect, useState } from 'react';
import Logo from "@/Components/Logo.jsx";
import { Link } from '@inertiajs/react';
import LoginRegisterButtons from "@/Components/LoginRegisterButtons.jsx";

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1150); // Set initial window width

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1150);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav className={`nav container ${isMenuOpen ? 'bg-header' : ''} fixed w-full top-0 left-0 z-50 transition-all bg-transparent shadow-md`}>
            <Logo className="nav__logo"/>

            {/* Desktop Menu */}
            {isDesktop && (
                <div className="desktop-menu">
                    <ul className="nav__list flex gap-12 items-center">
                        <li className="nav__item">
                            <Link href="/" className="nav__link text-white">Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/about" className="nav__link text-white">About</Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/gallery" className="nav__link text-white">Gallery</Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/contact" className="nav__link text-white">Contact</Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/dashboard-tenant" className="nav__link text-white">Dashboard</Link>
                        </li>
                        <LoginRegisterButtons className="nav__item desktop"/>
                    </ul>
                </div>
            )}

            {/* Mobile and Tablet Menu */}
            {!isDesktop && (
                <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''} fixed top-0 left-0 w-full h-45 bg-header z-50 flex-row justify-center items-center gap-2 pt-0 transform transition-all ease-in-out`}>
                    <ul className="nav__list flex flex-col items-center gap-12">
                        <li className="nav__item">
                            <Link href="/" className="nav__link text-white" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/about" className="nav__link text-white" onClick={() => setIsMenuOpen(false)}>About</Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/gallery" className="nav__link text-white" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                        </li>
                        <li className="nav__item">
                            <Link href="/contact" className="nav__link text-white" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        </li>
                        <div className="nav__actions">
                            <i className='bx bx-search-alt text-orange-500'></i>
                        </div>
                        <LoginRegisterButtons className="nav__item tablet"/>
                    </ul>
                    <div className="nav__close absolute top-6 right-6 cursor-pointer">
                        <i className='bx bx-x text-orange-500'></i>
                    </div>
                </div>
            )}

            {/* Hamburger Menu Toggle */}
            {!isDesktop && (
                <div className="nav__toggle absolute top-0 right-0" id="nav-toggle" onClick={handleMenuToggle}>
                    <i className='bx bx-menu text-orange-500'></i>
                </div>
            )}
        </nav>
    );
}

export default Navigation;
