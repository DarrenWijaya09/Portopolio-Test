import React, { useState, useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experience";
import Testimonial from "./sections/Testimonial";
import Footer from "./sections/Footer";

import ThemeMaskTransition from "./components/PageTransition";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setAnimating(true);
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      {/* ✅ kirim theme & toggleTheme ke Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <div className="container mx-auto max-w-7xl">
        <Hero />
        <About />
        <Projects />
        <Experiences />
        {/* <Testimonial /> */}
        <Footer />
      </div>

      {animating && (
        <ThemeMaskTransition
          isDark={theme === "dark"}
          onThemeChange={() => setTheme(theme === "light" ? "dark" : "light")}
          onAnimationEnd={() => setAnimating(false)}
        />
      )}
    </>
  );
};

export default App;
