import React from 'react';
import { motion } from 'motion/react';
import { DollarSign, Shield, Clock } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-20">
      <section className="px-8 md:px-20 py-20 text-center bg-white overflow-hidden relative">
         {/* Decorative backgrounds */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary-orange rounded-full blur-[100px]" />
          <div className="absolute top-1/2 -right-20 w-80 h-80 bg-primary-blue rounded-full blur-[100px]" />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary-orange text-[13px] font-bold uppercase tracking-[0.2em] mb-6"
          >
            About Get 2 Test
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[52px] md:text-[64px] font-bold text-neutral-900 leading-tight mb-8"
          >
            Your trusted partner for driving test success
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-neutral-500 text-lg leading-relaxed mb-12"
          >
            At Get 2 Test, we specialize in providing high-quality, dual-controlled vehicles and professional drivers for your DVSA practical driving test.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <button className="bg-primary-blue text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary-blue/20 hover:bg-opacity-90 transition-all">
              Book my car hire
            </button>
            <button className="text-neutral-900 font-bold px-10 py-5 border border-neutral-200 rounded-2xl hover:bg-neutral-50 transition-all">
              Contact our team
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-8 md:px-20 bg-bg-light">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white p-12 rounded-[40px] shadow-sm border border-neutral-100">
             <div className="w-16 h-16 bg-primary-orange/10 rounded-2xl flex items-center justify-center mb-8">
               <Shield className="w-8 h-8 text-primary-orange" />
             </div>
             <h3 className="text-2xl font-bold mb-6">Fully Insured</h3>
             <p className="text-neutral-500 leading-relaxed">Our vehicles are fully insured for practical driving tests, giving you one less thing to worry about.</p>
          </div>

          <div className="bg-white p-12 rounded-[40px] shadow-sm border border-neutral-100">
             <div className="w-16 h-16 bg-primary-blue/10 rounded-2xl flex items-center justify-center mb-8">
               <DollarSign className="w-8 h-8 text-primary-blue" />
             </div>
             <h3 className="text-2xl font-bold mb-6">Transparent Pricing</h3>
             <p className="text-neutral-500 leading-relaxed">No hidden fees. What you see is what you pay for your test day car hire and driver service.</p>
          </div>

          <div className="bg-white p-12 rounded-[40px] shadow-sm border border-neutral-100">
             <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-8">
               <Clock className="w-8 h-8 text-green-500" />
             </div>
             <h3 className="text-2xl font-bold mb-6">Last Minute</h3>
             <p className="text-neutral-500 leading-relaxed">Failed to find a car for your short-notice test? We specialize in urgent and last-minute requests.</p>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 md:px-20 bg-white">
        <div className="grid md:grid-cols-2 gap-20 items-center">
           <div className="rounded-[40px] overflow-hidden aspect-video shadow-soft">
             <img 
               src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop" 
               alt="About Get 2 Test"
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
           </div>
           <div>
              <h2 className="text-[44px] font-bold leading-tight mb-8">Ready to pass your test?</h2>
              <p className="text-neutral-500 text-lg leading-relaxed mb-10">
                Booking your driving test car hire with us is simple and takes just a few minutes. We cover various test centers across the region.
              </p>
              <ul className="space-y-4 mb-12">
                 {['Check center availability', 'Provide your test details', 'Select manual or automatic', 'Get confirmed booking'].map((step, i) => (
                   <li key={i} className="flex items-center gap-4 text-neutral-900 font-bold">
                     <span className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-sm">{i+1}</span>
                     {step}
                   </li>
                 ))}
              </ul>
              <button className="bg-neutral-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-neutral-800 transition-all">
                Check Availability Now
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
