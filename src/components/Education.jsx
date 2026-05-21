import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="relative py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-semibold tracking-[0.25em] uppercase text-sm mb-3">
            My Academic Journey
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Education Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
          <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition-all">
            <p className="text-sm uppercase tracking-widest text-cyan-400 mb-2">
              Current Education
            </p>

            <h3 className="text-2xl font-bold text-white mb-3">
              Polytechnic Diploma
            </h3>

            <p className="text-slate-300 leading-8 text-lg">
              Currently pursuing my Polytechnic studies at{" "}
              <span className="text-purple-400 font-semibold">Kaimanam</span>,
              where I am building a strong foundation in technology and software
              development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;