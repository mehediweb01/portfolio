import { CiLinkedin } from "react-icons/ci";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="dark:bg-white/5 bg-black/5 border-t border-slate-300 dark:border-slate-600 rounded-t-3xl px-4 py-6 flex flex-col justify-center items-center gap-3">
      <div className="flex justify-center items-center gap-4 text-black dark:text-white">
        <a href="https://www.facebook.com/mehediweb01" target="_blank">
          <FaFacebook className="size-8 hover:text-sky-400 transition-all duration-300 " />
        </a>
        <a href="https://www.instagram.com/mehediweb01/" target="_blank">
          <FaInstagram className="size-8 hover:text-sky-400 transition-all duration-300 " />
        </a>
        <a href="https://www.linkedin.com/in/mehediweb01/" target="_blank">
          <CiLinkedin className="size-8 hover:text-sky-400 transition-all duration-300 " />
        </a>
        <a href="https://x.com/mehediweb01" target="_blank">
          <FaTwitter className="size-8 hover:text-sky-400 transition-all duration-300 " />
        </a>
        <a href="https://github.com/mehediweb01" target="_blank">
          <FaGithub className="size-8 hover:text-sky-400 transition-all duration-300 " />
        </a>
      </div>
      <div>
        <span className="font-itim text-sm sm:text-xl text-center dark:text-white text-black">
          {new Date().getFullYear()} By _Md. Mehedi Hasan . All Right Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
