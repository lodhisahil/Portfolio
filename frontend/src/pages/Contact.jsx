import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen flex items-center px-6 md:px-12 lg:px-20 py-20">
      <div className="w-full max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-cyan-300 text-sm uppercase tracking-[0.3em]">
            Let's connect
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            Contact <span className="text-cyan-300">Me</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-300">
            Have a project idea or want to connect? Feel free to send me a
            message.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Contact Details */}
          <div className="rounded-3xl border border-white/15 bg-white/10 p-8 text-white backdrop-blur-xl">
            <h3 className="text-2xl font-semibold text-cyan-300">
              Get In Touch
            </h3>

            <p className="mt-5 leading-relaxed text-gray-300">
              I'm always open to discussing new projects, creative ideas and
              opportunities to learn and collaborate.
            </p>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href="mailto:your-email@example.com"
                  className="break-all text-gray-200 transition hover:text-cyan-300"
                >
                  your-email@example.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-gray-200">Jabalpur, Madhya Pradesh</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Availability</p>
                <p className="text-gray-200">
                  Open to internships and development opportunities
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:border-cyan-300/50 hover:text-cyan-300"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:border-cyan-300/50 hover:text-cyan-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-cyan-200/20 bg-black/20 p-8 backdrop-blur-xl"
          >
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-gray-400 focus:border-cyan-300"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-gray-400 focus:border-cyan-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  rows="5"
                  required
                  className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-gray-400 focus:border-cyan-300"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:bg-cyan-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;