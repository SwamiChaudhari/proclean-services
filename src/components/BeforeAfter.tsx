"use client";

import { useState } from "react";

const transformations = [
  {
    title: "Deep Kitchen Transformation",
    desc: "Complete deep cleaning including inside appliances, cabinet fronts, and grout scrubbing.",
    before: "🍳",
    after: "✨",
    tag: "Deep Cleaning",
  },
  {
    title: "Living Room Revival",
    desc: "Full dusting, vacuuming, upholstery cleaning, and window washing.",
    before: "🛋️",
    after: "🌟",
    tag: "Residential",
  },
  {
    title: "Bathroom Deep Clean",
    desc: "Tile scrubbing, fixture polishing, mold removal, and sanitization.",
    before: "🚿",
    after: "💎",
    tag: "Deep Cleaning",
  },
  {
    title: "Office Space Refresh",
    desc: "Complete office sanitization, carpet cleaning, and workspace organization.",
    before: "🏢",
    after: "🏆",
    tag: "Commercial",
  },
];

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % transformations.length);
    setShowAfter(false);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + transformations.length) % transformations.length);
    setShowAfter(false);
  };

  const current = transformations[active];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-cta-orange/10 text-cta-orange font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Real Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-deep-blue mb-4">
            Before & After Transformations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See the difference our professional cleaning makes. Real homes. Real results.
          </p>
        </div>

        {/* Interactive before/after card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            {/* Image area */}
            <div
              className={`relative h-64 sm:h-80 flex items-center justify-center cursor-pointer transition-all duration-500 ${
                showAfter
                  ? "bg-gradient-to-br from-soft-green/20 to-sky-blue/20"
                  : "bg-gradient-to-br from-gray-200 to-gray-300"
              }`}
              onClick={() => setShowAfter(!showAfter)}
            >
              <div className="text-center">
                <div className="text-8xl mb-4 transition-transform duration-500">
                  {showAfter ? current.after : current.before}
                </div>
                <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold ${
                  showAfter ? "bg-soft-green text-white" : "bg-gray-500 text-white"
                }`}>
                  {showAfter ? "AFTER ✨" : "BEFORE"}
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
                {current.tag}
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
                Tap to {showAfter ? "see before" : "see after"}
              </div>
            </div>

            {/* Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-deep-blue mb-1">{current.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{current.desc}</p>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button onClick={handlePrev} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <div className="flex gap-2">
                  {transformations.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setActive(i); setShowAfter(false); }}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i === active ? "bg-deep-blue w-6" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <button onClick={handleNext} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
