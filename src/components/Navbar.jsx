import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="flex items-center justify-between py-4 px-2 md:px-8 bg-white shadow mb-4">
    <div className="text-xl font-bold text-blue-700">
      <Link to="/">Raichandani Group</Link>
    </div>
    <ul className="flex gap-4 text-base font-medium">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/redevelopment">Redevelopment</Link></li>
      <li><Link to="/testimonials">Testimonials</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar; 