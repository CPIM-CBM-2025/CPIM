"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

export default function TamilHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkStyle = {
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s ease",
    fontWeight: 500,
  };

  return (
    <header
      style={{
        background: "linear-gradient(135deg, #cf2e2e, #0d0c0cff)",
        color: "white",
        boxShadow: "0 4px 15px rgba(71, 29, 29, 0.6)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        width: "100%",
      }}
    >
      {/* 🔸 Clickable Title Section (Full Area Clickable) */}
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: "1rem 0 0.5rem 0",
            fontFamily: "serif",
            cursor: "pointer",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(1.3rem, 4vw, 2rem)",
              fontWeight: "bold",
              color: "#ffffff",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்)
          </h1>
          <p
            style={{
              fontSize: "clamp(0.75rem, 2vw, 1rem)",
              color: "#e5e5e5",
              margin: 0,
            }}
          >
            கம்பம் நகர் ஏரியா குழு
          </p>
        </div>
      </Link>

      {/* 🔸 Navigation Bar */}
      <div
        className="container-fluid d-flex justify-content-between align-items-center"
        style={{
          padding: "0.5rem 1rem",
          borderTop: "1px solid rgba(255,255,255,0.2)",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        {/* Desktop Menu */}
        <nav
          className="d-none d-md-flex mx-auto flex-wrap justify-content-center"
          style={{
            gap: "28px",
            fontFamily: "serif",
            fontSize: "1.05rem",
          }}
        >
          <Link href="/news" style={navLinkStyle}>செய்திகள்</Link>
          <Link href="/resolution" style={navLinkStyle}>தீர்மானங்கள்</Link>
          <Link href="/document" style={navLinkStyle}>ஆவணங்கள்</Link>
          <Link href="/plan" style={navLinkStyle}>கட்சி திட்டம்</Link>
          <Link href="/rule" style={navLinkStyle}>அமைப்பு சட்டம்</Link>
          <Link href="/contact" style={navLinkStyle}>தொடர்பு</Link>
          <Link href="/protest" style={navLinkStyle}>அன்றாட போராட்டம்</Link>
          <Link href="/history" style={navLinkStyle}>வரலாறு</Link>
        </nav>

        {/* Search Icon (hidden on mobile) */}
        <div className="d-none d-md-flex">
          <Search size={18} color="white" style={{ cursor: "pointer" }} />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="d-md-none"
          style={{
            background: "none",
            border: "none",
            color: "white",
            marginLeft: "auto",
          }}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔸 Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          style={{
            background: "linear-gradient(135deg, #660000, #000000)",
            padding: "15px 25px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            textAlign: "center",
            borderTop: "1px solid rgba(255,255,255,0.2)",
          }}
          className="d-md-none"
        >
          <Link href="/news" style={navLinkStyle}>செய்திகள்</Link>
          <Link href="/resolution" style={navLinkStyle}>தீர்மானங்கள்</Link>
          <Link href="/document" style={navLinkStyle}>ஆவணங்கள்</Link>
          <Link href="/plan" style={navLinkStyle}>கட்சி திட்டம்</Link>
          <Link href="/rule" style={navLinkStyle}>அமைப்பு சட்டம்</Link>
          <Link href="/contact" style={navLinkStyle}>தொடர்பு</Link>
          <Link href="/protest" style={navLinkStyle}>அன்றாட போராட்டம்</Link>
          <Link href="/history" style={navLinkStyle}>வரலாறு</Link>
        </div>
      )}
    </header>
  );
}
