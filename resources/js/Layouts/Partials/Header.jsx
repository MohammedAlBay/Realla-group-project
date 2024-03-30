import React from 'react';
import Navigation from "@/Components/Navigation.jsx";
import '../../../css/app.css'

function Header() {
    return (
        <div className="fixed w-full h-20 top-0 left-0 z-50 transition-all bg-transparent shadow-md overflow-hidden">
            <Navigation/>
        </div>
    );
}

export default Header;

