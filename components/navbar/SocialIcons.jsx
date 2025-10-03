import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import ButtonAnimation from "../common/ButtonAnimation";

const SocialIcons = () => {
  return (
    <div className="flex justify-center items-center gap-3">
      <ButtonAnimation>
        <Link
          href="https://github.com/mehediweb01"
          target="_blank"
          className="text-white text-2xl hover:text-yellow-400"
        >
          <BsGithub />
        </Link>
      </ButtonAnimation>
      <ButtonAnimation>
        <Link
          href="https://www.linkedin.com/in/mehediweb01/"
          target="_blank"
          className="text-white text-2xl hover:text-yellow-400"
        >
          <BsLinkedin />
        </Link>
      </ButtonAnimation>
      <ButtonAnimation>
        <Link
          href="https://x.com/mehedi_web01"
          target="_blank"
          className="text-white text-2xl hover:text-yellow-400"
        >
          <BsTwitter />
        </Link>
      </ButtonAnimation>
    </div>
  );
};

export default SocialIcons;
