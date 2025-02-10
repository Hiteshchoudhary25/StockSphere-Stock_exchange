import React from 'react';
import Awards from './Awards';
import Hero from './Hero';
import Education from './Educaion';
import Stats from './Stats';
import Pricing from './Pricing';
import Navbar from '../Navbar';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';

function Homepage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
        </>
     );
}

export default Homepage;