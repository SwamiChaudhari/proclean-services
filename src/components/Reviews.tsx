"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Homeowner",
    rating: 5,
    text: "Absolutely amazing service! The team was professional, thorough, and friendly. My house has never looked better. I\'ve already booked them for weekly cleanings.",
    source: "Google",
    date: "2 weeks ago",
  },
  {
    name: "Michael R.",
    role: "Business Owner",
    rating: 5,
    text: "We use ProClean for our office space and they consistently deliver excellent results. Our employees love coming to a clean workspace. Highly recommend!",
    source: "Google",
    date: "1 month ago",
  },
  {
    name: "Jennifer L.",
    role: "Airbnb Host",
    rating: 5,
    text: "Fast, reliable, and thorough. My Airbnb guests always comment on how clean the place is. Same-day turnaround is a game changer for my business.",
    source: "Facebook",
    date: "3 weeks ago",
  },
  {
    name: "David K.",
    role: "Homeowner",
    rating: 5,
    text: "Used them for a move-out cleaning and got my full security deposit back! The team was on time, professional, and did an incredible job.",
    source: "Google",
    date: "1 week ago",
  },
  {
    name: "Amanda T.",
    role: "Property Manager",
    rating: 5,
    text: "We manage 15 properties and ProClean handles all our turnover cleaning. They\'re reliable, affordable, and the quality is consistently excellent.",
    source: "Google",
    date: "2 months ago",
  },
  {
    name: "Robert S.",
    role: "Restaurant Owner",
    rating: 5,
    text: "Our restaurant needs deep cleaning every week and ProClean delivers every time. Health inspector always compliments how clean our kitchen is!",
    source: "Yelp",
    date: "3 weeks ago",
  },
];

export default function Reviews() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const visible = testimonials.slice(page * perPage, (page + 1) * perPage);

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-sky-blue/10 text-sky-blue font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-deep-blue mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don\'t just take our word for it. Here\'s what real customers have to say.
          </p>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <span className="text-2xl font-bold text-deep-blue">4.9/5</span>
            <span className="text-gray-500">from 100+ reviews</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visible.map((t, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow">
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div>
                  <div className="font-bold text-deep-blue text-sm">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-semibold text-sky-blue">{t.source}</div>
                  <div className="text-xs text-gray-400">{t.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === page ? "bg-deep-blue w-8" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
