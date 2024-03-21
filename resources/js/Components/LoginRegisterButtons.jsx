import React from 'react';
import {Link} from "@inertiajs/react";


function LoginRegisterButtons() {
    return (
        <div className="buttons">
            <Link href="/login" className="login">Login</Link>
            <Link href="/register" className="register">Register</Link>
            {/* <div className="header-user-name">
                <div className="user-info">
                    <i className='bx bxs-user-circle' style={{color: '#FDB414'}}></i>
                    <span>User Name</span>
                </div>
            </div>
            */}
        </div>

    );
}

export default LoginRegisterButtons;
