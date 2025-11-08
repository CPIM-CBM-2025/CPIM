"use client";
import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

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
        <div
          className="row align-items-start text-center text-md-start"
          style={{
            display: "flex",
            alignItems: "stretch",
            flexWrap: "wrap",
          }}
        >
          {/* 🔻 About Section */}
          <div className="col-12 col-md-4 mb-4 d-flex flex-column">
            <h4
              style={{
                fontWeight: "700",
                borderBottom: "2px solid #FFD700",
                display: "inline-block",
                paddingBottom: "8px",
                marginBottom: "20px",
                fontFamily: "serif",
                fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
              }}
            >
              இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்)
            </h4>
            <p
              style={{
                lineHeight: "2.0",
                textAlign: "justify",
                fontSize: "clamp(0.85rem, 2vw, 1rem)",
                flexGrow: 1,
              }}
            >
              இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்) சமூகநீதிக்காக, சமத்துவத்திற்காக மற்றும் தொழிலாளர் உரிமைகளுக்காக போராடுகிறது.
              சோசலிசம், மதச்சார்பற்ற தன்மை மற்றும் ஜனநாயகத்தின் கோட்பாடுகளை அடிப்படையாகக் கொண்ட சமுதாயத்தை உருவாக்குவது எங்கள் நோக்கம்.
            </p>
          </div>

          {/* 🔻 Quick Links */}
          <div className="col-6 col-md-3 mb-4 d-flex flex-column">
            <h5
              style={{
                borderBottom: "2px solid #FFD700",
                display: "inline-block",
                paddingBottom: "5px",
                marginBottom: "20px",
                fontFamily: "serif",
                fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
              }}
            >
              விரைவுச் சுட்டிகள்
            </h5>
            <ul
              style={{
                listStyle: "none",
                paddingLeft: 0,
                fontSize: "clamp(0.85rem, 2vw, 1rem)",
                margin: 0,
                flexGrow: 1,
              }}
            >
              {[
                { name: "செய்திகள்", link: "/news" },
                { name: "தீர்மானங்கள்", link: "/resolution" },
                { name: "ஆவணங்கள்", link: "/document" },
                { name: "கட்சி திட்டம்", link: "/plan" },
                { name: "அமைப்பு சட்டம்", link: "/rule" },
                { name: "தொடர்பு", link: "/contact" },
                { name: "அன்றாட போராட்டம்", link: "/protest" },
                { name: "வரலாறு", link: "/history" },
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


          {/* 🔻 Contact Info */}
          <div className="col-12 col-md-5 mb-4 d-flex flex-column">
            <h5
              style={{
                borderBottom: "2px solid #FFD700",
                display: "inline-block",
                paddingBottom: "5px",
                marginBottom: "20px",
                fontFamily: "serif",
                fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
              }}
            >
              தொடர்புக்கு
            </h5>
            <div
              style={{
                fontSize: "clamp(0.85rem, 2vw, 1rem)",
                flexGrow: 1,
              }}
            >
              <p style={contactLineStyle}>
                <MapPin size={25} color="#FFD700" />
                இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்), கம்பம்-625516, தேனி மாவட்டம்
              </p>
              <p style={contactLineStyle}>
                <Phone size={20} color="#FFD700" />
                9789407760
              </p>
              <p style={contactLineStyle}>
                <Mail size={20} color="#FFD700" />
                cpimcbm@gmail.com
              </p>
            </div>

            {/* 🔻 Social Media Icons */}
            <div
              style={{
                marginTop: "20px",
                display: "flex",

                justifyContentMd: "flex-start",
                gap: "15px",
                flexWrap: "wrap",
              }}
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
        <hr style={{ borderColor: "rgba(255,255,255,0.2)", marginTop: "20px" }} />

        {/* Footer Bottom */}
        <div className="text-center mt-3">
          <p style={{ fontSize: "clamp(0.75rem, 1.8vw, 0.9rem)", color: "#ccc", margin: 0 }}>
            © {new Date().getFullYear()} இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்). அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.
          </p>
        </div>
      </div>
    </footer>
  );
}

// 🎨 Styles
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
};

const contactLineStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  justifyContent: "flex-start",
  lineHeight: "1.8",
};
