"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";

export default function TamilHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            {/* 🔸 Top Section: Title */}
            <div
                style={{
                    textAlign: "center",
                    padding: "1rem 0 0.5rem 0",
                    fontFamily: "serif",
                }}
            >
                <h1
                    style={{
                        fontSize: "2rem",
                        fontWeight: "bold",
                        color: "#ffffff",
                        margin: 0,
                    }}
                >
                    இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்)
                </h1>
                <p
                    style={{
                        fontSize: "0.9rem",
                        color: "#e5e5e5",
                        margin: 0,
                    }}
                >
                கம்பம் நகர் ஏரியா குழு 
                </p>
            </div>

            {/* 🔸 Navigation Bar */}
            <div
                className="container-fluid d-flex justify-content-between align-items-center"
                style={{
                    padding: "0.5rem 2rem",
                    borderTop: "1px solid rgba(255,255,255,0.2)",
                    borderBottom: "1px solid rgba(255,255,255,0.2)",
                }}
            >
                {/* 🔻 Desktop Menu */}
                <nav
                    className="d-none d-md-flex mx-auto"
                    style={{
                        gap: "35px",
                        fontFamily: "serif",
                        fontSize: "1.05rem",
                    }}
                >
                    <Link href="/news" style={navLinkStyle}>செய்திகள்</Link>
                    <Link href="/resolutions" style={navLinkStyle}>தீர்மானங்கள்</Link>
                    <Link href="/leaders" style={navLinkStyle}>ஆவணங்கள்</Link>
                    <Link href="/plan" style={navLinkStyle}>கட்சி திட்டம்</Link>
                    <Link href="/rules" style={navLinkStyle}>அமைப்பு சட்டம்</Link>
                    <Link href="/join" style={navLinkStyle}>தொடர்பு</Link>
                    <Link href="/congress" style={navLinkStyle}>அன்றாட போராட்டம்</Link>
                    <Link href="/congress" style={navLinkStyle}>வரலாறு</Link>
                </nav>

                {/* 🔻 Search Icon */}
                <div className="d-none d-md-flex">
                    <Search size={18} color="white" style={{ cursor: "pointer" }} />
                </div>

                {/* 🔻 Mobile Menu Toggle */}
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
            </div>

            {/* 🔻 Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div
                    style={{
                        background: "linear-gradient(135deg, #660000, #000000)",
                        padding: "15px 25px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "15px",
                        textAlign: "center",
                    }}
                    className="d-md-none"
                >
                    <Link href="/news" style={navLinkStyle}>செய்திகள்</Link>
                    <Link href="/resolutions" style={navLinkStyle}>தீர்மானங்கள்</Link>
                    <Link href="/leaders" style={navLinkStyle}>ஆவணங்கள்</Link>
                    <Link href="/plan" style={navLinkStyle}>கட்சி திட்டம்</Link>
                    <Link href="/rules" style={navLinkStyle}>அமைப்பு சட்டம்</Link>
                    <Link href="/join" style={navLinkStyle}>தொடர்பு</Link>
                    <Link href="/congress" style={navLinkStyle}>24TH PARTY CONGRESS</Link>
                </div>
            )}
        </header>
    );
}

const navLinkStyle = {
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s ease",
};

