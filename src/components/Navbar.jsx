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
import { MoonIcon, SunIcon } from "./icons/icons";
import { useLocation } from "react-router-dom";
import { Items } from "../db";

const MyNavbar = ({ toggleTheme, isDarkMode, isChecked }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const location = useLocation();
  return (
    <div className="nav sticky top-0 left-0 overflow-hidden z-50">
      <Navbar
        className={`bg-black/80 mainNav ${
          isDarkMode === "dark" && "border-b border-b-slate-500"
        }`}
        onMenuOpenChange={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      >
        <NavbarContent className="content">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand className="brand">
            <Link
              to="#"
              data-to-scrollspy-id={"home"}
              className="dark:p-[1px] dark:bg-activeColor dark:rounded-full"
            >
              <img
                src="/logo.png"
                className="rounded-full size-8 sm:size-12"
                alt=""
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4 " justify="center">
          <NavbarItem className={`flex gap-x-4 md:gap-x-6`}>
            {Items.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                data-to-scrollspy-id={item.name}
                className="font-itim text-xl hover:text-activeColor tracking-wide text-white"
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
            isSelected={isChecked}
            onValueChange={toggleTheme}
            thumbIcon={({ isSelected, className }) =>
              isSelected ? (
                <MoonIcon className={className} />
              ) : (
                <SunIcon className={className} />
              )
            }
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
                to={item.href}
                data-to-scrollspy-id={item.name}
                size="lg"
                onClick={closeMenu}
                className={`${
                  location.hash === item.href
                    ? "text-activeColor w-full font-itim text-xl"
                    : "text-white w-full font-itim text-xl"
                }`}
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
