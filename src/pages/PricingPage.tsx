import React from 'react';
import { motion } from 'motion/react';
import { User, ShieldCheck, Map, CreditCard } from 'lucide-react';

const PricingPage = () => {
  return (
    <div className="pt-20">
      <section className="px-8 md:px-20 py-20 bg-neutral-900 text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 hidden md:block">
           <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop" 
            alt="Practical Test"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
           />
         </div>
         
         <div className="max-w-2xl relative z-10">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary-orange text-[13px] font-bold uppercase tracking-[0.2em] mb-6"
            >
              Our Pricing
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[52px] md:text-[72px] font-bold leading-none mb-10"
            >
              Affordable plans for your test day
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-lg"
            >
              Transparent and honest pricing. Choose the package that best fits your requirements for the practical driving test.
            </motion.p>
         </div>
      </section>

      <section className="py-32 px-8 md:px-20 bg-white">
        <div className="grid md:grid-cols-4 gap-12">
           {[
             { icon: User, title: 'Expert Driver', desc: 'Professional handlers for your test day.' },
             { icon: ShieldCheck, title: 'Fully Dual', desc: 'All cars equipped with dual controls.' },
             { icon: Map, title: 'Local Knowledge', desc: 'Drivers familiar with your local test center.' },
             { icon: CreditCard, title: 'Money Back', desc: 'Full refund if your test is cancelled by DVSA.' }
           ].map((item, i) => (
             <div key={i} className="text-center">
                <div className="w-14 h-14 bg-bg-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-7 h-7 text-primary-blue" />
                </div>
                <h3 className="font-bold text-lg mb-4">{item.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      <section className="py-32 px-8 md:px-20 bg-bg-light">
          <div className="max-w-5xl mx-auto">
             <div className="text-center mb-16">
               <h2 className="text-4xl font-bold mb-6">Practical Test Packages</h2>
               <p className="text-neutral-500">Simple, effective, and stress-free</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8">
                {[
                  { name: 'Standard Day', car: 'Car & Driver Hire', price: '£299' },
                  { name: 'Extended Session', car: 'Extra hour + Test', price: '£380' },
                  { name: 'Short Notice', car: 'Emergency Booking', price: '£450' }
                ].map((tier, i) => (
                  <div key={i} className="bg-white p-8 rounded-[32px] shadow-sm border border-neutral-100 hover:border-primary-blue transition-all">
                     <h4 className="text-primary-blue font-bold uppercase tracking-widest text-xs mb-2">{tier.name}</h4>
                     <h3 className="text-2xl font-bold mb-6">{tier.car}</h3>
                     <div className="text-3xl font-black mb-8">{tier.price}</div>
                     <button className="w-full py-4 border-2 border-neutral-900 rounded-2xl font-bold hover:bg-neutral-900 hover:text-white transition-all">
                       Book This
                     </button>
                  </div>
                ))}
             </div>
          </div>
      </section>
    </div>
  );
};

export default PricingPage;
