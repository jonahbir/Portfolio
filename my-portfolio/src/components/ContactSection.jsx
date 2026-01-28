export default function ContactSection() {
    return (
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-3xl font-bold text-teal-400 mb-8">Contact</div>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <a
              href="mailto:yonahbirhanu@gmail.com"
              title="Email"
              className="bg-white text-black rounded-lg px-4 py-2 shadow transition-all duration-300"
            >
              yonahbirhanu@gmail.com
            </a>
            <a
              href="https://t.me/Daremighty_things"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
              className="bg-white text-black rounded-lg px-4 py-2 shadow transition-all duration-300"
            >
              Yonas Birhanu
            </a>
            <a
              href="https://instagram.com/jonahbirhanu"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="bg-white text-black rounded-lg px-4 py-2 shadow transition-all duration-300"
            >
              Yonas_Bi
            </a>
            <a
              href="https://wa.me/+251993399972"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className="bg-white text-black rounded-lg px-4 py-2 shadow transition-all duration-300"
            >
              jonah birhanu
            </a>
          </div>
        </div>
      </section>
    );
  }