import React from "react";

function Home() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div className="text-center md:text-left">

          {/* Small Heading */}
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
            Welcome To My Portfolio ✨
          </p>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-6">
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              Alraziya
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-200 mb-6">
            Aspiring Web Developer 🚀
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-300 leading-9 max-w-2xl mb-10">
            Passionate about creating modern, responsive, and user-friendly web
            applications. I enjoy learning new technologies and continuously
            improving my skills to become a successful IT Professional.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-5">

            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/30 transition duration-300"
            >
              Contact Me
            </a>

            <a
              href="#skills"
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-slate-200 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300"
            >
              View Skills
            </a>
          </div>

          {/* Small Info */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-12 text-slate-400">

            <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 backdrop-blur-lg">
              📍 Kattakada, Kerala
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 backdrop-blur-lg">
              🎓 Diploma Student
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-3 backdrop-blur-lg">
              💻 Frontend Learner
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center">

          <div className="relative group">

            {/* Animated Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 blur-3xl opacity-40 scale-110 group-hover:scale-125 transition duration-700"></div>

            {/* Circle Border */}
            <div className="relative p-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">

              {/* Profile Image */}
              <img
                src="/images/anime.jpg"
                alt="Alraziya"
                className="w-72 h-72 sm:w-96 sm:h-96 object-cover rounded-full border-4 border-slate-950 shadow-2xl hover:scale-105 transition duration-500"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-slate-900/80 border border-cyan-400/30 backdrop-blur-xl px-6 py-3 rounded-full shadow-lg">
              <p className="text-cyan-300 font-semibold">
                ✨ Web Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;