import Link from "next/link";

const commercialTypes = [
  { icon: "🏢", title: "Office Buildings", desc: "Daily, weekly, or custom cleaning schedules for offices of all sizes." },
  { icon: "🏥", title: "Medical Clinics", desc: "Health-grade sanitization that meets medical facility standards." },
  { icon: "🏪", title: "Retail Stores", desc: "Keep your storefront sparkling and welcoming for customers." },
  { icon: "🏭", title: "Warehouses", desc: "Industrial cleaning including floor care, dust removal, and debris cleanup." },
  { icon: "🍽️", title: "Restaurants", desc: "Kitchen deep cleaning, dining area sanitization, and health code compliance." },
  { icon: "🏫", title: "Schools & Daycares", desc: "Safe, non-toxic cleaning for educational facilities." },
];

export default function Commercial() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-block bg-deep-blue/10 text-deep-blue font-semibold text-sm px-4 py-2 rounded-full mb-4">
              Commercial Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-deep-blue mb-4">
              Professional Commercial Cleaning
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              From offices to warehouses, we provide comprehensive commercial cleaning solutions that keep your business looking professional and your employees healthy.
            </p>
            <div className="bg-gradient-to-r from-sky-blue/10 to-soft-green/10 rounded-2xl p-6 mb-6">
              <h4 className="font-bold text-deep-blue mb-2">🏢 Why Businesses Choose Us</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center gap-2"><span className="text-soft-green">✓</span> Custom cleaning plans tailored to your business</li>
                <li className="flex items-center gap-2"><span className="text-soft-green">✓</span> After-hours cleaning available</li>
                <li className="flex items-center gap-2"><span className="text-soft-green">✓</span> Dedicated account manager</li>
                <li className="flex items-center gap-2"><span className="text-soft-green">✓</span> Monthly billing & contracts</li>
                <li className="flex items-center gap-2"><span className="text-soft-green">✓</span> Emergency cleaning services</li>
              </ul>
            </div>
            <Link href="#quote" className="inline-flex items-center gap-2 bg-deep-blue hover:bg-sky-blue text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-lg">
              Get Commercial Quote
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          {/* Right: Commercial types grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {commercialTypes.map((type, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all">
                <div className="text-3xl mb-3">{type.icon}</div>
                <h3 className="font-bold text-deep-blue mb-1">{type.title}</h3>
                <p className="text-sm text-gray-600">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
