import React, { useState } from 'react';
import "../../css/Payment.css";
import DashboardTenantBar from "@/Components/DashboardTenantBar.jsx";

const PayNow = () => {
    const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
    const [expirationDate, setExpirationDate] = useState('00 / 0000');
    const [cvv, setCvv] = useState('000');

    const updateCardNumber = (event) => {
        setCardNumber(event.target.value);
    }

    const updateExpirationDate = (event) => {
        const value = event.target.value;
        setExpirationDate(value);
    }

    const updateCvv = (event) => {
        setCvv(event.target.value);
    }

    return (
        <div className="paynow">
            <DashboardTenantBar/>

            <div className='checkout'>
                <div className='order'>
                    <h2 className="payment-text">Current Rental Fee</h2>
                    <h5 className="card-details"> 01.01.2024</h5>
                    <ul className='order-list'>
                        <li className="list">
                            <i className='bx bxs-pie-chart' style={{color: '#FDB414'}}></i>
                            <h4 className="payment-text">Monthly Fee</h4>
                            <h5 className="payment-text">€600</h5>
                        </li>
                        <li className="list">
                            <i className='bx bxs-pie-chart-alt' style={{color: '#FDB414'}}></i>
                            <h4 className="payment-text">Monthly Charges
                            </h4>
                            <h5 className="payment-text">€ 65</h5>
                        </li>
                        <li className="list">
                            <i className='bx bxs-parking' style={{color: '#FDB414'}}></i>
                            <h4 className="payment-text">Parking</h4>
                            <h5 className="payment-text">€50</h5>
                        </li>
                    </ul>
                    <div className="cleaning-services">
                        <h5 className="total">Cleaning Services</h5>
                        <h4 className="payment-text">€ 9.50</h4>
                    </div>

                    <h5 className='total'>Total</h5>
                    <h1 className="payment-text">€ 850</h1>
                </div>

                <button className='button-cta-2' title='Confirm your purchase'><span>PAYMENT HISTORY</span></button>

                <div id='payment' className='payment'>
                    <div className='card'>
                        <div className='card-content'>

                            <i className='bx bxl-visa' id='logo-visa'></i>
                            <h5 className="cardtext">Card Number</h5>
                            <h6 id='label-cardnumber'>{cardNumber}</h6>
                            <h5 className="cardtext">Expiration<span>CVC</span></h5>
                            <h6 id='label-cardexpiration'>{expirationDate}<span>{cvv}</span></h6>
                        </div>
                        <div className='wave'></div>
                    </div>
                    <div className="card-form">

                        <p className='field'>
                            <i className='bx bx-credit-card-front' id="i-cardfront"></i>
                            <input type='text' id='cardnumber' name='cardnumber' placeholder='1234 5678 9123 4567'
                                   pattern='\d*' title='Card Number' onChange={updateCardNumber}/>
                        </p>

                        <p className='field space'>
                            <i className='bx bx-calendar' id="i-calendar"></i>
                            <input type='text' id='cardexpiration' name='cardexpiration' placeholder="MM / YYYY"
                                   pattern="\d*" title='Card Expiration Date' onChange={updateExpirationDate}/>
                        </p>

                        <p className='field space'>
                            <i className='bx bxs-credit-card-front' id="i-cardback"></i>
                            <input type='text' id='cardcvc' name='cardcvc' placeholder="123" pattern="\d*"
                                   title='CVC Code' onChange={updateCvv}/>
                        </p>

                        <button className='button-cta' title='Confirm your purchase'><span>PAY NOW</span></button>

                    </div>
                </div>

            </div>
            <button className="payment-history-btn">Payment History</button>

        </div>
    );
};

export default PayNow;
