import React from 'react';
import { FaChartLine, FaRobot, FaGlobe, FaShieldAlt } from 'react-icons/fa';

function Universe() {
    return (
        <section style={styles.universeSection}>
            <style>
                {`
                .feature-card {
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 12px;
                    padding: 20px;
                    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                    text-align: center;
                    cursor: pointer;
                }
                .feature-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
                }
                .icon {
                    transition: transform 0.3s ease-in-out;
                }
                .feature-card:hover .icon {
                    transform: scale(1.2);
                }
                `}
            </style>

            <div className="container text-center text-white">
                <h2 className="display-5 fw-bold mb-4">Explore the Universe of Trading</h2>
                <p className="lead mb-5">Unlock powerful tools, AI-driven insights, and a seamless trading experience.</p>

                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-3">
                        <div className="feature-card">
                            <FaChartLine size={50} className="icon text-warning" />
                            <h4 className="mt-3">Live Market Trends</h4>
                            <p>Stay ahead with real-time stock updates and AI-driven analytics.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="feature-card">
                            <FaRobot size={50} className="icon text-success" />
                            <h4 className="mt-3">AI-Powered Trading</h4>
                            <p>Leverage smart trading bots for automated strategies and insights.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="feature-card">
                            <FaGlobe size={50} className="icon text-primary" />
                            <h4 className="mt-3">Global Market Access</h4>
                            <p>Trade stocks, forex, and cryptocurrencies across global markets.</p>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="feature-card">
                            <FaShieldAlt size={50} className="icon text-danger" />
                            <h4 className="mt-3">Top-Notch Security</h4>
                            <p>Trade with confidence knowing your investments are safe.</p>
                        </div>
                    </div>
                </div>

                <button className="btn btn-outline-light btn-lg mt-4">Join the Future of Trading</button>
            </div>
        </section>
    );
}

const styles = {
    universeSection: {
        background: 'linear-gradient(135deg, #1E3C72, #2A5298)',
        minHeight: '80vh',
        padding: '60px 20px',
    }
};

export default Universe;
