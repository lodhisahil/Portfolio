import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20">
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <p className="text-cyan-300 text-sm uppercase tracking-[0.3em]">
            Get to know me
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            About <span className="text-cyan-300">Me</span>
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Introduction Card */}
          <div className="rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-8 text-white">
            <h3 className="text-2xl font-semibold text-cyan-300 mb-5">
              Who I Am
            </h3>

            <p className="text-gray-300 leading-relaxed">
              I'm Sahil Lodhi, an Information Technology student and aspiring
              Full Stack Developer. I enjoy creating modern, responsive and
              user-friendly web applications.
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              I have a strong interest in frontend development and am
              continuously improving my skills in backend technologies,
              databases and problem-solving.
            </p>

            <p className="mt-4 text-gray-300 leading-relaxed">
              My goal is to build meaningful projects, learn new technologies
              and grow as a professional software developer.
            </p>
          </div>

          {/* Details Card */}
          <div className="rounded-3xl border border-cyan-200/20 bg-black/20 backdrop-blur-xl p-8 text-white">
            <h3 className="text-2xl font-semibold text-cyan-300 mb-6">
              My Journey
            </h3>

            <div className="space-y-5">
              <div>
                <p className="text-sm text-gray-400">Education</p>
                <p className="text-lg font-medium">
                  B.Tech in Information Technology
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Current Focus</p>
                <p className="text-lg font-medium">
                  React, Full Stack Development & DSA
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Interests</p>
                <p className="text-lg font-medium">
                  Web Development, Problem Solving & Technology
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Career Goal</p>
                <p className="text-lg font-medium">
                  Software Developer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Highlight */}
        <div className="mt-8 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-lg p-6 text-center">
          <p className="text-lg md:text-xl text-gray-200">
            “Learning every day, building every day.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;