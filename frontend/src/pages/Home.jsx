import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-start px-6 md:px-12 lg:px-20">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-16">

        {/* Left Content */}
        <div className="w-full md:w-[42%] rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-8 md:p-10 text-white">
          <p className="text-cyan-300 text-sm tracking-[0.3em] uppercase mb-4">
            Welcome to my portfolio
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-cyan-300">Sahil Lodhi</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-200 mt-5">
            Full Stack Developer
          </h2>

          <p className="text-gray-300 mt-6 leading-relaxed">
            I build modern, responsive and user-friendly web applications
            using React, JavaScript, Node.js and modern web technologies.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300 hover:scale-105"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white transition hover:bg-white/20 hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Center Space */}
        <div className="hidden md:block flex-1" />

        {/* Right Content */}
        <div className="w-full md:w-[32%] rounded-3xl border border-white/15 bg-white/10 backdrop-blur-xl p-8 text-center text-white">
          <div className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-cyan-200/30 bg-white/10 text-4xl">
            🚀
          </div>

          <h3 className="text-2xl font-semibold">
            Building Digital Experiences
          </h3>

          <p className="mt-4 text-gray-300 leading-relaxed">
            Turning ideas into clean, functional and interactive websites.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-cyan-200">
              React
            </span>

            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-cyan-200">
              JavaScript
            </span>

            <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-cyan-200">
              Tailwind
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;