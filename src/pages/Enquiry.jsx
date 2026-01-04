import React, { useState } from 'react';

function Enquiry() {
  const [formData, setFormData] = useState({
    consultationType: 'horoscope'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-purple text-white text-center py-5 hero-section-md">
        <div className="container" data-aos="fade-down">
          <h1 className="display-3 fw-bold mb-3 text-shadow">Book Your Consultation</h1>
          <p className="lead fs-4 mb-0 opacity-90">
            Take the first step towards understanding your cosmic journey
          </p>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3 text-purple" data-aos="fade-up">Choose Your Consultation Type</h2>
            <p className="lead text-secondary" data-aos="fade-up" data-aos-delay="100">Select the service that best suits your needs</p>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 border-0 shadow-lg card-rounded">
                <div className="card-body p-4 text-center">
                  <div className="icon-circle-lg bg-gradient-purple mb-4">
                    <i className="bi bi-calendar-day text-white icon-2xl"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Daily Horoscope</h5>
                  <p className="text-muted small mb-3">Get personalized daily predictions</p>
                  <p className="fw-bold mb-0 text-purple icon-1-3rem">$29</p>
                </div>
              </div>
            </div>

            <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 border-0 shadow-lg card-rounded">
                <div className="card-body p-4 text-center">
                  <div className="icon-circle-lg bg-gradient-pink mb-4">
                    <i className="bi bi-diagram-3 text-white icon-2xl"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Kundali Analysis</h5>
                  <p className="text-muted small mb-3">Complete birth chart reading</p>
                  <p className="fw-bold mb-0 text-pink icon-1-3rem">$99</p>
                </div>
              </div>
            </div>

            <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 border-0 shadow-lg card-rounded">
                <div className="card-body p-4 text-center">
                  <div className="icon-circle-lg bg-gradient-blue mb-4">
                    <i className="bi bi-people text-white icon-2xl"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Compatibility</h5>
                  <p className="text-muted small mb-3">Match analysis for relationships</p>
                  <p className="fw-bold mb-0 text-blue icon-1-3rem">$79</p>
                </div>
              </div>
            </div>

            <div className="col-md-3" data-aos="fade-up" data-aos-delay="400">
              <div className="card h-100 border-0 shadow-lg card-rounded">
                <div className="card-body p-4 text-center">
                  <div className="icon-circle-lg bg-gradient-orange mb-4">
                    <i className="bi bi-person-video2 text-white icon-2xl"></i>
                  </div>
                  <h5 className="fw-bold mb-2">Private Session</h5>
                  <p className="text-muted small mb-3">One-on-one consultation</p>
                  <p className="fw-bold mb-0 text-orange icon-1-3rem">$149</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="row justify-content-center">
            <div className="col-lg-9" data-aos="fade-up">
              <div className="card border-0 shadow-lg card-rounded">
                <div className="card-body p-5">
                  <div className="text-center mb-4">
                    <h3 className="fw-bold mb-3 text-purple">Consultation Enquiry Form</h3>
                    <p className="text-secondary mb-3">Fill in your details and we'll get back to you within 24 hours</p>
                  </div>
                  <div className="alert border-0 mb-4" style={{background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)', borderLeft: '4px solid #667eea'}}>
                    <div className="d-flex align-items-start">
                      <i className="bi bi-calendar-check-fill me-2 mt-1 text-purple"></i>
                      <div>
                        <p className="mb-2 fw-semibold text-purple">Booking a Consultation</p>
                        <p className="mb-0 small text-secondary">This form is for booking astrological consultations. For general questions or feedback, please visit our <a href="/contact" className="fw-bold text-decoration-none text-purple">Contact Us</a> page.</p>
                      </div>
                    </div>
                  </div>
                  <form>
                    <div className="row g-4">
                      {/* Personal Information */}
                      <div className="col-12">
                        <h5 className="fw-bold mb-3 pb-2 border-bottom">
                          <i className="bi bi-person-circle me-2 text-purple"></i>
                          Personal Information
                        </h5>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Full Name *</label>
                        <input 
                          type="text" 
                          name="fullName"
                          className="form-control form-control-lg form-control-rounded" 
                          placeholder="Enter your full name"
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Email Address *</label>
                        <input 
                          type="email" 
                          name="email"
                          className="form-control form-control-lg form-control-rounded" 
                          placeholder="your.email@example.com"
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Phone Number *</label>
                        <input 
                          type="tel" 
                          name="phone"
                          className="form-control form-control-lg form-control-rounded" 
                          placeholder="+1 (234) 567-890"
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Consultation Type *</label>
                        <select 
                          name="consultationType"
                          className="form-select form-select-lg form-control-rounded" 
                          onChange={handleInputChange}
                          value={formData.consultationType}
                        >
                          <option value="horoscope">Daily Horoscope ($29)</option>
                          <option value="kundali">Kundali Analysis ($99)</option>
                          <option value="compatibility">Compatibility Check ($79)</option>
                          <option value="session">Private Session ($149)</option>
                        </select>
                      </div>

                      {/* Birth Details */}
                      <div className="col-12 mt-5">
                        <h5 className="fw-bold mb-3 pb-2 border-bottom">
                          <i className="bi bi-star-fill me-2 text-pink"></i>
                          Birth Details
                        </h5>
                      </div>

                      <div className="col-md-4">
                        <label className="form-label fw-semibold">Date of Birth *</label>
                        <input 
                          type="date" 
                          name="dob"
                          className="form-control form-control-lg form-control-rounded" 
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label fw-semibold">Time of Birth *</label>
                        <input 
                          type="time" 
                          name="tob"
                          className="form-control form-control-lg form-control-rounded" 
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="col-md-4">
                        <label className="form-label fw-semibold">Place of Birth *</label>
                        <input 
                          type="text" 
                          name="pob"
                          className="form-control form-control-lg form-control-rounded" 
                          placeholder="City, Country"
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      {/* Consultation Preferences */}
                      <div className="col-12 mt-5">
                        <h5 className="fw-bold mb-3 pb-2 border-bottom">
                          <i className="bi bi-calendar-check me-2 text-blue"></i>
                          Consultation Preferences
                        </h5>
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Preferred Date</label>
                        <input 
                          type="date" 
                          name="preferredDate"
                          className="form-control form-control-lg form-control-rounded" 
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Preferred Time Slot</label>
                        <select 
                          name="timeSlot"
                          className="form-select form-select-lg form-control-rounded" 
                          onChange={handleInputChange}
                        >
                          <option value="">Select a time slot</option>
                          <option value="morning">Morning (9:00 AM - 12:00 PM)</option>
                          <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                          <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                        </select>
                      </div>

                      <div className="col-12">
                        <label className="form-label fw-semibold">Consultation Method</label>
                        <div className="d-flex gap-3 flex-wrap">
                          <div className="form-check form-check-lg">
                            <input 
                              className="form-check-input" 
                              type="radio" 
                              name="method" 
                              id="videoCall" 
                              value="video"
                              onChange={handleInputChange}
                            />
                            <label className="form-check-label fw-normal" htmlFor="videoCall">
                              <i className="bi bi-camera-video me-1 text-purple"></i> Video Call
                            </label>
                          </div>
                          <div className="form-check form-check-lg">
                            <input 
                              className="form-check-input" 
                              type="radio" 
                              name="method" 
                              id="phoneCall" 
                              value="phone"
                              onChange={handleInputChange}
                            />
                            <label className="form-check-label fw-normal" htmlFor="phoneCall">
                              <i className="bi bi-telephone me-1 text-pink"></i> Phone Call
                            </label>
                          </div>
                          <div className="form-check form-check-lg">
                            <input 
                              className="form-check-input" 
                              type="radio" 
                              name="method" 
                              id="inPerson" 
                              value="person"
                              onChange={handleInputChange}
                            />
                            <label className="form-check-label fw-normal" htmlFor="inPerson">
                              <i className="bi bi-person-standing me-1 text-blue"></i> In-Person
                            </label>
                          </div>
                          <div className="form-check form-check-lg">
                            <input 
                              className="form-check-input" 
                              type="radio" 
                              name="method" 
                              id="chat" 
                              value="chat"
                              onChange={handleInputChange}
                            />
                            <label className="form-check-label fw-normal" htmlFor="chat">
                              <i className="bi bi-chat-dots me-1 text-orange"></i> Chat
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="col-12">
                        <label className="form-label fw-semibold">Specific Questions or Areas of Interest</label>
                        <textarea 
                          name="questions"
                          className="form-control form-control-lg form-control-rounded" 
                          rows="4" 
                          placeholder="Tell us what you'd like to know about... (Career, Relationships, Health, Finance, etc.)"
                          onChange={handleInputChange}
                        ></textarea>
                      </div>

                      <div className="col-12">
                        <div className="form-check">
                          <input 
                            className="form-check-input" 
                            type="checkbox" 
                            id="terms" 
                            required
                          />
                          <label className="form-check-label text-muted small" htmlFor="terms">
                            I agree to the <a href="/terms" className="text-decoration-none text-purple">Terms & Conditions</a> and <a href="/privacy" className="text-decoration-none text-purple">Privacy Policy</a>
                          </label>
                        </div>
                      </div>

                      <div className="col-12 mt-4">
                        <button 
                          type="submit" 
                          className="btn btn-lg px-5 fw-bold text-white w-100 shadow btn-submit"
                        >
                          <i className="bi bi-send-fill me-2"></i>
                          Submit Enquiry
                        </button>
                      </div>

                      <div className="col-12 text-center">
                        <p className="text-muted small mb-0">
                          <i className="bi bi-shield-check me-1 text-success"></i>
                          Your information is secure and confidential
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3 text-purple" data-aos="fade-up">Why Book Your Consultation With Us?</h2>
            <p className="lead text-secondary" data-aos="fade-up" data-aos-delay="100">Experience the difference with authentic astrological guidance</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center">
                <div className="icon-circle-lg bg-gradient-purple mb-4">
                  <i className="bi bi-award-fill text-white icon-2rem"></i>
                </div>
                <h5 className="fw-bold mb-3">Expert Astrologers</h5>
                <p className="text-secondary">Our team has over 20 years of combined experience in Vedic astrology</p>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center">
                <div className="icon-circle-lg bg-gradient-pink mb-4">
                  <i className="bi bi-clock-history text-white icon-2rem"></i>
                </div>
                <h5 className="fw-bold mb-3">Flexible Scheduling</h5>
                <p className="text-secondary">Book consultations at your convenience with multiple time slots available</p>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center">
                <div className="icon-circle-lg bg-gradient-blue mb-4">
                  <i className="bi bi-shield-lock-fill text-white icon-2rem"></i>
                </div>
                <h5 className="fw-bold mb-3">100% Confidential</h5>
                <p className="text-secondary">Your personal information and consultation details are completely secure</p>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
              <div className="text-center">
                <div className="icon-circle-lg bg-gradient-orange mb-4">
                  <i className="bi bi-graph-up-arrow text-white icon-2rem"></i>
                </div>
                <h5 className="fw-bold mb-3">Accurate Predictions</h5>
                <p className="text-secondary">95% accuracy rate backed by thousands of satisfied clients</p>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
              <div className="text-center">
                <div className="icon-circle-lg bg-gradient-purple mb-4">
                  <i className="bi bi-headset text-white icon-2rem"></i>
                </div>
                <h5 className="fw-bold mb-3">24/7 Support</h5>
                <p className="text-secondary">Our customer support team is always ready to assist you</p>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
              <div className="text-center">
                <div className="icon-circle-lg bg-gradient-blue mb-4">
                  <i className="bi bi-cash-coin text-white icon-2rem"></i>
                </div>
                <h5 className="fw-bold mb-3">Money-Back Guarantee</h5>
                <p className="text-secondary">Not satisfied? Get a full refund within 7 days, no questions asked</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold mb-3 text-purple" data-aos="fade-up">What Our Clients Say</h2>
            <p className="lead text-secondary" data-aos="fade-up" data-aos-delay="100">Hear from those who've experienced our guidance</p>
          </div>
          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 border-0 shadow-sm card-rounded">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning"></i>
                    ))}
                  </div>
                  <p className="text-muted mb-4">"The kundali analysis was incredibly detailed and accurate. It helped me make important life decisions with confidence."</p>
                  <div className="d-flex align-items-center">
                    <div className="avatar-circle bg-gradient-purple text-white fw-bold me-3">
                      S
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Sarah Johnson</h6>
                      <small className="text-muted">Verified Client</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 border-0 shadow-sm card-rounded">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning"></i>
                    ))}
                  </div>
                  <p className="text-muted mb-4">"Professional service and accurate predictions. The compatibility check was spot on for my relationship!"</p>
                  <div className="d-flex align-items-center">
                    <div className="avatar-circle bg-gradient-pink text-white fw-bold me-3">
                      M
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Michael Chen</h6>
                      <small className="text-muted">Verified Client</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 border-0 shadow-sm card-rounded">
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill text-warning"></i>
                    ))}
                  </div>
                  <p className="text-muted mb-4">"Exceptional guidance and insights. The private session changed my perspective on life completely. Highly recommended!"</p>
                  <div className="d-flex align-items-center">
                    <div className="avatar-circle bg-gradient-blue text-white fw-bold me-3">
                      P
                    </div>
                    <div>
                      <h6 className="mb-0 fw-bold">Priya Patel</h6>
                      <small className="text-muted">Verified Client</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Enquiry;
