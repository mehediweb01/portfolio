import About from "@/components/about/About";
import AboutNavbar from "@/components/about/about-nav/AboutNavbar";
import Education from "@/components/about/education/Education";
import Expertise from "@/components/about/Expertise/Expertise";

const AboutPage = async ({ searchParams }) => {
  const { section = "about-me" } = await searchParams;

  return (
    <section className="md:flex">
      <aside className="hidden md:fixed md:top-0 md:left-0 md:flex md:h-screen md:w-[15%] md:items-center md:justify-center">
        <AboutNavbar section={section} />
      </aside>

      <div className="sticky top-20 z-40 border-b backdrop-blur md:hidden">
        <AboutNavbar section={section} />
      </div>

      <main className="md:ml-[15%] md:w-[85%] flex-1 md:flex">
        <div className="hidden md:block w-px min-h-screen bg-sky-400/45 mx-6 rounded-full" />

        <div className="flex-1 px-4 py-6 lg:px-6 md:px-0">
          {section === "about-me" && <About />}
          {section === "education" && <Education />}
          {section === "expertise" && <Expertise />}
        </div>
      </main>
    </section>
  );
};

export default AboutPage;
