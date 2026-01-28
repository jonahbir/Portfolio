export default function HeroSection() {
  return (
    <section className="hero-section flex flex-col md:flex-row min-h-screen items-center py-24 px-4 bg-gradient-to-r from-teal-600 via-blue-600 to-blue-900 text-white transition-all duration-300">
      <div className="flex-1 flex flex-col items-start justify-center md:items-start">
        <div className="text-xl mb-2">I'm</div>
        <h1 className="text-5xl md:text-6xl font-bold mb-3 opacity-0 animate-fadeIn">Yonas B. Heyi</h1>
        <h2 className="text-2xl md:text-3xl text-cyan-100 mb-5 opacity-0 animate-fadeInDelay">curious, creative, collaborative and courageous.</h2>
        <a href="#contact" className="bg-teal-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow transition-all duration-300 mt-4 font-bold">
          Contact Me
        </a>
      </div>
      <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
        <img src="/my-photo.jpg" alt="My photo" className="rounded-3xl max-w-xs shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer" />
      </div>
    </section>
  );
}
