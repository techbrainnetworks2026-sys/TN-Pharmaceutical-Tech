import { Link } from 'react-router-dom'
import { Mail, Phone, ArrowRight } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* About Section */}
            <div className="footer-section">
              <div className="footer-logo">
                <span className="logo-text">TECHBRAIN</span>
                <span className="logo-subtext">NETWORKS</span>
              </div>
              <p className="footer-desc">
                Transforming the pharmaceutical industry with innovative technology solutions.
              </p>
              <div className="footer-contact">
                <div className="contact-item">
                  <Mail size={20} />
                  <span>info@techbrainnetworks.com</span>
                </div>
                <div className="contact-item">
                  <Phone size={20} />
                  <span>+91-XXXXXXXXXX</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Industries */}
            <div className="footer-section">
              <h4 className="footer-title">Industries</h4>
              <ul className="footer-links">
                <li><a href="#/">Pharmaceuticals</a></li>
                <li><a href="#/">Biotechnology</a></li>
                <li><a href="#/">Healthcare</a></li>
                <li><a href="#/">Research Organizations</a></li>
              </ul>
            </div>

            {/* Compliance & Legal */}
            <div className="footer-section">
              <h4 className="footer-title">Legal</h4>
              <ul className="footer-links">
                <li><a href="#/">Privacy Policy</a></li>
                <li><a href="#/">Terms & Conditions</a></li>
                <li><a href="#/">Cookie Policy</a></li>
                <li><a href="#/">Disclaimer</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="footer-divider"></div>

          {/* Bottom Section */}
          <div className="footer-bottom">
            <p className="copyright">
              &copy; {currentYear} Techbrain Networks. All Rights Reserved.
            </p>
            <div className="social-links">
              <a href="#/" className="social-link" aria-label="LinkedIn">
                <span>LinkedIn</span>
              </a>
              <a href="#/" className="social-link" aria-label="Twitter">
                <span>Twitter</span>
              </a>
              <a href="#/" className="social-link" aria-label="Facebook">
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
