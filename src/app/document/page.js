"use client";
import Image from "next/image";

export default function DocumentsPage() {
  const documents = [
    {
      category: "கட்சி ஆவணங்கள்",
      items: [
        { title: "கட்சி அமைப்பு சட்டம்", type: "PDF", size: "2.5 MB", downloads: 1250, file: "/docs/party-constitution.pdf" },
        { title: "கட்சி திட்டம் 2024", type: "PDF", size: "3.2 MB", downloads: 980, file: "/docs/party-constitution.pdf" },
        { title: "உறுப்பினர் விண்ணப்பம்", type: "PDF", size: "1.1 MB", downloads: 2100, file: "/docs/party-constitution.pdf" }
      ]
    },
    {
      category: "தீர்மானங்கள்",
      items: [
        { title: "விவசாயிகள் கடன் தள்ளுபடி தீர்மானம்", type: "PDF", size: "1.8 MB", downloads: 850, file: "/docs/party-constitution.pdf" },
        { title: "தொழிலாளர் ஊதிய உயர்வு தீர்மானம்", type: "PDF", size: "2.1 MB", downloads: 720, file: "/docs/party-constitution.pdf" },
        { title: "பெண்கள் அதிகாரமளித்தல் தீர்மானம்", type: "PDF", size: "1.9 MB", downloads: 650, file: "/docs/party-constitution.pdf" }
      ]
    },
    {
      category: "அறிக்கைகள்",
      items: [
        { title: "2024 ஆண்டு செயல்பாட்டு அறிக்கை", type: "PDF", size: "4.5 MB", downloads: 1100, file: "/docs/party-constitution.pdf" },
        { title: "நிதி அறிக்கை 2024", type: "PDF", size: "2.8 MB", downloads: 450, file: "/docs/party-constitution.pdf" },
        { title: "தேர்தல் அறிக்கை", type: "PDF", size: "3.1 MB", downloads: 890, file: "/docs/party-constitution.pdf" }
      ]
    },
    {
      category: "வரலாற்று ஆவணங்கள்",
      items: [
        { title: "கம்பம் பகுதி கட்சி வரலாறு", type: "PDF", size: "5.2 MB", downloads: 1500, file: "/docs/party-constitution.pdf" },
        { title: "முக்கிய போராட்டங்களின் வரலாறு", type: "PDF", size: "3.8 MB", downloads: 780, file: "/docs/party-constitution.pdf" },
        { title: "தலைவர்கள் வாழ்க்கை வரலாறு", type: "PDF", size: "4.1 MB", downloads: 920, file: "/docs/party-constitution.pdf" }
      ]
    }
  ];

  const leaders = [
    {
      name: "தோழர் ராமசாமி",
      position: "மாவட்ட செயலாளர்",
      experience: "25 ஆண்டுகள்",
      image: "/Image1.jpg",
      achievements: ["விவசாயிகள் போராட்டம் தலைமை", "தொழிலாளர் சங்க அமைப்பு", "கல்வி சீர்திருத்தம்"]
    },
    {
      name: "தோழர் கமலா",
      position: "பெண்கள் அமைப்பு தலைவர்",
      experience: "18 ஆண்டுகள்",
      image: "/Image4.jpg",
      achievements: ["பெண்கள் உரிமை போராட்டம்", "சுயதொழில் திட்டம்", "கல்வி உதவித்தொகை"]
    },
    {
      name: "தோழர் முருகன்",
      position: "இளைஞர் அமைப்பு தலைவர்",
      experience: "12 ஆண்டுகள்",
      image: "/background1.jpg",
      achievements: ["வேலைவாய்ப்பு முகாம்", "திறன் மேம்பாட்டு பயிற்சி", "கல்வி கடன் தள்ளுபடி"]
    }
  ];

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div style={{ 
        background: "linear-gradient(135deg, #A52A2A, #8B0000)", 
        color: "white", 
        padding: "4rem 0" 
      }}>
        <div className="container">
          <div className="text-center">
            <h1 className="display-4 fw-bold mb-3">ஆவணங்கள்</h1>
            <p className="lead">கட்சி ஆவணங்கள் மற்றும் தலைவர்களின் பதிவுகள்</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="mb-4" style={{ color: "#8B0000", fontWeight: "bold" }}>
              பதிவிறக்க ஆவணங்கள்
            </h2>
            
            {documents.map((category, index) => (
              <div key={index} className="mb-5">
                <h4 className="mb-3" style={{ color: "#A52A2A", borderBottom: "2px solid #A52A2A", paddingBottom: "10px" }}>
                  {category.category}
                </h4>
                <div className="row">
                  {category.items.map((doc, docIndex) => (
                    <div key={docIndex} className="col-md-6 mb-3">
                      <div className="card border-0 shadow-sm h-100" style={{ borderRadius: "10px" }}>
                        <div className="card-body p-4">
                          <div className="d-flex align-items-center mb-3">
                            <i className="fas fa-file-pdf fa-2x me-3" style={{ color: "#dc3545" }}></i>
                            <div>
                              <h6 className="mb-1 fw-bold">{doc.title}</h6>
                              <small className="text-muted">{doc.type} • {doc.size}</small>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">
                              <i className="fas fa-download me-1"></i>
                              {doc.downloads} பதிவிறக்கங்கள்
                            </small>

                            {/* ✅ Download Button Updated */}
                            <a
                              href={doc.file}
                              download
                              className="btn btn-sm"
                              style={{
                                backgroundColor: "#8B0000",
                                color: "white",
                                border: "none",
                                borderRadius: "20px",
                                padding: "5px 15px",
                                textDecoration: "none"
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

          {/* ✅ Leaders Section Unchanged */}
          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: "100px" }}>
              <h4 className="mb-4" style={{ color: "#8B0000", fontWeight: "bold" }}>
                முக்கிய தலைவர்கள்
              </h4>
              
              {leaders.map((leader, index) => (
                <div key={index} className="card border-0 shadow-sm mb-4" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-4">
                    <div className="text-center mb-3">
                      <div style={{ 
                        width: "80px", 
                        height: "80px", 
                        borderRadius: "50%", 
                        overflow: "hidden",
                        margin: "0 auto",
                        border: "3px solid #8B0000"
                      }}>
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          width={80}
                          height={80}
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </div>
                    <h6 className="text-center fw-bold mb-1" style={{ color: "#2c3e50" }}>
                      {leader.name}
                    </h6>
                    <p className="text-center text-muted mb-2">{leader.position}</p>
                    <p className="text-center mb-3">
                      <small className="badge" style={{ backgroundColor: "#A52A2A", color: "white" }}>
                        {leader.experience} அனுபவம்
                      </small>
                    </p>
                    <div>
                      <small className="fw-bold" style={{ color: "#8B0000" }}>முக்கிய சாதனைகள்:</small>
                      <ul className="list-unstyled mt-2">
                        {leader.achievements.map((achievement, idx) => (
                          <li key={idx} className="small mb-1">
                            <i className="fas fa-check-circle me-2" style={{ color: "#28a745" }}></i>
                            {achievement}
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

      {/* ✅ Stats Section Unchanged */}
      <div style={{ 
        background: "linear-gradient(135deg, #2c3e50, #34495e)", 
        color: "white", 
        padding: "3rem 0" 
      }}>
        <div className="container">
          <div className="text-center">
            <h3 className="fw-bold mb-3">ஆவண புள்ளிவிவரங்கள்</h3>
            <div className="row">
              <div className="col-md-3">
                <h2 className="display-4 fw-bold">45</h2>
                <p>மொத்த ஆவணங்கள்</p>
              </div>
              <div className="col-md-3">
                <h2 className="display-4 fw-bold">12K+</h2>
                <p>பதிவிறக்கங்கள்</p>
              </div>
              <div className="col-md-3">
                <h2 className="display-4 fw-bold">25</h2>
                <p>தலைவர்கள்</p>
              </div>
              <div className="col-md-3">
                <h2 className="display-4 fw-bold">60+</h2>
                <p>ஆண்டுகள் வரலாறு</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
