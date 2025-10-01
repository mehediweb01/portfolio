import { socialIcons } from "@/db";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="dark:bg-white/5 bg-black/5 border-t border-slate-300 dark:border-slate-600 rounded-t-3xl px-4 py-6 flex flex-col justify-center items-center gap-3">
      <div className="flex justify-center items-center gap-4 text-black dark:text-white">
        {socialIcons.map((item) => (
          <Link key={item.id} href={item.link} target="_blank">
            <item.icon className="socialIcon" />
          </Link>
        ))}
      </div>
      <div>
        <span className="font-poppins text-sm sm:text-xl text-center dark:text-white text-black">
          {new Date().getFullYear()} By _Md. Mehedi Hasan . All Right Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
