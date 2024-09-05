
"use client";
import  './Navbar.css'; 
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Sidebar from '../sidebar/sidebar';



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


  //sidebar
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <nav className={`navbar ${[position]}`}>
      <img src={`${logo}`}/>
      <ul className="nav-links">
        <li><a href='#'>Home</a></li>
        <li><a href='#service'>Services</a></li>
        <li><a href='#about'>About us</a></li>
        <li><a href='#partners'>Partners</a></li>

        <div> 
          <a className='get-the-app'>Get the App</a>
        </div>
      </ul>

      <div className='hamburger-menu' onClick={toggleSidebar}>
         <span className='hamburger-menu-line'></span>
         <span className='hamburger-menu-line'></span>
         <span className='hamburger-menu-line'></span>
      </div>

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </nav>

    
  );
}

export default Navbar;