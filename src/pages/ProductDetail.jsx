import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/productsData';
import { 
  Beaker, Users, ShieldAlert, Database, CheckCircle, Truck, 
  Pipette, BarChart3, UserCheck, Zap, Settings, Lock, 
  Package, TrendingUp, MessageSquare, Box, Brain, Leaf, 
  Video, Share2, ArrowLeft, ChevronRight, Mail, MapPin
} from 'lucide-react';
import './ProductDetail.css';

const iconMap = {
  Beaker: <Beaker size={24} />,
  Users: <Users size={24} />,
  ShieldAlert: <ShieldAlert size={24} />,
  Database: <Database size={24} />,
  CheckCircle: <CheckCircle size={24} />,
  Truck: <Truck size={24} />,
  Pipette: <Pipette size={24} />,
  BarChart3: <BarChart3 size={24} />,
  UserCheck: <UserCheck size={24} />,
  Zap: <Zap size={24} />,
  Settings: <Settings size={24} />,
  Lock: <Lock size={24} />,
  Package: <Package size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  MessageSquare: <MessageSquare size={24} />,
  Box: <Box size={24} />,
  Brain: <Brain size={24} />,
  Leaf: <Leaf size={24} />,
  Video: <Video size={24} />,
  Share2: <Share2 size={24} />
};

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <Link to="/products" className="btn btn-primary">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      {/* Hero Section */}
      <section className="product-detail-hero" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${product.image})` }}>
        <div className="container">
          <Link to="/products" className="back-link">
            <ArrowLeft size={18} /> Back to Products
          </Link>
          <div className="hero-content">
            <span className="category-pill">{product.category}</span>
            <h1>{product.title}</h1>
            <p className="lead">{product.description}</p>
          </div>
        </div>
      </section>

      <div className="container product-detail-layout">
        <main className="product-main-content">
          {/* Overview */}
          <section className="detail-section">
            <div className="section-title">
              <span className="marker"></span>
              <h2>Overview</h2>
            </div>
            <p className="overview-text">{product.fullDescription}</p>
          </section>

          {/* Features */}
          <section className="detail-section">
            <div className="section-title">
              <span className="marker"></span>
              <h2>Key Features</h2>
            </div>
            <div className="features-grid">
              {product.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-check">
                    <CheckCircle size={20} className="text-primary" />
                  </div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How it Works */}
          <section className="detail-section highlight-card">
            <div className="section-title">
              <span className="marker"></span>
              <h2>How It Works</h2>
            </div>
            <p>{product.howItWorks}</p>
          </section>

          {/* Benefits */}
          <section className="detail-section">
            <div className="section-title">
              <span className="marker"></span>
              <h2>Business Benefits</h2>
            </div>
            <div className="benefits-list">
              {product.benefits.map((benefit, index) => (
                <div key={index} className="benefit-row">
                  <div className="benefit-number">0{index + 1}</div>
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Future Section */}
          <section className="detail-section future-vision">
            <div className="section-title">
              <span className="marker"></span>
              <h2>Future Roadmap</h2>
            </div>
            <div className="vision-content">
              <Brain size={40} className="vision-icon" />
              <p>{product.future}</p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="detail-section contact-info-card">
            <div className="section-title">
              <span className="marker"></span>
              <h2>Inquire About This Solution</h2>
            </div>
            <div className="contact-grid">
              <div className="contact-method">
                <Mail size={24} className="text-primary" />
                <div>
                  <h4>Email Us</h4>
                  <p>contact@techbrainnetworks.com</p>
                </div>
              </div>
              <div className="contact-method">
                <MapPin size={24} className="text-primary" />
                <div>
                  <h4>Global Presence</h4>
                  <p>India | United Kingdom</p>
                </div>
              </div>
            </div>
            <button className="btn btn-hero mt-4" onClick={() => navigate('/contact')}>Schedule a Technical Demo</button>
          </section>
        </main>

        <aside className="product-sidebar">
          <div className="sidebar-card">
            <h3>Our Products</h3>
            <div className="sidebar-product-list">
              {products.map((p) => (
                <Link 
                  key={p.id} 
                  to={`/product/${p.slug}`} 
                  className={`sidebar-product-item ${p.slug === slug ? 'active' : ''}`}
                >
                  <div className="sidebar-icon">
                    {iconMap[p.icon]}
                  </div>
                  <span className="sidebar-title">{p.title}</span>
                  <ChevronRight size={16} className="sidebar-arrow" />
                </Link>
              ))}
            </div>
          </div>

          <div className="sidebar-card promo-card">
            <h4>Transforming Pharmaceuticals</h4>
            <p>Our integrated suite of solutions covers the entire drug lifecycle from discovery to delivery.</p>
            <Link to="/about" className="btn btn-outline btn-sm">Learn About TechBrain</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
