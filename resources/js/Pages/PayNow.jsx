import React from 'react';
import "../../css/Payment.css"
import DashboardTenantBar from "@/Components/DashboardTenantBar.jsx";



const PayNow = () => {
    return (
        <div className="paynow">
            <DashboardTenantBar />

            <div className='checkout'>
                <div className='order'>
                    <h2 className="payment-text">Current Rental Fee</h2>
                    <h5 className="payment-text"> 01.01.2024</h5>
                    <ul className='order-list'>
                        <li>
                            <i className='bx bxs-pie-chart' style={{color: '#FDB414'}}></i>
                            <h4 className="payment-text">Monthly Fee</h4>
                            <h5 className="payment-text">€600</h5>
                        </li>
                        <li>
                            <i className='bx bxs-pie-chart-alt' style={{color: '#FDB414'}}></i>
                            <h4 className="payment-text">Monthly Charges
                            </h4>
                            <h5 className="payment-text">€ 65</h5>
                        </li>
                        <li>
                        <i className='bx bxs-parking' style={{color: '#FDB414'}}></i>
                            <h4 className="payment-text">Parking</h4>
                            <h5 className="payment-text">€50</h5>
                        </li>
                    </ul>
                    <div className="cleaning-services">
                        <h5 className="payment-text">Cleaning Services</h5>
                        <h4 className="payment-text">€ 9.50</h4>
                    </div>

                    <h5 className='total'>Total</h5>
                    <h1 className="payment-text">€ 850</h1>
                </div>
                <h2>Payment Panel </h2>
                <div id='payment' className='payment'>
                    <div className='card'>
                        <div className='card-content'>
                            <svg id='logo-visa' enableBackground='new 0 0 50 70' height='70px' version='1.1'
                                 viewBox='0 0 50 50' width='70px' xmlSpace='preserve' xmlns='http://www.w3.org/2000/svg'
                                 xmlnsXlink='http://www.w3.org/1999/xlink'>
                                {/* Add your SVG paths here */}
                            </svg>
                            <h5 className="payment-text">Card Number</h5>
                            <h6 id='label-cardnumber'>0000 0000 0000 0000</h6>
                            <h5>Expiration<span>CVC</span></h5>
                            <h6 id='label-cardexpiration'>00 / 0000<span>000</span></h6>
                        </div>
                        <div className='wave'></div>
                    </div>
                    <div className="card-form">
                        <div className='card-form'>
                            <p className='field'>

                                <input type='text' id='cardnumber' name='cardnumber' placeholder='1234 5678 9123 4567'
                                       pattern='\d*' title='Card Number'/>
                            </p>
                            <p className='field space'>

                                <input type='text' id='cardexpiration' name='cardexpiration' placeholder="MM / YYYY"
                                       pattern="\d*" title='Card Expiration Date'/>
                            </p>
                            <p className='field space'>

                                <input type='text' id='cardcvc' name='cardcvc' placeholder="123" pattern="\d*"
                                       title='CVC Code'/>
                            </p>
                            <button className='button-cta' title='Confirm your purchase'><span>PURCHASE</span></button>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
        ;
};

export default PayNow;
