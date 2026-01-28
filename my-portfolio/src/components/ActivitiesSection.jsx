export default function ActivitiesSection() {
    const activities = [
      "Mini-Media Club: coordinator",
      "ICT Club: Leader",
      "Anti-Corruption Commission: participant",
      "Moot Court: leadership role",
      "Science and Technology CLub: Leader",
      "Robotics at Foka Center: Participant",
      "Addiscoder: Participant",
      "Space-Science Club : Leader",
      "charity Club : Volunteer ",
    ];
  
    return (
      <section id="major-activities" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-3xl font-bold text-teal-400 mb-8 text-center">
            Major Activities during High School
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activities.map((text) => (
              <div
                key={text}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-4 transition-all duration-300"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }