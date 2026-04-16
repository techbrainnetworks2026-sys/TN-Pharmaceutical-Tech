import { Link } from 'react-router-dom'
import { products } from '../data/productsData'
import { 
  Beaker, Users, ShieldAlert, Database, CheckCircle, Truck, 
  Pipette, BarChart3, UserCheck, Zap, Settings, Lock, 
  Package, TrendingUp, MessageSquare, Box, Brain, Leaf, 
  Video, Share2, ChevronRight, FlaskConical, Activity, Shield
} from 'lucide-react'
import './Products.css'

const iconMap = {
  Beaker: <Beaker size={20} />,
  Users: <Users size={20} />,
  ShieldAlert: <ShieldAlert size={20} />,
  Database: <Database size={20} />,
  CheckCircle: <CheckCircle size={20} />,
  Truck: <Truck size={20} />,
  Pipette: <Pipette size={20} />,
  BarChart3: <BarChart3 size={20} />,
  UserCheck: <UserCheck size={20} />,
  Zap: <Zap size={20} />,
  Settings: <Settings size={20} />,
  Lock: <Lock size={20} />,
  Package: <Package size={20} />,
  TrendingUp: <TrendingUp size={20} />,
  MessageSquare: <MessageSquare size={20} />,
  Box: <Box size={20} />,
  Brain: <Brain size={20} />,
  Leaf: <Leaf size={20} />,
  Video: <Video size={20} />,
  Share2: <Share2 size={20} />
}

const categoryIcons = {
  'Discovery & Development': '🔬',
  'Clinical & Safety': '🛡️',
  'Operations & Quality': '⚙️',
  'Compliance & Analytics': '📊',
  'Supply & Market': '🚚',
  'Emerging Technologies': '🧬',
}

export default function Products() {
  return (
    <div className="products">
      {/* ── Page Header ── */}
      <section className="page-header">
        <div className="container">
          <div className="header-pill">🧪 20 Specialized Platforms</div>
          <h1>
            Pharmaceutical <span>Solutions</span>
          </h1>
          <p>
            Enterprise-grade software for every stage of the pharmaceutical lifecycle —
            from drug discovery to patient care delivery.
          </p>
          <div className="header-stats">
            <div className="stat-item">
              <strong>20</strong>
              <span>Solutions</span>
            </div>
            <div className="stat-item">
              <strong>5</strong>
              <span>Domains</span>
            </div>
            <div className="stat-item">
              <strong>FDA</strong>
              <span>Compliant Ready</span>
            </div>
            <div className="stat-item">
              <strong>AI</strong>
              <span>Powered</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Products Grid ── */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.slug}`}
                className="product-item"
              >
                {/* Image Area */}
                <div className="product-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                  />
                  <div className="product-image-overlay" />
                  <span className="product-category-badge">{product.category}</span>
                  <div className="product-icon-badge">
                    {iconMap[product.icon]}
                  </div>
                </div>

                {/* Card Body */}
                <div className="product-card-body">
                  <h3>{product.title}</h3>
                  <p className="product-desc">{product.description}</p>

                  <div className="benefits-section">
                    <h4>Core Benefits</h4>
                    <ul className="benefits-list">
                      {product.benefits.slice(0, 3).map((benefit, i) => (
                        <li key={i}>
                          <span className="benefit-check">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="view-details-cta">
                    <span>Explore Solution</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Operational Domains ── */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <span className="section-pill">🏢 Operational Domains</span>
            <h2>Pharma Excellence Framework</h2>
            <p>Our solutions are optimized for specific regulatory and operational requirements across the entire pharma value chain.</p>
          </div>

          <div className="categories-grid">
            {[
              { title: 'Discovery & Development', desc: 'R&D acceleration, molecular modeling, and preclinical process optimization.', count: 3 },
              { title: 'Clinical & Safety', desc: 'Global clinical trial management, pharmacovigilance, and patient monitoring.', count: 4 },
              { title: 'Operations & Quality', desc: 'Manufacturing excellence, electronic batch records, and automated QC/QA.', count: 6 },
              { title: 'Supply & Market', desc: 'Inventory, logistics, and pricing strategy for global distribution.', count: 4 },
              { title: 'Emerging Technologies', desc: 'Blockchain, personalized medicine, and telemedicine platforms.', count: 3 },
            ].map((cat) => (
              <div key={cat.title} className="category-card">
                <div className="category-icon">
                  {categoryIcons[cat.title] || '💡'}
                </div>
                <h4>{cat.title}</h4>
                <p>{cat.desc}</p>
                <small>{cat.count} Active Solutions</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="products-cta-section">
        <div className="container">
          <h2>
            Ready to Transform <span>Your Operations?</span>
          </h2>
          <p>
            Schedule a technical demo to see our platforms in action — tailored to your team's specific regulatory and pipeline needs.
          </p>
          <Link to="/contact" className="btn-cta-gold">
            Request Technical Consultation
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
