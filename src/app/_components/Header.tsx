'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import './styles/Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false); // State to toggle menu

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <Image src="/Logoo.png" alt="Logo" width={50} height={50} />
      </div>

      {/* Navigation */}
      <nav className={`nav ${menuActive ? 'active' : ''}`}>
        <ul>
          <li>
            <Link href="/" className="nav-links">
              Home
            </Link>
          </li>
          <li>
            <Link href="\contact\aboutus" className="nav-links">
              About Us
            </Link>
          </li>
          <li>
            <Link href="\contact\contactus" className="nav-links">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      {/* Menu Icon */}
      <FiMenu className="menu-icon" onClick={toggleMenu} />

      {/* Visit Button */}
      <Link href="https://github.com/Abdulrehman-Shaikh1010" target="_blank">
      <button className='visit-button'>Visit Git</button>
      </Link>
    </header>
  );
};

export default Header;
