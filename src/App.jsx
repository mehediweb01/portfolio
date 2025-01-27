import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import WhatIDo from "./components/WhatIDo";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
  const darkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <>
      <div className="bg-white dark:bg-[#2B2C2F]">
        <BrowserRouter>
          <Navbar switchDarkMode={darkMode} isDarkMode={theme} />
          <div>
            <About />
            <WhatIDo />
            <Skills />
            <Contact />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
