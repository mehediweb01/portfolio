import { Header } from "../common/Header";
import AboutAnimate from "./AboutAnimate";
import AboutHeader from "./AboutHeader";
import BackgroundGlow from "./BackgroundGlow";
import Dot from "./Dot";
import FloatingResumeCard from "./FloatingResumeCard";
import FloatingSkill from "./FloatingSkill";
import ImageCard from "./ImageCard";

const About = () => {
  return (
    <AboutAnimate>
      <div className="flex items-center justify-center flex-col-reverse sm:flex-row gap-16 pb-8">
        <div className="space-y-6">
          <div className="mb-4">
            <Header className="dark:text-white text-black">About Me</Header>
          </div>

          <div className="mt-12">
            <AboutHeader />
          </div>

          <p className="first-letter:text-4xl first-letter:sm:text-6xl first-letter:text-activeColor first-letter:leading-10 font-inter font-semibold leading-8 max-w-lg sm:text-start text-base text-center sm:mx-2 md:text-xl text-darkBlack dark:text-[#D0D0D0]">
            I&apos;m Md. Mehedi Hasan, a skilled Front-End Web Developer with
            expertise in JavaScript, React.js, Next.js, Tailwind CSS, Bootstrap,
            and more. I specialize in creating responsive, user-friendly
            websites with clean designs and seamless functionality. Whether you
            need a sleek business site or a dynamic web app, I deliver top-notch
            solutions tailored to your needs. I enjoy building responsive,
            accessible, and high-performance web applications with a strong
            focus on clean code and user experience.
          </p>
        </div>

        {/* image me */}
        <div className="relative flex justify-center">
          <BackgroundGlow />
          <ImageCard />
          <FloatingResumeCard />
          <FloatingSkill />
          <div className="sm:block hidden">
            <Dot />
          </div>
        </div>
      </div>
    </AboutAnimate>
  );
};
export default About;
