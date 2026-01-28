const certificates = [
    {
      img: "/addsicoder certificate.png",
      title: "Certificate of participation from addiscoder",
      text: "This certificate is given as a prove participation in one month addiscoder .",
    },
    {
      img: "/mootcourt certificate.png",
      title: "Certificate of participation",
      text: " I participated in Ethiopian Hghschool Students mootcourt compitation and secured first level at regional level.",
    },
    {
      img: "/ict club certificate.png",
      title: "Certificate of award",
      text: "I have been teaching students in ICT club for two consecutive years.",
    },
    {
      img: "/Anti-corruption certificate.jpeg",
      title: "Certificate from regional Anti-corruption Commission",
      text: "I have won oral compitation hosted by regional Ethics and Anti-corruption Commission.",
    },
    {
      img: "/sci-tech adama certificate.png",
      title: "Certificate of participation",
      text: "This certificate is prove of my continous contribution in science and technology club.",
    },
    {
      img: "/sci-tech.jpg",
      title: "Certificate of Appreciation",
      text: "This certificate is awarded to me in honor of my service as a leader of science and technology club.",
    },
    {
      img: "/STEM power .png",
      title: "Reccomendation letter",
      text: "I recieved this Reccomendation letter from STEMpower Foka.",
    },
    {
      img: "/ICPC Certificate.png",
      title: "Certificate of Appreciation",
      text: "THis certificate is awarded to me in honor of my contribution in coordinating ETCPC.",
    },
    {
      img: "/student-councel certificate.jpg",
      title: "Certificate of Appreciation",
      text: "This certificate is awarded to me in honor of my  two years leadership as student council .",
    },
    {
      img: "/Hand-book certificate.jpg",
      title: "Certificate of Award",
      text: "THis certificate is awarded to me for my useful research result.",
    },
    {
      img: "/BBO.jpeg",
      title: "Certificate of participation",
      text: "THis certificate is awarded to me for my participation in regional boarding Highschools festival as project host .",
    },
    {
      img: "/more yet to com.jpg",
      title: "More yet to come! ",
      text: "This certificate is ...",
    },
  ];
  
  export default function CertificatesSection() {
    return (
      <section id="certificates" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-3xl font-bold text-teal-400 mb-8 text-center">
            Certificates
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((c) => (
              <div
                key={c.title + c.img}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 transition-all duration-300"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <h5 className="font-semibold mb-1">{c.title}</h5>
                <p className="text-sm">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }