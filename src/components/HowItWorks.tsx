const steps = [
  {
    num: "1",
    title: "Request Quote",
    desc: "Fill out our simple form or call us. Tell us what you need and we\'ll provide a free estimate within 15 minutes.",
    icon: "📝",
  },
  {
    num: "2",
    title: "Schedule Service",
    desc: "Pick a date and time that works for you. We offer flexible scheduling including evenings and weekends.",
    icon: "📅",
  },
  {
    num: "3",
    title: "We Clean",
    desc: "Our professional team arrives on time with all supplies. We clean your space thoroughly and efficiently.",
    icon: "🧹",
  },
  {
    num: "4",
    title: "Enjoy Your Clean Space",
    desc: "Relax and enjoy your spotless home or office. Not satisfied? We\'ll come back and re-clean for free.",
    icon: "✨",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-deep-blue to-[#0a1e3f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block bg-white/10 text-white/90 font-semibold text-sm px-4 py-2 rounded-full mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Getting your space cleaned is easy. Just 4 simple steps.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-sky-blue/50 to-transparent" />
              )}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="w-10 h-10 bg-cta-orange rounded-full flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
