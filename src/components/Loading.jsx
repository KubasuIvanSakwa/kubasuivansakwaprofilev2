import React from 'react';
import Dots from '../assets/icons/Dots.svg'; 
import logoImage from '../assets/icons/logo.svg'; 

function Loading() {
  return (
    <div className=" inset-0  w-full h-[100vh] flex items-center justify-center bg-primary text-white z-50 p-4 relative overflow-hidden">
      <img src={Dots} alt="Decorative dots" className="absolute top-5 left-5 w-16 opacity-10" />
      <img src={Dots} alt="Decorative dots" className="absolute bottom-5 right-5 w-20 opacity-10" />
      <div className="w-16 h-16 border border-darktext absolute top-1/4 left-1/4 opacity-15" />
      <div className="w-12 h-12 border border-darktext absolute bottom-1/4 right-1/4 opacity-15" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-darktext mb-4"></div>
        <img src={logoImage} alt="Abstract logo" className="w-7 opacity-50 absolute" />
      </div>
    </div>
  );
}

export default Loading;