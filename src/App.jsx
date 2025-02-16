import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ScrollSpy from "react-ui-scrollspy";
import {
  MyNavbar,
  About,
  Contact,
  FAQs,
  Footer,
  Projects,
  Skills,
  WhatIDo,
} from "./components";

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
          <MyNavbar switchDarkMode={darkMode} isDarkMode={theme} />
          <ScrollSpy offsetTop={-50} scrollThrottle={10}>
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
