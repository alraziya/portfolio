import React from "react";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-cyan-400 font-semibold tracking-[0.25em] uppercase text-sm mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Contact Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 text-center">
          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-8">
            Feel free to reach out for collaborations, project discussions, or
            any exciting opportunities in web development.
          </p>

          <div className="space-y-6">
            {/* Email */}
            <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-5 hover:border-cyan-400/40 transition-all">
              <p className="text-sm uppercase tracking-widest text-cyan-400 mb-1">
                Email
              </p>
              <a
                href="mailto:alraziyashahul@gmail.com"
                className="text-slate-200 hover:text-cyan-300 transition-colors break-all"
              >
                alraziyashahul@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-5 hover:border-purple-400/40 transition-all">
              <p className="text-sm uppercase tracking-widest text-purple-400 mb-1">
                Phone
              </p>
              <a
                href="tel:+900078789"
                className="text-slate-200 hover:text-purple-300 transition-colors"
              >
                +91 90007 8789
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}