"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

export default function TamilHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkStyle = {
    color: "maroon",
    textDecoration: "none",
    fontWeight: 500,
    transition: "color 0.3s ease",
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
        backgroundColor: "white",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* 🔹 Top Bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "maroon",
          color: "white",
          padding: "1rem 2rem",
        }}
      >
        {/* Left Logo and Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img
            src="/logo.png" // your logo file
            alt="Logo"
            style={{ width: "40px", height: "40px" }}
          />
          <div>
            <h1 style={{ margin: 0, fontWeight: "bold", fontSize: "1.8rem" }}>
              இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்)
            </h1>
            <p style={{ margin: 0, fontSize: "1.2rem", color: "#f5f5f5" }}>
              கம்பம் ஏரியா குழு
            </p>
          </div>
        </div>

        {/* 🔸 Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="d-md-none"
          style={{
            background: "none",
            border: "none",
            color: "white",
          }}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* 🔸 Search Icon (Desktop) 
        <div className="d-none d-md-flex">
          <Search size={18} color="white" style={{ cursor: "pointer" }} />
        </div>
        */}
      </div>

      {/* 🔹 Bottom Navigation */}
      <nav
        className="d-none d-md-flex justify-content-center"
        style={{
          gap: "40px",
          padding: "0.8rem 0",
          backgroundColor: "#f9f9f9",
        }}
      >
        {[
          { name: "முகப்பு", href: "/" },
          { name: "செய்திகள்", href: "/news" },
          { name: "தீர்மானங்கள்", href: "/resolution" },
          { name: "ஆவணங்கள்", href: "/document" },
          { name: "கட்சி திட்டம்", href: "/plan" },
          { name: "அமைப்பு சட்டம்", href: "/rule" },
          { name: "போராட்டங்கள்", href: "/protest" },
          { name: "வரலாறு", href: "/history" },
        ].map((link, i) => (
          <Link
            key={i}
            href={link.href}
            style={{
              color: "maroon",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "1rem",
              padding: "6px 18px",
              borderRadius: "6px",
              transition: "all 0.3s ease",
              border: "1px solid transparent",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "maroon";
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = "maroon";
            }}
          >
            {link.name}
          </Link>
        ))}
      </nav>


      {/* 🔹 Mobile Dropdown */}
      {isMenuOpen && (
        <div
          className="d-md-none"
          style={{
            background: "maroon",
            color: "white",
            padding: "15px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            textAlign: "center",
          }}
        >
          <Link href="/page" style={{ color: "white" }}>
            முகப்பு
          </Link>
          <Link href="/news" style={{ color: "white" }}>
            செய்திகள்
          </Link>
          <Link href="/protest" style={{ color: "white" }}>
            போராட்டங்கள்
          </Link>
          <Link href="/document" style={{ color: "white" }}>
            ஆவணங்கள்
          </Link>
          <Link href="/history" style={{ color: "white" }}>
            வரலாறு
          </Link>
          <Link href="/rule" style={{ color: "white" }}>
            அமைப்பு சட்டம்
          </Link>
        </div>
      )}
    </header>
  );
}
