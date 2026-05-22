import React from "react";

function Skills() {
  const skills = [
    {
      name: "Python",
      icon: "🐍",
    },
    {
      name: "React",
      icon: "⚛️",
    },
    {
      name: "HTML",
      icon: "🌐",
    },
    {
      name: "CSS",
      icon: "🎨",
    },
    {
      name: "JavaScript",
      icon: "✨",
    },
    {
      name: "Tailwind CSS",
      icon: "💨",
    },
    {
      name: "Git & GitHub",
      icon: "🔗",
    },
    {
      name: "Responsive Design",
      icon: "📱",
    },
    {
      name: "Automation",
      icon: "🤖",
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            My Expertise
          </p>

          <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Main Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-8 sm:p-12 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">

          {/* Intro */}
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-5">
              Technical Skills 🚀
            </h3>

            <p className="text-slate-300 text-lg leading-9 max-w-3xl mx-auto">
              I continuously improve my technical and creative skills to build
              modern, responsive, and user-friendly applications. I enjoy
              learning new technologies and creating innovative projects.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-slate-900/60 border border-white/10 rounded-3xl p-6 text-center hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-500"
              >

                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300">
                  {skill.icon}
                </div>

                {/* Skill Name */}
                <h3 className="text-lg sm:text-xl font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Bottom Quote */}
          <div className="text-center mt-16">
            <p className="text-slate-400 italic text-xl">
              “Skills grow with practice and passion 💫”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;