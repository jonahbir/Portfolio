export default function JourneySection() {
    const events = [
      {
        year: "2018-2022",
        text: "Quantum mechanics and basics of theoretical physics from expert books",
      },
      {
        year: "2021",
        text: " Web Development From Online Courses And Youtube Videos",
      },
      { year: "2022", text: " Robotics STEM Foka Center" },
      {
        year: "2023",
        text: "Basics of Algorithms and python from Addiscoder",
      },
      {
        year: "2024",
        text: "Algorithmic Problem Solving from leetcode and Codeforces",
      },
      {
        year: "2024",
        text: "App Development From Online Courses And Youtube Videos",
      },
      {
        year: "2025",
        text: "Further on Web-development drom INSA Cyber-Talent Center",
      },
    ];
  
    return (
      <section id="my-journey" className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-3xl font-bold text-teal-400 mb-10 text-center">
            Achievements / My Journey
          </div>
          <div className="space-y-6">
            {events.map((e) => (
              <div
                key={e.year + e.text}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 transition-all duration-300"
              >
                <div className="text-sm font-semibold text-teal-300 mb-2">
                  {e.year}
                </div>
                <h5 className="text-xl">{e.text}</h5>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            This timeline showcases my milestones in school, competitions, and
            projects.
          </div>
        </div>
      </section>
    );
  }