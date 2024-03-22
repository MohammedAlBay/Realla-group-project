import React from 'react';
import "../../css/Payment.css"



const PayNow = () => {
    return (
        <div className="paynow">
            <div className='subject'><span> Payment</span>
                <strong>Payment Panel</strong>
            </div>

            <div className='checkout'>
                <div className='order'>
                    <h2>Checkout</h2>
                    <h5>Order #0101</h5>
                    <ul className='order-list'>
                        <li>
                            <img
                                src=''
                                alt=''/>
                            <h4>Text</h4>
                            <h5>€110</h5>
                        </li>
                        <li>
                            <img
                                src=''
                                alt=''/>
                            <h4>Text</h4>
                            <h5>€28</h5>
                        </li>
                        <li>
                            <img
                                src=''
                                alt=''/>
                            <h4>Text</h4>
                            <h5>€20</h5>
                        </li>
                    </ul>
                    <h5>Shipping</h5>
                    <h4>€ 9.50</h4>
                    <h5 className='total'>Total</h5>
                    <h1>€ 167.50</h1>
                </div>
                <h2>Payment</h2>
                <div id='payment' className='payment'>
                    <div className='card'>
                        <div className='card-content'>
                            <svg id='logo-visa' enableBackground='new 0 0 50 70' height='70px' version='1.1'
                                 viewBox='0 0 50 50' width='70px' xmlSpace='preserve' xmlns='http://www.w3.org/2000/svg'
                                 xmlnsXlink='http://www.w3.org/1999/xlink'>
                                {/* Add your SVG paths here */}
                            </svg>
                            <h5>Card Number</h5>
                            <h6 id='label-cardnumber'>0000 0000 0000 0000</h6>
                            <h5>Expiration<span>CVC</span></h5>
                            <h6 id='label-cardexpiration'>00 / 0000<span>000</span></h6>
                        </div>
                        <div className='wave'></div>
                    </div>
                    <div className='card-form'>
                        {/* Your card form elements */}
                    </div>
                </div>
            </div>

        </div>

    )
        ;
};

export default PayNow;
