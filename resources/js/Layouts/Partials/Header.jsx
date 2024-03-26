import React from 'react';
import Navigation from "@/Components/Navigation.jsx";

function Header() {
    return (
        <div className="fixed w-full top-0 left-0 z-50 transition-all bg-transparent shadow-md">
            <Navigation/>
        </div>
    );
}

export default Header;

