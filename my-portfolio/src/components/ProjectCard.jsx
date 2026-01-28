export default function ProjectCard({
    image,
    alt,
    githubUrl,
    githubLabel,
    liveUrl,
    liveLabel,
  }) {
    return (
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden transition-all duration-300">
        <img src={image} alt={alt} className="w-full h-40 object-cover" />
        <div className="p-4 flex flex-col gap-3">
          <div className="flex flex-wrap gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-all duration-300"
              >
                {githubLabel}
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-4 py-2 transition-all duration-300"
              >
                {liveLabel}
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }