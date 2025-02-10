import React from 'react';

function Pricing() {
    return ( 
        <div className='container my-5 py-5'>
            <div className='row align-items-center text-center text-md-start'>
                <div className='col-12 col-md-4 mb-4'>
                    <h1 className='fw-bold text-primary mb-3'>Unbeatable Pricing</h1>
                    <p className='text-muted lead'>We offer the most competitive rates in the industry, ensuring maximum value for your investments.</p>
                </div>
                <div className='col-12 col-md-2 d-none d-md-block'></div>
                <div className='col-12 col-md-6'>
                    <div className='row g-3'>
                        <div className='col-12 col-sm-6 border p-4 shadow-sm rounded bg-light'>
                            <h1 className='text-success'><i className='fa fa-inr' aria-hidden='true'></i> 0</h1>
                            <p className='text-muted fw-semibold'>Free Equity Delivery & Direct Mutual Funds</p>
                        </div>
                        <div className='col-12 col-sm-6 border p-4 shadow-sm rounded bg-light'>
                            <h1 className='text-danger mb-3'><i className='fa fa-inr' aria-hidden='true'></i> 20</h1>
                            <p className='text-muted fw-semibold'>Flat Fee on Intraday & F&O Trades</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;