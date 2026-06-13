const cities = [
  { name: "Downtown", zip: "10001" },
  { name: "Midtown", zip: "10018" },
  { name: "Upper East Side", zip: "10021" },
  { name: "Upper West Side", zip: "10023" },
  { name: "Brooklyn Heights", zip: "11201" },
  { name: "Williamsburg", zip: "11211" },
  { name: "Park Slope", zip: "11215" },
  { name: "Long Island City", zip: "11101" },
  { name: "Astoria", zip: "11102" },
  { name: "Hoboken", zip: "07030" },
  { name: "Jersey City", zip: "07302" },
  { name: "Newark", zip: "07102" },
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Map placeholder */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-br from-sky-blue/10 to-soft-green/10 p-8 lg:p-12 min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-2xl font-bold text-deep-blue mb-2">Serving Your Area</h3>
                <p className="text-gray-600 mb-4">We proudly serve the greater metropolitan area</p>
                <div className="inline-flex items-center gap-2 bg-soft-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  Now Booking In Your Area
                </div>
              </div>
            </div>
          </div>

          {/* Right: Cities list */}
          <div>
            <span className="inline-block bg-sky-blue/10 text-sky-blue font-semibold text-sm px-4 py-2 rounded-full mb-4">
              Service Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-deep-blue mb-4">
              Areas We Serve
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide cleaning services across the metropolitan area. Don\'t see your city? Contact us — we\'re always expanding!
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {cities.map((city, i) => (
                <div key={i} className="bg-white rounded-xl p-3 border border-gray-100 hover:border-sky-blue hover:shadow-md transition-all text-center">
                  <div className="font-semibold text-deep-blue text-sm">{city.name}</div>
                  <div className="text-xs text-gray-400">ZIP: {city.zip}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-light-blue rounded-xl">
              <p className="text-sm text-deep-blue font-medium">
                📍 Not sure if we service your area? <a href="#quote" className="text-sky-blue hover:underline font-bold">Get a free quote</a> and we\'ll confirm instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
