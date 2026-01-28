export default function TeachersSection() {
    return (
      <section id="teachers" className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-3xl font-bold text-teal-400 mb-8 text-center">
            Teachers
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl transition-all duration-300">
              <img
                src="/jelani.webp"
                alt="Teacher 1"
                className="w-full h-48 object-cover rounded mb-3"
              />
              <div className="font-bold"> Prof.Jelani Nelson</div>
              <div>Introduction to Programming and algorithms.</div>
            </div>
            <div className="p-4 text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl transition-all duration-300">
              <img
                src="/MRBAYUU.jpg"
                alt="Teacher 2"
                className="w-full h-48 object-cover rounded mb-3"
              />
              <div className="font-bold">Mr. Bayu Bezabhe</div>
              <div>Physics and mathematics.</div>
            </div>
            <div className="p-4 text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl transition-all duration-300">
              <img
                src="/mrmegersa.jpg"
                alt="Teacher 3"
                className="w-full h-48 object-cover rounded mb-3"
              />
              <div className="font-bold"> Mr. Megersa Amenu </div>
              <div>ICT and programming</div>
            </div>
          </div>
        </div>
      </section>
    );
  }