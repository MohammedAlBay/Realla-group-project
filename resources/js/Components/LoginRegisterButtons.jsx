import React from 'react';
import {Link} from "@inertiajs/react";


function LoginRegisterButtons() {
    return (
        <div className="buttons">
            <Link href="/login" className="login">Login</Link>
            <Link href="/register" className="register">Register</Link>
        </div>

    );
}
export default LoginRegisterButtons;
