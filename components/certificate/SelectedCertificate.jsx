import Image from "next/image";

const SelectedCertificate = ({ src, alt }) => {
  return (
    <div className="md:w-[60%] w-full max-w-4xl mb-12 flex justify-center rounded-md shadow-xl shadow-sky-400/40 ">
      <div className="relative w-full md:mx-0 mx-2 h-80 md:h-96 p-8">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="shadow-md dark:shadow-white shadow-black rounded-md"
        />
      </div>
    </div>
  );
};

export default SelectedCertificate;
