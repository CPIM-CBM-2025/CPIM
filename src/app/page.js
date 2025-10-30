"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Dynamically import react-slick to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function Home() {
  const fullText = `  ஒற்றுமை, சமத்துவம், சுதந்திரம் — எங்கள் வழியும் வலிமையும். நாங்கள் கல்வி, தொழிலாளர் உரிமை, விவசாயிகள் நலன் மற்றும் பெண்களின் முன்னேற்றத்துக்காக செயல்படுகிறோம். ஒவ்வொருவருக்கும் சம வாய்ப்பு மற்றும் குரல் கிடைக்கும் சமூகமே எங்கள் இலக்கு. நியாயம், நம்பிக்கை, ஒற்றுமை — எங்கள் அடித்தள தூண்கள்.`;

  const [displayedText, setDisplayedText] = useState("");
  const [direction, setDirection] = useState("rightToLeft");
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const sectionRef = useRef(null);

  // ✅ Typing Effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // ✅ Scroll Direction Detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newDirection = scrollTop > lastScrollTop ? "rightToLeft" : "leftToRight";
      setDirection(newDirection);
      setLastScrollTop(scrollTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  // ✅ React Slick settings
  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 1200,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    rtl: direction === "rightToLeft",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div
      style={{
        backgroundColor: "#0F0F0F",
        color: "white",
        position: "relative",
        overflow: "hidden",
        minHeight: "50vh",
        boxShadow: "inset 0 0 150px rgba(255,215,0,0.05)",
      }}
    >
      {/* 🔻 Background Logo */}
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "85%",
          height: "85%",
          zIndex: 0,
          opacity: 0.08,
          filter: "drop-shadow(0 0 60px rgba(255,215,0,0.4))",
        }}
      >
        <Image
          src="/logo2.jpg"
          alt="Communist Party Logo"
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
          priority
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* 🔸 Hero Section */}
        <section
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* 🔹 Background Images Carousel (Bootstrap-like) */}
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="4000"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 0,
            }}
          >
            <div className="carousel-inner" style={{ height: "100%" }}>
              {["/Image14.jpg", "/Image12.jpg", "/Image13.jpg"].map((src, i) => (
                <div
                  key={i}
                  className={`carousel-item ${i === 0 ? "active" : ""}`}
                  style={{ height: "100%" }}
                >
                  <Image
                    src={src}
                    alt={`Slide ${i + 1}`}
                    fill
                    className="d-block w-100"
                    style={{
                      objectFit: "cover",
                      filter: "brightness(0.6)",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 🔹 Typing Animated Text Box */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              padding: "2rem",
            }}
          >
            <p
              style={{
                fontSize: "1.5rem",
                marginTop: "1.5rem",
                color: "#ffe6e6",
                maxWidth: "950px",
                margin: "auto",
                lineHeight: "2.1",
                textAlign: "justify",
                background: "rgba(0, 0, 0, 0.55)",
                padding: "2rem 2.2rem",
                borderRadius: "15px",
                boxShadow: "0 4px 40px rgba(0,0,0,0.6)",
                backdropFilter: "blur(4px)",
                whiteSpace: "pre-wrap",
                letterSpacing: "0.5px",
                wordSpacing: "2px",
                textIndent: "2rem",
                transition: "all 0.3s ease-in-out",
              }}
            >
              {displayedText}
            </p>
          </div>
        </section>

        {/* 🔸 About Section with React Slick */}
        <section
          ref={sectionRef}
          id="about"
          style={{
            padding: "5rem 2rem",
            background: "linear-gradient(to bottom right, #F5F5F5, #EAEAEA)",
            color: "#1C1C1C",
            textAlign: "center",
            boxShadow: "inset 0 0 80px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
        >
          <h2
            style={{
              color: "#A10000",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            எங்களைப் பற்றி
          </h2>
          <p
            style={{
              maxWidth: "800px",
              margin: "auto",
              lineHeight: "1.8",
              fontSize: "1.2rem",
              textAlign: "justify",
            }}
          >
            மக்களின் இயக்கம் என்பது சமத்துவம், சமூக நீதி மற்றும் ஒற்றுமைக்காக
            போராடும் ஒரு உறுதியான சக்தி. நாங்கள் கல்வி, தொழிலாளர் உரிமை,
            விவசாயிகள் நலன் மற்றும் பெண்களின் முன்னேற்றத்தை முக்கிய நோக்காக
            கொண்டுள்ளோம்.
          </p>

          {/* 🔹 React Slick Carousel */}
          <div style={{ marginTop: "3rem", maxWidth: "800px", marginInline: "auto" }}>
            <Slider {...slickSettings}>
              {[
                { src: "/background.jpg", caption: "கல்வி விழிப்புணர்வு" },
                { src: "/background1.jpg", caption: "விவசாயிகள் நலன்" },
                { src: "/Image1.jpg", caption: "பெண்கள் முன்னேற்றம்" },
                { src: "/background.jpg", caption: "தொழிலாளர் உரிமை" },
              ].map((item, index) => (
                <div key={index}>
                  <img
                    src={item.src}
                    alt={item.caption}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    }}
                  />
                  <p
                    style={{
                      marginTop: "0.8rem",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    {item.caption}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </section>

        {/* 🔸 Mission Section */}
        <section
          id="mission"
          style={{
            padding: "5rem 2rem",
            background: "linear-gradient(90deg, #A10000, #6E0000, #A10000)",
            color: "white",
            textAlign: "center",
            boxShadow: "inset 0 0 80px rgba(0,0,0,0.4)",
          }}
        >
          <h2 style={{ color: "#EDEBD2", marginBottom: "1rem", fontWeight: "bold" }}>
            எங்கள் நோக்கம்
          </h2>
          <p
            style={{
              maxWidth: "850px",
              margin: "auto",
              lineHeight: "1.8",
              fontSize: "1.2rem",
            }}
          >
            சமூகத்தின் அடிப்படை நிலைகளிலிருந்து மாற்றம் உருவாக்குவது எங்கள் பணியாகும்.
            கல்வி, வேலை வாய்ப்பு மற்றும் மருத்துவம் — இவை அனைத்தும் மக்களுக்கு உரிமையாக
            இருக்க வேண்டும் என்பதே எங்கள் நம்பிக்கை.
          </p>
        </section>

        {/* 🔸 Contact Section */}
        <section
          id="contact"
          style={{
            background: "radial-gradient(circle at top, #1C1C1C, #000000)",
            color: "white",
            padding: "4rem 2rem",
            textAlign: "center",
            boxShadow: "inset 0 0 100px rgba(255,215,0,0.05)",
          }}
        >
          <h2 style={{ color: "#FFD700", marginBottom: "1rem", fontWeight: "bold" }}>
            தொடர்பு கொள்ள
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            📞 தொலைபேசி: +91 98765 43210
          </p>
          <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            ✉️ மின்னஞ்சல்: contact@makkaliniyakkam.org
          </p>
          <p style={{ fontSize: "1.2rem" }}>📍 முகவரி: சென்னை, தமிழ்நாடு – இந்தியா</p>
        </section>
      </div>
    </div>
  );
}
