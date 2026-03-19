import { certificates } from "@/db";
import Image from "next/image";

const CertificateList = ({ activeCert, setActiveCert }) => {
  return (
    <div className="flex justify-center gap-6 flex-wrap my-4 md:my-12">
      {certificates.map((cert, index) => {
        const isActive = activeCert.id === cert.id;

        return (
          <div
            key={cert.id}
            className={`
              relative w-48 h-32 md:w-56 md:h-40 cursor-pointer transition-transform duration-500
              ${isActive ? "scale-105 z-20 border-2 border-sky-400 rounded-md" : "hover:scale-105 z-10"}
              ${index % 2 === 0 ? "-rotate-3" : "rotate-3"}
            `}
            onClick={() => setActiveCert(cert)}
          >
            <Image
              src={cert.src}
              alt={cert.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain rounded-lg shadow-lg"
            />
          </div>
        );
      })}
    </div>
  );
};

export default CertificateList;
