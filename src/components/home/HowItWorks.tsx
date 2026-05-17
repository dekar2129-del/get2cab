import React from 'react';
import { MapPin, Calendar, Search } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-32 px-8 md:px-20 bg-white text-center relative overflow-hidden underline-offset-8">
      <div className="max-w-3xl mx-auto mb-20">
        <p className="text-primary-orange text-[13px] font-bold uppercase tracking-[0.2em] mb-4">How it works</p>
        <h2 className="text-[44px] md:text-[52px] font-bold text-neutral-900 leading-tight">
          Rentgo following 3 working Steps
        </h2>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-20 relative">
        {/* Connecting Curved Lines (SVG) */}
        <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] w-[70%] h-[100px] z-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 600 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 50C150 10 250 10 300 50C350 90 450 90 590 50" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="6 6" />
          </svg>
        </div>
        
        {/* Step 1 */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center mb-8 border border-neutral-50 group hover:shadow-xl transition-all cursor-default">
            <MapPin className="w-8 h-8 text-primary-orange" />
          </div>
          <h3 className="text-xl font-bold mb-4">Select center</h3>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-[200px]">Choose your test center from our covered locations</p>
        </div>

        {/* Step 2 */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-primary-orange rounded-3xl shadow-xl shadow-orange-200 flex items-center justify-center mb-8 transform scale-110">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-4">Pick test date</h3>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-[200px]">Select your confirmed DVSA test date and time</p>
        </div>

        {/* Step 3 */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center mb-8 border border-neutral-50 group hover:shadow-xl transition-all cursor-default">
            <div className="relative">
              <Calendar className="w-8 h-8 text-primary-orange opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 bg-primary-orange rounded-full" />
              </div>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-4">Book car hire</h3>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-[200px]">Confirm your booking for a car and driver on test day</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
