export default function BookSection() {
    return (
      <section id="book" className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-3xl font-bold text-teal-400 mb-6">Book</div>
          <div className="mb-4">
            Download my book written in Afan Oromo.
          </div>
          <div className="flex justify-center">
            <a
              href="/book.pdf"
              download="Your_Book_Name"
              className="cursor-pointer transition-all duration-300 inline-block"
            >
              <img
                src="/cover page book.png"
                alt="Book cover"
                className="w-64 rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                style={{ cursor: "pointer" }}
              />
            </a>
          </div>
        </div>
      </section>
    );
  }