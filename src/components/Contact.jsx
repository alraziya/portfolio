import React from "react";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold mb-3">
            Get In Touch
          </p>

          <h2 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Contact Me
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Main Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[2rem] p-8 sm:p-12 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">

          {/* Intro */}
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold mb-5">
              Let’s Connect ✨
            </h3>

            <p className="text-slate-300 text-lg leading-9 max-w-3xl mx-auto">
              Feel free to contact me for collaborations, project discussions,
              web development works, or exciting opportunities. I would love to
              connect and work on creative ideas together.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Email Card */}
            <div className="bg-slate-900/60 border border-cyan-500/20 rounded-3xl p-8 hover:-translate-y-2 hover:border-cyan-400/40 transition duration-500 shadow-lg text-center">

              <div className="text-5xl mb-5">📧</div>

              <p className="text-cyan-400 uppercase tracking-widest text-sm mb-3">
                Email Address
              </p>

              <a
                href="mailto:alraziyashahul@gmail.com"
                className="text-lg sm:text-xl font-semibold text-slate-200 hover:text-cyan-300 transition-colors break-all"
              >
                alraziyashahul@gmail.com
              </a>

              <p className="text-slate-400 mt-4 text-sm">
                Send me an email anytime ✨
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-slate-900/60 border border-purple-500/20 rounded-3xl p-8 hover:-translate-y-2 hover:border-purple-400/40 transition duration-500 shadow-lg text-center">

              <div className="text-5xl mb-5">📱</div>

              <p className="text-purple-400 uppercase tracking-widest text-sm mb-3">
                Phone Number
              </p>

              <a
                href="tel:+91900078789"
                className="text-lg sm:text-xl font-semibold text-slate-200 hover:text-purple-300 transition-colors"
              >
                +91 90007 8789
              </a>

              <p className="text-slate-400 mt-4 text-sm">
                Available for communication 🚀
              </p>
            </div>
          </div>

          {/* Bottom Quote */}
          <div className="text-center mt-14">
            <p className="text-xl italic text-slate-400">
              “Great ideas start with a simple conversation 💫”
            </p>

            <p className="mt-5 text-cyan-400 font-medium text-lg">
              📍 Kattakada, Kerala
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}