export default function TrustIndicators() {
  const stats = [
    { number: "500+", label: "Homes Cleaned", icon: "🏠" },
    { number: "100+", label: "Five-Star Reviews", icon: "⭐" },
    { number: "100%", label: "Insured & Bonded", icon: "🛡️" },
    { number: "5 min", label: "Response Time", icon: "⚡" },
    { number: "4.9", label: "Average Rating", icon: "⭐" },
    { number: "100%", label: "Satisfaction Guarantee", icon: "✅" },
  ];

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-4 bg-light-blue/50 rounded-2xl hover:bg-light-blue transition-colors"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-deep-blue">{stat.number}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
