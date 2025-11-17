"use client";

import { motion } from "framer-motion";

export default function AmaippuChattamPage() {
  // --- Data Structure with Nested Content ---

  // Data for the table of contents (now reflecting nesting potential)
  const pirivugal = [
    {
      title: "பிரிவு - 1: பெயர்",
      id: "pirivu-1",
      sub_pirivugal: [],
    },
    {
      title: "பிரிவு - 2: குறிக்கோள்",
      id: "pirivu-2",
      sub_pirivugal: [
        { title: "அ. லெனினிசத்தின் வழிகாட்டுதல்", id: "pirivu-2a" },
        { title: "ஆ. பாட்டாளி வர்க்க சர்வாதிகாரம்", id: "pirivu-2b" },
      ],
    },
    {
      title: "பிரிவு - 3: கொடி",
      id: "pirivu-3",
      sub_pirivugal: [
        { title: "அ. கொடியின் நிறம்", id: "pirivu-3a" },
        { title: "ஆ. கொடியின் குறியீடு", id: "pirivu-3b" },
      ],
    },
    {
      title: "பிரிவு - 4: உறுப்பினர் தகுதி",
      id: "pirivu-4",
      sub_pirivugal: [
        { title: "அ. அடிப்படை தேவைகள்", id: "pirivu-4a" },
        { title: "ஆ. கடமைகள்", id: "pirivu-4b" },
      ],
    },
    { title: "பிரிவு - 5: (உள்ளடக்கம் இல்லை)", id: "pirivu-5", sub_pirivugal: [] },
  ];

  // Detailed content with nested 'subsections' and 'sub_subsections'
  const sections = [
    {
      id: "pirivu-1",
      title: "பிரிவு – 1",
      subtitle: "பெயர்",
      content: `இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்) என்பது கட்சியின் பெயராகும்.`,
      subsections: [],
    },
    {
      id: "pirivu-2",
      title: "பிரிவு – 2",
      subtitle: "குறிக்கோள்",
      content: `இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்) இந்தியத் தொழிலாளர் வர்க்கத்தின் புரட்சிகர முன்னோடிப்படைையாகும்.`,
      subsections: [
        {
          id: "pirivu-2a",
          title: "அ. லெனினிசத்தின் வழிகாட்டுதல்",
          content:
            "மக்கள் அனைவரும் ஒன்றே தத்துவமான மார்க்சிசம், லெனினிசத்தையும் அதன் கோட்பாடுகளையும் தனது எல்லா நடவடிக்கைகளிலும் கட்சி தன்னுடைய வழிகாட்டியாகக் கொண்டிருக்கிறது.",
          sub_subsections: [
            {
              id: "pirivu-2a-i",
              title: "i. சுரண்டலுக்கு முற்றுப்புள்ளி",
              content: "மனிதனை மனிதன் சுரண்டுவதற்கு முற்றுப்புள்ளி வைப்பதரும் முழு விடுதலைக்கும் இட்டுச் செல்லுதல்.",
            },
            {
              id: "pirivu-2a-ii",
              title: "ii. சர்வதேசியம்",
              content: "பாட்டாளி வர்க்க சர்வதேசியம் என்ற பெயரால் கட்சி உயர்ந்தபடி பிடிக்கிறது.",
            },
          ],
        },
        {
          id: "pirivu-2b",
          title: "ஆ. பாட்டாளி வர்க்க சர்வாதிகாரம்",
          content: "நாட்டில் பாட்டாளி வர்க்க சர்வாதிகார ஆட்சியை நிறுவுவதன் மூலம், சமூகநீதியும் கம்யூனிசமும் ஏற்படுத்துவது கட்சியின் குறிக்கோளாகும்.",
          sub_subsections: [],
        },
      ],
    },
    {
      id: "pirivu-3",
      title: "பிரிவு – 3",
      subtitle: "கொடி",
      content: `கொடியின் அமைப்பு கீழ்க்கண்டவாறு நிர்ணயிக்கப்பட்டுள்ளது:`,
      subsections: [
        {
          id: "pirivu-3a",
          title: "அ. கொடியின் நிறம் மற்றும் அளவு",
          content: "அலங்கையைப் போல ஒன்றரை பங்கு நீள உள்ள செங்கொடி.",
          sub_subsections: [
            {
              id: "pirivu-3a-i",
              title: "i. சிவப்பு நிறத்தின் பொருள்",
              content: "புரட்சி மற்றும் தியாகத்தை குறிக்கிறது.",
            },
          ],
        },
        {
          id: "pirivu-3b",
          title: "ஆ. கொடியின் குறியீடு",
          content: "கொடியின் மத்தியிலே ஒன்றுக்கொன்று குறுக்காக உள்ள சரியாளர் சத்தியில் வெள்ளை நிறத்தில் இருக்கும்.",
          sub_subsections: [
            {
              id: "pirivu-3b-i",
              title: "i. சுத்தியல் மற்றும் அரிவாள்",
              content: "பாட்டாளி வர்க்கம் மற்றும் உழவர் வர்க்கத்தின் ஒற்றுமையைக் குறிக்கிறது.",
            },
          ],
        },
      ],
    },
    {
      id: "pirivu-4",
      title: "பிரிவு – 4",
      subtitle: "உறுப்பினர் தகுதி",
      content: `கட்சியில் சேர விரும்புவோர் சில அடிப்படை தகுதிகளை பூர்த்தி செய்ய வேண்டும்.`,
      subsections: [
        {
          id: "pirivu-4a",
          title: "அ. அடிப்படை தேவைகள்",
          list: [
            "பதினெட்டு (18) வயது மற்றும் மேற்பட்ட வயது உடையவும், இந்தியாவில் குடியுரிமையுடைய ஒருவரும் கட்சியின் உறுப்பினராக தகுதியுடையவராவார்.",
            "அவர் கட்சியின் திட்டத்தையும் அமைப்பு சட்டத்தையும் ஏற்றுக் கொள்ள வேண்டும்.",
          ],
          sub_subsections: [],
        },
        {
          id: "pirivu-4b",
          title: "ஆ. கடமைகள்",
          list: [
            "கட்சியின் ஸ்திரமானாக்களில் நடைபெறும் வேலையை தொடர்ந்து செய்ய வேண்டும்.",
            "கொடுபட்ட செயல்பாடுகளில் ஒழுங்காக பங்குபெற வேண்டும்.",
          ],
          sub_subsections: [
            {
              id: "pirivu-4b-i",
              title: "i. நடத்தை விதிகள்",
              content: "ஒழுக்கம் மற்றும் அர்ப்பணிப்புடன் செயல்படுதல் அவசியம்.",
            },
          ],
        },
      ],
    },
    {
      id: "pirivu-5",
      title: "பிரிவு – 5",
      subtitle: "(உள்ளடக்கம் இல்லை)",
      content: `இந்த பிரிவின் விவரங்கள் இங்கு கொடுக்கப்படவில்லை.`,
      subsections: [],
    },
  ];

  // --- Utility Function for Scrolling ---
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // --- Component Rendering ---
  return (
    <section
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#fff", // Single light background
        padding: "5rem 8%",
        fontFamily: "'Noto Sans Tamil', sans-serif",
        color: "#222",
        lineHeight: "1.8",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* 🔹 Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            textAlign: "center",
            fontSize: "clamp(1.7rem, 4vw, 2.8rem)",
            fontWeight: 700,
            marginBottom: "0.5rem",
            color: "#222", // Darker text for title
          }}
        >
          அமைப்பு சட்டம்
        </motion.h1>

        {/* 🔹 Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            textAlign: "center",
            fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)",
            fontWeight: 600,
            marginBottom: "2rem",
            color: "#444",
          }}
        >
          அமைப்புச் சட்டம் மற்றும் விதிகள்
        </motion.h2>

        <div
          style={{
            width: "100px",
            height: "4px",
            background: "#c62828",
            margin: "0 auto 3rem",
            borderRadius: "5px",
            opacity: 0.8,
          }}
        />

        {/* 🔹 Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: 1.8,
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            textAlign: "justify",
            marginBottom: "2.8rem",
          }}
        >
          1968 டிசம்பர் 23-29 தேதிகளில் கோச்சியில் நடைபெற்ற கூடத்தில் 8வது அகில இந்திய மாநாட்டில் ஏற்றுக்கொள்ளப்பட்ட அமைப்புச் சட்டமும், 1988 செப்டம்பர் 8-10 தேதிகளில் நடைபெற்ற மத்திய கமிட்டி கூட்டத்தில் நிலவரத்தை விடுபடுத்தும் விதிகளும் தொடர்ந்து 9வது அகில இந்திய மாநாடு. விஜயவாடாவில் நடைபெற்ற 11வது அகில இந்திய மாநாடு. சலகத்தாவில் நடைபெற்ற 12வது அகில இந்திய மாநாடு. 1988 டிசம்பர் 27 முதல் 1989 ஜனவரி 1. மத்திய திருவனந்தபுரத்தில் நடைபெற்ற 13வது அகில இந்திய மாநாடு. 1992 ஜன 3-6ல் சென்னையில் நடைபெற்ற 14வது மாநாடு மற்றும் 1995 ஏப்ரல் 3-8 சண்டிகாரில் நடைபெற்ற 15வது மாநாடு மற்றும் 2012 ஏப்ரலில் நடைபெற்ற 20வது மாநாடுகளில் மேற்கொள்ளப்பட்ட திருத்தங்கள் உள்ளடக்கிய பதிப்பு.
        </motion.p>

        {/* 🔹 Download Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
            marginBottom: "4rem",
          }}
        >
          <button
            style={{
              backgroundColor: "#c62828",
              padding: "0.9rem 2rem",
              color: "#fff",
              border: "none",
              borderRadius: "5px", // Simple rounded corners
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 5px 12px rgba(0,0,0,0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 3px 8px rgba(0,0,0,0.2)";
            }}
          >
            Download PDF
          </button>

        { /* <button
            style={{
              backgroundColor: "#c62828",
              padding: "0.9rem 2rem",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 3px 8px rgba(0,0,0,0.2)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 5px 12px rgba(0,0,0,0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 3px 8px rgba(0,0,0,0.2)";
            }}
          >
            Download EPUB
          </button> */}
        </motion.div>

        {/* 🔹 Pirivu List / Table of Contents */}
        <div style={{ maxWidth: "900px", margin: "0 auto 5rem" }}>
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              marginBottom: "1.5rem",
              color: "#333",
              borderBottom: "2px solid #ddd",
              paddingBottom: "0.5rem",
            }}
          >
           பொருளடக்கம்
          </h3>

          <ul style={{ listStyle: "none", paddingLeft: 0, lineHeight: 1.8 }}>
            {pirivugal.map((mainItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Main Pirivu Item */}
                <li
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: mainItem.sub_pirivugal.length > 0 ? "600" : "500",
                    cursor: "pointer",
                    color: "#222",
                    padding: "0.4rem 0",
                    transition: "color 0.3s",
                    marginBottom: mainItem.sub_pirivugal.length > 0 ? "0" : "0.5rem",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#c62828";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "#222";
                  }}
                  onClick={() => scrollToSection(mainItem.id)}
                >
                  {index + 1}. {mainItem.title.split(': ')[1] || mainItem.title}
                </li>

                {/* Sub Pirivugal List */}
                {mainItem.sub_pirivugal.length > 0 && (
                  <ul style={{ listStyle: "none", paddingLeft: "1.5rem", marginBottom: "0.5rem" }}>
                    {mainItem.sub_pirivugal.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        style={{
                          fontSize: "1rem",
                          color: "#444",
                          cursor: "pointer",
                          padding: "0.2rem 0",
                          transition: "color 0.3s",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.color = "#c62828";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.color = "#444";
                        }}
                        onClick={() => scrollToSection(subItem.id)}
                      >
                        {subItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </ul>
        </div>

        {/* 🔹 Detailed Content Sections (Flat, No Card Design) */}
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              id={sec.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              style={{
                marginBottom: "4rem",
                padding: "0", // Removed padding/styling for flat look
              }}
            >
              {/* Main Pirivu Title */}
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: "800",
                  color: "#111",
                  marginBottom: "0.3rem",
                }}
              >
                {sec.title}
              </h2>

              {/* Main Sub Title */}
              <h3
                style={{
                  fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
                  fontWeight: "700",
                  marginBottom: "1.5rem",
                  color: "#c62828",
                }}
              >
                {sec.subtitle}
              </h3>

              {/* Main Paragraph Content */}
              {sec.content && (
                <p
                  style={{
                    fontSize: "1.05rem",
                    textAlign: "justify",
                    color: "#333",
                    marginBottom: sec.subsections.length > 0 ? "2rem" : "0",
                  }}
                >
                  {sec.content}
                </p>
              )}

              {/* 1st Level Sub-Content */}
              {sec.subsections?.map((subSec, j) => (
                <motion.div
                  key={j}
                  id={subSec.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: j * 0.1, duration: 0.5 }}
                  style={{
                    marginBottom: "2rem",
                    paddingLeft: "15px",
                    borderLeft: "3px solid #eee", // Subtle separator
                  }}
                >
                  {/* 1st Level Subtitle */}
                  <h4
                    style={{
                      fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                      fontWeight: "700",
                      marginBottom: "0.8rem",
                      color: "#333",
                    }}
                  >
                    {subSec.title}
                  </h4>

                  {/* 1st Level Paragraph Content */}
                  {subSec.content && (
                    <p
                      style={{
                        fontSize: "1rem",
                        textAlign: "justify",
                        color: "#444",
                        marginBottom: subSec.sub_subsections?.length > 0 ? "1.5rem" : "0.5rem",
                      }}
                    >
                      {subSec.content}
                    </p>
                  )}

                  {/* 1st Level List Content */}
                  {subSec.list && (
                    <ul
                      style={{
                        paddingLeft: "1.2rem",
                        fontSize: "1rem",
                        color: "#444",
                        marginBottom: subSec.sub_subsections?.length > 0 ? "1.5rem" : "0.5rem",
                      }}
                    >
                      {subSec.list.map((item, idx) => (
                        <li key={idx} style={{ marginBottom: "0.5rem" }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* 2nd Level Sub-Sub-Content */}
                  {subSec.sub_subsections?.map((subSubSec, k) => (
                    <motion.div
                      key={k}
                      id={subSubSec.id}
                      initial={{ opacity: 0, x: -5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ delay: k * 0.1, duration: 0.4 }}
                      style={{
                        marginBottom: "1rem",
                        paddingLeft: "10px",
                      }}
                    >
                      {/* 2nd Level Sub-Subtitle */}
                      <h5
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          marginBottom: "0.5rem",
                          color: "#555",
                        }}
                      >
                        {subSubSec.title}
                      </h5>
                      {/* 2nd Level Paragraph Content */}
                      {subSubSec.content && (
                        <p
                          style={{
                            fontSize: "0.95rem",
                            textAlign: "justify",
                            color: "#666",
                            paddingLeft: "10px",
                          }}
                        >
                          {subSubSec.content}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              ))}
              <hr style={{ border: 'none', borderTop: '1px solid #f0f0f0', margin: '40px 0' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}