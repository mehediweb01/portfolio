import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollSpy from "react-ui-scrollspy";
import {
  About,
  Contact,
  FAQs,
  Footer,
  Hero,
  MyNavbar,
  Projects,
  Skills,
  WhatIDo,
} from "./components";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      <div className="bg-white dark:bg-[#050816]">
        <BrowserRouter>
          <MyNavbar
            toggleTheme={setTheme}
            isDarkMode={theme}
            isChecked={theme}
          />
          <ScrollSpy offsetTop={-50} scrollThrottle={10}>
            <Hero />
            <About />
            <WhatIDo />
            <Skills />
            <Projects />
            <Contact />
            <FAQs />
          </ScrollSpy>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
