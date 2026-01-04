import React from 'react';

function ZodiacSigns() {
  const zodiacSigns = [
    {
      name: 'Aries',
      symbol: '♈',
      dates: 'March 21 - April 19',
      element: 'Fire',
      planet: 'Mars',
      icon: 'bi-stars',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      traits: 'Courageous, Determined, Confident, Enthusiastic',
      description: 'Aries are bold pioneers who love to take on challenges with passion and energy.'
    },
    {
      name: 'Taurus',
      symbol: '♉',
      dates: 'April 20 - May 20',
      element: 'Earth',
      planet: 'Venus',
      icon: 'bi-brightness-high',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      traits: 'Reliable, Patient, Practical, Devoted',
      description: 'Taurus individuals are known for their stability, loyalty, and love for comfort.'
    },
    {
      name: 'Gemini',
      symbol: '♊',
      dates: 'May 21 - June 20',
      element: 'Air',
      planet: 'Mercury',
      icon: 'bi-wind',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      traits: 'Gentle, Affectionate, Curious, Adaptable',
      description: 'Geminis are versatile communicators who love learning and social interactions.'
    },
    {
      name: 'Cancer',
      symbol: '♋',
      dates: 'June 21 - July 22',
      element: 'Water',
      planet: 'Moon',
      icon: 'bi-moon-stars',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      traits: 'Tenacious, Loyal, Emotional, Sympathetic',
      description: 'Cancers are nurturing souls who deeply care for their loved ones and home.'
    },
    {
      name: 'Leo',
      symbol: '♌',
      dates: 'July 23 - August 22',
      element: 'Fire',
      planet: 'Sun',
      icon: 'bi-sun-fill',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      traits: 'Creative, Passionate, Generous, Warm-hearted',
      description: 'Leos are natural leaders who shine brightly with confidence and charisma.'
    },
    {
      name: 'Virgo',
      symbol: '♍',
      dates: 'August 23 - September 22',
      element: 'Earth',
      planet: 'Mercury',
      icon: 'bi-flower1',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      traits: 'Loyal, Analytical, Kind, Hardworking',
      description: 'Virgos are perfectionists with a keen eye for detail and a helpful nature.'
    },
    {
      name: 'Libra',
      symbol: '♎',
      dates: 'September 23 - October 22',
      element: 'Air',
      planet: 'Venus',
      icon: 'bi-balance-scale',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      traits: 'Cooperative, Fair-minded, Social, Diplomatic',
      description: 'Libras seek harmony and balance in all aspects of life and relationships.'
    },
    {
      name: 'Scorpio',
      symbol: '♏',
      dates: 'October 23 - November 21',
      element: 'Water',
      planet: 'Pluto',
      icon: 'bi-droplet-fill',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      traits: 'Resourceful, Brave, Passionate, Stubborn',
      description: 'Scorpios are intense and mysterious with deep emotional connections.'
    },
    {
      name: 'Sagittarius',
      symbol: '♐',
      dates: 'November 22 - December 21',
      element: 'Fire',
      planet: 'Jupiter',
      icon: 'bi-arrow-up-right',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      traits: 'Generous, Idealistic, Great sense of humor',
      description: 'Sagittarians are adventurous free spirits who love exploring and learning.'
    },
    {
      name: 'Capricorn',
      symbol: '♑',
      dates: 'December 22 - January 19',
      element: 'Earth',
      planet: 'Saturn',
      icon: 'bi-mountain',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      traits: 'Responsible, Disciplined, Self-control, Good managers',
      description: 'Capricorns are ambitious achievers who value tradition and hard work.'
    },
    {
      name: 'Aquarius',
      symbol: '♒',
      dates: 'January 20 - February 18',
      element: 'Air',
      planet: 'Uranus',
      icon: 'bi-water',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      traits: 'Progressive, Original, Independent, Humanitarian',
      description: 'Aquarians are innovative thinkers who value freedom and individuality.'
    },
    {
      name: 'Pisces',
      symbol: '♓',
      dates: 'February 19 - March 20',
      element: 'Water',
      planet: 'Neptune',
      icon: 'bi-fish',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      traits: 'Compassionate, Artistic, Intuitive, Gentle',
      description: 'Pisces are dreamers with deep empathy and creative imagination.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-purple text-white text-center py-4 py-md-5" style={{minHeight: '35vh'}}>
        <div className="container" data-aos="fade-down">
          <h1 className="display-4 display-md-3 fw-bold mb-2 mb-md-3 text-shadow">Explore Zodiac Signs</h1>
          <p className="lead fs-5 fs-md-4 mb-0 opacity-90 px-2">
            Discover the unique characteristics and cosmic influences of all 12 zodiac signs
          </p>
        </div>
      </section>

      {/* Zodiac Signs Grid */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="text-center mb-4 mb-md-5">
            <h2 className="fw-bold mb-2 mb-md-3 text-purple" data-aos="fade-up">The Twelve Zodiac Signs</h2>
            <p className="lead text-secondary px-2" data-aos="fade-up" data-aos-delay="100">
              Each sign has its own unique qualities, strengths, and cosmic connections
            </p>
          </div>

          <div className="row g-3 g-md-4">
            {zodiacSigns.map((sign, index) => (
              <div key={sign.name} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={index * 50}>
                <div className="card h-100 border-0 shadow-lg card-rounded hover-card">
                  {/* Card Header with Gradient */}
                  <div 
                    className="p-3 p-md-4 text-white text-center" 
                    style={{
                      background: sign.gradient,
                      borderTopLeftRadius: '20px',
                      borderTopRightRadius: '20px'
                    }}
                  >
                    <div className="display-3 display-md-1 mb-2">{sign.symbol}</div>
                    <h4 className="h3 fw-bold mb-1">{sign.name}</h4>
                    <p className="mb-0 small opacity-90">{sign.dates}</p>
                  </div>

                  {/* Card Body */}
                  <div className="card-body p-3 p-md-4">
                    <div className="row g-2 g-md-3 mb-3">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-fire me-2 text-orange"></i>
                          <div>
                            <small className="text-muted d-block" style={{fontSize: '0.7rem'}}>Element</small>
                            <strong className="small">{sign.element}</strong>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <i className="bi bi-globe me-2 text-purple"></i>
                          <div>
                            <small className="text-muted d-block" style={{fontSize: '0.7rem'}}>Planet</small>
                            <strong className="small">{sign.planet}</strong>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-secondary mb-3 small">{sign.description}</p>

                    <div className="mb-3">
                      <h6 className="fw-bold text-purple mb-2 small">Key Traits:</h6>
                      <p className="small text-muted mb-0" style={{fontSize: '0.8rem'}}>{sign.traits}</p>
                    </div>

                    <a 
                      href={`/enquiry`}
                      className="btn btn-sm btn-gradient-purple w-100 text-white fw-semibold"
                    >
                      <i className="bi bi-calendar-check me-2"></i>
                      Book Consultation
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-4 py-md-5 bg-white">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 px-3" data-aos="fade-up">
              <h2 className="fw-bold mb-3 mb-md-4 text-purple h3 h2-md">Want to Know More About Your Sign?</h2>
              <p className="lead text-secondary mb-3 mb-md-4 small">
                Get a personalized reading based on your birth chart and discover how the stars influence your life
              </p>
              <div className="d-flex gap-2 gap-md-3 justify-content-center flex-wrap">
                <a href="/enquiry" className="btn btn-md btn-gradient-purple text-white px-4 fw-bold">
                  <i className="bi bi-stars me-2"></i>
                  Get Your Kundali
                </a>
                <a href="/services" className="btn btn-md btn-outline-gradient-purple px-4 fw-bold">
                  <i className="bi bi-list-check me-2"></i>
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ZodiacSigns;
