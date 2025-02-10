import React from 'react';
import Awards from './Awards';
import Hero from './Hero';
import Education from './Educaion';
import Stats from './Stats';
import Pricing from './Pricing';
import OpenAccount from '../OpenAccount';

function Homepage() {
    return ( 
        <>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>        
        </>
     );
}

export default Homepage;