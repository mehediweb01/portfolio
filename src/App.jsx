import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";

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
      <div className="bg-white dark:bg-black">
        <BrowserRouter>
          <Navbar switchDarkMode={darkMode} isDarkMode={theme} />
          <About />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
