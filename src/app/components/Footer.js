"use client";
import React from "react";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #800000, #000000)",
        color: "white",
        paddingTop: "60px",
        paddingBottom: "40px",
        marginTop: "60px",
        boxShadow: "0 -4px 20px rgba(0, 0, 0, 0.6)",
      }}
    >
      <div className="container">
        <div className="row">
          {/* 🔻 About Section */}
          <div className="col-md-4 mb-4">
            <h4
              style={{
                fontWeight: "700",
                borderBottom: "3px solid #FFD700",
                display: "inline-block",
                paddingBottom: "8px",
                marginBottom: "20px",
                fontFamily: "serif",
              }}
            >
              இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்)
            </h4>
            <p style={{ lineHeight: "1.8", textAlign: "justify" }}>
              இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்) சமூகநீதிக்காக, சமத்துவத்திற்காக மற்றும் தொழிலாளர் உரிமைகளுக்காக போராடுகிறது.
              சோசலிசம், மதச்சார்பற்ற தன்மை மற்றும் ஜனநாயகத்தின் கோட்பாடுகளை அடிப்படையாகக் கொண்ட சமுதாயத்தை உருவாக்குவது எங்கள் நோக்கம்.
            </p>
          </div>

          {/* 🔻 Quick Links */}
          <div className="col-md-3 mb-4">
            <h5
              style={{
                borderBottom: "2px solid #FFD700",
                display: "inline-block",
                paddingBottom: "5px",
                marginBottom: "20px",
                fontFamily: "serif",
              }}
            >
              விரைவுச் சுட்டிகள்
            </h5>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {[
                { name: "செய்திகள்", link: "/news" },
                { name: "நீர்மானங்கள்", link: "/resolutions" },
                { name: "ஆவணங்கள்", link: "/documents" },
                { name: "கட்சித் திட்டம்", link: "/katchithittam" },
                { name: "அமைப்பு சட்டம்", link: "/amaippusattam" },
                { name: "தொடர்பு", link: "/contact" },
                { name: "அன்றாட போராட்டம்", link: "/struggles" },
                { name: "வரலாறு", link: "/history" },
              ].map((item, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  <a
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
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 🔻 Contact Info */}
          <div className="col-md-5 mb-4">
            <h5
              style={{
                borderBottom: "2px solid #FFD700",
                display: "inline-block",
                paddingBottom: "5px",
                marginBottom: "20px",
                fontFamily: "serif",
              }}
            >
              தொடர்புக்கு
            </h5>
            <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <MapPin size={18} color="#FFD700" />  
              27, வைத்யியராமன் தெரு, தியாகராயர் நகரம், சென்னை – 600 017.
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Phone size={18} color="#FFD700" />  
              044 24341205, 24326800, 24326900
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Mail size={18} color="#FFD700" />  
              cpimtn2009@gmail.com
            </p>

            {/* 🔻 Social Media Icons */}
            <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
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

        {/* 🔻 Divider */}
        <hr style={{ borderColor: "rgba(255,255,255,0.2)", marginTop: "30px" }} />

        {/* 🔻 Footer Bottom */}
        <div className="text-center" style={{ marginTop: "15px" }}>
          <p style={{ fontSize: "0.9rem", color: "#ccc" }}>
            © {new Date().getFullYear()} இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்). அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன.
          </p>
        </div>
      </div>
    </footer>
  );
}

// 🎨 Social Icon Styles
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
