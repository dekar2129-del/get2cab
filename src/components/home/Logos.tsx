import React from 'react';

const Logos = () => {
  const logos = ['Hertz', 'Europcar', 'National', 'Thrifty', 'Sixt', 'CarRentals'];
  return (
    <section className="py-20 px-8 md:px-20 bg-white">
      <div className="flex flex-wrap items-center justify-between gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
        {logos.map(logo => (
          <div key={logo} className="text-2xl font-black italic text-neutral-900 tracking-tighter">
            {logo.toUpperCase()}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Logos;
