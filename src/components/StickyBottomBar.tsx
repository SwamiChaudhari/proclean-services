"use client";

import { useState } from "react";
import Link from "next/link";

const PHONE = "+1-800-555-0199";

export default function StickyBottomBar() {
  const [showSMS, setShowSMS] = useState(false);

  return (
    <>
      {/* Sticky bottom bar - mobile only */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] pb-safe">
        <div className="flex items-center gap-2 p-3">
          <a
            href={`tel:${PHONE}`}
            className="flex-1 flex items-center justify-center gap-2 bg-deep-blue text-white font-bold py-3.5 rounded-xl text-base active:scale-95 transition-transform"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            Call Now
          </a>
          <Link
            href="#quote"
            className="flex-[2] flex items-center justify-center gap-2 bg-cta-orange text-white font-bold py-3.5 rounded-xl text-base pulse-cta active:scale-95 transition-transform"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Get Free Quote
          </Link>
          <button
            onClick={() => setShowSMS(!showSMS)}
            className="flex-1 flex items-center justify-center gap-2 bg-soft-green text-white font-bold py-3.5 rounded-xl text-base active:scale-95 transition-transform"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            SMS
          </button>
        </div>
      </div>

      {/* SMS popup */}
      {showSMS && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/40 lg:hidden" onClick={() => setShowSMS(false)}>
          <div className="bg-white w-full max-w-lg rounded-t-3xl p-6 pb-10" onClick={(e) => e.stopPropagation()}>
            <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold text-deep-blue mb-2">Text Us</h3>
            <p className="text-gray-600 mb-4">Send us a message and we'll respond within 5 minutes.</p>
            <a
              href={`sms:${PHONE}?body=Hi! I'd like to get a cleaning quote.`}
              className="block w-full text-center bg-soft-green text-white font-bold py-4 rounded-xl text-lg mb-3"
            >
              Open SMS App
            </a>
            <button onClick={() => setShowSMS(false)} className="block w-full text-center text-gray-500 font-medium py-2">
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
