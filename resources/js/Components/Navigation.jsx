import React, { useEffect, useState } from 'react';
import Logo from "@/Components/Logo.jsx";
import '../../css/Header.css';
import 'boxicons/css/boxicons.min.css';
import { Link } from '@inertiajs/react';
import LoginRegisterButtons from "@/Components/LoginRegisterButtons.jsx";
import SearchBarGallery from "@/Components/SearchBarGallery.jsx";
import DashboardTenantBar from "@/Components/DashboardTenantBar.jsx";
import DashboardLandloardBar from "@/Components/DashboardLandloardBar.jsx";


function Navigation({ onPageChange, currentPage }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1150);
    const [userType, setUserType] = useState("");

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/user', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem('token') // Assuming you have a token stored in localStorage
                    }
                });
                if (response.ok) {
                    const userData = await response.json();
                    // Assuming your user object contains an `is_landlord` property
                    setUserType(userData.is_landlord ? 'landlord' : 'tenant');
                } else {
                    // Handle error
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                // Handle error
            }
        };

        fetchUserData();

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
        <div className={`header ${isMenuOpen ? 'bg-header' : ''}`}>
            <nav className="nav container">
                <Logo/>

                {/* Desktop Menu */}
                {isDesktop && (
                    <div className="desktop-menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <Link href="/" className="nav__link">Home</Link>
                            </li>
                            <li className="nav__item">
                                <Link href="/about" className="nav__link">About</Link>
                            </li>
                            <li className="nav__item">
                                <Link href="/contact" className="nav__link">Contact</Link>
                            </li>
                            <div className="header-user-name">
                                <div className="user-info">
                                    <i className='bx bxs-user-circle' style={{color: '#FDB414', fontSize: '35px'}}></i>
                                </div>
                            </div>
                        </ul>
                    </div>

                )}
                <div className="buttons">
                    <LoginRegisterButtons/>
                </div>

                {/* Mobile and Tablet Menu */}
                {!isDesktop && (
                    <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`}>
                        <ul className="nav__list">

                            <li className="nav__item">
                                <Link href="/" className="nav__link"
                                      onClick={() => setIsMenuOpen(false)}>Home</Link>
                            </li>

                            <li className="nav__item">
                                <Link href="/about" className="nav__link"
                                      onClick={() => setIsMenuOpen(false)}>About</Link>
                            </li>


                            <li className="nav__item">
                                <Link href="/contact" className="nav__link"
                                      onClick={() => setIsMenuOpen(false)}>Contact</Link>
                            </li>


                            {/* {currentPage === 'dashboard-tenant' && <DashboardTenantBar onPageChange={onPageChange} />} */}

                            {/* Conditionally render dashboard links based on user type */}
                            {userType === 'tenant' && currentPage === 'dashboard-tenant' && (
                                <DashboardTenantBar onPageChange={onPageChange} />
                            )}
                            {userType === 'landlord' && currentPage === 'dashboard-landloard' && (
                                <DashboardLandloardBar onPageChange={onPageChange} />
                            )}
                        </ul>

                        <div className="nav__close" id="nav-close" onClick={() => setIsMenuOpen(false)}>
                            <i className='bx bx-x'></i>
                        </div>


                        <div>
                            <div>
                                <LoginRegisterButtons className="nav__item tablet"/>
                            </div>
                            <div className='search-nav'>
                                <SearchBarGallery className="nav__item tablet"/>
                            </div>

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
        </div>
    );
}

export default Navigation;