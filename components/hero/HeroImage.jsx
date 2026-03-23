import me from "@/public/mehedi-home.png";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="sm:absolute static bottom-0 right-0">
      <Image
        src={me}
        alt="mehedi-profile"
        height={500}
        width={500}
        className="sm:rounded-md w-52 sm:w-72 object-fill sm:border-0 border-2 rounded-full sm:my-0 my-4 border-sky-400"
      />
    </div>
  );
};

export default HeroImage;
