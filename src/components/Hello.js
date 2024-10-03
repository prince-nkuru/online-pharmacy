import React from 'react';
import './Hello.css'
import { useNavigate } from 'react-router';

import pexel from '../assets/pexels-tima-miroshnichenko-7034125.jpg'

const Hello = () => {
  const navigate = useNavigate();
  const handleShop = () => {
    navigate('/products')
  }
    return (
        <section style={{
          backgroundImage: `url(${pexel})`,
          backgroundSize: 'cover', // Adjusts image to cover the whole div
          backgroundPosition: 'center', // Centers the image
          height: '100vh', // Full height
          width: '100vw', // Full width
          display: 'flex', // Optional: for centering content
          flexDirection: 'column',
          justifyContent: 'flex-start', // Optional
          alignItems: 'center' // Optional
        }} id="hero">
            <h1>Welcome to IBOZA Pharmacy</h1>
            <h2>Your Health, Our Priority</h2>
            <p>Browse a wide range of medications and health products.</p>
            <a href="#products" className="btn" onClick={handleShop}>Shop Now</a>
            {/* <img src={pexel}/> */}
        </section>
    );
};

export default Hello;
