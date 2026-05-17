import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 md:px-20 py-6 bg-transparent sticky top-0 z-50 backdrop-blur-sm">
      <div className="flex items-center gap-12">
        <NavLink to="/" className="text-2xl font-bold font-display tracking-tight">
          Get<span className="text-primary-orange">2</span>Test<span className="text-primary-orange">.</span>
        </NavLink>
        <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-neutral-600">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
                ? "relative text-neutral-900 border-b-2 border-primary-orange pb-0.5" 
                : "hover:text-neutral-900 transition-colors"
            }
          >
            Car Hire
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive 
                ? "relative text-neutral-900 border-b-2 border-primary-orange pb-0.5" 
                : "hover:text-neutral-900 transition-colors"
            }
          >
            About Us
          </NavLink>
          <NavLink 
            to="/pricing" 
            className={({ isActive }) => 
              isActive 
                ? "relative text-neutral-900 border-b-2 border-primary-orange pb-0.5" 
                : "hover:text-neutral-900 transition-colors"
            }
          >
            Pricing
          </NavLink>
          <NavLink 
            to="/faq" 
            className={({ isActive }) => 
              isActive 
                ? "relative text-neutral-900 border-b-2 border-primary-orange pb-0.5" 
                : "hover:text-neutral-900 transition-colors"
            }
          >
            Support
          </NavLink>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <button className="text-[15px] font-semibold hover:text-primary-orange transition-colors">Client login</button>
        <button className="bg-primary-blue text-white px-8 py-2.5 rounded-lg text-[15px] font-semibold hover:bg-opacity-90 transition-all">
          Book Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
