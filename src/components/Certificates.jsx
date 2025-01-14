import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";
import { additionalCertificates } from "../constants"; // Import the additional certificates data

const CertificateCard = ({
  title,
  issuer,
  year,
  credentialId,
  downloadLink,
  icon,
}) => (
  <Tilt className="xs:w-[300px] w-full">
    <motion.div
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className="bg-black-100 p-6 rounded-2xl shadow-card relative min-h-[280px]"
    >
      <div className="absolute top-4 right-4 text-gray-400">{year}</div>
      <img
        src={icon}
        alt={issuer}
        className="w-16 h-16 object-contain mb-4"
      />
      <h3 className="text-white text-[20px] font-bold mb-2">{title}</h3>
      <p className="mt-1 text-secondary text-[14px]">{issuer}</p>
      <p className="mt-2 text-secondary text-[12px]">Credential ID: {credentialId}</p>
      <a
        href={downloadLink}
        download
        className="bg-[#915EFF] mt-4 text-white py-2 px-4 rounded-md shadow-md text-sm font-bold hover:bg-[#7d4fe3] transition absolute bottom-4 right-4"
      >
        Download
      </a>
    </motion.div>
  </Tilt>
);

const CertificateSection = ({ title, certificates, currentIndex, onDotClick }) => {
  const itemsPerPage = 3; // Change this to adjust the number of items per page
  const totalPages = Math.ceil(certificates.length / itemsPerPage);

  return (
    <div className="mb-20">
      <h3 className="text-white text-[24px] font-bold mb-8 text-center">{title}</h3>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="w-full flex justify-center px-4"
            >
              <CertificateCard {...certificate} />
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 space-x-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-white w-6" : "bg-gray-500"
                }`}
                onClick={() => onDotClick(index)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Certificates = () => {
  const [currentCertPro, setCurrentCertPro] = useState(0);
  const [currentCertAdd, setCurrentCertAdd] = useState(0);

  useEffect(() => {
    const proInterval = setInterval(() => {
      setCurrentCertPro((prev) =>
        prev === Math.ceil(certificates.length / 3) - 1 ? 0 : prev + 1
      );
    }, 8000);

    const addInterval = setInterval(() => {
      setCurrentCertAdd((prev) =>
        prev === Math.ceil(additionalCertificates.length / 3) - 1 ? 0 : prev + 1
      );
    }, 8000);

    return () => {
      clearInterval(proInterval);
      clearInterval(addInterval);
    };
  }, []);

  return (
    <div className="mt-12 bg-gradient-to-b from-gray-900 to-black rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Professional Development</p>
          <h2 className={styles.sectionHeadText}>Certifications.</h2>
        </motion.div>
      </div>

      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-col gap-16`}>
        <CertificateSection
          title="Professional Certifications"
          certificates={certificates}
          currentIndex={currentCertPro}
          onDotClick={setCurrentCertPro}
        />

        <div className="w-full border-t border-gray-800 my-8" />

        <CertificateSection
          title="Additional Certifications"
          certificates={additionalCertificates}
          currentIndex={currentCertAdd}
          onDotClick={setCurrentCertAdd}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "certificate");
