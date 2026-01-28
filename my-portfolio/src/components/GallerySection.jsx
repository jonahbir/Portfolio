export default function GallerySection() {
    const items = [
      {
        src: "/photos/jelani and I.jpg",
        caption: "Receiving award from Jelani Nelson",
      },
      {
        src: "/photos/teachingspark.jpg",
        caption: "Giving tutor at addiscoder spark",
      },
      {
        src: "/photos/Mootcourt.jpg",
        caption: "National Highschool students mootcourt compitation",
      },
      {
        src: "/photos/spark advert.jpg",
        caption: "Addiscoder spark poster",
      },
      {
        src: "/photos/cypher advert.jpg",
        caption: "Cypher Bootcamp poster",
      },
      {
        src: "/photos/graduation from highschool.jpg",
        caption: "Highschool Graduation",
      },
      {
        src: "/photos/students spark.jpg",
        caption: "My Students at Addiscoder spark summer camp",
      },
      {
        src: "/photos/mystudents.jpg",
        caption: "My students at cypher bootcamp",
      },
      {
        src: "/photos/awarded anti corruption.jpg",
        caption:
          "Receiving award for winning oral compitation prepared by Anti-corruption and Ethics Commission",
      },
      {
        src: "/photos/teaching spark2.jpg",
        caption: "Addiscoder spark",
      },
      {
        src: "/photos/mootcourt3.jpg",
        caption: "National Highschool students mootcourt compitation",
      },
      {
        src: "/photos/mystudents2.jpg",
        caption: "my students at cypher Bootcamp ",
      },
    ];
  
    return (
      <section id="gallery" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-3xl font-bold text-teal-400 mb-8 text-center">
            Gallery
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <div
                key={item.src}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 text-center">{item.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }