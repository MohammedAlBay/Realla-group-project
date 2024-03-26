import React from 'react';
import { Link } from '@inertiajs/react';

function Logo() {
    return (
        <Link href="/" className="flex items-center ml-4">
            <img src="/images/realla_logo.png" className="h-12 md:h-auto md:w-24" alt="Logo"/>
        </Link>
    );
}

export default Logo;
