"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const offices = [
    {
      title: "அலுவலகம்",
      address: "கம்பம் பேருந்து நிலையம் அருகே, தேனி மாவட்டம் - 625516",
      phone: "+91 98765 43210",
      email: "cpim.cumbum@gmail.com",
      hours: "திங்கள் - சனி: 9:00 AM - 6:00 PM",
      icon: "🏢"
    },
    {
      title: "பெண்கள் அமைப்பு அலுவலகம்",
      address: "பஸ் ஸ்டாண்ட் ரோடு, கம்பம் - 625516",
      phone: "+91 98765 43211",
      email: "women.cumbum@gmail.com",
      hours: "திங்கள் - வெள்ளி: 10:00 AM - 5:00 PM",
      icon: "👩‍💼"
    },
    {
      title: "இளைஞர் அமைப்பு அலுவலகம்",
      address: "கல்லூரி ரோடு, கம்பம் - 625516",
      phone: "+91 98765 43212",
      email: "youth.cumbum@gmail.com",
      hours: "திங்கள் - சனி: 2:00 PM - 8:00 PM",
      icon: "👨‍🎓"
    }
  ];

  {/*const socialMedia = [
    { platform: "Facebook", handle: "@CPIMCumbum", icon: "fab fa-facebook-f", color: "#1877f2" },
    { platform: "Twitter", handle: "@CPIMCumbum", icon: "fab fa-twitter", color: "#1da1f2" },
    { platform: "Instagram", handle: "@cpim_cumbum", icon: "fab fa-instagram", color: "#e4405f" },
    { platform: "YouTube", handle: "CPIM Cumbum", icon: "fab fa-youtube", color: "#ff0000" },
    { platform: "WhatsApp", handle: "+91 98765 43210", icon: "fab fa-whatsapp", color: "#25d366" }
  ];*/}

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <div style={{ 
        background: "linear-gradient(135deg, #8B0000, #A52A2A)", 
        color: "white", 
        padding: "4rem 0" 
      }}>
        <div className="container">
          <div className="text-center">
            <h1 className="display-4 fw-bold mb-3">தொடர்பு கொள்ளுங்கள்</h1>
            <p className="lead">எங்களுடன் இணைந்து மக்களின் நலனுக்காக பணியாற்றுங்கள்</p>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg" style={{ borderRadius: "15px" }}>
              <div className="card-body p-5">
                <h3 className="fw-bold mb-4" style={{ color: "#8B0000" }}>
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
                        style={{ borderRadius: "10px", padding: "12px" }}
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
                        style={{ borderRadius: "10px", padding: "12px" }}
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
                        style={{ borderRadius: "10px", padding: "12px" }}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">விषயம் *</label>
                      <select
                        className="form-control"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={{ borderRadius: "10px", padding: "12px" }}
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
                      style={{ borderRadius: "10px", padding: "12px" }}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-lg"
                    style={{
                      backgroundColor: "#8B0000",
                      color: "white",
                      border: "none",
                      borderRadius: "25px",
                      padding: "12px 40px",
                      fontWeight: "600"
                    }}
                  >
                    செய்தி அனுப்பு
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="sticky-top" style={{ top: "100px" }}>
              <h4 className="fw-bold mb-4" style={{ color: "#8B0000" }}>
                அலுவலக முகவரிகள்
              </h4>
              
              {offices.map((office, index) => (
                <div key={index} className="card border-0 shadow-sm mb-4" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <span style={{ fontSize: "2rem", marginRight: "15px" }}>{office.icon}</span>
                      <h6 className="fw-bold mb-0" style={{ color: "#2c3e50" }}>
                        {office.title}
                      </h6>
                    </div>
                    
                    <div className="mb-2">
                      <i className="fas fa-map-marker-alt me-2" style={{ color: "#8B0000" }}></i>
                      <small>{office.address}</small>
                    </div>
                    
                    <div className="mb-2">
                      <i className="fas fa-phone me-2" style={{ color: "#8B0000" }}></i>
                      <small>{office.phone}</small>
                    </div>
                    
                    <div className="mb-2">
                      <i className="fas fa-envelope me-2" style={{ color: "#8B0000" }}></i>
                      <small>{office.email}</small>
                    </div>
                    
                    <div>
                      <i className="fas fa-clock me-2" style={{ color: "#8B0000" }}></i>
                      <small>{office.hours}</small>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="card border-0 shadow-sm" style={{ borderRadius: "15px" }}>
                <div className="card-body p-4">
                  <h6 className="fw-bold mb-3" style={{ color: "#2c3e50" }}>
                    சமூக வலைதளங்கள்
                  </h6>
                  
                 {socialMedia.map((social, index) => (
                    <div key={index} className="d-flex align-items-center mb-3">
                      <div
                        style={{
                          backgroundColor: social.color,
                          color: "white",
                          borderRadius: "50%",
                          width: "40px",
                          height: "40px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "15px"
                        }}
                      >
                        <i className={social.icon}></i>
                      </div>
                      <div>
                        <div className="fw-bold small">{social.platform}</div>
                        <div className="text-muted small">{social.handle}</div>
                      </div>
                    </div>
                ))} 
                </div>
              </div>*/}
            </div>
          </div>
        </div>
      </div>

      <div style={{ 
        background: "linear-gradient(135deg, #2c3e50, #34495e)", 
        color: "white", 
        padding: "3rem 0" 
      }}>
        <div className="container">
          <div className="text-center">
            <h3 className="fw-bold mb-3">அவசர தொடர்பு</h3>
            <div className="row">
              <div className="col-md-4">
                <div className="mb-3">
                  <i className="fas fa-phone fa-2x mb-2"></i>
                  <h5>24/7 ஹெல்ப்லைன்</h5>
                  <p>+91 98765 43200</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <i className="fas fa-exclamation-triangle fa-2x mb-2"></i>
                  <h5>அவசர புகார்</h5>
                  <p>emergency@cpimcumbum.org</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-3">
                  <i className="fab fa-whatsapp fa-2x mb-2"></i>
                  <h5>WhatsApp</h5>
                  <p>+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}