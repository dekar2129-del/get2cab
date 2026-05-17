import React from 'react';
import { motion } from 'motion/react';
import { Apple, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative px-8 md:px-20 pt-16 pb-32 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[54px] md:text-[68px] leading-[1.1] font-bold text-neutral-900 mb-6 text-balance"
          >
            Take the stress out of your driving test day
          </motion.h1>
          <div className="w-20 h-1 bg-primary-orange mb-8" />
          <p className="text-neutral-500 text-[17px] max-w-md leading-relaxed mb-10">
            Premium driving test car hire and priority lessons service. We provide a car and driver for your practical test.
          </p>
          
          <div className="flex items-center gap-5">
            <button className="flex items-center gap-3 bg-white border border-neutral-100 px-6 py-3 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
              <Apple className="w-6 h-6 fill-current text-neutral-900" />
              <div className="text-left">
                <p className="text-[10px] text-neutral-400 uppercase font-semibold leading-none mb-0.5">Download on the</p>
                <p className="text-[15px] font-bold leading-none">Apple Store</p>
              </div>
            </button>
            <button className="flex items-center gap-3 bg-white border border-neutral-100 px-6 py-3 rounded-2xl shadow-sm hover:shadow-md transition-shadow group">
               <Play className="w-6 h-6 fill-primary-blue text-primary-blue" />
              <div className="text-left">
                <p className="text-[10px] text-neutral-400 uppercase font-semibold leading-none mb-0.5">Get it from</p>
                <p className="text-[15px] font-bold leading-none">Google Play</p>
              </div>
            </button>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative z-10 bg-primary-orange rounded-[40px] p-4 aspect-[4/3] flex items-center justify-center overflow-hidden"
          >
            {/* Background design - Tire Tracks */}
            <div className="absolute inset-0 opacity-15 overflow-hidden flex flex-col justify-around gap-4 -rotate-12 scale-150">
               {[...Array(8)].map((_, i) => (
                 <div key={i} className="flex gap-2">
                    {[...Array(20)].map((_, j) => (
                      <div key={j} className="h-6 w-3 border-r-4 border-white/40 skew-x-[30deg]" />
                    ))}
                 </div>
               ))}
            </div>
            
            {/* Car Image */}
            <img 
              src="https://images.unsplash.com/photo-1582650859079-ee63913ec9a4?q=80&w=2072&auto=format&fit=crop" 
              alt="Orange Jeep"
              className="relative z-20 w-[110%] max-w-none transform scale-110 -translate-x-8 translate-y-4 drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-10 bg-black/10 blur-[40px] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
