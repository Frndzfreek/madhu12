import { useState, useEffect, useRef } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { RolesAndActivities } from "./components/RolesAndActivities";
import { Contact } from "./components/Contact";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className={isDark ? "dark" : ""}>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          isDark
            ? "bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"
            : "bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"
        }`}
      >
        <Navigation isDark={isDark} setIsDark={setIsDark} />
        <Hero isDark={isDark} />
        <div
          className={`relative z-10 transition-colors duration-300 ${
            isDark
              ? "bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900"
              : "bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50"
          }`}
        >
          <About isDark={isDark} />
          <Education isDark={isDark} />
          <Skills isDark={isDark} />
          <Projects isDark={isDark} />
          <RolesAndActivities isDark={isDark} />
          <Contact isDark={isDark} />
        </div>
      </div>
    </div>
  );
}