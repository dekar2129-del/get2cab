import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'James Wilson',
    role: 'Learner Driver',
    text: 'I was let down by my instructor at the last minute. Get 2 Test stepped in and saved my day. I passed with only 2 minors!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Chloe Smith',
    role: 'New Driver',
    text: 'The automatic car I rented was brand new and so easy to drive. The driver was very supportive and helped calm my nerves.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Mark Thompson',
    role: 'Passed Student',
    text: 'Professional service from start to finish. Transparent pricing and the driver knew the test routes perfectly.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop'
  }
];

const Testimonials = () => {
  return (
    <section className="py-32 px-8 md:px-20 bg-bg-light">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <p className="text-primary-orange text-[13px] font-bold uppercase tracking-[0.2em] mb-4">Testimonials</p>
        <h2 className="text-[44px] font-bold text-neutral-900">What our clients say</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map(item => (
          <div key={item.id} className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-md transition-shadow relative border border-neutral-50">
            <Quote className="absolute top-10 right-10 w-10 h-10 text-neutral-50" />
            <p className="text-neutral-600 leading-relaxed mb-8 relative z-10 italic">
              "{item.text}"
            </p>
            <div className="flex items-center gap-4">
              <img 
                src={item.avatar} 
                alt={item.name} 
                className="w-12 h-12 rounded-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <h4 className="font-bold text-neutral-900">{item.name}</h4>
                <p className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
