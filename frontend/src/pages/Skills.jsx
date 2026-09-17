import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiAppwrite,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiCplusplus,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Appwrite", icon: SiAppwrite },
      { name: "REST API", icon: SiExpress },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "Programming & Tools",
    skills: [
      { name: "C++", icon: SiCplusplus },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscVscode },
      { name: "Postman", icon: SiPostman },
      { name: "Vercel", icon: SiVercel },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="px-5 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-cyan-300">
            My Expertise
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Skills & <span className="text-cyan-300">Technologies</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Technologies and tools I use to build modern, responsive and
            scalable web applications.
          </p>
        </div>

        {/* Four Skill Rectangles */}
        <div className="space-y-6">
          {skillGroups.map((group, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={group.title}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-lg backdrop-blur-xl transition duration-300 hover:border-cyan-300/40 hover:bg-white/10 md:p-8"
              >
                <div
                  className={`flex flex-col gap-8 md:flex-row md:items-center md:justify-between ${
                    isReversed ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Large Category Heading */}
                  <div className="shrink-0 md:w-[35%]">
                    <h3 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                      {group.title}
                    </h3>
                  </div>

                  {/* Technologies */}
                  <div
                    className={`flex flex-1 flex-wrap gap-3 ${
                      isReversed ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {group.skills.map((skill) => {
                      const Icon = skill.icon;

                      return (
                        <div
                          key={skill.name}
                          className="flex items-center gap-3 rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-gray-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/60 hover:bg-cyan-300/10"
                        >
                          <Icon className="text-2xl text-cyan-300" />

                          <span className="whitespace-nowrap text-sm font-medium">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
