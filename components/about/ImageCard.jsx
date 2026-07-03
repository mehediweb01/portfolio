import mehedi from "@/public/mehedi.png";
import Image from "next/image";

const ImageCard = () => {
  return (
    <div className="relative rounded-full sm:rounded-3xl bg-gradient-to-br from-sky-500 via-cyan-400 to-indigo-500 p-[3px] shadow-[0_25px_70px_rgba(14,165,233,.25)]">
      <Image
        src={mehedi}
        alt="Md. Mehedi Hasan"
        priority
        className="h-80 w-80 rounded-full object-cover transition-all duration-500 hover:scale-[1.04] sm:h-96 sm:w-[290px] sm:rounded-3xl"
      />
    </div>
  );
};

export default ImageCard;
