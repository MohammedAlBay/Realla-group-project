import React from 'react';
import '../../css/payment-history.css'

const PaymentHistory = ({ updateOrderList }) => {

    const paymentHistoryData = [
        // Sample payment history data
        { date: '01.05.2024', fee: '€ 850', status: 'pay before 01/05' },
        { date: '01.04.2024', fee: '€ 850', status: 'paid' },
        { date: '01.03.2024', fee: '€ 850', status: 'paid' },
        { date: '01.02.2024', fee: '€ 850', status: 'paid' },
        { date: '01.01.2024', fee: '€ 850', status: 'paid' },
        { date: '01.12.2023', fee: '€ 850', status: 'paid' },
    ];


    const handleClick = (item) => {
        // Update the order list with the clicked payment history item
        const newOrderList = [
            { title: 'Date', value: item.date },
            { title: 'Fee', value: item.fee },
            { title: 'Status', value: item.status }
            // Add more fields as needed
        ];
        updateOrderList(newOrderList);
    };

    return (
        <div className="payment-history">
            <ul className='orderlist'>
                {/* Render payment history items */}
                {paymentHistoryData.map((item, index) => (
                    <li key={index} className="list" onClick={() => handleClick(item)}>
                        <p className="fee">{item.fee}</p>
                        <h4 className="payment-text">{item.date}</h4>
                        <h5 className="payment-text">{item.status}</h5>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PaymentHistory;
