import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showProducts, setShowProducts] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const products = [
    'Drug Discovery and Development Platform',
    'Clinical Trial Management Software',
    'Pharmacovigilance and Drug Safety Systems',
    'Laboratory Information Management System (LIMS)',
    'Regulatory Compliance and Submission Management Software',
    'Pharmaceutical Supply Chain Management Solutions',
    'Drug Formulation and Manufacturing Process Optimization Software',
    'Pharmaceutical Sales and Marketing Analytics Platform',
    'Patient Recruitment and Retention Solutions for Clinical Trials',
    'Electronic Batch Record (EBR) Management Software',
    'Pharmaceutical Quality Control and Assurance Systems',
    'Blockchain-based Drug Traceability and Authentication Solutions',
    'Pharmaceutical Inventory Management Software',
    'Pharmaceutical Pricing and Market Access Tools',
    'Pharmaceutical Customer Relationship Management (CRM) Software',
    'Pharmaceutical Packaging Design and Optimization Tools',
    'Personalized Medicine Decision Support Systems',
    'Pharmaceutical Waste Management and Sustainability Software',
    'Telemedicine Platforms for Remote Patient Consultations',
    'Pharmaceutical Knowledge Management and Collaboration Platforms',
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <div className="logo-main-row">
            <span className="logo-text">TECHBRAIN</span>
            <span className="logo-divider">|</span>
            <span className="logo-text">NETWORKS</span>
          </div>
          <span className="logo-division">Pharmaceutical</span>
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/services"
              className={`nav-link ${isActive('/services') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
          </li>

          {/* Products Dropdown */}
          <li className="nav-item dropdown">
            <button
              className={`nav-link dropdown-toggle ${isActive('/products') ? 'active' : ''}`}
              onClick={() => setShowProducts(!showProducts)}
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              Products
              <ChevronDown size={16} className={`dropdown-icon ${showProducts ? 'rotate' : ''}`} />
            </button>

            <div
              className={`dropdown-menu ${showProducts ? 'show' : ''}`}
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              {products.map((product, index) => (
                <Link
                  key={index}
                  to="/products"
                  className="dropdown-item"
                  onClick={() => {
                    setIsOpen(false)
                    setShowProducts(false)
                  }}
                >
                  {product}
                </Link>
              ))}
            </div>
          </li>

          <li className="nav-item">
            <Link
              to="/careers"
              className={`nav-link ${isActive('/careers') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
