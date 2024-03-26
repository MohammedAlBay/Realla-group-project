import React from 'react';
import MockUp1 from '@/Pages/MockUp1.jsx';
import MockUp2 from '@/Pages/MockUp2.jsx';
import RightArrow2 from "@/Components/RightArrow2.jsx";
import MockUp3 from "@/Pages/Mockup3.jsx";
import MockUp4 from "@/Pages/MockUp4.jsx";


function MockUp() {
    return (
        <div  className={"MockUp"} style={{ overflowX: 'hidden', backgroundColor: '#e1e1e1', }}>
            <br/>
            <MockUp1/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
                <MockUp2 />
            <MockUp3 />
            <MockUp4 />

        </div>
    );
}

export default MockUp;