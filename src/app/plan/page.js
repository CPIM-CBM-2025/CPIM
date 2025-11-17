"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function KatchiThittamPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const headings = [
    "அறிமுகம்",
    "நற்கால உலகில் சோசலிசம்",
    "சுதந்திரமும் அதற்குப் பின்னரும்",
    "அயல்துறைத் கொள்கை",
    "அரசு கட்டமைப்பும் ஜனநாயகமும்",
    "மக்கள் ஜனநாயகமும் அதன் திட்டமும்",
    "மக்கள் ஜனநாயக முன்னேற்றத்தின் கட்டுதல்",
    "கம்யூனிஸ்ட் கட்சியின் கட்டுதல்",
  ];

  const content = {
    1: {
      1: {
        main: "இந்திய மக்களின் முற்போக்கு, ஏகாதிபத்திய எதிர்ப்பு, புரட்சிகரப் பாரம்பரியத்தை கம்யூனிஸ்ட் கட்சி தன்னகத்தே கொண்டுள்ளது.",
        subPoints: [
          "ரஷ்யாவில் நிகழ்ந்த அக்டோபர் சோசலிசப் புரட்சியினால் ஈர்க்கப்பட்ட உறுதிமிக்க ஏகாதிபத்திய எதிர்ப்புப் போராளிகளின் சிறிய குழு ஒன்று 1920இல் கம்யூனிஸ்ட் கட்சியைத் துவக்கியது.",
          "கட்சி துவக்கப்பட்டது முதலே பூரண சுதந்திரம் மற்றும் அடிப்படையான சமூக மாற்றத்திற்காகப் போராடுவதை தன் முன் உள்ள இலக்காகக் கொண்டிருந்தது."
        ]
      }
    },
    2: ["இருபதாம் நூற்றாண்டில் உலகம் பல முக்கியமான மாற்றங்களைக் கண்டுள்ளது.",
        "இருபதாம் நூற்றாண்டில் உலகம் பல முக்கியமான மாற்றங்களைக் கண்டுள்ளது."


    ],
    3: ["சுதந்திரப் போராட்டத்தில் பெருமளவிலான இந்திய மக்கள் உத்வேகத்துடன் பங்கேற்று அதை வெற்றிகரமாக்கினர்."],
    4: ["எந்தவொரு அரசு மற்றும் அதன் அரசாங்கத்தின் அயல்துறை கொள்கையானது, இறுதியில், அதன் உள்நாட்டு கொள்கையின் வெளிப்பாடுதானே தவிர வேறு எதுவுமல்ல."],
    5: ["இன்றைய இந்திய அரசு என்பது, பெரு முதலாளிகளால் தலைமை தாங்கப்படுகிற முதலாளித்துவ – நிலப்பிரபுத்துவ வர்க்க ஆட்சியின் கருவியாகும்."],
    6: {
      main: "இன்றைய முதலாளித்துவ, நிலப்பிரபுத்துவ ஆட்சியின்கீழ், வறுமை, பசி, வேலையின்மை, சுரண்டல் ஆகிய பின் தங்கிய நிலைமைகளிலிருந்து மக்களை விடுதலை செய்ய முடியாது என்பதையே அனுபவம் காட்டுகிறது.",
      subPoints: {
        1: [
          "வளர்ச்சியடைந்த முதலாளித்துவ நாடுகளில், வளர்ந்துவந்த முதலாளித்துவம் முதலாளித்துவத்திற்கு முந்தைய சமுதாயத்தை முற்றாக ஒழித்தது.",
          "அதன் சாம்பலிலிருந்தே முதலாளித்துவம் வளர்ச்சியடைந்தது ஆனால், இந்தியாவில் முதலாளித்துவத்திற்கு முந்தைய சமுதாயத்தை சிதைக்காமல், அதன் மீதே முதலாளித்துவம் உருவாயிற்று."
        ]
      },
      additional: [
        "முதலாளித்துவம் வளர்ச்சி அடைய அதற்கு முந்தைய சமூகம் நொறுக்கப்பட வேண்டுமென்பது மிக முக்கிய முன் நிபந்தனையாகும்.",
        "இன்றைய இந்திய சமூகமானது, ஏகபோக முதலாளிகளால் ஆதிக்கம் செய்யப்படுகிற சாதிய, மத மற்றும் ஆதிவாசி அமைப்புகளைக் கொண்ட ஒரு வினோதமான கலவையாக உள்ளது."
      ]
    },
    7: ["கட்டுமான நிலைகள்...", "பொருளாதார அடித்தளம்...", "சமூக அடித்தளம்...", "அமைப்பு முன்னேற்றம்..."],
    8: ["கட்சி அமைப்பின் வரலாறு...", "திட்டமிடல்...", "செயல்விளைவு..."]
  };

  const contentMaxWidth = "1100px";

  return (
    <div className="page-background">
          <div className="bg-logo">
            <Image src="/images/logo.png" alt="logo" fill priority />
          </div>
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff",
        padding: isMobile ? "3rem 4%" : "5rem 3%",
        fontFamily: "'Noto Sans Tamil', sans-serif",
        color: "#222",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
          fontWeight: "700",
          color: "#a31d1d",
          marginBottom: "1.5rem",
          width: "100%",
          maxWidth: contentMaxWidth,
          textAlign: "left",
        }}
      >
        கட்சி திட்டம்
      </motion.h1>

      <hr
        style={{
          height: "6px",
          border: "none",
          borderRadius: "10px",
          backgroundColor: "#800000",
          margin: "0 0 3rem 0",
          width: "100%",
          maxWidth: contentMaxWidth,
          boxShadow: "0 2px 8px rgba(128, 0, 0, 0.3)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          width: "100%",
          maxWidth: contentMaxWidth,
          backgroundColor: "#fff",
          lineHeight: "1.9",
          marginBottom: "3rem",
        }}
      >
        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
            color: "#333",
            textAlign: "justify",
            marginBottom: "2rem",
          }}
        >
          1964 ஆம் ஆண்டு அக்டோபர் 31 முதல் நவம்பர் 7 வரை கல்கத்தாவில் நடைபெற்ற
          இந்திய கம்யூனிஸ்ட் கட்சியின் ஏழாவது அகவை மாநாட்டில் முதன்முதலில் இத்திட்டம்
          நிறைவேற்றப்பட்டது. பின்னர் 2000 ஆம் ஆண்டு திருவனந்தபுரத்தில் நடைபெற்ற
          சிறப்பு மாநாட்டில் தற்போதைய சமூக, பொருளாதார சூழ்நிலைகளை கருத்தில் கொண்டு
          இது புதுப்பிக்கப்பட்டது. இத்திட்டம், தொழிலாளர் வர்க்கத்தின் முன்னேற்றம்,
          விவசாய வளர்ச்சி மற்றும் சமூக சமத்துவத்தை நோக்கிய கட்சியின் செயல்திட்டமாகும்.
        </p>

        <div style={{ marginTop: "2rem" }}>
          <Link
            href="/docs/katchi thittam.pdf"
            download
            style={{
              backgroundColor: "#a31d1d",
              color: "#fff",
              padding: "0.9rem 2rem",
              borderRadius: "30px",
              fontSize: "1rem",
              fontWeight: "600",
              textDecoration: "none",
              boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#7b1010")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#a31d1d")}
          >
            PDF பதிவிறக்குக
          </Link>
        </div>
      </motion.div>

      <div style={{ width: "100%", maxWidth: contentMaxWidth, marginBottom: "3rem" }}>
        {headings.map((item, index) => (
          <motion.div
            key={index}
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            style={{
              background: "#8B0000",
              color: "white",
              padding: "12px 18px",
              margin: "10px 0",
              borderRadius: "6px",
              fontSize: isMobile ? "1rem" : "1.2rem",
              fontWeight: "bold",
              borderLeft: "6px solid #550000",
            }}
          >
            {index + 1}. {item}
          </motion.div>
        ))}
      </div>

      <div style={{ width: "100%", maxWidth: contentMaxWidth, padding: "20px 0" }}>
        {headings.map((head, idx) => (
          <div key={idx} style={{ marginBottom: "40px" }}>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                fontSize: isMobile ? "1.2rem" : "1.5rem",
                fontWeight: "bold",
                marginBottom: "15px",
                color: "#800000",
              }}
            >
              {idx + 1}. {head}
            </motion.h2>

            {Array.isArray(content[idx + 1]) ? (
              content[idx + 1].map((para, pIndex) => (
                <motion.p
                  key={pIndex}
                  initial={{ rotateX: 90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: pIndex * 0.1 }}
                  style={{
                    fontSize: isMobile ? "1rem" : "1.1rem",
                    lineHeight: "1.8",
                    marginBottom: "18px",
                    textAlign: "justify",
                    paddingLeft: "20px",
                    textIndent: "-20px",
                  }}
                >
                  <span style={{ fontWeight: "bold", marginRight: "5px" }}>{idx + 1}.{pIndex + 1}</span> {para}
                </motion.p>
              ))
            ) : content[idx + 1] && typeof content[idx + 1] === 'object' ? (
              <div>
                <motion.p
                  initial={{ rotateX: 90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    fontSize: isMobile ? "1rem" : "1.1rem",
                    lineHeight: "1.8",
                    marginBottom: "18px",
                    textAlign: "justify",
                    paddingLeft: "20px",
                    textIndent: "-20px",
                  }}
                >
                  <span style={{ fontWeight: "bold", marginRight: "5px" }}>{idx + 1}.1</span> {content[idx + 1].main}
                </motion.p>

                {content[idx + 1].subPoints && Object.keys(content[idx + 1].subPoints).map((subKey) => (
                  <div key={subKey} style={{ marginLeft: "20px", marginBottom: "15px" }}>
                    <h4 style={{
                      fontSize: isMobile ? "1.05rem" : "1.2rem",
                      fontWeight: "bold",
                      color: "#600000",
                      marginBottom: "10px"
                    }}>
                      {idx + 1}.{parseInt(subKey) + 1}
                    </h4>
                    {content[idx + 1].subPoints[subKey].map((subPara, subIndex) => (
                      <motion.p
                        key={subIndex}
                        initial={{ rotateX: 90, opacity: 0 }}
                        animate={{ rotateX: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: subIndex * 0.1 }}
                        style={{
                          fontSize: isMobile ? "0.95rem" : "1.05rem",
                          lineHeight: "1.8",
                          marginBottom: "12px",
                          textAlign: "justify",
                          paddingLeft: "15px",
                          textIndent: "-15px",
                        }}
                      >
                        <span style={{ fontWeight: "bold", marginRight: "5px" }}>{subIndex + 1}.</span> {subPara}
                      </motion.p>
                    ))}
                  </div>
                ))}

                {content[idx + 1].additional && content[idx + 1].additional.map((para, pIndex) => (
                  <motion.p
                    key={`additional-${pIndex}`}
                    initial={{ rotateX: 90, opacity: 0 }}
                    animate={{ rotateX: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: pIndex * 0.1 }}
                    style={{
                      fontSize: isMobile ? "1rem" : "1.1rem",
                      lineHeight: "1.8",
                      marginBottom: "18px",
                      textAlign: "justify",
                      paddingLeft: "20px",
                      textIndent: "-20px",
                    }}
                  >
                    <span style={{ fontWeight: "bold", marginRight: "5px" }}>{idx + 1}.{Object.keys(content[idx + 1].subPoints || {}).length + pIndex + 2}</span> {para}
                  </motion.p>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}