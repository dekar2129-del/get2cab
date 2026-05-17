import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-20 px-8 md:px-20 bg-neutral-900 text-white">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <div className="text-2xl font-bold font-display mb-6">
            Get<span className="text-primary-orange">2</span>Test<span className="text-primary-orange">.</span>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-[200px]">
            Taking the stress out of your driving test day with professional car hire.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-neutral-400">
            <li><NavLink to="/" className="hover:text-white transition-colors">Car Hire</NavLink></li>
            <li><NavLink to="/about" className="hover:text-white transition-colors">About Us</NavLink></li>
            <li><NavLink to="/pricing" className="hover:text-white transition-colors">Pricing</NavLink></li>
            <li><NavLink to="/faq" className="hover:text-white transition-colors">Support</NavLink></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-neutral-400">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Subscribe</h4>
          <p className="text-sm text-neutral-400 mb-4">Get the latest news and offers.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-neutral-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-primary-orange outline-none"
            />
            <button className="bg-primary-orange text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-500 text-[13px]">
        <p>© 2026 RentalX Inc. All rights reserved.</p>
        <div className="flex gap-8">
           <a href="#" className="hover:text-white transition-colors">Instagram</a>
           <a href="#" className="hover:text-white transition-colors">Twitter</a>
           <a href="#" className="hover:text-white transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
