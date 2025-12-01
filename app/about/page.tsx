"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";

// Import your campus images
import campus1 from "@/assets/about/campus1.jpeg";
import campus2 from "@/assets/about/campus2.jpg";
import campus3 from "@/assets/about/campus3.jpeg";
import campus4 from "@/assets/about/campus4.jpg";

export default function About() {
  const images = [campus1, campus2, campus3, campus4];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />

      {/* Hero Slider */}
      <main className="relative h-96 md:h-[500px] w-full overflow-hidden">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img}
              alt={`Campus ${index + 1}`}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
          </div>
        ))}

        <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6 md:px-0">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-3 drop-shadow-lg">
            Phoenix Excel Academy
          </h1>
          <p className="text-white text-md md:text-xl max-w-3xl drop-shadow-md">
            A nurturing school for children with special needs. We provide a
            safe, supportive environment where every child can grow and thrive.
          </p>
        </div>
      </main>

      {/* Mission / Vision / Values */}
      <section className="container mx-auto px-4 py-16 grid gap-10 md:grid-cols-3">
        {[
          {
            title: "Our Mission",
            desc: "Provide personalized education and support, empowering each child to reach their full potential.",
            color: "bg-blue-50",
          },
          {
            title: "Our Vision",
            desc: "Be a leading school for special education, recognized for care, inclusivity, and teaching excellence.",
            color: "bg-green-50",
          },
          {
            title: "Our Values",
            desc: "Safety, compassion, individualized learning, and community engagement guide everything we do.",
            color: "bg-yellow-50",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className={`${item.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition`}
          >
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </section>

      <Footer />
    </>
  );
}
