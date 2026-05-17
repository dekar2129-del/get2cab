import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do you provide car and driver for the test?",
    answer: "Yes, we provide a modern dual-controlled car and a professional driver who will accompany you to the test center and wait for you to complete your test."
  },
  {
    question: "What test centers do you cover?",
    answer: "We cover most test centers in London and the Home Counties, including Borehamwood, Mill Hill, Barnet, and Watford."
  },
  {
    question: "Can I book at the last minute?",
    answer: "Yes, we specialize in short-notice and last-minute bookings. However, availability is limited so we recommend booking as soon as you have your test time."
  },
  {
    question: "Are the cars automatic or manual?",
    answer: "We have both automatic and manual transmission vehicles available. You can select your preference during the booking process."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-8 md:px-20 bg-white">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <p className="text-primary-orange text-[13px] font-bold uppercase tracking-[0.2em] mb-4">FAQ</p>
          <h2 className="text-[44px] md:text-[52px] font-bold text-neutral-900 leading-tight mb-8">
            Frequently asked questions
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed mb-10">
            Everything you need to know about our services and the rental process.
          </p>
          <div className="p-8 rounded-[32px] bg-primary-blue text-white inline-block">
             <p className="text-sm opacity-80 uppercase tracking-widest font-bold mb-2">Have more questions?</p>
             <h4 className="text-2xl font-bold mb-6">Contact our support team</h4>
             <button className="bg-white text-primary-blue px-8 py-3 rounded-xl font-bold hover:bg-bg-light transition-colors">
               Get in touch
             </button>
          </div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-primary-blue bg-primary-blue/5' : 'border-neutral-100'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-center gap-4"
              >
                <span className="font-bold text-lg text-neutral-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary-blue shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-neutral-400 shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100 pb-6 px-6' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
