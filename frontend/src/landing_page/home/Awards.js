import React from 'react';

function Awards() {
    return (
        <div className='container my-5 py-5'>
            <div className='row align-items-center'>
                <div className='col-md-6 text-center'>
                    <img src='media/images/largestBroker.svg' alt='India&apos;s Largest Broker' className='img-fluid' />
                </div>
                <div className='col-md-6'>
                    <h1 className='fw-bold text-primary'>India's Leading Stock Broker</h1>
                    <p className='text-muted'>
                        Recognized as the most trusted and fastest-growing brokerage firm in India, 
                        empowering millions with cutting-edge trading technology and seamless investing experience.
                    </p>
                    <div className='row mt-4'>
                        <div className='col-6'>
                            <ul className='list-unstyled'>
                                <li>🏆 Awarded Best Brokerage Firm</li>
                                <li>📈 Over 10M+ Active Traders</li>
                                <li>🔍 Transparent & Low Fees</li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul className='list-unstyled'>
                                <li>📊 Advanced Trading Tools</li>
                                <li>🤝 Trusted by Experts</li>
                                <li>🌍 Global Market Access</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-4'>
                    <img src='media/images/pressLogos.png' style={{width:"90%"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;