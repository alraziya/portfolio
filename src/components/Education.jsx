import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="relative py-24 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold tracking-[0.3em] uppercase text-sm mb-3">
            My Academic Journey
          </p>

          <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-cyan-500/30 pl-8 space-y-10">

          {/* 10th */}
          <div className="relative group">
            <div className="absolute -left-[42px] top-3 w-5 h-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"></div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-500">
              <p className="text-cyan-400 text-sm uppercase tracking-widest mb-2">
                School Education
              </p>

              <h3 className="text-2xl font-bold mb-3">
                10th Standard
              </h3>

              <p className="text-slate-300 leading-8 text-lg">
                Successfully completed my 10th standard and started building my
                interest in technology and creative learning.
              </p>
            </div>
          </div>

          {/* Higher Secondary */}
          <div className="relative group">
            <div className="absolute -left-[42px] top-3 w-5 h-5 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50"></div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:border-purple-400/40 hover:-translate-y-1 transition-all duration-500">
              <p className="text-purple-400 text-sm uppercase tracking-widest mb-2">
                Higher Secondary
              </p>

              <h3 className="text-2xl font-bold mb-3">
                Plus Two Education
              </h3>

              <p className="text-slate-300 leading-8 text-lg">
                Completed my Higher Secondary studies and improved my knowledge,
                communication, and technical interests.
              </p>
            </div>
          </div>

          {/* Diploma */}
          <div className="relative group">
            <div className="absolute -left-[42px] top-3 w-5 h-5 rounded-full bg-pink-400 shadow-lg shadow-pink-400/50"></div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:border-pink-400/40 hover:-translate-y-1 transition-all duration-500">
              <p className="text-pink-400 text-sm uppercase tracking-widest mb-2">
                Current Education
              </p>

              <h3 className="text-2xl font-bold mb-3">
                Polytechnic Diploma
              </h3>

              <p className="text-slate-300 leading-8 text-lg">
                Currently pursuing my Polytechnic Diploma at{" "}
                <span className="text-cyan-400 font-semibold">
                  Kaimanam
                </span>
                , where I am developing my technical skills and learning modern
                technologies.
              </p>
            </div>
          </div>

          {/* Automation Course */}
          <div className="relative group">
            <div className="absolute -left-[42px] top-3 w-5 h-5 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50"></div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:border-yellow-400/40 hover:-translate-y-1 transition-all duration-500">
              <p className="text-yellow-400 text-sm uppercase tracking-widest mb-2">
                Extra Course
              </p>

              <h3 className="text-2xl font-bold mb-3">
                Automation Course
              </h3>

              <p className="text-slate-300 leading-8 text-lg">
                Completed an Automation Course to improve my practical knowledge
                and technical abilities in modern systems and technologies.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-16">
          <p className="text-slate-400 italic text-xl">
            “Education is the foundation for a bright future ✨”
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;