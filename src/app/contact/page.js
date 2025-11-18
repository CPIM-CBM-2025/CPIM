"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const offices = [
    {
      title: "தோழர் என் வரதராஜன் நினைவு அலுவலகம்",
      icon: "🏢",
      address: "வார்டு 33, எல்எப் மெயின் ரோடு, கம்பம் ஏரியா-625516,தேனி மாவட்டம் ",
      phone: "+91 9876543210",
      email: "cpimcbm@gmail.com",
      hours: "திங்கள் - சனி: 9AM - 6PM",
    },
    {
      title: "அனைத்திந்திய இந்திய ஜனநாயக மாதர் சங்கம் AIDWA கம்பம் ",
      icon: "📍",
      address: "வார்டு 33, எல்எப் மெயின் ரோடு, கம்பம் ஏரியா-625516,தேனி மாவட்டம் ",
      phone: "+91 9876543210",
      email: "cpimcbm@gmail.com",
      hours: "திங்கள் - சனி: 9AM - 6PM",
    },
    {
      title: "தமிழ்நாடு விவசாய சங்கம்AIKS",
      icon: "🏬",
      address: "வார்டு 33, எல்எப் மெயின் ரோடு, கம்பம் ஏரியா-625516,தேனி மாவட்டம் ",
      phone: "+91 9876543210",
      email: "cpimcbm@gmail.com",
      hours: "திங்கள் - சனி: 9AM - 6PM",
    },
    {
      title: "அகில இந்திய விவசாய தொழிலாளர் சங்கம் AIAWU கம்பம் ",
      icon: "🏬",
      address: "வார்டு 33, எல்எப் மெயின் ரோடு, கம்பம் ஏரியா-625516,தேனி மாவட்டம் ",
      phone: "+91 9876543210",
      email: "cpimcbm@gmail.com",
      hours: "திங்கள் - சனி: 9AM - 6PM",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("செயலாக்கப்படுகிறது...");

    try {
      const response = await fetch("/api/mailsend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("செய்தி வெற்றிகரமாக அனுப்பப்பட்டது!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("செய்தியை அனுப்ப முடியவில்லை.");
      }
    } catch (error) {
      console.error(error);
      setStatus("செய்தி அனுப்பும் போது பிழை ஏற்பட்டது.");
    }
  };

  return (
    <section
      className="container py-5"
      style={{ fontFamily: "'Noto Sans Tamil', sans-serif" }}
    >
      <div className="text-center mb-5">
        <h2 className="fw-bold" style={{ color: "#8B0000" }}>
          தொடர்புக்கு
        </h2>
        <p className="text-muted">
          உங்கள் கருத்துகள் மற்றும் கேள்விகளை எங்களிடம் பகிர்ந்து கொள்ளுங்கள்.
        </p>
      </div>

      {/* ---------------- ROW 1 : FORM (LEFT) & MAP (RIGHT) ---------------- */}
      <div className="row g-4">

        {/* LEFT: FORM */}
        <div className="col-12 col-lg-6">
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
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">பெயர்</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">மின்னஞ்சல்</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">தொலைபேசி</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">பொருள்</label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label">செய்தி</label>
                    <textarea
                      name="message"
                      rows="4"
                      className="form-control"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 text-center mt-3">
                    <button
                      type="submit"
                      className="btn px-4"
                      style={{
                        backgroundColor: "#8B0000",
                        color: "#fff",
                        fontWeight: "bold",
                        borderRadius: "30px",
                      }}
                    >
                      அனுப்புக
                    </button>
                    {status && <p className="mt-3 text-muted">{status}</p>}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* RIGHT: GOOGLE MAP */}
        <div className="col-12 col-lg-6">
          <div
            className="card border-0 shadow-lg h-100"
            style={{ borderRadius: "15px" }}
          >
            <div className="card-body p-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4539.900652575417!2d77.27346601052577!3d9.724641222707552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0701661545ae43%3A0x9d0ee58fbfef56e7!2sCPI(M)%20AREA%20COMMITTEE%20OFFICE!5e0!3m2!1sen!2sin!4v1763463834426!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- ROW 2 : OFFICE ADDRESS CARDS ---------------- */}
      <div className="row mt-5 justify-content-center">
        <div className="col-12">
          <h4
            className="fw-bold mb-4 text-center"
            style={{ color: "#8B0000" }}
          >
            அலுவலக முகவரிகள்
          </h4>
        </div>

        {offices.map((office, index) => (
          <div key={index} className="col-12 col-md-6 mb-4 d-flex">
            <div
              className="card border-0 shadow-lg h-100 w-100"
              style={{
                borderRadius: "18px",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
              }}
            >
              <div className="card-body p-4 text-center">
                <div
                  className="mb-3"
                  style={{
                    fontSize: "2.3rem",
                    filter: "drop-shadow(0px 2px 3px rgba(0,0,0,0.25))",
                  }}
                >
                  {office.icon}
                </div>

                <h5
                  className="fw-bold mb-3"
                  style={{
                    color: "#2c3e50",
                    fontSize: "1.1rem",
                  }}
                >
                  {office.title}
                </h5>

                <p className="mb-2" style={{ fontSize: "0.95rem" }}>
                  <i className="fas fa-map-marker-alt me-2" style={{ color: "#8B0000" }}></i>
                  {office.address}
                </p>

                <p className="mb-2" style={{ fontSize: "0.95rem" }}>
                  <i className="fas fa-phone me-2" style={{ color: "#8B0000" }}></i>
                  {office.phone}
                </p>

                <p className="mb-2" style={{ fontSize: "0.95rem" }}>
                  <i className="fas fa-envelope me-2" style={{ color: "#8B0000" }}></i>
                  {office.email}
                </p>

                <p style={{ fontSize: "0.95rem" }}>
                  <i className="fas fa-clock me-2" style={{ color: "#8B0000" }}></i>
                  {office.hours}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
