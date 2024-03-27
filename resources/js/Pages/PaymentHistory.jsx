import React from 'react';
import "../../css/payment-history.css";
import {Link} from "@inertiajs/react";
import DashboardTenantBar from "@/Components/DashboardTenantBar.jsx";

const PaymentHistory = () => {


    return (
        <div className="paynow">

            <div className='checkout'>
                <div className='order'>
                    <h2 className="payment-text">Payment History</h2>

                    <ul className='order-list'>
                        <li className="list">
                            <p className="current-fee">€ 850</p>
                            <h4 className="payment-text">01.04.2024</h4>

                            <Link href="/paynow" className="paynow-link">pay now</Link>

                        </li>
                        <li className="list">
                            <p className="fee">€ 850</p>
                            <h4 className="payment-text">01.03.2024
                            </h4>
                            <h5 className="payment-text">paid</h5>
                        </li>
                        <li className="list">
                            <p className="fee">€ 850</p>
                            <h4 className="payment-text">01.03.2024</h4>
                            <h5 className="payment-text">paid</h5>
                        </li>
                        <li className="list">
                            <p className="fee">€ 850</p>
                            <h4 className="payment-text">01.02.2024</h4>
                            <h5 className="payment-text">paid</h5>
                        </li>
                        <li className="list">
                            <p className="fee">€ 850</p>
                            <h4 className="payment-text">01.01.2024</h4>
                            <h5 className="payment-text">paid</h5>
                        </li>
                        <li className="list">
                            <p className="fee">€ 850</p>
                            <h4 className="payment-text">01.01.2024</h4>
                            <h5 className="payment-text">paid</h5>
                        </li>
                    </ul>
                </div>
                <div id='payment' className='payment'>
                    <img src="./images/real-estate-right.png" alt="right side image"/>
                </div>
            </div>

        </div>
    );
};

export default PaymentHistory;
