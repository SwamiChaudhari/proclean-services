const reasons = [
  { icon: "🛡️", title: "Fully Insured & Bonded", desc: "Your property is protected. We carry full liability insurance and our team is bonded." },
  { icon: "🔍", title: "Background Checked Staff", desc: "Every team member passes a thorough background check. Your safety is our priority." },
  { icon: "🌿", title: "Eco-Friendly Products", desc: "We use green, non-toxic cleaning products that are safe for kids, pets, and the environment." },
  { icon: "📅", title: "Flexible Scheduling", desc: "Book online or call us. We work around your schedule, including evenings and weekends." },
  { icon: "💯", title: "Satisfaction Guarantee", desc: "Not happy? We'll come back and re-clean for free. That\'s our promise to you." },
  { icon: "⚡", title: "Fast Response Time", desc: "Get a response within 15 minutes. Same-day and next-day appointments available." },
  { icon: "💰", title: "Transparent Pricing", desc: "No hidden fees. No surprises. We provide upfront quotes and stick to them." },
  { icon: "👨‍👩‍👧‍👦", title: "Trusted By Local Families", desc: "Hundreds of families trust us with their homes. Join our community of happy customers." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image / Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-sky-blue/10 to-soft-green/10 rounded-3xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-2">🏆</div>
                  <div className="text-2xl font-extrabold text-deep-blue">5+ Years</div>
                  <div className="text-sm text-gray-500">In Business</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-2">👥</div>
                  <div className="text-2xl font-extrabold text-deep-blue">50+</div>
                  <div className="text-sm text-gray-500">Team Members</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-2">🏠</div>
                  <div className="text-2xl font-extrabold text-deep-blue">500+</div>
                  <div className="text-sm text-gray-500">Homes Cleaned</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="text-4xl mb-2">⭐</div>
                  <div className="text-2xl font-extrabold text-deep-blue">4.9/5</div>
                  <div className="text-sm text-gray-500">Google Rating</div>
                </div>
              </div>
              {/* Satisfaction badge */}
              <div className="mt-6 bg-soft-green text-white rounded-2xl p-4 text-center">
                <div className="text-lg font-bold">💯 100% Satisfaction Guarantee</div>
                <div className="text-sm opacity-90">If you\'re not happy, we\'ll re-clean for free</div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="inline-block bg-soft-green/10 text-soft-green font-semibold text-sm px-4 py-2 rounded-full mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-deep-blue mb-6">
              Why Hundreds Of Families Trust Us
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We\'re not just another cleaning company. We\'re your trusted partner in keeping your home or business spotless, safe, and healthy.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((r, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <span className="text-2xl shrink-0">{r.icon}</span>
                  <div>
                    <h4 className="font-bold text-deep-blue text-sm">{r.title}</h4>
                    <p className="text-xs text-gray-500 mt-0.5">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
