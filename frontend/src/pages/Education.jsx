import React from "react";

const educationData = [
  {
    year: "2023 – 2027",
    degree: "B.Tech in Information Technology",
    institute: "Jabalpur Engineering College",
    description:
      "Currently pursuing B.Tech in Information Technology with a focus on web development, programming, databases and problem-solving.",
  },
  {
    year: "Class 12",
    degree: "Higher Secondary Education",
    institute: "Your School Name",
    description:
      "Completed higher secondary education with a focus on science and technical subjects.",
  },
  {
    year: "Class 10",
    degree: "Secondary Education",
    institute: "Your School Name",
    description:
      "Completed secondary education and developed an interest in computers and technology.",
  },
];

const Education = () => {
  return (
    <div className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20">
      <div className="w-full max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-cyan-300 text-sm uppercase tracking-[0.3em]">
            My academic journey
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            My <span className="text-cyan-300">Education</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-300">
            My educational background and the journey that shaped my technical
            interests.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-cyan-300/30 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {educationData.map((education, index) => (
              <div
                key={education.year}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-300 shadow-[0_0_15px_rgba(103,232,249,0.8)] md:left-1/2" />

                {/* Education Card */}
                <div className="ml-10 w-[calc(100%-2.5rem)] rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 md:ml-0 md:w-[44%]">
                  <span className="text-sm font-semibold tracking-wider text-cyan-300">
                    {education.year}
                  </span>

                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {education.degree}
                  </h3>

                  <p className="mt-2 text-gray-200">
                    {education.institute}
                  </p>

                  <p className="mt-4 leading-relaxed text-gray-300">
                    {education.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;