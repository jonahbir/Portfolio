const books = [
    {
      img: "/universe in nut.jpg",
      title: "The universe in a Nutshell",
      text: "The universe looks simple, but its rules are deeply strange.",
    },
    {
      img: "/algorithm design.jpg",
      title: "Algorithm Design",
      text: " How to think, design, and analyze algorithms for real problems.",
    },
    {
      img: "/feynman's lecture.jpg",
      title: "The feynman Lecture On Physics",
      text: "Physics is the art of explaining things with precise rules discovered through careful questioning..",
    },
    {
      img: "/quantum info.jpg",
      title: "Quantum computation and Quantum Information",
      text: " when information follows laws of quantum, computation gains new powers.",
    },
    {
      img: "/the brain.jpg",
      title: "The Brain,The story of you",
      text: " You are what your brain’s connections do.",
    },
    {
      img: "/7 habits.jpg",
      title: "The 7 Habits of Highly Effective People",
      text: " Focus on principles and habits that make people productive, proactive, and successful.",
    },
    {
      img: "/quantum computer science.jpg",
      title: "Quantum Computer Science",
      text: " How quantum mechanics changes what and how we can compute.",
    },
    {
      img: "/Quantum since democritus.jpg",
      title: "Quantum Computing Since Democritus",
      text: " Explores quantum computing, math, and the nature of reality.",
    },
    {
      img: "/manymore.jpg",
      title: "And others",
      text: " Many more books are not mentioned here!",
    },
  ];
  
  export default function BooksReadSection() {
    return (
      <section id="books-read" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-3xl font-bold text-teal-400 mb-8 text-center">
            Books I Read
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {books.map((b) => (
              <div
                key={b.title}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 text-center transition-all duration-300"
              >
                <img
                  src={b.img}
                  alt={b.title}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <h5 className="font-semibold mb-2">{b.title}</h5>
                <p className="text-sm">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }