"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";

import avatar1 from "@/assets/avatars/craig.jpg";
import avatar2 from "@/assets/avatars/jean.jpg";
import avatar3 from "@/assets/avatars/luis.jpg";
import avatar4 from "@/assets/avatars/atlas.jpg";
import avatar5 from "@/assets/avatars/maria.jpg";

export default function Teachers() {
  const team = [
    {
      name: "Craig Martin Liddle",
      role: "President & Owner",
      img: avatar1,
      bio: "Leading the school with a strong vision for quality and excellence.",
    },
    {
      name: "Jean Ibona",
      role: "Principal & Science Teacher",
      img: avatar2,
      bio: "Dedicated to fostering curiosity and scientific literacy.",
    },
    {
      name: "Luis Fernandez",
      role: "English Teacher",
      img: avatar3,
      bio: "Passionate about language mastery and communication.",
    },
    {
      name: "Atlas Monsurie",
      role: "Math Teacher",
      img: avatar4,
      bio: "Committed to developing logical thinking and strong numeracy skills.",
    },
    {
      name: "Maria Dela Cruz",
      role: "Faculty Coordinator",
      img: avatar5,
      bio: "Ensures smooth academic operations and supports faculty needs.",
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <>
      <Header />

      <main className="container" style={{ paddingTop: 40, paddingBottom: 60 }}>
        <h1
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "var(--dark)",
            marginBottom: 10,
          }}
        >
          Our Teachers
        </h1>

        <p style={{ maxWidth: 600, color: "var(--muted)" }}>
          Meet our experienced and dedicated educators who guide our students
          with passion, knowledge, and compassion.
        </p>

        {/* Teacher Grid */}
        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: 24,
          }}
        >
          {team.map((t, i) => (
            <div
              key={i}
              onClick={() => setSelected(t)}
              style={{
                background: "#fff",
                borderRadius: 12,
                padding: 20,
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: "50%",
                    overflow: "hidden",
                    margin: "0 auto 16px",
                  }}
                >
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={100}
                    height={100}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      display: "block",
                    }}
                  />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700 }}>{t.name}</h3>
                <p style={{ color: "var(--muted)", marginTop: 4 }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Hiring Section */}
        <div
          style={{
            marginTop: 60,
            padding: 30,
            background: "#f7f9ff",
            borderRadius: 12,
            textAlign: "center",
            border: "1px solid #e2e8ff",
          }}
        >
          <h2
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "var(--accent)",
              marginBottom: 10,
            }}
          >
            We Are Hiring!
          </h2>

          <p style={{ maxWidth: 700, margin: "0 auto", color: "var(--dark)" }}>
            Our school is growing and we’re always looking for passionate and
            dedicated educators to join our team. If you believe in nurturing
            students and shaping their future, we’d love to hear from you.
          </p>

          <div style={{ marginTop: 25 }}>
            <a
              href="https://YOUR-GOOGLE-FORM-LINK-HERE"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--accent)",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 18,
                boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
              }}
            >
              Apply Here
            </a>
          </div>
        </div>

        {/* Modal (Teacher Info) */}
        {selected && (
          <div
            onClick={() => setSelected(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0,0,0,0.4)",
              backdropFilter: "blur(3px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
            }}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#fff",
                padding: 30,
                borderRadius: 12,
                maxWidth: 400,
                width: "90%",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  overflow: "hidden",
                  margin: "0 auto 20px",
                }}
              >
                <Image
                  src={selected.img}
                  alt={selected.name}
                  width={120}
                  height={120}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    display: "block",
                  }}
                />
              </div>

              <h2 style={{ marginBottom: 8 }}>{selected.name}</h2>
              <p
                style={{
                  color: "var(--accent)",
                  fontWeight: 600,
                  marginBottom: 16,
                }}
              >
                {selected.role}
              </p>

              <p style={{ color: "var(--dark)" }}>{selected.bio}</p>

              <div style={{ marginTop: 20 }}>
                <button
                  onClick={() => setSelected(null)}
                  style={{
                    background: "var(--accent)",
                    padding: "8px 20px",
                    color: "#fff",
                    borderRadius: 6,
                    border: 0,
                    fontWeight: 600,
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
