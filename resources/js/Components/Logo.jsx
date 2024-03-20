import React from 'react';
import { Link } from '@inertiajs/react';

function Logo() {
    return (
        <Link href="/" className="logo" >
            <img src="/images/realla_logo.png" className="logo" alt="Logo"/>
        </Link>
    );
}

export default Logo;
