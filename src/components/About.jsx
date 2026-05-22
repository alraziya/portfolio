import React from "react";

export function About() {
  return (
    <section className="relative py-24 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            Who Am I
          </p>

          <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Main Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-8 sm:p-12 shadow-2xl hover:scale-[1.01] transition duration-500">

          {/* Intro */}
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-5">
              Hi, I'm{" "}
              <span className="text-cyan-400">Alraziya</span> ✨
            </h3>

            <p className="text-slate-300 text-lg leading-9 max-w-3xl mx-auto">
              I am a passionate student from{" "}
              <span className="text-purple-400 font-semibold">
                Kattakada
              </span>{" "}
              who loves technology, creativity, and learning new things every
              day.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Education */}
            <div className="bg-slate-900/60 border border-cyan-500/20 rounded-2xl p-6 hover:-translate-y-2 transition duration-500 shadow-lg">
              <div className="text-4xl mb-4">🎓</div>

              <h4 className="text-2xl font-bold mb-3 text-cyan-300">
                Education
              </h4>

              <p className="text-slate-300 leading-8">
                Completed my 10th and Higher Secondary education.
                Currently pursuing a Diploma.
              </p>
            </div>

            {/* Skills */}
            <div className="bg-slate-900/60 border border-purple-500/20 rounded-2xl p-6 hover:-translate-y-2 transition duration-500 shadow-lg">
              <div className="text-4xl mb-4">💻</div>

              <h4 className="text-2xl font-bold mb-3 text-purple-300">
                Skills
              </h4>

              <p className="text-slate-300 leading-8">
                Completed an Automation Course and continuously improving my
                technical and creative skills.
              </p>
            </div>

            {/* Goal */}
            <div className="bg-slate-900/60 border border-pink-500/20 rounded-2xl p-6 hover:-translate-y-2 transition duration-500 shadow-lg">
              <div className="text-4xl mb-4">🚀</div>

              <h4 className="text-2xl font-bold mb-3 text-pink-300">
                My Goal
              </h4>

              <p className="text-slate-300 leading-8">
                My goal is to become a successful IT Professional and build
                creative projects using modern technologies.
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 text-center">
            <p className="text-xl italic text-slate-400">
              “Learning never stops 🚀”
            </p>

            <p className="mt-4 text-cyan-400 font-medium">
              📍 Kattakada, Kerala
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}