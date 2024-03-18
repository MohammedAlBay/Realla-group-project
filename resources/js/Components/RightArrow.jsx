import React from 'react';
import {Link} from "@inertiajs/react";


const RightArrow = () => {
    return (
<Link href="/mock-up">
    <button className="right-arrow">
        <i className='bx bxs-right-arrow-circle' style={{color: '#ecaa16'}}></i>
    </button>
</Link>

);
};

export default RightArrow;
