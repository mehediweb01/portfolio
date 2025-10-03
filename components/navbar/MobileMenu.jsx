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
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import ButtonAnimation from "../common/ButtonAnimation";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <ButtonAnimation>
        <SheetTrigger asChild>
          <Button className="sm:hidden">
            <FaBarsStaggered />
          </Button>
        </SheetTrigger>
      </ButtonAnimation>
      <SheetContent
        side="right"
        className="bg-black text-white w-64"
        aria-describedby={undefined}
      >
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 ms-5">
          {Items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-white font-poppins text-lg hover:text-yellow-400"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
