import React from 'react';
import { Carousel } from 'react-bootstrap';

function Hero() {
    return (
        <section className="hero-section text-white" style={{ minHeight: '90vh', background: 'linear-gradient(135deg, #1E3C72 10%, #2A5298 100%)', padding: '60px 20px' }}>
            <div className="container">
                <Carousel indicators={false} controls={false} interval={3000} fade>
                    <Carousel.Item>
                        <div className="row align-items-center text-center text-lg-start">
                            <div className="col-lg-6">
                                <h1 className="display-3 fw-bold">Revolutionize Your Trading Experience</h1>
                                <p className="lead">Harness the power of real-time market insights, AI-driven analytics, and seamless trading execution.</p>
                                <button className="btn btn-warning btn-lg mt-3">Start Trading</button>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center">
                                <img src="/media/images/trading-dashboard.svg" alt="Trading Dashboard" className="img-fluid" style={{ maxWidth: '85%', borderRadius: '12px' }} />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row align-items-center text-center text-lg-start">
                            <div className="col-lg-6">
                                <h1 className="display-3 fw-bold">Data-Driven Investment Decisions</h1>
                                <p className="lead">Get AI-powered insights and market analysis for better decision-making.</p>
                                <button className="btn btn-success btn-lg mt-3">Explore Insights</button>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center">
                                <img src="/media/images/data-analysis.svg" alt="Data Analysis" className="img-fluid" style={{ maxWidth: '85%', borderRadius: '12px' }} />
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row align-items-center text-center text-lg-start">
                            <div className="col-lg-6">
                                <h1 className="display-3 fw-bold">Trade with Confidence</h1>
                                <p className="lead">Enjoy a secure, reliable, and user-friendly trading experience with us.</p>
                                <button className="btn btn-primary btn-lg mt-3">Join Now</button>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center">
                                <img src="/media/images/secure-trading.svg" alt="Secure Trading" className="img-fluid" style={{ maxWidth: '85%', borderRadius: '12px' }} />
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
                <div className="row mt-5 text-center">
                    <div className="col-md-4">
                        <h3 className="text-warning">Live Market Updates</h3>
                        <p>Stay ahead with real-time stock updates and news alerts.</p>
                    </div>
                    <div className="col-md-4">
                        <h3 className="text-success">Intelligent AI Trading</h3>
                        <p>Leverage AI-driven strategies for smarter investments.</p>
                    </div>
                    <div className="col-md-4">
                        <h3 className="text-primary">Seamless Portfolio Management</h3>
                        <p>Track your investments with our intuitive dashboard.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
