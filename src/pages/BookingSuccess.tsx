import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, Mail, Calendar, MapPin, Phone } from 'lucide-react';
import { NavLink, useSearchParams } from 'react-router-dom';

const BookingSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="pt-32 pb-32 flex items-center justify-center min-h-screen bg-bg-light">
      <div className="max-w-2xl w-full px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-[40px] p-12 md:p-20 text-center shadow-soft border border-neutral-100"
        >
          <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-10 text-green-500">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Booking Confirmed!</h1>
          <p className="text-neutral-500 text-lg mb-12 leading-relaxed">
            Thank you for choosing Get 2 Test. Your payment was successful and your car hire is now booked. We've sent a detailed confirmation to your email.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
            <div className="bg-bg-light p-6 rounded-3xl border border-neutral-50">
               <div className="flex items-center gap-3 text-neutral-400 text-xs font-bold uppercase tracking-widest mb-2">
                 <Mail className="w-4 h-4" /> Email Confirmation
               </div>
               <p className="font-bold text-neutral-900">Sent to your inbox</p>
            </div>
            <div className="bg-bg-light p-6 rounded-3xl border border-neutral-50">
               <div className="flex items-center gap-3 text-neutral-400 text-xs font-bold uppercase tracking-widest mb-2">
                 <Phone className="w-4 h-4" /> Driver Details
               </div>
               <p className="font-bold text-neutral-900">Assigned 24h before test</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <NavLink to="/" className="w-full md:w-auto bg-neutral-900 text-white px-10 py-5 rounded-2xl font-bold hover:bg-neutral-800 transition-all">
              Return Home
            </NavLink>
            <NavLink to="/faq" className="w-full md:w-auto px-10 py-5 border border-neutral-200 rounded-2xl font-bold hover:bg-bg-light transition-all">
              View Support
            </NavLink>
          </div>
          
          {sessionId && (
            <p className="mt-10 text-neutral-400 text-xs font-mono">
              Order ID: {sessionId.slice(0, 16)}...
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default BookingSuccess;
