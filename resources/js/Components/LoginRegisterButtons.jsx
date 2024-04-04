import React from 'react';
import { Link } from '@inertiajs/react';
import '../../css/Header.css'

function LoginRegisterButtons(auth) {
    return (

        <div className="buttons flex flex-col md:flex-row md:items-center md:ml-8">
            {auth.user ? (
                <Link
                    href={route('dashboard')}
                    className="dashboard-button"
                >
                    Dashboard
                </Link>
            ) : (
                <>
                    <Link
                        href={route('login')}
                        className="login-button"
                    >
                        Log in
                    </Link>

                    <Link
                        href={route('register')}
                        className="register-button"
                    >
                        Register
                    </Link>
                </>
            )}
        </div>

)
    ;
}

export default LoginRegisterButtons;
