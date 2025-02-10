import React from 'react';

function Stats() {
    return (
        <div className='container my-5 py-5'>
            <div className='row align-items-center'>
                <div className='col-md-6 p-5'>
                    <h1 className='fw-bold fs-1 text-primary display-4'>Trust with Confidence</h1>
                    <p className='lead text-muted mb-4'>Experience the future of trading with innovation, security, and transparency.</p>
                    <div className='mb-3'>
                        <h3 className='text-dark '><span className='text-primary'>💡</span> Innovation & Technology</h3>
                        <p className='text-muted'>Cutting-edge tools and AI-driven insights to enhance your trading experience.</p>
                    </div>
                    <div className='mb-3'>
                        <h3 className='text-dark'><span className='text-success'>📈</span> Market Leadership</h3>
                        <p className='text-muted'>Trusted by millions with a track record of excellence in the financial industry.</p>
                    </div>
                    <div className='mb-3'>
                        <h3 className='text-dark'><span className='text-warning'>🔍</span> Transparency & Security</h3>
                        <p className='text-muted'>Secure and reliable trading with full transparency in fees and operations.</p>
                    </div>
                    <div>
                        <h3 className='text-dark'><span className='text-danger'>🌎</span> Global Reach</h3>
                        <p className='text-muted'>Seamless access to global markets with competitive pricing and expert guidance.</p>
                    </div>
                </div>
                <div className='col-md-6 text-center'>
                    <img src='media/images/ecosystem.png' alt='Trading Ecosystem' className='img-fluid rounded ' style={{ maxWidth: "75%" }} />
                </div>
            </div>
        </div>
    );
}

export default Stats;