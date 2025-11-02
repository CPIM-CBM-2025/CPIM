"use client";
import Image from "next/image";

export default function HistoryPage() {
  const timelineData = [
    {
      year: "1964",
      title: "இந்திய கம்யூனிஸ்ட் கட்சி (மார்க்சிஸ்ட்) உருவாக்கம்",
      description: "மார்க்சிஸ்ட்-லெனினிஸ்ட் கொள்கைகளின் அடிப்படையில் புதிய கட்சி உருவாக்கப்பட்டது.",
      image: "/logo2.jpg"
    },
    {
      year: "1975",
      title: "கம்பம் பகுதியில் கட்சி அமைப்பு தொடக்கம்",
      description:
        "தேனி மாவட்டம் கம்பம் பகுதியில் முதல் கட்சி அமைப்பு நிறுவப்பட்டது. விவசாயிகள் மற்றும் தொழிலாளர்களின் உரிமைகளுக்காக போராட்டம் தொடங்கியது.",
      image: "/Image1.jpg"
    },
    {
      year: "1985",
      title: "விவசாயிகள் பெரும் போராட்டம்",
      description:
        "கம்பம் பகுதி விவசாயிகளின் நியாயமான விலை மற்றும் நீர் உரிமைக்காக வரலாற்று சிறப்புமிக்க போராட்டம் நடத்தப்பட்டது.",
      image: "/background.jpg"
    },
    {
      year: "1995",
      title: "பெண்கள் அமைப்பு வலுவடைதல்",
      description:
        "கம்பம் பகுதியில் பெண்கள் அமைப்பு வலுவடைந்து, பெண்களின் சமூக மற்றும் பொருளாதார உரிமைகளுக்காக செயல்பட்டது.",
      image: "/Image4.jpg"
    },
    {
      year: "2010",
      title: "இளைஞர் அமைப்பு விரிவாக்கம்",
      description:
        "கல்வி மற்றும் வேலைவாய்ப்பு பிரச்சினைகளில் இளைஞர்களின் பங்கேற்பு அதிகரித்தது. தொழில்நுட்ப கல்வி மற்றும் திறன் மேம்பாட்டு திட்டங்கள் தொடங்கப்பட்டன.",
      image: "/background1.jpg"
    },
    {
      year: "2020",
      title: "கோவிட் காலத்தில் சேவை",
      description:
        "கோவிட்-19 பெருந்தொற்று காலத்தில் மக்களுக்கு உணவு, மருந்து மற்றும் அத்தியாவசிய பொருட்கள் வழங்கும் சேவை மேற்கொள்ளப்பட்டது.",
      image: "/Image12.jpg"
    }
  ];

  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #A52A2A, #8B0000)",
          color: "white",
          padding: "4rem 1rem",
          textAlign: "center"
        }}
      >
        <h1 className="display-5 fw-bold mb-3">வரலாறு</h1>
        <p className="lead">கம்பம் பகுதி கம்யூனிஸ்ட் கட்சியின் வரலாற்று பயணம்</p>
      </div>

      {/* Timeline */}
      <div className="container py-5">
        <div className="timeline-container position-relative">
          <div
            className="timeline-line d-none d-md-block"
            style={{
              position: "absolute",
              left: "50%",
              top: "0",
              bottom: "0",
              width: "4px",
              backgroundColor: "#8B0000",
              transform: "translateX(-50%)"
            }}
          ></div>

          {timelineData.map((item, index) => (
            <div
              key={index}
              className="timeline-item mb-5"
              style={{ position: "relative" }}
            >
              <div
                className={`row align-items-center gy-4 ${
                  index % 2 === 0 ? "" : "flex-md-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="col-12 col-md-5">
                  <div
                    className="card border-0 shadow-sm"
                    style={{
                      background: "white",
                      borderRadius: "15px",
                      overflow: "hidden"
                    }}
                  >
                    <div style={{ position: "relative", height: "230px" }}>
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Year Circle */}
                <div className="col-12 col-md-2 text-center">
                  <div
                    style={{
                      backgroundColor: "#A52A2A",
                      color: "white",
                      borderRadius: "50%",
                      width: "80px",
                      height: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      border: "4px solid white",
                      boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
                    }}
                  >
                    {item.year}
                  </div>
                </div>

                {/* Description */}
                <div className="col-12 col-md-5">
                  <div
                    className="card border-0 shadow-sm"
                    style={{
                      background: index % 2 === 0 ? "white" : "#f8f9fa",
                      borderRadius: "15px"
                    }}
                  >
                    <div className="card-body p-4">
                      <h4
                        className="fw-bold mb-3"
                        style={{ color: "#2c3e50", fontSize: "1.25rem" }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          color: "#495057",
                          lineHeight: "1.6",
                          textAlign: "justify",
                          fontSize: "1rem"
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          background: "linear-gradient(135deg, #2c3e50, #34495e)",
          color: "white",
          padding: "3rem 1rem",
          textAlign: "center"
        }}
      >
        <h3 className="fw-bold mb-3">எங்கள் பாரம்பரியம்</h3>
        <p className="lead mb-0">
          60 ஆண்டுகளுக்கும் மேலாக மக்களின் உரிமைகளுக்காக போராடி வரும் எங்கள் கட்சி,
          கம்பம் பகுதியில் சமூக நீதி மற்றும் சமத்துவத்திற்காக தொடர்ந்து பணியாற்றி
          வருகிறது.
        </p>
      </div>
    </div>
  );
}
