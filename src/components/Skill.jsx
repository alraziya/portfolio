import React from "react";

function Skills() {
  const skills = [
    "Python",
    "React",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Git",
    "Responsive Design",
  ];

  return (
    <section
      id="skills"
      className="relative py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-semibold tracking-[0.25em] uppercase text-sm mb-3">
            My Expertise
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
          <p className="text-center text-slate-300 text-lg mb-10 max-w-3xl mx-auto leading-8">
            I continuously develop my technical skills to build modern,
            responsive, and user-friendly web applications.
          </p>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-slate-900/60 border border-white/10 rounded-2xl px-4 py-4 text-center font-medium text-slate-200 hover:border-cyan-400/40 hover:text-cyan-300 hover:-translate-y-1 transition-all duration-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;