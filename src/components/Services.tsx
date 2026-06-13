import Link from "next/link";

const servicesList = [
  {
    icon: "🏠",
    title: "Residential Cleaning",
    description: "Regular house cleaning services tailored to your schedule. Weekly, bi-weekly, or monthly plans available.",
    price: "From $99",
    features: ["Kitchen & Bathrooms", "Dusting & Vacuuming", "Floor Mopping", "Trash Removal"],
  },
  {
    icon: "✨",
    title: "Deep Cleaning",
    description: "Intensive top-to-bottom cleaning that reaches every corner. Perfect for spring cleaning or special occasions.",
    price: "From $199",
    features: ["Inside Appliances", "Baseboard Scrubbing", "Window Cleaning", "Cabinet Interiors"],
  },
  {
    icon: "📦",
    title: "Move-In / Move-Out",
    description: "Complete cleaning for moving transitions. Get your security deposit back or start fresh in a spotless home.",
    price: "From $249",
    features: ["Empty Property", "All Rooms Deep Cleaned", "Carpet Cleaning", "Wall Spot Cleaning"],
  },
  {
    icon: "🛏️",
    title: "Airbnb Cleaning",
    description: "Fast turnaround cleaning for short-term rentals. Same-day service available for urgent turnovers.",
    price: "From $79",
    features: ["Same-Day Turnover", "Linen Change", "Restock Supplies", "Photo-Ready Finish"],
  },
  {
    icon: "🏢",
    title: "Office Cleaning",
    description: "Professional office cleaning that keeps your workspace healthy and productive. Daily, weekly, or custom schedules.",
    price: "From $149",
    features: ["Desk Areas", "Common Rooms", "Restrooms", "Trash & Recycling"],
  },
  {
    icon: "🏭",
    title: "Commercial Cleaning",
    description: "Large-scale cleaning for warehouses, retail spaces, restaurants, and industrial facilities.",
    price: "Custom Quote",
    features: ["Floor Care", "Restroom Sanitization", "Window Washing", "Pressure Washing"],
  },
  {
    icon: "🔨",
    title: "Post-Construction",
    description: "Remove construction dust, debris, and residue. Make your newly renovated space move-in ready.",
    price: "From $299",
    features: ["Dust Removal", "Debris Cleanup", "Surface Polishing", "Final Inspection"],
  },
  {
    icon: "📅",
    title: "Recurring Plans",
    description: "Save up to 20% with recurring cleaning plans. Consistent service with the same trusted team.",
    price: "Save 20%",
    features: ["Same Team Every Visit", "Flexible Scheduling", "Priority Booking", "Discount Pricing"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-sky-blue/10 text-sky-blue font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-deep-blue mb-4">
            Cleaning Services For Every Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From regular home cleaning to specialized commercial services, we have you covered.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 group"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-deep-blue mb-2 group-hover:text-sky-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{service.description}</p>
              <ul className="space-y-2 mb-5">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-soft-green font-bold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-lg font-bold text-cta-orange">{service.price}</span>
                <Link
                  href="#quote"
                  className="bg-deep-blue hover:bg-sky-blue text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
