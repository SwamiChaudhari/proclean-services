import Link from "next/link";

const plans = [
  {
    name: "Starter Cleaning",
    price: "$99",
    period: "per visit",
    desc: "Perfect for regular maintenance cleaning",
    features: [
      "All common areas cleaned",
      "Kitchen & bathroom surfaces",
      "Vacuuming & mopping",
      "Trash removal",
      "Dusting all surfaces",
    ],
    popular: false,
    cta: "Get Quote",
  },
  {
    name: "Deep Cleaning",
    price: "$199",
    period: "per visit",
    desc: "Comprehensive top-to-bottom cleaning",
    features: [
      "Everything in Starter",
      "Inside oven & refrigerator",
      "Cabinet interiors",
      "Baseboard scrubbing",
      "Window cleaning",
      "Grout & tile scrubbing",
    ],
    popular: true,
    cta: "Most Popular",
  },
  {
    name: "Move-Out Cleaning",
    price: "$249",
    period: "per visit",
    desc: "Get your security deposit back",
    features: [
      "Everything in Deep Clean",
      "Wall spot cleaning",
      "Carpet steam cleaning",
      "Light fixture cleaning",
      "Garage cleaning",
      "Final walkthrough",
    ],
    popular: false,
    cta: "Get Quote",
  },
  {
    name: "Commercial Cleaning",
    price: "Custom",
    period: "quote",
    desc: "Tailored for your business needs",
    features: [
      "Custom cleaning plan",
      "Flexible scheduling",
      "Dedicated team",
      "Monthly billing",
      "Account manager",
      "Emergency service",
    ],
    popular: false,
    cta: "Contact Us",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-cta-orange/10 text-cta-orange font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-deep-blue mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No hidden fees. No surprises. Get an exact quote for your specific needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl p-6 border-2 transition-all hover:shadow-xl ${
                plan.popular
                  ? "border-cta-orange shadow-lg scale-[1.02]"
                  : "border-gray-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cta-orange text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold text-deep-blue mb-1">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-deep-blue">{plan.price}</span>
                <span className="text-gray-500 text-sm">/{plan.period}</span>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-soft-green font-bold mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="#quote"
                className={`block w-full text-center font-bold py-3 rounded-xl transition-all ${
                  plan.popular
                    ? "bg-cta-orange hover:bg-orange-600 text-white"
                    : "bg-deep-blue hover:bg-sky-blue text-white"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          💡 All prices are starting from. Final price depends on property size and condition. <a href="#quote" className="text-sky-blue font-semibold hover:underline">Get your exact quote</a> in 60 seconds.
        </p>
      </div>
    </section>
  );
}
