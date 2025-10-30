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
              Communist Party of India (Marxist)
            </h4>
            <p style={{ lineHeight: "1.8", textAlign: "justify" }}>
              The Communist Party of India (Marxist) stands for equality, 
              social justice, and workers' rights. We strive to build a 
              society based on the principles of socialism, secularism, 
              and democracy. Together, we move towards a nation of dignity, 
              progress, and peace.
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
              Quick Links
            </h5>
            <ul style={{ listStyle: "none", paddingLeft: 0 }}>
              {["Home", "About", "Leaders", "News", "Events", "Contact"].map(
                (link, index) => (
                  <li key={index} style={{ marginBottom: "10px" }}>
                    <a
                      href={`/${link.toLowerCase()}`}
                      style={{
                        color: "white",
                        textDecoration: "none",
                        transition: "color 0.3s",
                      }}
                      onMouseOver={(e) => (e.target.style.color = "#FFD700")}
                      onMouseOut={(e) => (e.target.style.color = "white")}
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
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
              Contact Us
            </h5>
            <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <MapPin size={18} color="#FFD700" />  
              A.K. Gopalan Bhawan, New Delhi, India
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Phone size={18} color="#FFD700" />  
              +91 11 2338 5276
            </p>
            <p style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Mail size={18} color="#FFD700" />  
              info@cpim.org
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
            © {new Date().getFullYear()} Communist Party of India (Marxist). All Rights Reserved.
          </p>
          <p style={{ fontSize: "0.9rem", color: "#aaa" }}>
            Designed & Developed by <span style={{ color: "#FFD700" }}>Varshu</span> ❤️
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
