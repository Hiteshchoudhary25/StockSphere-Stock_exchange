import React from 'react';
import { FaChartLine, FaBolt, FaShieldAlt } from 'react-icons/fa';

function LeftSection() {
    return (
        <section className="left-section text-white py-5" style={{ background: 'linear-gradient(135deg, #2A5298, #1E3C72)', minHeight: '80vh' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 text-center text-lg-start">
                        <h2 className="display-5 fw-bold">Why Choose Our Trading Platform?</h2>
                        <p className="lead">Unlock powerful tools, AI-driven analytics, and seamless trading experience.</p>
                        
                        <div className="feature mt-4">
                            <FaChartLine className="text-warning me-2" size={30} />
                            <strong>Real-Time Market Data:</strong> Get instant stock updates and trends.
                        </div>

                        <div className="feature mt-3">
                            <FaBolt className="text-success me-2" size={30} />
                            <strong>Lightning-Fast Execution:</strong> Trade with zero delays.
                        </div>

                        <div className="feature mt-3">
                            <FaShieldAlt className="text-primary me-2" size={30} />
                            <strong>Secure & Reliable:</strong> Industry-grade encryption for your transactions.
                        </div>

                        <button className="btn btn-warning btn-lg mt-4">Start Trading</button>
                    </div>
                    
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img src="/media/images/trading-features.svg" alt="Trading Features" className="img-fluid" style={{ maxWidth: '85%', borderRadius: '12px' }} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LeftSection;
