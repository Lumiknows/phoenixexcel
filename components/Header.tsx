import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.jpg";

export default function Header() {
  return (
    <header
      style={{
        borderBottom: "1px solid #eee",
        background: "#fff",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          paddingTop: 12,
          paddingBottom: 12,
        }}
      >
        {/* Logo + Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Image
            src={Logo}
            alt="Phoenix Excel Academy Logo"
            width={44}
            height={44}
            style={{ borderRadius: 6, objectFit: "cover" }}
          />

          <div style={{ fontWeight: 700 }}>Phoenix Excel Academy</div>
        </div>

        {/* Navigation */}
        <nav style={{ display: "flex", gap: "18px" }}>
          <Link href="/" style={navStyle}>
            Home
          </Link>
          <Link href="/about" style={navStyle}>
            About
          </Link>
          <Link href="/classes" style={navStyle}>
            Classes
          </Link>
          <Link href="/teachers" style={navStyle}>
            Teachers
          </Link>
          <Link href="/contact" style={navStyle}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

const navStyle = {
  marginRight: 18,
  textDecoration: "none",
  color: "inherit",
};
