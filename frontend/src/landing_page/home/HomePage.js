import React from 'react';
import Awards from './Awards';
import Hero from './Hero';
import Education from './Educaion';
import Stats from './Stats';
import Pricing from './Pricing';

function Homepage() {
    return ( 
        <>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        </>
     );
}

export default Homepage;