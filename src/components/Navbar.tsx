"use client";

import { useState } from "react";
import Link from "next/link";

const PHONE = "+1-800-555-0199";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top info bar - hidden on mobile */}
      <div className="hidden lg:block bg-deep-blue text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              {PHONE}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              hello@procleanservices.com
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-soft-green font-semibold">★ 4.9/5</span>
            <span className="text-gray-300">| 500+ Five-Star Reviews</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-deep-blue rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <div>
                <span className="text-xl lg:text-2xl font-bold text-deep-blue">ProClean</span>
                <span className="hidden sm:block text-xs text-gray-500 -mt-1">Services</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              <Link href="#services" className="text-gray-700 hover:text-deep-blue font-medium transition-colors">Services</Link>
              <Link href="#pricing" className="text-gray-700 hover:text-deep-blue font-medium transition-colors">Pricing</Link>
              <Link href="#reviews" className="text-gray-700 hover:text-deep-blue font-medium transition-colors">Reviews</Link>
              <Link href="#areas" className="text-gray-700 hover:text-deep-blue font-medium transition-colors">Service Areas</Link>
              <Link href="#faq" className="text-gray-700 hover:text-deep-blue font-medium transition-colors">FAQ</Link>
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-deep-blue font-semibold hover:text-sky-blue transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                {PHONE}
              </a>
              <Link href="#quote" className="bg-cta-orange hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:scale-105">
                Get Free Quote
              </Link>
            </div>

            {/* Mobile: Call + Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <a href={`tel:${PHONE}`} className="w-10 h-10 flex items-center justify-center bg-deep-blue rounded-xl text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </a>
              <button onClick={() => setOpen(!open)} className="w-10 h-10 flex items-center justify-center bg-cta-orange rounded-xl text-white" aria-label="Menu">
                {open ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-white border-t shadow-xl">
            <div className="px-4 py-4 space-y-1">
              <Link href="#services" onClick={() => setOpen(false)} className="block py-3 px-4 text-gray-700 hover:bg-light-blue rounded-lg font-medium">Services</Link>
              <Link href="#pricing" onClick={() => setOpen(false)} className="block py-3 px-4 text-gray-700 hover:bg-light-blue rounded-lg font-medium">Pricing</Link>
              <Link href="#reviews" onClick={() => setOpen(false)} className="block py-3 px-4 text-gray-700 hover:bg-light-blue rounded-lg font-medium">Reviews</Link>
              <Link href="#areas" onClick={() => setOpen(false)} className="block py-3 px-4 text-gray-700 hover:bg-light-blue rounded-lg font-medium">Service Areas</Link>
              <Link href="#faq" onClick={() => setOpen(false)} className="block py-3 px-4 text-gray-700 hover:bg-light-blue rounded-lg font-medium">FAQ</Link>
              <div className="pt-3 space-y-2">
                <Link href="#quote" onClick={() => setOpen(false)} className="block w-full text-center bg-cta-orange hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-lg">
                  Get Free Quote
                </Link>
                <a href={`sms:${PHONE}`} className="block w-full text-center bg-soft-green hover:bg-green-600 text-white font-bold py-3 rounded-xl">
                  💬 Text Us
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
