import React from "react";

const projects = [
  {
    title: "Dahej.com",
    description:
      "A location-based social safety platform designed to provide emergency alerts, public assistance and community-focused features.",
    technologies: ["React", "Tailwind CSS", "Appwrite", "Maps API"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Forever E-Commerce",
    description:
      "A modern e-commerce website with a responsive interface, product browsing and a smooth shopping experience.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Appwrite"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Blog Application",
    description:
      "A full-featured blog application where users can create, read and manage blog posts with authentication.",
    technologies: ["React", "Appwrite", "JavaScript", "Tailwind CSS"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "School Website",
    description:
      "A responsive school website presenting information about courses, facilities, activities and contact details.",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveLink: "#",
    githubLink: "#",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20">
      <div className="w-full max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-cyan-300 text-sm uppercase tracking-[0.3em]">
            My recent work
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-cyan-300">Projects</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-300">
            A collection of projects I have built while learning and exploring
            modern web development.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-7 text-white transition duration-300 hover:-translate-y-2 hover:border-cyan-300/50 hover:bg-white/15"
            >
              {/* Project Preview Placeholder */}
              <div className="flex h-40 items-center justify-center rounded-2xl border border-white/10 bg-black/20">
                <span className="text-5xl text-cyan-300">{"</>"}</span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-cyan-300">
                {project.title}
              </h3>

              <p className="mt-4 leading-relaxed text-gray-300">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-sm text-gray-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={project.liveLink}
                  className="rounded-xl bg-cyan-400 px-5 py-2.5 font-semibold text-black transition hover:bg-cyan-300"
                >
                  Live Demo
                </a>

                <a
                  href={project.githubLink}
                  className="rounded-xl border border-white/25 bg-white/10 px-5 py-2.5 font-semibold text-white transition hover:bg-white/20"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;