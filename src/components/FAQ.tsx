"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much does cleaning cost?",
    a: "Our cleaning services start from $99 for a basic cleaning. Deep cleaning starts from $199, and move-out cleaning from $249. The final price depends on the size of your property, its condition, and the type of service. We provide free, no-obligation quotes so you know exactly what to expect.",
  },
  {
    q: "Are your cleaners insured and background checked?",
    a: "Absolutely. All our team members undergo thorough background checks before joining our team. We also carry full liability insurance and are bonded, so your property is always protected.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "No, you don\'t need to be home. Many of our customers provide a key or access code and we clean while they\'re at work. We\'ll send you a notification when the team arrives and when they\'re done.",
  },
  {
    q: "What cleaning products do you use?",
    a: "We use eco-friendly, non-toxic cleaning products that are safe for children, pets, and the environment. If you have specific product preferences or allergies, just let us know and we\'ll accommodate.",
  },
  {
    q: "How long does a cleaning take?",
    a: "A typical residential cleaning takes 2-4 hours depending on the size of your home and the type of service. Deep cleaning may take 4-6 hours. We\'ll give you a time estimate when you book.",
  },
  {
    q: "What if I\'m not satisfied with the cleaning?",
    a: "We offer a 100% satisfaction guarantee. If you\'re not happy with any aspect of our cleaning, let us know within 24 hours and we\'ll come back and re-clean the affected areas for free. No questions asked.",
  },
  {
    q: "Can I book a same-day cleaning?",
    a: "Yes! We offer same-day and next-day cleaning services based on availability. Call us at (800) 555-0199 for urgent bookings. We\'ll do our best to accommodate your schedule.",
  },
  {
    q: "Do you offer recurring cleaning plans?",
    a: "Yes! We offer weekly, bi-weekly, and monthly recurring cleaning plans. Recurring customers save up to 20% and get priority booking with the same trusted team every visit.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-sky-blue/10 text-sky-blue font-semibold text-sm px-4 py-2 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-deep-blue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Got questions? We\'ve got answers.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-deep-blue pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
