"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const offices = [
    {
      title: "அலுவலகம்",
      address: "கம்பம் பேருந்து நிலையம் அருகே, தேனி மாவட்டம் - 625516",
      phone: "+91 98765 43210",
      email: "cpim.cumbum@gmail.com",
      hours: "திங்கள் - சனி: 9:00 AM - 6:00 PM",
      icon: "🏢",
    },
    {
      title: "பெண்கள் அமைப்பு அலுவலகம்",
      address: "பஸ் ஸ்டாண்ட் ரோடு, கம்பம் - 625516",
      phone: "+91 98765 43211",
      email: "women.cumbum@gmail.com",
      hours: "திங்கள் - வெள்ளி: 10:00 AM - 5:00 PM",
      icon: "👩‍💼",
    },
    {
      title: "இளைஞர் அமைப்பு அலுவலகம்",
      address: "கல்லூரி ரோடு, கம்பம் - 625516",
      phone: "+91 98765 43212",
      email: "youth.cumbum@gmail.com",
      hours: "திங்கள் - சனி: 2:00 PM - 8:00 PM",
      icon: "👨‍🎓",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      {/* 🔻 Top Banner */}
      <div
        style={{
          background: "linear-gradient(135deg, #8B0000, #A52A2A)",
          color: "white",
          padding: "3rem 1rem",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1
            className="fw-bold mb-3"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
            }}
          >
            தொடர்பு கொள்ளுங்கள்
          </h1>
          <p
            className="lead"
            style={{
              fontSize: "clamp(1rem, 3vw, 1.25rem)",
            }}
          >
            எங்களுடன் இணைந்து மக்களின் நலனுக்காக பணியாற்றுங்கள்
          </p>
        </div>
      </div>

      {/* 🔻 Contact Section */}
      <div className="container py-5">
        <div className="row g-4">
          {/* 📨 Contact Form */}
          <div className="col-12 col-lg-8">
            <div
              className="card border-0 shadow-lg h-100"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-4 p-md-5">
                <h3
                  className="fw-bold mb-4 text-center text-lg-start"
                  style={{ color: "#8B0000" }}
                >
                  செய்தி அனுப்புங்கள்
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">பெயர் *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{
                          borderRadius: "10px",
                          padding: "12px",
                          fontSize: "1rem",
                        }}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">மின்னஞ்சல் *</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{
                          borderRadius: "10px",
                          padding: "12px",
                          fontSize: "1rem",
                        }}
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">தொலைபேசி</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          borderRadius: "10px",
                          padding: "12px",
                          fontSize: "1rem",
                        }}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">விஷயம் *</label>
                      <select
                        className="form-control"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={{
                          borderRadius: "10px",
                          padding: "12px",
                          fontSize: "1rem",
                        }}
                      >
                        <option value="">தேர்ந்தெடுக்கவும்</option>
                        <option value="membership">உறுப்பினர் சேர்க்கை</option>
                        <option value="complaint">புகார்</option>
                        <option value="suggestion">ஆலோசனை</option>
                        <option value="support">ஆதரவு</option>
                        <option value="other">மற்றவை</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">செய்தி *</label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{
                        borderRadius: "10px",
                        padding: "12px",
                        fontSize: "1rem",
                      }}
                    ></textarea>
                  </div>

                  <div className="text-center text-lg-start">
                    <button
                      type="submit"
                      className="btn btn-lg"
                      style={{
                        backgroundColor: "#8B0000",
                        color: "white",
                        border: "none",
                        borderRadius: "25px",
                        padding: "12px 40px",
                        fontWeight: "600",
                        width: "100%",
                        maxWidth: "250px",
                      }}
                    >
                      செய்தி அனுப்பு
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* 🏢 Office Details */}
          <div className="col-12 col-lg-4">
            <div style={{ marginTop: "1.5rem" }}>
              <h4
                className="fw-bold mb-4 text-center text-lg-start"
                style={{ color: "#8B0000" }}
              >
                அலுவலக முகவரிகள்
              </h4>

              {offices.map((office, index) => (
                <div
                  key={index}
                  className="card border-0 shadow-sm mb-4"
                  style={{ borderRadius: "15px" }}
                >
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3 justify-content-center justify-content-lg-start">
                      <span
                        style={{
                          fontSize: "2rem",
                          marginRight: "10px",
                        }}
                      >
                        {office.icon}
                      </span>
                      <h6
                        className="fw-bold mb-0"
                        style={{ color: "#2c3e50", fontSize: "1rem" }}
                      >
                        {office.title}
                      </h6>
                    </div>

                    <div className="text-center text-lg-start">
                      <div className="mb-2">
                        <i
                          className="fas fa-map-marker-alt me-2"
                          style={{ color: "#8B0000" }}
                        ></i>
                        <small>{office.address}</small>
                      </div>
                      <div className="mb-2">
                        <i
                          className="fas fa-phone me-2"
                          style={{ color: "#8B0000" }}
                        ></i>
                        <small>{office.phone}</small>
                      </div>
                      <div className="mb-2">
                        <i
                          className="fas fa-envelope me-2"
                          style={{ color: "#8B0000" }}
                        ></i>
                        <small>{office.email}</small>
                      </div>
                      <div>
                        <i
                          className="fas fa-clock me-2"
                          style={{ color: "#8B0000" }}
                        ></i>
                        <small>{office.hours}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🔻 Emergency Section */}
      <div
        style={{
          background: "linear-gradient(135deg, #2c3e50, #34495e)",
          color: "white",
          padding: "2.5rem 1rem",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h3
            className="fw-bold mb-4"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
          >
            அவசர தொடர்பு
          </h3>
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div>
                <i className="fas fa-phone fa-2x mb-2"></i>
                <h5>24/7 ஹெல்ப்லைன்</h5>
                <p>+91 98765 43200</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div>
                <i className="fas fa-exclamation-triangle fa-2x mb-2"></i>
                <h5>அவசர புகார்</h5>
                <p>emergency@cpimcumbum.org</p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div>
                <i className="fab fa-whatsapp fa-2x mb-2"></i>
                <h5>WhatsApp</h5>
                <p>+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
