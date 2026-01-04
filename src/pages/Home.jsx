import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-vh-100">
      {/* Hero Section with Gradient Background */}
      <section className="hero-section text-white text-center py-5" style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-2 fw-bold mb-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                Unveil Your Cosmic Destiny
              </h1>
              <p className="lead fs-3 mb-4">
                Ancient Wisdom Meets Modern Insights
              </p>
              <p className="fs-5 mb-5 opacity-90">
                Discover what the stars reveal about your personality, relationships, and future through 
                personalized astrology readings and detailed Kundali analysis
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link to="/zodiac-signs" className="btn btn-light btn-lg px-5 py-3 fw-bold shadow">
                  <i className="bi bi-stars me-2"></i>
                  Explore Zodiac Signs
                </Link>
                <Link to="/kundali" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold">
                  <i className="bi bi-calendar-check me-2"></i>
                  Get Your Kundali
                </Link>
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
              <span style={{color: '#667eea'}}>Our Astrology Services</span>
            </h2>
            <p className="lead text-secondary">Comprehensive astrological guidance for your life journey</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 border-0 shadow-lg" style={{borderRadius: '20px', overflow: 'hidden'}}>
                <div className="card-body p-4 text-center">
                  <div className="mb-4" style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-sun-fill text-white" style={{fontSize: '2.5rem'}}></i>
                  </div>
                  <h4 className="fw-bold mb-3">Daily Horoscopes</h4>
                  <p className="text-secondary mb-3">
                    Start your day with personalized cosmic guidance. Get accurate daily predictions 
                    tailored to your zodiac sign.
                  </p>
                  <ul className="list-unstyled text-start small">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Love & Relationships</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Career & Finance</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Health & Wellness</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 border-0 shadow-lg" style={{borderRadius: '20px', overflow: 'hidden'}}>
                <div className="card-body p-4 text-center">
                  <div className="mb-4" style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-diagram-3-fill text-white" style={{fontSize: '2.5rem'}}></i>
                  </div>
                  <h4 className="fw-bold mb-3">Kundali Analysis</h4>
                  <p className="text-secondary mb-3">
                    Comprehensive birth chart analysis based on Vedic astrology principles. Understand 
                    your life's blueprint.
                  </p>
                  <ul className="list-unstyled text-start small">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Birth Chart Creation</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Planetary Positions</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Dasha Predictions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 border-0 shadow-lg" style={{borderRadius: '20px', overflow: 'hidden'}}>
                <div className="card-body p-4 text-center">
                  <div className="mb-4" style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-heart-fill text-white" style={{fontSize: '2.5rem'}}></i>
                  </div>
                  <h4 className="fw-bold mb-3">Compatibility Check</h4>
                  <p className="text-secondary mb-3">
                    Discover relationship compatibility through zodiac matching. Find your perfect cosmic 
                    connection.
                  </p>
                  <ul className="list-unstyled text-start small">
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Love Compatibility</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Friendship Match</li>
                    <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Business Partnership</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
        <div className="container">
          <div className="row text-center text-white">
            <div className="col-md-3 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="100">
              <div className="display-4 fw-bold mb-2">12</div>
              <p className="fs-5 mb-0">Zodiac Signs</p>
            </div>
            <div className="col-md-3 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="200">
              <div className="display-4 fw-bold mb-2">27</div>
              <p className="fs-5 mb-0">Nakshatras</p>
            </div>
            <div className="col-md-3 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay="300">
              <div className="display-4 fw-bold mb-2">9</div>
              <p className="fs-5 mb-0">Planets</p>
            </div>
            <div className="col-md-3" data-aos="fade-up" data-aos-delay="400">
              <div className="display-4 fw-bold mb-2">365</div>
              <p className="fs-5 mb-0">Daily Predictions</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Astrology Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0" data-aos="fade-right">
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '20px',
                padding: '3rem',
                color: 'white',
                minHeight: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <i className="bi bi-stars display-1 mb-4"></i>
                <h3 className="fw-bold mb-3">5000+ Years of Wisdom</h3>
                <p className="fs-5 mb-0 opacity-90">
                  Vedic astrology has guided humanity for millennia, offering profound insights into 
                  life's mysteries through the science of celestial movements.
                </p>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <h2 className="display-6 fw-bold mb-4" style={{color: '#667eea'}}>
                Why Trust Astrology?
              </h2>
              <p className="lead text-secondary mb-4">
                Astrology is more than just predictions—it's a profound system of understanding 
                cosmic energies and their influence on human life.
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
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-shield-check text-white fs-4"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Time-Tested Accuracy</h5>
                    <p className="text-secondary mb-0">
                      Based on precise astronomical calculations and ancient texts
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
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-graph-up-arrow text-white fs-4"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Personal Growth</h5>
                    <p className="text-secondary mb-0">
                      Gain deep insights into your strengths, weaknesses, and potential
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
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-compass text-white fs-4"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Life Guidance</h5>
                    <p className="text-secondary mb-0">
                      Make informed decisions about career, relationships, and life path
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5" style={{background: 'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)'}}>
        <div className="container text-center text-white">
          <div data-aos="zoom-in">
            <h2 className="display-5 fw-bold mb-4">Begin Your Cosmic Journey Today</h2>
            <p className="lead mb-5 opacity-90">
              Let the stars guide you toward clarity, purpose, and fulfillment
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link to="/zodiac-signs" className="btn btn-light btn-lg px-5 py-3 fw-bold shadow">
                View All Zodiac Signs
              </Link>
              <Link to="/horoscope" className="btn btn-outline-light btn-lg px-5 py-3 fw-bold">
                Today's Horoscope
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
