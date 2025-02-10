import React from 'react';
import { Carousel } from 'react-bootstrap';

function Hero() {
    return (
        <section className="hero-section text-white" style={{ minHeight: '80vh', background: 'linear-gradient(to right, #141E30, #243B55)', padding: '50px 20px' }}>
            <div className="container">
                <Carousel>
                    <Carousel.Item>
                        <div className="row align-items-center">
                            <div className="col-lg-6 text-lg-start text-center">
                                <h1 className="display-4 fw-bold">Welcome to StockSphere</h1>
                                <p className="lead">Your trusted platform for real-time stock insights, market trends, and investment strategies.</p>
                                <button className="btn btn-primary btn-lg mt-3">Get Started</button>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center mt-4 mt-lg-0">
                                <img src="/media/images/get-started.png" alt="Stock Market" className="img-fluid" style={{ maxWidth: '80%', borderRadius: '10px' }} />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row align-items-center">
                            <div className="col-lg-6 text-lg-start text-center">
                                <h1 className="display-4 fw-bold">Real-Time Market Data</h1>
                                <p className="lead">Stay updated with live stock prices, trends, and market insights.</p>
                                <button className="btn btn-primary btn-lg mt-3">Explore More</button>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center mt-4 mt-lg-0">
                                <img src="/media/images/market-data.jpeg" alt="Market Data" className="img-fluid" style={{ maxWidth: '80%', borderRadius: '10px' }} />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row align-items-center">
                            <div className="col-lg-6 text-lg-start text-center">
                                <h1 className="display-4 fw-bold">AI-Powered Analytics</h1>
                                <p className="lead">Leverage AI-driven tools to optimize your investment strategies.</p>
                                <button className="btn btn-primary btn-lg mt-3">Discover More</button>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center mt-4 -lg-0">
                                <img src="/media/images/AI-Powered Analytics.jpeg" alt="AI Analytics" className="img-fluid" style={{ maxWidth: '80%', borderRadius: '10px' }} />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row align-items-center">
                            <div className="col-lg-6 text-lg-start text-center">
                                <h1 className="display-4 fw-bold">Secure & Reliable Trading</h1>
                                <p className="lead">Trade with confidence on a secure and transparent platform.</p>
                                <button className="btn btn-primary btn-lg mt-3">Learn More</button>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center mt-4 mt-lg-0">
                                <img src="/media/images/secure-trading.jpeg" alt="Secure Trading" className="img-fluid" style={{ maxWidth: '80%', borderRadius: '10px' }} />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <div className="row mt-5 text-center">
                    <div className="col-md-4">
                        <h3>Comprehensive Market Reports</h3>
                        <p>Gain insights from detailed market reports curated by financial experts.</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Advanced Charting Tools</h3>
                        <p>Analyze stock trends with cutting-edge charting and visualization tools.</p>
                    </div>
                    <div className="col-md-4">
                        <h3>Portfolio Management</h3>
                        <p>Track your investments and optimize your portfolio with ease.</p>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <h2>Why Choose StockSphere?</h2>
                    <p>We provide accurate market insights, AI-powered analytics, and secure trading experiences to help investors make informed decisions.</p>
                    <button className="btn btn-outline-light btn-lg mt-5">Join Now</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;