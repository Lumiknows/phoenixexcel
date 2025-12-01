"use client";

import Link from "next/link";
import Image from "next/image";
import backgroundImage from "@/assets/hero.jpg";

export default function Hero() {
  return (
    <section style={{ position: "relative" }}>
      <div
        style={{
          height: 420,
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left Side */}
          <div style={{ maxWidth: 520 }}>
            <div style={{ fontSize: 14, letterSpacing: 1, marginBottom: 12 }}>
              WELCOME TO OUR SCHOOL
            </div>
            <h1 style={{ fontSize: 56, margin: 0, lineHeight: 1.02 }}>
              Special Education School
            </h1>
            <p style={{ color: "#f0f4f6", maxWidth: 520 }}>
              We provide a caring and inclusive learning environment for children
              with disabilities and special needs. Our goal is to support every
              child in reaching their full potential.
            </p>
            <div style={{ marginTop: 18 }}>
              <Link
                href="/about"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  padding: "12px 18px",
                  borderRadius: 6,
                }}
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Right Buttons */}
          <div
            style={{
              display: "flex",
              gap: 12,
              alignItems: "flex-end",
            }}
          >
            <Link
              href="/teachers"
              style={{
                background: "var(--accent)",
                color: "#fff",
                padding: "18px 28px",
                borderRadius: 6,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Our Teachers
            </Link>

            <Link
              href="/classes"
              style={{
                background: "var(--brand)",
                color: "#fff",
                padding: "18px 28px",
                borderRadius: 6,
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              All Classes
            </Link>

            <Link
              href="/contact"
              style={{
                background: "#fff",
                color: varColor("#000"),
                padding: "18px 28px",
                borderRadius: 6,
                boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function varColor(fallback: string) {
  return "rgba(0,0,0,0.85)";
}
