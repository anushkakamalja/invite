
import React from 'react';

type GoldenAccentProps = {
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
};

const GoldenAccent = ({ position }: GoldenAccentProps) => {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 rotate-90',
    'bottom-left': 'bottom-0 left-0 -rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180'
  };

  return (
    <div className={`absolute ${positionClasses[position]} w-24 h-24 overflow-hidden pointer-events-none opacity-50`}>
      <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M0 0C55.2285 0 100 44.7715 100 100H0V0Z" 
          fill="url(#golden-gradient)" 
        />
        <defs>
          <linearGradient id="golden-gradient" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D4AF37" stopOpacity="0.2" />
            <stop offset="1" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default GoldenAccent;
