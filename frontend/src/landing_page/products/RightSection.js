import React from 'react';
import { FaCogs, FaMobileAlt, FaLock } from 'react-icons/fa';

function RightSection() {
    return (
        <section className="right-section text-white py-5" style={{ background: 'linear-gradient(135deg, #1E3C72, #2A5298)', minHeight: '80vh' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img src="/media/images/advanced-tools.svg" alt="Advanced Tools" className="img-fluid" style={{ maxWidth: '85%', borderRadius: '12px' }} />
                    </div>

                    <div className="col-lg-6 text-center text-lg-start">
                        <h2 className="display-5 fw-bold">Advanced Trading Tools</h2>
                        <p className="lead">Experience next-level trading with powerful features and security.</p>

                        <div className="feature mt-4">
                            <FaCogs className="text-warning me-2" size={30} />
                            <strong>Smart Trading Bots:</strong> Automate your trades with AI.
                        </div>

                        <div className="feature mt-3">
                            <FaMobileAlt className="text-success me-2" size={30} />
                            <strong>Mobile-Friendly Platform:</strong> Trade anytime, anywhere.
                        </div>

                        <div className="feature mt-3">
                            <FaLock className="text-primary me-2" size={30} />
                            <strong>Military-Grade Security:</strong> Protecting your investments 24/7.
                        </div>

                        <button className="btn btn-success btn-lg mt-4">Discover More</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RightSection;
