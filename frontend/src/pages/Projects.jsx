import React from "react";

const projects = [
  {
    title: "Dahej.com",
    description:
      "A location-based social safety platform designed to provide emergency alerts, public assistance and community-focused features.",
    technologies: ["React", "Tailwind CSS", "Appwrite", "Maps API"],
    image: "/projects/dahej.png",
    liveLink: "https://dahej-com-2dav.vercel.app/",
    githubLink: "https://github.com/lodhisahil/Dahej.com",
  },
  {
    title: "Forever E-Commerce",
    description:
      "A modern e-commerce website with a responsive interface, product browsing and a smooth shopping experience.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Appwrite"],
    image: "/projects/forever.png",
    liveLink: "https://forever-ecommerce-website-pearl.vercel.app/",
    githubLink: "https://github.com/lodhisahil/Forever-Ecommerce-website",
  },
  {
    title: "Blog Application",
    description:
      "A full-featured blog application where users can create, read and manage blog posts with authentication.",
    technologies: ["React", "Appwrite", "JavaScript", "Tailwind CSS"],
    image: "/projects/megablog.png",
    liveLink: "https://blog-application-eta-two.vercel.app/",
    githubLink: "https://github.com/lodhisahil/Blog-Application",
  },
  {
    title: "Social Post Application",
    description:
      "A full-stack social post application where users can create, share, update and manage posts with a responsive and user-friendly interface.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Appwrite"],
    image: "/projects/socialpost.png",
    liveLink: "https://social-post-application-five.vercel.app/",
    githubLink: "https://github.com/lodhisahil/Social-Post-Application",
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
              <div className="h-56 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
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
                  target="_blank"
                  className="rounded-xl bg-cyan-400 px-5 py-2.5 font-semibold text-black transition hover:bg-cyan-300"
                >
                  Live Demo
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
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
