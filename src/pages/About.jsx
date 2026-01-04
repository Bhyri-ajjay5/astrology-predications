import React from 'react';

function About() {
  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className="text-white text-center py-5" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container" data-aos="fade-down">
          <h1 className="display-3 fw-bold mb-3" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
            About Astrology Predictions
          </h1>
          <p className="lead fs-4 mb-0 opacity-90">
            Bridging 5000 Years of Ancient Wisdom with Modern Technology
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center mb-5">
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
                <i className="bi bi-bullseye display-1 mb-4"></i>
                <h2 className="fw-bold mb-3">Our Mission</h2>
                <p className="fs-5 mb-0 opacity-90">
                  To empower individuals with accurate astrological insights that illuminate their life path, 
                  helping them make informed decisions about love, career, health, and personal growth.
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h3 className="fw-bold mb-4" style={{color: '#667eea'}}>
                What We Believe
              </h3>
              <p className="text-secondary mb-4 fs-5">
                Astrology is not just about predicting the future—it's a profound tool for self-discovery 
                and understanding your place in the universe.
              </p>
              <div className="mb-4">
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
                    <i className="bi bi-book text-white fs-5"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-2">Ancient Wisdom</h6>
                    <p className="text-secondary mb-0">
                      Rooted in Vedic astrology—one of the oldest and most comprehensive systems of astrological knowledge
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
                    <i className="bi bi-cpu text-white fs-5"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-2">Modern Technology</h6>
                    <p className="text-secondary mb-0">
                      Advanced algorithms for precise planetary calculations and instant birth chart generation
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
                    <i className="bi bi-person-heart text-white fs-5"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-2">Personal Touch</h6>
                    <p className="text-secondary mb-0">
                      Every reading is tailored to your unique birth details and life circumstances
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-3">
              <span style={{color: '#667eea'}}>What We Offer</span>
            </h2>
            <p className="lead text-secondary">Comprehensive astrological services to guide your journey</p>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 border-0 shadow" style={{borderRadius: '15px'}}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3" style={{
                    width: '70px',
                    height: '70px',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-calendar-day-fill text-white" style={{fontSize: '2rem'}}></i>
                  </div>
                  <h5 className="fw-bold mb-3">Daily Horoscopes</h5>
                  <p className="text-secondary small mb-0">
                    Fresh predictions updated daily covering love, career, health, and finances for all 12 zodiac signs
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 border-0 shadow" style={{borderRadius: '15px'}}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3" style={{
                    width: '70px',
                    height: '70px',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-diagram-3-fill text-white" style={{fontSize: '2rem'}}></i>
                  </div>
                  <h5 className="fw-bold mb-3">Kundali Analysis</h5>
                  <p className="text-secondary small mb-0">
                    Detailed birth chart creation and analysis based on your exact date, time, and place of birth
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 border-0 shadow" style={{borderRadius: '15px'}}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3" style={{
                    width: '70px',
                    height: '70px',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-heart-fill text-white" style={{fontSize: '2rem'}}></i>
                  </div>
                  <h5 className="fw-bold mb-3">Compatibility Check</h5>
                  <p className="text-secondary small mb-0">
                    Discover relationship compatibility for love, friendship, and business partnerships
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
              <div className="card h-100 border-0 shadow" style={{borderRadius: '15px'}}>
                <div className="card-body p-4 text-center">
                  <div className="mb-3" style={{
                    width: '70px',
                    height: '70px',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-star-fill text-white" style={{fontSize: '2rem'}}></i>
                  </div>
                  <h5 className="fw-bold mb-3">Zodiac Insights</h5>
                  <p className="text-secondary small mb-0">
                    Comprehensive information about zodiac signs including traits, strengths, and life predictions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-3">
              <span style={{color: '#667eea'}}>Why Choose Us</span>
            </h2>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center">
                <div className="mb-3" style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'rotate(45deg)'
                }}>
                  <i className="bi bi-shield-check text-white" style={{fontSize: '2.5rem', transform: 'rotate(-45deg)'}}></i>
                </div>
                <h5 className="fw-bold mt-3 mb-3">100% Authentic</h5>
                <p className="text-secondary small">
                  Based on genuine Vedic astrology texts and verified astronomical data
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center">
                <div className="mb-3" style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto',
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'rotate(45deg)'
                }}>
                  <i className="bi bi-lightning-charge-fill text-white" style={{fontSize: '2.5rem', transform: 'rotate(-45deg)'}}></i>
                </div>
                <h5 className="fw-bold mt-3 mb-3">Lightning Fast</h5>
                <p className="text-secondary small">
                  Instant birth chart generation with accurate planetary position calculations
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center">
                <div className="mb-3" style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto',
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'rotate(45deg)'
                }}>
                  <i className="bi bi-phone-fill text-white" style={{fontSize: '2.5rem', transform: 'rotate(-45deg)'}}></i>
                </div>
                <h5 className="fw-bold mt-3 mb-3">User Friendly</h5>
                <p className="text-secondary small">
                  Intuitive interface designed for both beginners and astrology enthusiasts
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
              <div className="text-center">
                <div className="mb-3" style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto',
                  background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'rotate(45deg)'
                }}>
                  <i className="bi bi-lock-fill text-white" style={{fontSize: '2.5rem', transform: 'rotate(-45deg)'}}></i>
                </div>
                <h5 className="fw-bold mt-3 mb-3">100% Private</h5>
                <p className="text-secondary small">
                  Your personal details and birth information are kept completely confidential
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="container">
          <div className="text-center mb-5 text-white" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-3">Our Core Values</h2>
            <p className="lead opacity-90">Principles that guide everything we do</p>
          </div>

          <div className="row g-4 text-white">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center p-4">
                <div className="mb-4" style={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)'
                }}>
                  <i className="bi bi-gem" style={{fontSize: '3rem'}}></i>
                </div>
                <h4 className="fw-bold mb-3">Authenticity</h4>
                <p className="opacity-90">
                  We stay true to traditional Vedic principles while making ancient wisdom accessible to the modern world
                </p>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center p-4">
                <div className="mb-4" style={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)'
                }}>
                  <i className="bi bi-hearts" style={{fontSize: '3rem'}}></i>
                </div>
                <h4 className="fw-bold mb-3">Compassion</h4>
                <p className="opacity-90">
                  We approach every reading with empathy, understanding that astrology touches people's deepest life questions
                </p>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center p-4">
                <div className="mb-4" style={{
                  width: '100px',
                  height: '100px',
                  margin: '0 auto',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(10px)'
                }}>
                  <i className="bi bi-award" style={{fontSize: '3rem'}}></i>
                </div>
                <h4 className="fw-bold mb-3">Excellence</h4>
                <p className="opacity-90">
                  We continuously refine our algorithms and interpretations to provide the most accurate astrological guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-white">
        <div className="container text-center">
          <div data-aos="zoom-in">
            <h2 className="display-5 fw-bold mb-4" style={{color: '#667eea'}}>
              Ready to Explore Your Cosmic Blueprint?
            </h2>
            <p className="lead text-secondary mb-5">
              Begin your journey of self-discovery with personalized astrological insights
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a 
                href="/services" 
                className="btn btn-lg px-5 py-3 fw-bold text-white shadow" 
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                }}
              >
                <i className="bi bi-star me-2"></i>
                Explore Services
              </a>
              <a 
                href="/contact" 
                className="btn btn-outline-primary btn-lg px-5 py-3 fw-bold" 
                style={{
                  borderWidth: '2px',
                  borderRadius: '10px',
                  color: '#667eea',
                  borderColor: '#667eea',
                  background: 'transparent',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
                  e.currentTarget.style.color = 'white';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#667eea';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <i className="bi bi-envelope me-2"></i>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
