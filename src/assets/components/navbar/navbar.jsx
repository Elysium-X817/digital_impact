import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from './digital-impacts-img.jpg'

const Navbar = () => {
  return (
    <>
    <nav className='flex items-center justify-around bg-[#f7f7f7] border-b-16 border-[#0796D6] shadow-[2px_2px_8px_#0796d6]'>
    <div>
      <a href="">
      <img src={logo} alt="Digital Impacts Logo" height={100} width={100}/>
      </a>
    </div>
    <ul className="text-[#0796D6] flex gap-20">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/industries">Industries</Link></li>
      <li><Link to="/about">About Us</Link></li>
    </ul>
      <button className="cursor-pointer bg-[#0796D6] px-6 py-2 rounded-[50px] text-sm hover:scale-125 transition-transform duration-1000">Contact Us</button>
    </nav>
    </>
  )
}

export default Navbar;