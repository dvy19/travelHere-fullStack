import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate=useNavigate()

  const toLogin=()=>{
    navigate('./login')
  }

  const toProfile=()=>{
    navigate('/userProfile')
  }

  return (
    <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
      
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              BrandLogo
            </span>
          </div>

          {/* Desktop Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium text-sm transition-colors">Home</a>
            <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium text-sm transition-colors">Features</a>
            <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium text-sm transition-colors">Pricing</a>
            <a href="#" className="text-slate-600 hover:text-indigo-600 font-medium text-sm transition-colors">Contact</a>
          </div>

          {/* Desktop Call-to-Action Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-sm transition-all" onClick={toLogin}>
              Login
            </button>
          </div>

          <div className="hidden md:flex items-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-xl shadow-sm transition-all" onClick={toLogin}>
              Profile
            </button>
          </div>

          {/* Hamburger Menu Button (Visible ONLY on Mobile) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-slate-600 hover:text-indigo-600 focus:outline-none p-2 rounded-lg hover:bg-slate-50 transition-colors"
              aria-label="Toggle Menu"
            >
              {/* Dynamic SVG icon changes based on isOpen state */}
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-out Mobile Sidebar Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Background Dark Overlay */}
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

        {/* Sidebar Content Panel */}
        <div className="fixed right-0 top-0 bottom-0 w-64 bg-white shadow-2xl p-6 flex flex-col space-y-6">
          {/* Close Button inside Sidebar */}
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-slate-800">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Links */}
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-slate-800 hover:text-indigo-600 font-semibold text-lg py-2 border-b border-slate-50">Home</a>
            <a href="#" className="text-slate-800 hover:text-indigo-600 font-semibold text-lg py-2 border-b border-slate-50">Features</a>
            <a href="#" className="text-slate-800 hover:text-indigo-600 font-semibold text-lg py-2 border-b border-slate-50">Pricing</a>
            <a href="#" className="text-slate-800 hover:text-indigo-600 font-semibold text-lg py-2 border-b border-slate-50">Contact</a>
          </div>

          {/* Mobile CTA */}
          <div className="pt-4">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl shadow-md transition-all">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}