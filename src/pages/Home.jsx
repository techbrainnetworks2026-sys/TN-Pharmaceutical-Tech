import { Link } from 'react-router-dom'
import {
  Zap,
  Cloud,
  Shield,
  BarChart3,
  Beaker,
  Users,
  TrendingUp,
  Code,
  ArrowRight,
} from 'lucide-react'
import {
  LabScientistIllustration,
  DrugMoleculeIllustration,
  HealthcareDataIllustration,
  MedicineBottleIllustration,
  DNAHelixIllustration,
  CloudPharmacyIllustration,
} from '../components/Illustrations'
import './Home.css'

export default function Home() {
  const features = [
    {
      icon: <Zap size={40} />,
      title: 'AI-driven Analytics',
      description:
        'Leverage artificial intelligence to gain deep insights into pharmaceutical data and optimize decision-making.',
    },
    {
      icon: <Cloud size={40} />,
      title: 'Cloud-based Solutions',
      description:
        'Secure, scalable cloud infrastructure designed specifically for pharmaceutical enterprises.',
    },
    {
      icon: <Shield size={40} />,
      title: 'Regulatory Compliance',
      description:
        'Built-in compliance frameworks ensuring adherence to FDA, EMA, and international standards.',
    },
    {
      icon: <BarChart3 size={40} />,
      title: 'End-to-end Support',
      description:
        'Comprehensive coverage from drug discovery to commercialization and beyond.',
    },
  ]

  const featuredProducts = [
    {
      illustration: <DNAHelixIllustration />,
      title: 'Drug Discovery Platform',
      description: 'AI-powered drug discovery acceleration using predictive analytics.',
    },
    {
      illustration: <MedicineBottleIllustration />,
      title: 'Safety Management',
      description: 'Pharmacovigilance and comprehensive drug safety monitoring systems.',
    },
    {
      illustration: <HealthcareDataIllustration />,
      title: 'Clinical Analytics',
      description: 'Advanced analytics for clinical trial management and optimization.',
    },
    {
      illustration: <LabScientistIllustration />,
      title: 'LIMS Solutions',
      description: 'Laboratory information management for seamless operations.',
    },
    {
      illustration: <CloudPharmacyIllustration />,
      title: 'Supply Chain',
      description: 'End-to-end pharmaceutical supply chain optimization.',
    },
    {
      illustration: <DrugMoleculeIllustration />,
      title: 'Market Analytics',
      description: 'Sales and marketing analytics for competitive advantage.',
    },
  ]

  const industries = [
    {
      title: 'Pharmaceuticals',
      description: 'Enterprise-grade solutions for pharmaceutical manufacturers.',
      gradient: 'linear-gradient(135deg, #0055CC 0%, #003D99 100%)',
    },
    {
      title: 'Biotechnology',
      description: 'Innovative tools for biotech research and development.',
      gradient: 'linear-gradient(135deg, #28A745 0%, #1F8A3D 100%)',
    },
    {
      title: 'Healthcare',
      description: 'Integrated systems for healthcare providers and organizations.',
      gradient: 'linear-gradient(135deg, #FF6B35 0%, #E85C2B 100%)',
    },
    {
      title: 'Research Organizations',
      description: 'Advanced tools for clinical and academic research.',
      gradient: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)',
    },
  ]

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title slide-in-left">
              Transforming Pharmaceutical Innovation with Advanced Technology
            </h1>
            <p className="hero-subtitle slide-in-right">
              Delivering AI-powered, secure, and scalable solutions across the
              pharmaceutical lifecycle.
            </p>
            <div className="hero-buttons fade-in">
              <Link to="/contact" className="btn btn-primary">
                Get Started
              </Link>
              <Link to="/products" className="btn btn-outline">
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section-padding">
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Why Choose Techbrain Networks</h2>
            <p>
              Industry-leading solutions trusted by pharmaceutical enterprises worldwide
            </p>
          </div>

          <div className="grid grid-4">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card fade-in">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products section-padding" style={{ 
        backgroundColor: 'var(--light-bg)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='pharmaGrid' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cg opacity='0.04'%3E%3Ccircle cx='30' cy='30' r='2' fill='%230055CC'/%3E%3Ccircle cx='70' cy='30' r='2' fill='%2328A745'/%3E%3Ccircle cx='50' cy='60' r='2' fill='%23FF6B35'/%3E%3Cline x1='30' y1='30' x2='70' y2='30' stroke='%230055CC' stroke-width='0.5'/%3E%3Cline x1='30' y1='30' x2='50' y2='60' stroke='%230055CC' stroke-width='0.5'/%3E%3Cline x1='70' y1='30' x2='50' y2='60' stroke='%230055CC' stroke-width='0.5'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23pharmaGrid)'/%3E%3C/svg%3E")`,
        backgroundAttachment: 'fixed'
      }}>
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Featured Products</h2>
            <p>
              Cutting-edge solutions designed for modern pharmaceutical challenges
            </p>
          </div>

          <div className="grid grid-3">
            {featuredProducts.map((product, index) => (
              <div key={index} className="product-card card fade-in">
                <div className="product-illustration">
                  {product.illustration}
                </div>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <Link to="/products" className="learn-more">
                  Learn More <ArrowRight size={14} style={{ display: 'inline', marginLeft: '4px' }} />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/products" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries section-padding">
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Industries We Serve</h2>
            <p>
              Customized solutions for diverse pharmaceutical and healthcare sectors
            </p>
          </div>

          <div className="grid grid-2">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="industry-card fade-in"
                style={{
                  background: industry.gradient,
                  padding: '2.5rem',
                  borderRadius: 'var(--border-radius)',
                  color: 'white',
                  textAlign: 'center',
                  transition: 'var(--transition)',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-8px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <h3 style={{ marginBottom: '0.5rem' }}>{industry.title}</h3>
                <p style={{ fontSize: '0.95rem', opacity: 0.95 }}>
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="cta section-padding"
        style={{
          background: 'linear-gradient(135deg, #0055CC 0%, #003D99 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2 style={{ marginBottom: '1rem', color: 'white' }}>Ready to Transform Your Operations?</h2>
          <p style={{ marginBottom: '2rem', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem', color: 'rgba(255, 255, 255, 0.95)' }}>
            Join leading pharmaceutical companies using our innovative solutions.
          </p>
          <Link to="/contact" className="btn" style={{ backgroundColor: 'white', color: '#0055CC' }}>
            Start Your Journey Today
          </Link>
        </div>
      </section>
    </div>
  )
}
