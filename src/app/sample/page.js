"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const slides = [
    {
      id: 1,
      image: "/Image1.jpg",
      title: "ஒற்றுமை, சமத்துவம், சுதந்திரம்",
      description:
        "எங்கள் கட்சியின் நோக்கம் ஒவ்வொரு தொழிலாளியும், விவசாயியும், மாணவரும், பெண்களும் தங்களது உரிமையை நிலைநிறுத்துவதற்கான போராட்டத்தில் ஒன்றிணைவது.",
    },
    {
      id: 2,
      image: "/Image15.jpg",
      title: "மக்களின் ஆட்சிக்காக",
      description:
        "மக்கள் சக்தியை முன்னிறுத்தும் அரசியல், சமூக மாற்றத்திற்காக நாங்கள் செயல்படுகிறோம்.",
    },
    {
      id: 3,
      image: "/Image12.jpg",
      title: "சமூக நீதி மற்றும் சமத்துவம்",
      description:
        "ஒவ்வொரு மனிதனும் சம உரிமையுடன் வாழும் சமூகத்தை உருவாக்குவதே எங்கள் கட்சி கனவு.",
    },
  ];

  const [current, setCurrent] = useState(0);

  // ✅ Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        padding: "4rem 1rem",
        background: "linear-gradient(to bottom right, #F5F5F5, #EAEAEA)",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          color: "#B22222",
          marginBottom: "2rem",
          fontWeight: "700",
        }}
      >
        எங்கள் கட்சியைப் பற்றி
      </h2>

      <div
        style={{
          position: "relative",
          maxWidth: "850px",
          margin: "0 auto",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          backgroundColor: "#fff",
          perspective: "1200px", // for 3D flip depth
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: -90 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              width={800}
              height={400}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderBottom: "3px solid #B22222",
                backfaceVisibility: "hidden",
              }}
            />

            {/* Text block animation */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              style={{ padding: "1.8rem" }}
            >
              <h3
                style={{
                  color: "#B22222",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                {slides[current].title}
              </h3>
              <p
                style={{
                  marginTop: "1rem",
                  color: "#333",
                  fontSize: "1.1rem",
                  lineHeight: "1.8",
                  textAlign: "justify",
                }}
              >
                {slides[current].description}
              </p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        {slides.map((_, index) => (
          <div
            key={index}
            style={{
              width: current === index ? "14px" : "10px",
              height: current === index ? "14px" : "10px",
              borderRadius: "50%",
              backgroundColor:
                current === index ? "#B22222" : "rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
            }}
          ></div>
        ))}
      </div>
    </section>
  );
}
