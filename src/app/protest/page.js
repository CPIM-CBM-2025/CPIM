"use client";
import Image from "next/image";

export default function ProtestPage() {
  const protests = [
    {
      id: 1,
      title: "விவசாயிகள் உரிமை பேரணி",
      date: "5 பிப்ரவரி 2025",
      time: "காலை 9:00 மணி",
      location: "கம்பம் பேருந்து நிலையம்",
      description:
        "விவசாயிகளின் கடன் தள்ளுபடி, நியாயமான விலை மற்றும் நீர் வசதி கோரி பேரணி நடத்தப்படும்.",
      participants: "500+",
      status: "வரவிருக்கும்",
      image: "/background.jpg",
      demands: ["கடன் தள்ளுபடி", "நியாயமான விலை", "நீர் வசதி", "உரம் மானியம்"],
    },
    {
      id: 2,
      title: "தொழிலாளர் ஊதிய உயர்வு போராட்டம்",
      date: "12 பிப்ரவரி 2025",
      time: "மாலை 4:00 மணி",
      location: "தொழிற்சாலை வாயில்",
      description:
        "குறைந்தபட்ச ஊதியம் ₹500 ஆக உயர்த்தக் கோரி தொழிலாளர்கள் போராட்டம் நடத்துவர்.",
      participants: "300+",
      status: "வரவிருக்கும்",
      image: "/Image1.jpg",
      demands: ["ஊதிய உயர்வு", "வேலை பாதுகாப்பு", "சமூக பாதுகாப்பு", "8 மணி நேர வேலை"],
    },
    {
      id: 3,
      title: "பெண்கள் பாதுகாப்பு கோரிக்கை ஆர்ப்பாட்டம்",
      date: "20 பிப்ரவரி 2025",
      time: "காலை 10:00 மணி",
      location: "மாவட்ட ஆட்சியர் அலுவலகம்",
      description:
        "பெண்களுக்கு எதிரான வன்முறை ஒழிப்பு மற்றும் பாதுகாப்பு நடவடிக்கைகள் கோரி ஆர்ப்பாட்டம்.",
      participants: "400+",
      status: "வரவிருக்கும்",
      image: "/Image4.jpg",
      demands: ["பாதுகாப்பு உறுதி", "சம ஊதியம்", "கல்வி வாய்ப்பு", "அரசியல் பங்கேற்பு"],
    },
    {
      id: 4,
      title: "இளைஞர் வேலைவாய்ப்பு கோரிக்கை மாநாடு",
      date: "25 பிப்ரவரி 2025",
      time: "காலை 11:00 மணி",
      location: "சமுதாய மண்டபம்",
      description:
        "இளைஞர்களுக்கு வேலைவாய்ப்பு மற்றும் திறன் மேம்பாட்டு திட்டங்கள் கோரி மாநாடு நடத்தப்படும்.",
      participants: "600+",
      status: "வரவிருக்கும்",
      image: "/background1.jpg",
      demands: [
        "வேலைவாய்ப்பு உறுதி",
        "திறன் பயிற்சி",
        "கல்வி கடன் தள்ளுபடி",
        "தொழில் வாய்ப்பு",
      ],
    },
  ];

  const pastProtests = [
    {
      title: "விலைவாசி உயர்வு எதிர்ப்பு போராட்டம்",
      date: "15 ஜனவரி 2025",
      result: "அரசு விலை கட்டுப்பாட்டு நடவடிக்கை எடுத்தது",
    },
    {
      title: "மின்கட்டண உயர்வு எதிர்ப்பு",
      date: "10 ஜனவரி 2025",
      result: "மின்கட்டண உயர்வு ரத்து செய்யப்பட்டது",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* 🔴 Header Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #8B0000, #A52A2A)",
          color: "white",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.8rem, 5vw, 3rem)",
            fontWeight: "700",
            marginBottom: "1rem",
          }}
        >
          அன்றாட போராட்டம்
        </h1>
        <p style={{ fontSize: "clamp(1rem, 3vw, 1.3rem)" }}>
          மக்களின் உரிமைகளுக்காக நடத்தப்படும் போராட்டங்கள்
        </p>
      </div>

      {/* 🔴 Upcoming Protests */}
      <div className="container py-5">
        <h2
          className="text-center mb-5"
          style={{
            color: "#8B0000",
            fontWeight: "bold",
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
          }}
        >
          வரவிருக்கும் போராட்டங்கள்
        </h2>

        <div className="row">
          {protests.map((protest, index) => (
            <div
              key={protest.id}
              className="col-lg-6 col-md-12 mb-4 d-flex align-items-stretch"
            >
              <div
                className="card border-0 shadow-sm w-100"
                style={{
                  borderRadius: "15px",
                  background: index % 2 === 0 ? "white" : "#f8f9fa",
                }}
              >
                <div style={{ position: "relative", height: "220px" }}>
                  <Image
                    src={protest.image}
                    alt={protest.title}
                    fill
                    style={{
                      objectFit: "cover",
                      borderRadius: "15px 15px 0 0",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      backgroundColor: "#28a745",
                      color: "white",
                      padding: "5px 12px",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                    }}
                  >
                    {protest.status}
                  </div>
                </div>

                <div className="card-body p-4">
                  <h4
                    className="fw-bold mb-3"
                    style={{
                      color: "#2c3e50",
                      fontSize: "clamp(1.2rem, 3vw, 1.4rem)",
                    }}
                  >
                    {protest.title}
                  </h4>

                  <div className="mb-3">
                    {[
                      ["fa-calendar-alt", protest.date],
                      ["fa-clock", protest.time],
                      ["fa-map-marker-alt", protest.location],
                      ["fa-users", `${protest.participants} பங்கேற்பாளர்கள்`],
                    ].map(([icon, text], i) => (
                      <div
                        key={i}
                        className="d-flex align-items-center mb-2"
                        style={{ flexWrap: "wrap" }}
                      >
                        <i
                          className={`fas ${icon} me-2`}
                          style={{ color: "#8B0000" }}
                        ></i>
                        <span style={{ fontSize: "clamp(0.9rem, 2.5vw, 1rem)" }}>
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p
                    style={{
                      color: "#495057",
                      lineHeight: "1.6",
                      textAlign: "justify",
                      fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                    }}
                  >
                    {protest.description}
                  </p>

                  <div className="mt-3">
                    <h6
                      style={{
                        color: "#8B0000",
                        fontWeight: "bold",
                        fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
                      }}
                    >
                      கோரிக்கைகள்:
                    </h6>
                    <div className="d-flex flex-wrap gap-2">
                      {protest.demands.map((demand, idx) => (
                        <span
                          key={idx}
                          className="badge"
                          style={{
                            backgroundColor: "#A52A2A",
                            color: "white",
                            padding: "6px 12px",
                            borderRadius: "15px",
                            fontSize: "clamp(0.8rem, 2.2vw, 0.9rem)",
                          }}
                        >
                          {demand}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    className="btn mt-3 w-100"
                    style={{
                      backgroundColor: "#8B0000",
                      color: "white",
                      border: "none",
                      padding: "10px",
                      borderRadius: "25px",
                      fontWeight: "600",
                      fontSize: "clamp(0.9rem, 2.5vw, 1rem)",
                    }}
                  >
                    பங்கேற்க பதிவு செய்யுங்கள்
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔴 Past Protests */}
      <div
        style={{
          background: "linear-gradient(135deg, #2c3e50, #34495e)",
          color: "white",
          padding: "4rem 1rem",
        }}
      >
        <div className="container">
          <h3
            className="text-center mb-4 fw-bold"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2rem)",
            }}
          >
            கடந்த போராட்டங்களின் வெற்றிகள்
          </h3>
          <div className="row">
            {pastProtests.map((protest, index) => (
              <div key={index} className="col-md-6 col-12 mb-3">
                <div
                  className="card bg-dark border-0 h-100"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="card-body">
                    <h5 className="text-warning">{protest.title}</h5>
                    <p className="text-light mb-1">{protest.date}</p>
                    <p className="text-success mb-0">
                      <i className="fas fa-check-circle me-2"></i>
                      {protest.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
