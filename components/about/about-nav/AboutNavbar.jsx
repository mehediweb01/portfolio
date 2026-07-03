"use client";

import { Button } from "@/components/ui/button";
import { AboutNavItems } from "@/db";
import Link from "next/link";

const AboutNavbar = ({ section }) => {
  return (
    <section className="space-y-0 md:space-y-3 flex md:flex-col flex-row gap-2 items-center justify-center">
      {AboutNavItems.map((item) => (
        <div key={item.id} className="flex justify-center items-center gap-3">
          <Button
            variant={"outline"}
            className={`cursor-pointer text-sm md:text-base lg:text-xl px-2 md:px-4 py-1 md:py-3 hover:text-activeColor transition-all duration-300 ease-in-out active:scale-110 ${section === item.slug ? "text-activeColor" : ""}`}
            asChild
          >
            <Link href={`/about?section=${item.slug}`}>{item.name}</Link>
          </Button>
        </div>
      ))}
    </section>
  );
};

export default AboutNavbar;
