import { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    image: "/dropout.jpg",
    alt: "Web Project 1",
    githubUrl:
      "https://github.com/INSATeam41/student-dropout-prediction-and-support-system",
    githubLabel: "github repo link",
  },
  {
    image: "/weather.jpg",
    alt: "Web Project 2",
    liveUrl: "https://weatherappyonas.netlify.app/",
    liveLabel: "Click here to watch",
  },
  {
    image: "/INSA.jpg",
    alt: "Web Project 3",
    githubUrl: "#",
    githubLabel: "Github Repo Link",
  },
];

export default function ProjectGallery() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="web-projects" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-3xl font-bold text-teal-400 mb-8 text-center">
          Web Projects
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p) => (
            <ProjectCard key={p.alt} {...p} />
          ))}
        </div>
        {!showAll && projects.length > 3 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2 transition-all duration-300"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}