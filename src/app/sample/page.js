"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ensures rendering happens only on client
    if (typeof window !== "undefined" && window.bootstrap) {
      const carousels = document.querySelectorAll(".carousel");
      carousels.forEach((c) => new window.bootstrap.Carousel(c, { interval: 1000 }));
    }
  }, []);

  if (!isClient) return null;

  return (
    <div
      style={{
        backgroundColor: "#f1e5e5ff",
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
          src="/images/logo.png"
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
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}
          >
            <div className="carousel-inner" style={{ height: "100%" }}>
              {/* Slide 1 */}
              <div className="carousel-item active" style={{ height: "100%" }}>
                <Image
                  src="/images/Image12.jpg"
                  alt="Slide 1"
                  fill
                  style={{ objectFit: "cover", filter: "brightness(0.6)" }}
                  priority
                />
                <div
                  className="carousel-content"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "5%",
                    transform: "translate(-50%, -50%)",
                    background: "rgba(0, 0, 0, 0.55)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "15px",
                    padding: "2rem 3rem",
                    color: "#fff",
                    textAlign: "center",
                    maxWidth: "700px",
                    boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
                    animation: "slideLeft 1.2s ease-in-out",
                  }}
                >
                  <h2 style={{ fontSize: "2.5rem", color: "#f0f00dff", marginBottom: "1rem" }}>
                    ஒவ்வொரு சமுதாயத்தின் வரலாறும் வர்க்கப் போராட்டத்தின் வரலாறே </h2>
                </div> </div>

              ```
              {/* Slide 2 */}
              <div className="carousel-item" style={{ height: "100%" }}>
                <Image
                  src="/images/Image15.jpg"
                  alt="Slide 2"
                  fill
                  style={{ objectFit: "cover", filter: "brightness(0.6)" }}
                />
                <div
                  className="carousel-content"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "5%",
                    transform: "translate(-50%, -50%)",
                    background: "rgba(0, 0, 0, 0.55)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "15px",
                    padding: "2rem 3rem",
                    color: "#fff",
                    textAlign: "center",
                    maxWidth: "700px",
                    boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
                    animation: "slideLeft 1.2s ease-in-out",
                  }}
                >
                  <h2 style={{ fontSize: "2.5rem", color: "#f5d310ff", marginBottom: "1rem" }}>
                    ஒவ்வொரு வர்க்கப் போராட்டமும் இறுதியில் ஒரு அரசியல் போராட்டமே
                  </h2>

                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item" style={{ height: "100%" }}>
                <Image
                  src="/images/Image13.jpg"
                  alt="Slide 3"
                  fill
                  style={{ objectFit: "cover", filter: "brightness(0.6)" }}
                />
                <div
                  className="carousel-content"
                  style={{
                    position: "absolute",
                    top: "50%",
                    right: "5%",
                    transform: "translate(-50%, -50%)",
                    background: "rgba(0, 0, 0, 0.55)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "15px",
                    padding: "2rem 3rem",
                    color: "#fff",
                    textAlign: "center",
                    maxWidth: "700px",
                    boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
                    animation: "slideLeft 1.2s ease-in-out",
                  }}
                >
                  <h3 style={{ fontSize: "2.5rem", color: "#FFD700", marginBottom: "1rem" }}>
                    புரட்சியை சாத்தியமற்றதாக ஆக்கும் அரசு, அதைவிட மோசமான வன்முறையை அவசியமாக்குகிறது
                  </h3>
                </div>
              </div>
            </div>

            {/* Controls */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>

          </div>

          {/* Animation Styles */}
          <style jsx>{`  
            @keyframes slideLeft {  
              from { transform: translate(-80%, -50%); opacity: 0; }  
              to { transform: translate(-50%, -50%); opacity: 1; }  
            }  
          `}</style>
        </section>

        {/* 🔻 About Section */}
        <section
          id="about"
          style={{
            padding: "6rem 2rem",
            background: "rgba(237, 217, 217, 0.08)", // 🔹 Transparent layer
            color: "#1C1C1C",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            backdropFilter: "blur(6px)", // 🔹 Frosted-glass effect
            boxShadow: "0 0 40px rgba(227, 133, 133, 1)",
            borderRadius: "12px",
            margin: "3rem auto",
            maxWidth: "1400px",
            zIndex: 1,
          }}
        >
          {/* 🔻 Decorative background elements */}
          <div
            style={{
              position: "absolute",
              top: "-50px",
              right: "-50px",
              width: "300px",
              height: "300px",
              background:
                "radial-gradient(circle, rgba(161,0,0,0.08) 0%, transparent 70%)",
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
              background:
                "radial-gradient(circle, rgba(248, 227, 227, 0.06) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />

          {/* 🔻 Section Header */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "inline-block",
                padding: "0.5rem 2rem",
                background: "rgba(189, 28, 28, 0.1)",
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

            {/* 🔻 Decorative line */}
            <div
              style={{
                width: "80px",
                height: "4px",
                background:
                  "linear-gradient(to right, transparent, #A10000, transparent)",
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
                color: "#300a0aff",
                fontWeight: "400",
                padding: "0 1rem",
                textAlign: "justify",
                textAlignLast: "center",
              }}
            >
              இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்) என்பது இந்திய தொழிலாளர் வர்க்கத்தின் புரட்சிகர முன்னோடி கட்சியாகும். இதன் குறிக்கோள் சமூகநீதி மற்றும் கம்யூனிசத்தை அடைவதற்காக தொழிலாளர் ஆட்சியை நிறுவுவது ஆகும். கட்சியின் அனைத்து செயல்பாடுகளிலும் மார்க்சிஸம்–லெனினிசம் என்ற தத்துவமும் கோட்பாடுகளும் வழிகாட்டியாகின்றன; அவை மனிதன் மனிதனைச் சுரண்டுவதற்கான முடிவை எட்டுவதற்கும், உழைப்பாளர் மக்களின் முழுமையான விடுதலையையும் அடைவதற்கும் சரியான வழியை காட்டுகின்றன. கட்சி, தொழிலாளர் சர்வதேச ஒற்றுமையின் கொடியை
              உயரமாக தாங்குகிறது.

            </p>
          </div>

          {/* 🔻 Enhanced Image Grid */}
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
              { src: "/images/background.jpg", caption: "கல்வி விழிப்புணர்வு", icon: "📚" },
              { src: "/images/background1.jpg", caption: "விவசாயிகள் நலன்", icon: "🌾" },
              { src: "/images/background.jpg", caption: "தொழிலாளர் உரிமை", icon: "⚒️" },
              { src: "/images/Image1.jpg", caption: "பெண்கள் முன்னேற்றம்", icon: "✊" },
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
                  background: "rgba(255,255,255,0.6)", // 🔹 Light transparency inside cards
                  backdropFilter: "blur(4px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 40px rgba(161,0,0,0.25)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0,0,0,0.15)";
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
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
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
                      background: "rgba(255,255,255,0.9)",
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
            padding: "6rem 2rem",
            background: "rgba(161, 0, 0, 0.08)", // 🔹 Transparent layer
            color: "white",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            backdropFilter: "blur(6px)", // 🔹 Frosted-glass look
            borderRadius: "12px",
            margin: "3rem auto",
            maxWidth: "1400px",
            zIndex: 1,
          }}
        >
          {/* 🔻 Decorative background elements */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-80px",
              width: "300px",
              height: "300px",
              background:
                "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-80px",
              left: "-100px",
              width: "400px",
              height: "400px",
              background:
                "radial-gradient(circle, rgba(255, 215, 0, 0.08) 0%, transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }}
          />

          {/* 🔻 Section Header */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <div
              style={{
                display: "inline-block",
                padding: "0.5rem 2rem",
                background: "rgba(189, 28, 28, 0.1)",
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
                எங்கள் நோக்கம்
              </h2>
            </div>

            {/* 🔻 Decorative line */}
            <div
              style={{
                width: "80px",
                height: "4px",
                background: "linear-gradient(to right, transparent, #FFD700, transparent)",
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
                color: "#300a0aff",
                fontWeight: "400",
                padding: "0 1rem",
                textAlign: "justify",
                textAlignLast: "center",
              }}
            >
              இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்) என்பது இந்தியாவில் உள்ள ஒரு இடதுசாரி அரசியல் கட்சியாகும். இது 1964-ல் இந்திய கம்யூனிஸ்ட் கட்சியிலிருந்து பிரிந்து உருவானது. கேரளத்திலும், மேற்கு வங்கத்திலும், திரிபுராவிலும் பலமான ஆதரவைக் கொண்டுள்ள இந்த கட்சி, சோசலிச சமுதாயத்தை அடைவதை நோக்கமாகக் கொண்டுள்ளது.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
