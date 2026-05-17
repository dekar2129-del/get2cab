import React from 'react';
import { Star, ChevronRight } from 'lucide-react';

const cars = [
  {
    id: 1,
    name: 'Car & Driver Hire',
    type: 'Practical Test Day',
    price: '£299',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop',
    tag: 'Popular'
  },
  {
    id: 2,
    name: '2-Hour Assessment',
    type: 'Automatic/Manual',
    price: '£140',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop',
    tag: 'Essential'
  },
  {
    id: 3,
    name: 'Priority Lessons',
    type: 'Last Minute',
    price: '£75',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?q=80&w=2072&auto=format&fit=crop',
    tag: 'Fast'
  },
  {
    id: 4,
    name: 'DVSA Test Car',
    type: 'Automatic Only',
    price: '£350',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1580273916550-13b3e59f0523?q=80&w=1964&auto=format&fit=crop',
    tag: 'Premium'
  }
];

const FeaturedCars = () => {
  return (
    <section className="py-32 px-8 md:px-20 bg-bg-light">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-xl">
          <p className="text-primary-orange text-[13px] font-bold uppercase tracking-[0.2em] mb-4">Our Services</p>
          <h2 className="text-[44px] font-bold text-neutral-900 leading-tight">
            Checkout our best options for your driving test
          </h2>
        </div>
        <button className="flex items-center gap-2 text-primary-blue font-bold hover:gap-3 transition-all group">
          View all services <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cars.map(car => (
          <div key={car.id} className="bg-white rounded-[32px] p-6 shadow-sm hover:shadow-xl transition-all group border border-neutral-100">
            <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[4/3]">
              <img 
                src={car.image} 
                alt={car.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-primary-orange">
                {car.tag}
              </div>
            </div>
            
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-lg">{car.name}</h3>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-primary-orange text-primary-orange" />
                <span className="text-sm font-bold">{car.rating}</span>
              </div>
            </div>
            
            <p className="text-neutral-400 text-sm mb-6">{car.type}</p>
            
            <div className="flex items-center justify-between pt-6 border-t border-neutral-50">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-primary-blue">{car.price}</span>
                <span className="text-neutral-400 text-sm">/day</span>
              </div>
              <button className="bg-neutral-900 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-primary-orange transition-colors">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCars;
