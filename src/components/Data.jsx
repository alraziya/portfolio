import React from "react";

function Data() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden relative"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <div className="text-center md:text-left">
          <p className="text-cyan-400 font-semibold tracking-[0.3em] uppercase text-sm mb-4">
            Welcome to My Portfolio
          </p>

          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-6">
            Hey, I am{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Alraziya
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-200 mb-6">
            Aspiring Web Developer
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 leading-8 max-w-2xl mb-10">
            Passionate about building modern, responsive, and user-friendly web
            applications. Continuously improving my technical skills to become a
            successful IT professional.
          </p>

          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300"
            >
              Contact Me
            </a>

            <a
              href="#skills"
              className="px-8 py-3 rounded-full border border-white/20 text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300"
            >
              View Skills
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Glow Behind Image */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 blur-2xl opacity-30 scale-110"></div>

            {/* Profile Image */}
            <img
              src="/anime.jpg"
              alt="Alraziya"
              className="relative w-72 h-72 sm:w-96 sm:h-96 object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Data;