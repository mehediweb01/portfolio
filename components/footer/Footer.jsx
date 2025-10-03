import { socialIcons } from "@/db";
import Link from "next/link";
import ButtonAnimation from "../common/ButtonAnimation";

const Footer = () => {
  return (
    <footer className="dark:bg-white/5 bg-black/5 border-t border-slate-300 dark:border-slate-600 rounded-t-3xl px-4 py-6 flex flex-col justify-center items-center gap-3">
      <div className="flex justify-center items-center gap-4 text-black dark:text-white">
        {socialIcons.map((item) => (
          <ButtonAnimation key={item.id}>
            <Link href={item.link} target="_blank">
              <item.icon className="socialIcon" />
            </Link>
          </ButtonAnimation>
        ))}
      </div>
      <div>
        <span className="font-poppins text-sm sm:text-xl text-center dark:text-white text-black">
          &copy; {new Date().getFullYear()} Md. Mehedi Hasan . All Right
          Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
