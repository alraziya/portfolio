
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { About } from "./components/About";
import Skills from "./components/Skill";
import Education from "./components/Education";
import { Contact } from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="bg-slate-950 text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Home Section */}
      <Home />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}

export default App;