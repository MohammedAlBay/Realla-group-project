import React from 'react';
import 'boxicons/css/boxicons.min.css';
import "../../css/mockup2.css"

const MockUp2Page = () => {
    return (
        <div className={"MockUp2Page"}>

            <div className={"Mockup2-content"}>
                <img className={"Responsivnes"} src={"./images/Responsivnes.png"}
                     alt={"Responsibilities on different devices"}/>
                <div>
                    <h1 className={"Responsivnes-text"}>Access your real estates from
                        <br/> <span className={"span1"}>any device</span>,
                        <br/> <span className={"span2"}>anywhere</span>,
                        <br/> <span className={"span3"}>at any time</span>.</h1>
                </div>
            </div>

            <div className="Shadow"></div>
            <div className="Shadow2"></div>
            <div className="Shadow3"></div>


        </div>
    );
};
export default MockUp2Page;