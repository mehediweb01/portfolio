import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MyNavbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WhatIDo from "@/components/WhatIDo";

const Home = () => {
  return (
    <div className="bg-white dark:bg-[#050816]">
      <MyNavbar />
      <Hero />
      <About />
      <WhatIDo />
      <Skills />
      <Projects />
      <Contact />
      <FAQs />
      <Footer />
    </div>
  );
};

export default Home;
