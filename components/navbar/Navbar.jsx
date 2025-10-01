import { Items } from "@/db";
import Link from "next/link";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SocialIcons from "./SocialIcons";
import ToggleButton from "./ToggleButton";

const MyNavbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-zinc-600/70 border-b border-slate-50 dark:bg-black/80 dark:border-slate-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-2">
        <Logo />
        <nav className="hidden sm:flex gap-6">
          {Items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-white font-inter text-lg hover:text-yellow-400 transition tracking-[1px]"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ToggleButton />
          <SocialIcons />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default MyNavbar;
