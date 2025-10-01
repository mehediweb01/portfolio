import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import FAQs from "@/components/faqs/FAQs";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import MyNavbar from "@/components/navbar/Navbar";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import WhatIDo from "@/components/whatIdo/WhatIDo";

const Home = () => {
  return (
    <div className="bg-slate-100 dark:bg-[#050816]">
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
