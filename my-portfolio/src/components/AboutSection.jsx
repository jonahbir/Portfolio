export default function AboutSection() {
  return (
    <section id="about-me" className="about-section py-20 bg-midnight transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex flex-col items-center">
            <img src="/laptop.jpg" alt="Thinking at laptop" className="w-80 h-64 object-cover rounded-xl mb-6 img-hover-zoom shadow-lg" />
            <div className="flex gap-2 mt-2 flex-wrap justify-center">
              <img src="/addsicoder certificate.png" alt="AddisCoder Certificate" className="w-20 h-14 rounded shadow-md bg-white/50" />
              <img src="/mootcourt certificate.png" alt="Moot Court Certificate" className="w-20 h-14 rounded shadow-md bg-white/50" />
              <img src="/STEM power .png" alt="STEM Power Certificate" className="w-20 h-14 rounded shadow-md bg-white/50" />
            </div>
          </div>
          <div className="flex-1 ">
            <div className="text-3xl font-bold text-teal-400 mb-6 text-center md:text-left">About Me</div>
            <p className="text-lg mb-4">Welcome to my portfolio. I am Yonas Birhanu, a graduate of the Oromia Development Association (ODA) Special Boarding School. I am a student driven by the intersection of theoretical physics and computational logic. My ultimate goal is to contribute to the upcoming revolution in Quantum Computing, a field that represents the perfect synergy of my passions.</p>
            {/* Modal trigger could go here if desired */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="fact-card flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow mb-4 transition-all duration-300">
                <span className="text-2xl font-bold text-teal-300">15+</span>
                <p className="">Achievements</p>
              </div>
              <div className="fact-card flex flex-col items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6 shadow mb-4 transition-all duration-300">
                <span className="text-2xl font-bold text-teal-300">1</span>
                <p>Published Book</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
