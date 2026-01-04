import React, { useState } from 'react';

function Horoscope() {
  const [selectedSign, setSelectedSign] = useState('aries');

  const zodiacSigns = [
    { name: 'Aries', icon: '♈', dates: 'Mar 21 - Apr 19', color: '#667eea' },
    { name: 'Taurus', icon: '♉', dates: 'Apr 20 - May 20', color: '#f093fb' },
    { name: 'Gemini', icon: '♊', dates: 'May 21 - Jun 20', color: '#4facfe' },
    { name: 'Cancer', icon: '♋', dates: 'Jun 21 - Jul 22', color: '#fa709a' },
    { name: 'Leo', icon: '♌', dates: 'Jul 23 - Aug 22', color: '#667eea' },
    { name: 'Virgo', icon: '♍', dates: 'Aug 23 - Sep 22', color: '#f093fb' },
    { name: 'Libra', icon: '♎', dates: 'Sep 23 - Oct 22', color: '#4facfe' },
    { name: 'Scorpio', icon: '♏', dates: 'Oct 23 - Nov 21', color: '#fa709a' },
    { name: 'Sagittarius', icon: '♐', dates: 'Nov 22 - Dec 21', color: '#667eea' },
    { name: 'Capricorn', icon: '♑', dates: 'Dec 22 - Jan 19', color: '#f093fb' },
    { name: 'Aquarius', icon: '♒', dates: 'Jan 20 - Feb 18', color: '#4facfe' },
    { name: 'Pisces', icon: '♓', dates: 'Feb 19 - Mar 20', color: '#fa709a' }
  ];

  const horoscopeData = {
    aries: {
      love: "Romance is in the air! Today brings exciting opportunities for connection and deepening bonds.",
      career: "Your leadership skills shine bright. Take initiative on that project you've been planning.",
      health: "High energy levels today. Perfect time to start a new fitness routine or outdoor activity.",
      lucky: { number: 7, color: 'Red', time: '2:00 PM - 4:00 PM' }
    },
    taurus: {
      love: "Communication is key today. Express your feelings openly and honestly with your partner.",
      career: "Financial opportunities may arise. Stay focused and practical in your decision-making.",
      health: "Take time to relax and unwind. Meditation or yoga would be beneficial for your well-being.",
      lucky: { number: 6, color: 'Green', time: '10:00 AM - 12:00 PM' }
    },
    gemini: {
      love: "Social interactions bring joy. Single? You might meet someone interesting at a gathering.",
      career: "Your versatility is your strength today. Multiple projects will move forward smoothly.",
      health: "Keep your mind active but don't overdo it. Balance mental activities with physical exercise.",
      lucky: { number: 5, color: 'Yellow', time: '3:00 PM - 5:00 PM' }
    },
    cancer: {
      love: "Emotional depth strengthens relationships. Show your caring nature and nurture your bonds.",
      career: "Trust your intuition in business matters. Your instincts are particularly sharp today.",
      health: "Focus on emotional wellness. Spend time with loved ones or engage in creative activities.",
      lucky: { number: 2, color: 'Silver', time: '6:00 PM - 8:00 PM' }
    },
    leo: {
      love: "Your charisma attracts positive attention. Be confident but remain humble in your interactions.",
      career: "Leadership opportunities present themselves. Your creativity impresses superiors today.",
      health: "High vitality today. Channel your energy into productive physical activities.",
      lucky: { number: 1, color: 'Gold', time: '11:00 AM - 1:00 PM' }
    },
    virgo: {
      love: "Attention to detail helps you understand your partner's needs better. Small gestures matter.",
      career: "Your analytical skills solve complex problems. Colleagues seek your advice and expertise.",
      health: "Maintain a balanced diet and stick to your wellness routine. Your body thanks you for consistency.",
      lucky: { number: 5, color: 'Navy Blue', time: '9:00 AM - 11:00 AM' }
    },
    libra: {
      love: "Harmony and balance in relationships. Compromise leads to beautiful understanding today.",
      career: "Teamwork brings success. Collaboration on projects yields excellent results.",
      health: "Balance is key. Ensure equal attention to physical, mental, and emotional health.",
      lucky: { number: 6, color: 'Pink', time: '4:00 PM - 6:00 PM' }
    },
    scorpio: {
      love: "Intensity and passion define the day. Deep conversations strengthen emotional connections.",
      career: "Your determination pays off. Persistence in challenges leads to breakthrough moments.",
      health: "Emotional release is important. Don't hold back feelings; find healthy outlets for expression.",
      lucky: { number: 9, color: 'Maroon', time: '8:00 PM - 10:00 PM' }
    },
    sagittarius: {
      love: "Adventure and spontaneity bring excitement. Plan something fun and unexpected with your loved one.",
      career: "Expansion opportunities arise. Don't be afraid to think big and take calculated risks.",
      health: "Outdoor activities energize you. Explore nature or try a new adventure sport.",
      lucky: { number: 3, color: 'Purple', time: '1:00 PM - 3:00 PM' }
    },
    capricorn: {
      love: "Stability and commitment deepen bonds. Show your reliable nature and long-term dedication.",
      career: "Hard work yields tangible results. Your discipline and perseverance are noticed by leadership.",
      health: "Structure your wellness routine. Consistency in exercise and diet brings visible improvements.",
      lucky: { number: 8, color: 'Brown', time: '7:00 AM - 9:00 AM' }
    },
    aquarius: {
      love: "Intellectual connection sparks romance. Engage in meaningful conversations and share ideas.",
      career: "Innovation and originality set you apart. Your unique perspective solves problems creatively.",
      health: "Mental stimulation is crucial. Try brain exercises, puzzles, or learn something new.",
      lucky: { number: 4, color: 'Electric Blue', time: '5:00 PM - 7:00 PM' }
    },
    pisces: {
      love: "Compassion and empathy strengthen relationships. Your sensitivity creates deep emotional bonds.",
      career: "Creative pursuits flourish. Trust your artistic instincts and imaginative solutions.",
      health: "Spiritual practices benefit you greatly. Meditation, yoga, or quiet reflection restore balance.",
      lucky: { number: 7, color: 'Sea Green', time: '12:00 PM - 2:00 PM' }
    }
  };

  const currentHoroscope = horoscopeData[selectedSign.toLowerCase()];
  const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-purple text-white text-center py-4 py-md-5" style={{minHeight: '35vh'}}>
        <div className="container" data-aos="fade-down">
          <h1 className="display-4 display-md-3 fw-bold mb-2 mb-md-3 text-shadow">Today's Horoscope</h1>
          <p className="lead fs-5 fs-md-4 mb-2 opacity-90 px-2">{currentDate}</p>
          <p className="fs-6 mb-0 opacity-90 px-2">
            Discover what the stars have in store for you today
          </p>
        </div>
      </section>

      {/* Zodiac Selection */}
      <section className="py-4 py-md-5 bg-light">
        <div className="container">
          <div className="text-center mb-4 mb-md-5">
            <h2 className="fw-bold mb-2 mb-md-3 text-purple" data-aos="fade-up">Select Your Zodiac Sign</h2>
            <p className="lead text-secondary px-2" data-aos="fade-up" data-aos-delay="100">
              Choose your sun sign to view your personalized daily horoscope
            </p>
          </div>

          {/* Zodiac Signs Grid */}
          <div className="row g-2 g-md-3 mb-4 mb-md-5">
            {zodiacSigns.map((sign, index) => (
              <div key={sign.name} className="col-6 col-md-4 col-lg-3" data-aos="fade-up" data-aos-delay={index * 30}>
                <button
                  className={`btn w-100 p-3 border-0 shadow-sm ${selectedSign === sign.name.toLowerCase() ? 'bg-gradient-purple text-white' : 'bg-white'}`}
                  style={{
                    transition: 'all 0.3s ease',
                    background: selectedSign === sign.name.toLowerCase() 
                      ? `linear-gradient(135deg, ${sign.color} 0%, #764ba2 100%)`
                      : 'white'
                  }}
                  onClick={() => setSelectedSign(sign.name.toLowerCase())}
                >
                  <div className="display-6 mb-1">{sign.icon}</div>
                  <div className="fw-bold small">{sign.name}</div>
                  <div className="small opacity-75" style={{fontSize: '0.7rem'}}>{sign.dates}</div>
                </button>
              </div>
            ))}
          </div>

          {/* Horoscope Content */}
          <div className="row justify-content-center" data-aos="fade-up">
            <div className="col-lg-10">
              <div className="card border-0 shadow-lg" style={{borderRadius: '20px'}}>
                <div 
                  className="card-header text-white text-center p-4"
                  style={{
                    background: `linear-gradient(135deg, ${zodiacSigns.find(s => s.name.toLowerCase() === selectedSign)?.color} 0%, #764ba2 100%)`,
                    borderTopLeftRadius: '20px',
                    borderTopRightRadius: '20px'
                  }}
                >
                  <div className="display-1 mb-2">
                    {zodiacSigns.find(s => s.name.toLowerCase() === selectedSign)?.icon}
                  </div>
                  <h3 className="mb-1 fw-bold text-capitalize">{selectedSign} Daily Horoscope</h3>
                  <p className="mb-0 small opacity-90">{zodiacSigns.find(s => s.name.toLowerCase() === selectedSign)?.dates}</p>
                </div>
                
                <div className="card-body p-4 p-md-5">
                  {/* Love */}
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-heart-fill text-danger me-2 fs-4"></i>
                      <h4 className="mb-0 fw-bold text-purple">Love & Relationships</h4>
                    </div>
                    <p className="text-secondary mb-0">{currentHoroscope.love}</p>
                  </div>

                  <hr className="my-4" />

                  {/* Career */}
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-briefcase-fill text-primary me-2 fs-4"></i>
                      <h4 className="mb-0 fw-bold text-purple">Career & Finance</h4>
                    </div>
                    <p className="text-secondary mb-0">{currentHoroscope.career}</p>
                  </div>

                  <hr className="my-4" />

                  {/* Health */}
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-3">
                      <i className="bi bi-heart-pulse-fill text-success me-2 fs-4"></i>
                      <h4 className="mb-0 fw-bold text-purple">Health & Wellness</h4>
                    </div>
                    <p className="text-secondary mb-0">{currentHoroscope.health}</p>
                  </div>

                  <hr className="my-4" />

                  {/* Lucky Details */}
                  <div>
                    <h4 className="mb-3 fw-bold text-purple">
                      <i className="bi bi-stars me-2"></i>
                      Lucky Elements for Today
                    </h4>
                    <div className="row g-3">
                      <div className="col-md-4">
                        <div className="text-center p-3 rounded" style={{backgroundColor: '#f8f9fa'}}>
                          <i className="bi bi-hash text-purple fs-3 mb-2"></i>
                          <div className="fw-bold text-purple">Lucky Number</div>
                          <div className="fs-4 fw-bold">{currentHoroscope.lucky.number}</div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center p-3 rounded" style={{backgroundColor: '#f8f9fa'}}>
                          <i className="bi bi-palette-fill text-purple fs-3 mb-2"></i>
                          <div className="fw-bold text-purple">Lucky Color</div>
                          <div className="fs-5 fw-bold">{currentHoroscope.lucky.color}</div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="text-center p-3 rounded" style={{backgroundColor: '#f8f9fa'}}>
                          <i className="bi bi-clock-fill text-purple fs-3 mb-2"></i>
                          <div className="fw-bold text-purple">Lucky Time</div>
                          <div className="small fw-bold">{currentHoroscope.lucky.time}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-4 py-md-5 bg-white">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8 px-3" data-aos="fade-up">
              <h2 className="fw-bold mb-3 mb-md-4 text-purple h3 h2-md">Want a Deeper Reading?</h2>
              <p className="lead text-secondary mb-3 mb-md-4 small">
                Get a comprehensive astrological analysis based on your complete birth chart
              </p>
              <div className="d-flex gap-2 gap-md-3 justify-content-center flex-wrap">
                <a href="/enquiry" className="btn btn-md btn-gradient-purple text-white px-4 fw-bold">
                  <i className="bi bi-stars me-2"></i>
                  Get Your Kundali
                </a>
                <a href="/zodiac-signs" className="btn btn-md btn-outline-gradient-purple px-4 fw-bold">
                  <i className="bi bi-circle me-2"></i>
                  Explore Zodiac Signs
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Horoscope;
