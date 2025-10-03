"use client";

import { Items } from "@/db";
import Link from "next/link";
import { useEffect, useState } from "react";
import ButtonAnimation from "../common/ButtonAnimation";

const normalizeHash = (href) => {
  if (!href) return "";
  const idx = href.indexOf("#");
  if (idx === -1) return href;
  return `#${href.slice(idx + 1)}`;
};

const NavLink = () => {
  const [activeSection, setActiveSection] = useState(
    typeof window !== "undefined" ? window.location.hash || "#Home" : ""
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onHashChange = () =>
      setActiveSection(window.location.hash || "#Home");

    window.addEventListener("hashchange", onHashChange);

    const sections = Array.from(document.querySelectorAll("div[id]"));
    if (!sections.length) {
      return () => window.removeEventListener("hashchange", onHashChange);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries.reduce(
          (max, e) =>
            e.intersectionRatio > (max?.intersectionRatio ?? 0) ? e : max,
          entries[0]
        );

        if (mostVisible && mostVisible.isIntersecting) {
          const id = mostVisible.target.id;
          const hash = `#${id}`;
          setActiveSection(hash);

          if (history && history.replaceState) {
            history.replaceState(
              null,
              "",
              `${window.location.pathname}${hash}`
            );
          } else {
            window.location.hash = hash;
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
    const hash = normalizeHash(href);
    if (!hash) return;

    e.preventDefault();
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });

      if (history && history.pushState) {
        history.pushState(null, "", `${window.location.pathname}${hash}`);
      } else {
        window.location.hash = hash;
      }
      setActiveSection(hash);
    } else {
      window.location.href = href;
    }
  };
  return (
    <>
      {Items.map((item, index) => {
        const itemHash = normalizeHash(item.href);
        const isActive = activeSection === itemHash;

        return (
          <ButtonAnimation key={index}>
            <Link
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
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
