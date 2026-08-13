"use client";

import React, { useState, useEffect } from 'react';

const whatsapp = "https://wa.me/8613556351212?text=Hello%20Weiboer%2C%20I%20would%20like%20a%20quotation.";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a 
      href={whatsapp}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-8 right-8 z-[100] flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 group animate-in fade-in slide-in-from-bottom-8 duration-700"
      aria-label="Chat on WhatsApp"
    >
      <div className="hidden group-hover:block font-bold text-sm pl-2">
        Chat with Weiboer
      </div>
      <svg 
        viewBox="0 0 24 24" 
        width="24" 
        height="24" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="currentColor" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-7.6 8.38 8.38 0 0 1 3.8.9L22 2l-2.5 4.5Z"></path>
      </svg>
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
    </a>
  );
}
