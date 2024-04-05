import React from 'react';
import '../../../css/Header.css';
import '../../../css/app.css';
import Navigation from "@/Components/Navigation.jsx";

function Header() {


    return (
        <header className="fixed w-full h-20 top-0 left-0 z-50 transition-all bg-transparent shadow-md overflow-y-hidden" >

            <Navigation />

        </header>

    );
}

export default Header;

