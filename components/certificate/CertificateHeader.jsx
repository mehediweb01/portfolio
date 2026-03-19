import { PiCertificate } from "react-icons/pi";

const CertificateHeader = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold dark:text-header text-darkBlack mb-4 flex items-center gap-2 justify-center">
        Certificates
        <PiCertificate className="dark:text-header text-darkBlack" />
      </h2>
      <p className="dark:text-gray-300 text-gray-400 mb-12 text-center max-w-xl">
        Here are some of my certificates from Front-End Development courses.
      </p>
    </div>
  );
};

export default CertificateHeader;
