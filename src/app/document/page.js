"use client";
import Image from "next/image";

export default function DocumentsPage() {
  const documents = [
    {
      category: "கட்சி ஆவணங்கள்",
      items: [
        { title: "கட்சி அமைப்பு சட்டம்",file: "/docs/amaippu chattam.pdf" },
        { title: "கட்சி திட்டம் 2024",file: "/docs/katchi thittam.pdf" },
       /* { title: "உறுப்பினர் விண்ணப்பம்", type: "PDF", size: "1.1 MB", downloads: 2100, file: "/docs/party-constitution.pdf" }*/
      ]
    },
    {
      category: "அறிக்கைகள்",
      items: [
        { title: "2024 ஆண்டு செயல்பாட்டு அறிக்கை",file: "/docs/party-constitution.pdf" },
        { title: "நிதி அறிக்கை 2024", type: "PDF",file: "/docs/party-constitution.pdf" },
       /* { title: "தேர்தல் அறிக்கை", type: "PDF", size: "3.1 MB", downloads: 890, file: "/docs/party-constitution.pdf" } */
      ]
    },
    {
      category: "வரலாற்று ஆவணங்கள்",
      items: [
        { title: "கம்பம் பகுதி கட்சி வரலாறு",file: "/docs/party-constitution.pdf" },
        { title: "முக்கிய போராட்டங்களின் வரலாறு",file: "/docs/party-constitution.pdf" },
        /*{ title: "தலைவர்கள் வாழ்க்கை வரலாறு", type: "PDF", size: "4.1 MB", downloads: 920, file: "/docs/party-constitution.pdf" }*/
      ]
    }
  ];

  const leaders = [
    {
      name: "தோழர் கே ஆர் லெனின்",
      position: "ஒன்பதாவது மாநாடு ஏரியா செயலாளர்",
      image: "/images/Image1.jpg",
      achievements: ["விவசாயிகள் போராட்டம் தலைமை", "தொழிலாளர் சங்க அமைப்பு", "கல்வி சீர்திருத்தம்"]
    },
    {
      name: "தோழர் கே ஆர் லெனின்",
      position: "எட்டாவது மாநாடு ஏரியா செயலாளர்",
      experience: "18 ஆண்டுகள்",
      image: "/images/Image4.jpg",
      achievements: ["பெண்கள் உரிமை போராட்டம்", "சுயதொழில் திட்டம்", "கல்வி உதவித்தொகை"]
    },
    {
      name: " தோழர் ஜி எம் நாகராஜன்",
      position: "ஏழாவது மாநாடு ஏரியா செயலாளர்",
      experience: "12 ஆண்டுகள்",
      image: "/images/background1.jpg",
      achievements: ["வேலைவாய்ப்பு முகாம்", "திறன் மேம்பாட்டு பயிற்சி", "கல்வி கடன் தள்ளுபடி"]
    },
    {
      name: "தோழர் ஜி எம் நாகராஜன்",
      position: "ஆறாவது மாநாடு ஏரியா செயலாளர்",
      experience: "25 ஆண்டுகள்",
      image: "/images/Image1.jpg",
      achievements: ["விவசாயிகள் போராட்டம் தலைமை", "தொழிலாளர் சங்க அமைப்பு", "கல்வி சீர்திருத்தம்"]
    },
    {
      name: "தோழர் ஜி எம் நாகராஜன்",
      position: "ஐந்தாவது மாநாடு ஏரியா செயலாளர்",
      experience: "18 ஆண்டுகள்",
      image: "/images/Image4.jpg",
      achievements: ["பெண்கள் உரிமை போராட்டம்", "சுயதொழில் திட்டம்", "கல்வி உதவித்தொகை"]
    },
    {
      name: "தோழர் முருகன்",
      position: "இளைஞர் அமைப்பு தலைவர்",
      experience: "12 ஆண்டுகள்",
      image: "/images/background1.jpg",
      achievements: ["வேலைவாய்ப்பு முகாம்", "திறன் மேம்பாட்டு பயிற்சி", "கல்வி கடன் தள்ளுபடி"]
    },
    {
      name: "தோழர் ராமசாமி",
      position: "மாவட்ட செயலாளர்",
      experience: "25 ஆண்டுகள்",
      image: "/images/Image1.jpg",
      achievements: ["விவசாயிகள் போராட்டம் தலைமை", "தொழிலாளர் சங்க அமைப்பு", "கல்வி சீர்திருத்தம்"]
    },
    {
      name: "தோழர் கமலா",
      position: "பெண்கள் அமைப்பு தலைவர்",
      experience: "18 ஆண்டுகள்",
      image: "/images/Image4.jpg",
      achievements: ["பெண்கள் உரிமை போராட்டம்", "சுயதொழில் திட்டம்", "கல்வி உதவித்தொகை"]
    },
    {
      name: "தோழர் முருகன்",
      position: "இளைஞர் அமைப்பு தலைவர்",
      experience: "12 ஆண்டுகள்",
      image: "/images/background1.jpg",
      achievements: ["வேலைவாய்ப்பு முகாம்", "திறன் மேம்பாட்டு பயிற்சி", "கல்வி கடன் தள்ளுபடி"]
    }
  ];

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", overflowX: "hidden" }}>

      {/* 🔻 Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #A52A2A, #8B0000)",
          color: "white",
          padding: "3rem 1rem",
          textAlign: "center"
        }}
      >
        <h1 className="fw-bold" style={{ fontSize: "2rem" }}>ஆவணங்கள்</h1>
        <p style={{ fontSize: "1rem" }}>கட்சி ஆவணங்கள் மற்றும் தலைவர்களின் பதிவுகள்</p>
      </div>

      {/* 🔻 Main Content */}
      <div className="container py-5">
        <div className="row gy-5">

          {/* 🔸 DOCUMENTS */}
          <div className="col-12">
            <h2 className="mb-4 text-center text-lg-start" style={{ color: "#8B0000", fontWeight: "bold" }}>
              பதிவிறக்க ஆவணங்கள்
            </h2>

            {documents.map((category, index) => (
              <div key={index} className="mb-5">
                <h4
                  className="mb-3 text-center text-lg-start"
                  style={{
                    color: "#A52A2A",
                    borderBottom: "2px solid #A52A2A",
                    paddingBottom: "10px",
                    fontSize: "1.2rem"
                  }}
                >
                  {category.category}
                </h4>

                <div className="row gy-4">
                  {category.items.map((doc, docIndex) => (
                    <div key={docIndex} className="col-md-6 col-sm-12">
                      <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "10px" }}>
                        <div className="card-body p-4">
                          <div className="d-flex align-items-start align-items-sm-center flex-column flex-sm-row mb-3">
                            <i className="fas fa-file-pdf fa-2x me-3 mb-2 mb-sm-0" style={{ color: "#dc3545" }}></i>
                            <div>
                              <h6 className="fw-bold mb-1" style={{ fontSize: "1rem" }}>{doc.title}</h6>
                              {/*<small className="text-muted">
                                {doc.type} • {doc.size}
                              </small>*/}
                            </div>
                          </div>

                          <div className="d-flex justify-content-between align-items-center flex-wrap">
                           {/* <small className="text-muted mb-2 mb-sm-0">
                              <i className="fas fa-download me-1"></i>
                              {doc.downloads} பதிவிறக்கங்கள்
                            </small> */}

                            <a
                              href={doc.file}
                              download
                              className="btn btn-sm"
                              style={{
                                backgroundColor: "#8B0000",
                                color: "white",
                                borderRadius: "20px",
                                padding: "5px 15px",
                                fontWeight: "500"
                              }}
                            >
                              பதிவிறக்கம்
                            </a>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

          {/* 🔸 LEADERS — UPDATED TO 3 PER ROW */}
          <div className="col-12">
            <h4 className="mb-4 text-center text-lg-start" style={{ color: "#8B0000", fontWeight: "bold" }}>
              முக்கிய தலைவர்கள்
            </h4>

            <div className="row gy-5 mt-2">
              {leaders.map((leader, index) => (
                <div key={index} className="col-12 col-md-4 d-flex">
                  <div className="card border-0 shadow-sm w-100" style={{ borderRadius: "15px" }}>
                    <div className="card-body p-4 text-center">

                      <div
                        style={{
                          width: "90px",
                          height: "90px",
                          borderRadius: "50%",
                          overflow: "hidden",
                          margin: "0 auto 15px",
                          border: "3px solid #8B0000"
                        }}
                      >
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          width={90}
                          height={90}
                          style={{ objectFit: "cover" }}
                        />
                      </div>

                      <h6 className="fw-bold mb-1">{leader.name}</h6>
                      <p className="text-muted mb-2">{leader.position}</p>

                      {/*<p className="mb-3">
                        <small className="badge" style={{ backgroundColor: "#A52A2A", color: "white" }}>
                          {leader.experience} அனுபவம்
                        </small>
                      </p>*/}

                      <ul className="list-unstyled mb-0 text-start d-inline-block">
                        {leader.achievements.map((ach, idx) => (
                          <li key={idx} className="small mb-1">
                            <i className="fas fa-check-circle me-2" style={{ color: "#28a745" }}></i>
                            {ach}
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* 🔻 Stats */}
      <div
        style={{
          background: "linear-gradient(135deg, #2c3e50, #34495e)",
          color: "white",
          padding: "3rem 1rem",
          textAlign: "center"
        }}
      >
        <div className="row gy-4 justify-content-center text-center" style={{ gap: "20px" }}>
           <h3 className="fw-bold mb-4">ஆவண புள்ளிவிவரங்கள்</h3>
          <div className="col-6 col-md-3 p-3">
            <h2 className="fw-bold">3</h2>
            <p>மொத்த ஆவணங்கள்</p>
          </div>

          <div className="col-6 col-md-3 p-3">
            <h2 className="fw-bold">25</h2>
            <p>தலைவர்கள்</p>
          </div>

          <div className="col-6 col-md-3 p-3">
            <h2 className="fw-bold">60+</h2>
            <p>ஆண்டுகள் வரலாறு</p>
          </div>
        </div>
      </div>
    </div>
 );
}
