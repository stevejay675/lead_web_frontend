
"use client";
import  './Navbar.css'; 
import { useEffect, useState } from 'react';
import Image from 'next/image';


function Navbar() {

  const [position, setPosition] = useState('absolute');
  const [logo, setLogo] = useState('images/logo1.png');

  useEffect(() => {
    const handleScroll = () => {
      // Check scroll distance from the top
      if (window.scrollY > 150) {
        setPosition('fixed');
        setLogo('images/logo3.png')
      } else {
        setPosition('absolute');
        setLogo('images/logo1.png')
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${[position]}`}>
      <img src={`${logo}`}/>
      <ul className="nav-links">
        <li>Home</li>
        <li>Service</li>
        <li>About Us</li>
        <li>Contact</li>
        
        <div>
          <a className='login-btn'>Login</a>
          <a className='signup-btn'>SignUp</a>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;