"use client";

import { HeroUIProvider } from "@heroui/react";

const HeroUI = ({ children }) => {
  return <HeroUIProvider>{children}</HeroUIProvider>;
};

export default HeroUI;
