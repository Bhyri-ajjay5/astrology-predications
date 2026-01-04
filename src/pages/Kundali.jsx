import React, { useState } from 'react';

function Kundali() {
  const [formData, setFormData] = useState({
    name: '',
    gender: 'male',
    dateOfBirth: '',
    timeOfBirth: '',
    placeOfBirth: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Kundali Form Submitted:', formData);
    alert('Thank you! Your Kundali request has been submitted. We will contact you shortly.');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-purple text-white text-center py-4 py-md-5" style={{minHeight: '35vh'}}>
        <div className="container" data-aos="fade-down">
          <h1 className="display-4 display-md-3 fw-bold mb-2 mb-md-3 text-shadow">Get Your Personalized Kundali</h1>
          <p className="lead fs-5 fs-md-4 mb-2 opacity-90 px-2">
            Birth Chart Analysis & Vedic Astrology Reading
          </p>
          <p className="fs-6 mb-0 opacity-90 px-2">
            Unlock the secrets of your life path through ancient Vedic wisdom
          </p>
        </div>
      </section>

      {/* What is Kundali Section */}
      <section className="py-4 py-md-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                padding: '3rem',
                color: 'white',
                minHeight: '350px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <i className="bi bi-diagram-3 display-1 mb-4"></i>
                <h3 className="fw-bold mb-3">What is a Kundali?</h3>
                <p className="fs-5 mb-0 opacity-90">
                  A Kundali, also known as a birth chart or horoscope, is a detailed astrological 
                  diagram that maps the positions of celestial bodies at the exact time and place 
                  of your birth.
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="display-6 fw-bold mb-4" style={{color: '#667eea'}}>
                Why Get Your Kundali?
              </h2>
              <div className="mb-3">
                <div className="d-flex align-items-start mb-3">
                  <div className="me-3" style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <i className="bi bi-person-check text-white fs-4"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Self-Discovery</h5>
                    <p className="text-secondary mb-0">
                      Understand your strengths, weaknesses, and hidden potential
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <div className="me-3" style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <i className="bi bi-compass text-white fs-4"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Life Direction</h5>
                    <p className="text-secondary mb-0">
                      Receive guidance on career, relationships, and major life decisions
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <div className="me-3" style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <i className="bi bi-clock-history text-white fs-4"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Future Insights</h5>
                    <p className="text-secondary mb-0">
                      Discover favorable periods and potential challenges ahead
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kundali Form Section */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="text-center mb-4 mb-md-5">
            <h2 className="fw-bold mb-2 mb-md-3 text-purple" data-aos="fade-up">Fill Your Birth Details</h2>
            <p className="lead text-secondary px-2" data-aos="fade-up" data-aos-delay="100">
              Provide accurate information for the most precise Kundali analysis
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8" data-aos="fade-up">
              <div className="card border-0 shadow-lg" style={{borderRadius: '20px'}}>
                <div 
                  className="card-header text-white text-center p-4"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px'
                  }}
                >
                  <i className="bi bi-stars display-4 mb-2"></i>
                  <h3 className="mb-1 fw-bold">Kundali Request Form</h3>
                  <p className="mb-0 small opacity-90">All fields are required for accurate analysis</p>
                </div>
                
                <div className="card-body p-4 p-md-5">
                  <form onSubmit={handleSubmit}>
                    {/* Name */}
                    <div className="mb-4">
                      <label htmlFor="name" className="form-label fw-bold text-purple">
                        <i className="bi bi-person me-2"></i>Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        style={{borderRadius: '10px'}}
                      />
                    </div>

                    {/* Gender */}
                    <div className="mb-4">
                      <label className="form-label fw-bold text-purple">
                        <i className="bi bi-gender-ambiguous me-2"></i>Gender
                      </label>
                      <div className="d-flex gap-3">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="male"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="male">Male</label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="female"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="female">Female</label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="other"
                            value="other"
                            checked={formData.gender === 'other'}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="other">Other</label>
                        </div>
                      </div>
                    </div>

                    {/* Date and Time of Birth */}
                    <div className="row mb-4">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <label htmlFor="dateOfBirth" className="form-label fw-bold text-purple">
                          <i className="bi bi-calendar-event me-2"></i>Date of Birth
                        </label>
                        <input
                          type="date"
                          className="form-control form-control-lg"
                          id="dateOfBirth"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          required
                          style={{borderRadius: '10px'}}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="timeOfBirth" className="form-label fw-bold text-purple">
                          <i className="bi bi-clock me-2"></i>Time of Birth
                        </label>
                        <input
                          type="time"
                          className="form-control form-control-lg"
                          id="timeOfBirth"
                          name="timeOfBirth"
                          value={formData.timeOfBirth}
                          onChange={handleChange}
                          required
                          style={{borderRadius: '10px'}}
                        />
                      </div>
                    </div>

                    {/* Place of Birth */}
                    <div className="mb-4">
                      <label htmlFor="placeOfBirth" className="form-label fw-bold text-purple">
                        <i className="bi bi-geo-alt me-2"></i>Place of Birth
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="placeOfBirth"
                        name="placeOfBirth"
                        value={formData.placeOfBirth}
                        onChange={handleChange}
                        placeholder="City, State, Country"
                        required
                        style={{borderRadius: '10px'}}
                      />
                      <small className="text-muted">Please provide as accurate location as possible</small>
                    </div>

                    {/* Contact Information */}
                    <div className="row mb-4">
                      <div className="col-md-6 mb-3 mb-md-0">
                        <label htmlFor="email" className="form-label fw-bold text-purple">
                          <i className="bi bi-envelope me-2"></i>Email Address
                        </label>
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          style={{borderRadius: '10px'}}
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="phone" className="form-label fw-bold text-purple">
                          <i className="bi bi-phone me-2"></i>Phone Number
                        </label>
                        <input
                          type="tel"
                          className="form-control form-control-lg"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (234) 567-890"
                          required
                          style={{borderRadius: '10px'}}
                        />
                      </div>
                    </div>

                    {/* Info Box */}
                    <div className="alert alert-info d-flex align-items-start mb-4" style={{borderRadius: '15px'}}>
                      <i className="bi bi-info-circle-fill me-3 fs-4"></i>
                      <div>
                        <strong>Privacy Assurance:</strong> Your personal information is completely secure 
                        and will only be used for preparing your Kundali. We respect your privacy.
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn btn-lg btn-gradient-purple text-white w-100 fw-bold"
                      style={{borderRadius: '10px'}}
                    >
                      <i className="bi bi-send-fill me-2"></i>
                      Request Your Kundali
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Receive Section */}
      <section className="py-4 py-md-5 bg-white">
        <div className="container">
          <div className="text-center mb-4 mb-md-5">
            <h2 className="fw-bold mb-2 mb-md-3 text-purple" data-aos="fade-up">What You'll Receive</h2>
            <p className="lead text-secondary px-2" data-aos="fade-up" data-aos-delay="100">
              Comprehensive Kundali analysis prepared by expert astrologers
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center p-4 h-100 border rounded shadow-sm">
                <div className="mb-3" style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className="bi bi-file-earmark-text text-white" style={{fontSize: '2rem'}}></i>
                </div>
                <h5 className="fw-bold mb-2 text-purple">Birth Chart</h5>
                <p className="text-secondary small mb-0">
                  Detailed planetary positions at your birth time
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center p-4 h-100 border rounded shadow-sm">
                <div className="mb-3" style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto',
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className="bi bi-graph-up-arrow text-white" style={{fontSize: '2rem'}}></i>
                </div>
                <h5 className="fw-bold mb-2 text-purple">Dasha Analysis</h5>
                <p className="text-secondary small mb-0">
                  Current and future planetary periods
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center p-4 h-100 border rounded shadow-sm">
                <div className="mb-3" style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto',
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className="bi bi-heart text-white" style={{fontSize: '2rem'}}></i>
                </div>
                <h5 className="fw-bold mb-2 text-purple">Life Predictions</h5>
                <p className="text-secondary small mb-0">
                  Career, relationships, health insights
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
              <div className="text-center p-4 h-100 border rounded shadow-sm">
                <div className="mb-3" style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto',
                  background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <i className="bi bi-lightbulb text-white" style={{fontSize: '2rem'}}></i>
                </div>
                <h5 className="fw-bold mb-2 text-purple">Remedies</h5>
                <p className="text-secondary small mb-0">
                  Personalized recommendations and solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Kundali;
