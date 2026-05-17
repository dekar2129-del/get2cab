import React from 'react';
import { motion } from 'motion/react';
import { Settings, Wrench, ShieldAlert, Zap } from 'lucide-react';

const FaqPage = () => {
  return (
    <div className="pt-20 pb-32">
       <section className="px-8 md:px-20 py-20 bg-primary-blue text-white overflow-hidden relative rounded-b-[60px]">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[52px] md:text-[68px] font-bold leading-tight mb-8"
            >
              We're here to help you pass
            </motion.h1>
            <p className="text-white/80 text-xl leading-relaxed mb-10">
              Find answers to common questions about our driving test car hire service.
            </p>
          </div>
          
          {/* Wave pattern decoration */}
          <div className="absolute bottom-0 left-0 w-full opacity-10 pointer-events-none">
            <svg viewBox="0 0 1440 320" className="w-full">
              <path fill="#ffffff" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
       </section>

       <section className="px-8 md:px-20 pt-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: Settings, title: 'Booking Management', desc: 'Easily manage and reschedule your test day booking.' },
               { icon: Wrench, title: 'Vehicle Prep', desc: 'Cars cleaned and checked before every practical test.' },
               { icon: ShieldAlert, title: 'DVSA Liaison', desc: 'We handle communication with test centers if needed.' },
               { icon: Zap, title: 'Instant Support', desc: 'Live agents ready to help with last-minute emergencies.' }
             ].map((service, i) => (
               <div key={i} className="bg-white p-10 rounded-[40px] shadow-soft border border-neutral-50 hover:-translate-y-2 transition-all group">
                  <div className="w-16 h-16 bg-neutral-900 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-primary-orange transition-colors">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-neutral-500 leading-relaxed text-sm">{service.desc}</p>
               </div>
             ))}
          </div>
       </section>

       <section className="px-8 md:px-20 mt-40">
          <div className="bg-neutral-900 rounded-[60px] p-12 md:p-24 text-white overflow-hidden relative">
             <div className="grid md:grid-cols-2 gap-20 items-center relative z-10">
                <div>
                   <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">Trusted by learners across the UK</h2>
                   <p className="text-neutral-400 text-lg mb-12">
                     Join thousands of successful drivers who passed their test using Get 2 Test car hire.
                   </p>
                   <div className="flex gap-4">
                      <button className="bg-white text-neutral-900 px-8 py-4 rounded-2xl font-bold hover:bg-neutral-200 transition-all">
                        Talk to an expert
                      </button>
                      <button className="border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
                        View FAQs
                      </button>
                   </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                      <div className="text-3xl font-black text-primary-orange mb-2">98%</div>
                      <p className="text-xs text-neutral-400 uppercase tracking-widest font-bold">Pass rate</p>
                   </div>
                   <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                      <div className="text-3xl font-black text-primary-orange mb-2">12h</div>
                      <p className="text-xs text-neutral-400 uppercase tracking-widest font-bold">Response time</p>
                   </div>
                   <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                      <div className="text-3xl font-black text-primary-orange mb-2">10k+</div>
                      <p className="text-xs text-neutral-400 uppercase tracking-widest font-bold">Tests completed</p>
                   </div>
                   <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                      <div className="text-3xl font-black text-primary-orange mb-2">100%</div>
                      <p className="text-xs text-neutral-400 uppercase tracking-widest font-bold">Safe delivery</p>
                   </div>
                </div>
             </div>
          </div>
       </section>
    </div>
  );
};

export default FaqPage;
