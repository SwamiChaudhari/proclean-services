"use client";

import { useState } from "react";

interface QuoteFormProps {
  variant?: "full" | "compact";
  className?: string;
}

export default function QuoteForm({ variant = "full", className = "" }: QuoteFormProps) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    address: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={`bg-white rounded-3xl p-8 text-center shadow-xl ${className}`}>
        <div className="w-20 h-20 bg-soft-green rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-2xl font-bold text-deep-blue mb-2">Quote Request Received!</h3>
        <p className="text-gray-600 mb-4">We'll contact you within 15 minutes with your free estimate.</p>
        <a href="tel:+1-800-555-0199" className="inline-block bg-cta-orange text-white font-bold px-8 py-3 rounded-xl">
          Call Us Now
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white rounded-3xl shadow-xl ${variant === "full" ? "p-6 sm:p-8" : "p-5"} ${className}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-deep-blue">Get Your Free Quote</h3>
        <p className="text-gray-500 mt-1">Response in under 15 minutes</p>
      </div>

      <div className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all"
          />
        </div>
        <div>
          <select
            name="service"
            required
            value={form.service}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all text-gray-700"
          >
            <option value="">Select Service Type</option>
            <option value="residential">Residential Cleaning</option>
            <option value="deep">Deep Cleaning</option>
            <option value="moveout">Move-In / Move-Out Cleaning</option>
            <option value="airbnb">Airbnb Cleaning</option>
            <option value="office">Office Cleaning</option>
            <option value="commercial">Commercial Cleaning</option>
            <option value="construction">Post-Construction Cleaning</option>
            <option value="recurring">Recurring Cleaning Plan</option>
          </select>
        </div>
        {variant === "full" && (
          <input
            type="text"
            name="address"
            placeholder="Property Address (Optional)"
            value={form.address}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all"
          />
        )}
        {variant === "full" && (
          <textarea
            name="message"
            placeholder="Tell us about your cleaning needs..."
            rows={3}
            value={form.message}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-sky-blue focus:border-transparent transition-all resize-none"
          />
        )}
        <button
          type="submit"
          className="w-full bg-cta-orange hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-lg transition-all hover:shadow-lg active:scale-[0.98]"
        >
          Get My Free Quote →
        </button>
        <p className="text-center text-xs text-gray-400">
          🔒 Your information is secure. No spam, ever.
        </p>
      </div>
    </form>
  );
}
