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
} from "@/components";

const Home = () => {
  return (
    <div className="bg-white dark:bg-[#050816]">
      {/* toggleTheme={setTheme} isDarkMode={theme} isChecked={theme} */}
      <MyNavbar />
      {/* <ScrollSpy offsetTop={-50} scrollThrottle={10}> */}
      <Hero />
      <About />
      <WhatIDo />
      <Skills />
      <Projects />
      <Contact />
      <FAQs />
      {/* </ScrollSpy> */}
      <Footer />
    </div>
  );
};

export default Home;
