export default function SkillsSection() {
    const skills = [
      { label: "HTML", percent: 95 },
      { label: "CSS", percent: 90 },
      { label: "JavaScript", percent: 75 },
      { label: "Python", percent: 95 },
      { label: "c++", percent: 85 },
      { label: "React", percent: 90 },
      { label: "Thailwind", percent: 84 },
      { label: "Golang", percent: 80 },
    ];
  
    return (
      <section id="skills" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-3xl font-bold text-teal-400 mb-8 text-center">
            Skills
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              {skills.map((s) => (
                <div key={s.label}>
                  <div className="mb-1">{s.label}</div>
                  <div className="w-full bg-white/10 rounded-full h-5 overflow-hidden">
                    <div
                      className="h-5 bg-teal-500 text-xs flex items-center justify-center transition-all duration-300"
                      style={{ width: `${s.percent}%` }}
                    >
                      {s.percent}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-lg">
              My diverse skill set in development and design allows me to bridge
              technology and creativity, delivering robust solutions with aesthetic
              flair. Whether coding dynamic interfaces or crafting digital art, I
              thrive on learning and creating value.
            </div>
          </div>
        </div>
      </section>
    );
  }