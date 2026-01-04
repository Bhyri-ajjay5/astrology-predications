import React, { useState } from 'react';

function Contact() {
  const [openFaq, setOpenFaq] = useState('faq1');

  const toggleFaq = (faqId) => {
    setOpenFaq(openFaq === faqId ? '' : faqId);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="position-relative text-white text-center py-5" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="container">
          <h1 className="display-3 fw-bold mb-3" data-aos="fade-down">Get in Touch</h1>
          <p className="lead mb-0" data-aos="fade-up" data-aos-delay="100">
            We're here to guide you through your astrological journey
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-5" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="row g-4 mb-5">
            {/* Phone Card */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 border-0 shadow-sm text-center hover-card">
                <div className="card-body p-4">
                  <div className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}>
                    <i className="bi bi-telephone-fill fs-2 text-white"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Phone</h5>
                  <p className="text-muted mb-2">Call us for immediate assistance</p>
                  <a href="tel:+1234567890" className="text-decoration-none fw-bold" style={{ color: '#667eea' }}>
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 border-0 shadow-sm text-center hover-card">
                <div className="card-body p-4">
                  <div className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                  }}>
                    <i className="bi bi-envelope-fill fs-2 text-white"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Email</h5>
                  <p className="text-muted mb-2">Send us your queries anytime</p>
                  <a href="mailto:info@astropredictions.com" className="text-decoration-none fw-bold" style={{ color: '#f5576c' }}>
                    info@astropredictions.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 border-0 shadow-sm text-center hover-card">
                <div className="card-body p-4">
                  <div className="rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                  }}>
                    <i className="bi bi-geo-alt-fill fs-2 text-white"></i>
                  </div>
                  <h5 className="fw-bold mb-3">Location</h5>
                  <p className="text-muted mb-2">Visit our consultation center</p>
                  <p className="mb-0 fw-semibold text-dark">
                    123 Cosmic Street<br />
                    Starlight City, SC 12345
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form & Info Section */}
          <div className="row g-4 align-items-start">
            {/* Contact Form */}
            <div className="col-lg-7" data-aos="fade-right">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="fw-bold mb-3">Send Us a Message</h3>
                  <div className="alert alert-info border-0 mb-4" style={{background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(0, 242, 254, 0.1) 100%)', borderLeft: '4px solid #4facfe'}}>
                    <div className="d-flex align-items-start">
                      <i className="bi bi-info-circle-fill me-2 mt-1" style={{color: '#4facfe'}}></i>
                      <div>
                        <p className="mb-2 fw-semibold" style={{color: '#4facfe'}}>Have questions? We're here to help!</p>
                        <p className="mb-2 small">Use this form for general inquiries, questions, or feedback.</p>
                        <p className="mb-0 small">Ready to book a consultation? <a href="/enquiry" className="fw-bold text-decoration-none" style={{color: '#4facfe'}}>Click here to book →</a></p>
                      </div>
                    </div>
                  </div>
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Full Name</label>
                        <input 
                          type="text" 
                          className="form-control form-control-lg" 
                          placeholder="Enter your name"
                          style={{ borderRadius: '10px' }}
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="form-label fw-semibold">Email Address</label>
                        <input 
                          type="email" 
                          className="form-control form-control-lg" 
                          placeholder="Enter your email"
                          style={{ borderRadius: '10px' }}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold">Phone Number</label>
                        <input 
                          type="tel" 
                          className="form-control form-control-lg" 
                          placeholder="Enter your phone"
                          style={{ borderRadius: '10px' }}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold">Subject</label>
                        <input 
                          type="text" 
                          className="form-control form-control-lg" 
                          placeholder="What is this regarding?"
                          style={{ borderRadius: '10px' }}
                        />
                      </div>
                      <div className="col-12">
                        <label className="form-label fw-semibold">Message</label>
                        <textarea 
                          className="form-control form-control-lg" 
                          rows="5" 
                          placeholder="Tell us how we can help you..."
                          style={{ borderRadius: '10px' }}
                        ></textarea>
                      </div>
                      <div className="col-12">
                        <button 
                          type="submit" 
                          className="btn btn-lg px-5 fw-bold text-white w-100 shadow"
                          style={{
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            border: 'none',
                            borderRadius: '10px',
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <i className="bi bi-send-fill me-2"></i>
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Additional Info & Social Media */}
            <div className="col-lg-5" data-aos="fade-left">
              {/* Working Hours */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-3">
                    <i className="bi bi-clock-fill me-2" style={{ color: '#667eea' }}></i>
                    Working Hours
                  </h5>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                      <span className="text-muted">Monday - Friday</span>
                      <span className="fw-semibold">9:00 AM - 8:00 PM</span>
                    </li>
                    <li className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                      <span className="text-muted">Saturday</span>
                      <span className="fw-semibold">10:00 AM - 6:00 PM</span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span className="text-muted">Sunday</span>
                      <span className="fw-semibold">Closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Social Media */}
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-4">Connect With Us</h5>
                  <p className="text-muted mb-4">Follow us on social media for daily horoscopes, tips, and cosmic insights!</p>
                  <div className="d-flex gap-3 justify-content-center">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-lg rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #1877f2 0%, #0d5dbf 100%)',
                        border: 'none',
                        transition: 'transform 0.3s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
                    >
                      <i className="bi bi-facebook fs-4 text-white"></i>
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-lg rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #1da1f2 0%, #0d8bd9 100%)',
                        border: 'none',
                        transition: 'transform 0.3s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
                    >
                      <i className="bi bi-twitter fs-4 text-white"></i>
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-lg rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                        border: 'none',
                        transition: 'transform 0.3s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
                    >
                      <i className="bi bi-instagram fs-4 text-white"></i>
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-lg rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #0077b5 0%, #005885 100%)',
                        border: 'none',
                        transition: 'transform 0.3s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
                    >
                      <i className="bi bi-linkedin fs-4 text-white"></i>
                    </a>
                    <a 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-lg rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, #ff0000 0%, #cc0000 100%)',
                        border: 'none',
                        transition: 'transform 0.3s'
                      }}
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1) translateY(-5px)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1) translateY(0)'}
                    >
                      <i className="bi bi-youtube fs-4 text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" data-aos="fade-up">Frequently Asked Questions</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border-0 shadow-sm mb-3" data-aos="fade-up" data-aos-delay="100">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button fw-semibold ${openFaq !== 'faq1' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleFaq('faq1')}
                    >
                      How accurate are astrology predictions?
                    </button>
                  </h2>
                  <div id="faq1" className={`accordion-collapse collapse ${openFaq === 'faq1' ? 'show' : ''}`}>
                    <div className="accordion-body text-muted">
                      Our predictions are based on Vedic astrology principles with over 95% accuracy. However, astrology provides guidance, and free will plays a crucial role in shaping your destiny.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 shadow-sm mb-3" data-aos="fade-up" data-aos-delay="200">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button fw-semibold ${openFaq !== 'faq2' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleFaq('faq2')}
                    >
                      What information do I need for a consultation?
                    </button>
                  </h2>
                  <div id="faq2" className={`accordion-collapse collapse ${openFaq === 'faq2' ? 'show' : ''}`}>
                    <div className="accordion-body text-muted">
                      You'll need your date, time, and place of birth for accurate predictions. The birth time should be as precise as possible for creating your Kundali.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 shadow-sm mb-3" data-aos="fade-up" data-aos-delay="300">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button fw-semibold ${openFaq !== 'faq3' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleFaq('faq3')}
                    >
                      How long does a consultation take?
                    </button>
                  </h2>
                  <div id="faq3" className={`accordion-collapse collapse ${openFaq === 'faq3' ? 'show' : ''}`}>
                    <div className="accordion-body text-muted">
                      A standard consultation lasts 45-60 minutes. We ensure thorough analysis and provide ample time for your questions and concerns.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 shadow-sm" data-aos="fade-up" data-aos-delay="400">
                  <h2 className="accordion-header">
                    <button 
                      className={`accordion-button fw-semibold ${openFaq !== 'faq4' ? 'collapsed' : ''}`}
                      type="button" 
                      onClick={() => toggleFaq('faq4')}
                    >
                      Do you offer online consultations?
                    </button>
                  </h2>
                  <div id="faq4" className={`accordion-collapse collapse ${openFaq === 'faq4' ? 'show' : ''}`}>
                    <div className="accordion-body text-muted">
                      Yes! We offer online consultations via video call, phone, and chat. Book your preferred slot through our contact form or call us directly.
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

export default Contact;
