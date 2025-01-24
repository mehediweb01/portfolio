import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { BsGithub, BsLinkedin, BsMoon, BsTwitter } from "react-icons/bs";
import { HashLink as Link } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
const Items = [
  { name: "About", href: "#About" },
  { name: "Skills", href: "#Skills" },
  { name: "Project", href: "#Project" },
  { name: "Contact", href: "#Contact" },
];

const MyNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  return (
    <div className="sticky top-0 left-0 ">
      <Navbar className="bg-black/80" onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="#" className="hover:cursor-pointer">
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
          <BsMoon className="text-white text-2xl hover:cursor-pointer md:mr-16" />
          <a
            className="text-white text-2xl hover:text-activeColor"
            href="https://github.com/mehediweb01"
          >
            <BsGithub />
          </a>
          <a
            className="text-white text-2xl hover:text-activeColor"
            href="https://www.linkedin.com/in/md-mehedi-hasan-90634424b/"
          >
            <BsLinkedin />
          </a>
          <a
            className="text-white text-2xl hover:text-activeColor"
            href="https://x.com/mehedihasan0937"
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
