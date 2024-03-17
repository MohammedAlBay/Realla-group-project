import React from 'react';
import 'boxicons/css/boxicons.min.css';
import MockUp1 from '@/Pages/MockUp1.jsx';
import MockUp2 from '@/Pages/MockUp2.jsx';
import RightArrow2 from "@/Components/RightArrow2.jsx";
import MockUp3 from "@/Pages/Mockup3.jsx";


function MockUp() {
    return (
        <div style={{backgroundColor: '#292F36'}} className={"MockUp"}>
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

        </div>
    );
}

export default MockUp;