import { useState } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  
  // WhatsApp phone number
  const whatsappNumber = '917200010271';
  const message = encodeURIComponent('Hello Aqua Care Solutions, I would like to enquire about your water purification systems and services.');
  const waUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <div
        className={`hidden sm:block mr-3 px-3.5 py-1.5 rounded-lg bg-darkNavy text-white text-xs font-semibold shadow-lg whitespace-nowrap transition-all duration-300 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Chat with us on WhatsApp
      </div>

      {/* WhatsApp Circular Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
        aria-label="Chat with us on WhatsApp"
      >
        {/* Subtle breathing ripple ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10" />

        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.507 14.307l-.009.075c-.239.778-1.18 1.487-1.921 1.637-.503.102-1.157.183-3.348-.727-2.795-1.163-4.588-4.015-4.729-4.2-.136-.186-1.13-1.503-1.13-2.868 0-1.365.714-2.035.968-2.314.254-.28.553-.35.738-.35.184 0 .369.002.531.01.171.008.4.065.626.608.232.557.787 1.92.856 2.06.069.14.116.304.023.49-.092.186-.139.303-.277.465-.138.163-.292.363-.417.487-.138.138-.282.288-.121.565.161.277.717 1.182 1.541 1.916 1.06 1.011 1.954 1.324 2.231 1.462.277.138.439.116.6-.069.162-.186.692-.806.877-1.083.185-.277.369-.232.623-.139.254.093 1.615.762 1.892.9.277.139.462.209.531.325.069.116.069.673-.17 1.451zM12 2C6.477 2 2 6.477 2 12c0 1.892.524 3.662 1.434 5.176L2 22l4.965-1.401C8.423 21.492 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.63 0-3.153-.483-4.436-1.314l-.318-.208-2.951.833.84-2.87-.229-.338C3.992 14.969 3.5 13.528 3.5 12c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5-3.813 8.5-8.5 8.5z" />
        </svg>
      </a>
    </div>
  );
}
