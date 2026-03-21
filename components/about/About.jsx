import mehedi from "@/public/mehedi.jpeg";
import Image from "next/image";
import AboutAnimate from "./AboutAnimate";
import AboutHeader from "./AboutHeader";
import DownloadViewResume from "./DownloadViewResume";

const About = () => {
  return (
    <AboutAnimate>
      <div className="flex items-center justify-center flex-col-reverse sm:flex-row gap-16 pb-8">
        <div className="space-y-6">
          <AboutHeader />

          <p className="first-letter:text-4xl first-letter:sm:text-6xl first-letter:text-activeColor first-letter:leading-10 font-inter font-semibold leading-8 max-w-lg sm:text-start text-base text-center sm:mx-2 md:text-xl text-darkBlack dark:text-[#D0D0D0]">
            I&apos;m Md. Mehedi Hasan, a skilled Front-End Web Developer with
            expertise in JavaScript, React.js, Next.js, Tailwind CSS, Bootstrap,
            and more. I specialize in creating responsive, user-friendly
            websites with clean designs and seamless functionality. Whether you
            need a sleek business site or a dynamic web app, I deliver top-notch
            solutions tailored to your needs. Client satisfaction and quality
            are my priorities—let's bring your ideas to life!
          </p>

          <DownloadViewResume />
        </div>

        {/* image me */}
        <div className="mx-4">
          <Image
            src={mehedi}
            alt="mehedi image"
            className="sm:rounded-md rounded-full sm:h-96 sm:w-[280px] h-80 w-80 object-fill p-1 border-[2px] border-slate-200 dark:border-slate-600"
          />
        </div>
      </div>
    </AboutAnimate>
  );
};
export default About;
