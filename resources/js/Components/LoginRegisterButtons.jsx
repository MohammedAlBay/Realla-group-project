import React from 'react';
import { Link } from '@inertiajs/react';
import '../../css/Header.css'

function LoginRegisterButtons() {
    return (
        <div className="buttons flex flex-col md:flex-row md:items-center md:ml-8">
            <Link href="/login" className="login-button">Login</Link>
            <Link href="/register" className="register-button mt-2 md:mt-0 md:ml-4">Register</Link>
        </div>
    );
}

export default LoginRegisterButtons;
