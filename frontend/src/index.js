import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import './index.css';
import Homepage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/SignUp';
import About from './landing_page/about/AboutPage';
import Support from './landing_page/support/SupportPage';
import Product from './landing_page/products/ProductPage';
import Pricing from './landing_page/pricing/PricingPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Homepage />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/about' element={<About />} />
    <Route path='/pricing' element={<Pricing/>} />
    <Route path='/support' element={<Support />} />
    <Route path='/product' element={<Product />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
  <Footer/>
  </BrowserRouter>
);


