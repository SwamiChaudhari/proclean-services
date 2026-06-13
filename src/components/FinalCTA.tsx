import QuoteForm from "./QuoteForm";

export default function FinalCTA() {
  return (
    <section id="quote" className="py-16 lg:py-24 bg-gradient-to-br from-deep-blue via-[#162d5e] to-[#0a1e3f] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-sky-blue rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-soft-green rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-white/10 text-white/90 font-semibold text-sm px-4 py-2 rounded-full mb-6">
              Ready To Get Started?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6">
              Ready For A Cleaner Home?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Get your free quote in less than 60 seconds. No obligation. No hidden fees. Just professional cleaning you can trust.
            </p>

            {/* Quick contact options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:+1-800-555-0199"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (800) 555-0199
              </a>
              <a
                href="mailto:hello@procleanservices.com"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
              <span className="text-white/70 text-sm flex items-center gap-1">✓ Free Estimates</span>
              <span className="text-white/70 text-sm flex items-center gap-1">✓ No Contracts</span>
              <span className="text-white/70 text-sm flex items-center gap-1">✓ Same-Day Service</span>
            </div>
          </div>

          {/* Right: Quote Form */}
          <div>
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
