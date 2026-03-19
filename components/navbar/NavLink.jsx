"use client";

import { Items } from "@/db";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ButtonAnimation from "../common/ButtonAnimation";

const NavLink = () => {
  const pathname = usePathname();

  return (
    <>
      {Items.map((item, index) => {
        const isActive = item.href === pathname;

        return (
          <ButtonAnimation key={index}>
            <Link
              href={item.href}
              className={`font-inter text-lg hover:text-yellow-400 transition tracking-[1px] ${
                isActive ? "text-activeColor" : "text-white"
              }`}
            >
              {item.name}
            </Link>
          </ButtonAnimation>
        );
      })}
    </>
  );
};

export default NavLink;
