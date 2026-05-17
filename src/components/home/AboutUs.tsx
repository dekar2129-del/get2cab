import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutUs = () => {
  return (
    <section className="py-32 px-8 md:px-20 bg-white">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="rounded-[40px] overflow-hidden aspect-[4/5] relative z-10">
            <img 
              src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop" 
              alt="Driving experience"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary-blue/5 rounded-full blur-[80px] -z-0" />
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-primary-orange/10 rounded-[40px] rotate-12 -z-0" />
          
          <div className="absolute bottom-10 -right-10 bg-white p-8 rounded-[32px] shadow-soft max-w-[240px] z-20">
             <div className="text-4xl font-black text-primary-blue mb-2">15+</div>
             <p className="font-bold text-sm leading-tight text-neutral-900">Years of excellence in luxury car rentals</p>
          </div>
        </div>

        <div>
          <p className="text-primary-orange text-[13px] font-bold uppercase tracking-[0.2em] mb-4">Why choose us</p>
          <h2 className="text-[44px] md:text-[52px] font-bold text-neutral-900 leading-tight mb-8">
            Experience the best with Get 2 Test services
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed mb-10">
            We provide specialized driving test car hire across the UK. Our mission is to take the stress out of your test day by providing a reliable car and professional driver.
          </p>

          <div className="space-y-6">
            {[
              "Dual-controlled vehicles for maximum safety",
              "Expert local drivers who know test routes",
              "Short-notice and last-minute bookings accepted",
              "Manual and Automatic transmission available"
            ].map(item => (
              <div key={item} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full bg-primary-blue/10 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                </div>
                <span className="font-semibold text-neutral-700">{item}</span>
              </div>
            ))}
          </div>

          <button className="mt-12 bg-primary-blue text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-primary-blue/20 hover:bg-opacity-90 transition-all">
            See our services
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
