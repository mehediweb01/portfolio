"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Items } from "@/db";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const normalizeHash = (href) => {
  if (!href) return "";
  const idx = href.indexOf("#");
  if (idx === -1) return href;
  return `#${href.slice(idx + 1)}`;
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    typeof window !== "undefined" ? window.location.hash || "#Home" : ""
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onHashChange = () =>
      setActiveSection(window.location.hash || "#Home");

    window.addEventListener("hashchange", onHashChange);

    const sections = Array.from(document.querySelectorAll("div[id]"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries.reduce(
          (max, e) =>
            e.intersectionRatio > (max?.intersectionRatio ?? 0) ? e : max,
          entries[0]
        );

        if (mostVisible && mostVisible.isIntersecting) {
          const hash = `#${mostVisible.target.id}`;
          setActiveSection(hash);
          if (history && history.replaceState) {
            history.replaceState(
              null,
              "",
              `${window.location.pathname}${hash}`
            );
          }
        }
      },
      { threshold: [0.4, 0.6] }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const hash = normalizeHash(href);
    if (!hash) return;

    const id = hash.slice(1);
    const el = document.getElementById(id);

    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(hash);

        if (history && history.pushState) {
          history.pushState(null, "", `${window.location.pathname}${hash}`);
        }
      });
    } else {
      window.location.href = href;
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button className="sm:hidden">
          <FaBarsStaggered />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="bg-black text-white w-64"
        aria-describedby={undefined}
      >
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-4 ms-5">
          {Items.map((item, index) => {
            const itemHash = normalizeHash(item.href);
            const isActive = activeSection === itemHash;
            const isHashLink = item.href.startsWith("#");

            return isHashLink ? (
              <a
                key={index}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`font-poppins text-lg transition tracking-[1px] hover:text-yellow-400 ${
                  isActive ? "text-yellow-400 font-semibold" : "text-white"
                }`}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={index}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`font-poppins text-lg transition tracking-[1px] hover:text-yellow-400 ${
                  isActive ? "text-yellow-400 font-semibold" : "text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
