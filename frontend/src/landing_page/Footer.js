import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer bg-dark text-white py-4 mt-auto" >
            <div className="container">
                <div className="row">
                    <div className="col-md-4 text-center text-md-start">
                        <h5>About StockSphere</h5>
                        <p>StockSphere is your go-to platform for market insights, stock analysis, and real-time trading updates.</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/about" className="text-white">About Us</Link></li>
                            <li><Link to="/product" className="text-white">Products</Link></li>
                            <li><Link to="/pricing" className="text-white">Pricing</Link></li>
                            <li><Link to="/support" className="text-white">Support</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-center text-md-end">
                        <h5>Contact Us</h5>
                        <p>Email: <a href="mailto:support@stocksphere.com" className="text-white">support@stocksphere.com</a></p>
                        <p>Phone: <a href="tel:+911234567890" className="text-white">+91-1234567890</a></p>
                        <p>Follow us on:</p>
                        <div>
                            <Link to="/facebook" className="text-white me-2"><FaFacebookF /></Link>
                            <Link to="/twitter" className="text-white me-2"><FaTwitter /></Link>
                            <Link to="/linkedin" className="text-white"><FaLinkedinIn /></Link>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p className="mb-0">&copy; {new Date().getFullYear()} StockSphere. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;