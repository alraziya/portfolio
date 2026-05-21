import React from "react";

export function About() {
  return (
    <section className="relative py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-semibold tracking-[0.25em] uppercase text-sm mb-3">
            Get to Know Me
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Content Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
          <p className="text-lg sm:text-xl leading-9 text-slate-300 text-center max-w-3xl mx-auto">
            Hi, I'm{" "}
            <span className="font-bold text-cyan-400">Alraziya</span> from{" "}
            <span className="font-semibold text-purple-400">kattakada</span>.
            <br className="hidden sm:block" />
            <br />
            My goal is to continuously improve my technical skills and grow into
            a successful{" "}
            <span className="font-semibold text-cyan-300">
              IT Professional
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}