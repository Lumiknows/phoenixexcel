"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/logo.jpg";

export default function Header() {
  const pathname = usePathname(); // Current route

  const navItems = ["Home", "About", "Classes", "Teachers", "Contact"];

  return (
    <header
      style={{
        background: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 0",
        }}
      >
        {/* Logo + Brand */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image
            src={Logo}
            alt="Phoenix Excel Academy Logo"
            width={50}
            height={50}
            priority
            style={{ borderRadius: 8, objectFit: "cover" }}
          />
          <span style={{ fontWeight: 700, fontSize: 20, color: "#1a202c" }}>
            Phoenix Excel Academy
          </span>
        </Link>

        {/* Navigation */}
        <nav style={{ display: "flex", gap: 20 }}>
          {navItems.map((item) => {
            const linkPath = item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`;
            const isActive = pathname === linkPath;

            return (
              <Link
                key={item}
                href={linkPath}
                style={{
                  textDecoration: "none",
                  color: isActive ? "#2196F3" : "#333",
                  fontWeight: 500,
                  fontSize: 16,
                  padding: "6px 12px",
                  borderRadius: 6,
                  transition: "all 0.2s",
                  backgroundColor: isActive ? "rgba(33, 150, 243, 0.1)" : "transparent",
                }}
              >
                {item}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
