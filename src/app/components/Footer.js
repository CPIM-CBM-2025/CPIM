"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

// --- 🎨 Styles ---
const socialIconStyle = {
  color: "white",
  border: "1px solid #FFD700",
  borderRadius: "50%",
  width: "38px",
  height: "38px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease",
  textDecoration: "none",
  flexShrink: 0,
};

const contactLineStyle = {
  display: "flex",
  alignItems: "flex-start",
  gap: "10px",
  lineHeight: "1.6",
  marginBottom: "15px",
  textAlign: "start",
};

const headerStyle = {
  fontWeight: "700",
  borderBottom: "2px solid #FFD700",
  display: "inline-block",
  paddingBottom: "8px",
  marginBottom: "20px",
  fontFamily: "serif",
  fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
};

// --- Component ---
export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #800000, #000000)",
        color: "white",
        paddingTop: "50px",
        paddingBottom: "30px",
        marginTop: "60px",
        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.6)",
      }}
    >
      <div className="container">
        {/* Main Content Row: 3 equal columns (4+4+4) on medium screens and up */}
        <div
          className="row text-center text-md-start"
          style={{
            display: "flex",
            alignItems: "stretch", // Ensures columns are the same height
            flexWrap: "wrap",
          }}
        >
          {/* 🔻 About Section (4/12 width on MD+) */}
          <div className="col-12 col-md-4 mb-5 d-flex flex-column align-items-center align-items-md-start">
            <h4 style={headerStyle}>இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்)</h4>
            <p
              className="flex-grow-1" // Forces this paragraph to occupy remaining vertical space
              style={{
                lineHeight: "2.0",
                textAlign: "justify",
                fontSize: "clamp(0.85rem, 2vw, 1rem)",
                marginBottom: 0,
                // On mobile, ensure justify works without pushing text off-center
                maxWidth: "600px", 
              }}
            >
              இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்) சமூகநீதிக்காக, சமத்துவத்திற்காக
              மற்றும் தொழிலாளர் உரிமைகளுக்காக போராடுகிறது. சோசலிசம், மதச்சார்பற்ற
              தன்மை மற்றும் ஜனநாயகத்தின் கோட்பாடுகளை அடிப்படையாகக் கொண்ட சமுதாயத்தை
              உருவாக்குவது எங்கள் நோக்கம்.
            </p>
          </div>

          {/* 🔻 Quick Links (4/12 width on MD+) */}
          {/* Use col-6 on mobile to allow two link columns side-by-side */}
          <div className="col-6 col-md-4 mb-5 d-flex flex-column align-items-center align-items-md-start">
            <h5 style={headerStyle}>விரைவுச் சுட்டிகள்</h5>
            <ul
              className="flex-grow-1" // Forces this list to occupy remaining vertical space
              style={{
                listStyle: "none",
                paddingLeft: 0,
                fontSize: "clamp(0.85rem, 2vw, 1rem)",
                margin: 0,
              }}
            >
              {[
                { name: "செய்திகள்", link: "/news" },
                { name: "தீர்மானங்கள்", link: "/resolution" },
                { name: "ஆவணங்கள்", link: "/document" },
                { name: "கட்சி திட்டம்", link: "/plan" },
                { name: "அமைப்பு சட்டம்", link: "/rule" },
                { name: "அன்றாட போராட்டம்", link: "/protest" },
                { name: "வரலாறு", link: "/history" },
                { name: "தொடர்பு", link: "/contact" },
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  <Link
                    href={item.link}
                    style={{
                      color: "white",
                      textDecoration: "none",
                      transition: "color 0.3s",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#FFD700")}
                    onMouseOut={(e) => (e.target.style.color = "white")}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔻 Contact Info and Socials (4/12 width on MD+) */}
          {/* Use col-6 on mobile to sit next to Quick Links, col-12 below MD for better address display */}
          <div className="col-6 col-md-4 mb-5 d-flex flex-column align-items-center align-items-md-start">
            <h5 style={headerStyle}>தொடர்புக்கு</h5>
            <div
              className="flex-grow-1 w-100" // Make contact info grow and use full width
              style={{
                fontSize: "clamp(0.85rem, 2vw, 1rem)",
              }}
            >
              <p style={contactLineStyle}>
                <MapPin size={20} color="#FFD700" style={{ flexShrink: 0 }} />
                <span>
                  இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்), கம்பம்-625516, தேனி மாவட்டம்
                </span>
              </p>
              <p style={contactLineStyle}>
                <Phone size={20} color="#FFD700" style={{ flexShrink: 0 }} />
                <span>9789407760</span>
              </p>
              <p style={contactLineStyle}>
                <Mail size={20} color="#FFD700" style={{ flexShrink: 0 }} />
                <span>cpimcbm@gmail.com</span>
              </p>
            </div>

            {/* 🔻 Social Media Icons */}
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
              }}
              className="w-100 justify-content-center justify-content-md-start"
            >
              <a href="#" style={socialIconStyle}>
                <Facebook size={20} />
              </a>
              <a href="#" style={socialIconStyle}>
                <Twitter size={20} />
              </a>
              <a href="#" style={socialIconStyle}>
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr
          style={{ borderColor: "rgba(255,255,255,0.2)", marginTop: "10px" }}
        />

        {/* Footer Bottom (Always Center Aligned) */}
        <div className="text-center mt-3">
          <p
            style={{
              fontSize: "clamp(0.75rem, 1.8vw, 0.9rem)",
              color: "#ccc",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்).
            அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.
          </p>
        </div>
      </div>
    </footer>
  );
}