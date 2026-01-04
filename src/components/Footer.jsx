import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer mt-auto py-5 bg-dark text-light">
      <div className="container">
        <div className="row g-4">
          {/* About Section */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3" style={{color: '#4facfe'}}>Astrology Predictions</h5>
            <p className="text-white-50 mb-3">
              Your trusted source for accurate astrological insights and personalized cosmic guidance. 
              Bridging ancient wisdom with modern technology.
            </p>
            <div className="d-flex gap-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-social-facebook rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-facebook fs-5 text-white"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="btn btn-social-twitter rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-twitter fs-5 text-white"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-social-instagram rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-instagram fs-5 text-white"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-social-linkedin rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-linkedin fs-5 text-white"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-social-youtube rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-youtube fs-5 text-white"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3" style={{color: '#4facfe'}}>Contact Information</h5>
            <div className="d-flex align-items-start mb-3">
              <i className="bi bi-geo-alt-fill me-2 mt-1" style={{color: '#4facfe'}}></i>
              <div>
                <p className="mb-0 text-white">123 vinayaka Street</p>
                <p className="mb-0 text-white-50">near City,12345</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-telephone-fill me-2" style={{color: '#4facfe'}}></i>
              <a href="tel:+1234567890" className="text-white text-decoration-none">+1 (234) 567-890</a>
            </div>
            <div className="d-flex align-items-center mb-3">
              <i className="bi bi-envelope-fill me-2" style={{color: '#4facfe'}}></i>
              <a href="mailto:info@astropredictions.com" className="text-white text-decoration-none">info@astropredictions.com</a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="col-lg-4 col-md-6">
            <h5 className="fw-bold mb-3" style={{color: '#4facfe'}}>Working Hours</h5>
            <div className="mb-2">
              <div className="d-flex justify-content-between mb-2">
                <span className="text-white">Monday - Friday:</span>
                <span className="text-white-50">9:00 AM - 8:00 PM</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-white">Saturday:</span>
                <span className="text-white-50">10:00 AM - 6:00 PM</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-white">Sunday:</span>
                <span className="text-white-50">12:00 PM - 5:00 PM</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-white-50 small mb-2">
                <i className="bi bi-info-circle me-2" style={{color: '#4facfe'}}></i>
                Available for emergency consultations 24/7
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="my-4 border-secondary opacity-25" />
        <div className="row">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <span className="text-white-50">&copy; {new Date().getFullYear()} Astrology Predictions. All rights reserved.</span>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="/privacy" className="text-white-50 text-decoration-none me-3 hover-link">Privacy Policy</a>
            <a href="/terms" className="text-white-50 text-decoration-none me-3 hover-link">Terms of Service</a>
            <a href="/sitemap" className="text-white-50 text-decoration-none hover-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
