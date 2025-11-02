"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    // ✅ Initialize Bootstrap carousel
    if (typeof window !== "undefined" && window.bootstrap) {
      const carousels = document.querySelectorAll(".carousel");
      carousels.forEach((c) => new window.bootstrap.Carousel(c));
    }
  }, []);

  // 🔹 Typing effect for hero text
  const fullText = `  ஒற்றுமை, சமத்துவம், சுதந்திரம் — எங்கள் வழியும் வலிமையும்.
நாங்கள் கல்வி, தொழிலாளர் உரிமை, விவசாயிகள் நலன் மற்றும் பெண்களின் முன்னேற்றத்துக்காக செயல்படுகிறோம்.
ஒவ்வொருவருக்கும் சம வாய்ப்பு மற்றும் குரல் கிடைக்கும் சமூகமே எங்கள் இலக்கு.
நியாயம், நம்பிக்கை, ஒற்றுமை — எங்கள் அடித்தள தூண்கள்.`

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

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

      {/* 🔻 Main Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* 🔻 Hero Section */}
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
          {/* 🔸 Bootstrap Carousel */}
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="2000"
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
              <div className="carousel-item active" style={{ height: "130%" }}>
                <Image
                  src="/Image12.jpg"
                  alt="First slide"
                  fill
                  className="d-block w-100"
                  style={{
                    objectFit: "cover",
                    filter: "brightness(0.6)",
                  }}
                  priority
                />
              </div>

              <div className="carousel-item" style={{ height: "100%" }}>
                <Image
                  src="/Image15.jpg"
                  alt="Second slide"
                  fill
                  className="d-block w-100"
                  style={{
                    objectFit: "cover",
                    filter: "brightness(0.6)",
                  }}
                />
              </div>

              <div className="carousel-item" style={{ height: "100%" }}>
                <Image
                  src="/Image13.jpg"
                  alt="Third slide"
                  fill
                  className="d-block w-100"
                  style={{
                    objectFit: "cover",
                    filter: "brightness(0.6)",
                  }}
                />
              </div>
            </div>

            {/* 🔹 Prev Button */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>

            {/* 🔹 Next Button */}
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          {/* 🔸 Hero Text with Typing Effect */}
          <div
            style={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              padding: "2rem",
            }}
          >
            <h1
              style={{
                fontSize: "4.5rem",
                fontWeight: "bold",
                color: "#782525ff",
                textShadow: "0 0 25px rgba(255,255,255,0.3)",
              }}
            ></h1>

            <p
              style={{
                fontSize: "1.5rem",
                marginTop: "1.5rem",
                color: "#ffe6e6",
                maxWidth: "900px",
                margin: "auto",
                lineHeight: "1.9",
                textAlign: "justify",
                textJustify: "inter-word",
                background: "rgba(0,0,0,0.5)",
                padding: "1.5rem",
                borderRadius: "10px",
                boxShadow: "0 4px 30px rgba(0,0,0,0.6)",
                backdropFilter: "blur(3px)",
                whiteSpace: "pre-wrap",
                transition: "all 0.3s ease-in-out",
              }}
            >
              {displayedText}
            </p>
          </div>
        </section>

        {/* 🔻 About Section */}
        <section
          id="about"
          style={{
            padding: "6rem 2rem",
            background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%)",
            color: "#1C1C1C",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative background elements */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "300px",
              height: "300px",
              background: "radial-gradient(circle, rgba(161,0,0,0.1) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-80px",
              left: "-80px",
              width: "400px",
              height: "400px",
              background: "radial-gradient(circle, rgba(161,0,0,0.08) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />

          {/* Section Header */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "inline-block",
                padding: "0.5rem 2rem",
                background: "rgba(161,0,0,0.1)",
                borderRadius: "30px",
                marginBottom: "1rem",
              }}
            >
              <h2
                style={{
                  color: "#A10000",
                  margin: 0,
                  fontWeight: "800",
                  fontSize: "2.5rem",
                  letterSpacing: "0.5px",
                }}
              >
                எங்களைப் பற்றி
              </h2>
            </div>

            {/* Decorative line */}
            <div
              style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(to right, transparent, #A10000, transparent)",
                margin: "1.5rem auto",
                borderRadius: "2px",
              }}
            />

            <p
              style={{
                maxWidth: "900px",
                margin: "2rem auto",
                lineHeight: "2",
                fontSize: "1.25rem",
                color: "#2C2C2C",
                fontWeight: "400",
                padding: "0 1rem",
                textAlign: "justify",
                textAlignLast: "center",
              }}
            >
              மக்களின் இயக்கம் என்பது சமத்துவம், சமூக நீதி மற்றும் ஒற்றுமைக்காக
              போராடும் ஒரு உறுதியான சக்தி. நாங்கள் கல்வி, தொழிலாளர் உரிமை,
              விவசாயிகள் நலன் மற்றும் பெண்களின் முன்னேற்றத்தை முக்கிய நோக்காக
              கொண்டுள்ளோம். எங்கள் இலக்கு — ஒவ்வொரு மனிதனும் தன் குரலை வெளிப்படுத்தும்
              சமத்துவ சமூகத்தை உருவாக்குவது.
            </p>
          </div>

          {/* Enhanced Image Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginTop: "4rem",
              maxWidth: "1200px",
              margin: "4rem auto 0",
              padding: "0 1rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            {[
              { src: "/background.jpg", caption: "கல்வி விழிப்புணர்வு", icon: "📚" },
              { src: "/background1.jpg", caption: "விவசாயிகள் நலன்", icon: "🌾" },
              { src: "/background.jpg", caption: "தொழிலாளர் உரிமை", icon: "⚒️" },
              { src: "/Image1.jpg", caption: "பெண்கள் முன்னேற்றம்", icon: "✊" },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                  background: "#fff",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 15px 40px rgba(161,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
                }}
              >
                {/* Image with overlay */}
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img
                    src={item.src}
                    alt={item.caption}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                  {/* Gradient overlay */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "50%",
                      background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                      pointerEvents: "none",
                    }}
                  />
                  {/* Icon badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      width: "50px",
                      height: "50px",
                      background: "rgba(255,255,255,0.95)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    }}
                  >
                    {item.icon}
                  </div>
                </div>

                {/* Caption */}
                <div style={{ padding: "1.5rem" }}>
                  <p
                    style={{
                      margin: 0,
                      fontWeight: "700",
                      fontSize: "1.15rem",
                      color: "#A10000",
                      letterSpacing: "0.3px",
                    }}
                  >
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 🔻 Mission Section */}
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
          <h2
            style={{
              color: "#EDEBD2",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
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
            சமூகத்தின் அடிப்படை நிலைகளிலிருந்து மாற்றம் உருவாக்குவது எங்கள்
            பணியாகும். கல்வி, வேலை வாய்ப்பு மற்றும் மருத்துவம் — இவை அனைத்தும்
            மக்களுக்கு உரிமையாக இருக்க வேண்டும் என்பதே எங்கள் நம்பிக்கை. நியாயம்,
            நம்பிக்கை மற்றும் ஒற்றுமை — இதுவே நாங்கள் நின்று கொண்டிருக்கும் தூண்கள்.
          </p>
        </section>

        {/* 🔻 Contact Section */}
        <section
          id="contact"
          style={{
            background: "radial-gradient(circle at top, #350a0aff, #dbb9b9ff)",
            color: "white",
            padding: "4rem 2rem",
            textAlign: "center",
            boxShadow: "inset 0 0 100px rgba(255,215,0,0.05)",
          }}
        >
          <h2
            style={{
              color: "#FFD700",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            தொடர்பு கொள்ள
          </h2>
          <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            📞 தொலைபேசி: +91 98765 43210
          </p>
          <p style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
            ✉️ மின்னஞ்சல்: contact@makkaliniyakkam.org
          </p>
          <p style={{ fontSize: "1.2rem" }}>
            📍 முகவரி: சென்னை, தமிழ்நாடு – இந்தியா
          </p>
        </section>
      </div>
    </div>
  );
}
