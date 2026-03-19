"use client";

import { certificates } from "@/db";
import { useState } from "react";
import CertificateHeader from "./CertificateHeader";
import CertificateList from "./CertificateList";
import SelectedCertificate from "./SelectedCertificate";

export default function CertificateShowcase() {
  const [activeCert, setActiveCert] = useState(certificates[0]);

  return (
    <section className="py-4 flex flex-col items-center">
      <CertificateHeader />
      <SelectedCertificate src={activeCert.src} alt={activeCert.alt} />
      <CertificateList activeCert={activeCert} setActiveCert={setActiveCert} />
    </section>
  );
}
