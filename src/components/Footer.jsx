import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-darkBlack/95 px-4 py-6 flex flex-col justify-center items-center gap-3">
      <div className="flex justify-center items-center gap-4 text-white">
        <a href="https://www.facebook.com/mehediwebdesigner" target="_blank">
          <FaFacebook className="size-8 hover:text-sky-400 transition-all duration-300 " />
        </a>
        <a href="https://www.instagram.com/mehedihasan0938/" target="_blank">
          <FaInstagram className="size-8 hover:text-sky-400 transition-all duration-300 " />
        </a>
        <a
          href="https://www.linkedin.com/in/md-mehedi-hasan-90634424b/"
          target="_blank"
        >
          <CiLinkedin className="size-8 hover:text-sky-400 transition-all duration-300 " />
        </a>
        <a href="https://x.com/mehedihasan0937" target="_blank">
          <FaTwitter className="size-8 hover:text-sky-400 transition-all duration-300 " />
        </a>
        <a href="https://github.com/mehediweb01" target="_blank">
          <FaGithub className="size-8 hover:text-sky-400 transition-all duration-300 " />
        </a>
      </div>
      <div>
        <span className="font-itim text-sm sm:text-xl text-center text-white">
          {new Date().getFullYear()} By _Md. Mehedi Hasan . All Right Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
