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
  const [theme, setTheme] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  );

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
      <div className="bg-white dark:bg-[#2B2C2F]">
        <BrowserRouter>
          <MyNavbar
            toggleTheme={setTheme}
            isDarkMode={theme}
            isChecked={theme}
          />
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
