"use client";

import { Items } from "@/db";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const MyNavbar = ({ toggleTheme, isDarkMode, isChecked }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="nav sticky top-0 left-0 overflow-hidden z-50">
      <Navbar
        className={`dark:bg-white/5 bg-black/70 border-b border-slate-50 mainNav ${
          isDarkMode === "dark" && "border-b border-b-slate-500"
        } flex justify-between items-center gap-4`}
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
              href="#"
              data-to-scrollspy-id={"home"}
              className="relative p-[5px] flex justify-center items-center "
            >
              <div className=" absolute w-full h-full rounded-full border-t-1 border-activeColor animate-spin-slow" />
              <img
                src="/logo.png"
                className="rounded-full size-8 sm:size-12 border-1 border-yellow-300/50"
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
                href={item.href}
                data-to-scrollspy-id={item.name}
                className="font-itim text-xl hover:text-activeColor tracking-wide text-white scroll-smooth"
              >
                {item.name}
              </Link>
            ))}
          </NavbarItem>
        </NavbarContent>
        {/* right section/social icon */}
        <NavbarContent justify="end">
          {/* switch to dark/light mode */}
          {/* <Switch
            color="primary"
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
          /> */}
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
            href="https://www.linkedin.com/in/mehediweb01/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="text-white text-2xl hover:text-activeColor"
            href="https://x.com/mehediweb01"
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
                href={item.href}
                data-to-scrollspy-id={item.name}
                size="lg"
                onClick={closeMenu}
                className={`text-white w-full font-itim text-xl`}
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
