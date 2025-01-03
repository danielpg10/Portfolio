import React from 'react';

const WaveDivider = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <div className="relative w-[200%] h-[120px]">
        <svg 
          className="absolute top-0 left-0 w-1/2 h-full animate-wave"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,60 C150,150 350,-30 600,60 C850,150 1050,-30 1200,60 L1200,120 L0,120 Z" 
            className="fill-gray-900"
          ></path>
        </svg>
        <svg 
          className="absolute top-0 left-1/2 w-1/2 h-full animate-wave"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,60 C150,150 350,-30 600,60 C850,150 1050,-30 1200,60 L1200,120 L0,120 Z" 
            className="fill-gray-900"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default WaveDivider;