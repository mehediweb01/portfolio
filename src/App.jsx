import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import WhatIDo from "./components/WhatIDo";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import { RingLoader } from "react-spinners";

function App() {
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const darkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center h-screen bg-black/95">
          <RingLoader color="#3499ee" size={130} />
        </div>
      ) : (
        <div className="bg-white dark:bg-[#2B2C2F]">
          <BrowserRouter>
            <Navbar switchDarkMode={darkMode} isDarkMode={theme} />
            <div>
              <About />
              <WhatIDo />
              <Skills />
              <Projects />
              <Contact />
              <FAQs />
            </div>
            <Footer />
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
