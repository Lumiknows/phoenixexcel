"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FaBookOpen, FaAppleAlt, FaAtom, FaCalculator, FaPaintBrush, FaGlobe, FaFlask, FaMicroscope, FaLaptop, FaRocket, FaStar } from "react-icons/fa";

export default function Classes() {
  const classes = [
    { name: "Kindergarten", icon: <FaAppleAlt size={36} color="#FF9F1C" /> },
    { name: "Grade 1", icon: <FaBookOpen size={36} color="#FF6B6B" /> },
    { name: "Grade 2", icon: <FaPaintBrush size={36} color="#4ECDC4" /> },
    { name: "Grade 3", icon: <FaGlobe size={36} color="#1A535C" /> },
    { name: "Grade 4", icon: <FaCalculator size={36} color="#F7FFF7" /> },
    { name: "Grade 5", icon: <FaAtom size={36} color="#FF9F1C" /> },
    { name: "Grade 6", icon: <FaFlask size={36} color="#FF6B6B" /> },
    { name: "Grade 7", icon: <FaMicroscope size={36} color="#4ECDC4" /> },
    { name: "Grade 8", icon: <FaLaptop size={36} color="#1A535C" /> },
    { name: "Grade 9", icon: <FaRocket size={36} color="#F7FFF7" /> },
    { name: "Grade 10", icon: <FaStar size={36} color="#FF9F1C" /> },
  ];

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Our Classes (K–10)
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {classes.map((cls, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center flex flex-col items-center"
            >
              <div className="mb-4">{cls.icon}</div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-900">{cls.name}</h2>
              <p className="text-gray-600 text-center">
                Personalized learning and support to help each student thrive and prosper.
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
