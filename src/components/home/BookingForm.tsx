import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Mail, Phone, MapPin, Calendar, Clock, Car, ChevronRight, ChevronLeft, CreditCard, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const services = [
  {
    id: 1,
    name: 'Car & Driver Hire',
    type: 'Practical Test Day',
    price: 299,
    priceStr: '£299',
    tag: 'Popular',
    desc: 'Dual-controlled car and driver for your test center.'
  },
  {
    id: 2,
    name: '2-Hour Assessment',
    type: 'Automatic/Manual',
    price: 140,
    priceStr: '£140',
    tag: 'Essential',
    desc: 'Pre-test lesson and assessment of your driving level.'
  },
  {
    id: 3,
    name: 'Priority Lessons',
    type: 'Last Minute',
    price: 75,
    priceStr: '£75',
    tag: 'Fast',
    desc: 'Intensive 1-on-1 coaching for immediate improvement.'
  },
  {
    id: 4,
    name: 'DVSA Test Car',
    type: 'Automatic Only',
    price: 350,
    priceStr: '£350',
    tag: 'Premium',
    desc: 'Top-tier automatic vehicle specifically for DVSA tests.'
  }
];

const BookingFlow = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    testCenter: '',
    testDate: '',
    testTime: '',
    transmission: 'automatic',
    selectedService: services[0]
  });

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceSelect = (service: typeof services[0]) => {
    setFormData(prev => ({ ...prev, selectedService: service }));
    nextStep();
  };

  const handleSubmitPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [
            {
              name: formData.selectedService.name,
              description: `${formData.selectedService.type} - ${formData.transmission} at ${formData.testCenter}`,
              amount: formData.selectedService.price * 100, // to pence
            }
          ],
          customerEmail: formData.email,
        }),
      });

      const session = await response.json();

      if (session.url) {
        window.location.href = session.url;
      } else {
        alert('Failed to create payment session. Please try again.');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative z-20 -mt-12 md:-mt-16 mx-auto max-w-4xl px-4">
      <div className="bg-white rounded-[40px] shadow-soft p-6 md:p-12 border border-neutral-100 overflow-hidden min-h-[500px]">
        
        {/* Progress Bar */}
        <div className="flex items-center justify-center gap-4 mb-12">
            {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${step >= i ? 'bg-primary-blue text-white shadow-lg shadow-primary-blue/20' : 'bg-neutral-100 text-neutral-400'}`}>
                        {i}
                    </div>
                    {i < 4 && <div className={`w-12 h-1 mx-2 rounded-full transition-all duration-500 ${step > i ? 'bg-primary-blue' : 'bg-neutral-100'}`} />}
                </div>
            ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div 
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-primary-blue/10 rounded-3xl flex items-center justify-center mx-auto mb-8 text-primary-blue">
                <Zap className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-4">Express Guest Booking</h2>
              <p className="text-neutral-500 mb-10 max-w-md mx-auto">Book your driving test car hire in less than 2 minutes. No account required. Let's get you on the road to success!</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="bg-bg-light p-6 rounded-3xl flex items-center gap-4 text-left border border-neutral-50">
                    <ShieldCheck className="w-6 h-6 text-green-500" />
                    <div>
                        <p className="font-bold text-neutral-900">Secure Payment</p>
                        <p className="text-xs text-neutral-400">Powered by Stripe</p>
                    </div>
                </div>
                <div className="bg-bg-light p-6 rounded-3xl flex items-center gap-4 text-left border border-neutral-50">
                    <CheckCircle2 className="w-6 h-6 text-primary-orange" />
                    <div>
                        <p className="font-bold text-neutral-900">Instant Confirmed</p>
                        <p className="text-xs text-neutral-400">Booking sent via email</p>
                    </div>
                </div>
              </div>

              <button 
                onClick={nextStep}
                className="w-full bg-neutral-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group"
              >
                Start My Booking <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
                <ChevronLeft onClick={prevStep} className="w-6 h-6 cursor-pointer hover:text-primary-blue transition-colors" />
                Select Your Service
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map(service => (
                  <div 
                    key={service.id}
                    onClick={() => handleServiceSelect(service)}
                    className="p-6 rounded-3xl border-2 border-neutral-50 hover:border-primary-blue cursor-pointer transition-all group relative bg-bg-light hover:bg-white hover:shadow-xl"
                  >
                    <div className="flex justify-between items-start mb-4">
                        <div className="bg-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-primary-orange border border-neutral-100">
                            {service.tag}
                        </div>
                        <p className="text-xl font-bold text-primary-blue">{service.priceStr}</p>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                    <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{service.desc}</p>
                    <div className="flex items-center gap-1 text-primary-blue font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        Select Plan <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
                <ChevronLeft onClick={prevStep} className="w-6 h-6 cursor-pointer hover:text-primary-blue transition-colors" />
                Booking Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Full Name</label>
                    <div className="relative group">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-primary-blue transition-colors" />
                        <input name="fullName" value={formData.fullName} onChange={handleInputChange} type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-4 bg-bg-light border-none rounded-2xl text-[15px] focus:ring-2 focus:ring-primary-blue outline-none transition-all" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Email Address</label>
                    <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-primary-blue transition-colors" />
                        <input name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="john@example.com" className="w-full pl-12 pr-4 py-4 bg-bg-light border-none rounded-2xl text-[15px] focus:ring-2 focus:ring-primary-blue outline-none transition-all" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Phone Number</label>
                    <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-primary-blue transition-colors" />
                        <input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" placeholder="+44 7000 000000" className="w-full pl-12 pr-4 py-4 bg-bg-light border-none rounded-2xl text-[15px] focus:ring-2 focus:ring-primary-blue outline-none transition-all" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Test Center</label>
                    <div className="relative group">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-primary-blue transition-colors" />
                        <select name="testCenter" value={formData.testCenter} onChange={handleInputChange} className="w-full pl-12 pr-10 py-4 bg-bg-light border-none rounded-2xl text-[15px] focus:ring-2 focus:ring-primary-blue outline-none transition-all appearance-none cursor-pointer">
                            <option value="">Select Test Center</option>
                            <option value="London Borehamwood">London Borehamwood</option>
                            <option value="London Mill Hill">London Mill Hill</option>
                            <option value="London Barnet">London Barnet</option>
                            <option value="Watford">Watford</option>
                        </select>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Test Date & Time</label>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="relative group">
                            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-primary-blue transition-colors" />
                            <input name="testDate" value={formData.testDate} onChange={handleInputChange} type="date" className="w-full pl-10 pr-2 py-4 bg-bg-light border-none rounded-2xl text-[13px] focus:ring-2 focus:ring-primary-blue outline-none transition-all" />
                        </div>
                        <div className="relative group">
                            <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-primary-blue transition-colors" />
                            <input name="testTime" value={formData.testTime} onChange={handleInputChange} type="time" className="w-full pl-10 pr-2 py-4 bg-bg-light border-none rounded-2xl text-[13px] focus:ring-2 focus:ring-primary-blue outline-none transition-all" />
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-neutral-400 ml-1">Transmission</label>
                    <div className="relative group">
                        <Car className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-primary-blue transition-colors" />
                        <select name="transmission" value={formData.transmission} onChange={handleInputChange} className="w-full pl-12 pr-10 py-4 bg-bg-light border-none rounded-2xl text-[15px] focus:ring-2 focus:ring-primary-blue outline-none transition-all appearance-none cursor-pointer">
                            <option value="automatic">Automatic</option>
                            <option value="manual">Manual</option>
                        </select>
                    </div>
                </div>
              </div>

              <div className="mt-12">
                  <button 
                    onClick={nextStep}
                    disabled={!formData.fullName || !formData.email || !formData.testCenter || !formData.testDate}
                    className="w-full bg-neutral-900 text-white py-5 rounded-2xl font-bold text-lg hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue to Payment <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div 
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
                <ChevronLeft onClick={prevStep} className="w-6 h-6 cursor-pointer hover:text-primary-blue transition-colors" />
                Review & Pay
              </h2>
              
              <div className="bg-bg-light p-8 rounded-[32px] mb-8 border border-neutral-100">
                  <div className="flex justify-between items-start mb-6 pb-6 border-b border-neutral-200">
                      <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-1">Selected Service</p>
                          <h4 className="text-xl font-bold text-neutral-900">{formData.selectedService.name}</h4>
                          <p className="text-sm text-neutral-500">{formData.transmission} transmission</p>
                      </div>
                      <p className="text-2xl font-black text-primary-blue">{formData.selectedService.priceStr}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6 text-sm">
                      <div>
                          <p className="text-neutral-400 mb-1 font-medium">Test Center</p>
                          <p className="font-bold text-neutral-900">{formData.testCenter}</p>
                      </div>
                      <div>
                          <p className="text-neutral-400 mb-1 font-medium">Date & Time</p>
                          <p className="font-bold text-neutral-900">{formData.testDate} at {formData.testTime}</p>
                      </div>
                  </div>
              </div>

              <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 text-neutral-400 text-sm mb-4">
                      <CreditCard className="w-4 h-4" /> Secure checkout with Stripe
                  </div>
                  <button 
                    onClick={handleSubmitPayment}
                    disabled={loading}
                    className="w-full bg-primary-blue text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary-blue/20 hover:brightness-110 transition-all flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {loading ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <>Pay {formData.selectedService.priceStr} & Book Now</>
                    )}
                  </button>
              </div>
              
              <p className="text-center text-xs text-neutral-400 leading-relaxed px-10">
                  By booking, you agree to our terms of service and refund policy. Your payment information is processed securely.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default BookingFlow;
