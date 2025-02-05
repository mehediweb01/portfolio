import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Switch,
} from "@heroui/react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { MoonIcon, SunIcon } from "./icons/icons";
const Items = [
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skills" },
  { name: "Project", href: "#Project" },
  { name: "Contact", href: "#Contact" },
];
const MyNavbar = ({ switchDarkMode, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <div className="sticky top-0 left-0 overflow-hidden z-50">
      <Navbar
        className={`bg-black/80 ${
          isDarkMode === "dark" && "border-b border-b-slate-500"
        }`}
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link to="#" className="hover:cursor-pointer">
              <img src="/logo.png" className="rounded-full size-12" alt="" />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4 " justify="center">
          <NavbarItem className={`flex gap-x-6`}>
            {Items.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`font-itim text-xl hover:text-activeColor tracking-wide ${
                  location.hash === item.href
                    ? "text-activeColor"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </NavbarItem>
        </NavbarContent>
        {/* right section/social icon */}
        <NavbarContent justify="end">
          {/* switch to dark/light mode */}
          <Switch
            color="secondary"
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <MoonIcon className={className} />
              ) : (
                <SunIcon className={className} />
              )
            }
            checked={isDarkMode === "dark"}
            onChange={switchDarkMode}
            size="lg"
          />
          {/* end */}
          <a
            className="text-white text-2xl hover:text-activeColor"
            href="https://github.com/mehediweb01"
            target="_blank"
          >
            <BsGithub />
          </a>
          <a
            className="text-white text-2xl hover:text-activeColor"
            href="https://www.linkedin.com/in/md-mehedi-hasan-90634424b/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="text-white text-2xl hover:text-activeColor"
            href="https://x.com/mehedihasan0937"
            target="_blank"
          >
            <BsTwitter />
          </a>
        </NavbarContent>
        {/* mobile menu */}
        <NavbarMenu className="bg-darkBlack">
          {Items.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className={`w-full font-itim text-xl ${
                  location.hash === item.href
                    ? "text-activeColor"
                    : "text-white"
                }`}
                to={item.href}
                size="lg"
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
