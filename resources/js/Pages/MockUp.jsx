import React from 'react';
import MockUp1 from '@/Pages/MockUp1.jsx';
import MockUp2 from '@/Pages/MockUp2.jsx';
import RightArrow2 from "@/Components/RightArrow2.jsx";
import MockUp3 from "@/Pages/Mockup3.jsx";
import MockUp4 from "@/Pages/MockUp4.jsx";


function MockUp() {
    return (
        <div  className={"MockUp"} style={{ overflowX: 'hidden' }}>
            <br/>
            <MockUp1/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <RightArrow2/>
            <br/>
            <MockUp3 />
            <MockUp2 />
            <MockUp4 />

        </div>
    );
}

export default MockUp;