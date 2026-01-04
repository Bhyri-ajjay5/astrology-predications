import React, { useState, useEffect } from 'react';

function Services() {
  const [activeSlide, setActiveSlide] = useState(0);

  const banners = [
    {
      title: "Discover Your Zodiac Destiny",
      subtitle: "Unlock the secrets written in the stars",
      description: "Comprehensive horoscope readings tailored to your zodiac sign",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: "bi-stars"
    },
    {
      title: "Personalized Kundali Analysis",
      subtitle: "Your cosmic blueprint revealed",
      description: "Detailed birth chart analysis based on Vedic astrology principles",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: "bi-diagram-3-fill"
    },
    {
      title: "Relationship Compatibility",
      subtitle: "Find your cosmic connection",
      description: "Discover compatibility insights for love, friendship, and business",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: "bi-heart-fill"
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % banners.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="min-vh-100">
      {/* Carousel Banners */}
      <section className="position-relative overflow-hidden" style={{ minHeight: '65vh' }}>
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`position-absolute w-100 h-100 d-flex align-items-center ${
              index === activeSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              background: banner.gradient,
              transition: 'opacity 1s ease-in-out',
              minHeight: '65vh',
              pointerEvents: index === activeSlide ? 'auto' : 'none',
              top: 0,
              left: 0
            }}
          >
            <div className="container text-white text-center" data-aos="fade-up">
              <div className="mb-4" style={{
                display: 'inline-block',
                background: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                padding: '2rem',
                backdropFilter: 'blur(10px)'
              }}>
                <i className={`${banner.icon} display-1`}></i>
              </div>
              <h1 className="display-2 fw-bold mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}>
                {banner.title}
              </h1>
              <p className="lead fs-3 mb-4 opacity-90">{banner.subtitle}</p>
              <p className="fs-5 mb-0 opacity-90 px-5">{banner.description}</p>
            </div>
          </div>
        ))}

        {/* Carousel Controls - Improved styling */}
        <button
          className="btn position-absolute top-50 start-0 translate-middle-y ms-4"
          style={{
            width: '50px',
            height: '50px',
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.3)',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '50%',
            backdropFilter: 'blur(10px)',
            color: 'white',
            fontSize: '1.5rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
          }}
          onClick={prevSlide}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <button
          className="btn position-absolute top-50 end-0 translate-middle-y me-4"
          style={{
            width: '50px',
            height: '50px',
            zIndex: 10,
            background: 'rgba(255, 255, 255, 0.3)',
            border: '2px solid rgba(255, 255, 255, 0.5)',
            borderRadius: '50%',
            backdropFilter: 'blur(10px)',
            color: 'white',
            fontSize: '1.5rem',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
          }}
          onClick={nextSlide}
        >
          <i className="bi bi-chevron-right"></i>
        </button>

        {/* Carousel Indicators - Improved styling */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4" style={{ zIndex: 10 }}>
          <div className="d-flex gap-3">
            {banners.map((_, index) => (
              <button
                key={index}
                className="btn p-0"
                style={{
                  width: index === activeSlide ? '50px' : '15px',
                  height: '15px',
                  background: index === activeSlide ? 'white' : 'rgba(255, 255, 255, 0.5)',
                  border: 'none',
                  borderRadius: '10px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onClick={() => setActiveSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-5" style={{ background: '#f8f9fa' }}>
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-4 fw-bold mb-3" style={{ color: '#667eea' }}>
              Our Astrological Services
            </h2>
            <p className="lead text-secondary mb-0">
              Explore our comprehensive range of astrology services designed to guide you through life's journey
            </p>
          </div>

          <div className="row g-4 mb-4">
            {/* Daily Horoscopes */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 border-0 shadow-sm hover-card" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <div className="position-relative" style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  padding: '2rem',
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
                }}>
                  <div className="text-white text-center">
                    <div className="mb-3" style={{
                      width: '80px',
                      height: '80px',
                      margin: '0 auto',
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(10px)'
                    }}>
                      <i className="bi bi-calendar-day-fill" style={{ fontSize: '2.5rem' }}></i>
                    </div>
                    <h3 className="fw-bold mb-0">Daily Horoscopes</h3>
                  </div>
                </div>
                <div className="card-body p-4" style={{ marginTop: '-2rem' }}>
                  <p className="text-secondary mb-4">
                    Start each day with cosmic guidance tailored to your zodiac sign. Our daily horoscopes cover all 
                    aspects of your life including love, career, health, and finances.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#667eea' }}></i>
                      <span className="text-secondary">Personalized daily predictions</span>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#667eea' }}></i>
                      <span className="text-secondary">Weekly and monthly forecasts</span>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#667eea' }}></i>
                      <span className="text-secondary">Lucky numbers and colors</span>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#667eea' }}></i>
                      <span className="text-secondary">Best times for decisions</span>
                    </li>
                  </ul>
                  <a href="/horoscope" className="btn btn-lg w-100 fw-bold text-white shadow" style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    borderRadius: '10px',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="bi bi-calendar-day me-2"></i>
                    View Today's Horoscope
                  </a>
                </div>
              </div>
            </div>

            {/* Kundali Generation */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 border-0 shadow-sm hover-card" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <div className="position-relative" style={{
                  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                  padding: '2rem',
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
                }}>
                  <div className="text-white text-center">
                    <div className="mb-3" style={{
                      width: '80px',
                      height: '80px',
                      margin: '0 auto',
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(10px)'
                    }}>
                      <i className="bi bi-diagram-3-fill" style={{ fontSize: '2.5rem' }}></i>
                    </div>
                    <h3 className="fw-bold mb-0">Kundali Analysis</h3>
                  </div>
                </div>
                <div className="card-body p-4" style={{ marginTop: '-2rem' }}>
                  <p className="text-secondary mb-4">
                    Generate your personalized Kundali (birth chart) based on Vedic astrology. Understand the planetary 
                    positions at your birth and their influence on your life.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#f5576c' }}></i>
                      <span className="text-secondary">Complete birth chart generation</span>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#f5576c' }}></i>
                      <span className="text-secondary">Planetary position analysis</span>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#f5576c' }}></i>
                      <span className="text-secondary">Dasha and transit predictions</span>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#f5576c' }}></i>
                      <span className="text-secondary">Life path insights</span>
                    </li>
                  </ul>
                  <a href="/kundali" className="btn btn-lg w-100 fw-bold text-white" style={{
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    border: 'none',
                    borderRadius: '50px'
                  }}>
                    Generate Your Kundali
                  </a>
                </div>
              </div>
            </div>

            {/* Zodiac Sign Analysis */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div className="card h-100 border-0 shadow-sm hover-card" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <div className="position-relative" style={{
                  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                  padding: '2rem',
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
                }}>
                  <div className="text-white text-center">
                    <div className="mb-3" style={{
                      width: '80px',
                      height: '80px',
                      margin: '0 auto',
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(10px)'
                    }}>
                      <i className="bi bi-stars" style={{ fontSize: '2.5rem' }}></i>
                    </div>
                    <h3 className="fw-bold mb-0">Zodiac Sign Insights</h3>
                  </div>
                </div>
                <div className="card-body p-4" style={{ marginTop: '-2rem' }}>
                  <p className="text-secondary mb-4">
                    Discover comprehensive information about all 12 zodiac signs. Learn about personality traits, 
                    strengths, weaknesses, and compatibility with other signs.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#00f2fe' }}></i>
                      <span className="text-secondary">Detailed zodiac profiles</span>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#00f2fe' }}></i>
                      <span className="text-secondary">Personality traits analysis</span>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#00f2fe' }}></i>
                      <span className="text-secondary">Career and relationship guidance</span>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#00f2fe' }}></i>
                      <span className="text-secondary">Element and ruling planet info</span>
                    </li>
                  </ul>
                  <a href="/zodiac-signs" className="btn btn-lg w-100 fw-bold text-white shadow" style={{
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    border: 'none',
                    borderRadius: '10px',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="bi bi-stars me-2"></i>
                    Explore Zodiac Signs
                  </a>
                </div>
              </div>
            </div>

            {/* Compatibility Analysis */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div className="card h-100 border-0 shadow-sm hover-card" style={{ borderRadius: '20px', overflow: 'hidden' }}>
                <div className="position-relative" style={{
                  background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                  padding: '2rem',
                  clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'
                }}>
                  <div className="text-white text-center">
                    <div className="mb-3" style={{
                      width: '80px',
                      height: '80px',
                      margin: '0 auto',
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backdropFilter: 'blur(10px)'
                    }}>
                      <i className="bi bi-heart-fill" style={{ fontSize: '2.5rem' }}></i>
                    </div>
                    <h3 className="fw-bold mb-0">Compatibility Check</h3>
                  </div>
                </div>
                <div className="card-body p-4" style={{ marginTop: '-2rem' }}>
                  <p className="text-secondary mb-4">
                    Find out how compatible you are with your partner, friend, or business associate. Our compatibility 
                    analysis helps you understand relationship dynamics.
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#fa709a' }}></i>
                      <span className="text-secondary">Love compatibility analysis</span>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#fa709a' }}></i>
                      <span className="text-secondary">Friendship compatibility</span>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#fa709a' }}></i>
                      <span className="text-secondary">Business partnership insights</span>
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#fa709a' }}></i>
                      <span className="text-secondary">Relationship strengths & challenges</span>
                    </li>
                  </ul>
                  <a href="/compatibility" className="btn btn-lg w-100 fw-bold text-white shadow" style={{
                    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                    border: 'none',
                    borderRadius: '10px',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className="bi bi-heart me-2"></i>
                    Check Compatibility
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold mb-3">
              <span style={{ color: '#667eea' }}>Why Choose Our Services</span>
            </h2>
            <p className="lead text-secondary">Experience the difference with our authentic astrological guidance</p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
              <div className="text-center p-4">
                <div
                  className="mb-4 mx-auto"
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <i className="bi bi-award-fill text-white" style={{ fontSize: '2.5rem' }}></i>
                </div>
                <h5 className="fw-bold mb-3">Expert Analysis</h5>
                <p className="text-secondary small">
                  Based on authentic Vedic astrology principles practiced for thousands of years
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
              <div className="text-center p-4">
                <div
                  className="mb-4 mx-auto"
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <i className="bi bi-clock-fill text-white" style={{ fontSize: '2.5rem' }}></i>
                </div>
                <h5 className="fw-bold mb-3">Instant Results</h5>
                <p className="text-secondary small">
                  Get immediate access to your horoscope, Kundali, and compatibility reports
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
              <div className="text-center p-4">
                <div
                  className="mb-4 mx-auto"
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <i className="bi bi-graph-up-arrow text-white" style={{ fontSize: '2.5rem' }}></i>
                </div>
                <h5 className="fw-bold mb-3">Accurate Predictions</h5>
                <p className="text-secondary small">
                  Precise calculations using advanced astronomical algorithms and data
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
              <div className="text-center p-4">
                <div
                  className="mb-4 mx-auto"
                  style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <i className="bi bi-shield-lock-fill text-white" style={{ fontSize: '2.5rem' }}></i>
                </div>
                <h5 className="fw-bold mb-3">100% Private</h5>
                <p className="text-secondary small">
                  Your personal information and birth details are completely secure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-5 text-white text-center"
        style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
      >
        <div className="container">
          <div data-aos="zoom-in">
            <h2 className="display-5 fw-bold mb-4">Ready to Unlock Your Cosmic Potential?</h2>
            <p className="lead mb-5 opacity-90">
              Start your astrological journey today and discover what the stars have to say about you
            </p>
            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <a
                href="/horoscope"
                className="btn btn-light btn-lg px-5 py-3 fw-bold shadow"
                style={{ borderRadius: '50px' }}
              >
                <i className="bi bi-star me-2"></i>
                Get Started Now
              </a>
              <a
                href="/contact"
                className="btn btn-outline-light btn-lg px-5 py-3 fw-bold"
                style={{ borderRadius: '50px' }}
              >
                <i className="bi bi-chat-dots me-2"></i>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
