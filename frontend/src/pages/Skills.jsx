import React from "react";

const skillGroups = [
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Appwrite", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "PostGIS"],
  },
  {
    title: "Programming & Tools",
    skills: ["C++", "DSA", "Git", "GitHub", "Vite", "Vercel"],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20">
      <div className="w-full max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-cyan-300 text-sm uppercase tracking-[0.3em]">
            My technical abilities
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            My <span className="text-cyan-300">Skills</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-300">
            Technologies and tools I use to build modern, responsive and
            functional applications.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-6 text-white transition duration-300 hover:-translate-y-2 hover:border-cyan-300/50 hover:bg-white/15"
            >
              <h3 className="text-xl font-semibold text-cyan-300">
                {group.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/20 bg-black/20 px-3 py-2 text-sm text-gray-200 transition hover:border-cyan-300/60 hover:text-cyan-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-8 rounded-3xl border border-cyan-200/20 bg-black/20 backdrop-blur-xl p-6 text-center">
          <p className="text-gray-300">
            Continuously learning, improving and exploring new technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;