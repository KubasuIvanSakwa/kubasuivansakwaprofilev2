import React from 'react';
import Dots from '../assets/icons/Dots.svg'; 
import logoImage from '../assets/icons/logo.svg'; 
import Slash from '../assets/icons/slash.svg'; 
import { Link } from 'react-router';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary text-white p-4 relative overflow-hidden">
      <img src={Dots} alt="Decorative dots" className="absolute top-10 left-10 w-24 opacity-20" />
      <img src={Dots} alt="Decorative dots" className="absolute bottom-20 right-20 w-32 opacity-20" />
      <div className="w-20 h-20 border border-darktext absolute top-1/4 right-1/4 opacity-30" />
      <div className="w-16 h-16 border border-darktext absolute bottom-1/3 left-1/4 opacity-30" />
      <img src={logoImage} alt="Abstract logo" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 opacity-10" />

      <div className="relative z-10 text-center">
        <div className="flex items-baseline justify-center gap-2 mb-4">
          <img src={Slash} alt="" className="w-6" />
          <h1 className="text-6xl md:text-8xl fira-code-bold">404</h1>
        </div>
        <p className="text-xl md:text-3xl fira-code-light mb-8">Page Not Found</p>
        <p className="fira-code-default text-white/80 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link
          to="/" 
          className="mt-8 inline-block px-6 py-3 border border-darktext text-white fira-code-bold hover:bg-darktext hover:text-primary transition-colors duration-200"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}

export default NotFound;