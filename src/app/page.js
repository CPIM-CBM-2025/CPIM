"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined" && window.bootstrap) {
      document
        .querySelectorAll(".carousel")
        .forEach(
          (c) => new window.bootstrap.Carousel(c, { interval: 2000 }) // 3-sec autoplay
        );
    }
  }, []);

  if (!isClient) return null;

  return (
    <div className="page-background">
      
      {/* Background Logo */}
      <div className="bg-logo">
        <Image src="/images/logo.png" alt="logo" fill priority />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* HERO SECTION */}
        <section className="hero-section">
          <div
            id="carouselExampleControls"
            className="carousel slide hero-carousel"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">

              {/* Slide 1 */}
              <div className="carousel-item active">
                <Image
                  src="/images/Image12.jpg"
                  alt="Slide 1"
                  fill
                  className="hero-img"
                />
                <div className="carousel-content">
                  <h2 style={{ color: "#f0f00d" }}>
                    ஒவ்வொரு சமுதாயத்தின் வரலாறும் வர்க்கப் போராட்டத்தின் வரலாறே
                  </h2>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="carousel-item">
                <Image
                  src="/images/Image15.jpg"
                  alt="Slide 2"
                  fill
                  className="hero-img"
                />
                <div className="carousel-content">
                  <h2 style={{ color: "#f5d310" }}>
                    ஒவ்வொரு வர்க்கப் போராட்டமும் இறுதியில் ஒரு அரசியல் போராட்டமே
                  </h2>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="carousel-item">
                <Image
                  src="/images/Image13.jpg"
                  alt="Slide 3"
                  fill
                  className="hero-img"
                />
                <div className="carousel-content">
                  <h3 style={{ color: "#FFD700" }}>
                    புரட்சியை சாத்தியமற்றதாக ஆக்கும் அரசு,
                    அதைவிட மோசமான வன்முறையை அவசியமாக்குகிறது
                  </h3>
                </div>
              </div>

            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section-box">
          <div className="circle circle-small"></div>
          <div className="circle circle-large"></div>

          <h2 className="section-title">எங்களைப் பற்றி</h2>
          <div className="decor-line"></div>

          <p className="section-p">
            இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்) என்பது இந்திய தொழிலாளர் வர்க்கத்தின்...
          </p>

          {/* Cards */}
          <div className="card-grid">
            {[
              { src: "/images/background.jpg", caption: "கல்வி விழிப்புணர்வு", icon: "📚" },
              { src: "/images/background1.jpg", caption: "விவசாயிகள் நலன்", icon: "🌾" },
              { src: "/images/background.jpg", caption: "தொழிலாளர் உரிமை", icon: "⚒️" },
              { src: "/images/Image1.jpg", caption: "பெண்கள் முன்னேற்றம்", icon: "✊" },
            ].map((item, index) => (
              <div className="card-item" key={index}>
                <div style={{ position: "relative" }}>
                  <img src={item.src} className="card-img" />
                  <div className="gradient-bottom"></div>
                  <div className="badge-icon">{item.icon}</div>
                </div>
                <p className="card-caption">{item.caption}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MISSION SECTION */}
        <section id="mission" className="mission-box">
          <h2 className="section-title">எங்கள் நோக்கம்</h2>
          <div className="decor-line mission-line"></div>

          <p className="section-p">
            இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்) என்பது இந்தியாவில் உள்ள ஒரு இடதுசாரி...
          </p>
        </section>

      </div>
    </div>
  );
}
