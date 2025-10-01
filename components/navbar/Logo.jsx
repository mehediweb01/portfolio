import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="relative flex items-center">
      <div className="absolute w-full h-full rounded-full border-t-3 border-sky-400 animate-spin-slow " />
      <Image
        src={logo}
        alt="Logo"
        width={50}
        height={50}
        priority
        className="rounded-full border border-yellow-300/50"
      />
    </Link>
  );
};

export default Logo;
