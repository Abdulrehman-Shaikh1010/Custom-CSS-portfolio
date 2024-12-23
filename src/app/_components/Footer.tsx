import React from 'react'
import Link from 'next/link'
import './styles/Footer.css'
const Footer = () => {
  return (
    <footer className='contact'>
      <nav className='nav'>
  <ul>
    <li>
      <Link href='/' className='nav-links'>Home</Link>
    </li>
    <li>
      <Link href='/contact/aboutus' className='nav-links'>About Us</Link>
    </li>

    <li>
      <Link href='/contact/contactus' className='nav-links'>Contact Us</Link>
    </li>
  </ul>
</nav>

     <p>&copy; 2024 AbdulRehman Shaikh All Rights Reversed</p>
    </footer>
  )
}

export default Footer