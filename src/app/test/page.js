"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ensures rendering happens only on client
    if (typeof window !== "undefined" && window.bootstrap) {
      const carousels = document.querySelectorAll(".carousel");
      carousels.forEach((c) => new window.bootstrap.Carousel(c, { interval: 4000 }));
    }
  }, []);

  if (!isClient) return null; // prevent SSR mismatch

  return (
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
              src="/Image12.jpg"
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
              src="/Image15.jpg"
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
              src="/Image13.jpg"
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

  );
}
