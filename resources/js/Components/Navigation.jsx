import React, { useEffect, useState } from 'react';
import Logo from "@/Components/Logo.jsx";
import '../../css/Header.css';
import 'boxicons/css/boxicons.min.css';

function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1150); // Set initial window width

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleThemeToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('selected-theme', newTheme);
    };

    useEffect(() => {
        const bgHeader = () => {
            const header = document.querySelector('.header');
            if (window.scrollY >= 50) {
                header.classList.add('bg-header');
            } else {
                header.classList.remove('bg-header');
            }
        };
        window.addEventListener('scroll', bgHeader);

        // Update isDesktop state when window is resized
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1150);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', bgHeader);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className={`header ${isMenuOpen ? 'bg-header' : ''}`}>
            <nav className="nav container">
                <Logo className="nav__logo"/>

                {/* Desktop Menu */}
                {isDesktop && (
                    <div className="desktop-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="/" className="nav__link">Home</a>
                            </li>
                            <li className="nav__item">
                                <a href="/about" className="nav__link">About</a>
                            </li>
                            <li className="nav__item">
                                <a href="/gallery" className="nav__link">Gallery</a>
                            </li>
                            <li className="nav__item">
                                <a href="/contact" className="nav__link">Contact</a>
                            </li>
                        </ul>
                    </div>
                )}

                {/* Mobile and Tablet Menu */}
                {!isDesktop && (
                    <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`}>
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="/" className="nav__link" onClick={() => setIsMenuOpen(false)}>Home</a>
                            </li>
                            <li className="nav__item">
                                <a href="/about" className="nav__link" onClick={() => setIsMenuOpen(false)}>About Me</a>
                            </li>
                            <li className="nav__item">
                                <a href="/work" className="nav__link" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
                            </li>
                            <li className="nav__item">
                                <a href="/contact" className="nav__link" onClick={() => setIsMenuOpen(false)}>Contact
                                    Me</a>
                            </li>
                            <div className="nav__actions">
                                <i className='bx bx-search-alt' style={{color: '#d2971b'}}></i>
                            </div>
                        </ul>
                        <div className="nav__close" id="nav-close" onClick={() => setIsMenuOpen(false)}>
                            <i className='bx bx-x'></i>
                        </div>
                    </div>
                )}

                {/* Hamburger Menu Toggle */}
                {!isDesktop && (
                    <div className="nav__toggle" id="nav-toggle" onClick={handleMenuToggle}>
                        <i className='bx bx-menu'></i>
                    </div>
                )}

            </nav>
        </header>
    );
}

export default Navigation;

