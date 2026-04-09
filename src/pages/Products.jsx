import { Beaker, ShieldAlert, Users, Database, CheckCircle, Truck, Pipette, BarChart3, UserCheck, Zap, Settings, Lock, Package, TrendingUp, MessageSquare, Box, Brain, Leaf, Video, Share2 } from 'lucide-react'
import './Products.css'

export default function Products() {
  const products = [
    {
      icon: <Beaker size={40} />,
      title: 'Drug Discovery and Development Platform',
      description: 'Accelerates drug research using AI and predictive analytics.',
      intro:
        'Welcome to the future of Pharmaceuticals: with our Drug Discovery and Development Platform, explore a suite of tools designed to revolutionize drug discovery, enhance development practices, and accelerate the journey from lab to market.',
      features: [
        'Target identification and validation via advanced bioinformatics and machine learning',
        'High-throughput screening for rapid candidate selection',
        'Molecular modeling and simulation for compound interaction insight',
        'Lead optimization using SAR analysis and medicinal chemistry',
        'Comprehensive preclinical testing support including in vitro and in vivo studies',
      ],
      howItWorks:
        'Our platform empowers researchers with cutting-edge tools and real-time data, enabling informed decisions, streamlined workflows, and accelerated drug development lifecycle execution.',
      benefits: [
        'Reduced time-to-market for new drugs',
        'Increased drug development success rates',
        'Enhanced collaboration across research teams',
        'Cost-effective drug discovery processes',
        'Improved accuracy and reliability of results',
      ],
      industries:
        'Critical for pharmaceutical companies, biotech firms, and research institutions aiming to innovate and expedite the drug discovery and development pipeline.',
      future:
        'Stay informed about upcoming features and innovations in pharmaceutical technology integration, AI, and translational research.',
      integration:
        'Seamless integration with bioinformatics tools, laboratory equipment, and data management systems for a complete drug discovery ecosystem.',
      training:
        'Access training resources and dedicated support for effective implementation and optimal platform utilization.',
      compliance:
        'Designed to align with industry standards and regulatory requirements for drug discovery and development.',
      extraContact:
        'Contact us: contact@techbrainnetworks.com; Offices in India and United Kingdom.',
      image: 'Molecular modeling / AI drug simulation dashboard',
    },
    {
      icon: <Users size={40} />,
      title: 'Clinical Trial Management Software',
      description: 'Comprehensive solution for managing clinical trials efficiently.',
      benefits: [
        'Enhanced patient recruitment',
        'Real-time monitoring and compliance',
        'Streamlined data collection',
      ],
      image: 'Clinical trial coordination dashboard',
    },
    {
      icon: <ShieldAlert size={40} />,
      title: 'Pharmacovigilance and Drug Safety Systems',
      description: 'Monitor and manage drug safety throughout its lifecycle.',
      benefits: [
        'Adverse event tracking',
        'Risk minimization strategies',
        'Regulatory compliance assurance',
      ],
      image: 'Drug safety monitoring analytics',
    },
    {
      icon: <Database size={40} />,
      title: 'Laboratory Information Management System (LIMS)',
      description: 'Enterprise LIMS for laboratory operations and quality control.',
      benefits: [
        'Sample tracking and management',
        'Results management and reporting',
        'QA/QC automation',
      ],
      image: 'Laboratory workflow management',
    },
    {
      icon: <CheckCircle size={40} />,
      title: 'Regulatory Compliance and Submission Management Software',
      description: 'Streamline regulatory submissions and compliance processes.',
      benefits: [
        'Automated compliance checks',
        'Document management',
        'Regulatory tracking and reminders',
      ],
      image: 'Regulatory compliance dashboard',
    },
    {
      icon: <Truck size={40} />,
      title: 'Pharmaceutical Supply Chain Management Solutions',
      description: 'End-to-end supply chain visibility and optimization.',
      benefits: [
        'Real-time demand forecasting',
        'Logistics optimization',
        'Cost reduction and efficiency',
      ],
      image: 'Supply chain tracking network',
    },
    {
      icon: <Pipette size={40} />,
      title: 'Drug Formulation and Manufacturing Process Optimization Software',
      description: 'Optimize manufacturing processes and product formulations.',
      benefits: [
        'Process efficiency improvement',
        'Quality consistency enhancement',
        'Cost optimization',
      ],
      image: 'Manufacturing process optimization',
    },
    {
      icon: <BarChart3 size={40} />,
      title: 'Pharmaceutical Sales and Marketing Analytics Platform',
      description: 'Data-driven insights for sales and marketing campaigns.',
      benefits: [
        'Market intelligence and trends',
        'Sales performance analytics',
        'Campaign ROI tracking',
      ],
      image: 'Sales and marketing analytics',
    },
    {
      icon: <UserCheck size={40} />,
      title: 'Patient Recruitment and Retention Solutions for Clinical Trials',
      description: 'Optimize patient recruitment and retention strategies.',
      benefits: [
        'Targeted patient recruitment',
        'Engagement management',
        'Retention optimization',
      ],
      image: 'Patient recruitment platform',
    },
    {
      icon: <Zap size={40} />,
      title: 'Electronic Batch Record (EBR) Management Software',
      description: 'Digital batch record management for manufacturing.',
      benefits: [
        'Paperless operations',
        'Real-time batch tracking',
        'Compliance documentation',
      ],
      image: 'Electronic batch record system',
    },
    {
      icon: <Settings size={40} />,
      title: 'Pharmaceutical Quality Control and Assurance Systems',
      description: 'Comprehensive QC/QA management and testing automation.',
      benefits: [
        'Automated testing protocols',
        'Quality assurance dashboards',
        'Defect tracking and resolution',
      ],
      image: 'Quality control testing lab',
    },
    {
      icon: <Lock size={40} />,
      title: 'Blockchain-based Drug Traceability and Authentication Solutions',
      description: 'Secure drug traceability and counterfeit prevention.',
      benefits: [
        'Immutable drug traceability',
        'Counterfeit detection',
        'Supply chain transparency',
      ],
      image: 'Blockchain authentication system',
    },
    {
      icon: <Package size={40} />,
      title: 'Pharmaceutical Inventory Management Software',
      description: 'Real-time inventory tracking and optimization.',
      benefits: [
        'Automated inventory updates',
        'Stock level optimization',
        'Waste reduction',
      ],
      image: 'Inventory management dashboard',
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Pharmaceutical Pricing and Market Access Tools',
      description: 'Strategic pricing and market access optimization.',
      benefits: [
        'Competitive pricing analysis',
        'Market access strategy',
        'Revenue optimization',
      ],
      image: 'Pricing and market analytics',
    },
    {
      icon: <MessageSquare size={40} />,
      title: 'Pharmaceutical Customer Relationship Management (CRM) Software',
      description: 'CRM specialized for pharmaceutical stakeholder management.',
      benefits: [
        'Stakeholder relationship management',
        'Communication tracking',
        'Sales pipeline management',
      ],
      image: 'CRM stakeholder platform',
    },
    {
      icon: <Box size={40} />,
      title: 'Pharmaceutical Packaging Design and Optimization Tools',
      description: 'Advanced tools for packaging design and optimization.',
      benefits: [
        'Design automation',
        'Compliance validation',
        'Cost reduction',
      ],
      image: 'Packaging design system',
    },
    {
      icon: <Brain size={40} />,
      title: 'Personalized Medicine Decision Support Systems',
      description: 'AI-powered decision support for personalized medicine.',
      benefits: [
        'Treatment recommendations',
        'Genetic analysis integration',
        'Precision medicine optimization',
      ],
      image: 'Personalized medicine AI',
    },
    {
      icon: <Leaf size={40} />,
      title: 'Pharmaceutical Waste Management and Sustainability Software',
      description: 'Environmental compliance and waste management solutions.',
      benefits: [
        'Waste tracking and reporting',
        'Sustainability metrics',
        'Regulatory compliance',
      ],
      image: 'Sustainability management system',
    },
    {
      icon: <Video size={40} />,
      title: 'Telemedicine Platforms for Remote Patient Consultations',
      description: 'Secure telemedicine platform for patient consultations.',
      benefits: [
        'Secure video consultations',
        'Patient data integration',
        'Prescription management',
      ],
      image: 'Telemedicine consultation interface',
    },
    {
      icon: <Share2 size={40} />,
      title: 'Pharmaceutical Knowledge Management and Collaboration Platforms',
      description: 'Knowledge sharing and collaboration platform for teams.',
      benefits: [
        'Document management',
        'Team collaboration tools',
        'Knowledge repository',
      ],
      image: 'Knowledge collaboration platform',
    },
  ]

  return (
    <div className="products">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>Complete pharmaceutical technology solutions</p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container">
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-item card fade-in">
                <div className="product-header">
                  <div className="product-icon-large">{product.icon}</div>
                  <h3>{product.title}</h3>
                </div>

                <p className="product-desc">{product.description}</p>

                <div className="benefits-section">
                  <h4>Key Benefits</h4>
                  <ul className="benefits-list">
                    {product.benefits.map((benefit, i) => (
                      <li key={i}>
                        <span className="benefit-check">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="image-idea">
                  <small>Image Idea: {product.image}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drug Discovery & Development Platform Detailed Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Drug Discovery and Development Platform</h2>
            <p>
              Welcome to the future of Pharmaceuticals: with our Drug Discovery and Development Platform. Explore a suite of tools designed to revolutionize drug discovery, enhance development practices, and accelerate the journey from lab to market.
            </p>
          </div>

          <div className="product-detail card" style={{ padding: '1.8rem', boxShadow: 'var(--shadow-md)' }}>
            <h3>Key Features Unleashed</h3>
            <ul>
              <li>Target Identification and Validation — advanced bioinformatics and machine learning tools for precise target validation</li>
              <li>High-Throughput Screening — rapid candidate identification through high-throughput methods</li>
              <li>Molecular Modeling and Simulation — detailed drug interaction insight via simulation</li>
              <li>Lead Optimization — structure-activity relationship (SAR) analysis and medicinal chemistry workflows</li>
              <li>Preclinical Testing — in vitro and in vivo safety and efficacy pipelines</li>
            </ul>

            <h3>How It Works</h3>
            <p>
              Discover how our platform empowers researchers with cutting-edge tools and real-time data, enabling them to make informed decisions, streamline workflows, and accelerate the drug discovery and development process.
            </p>

            <h3>Benefits</h3>
            <ul>
              <li>Reduced time-to-market for new drugs</li>
              <li>Increased success rates in drug development</li>
              <li>Enhanced collaboration across research teams</li>
              <li>Cost-effective drug discovery processes</li>
              <li>Improved accuracy and reliability of results</li>
            </ul>

            <h3>Industries</h3>
            <p>
              Critical for pharmaceutical companies, biotech firms, and research institutions aiming to innovate and expedite the drug discovery and development pipeline.
            </p>

            <h3>Future Developments and Innovations</h3>
            <p>
              Stay informed about upcoming features and innovations in pharmaceutical technology, AI-powered discovery, and end-to-end lifecycle automation.
            </p>

            <h3>Technology Integration</h3>
            <p>
              Learn how our platform seamlessly integrates with various bioinformatics tools, laboratory equipment, and data management systems, creating a comprehensive drug discovery ecosystem.
            </p>

            <h3>User Training and Support</h3>
            <p>
              Access training resources and our support system for effective implementation and optimal use of the Drug Discovery and Development Platform.
            </p>

            <h3>Industry Standards and Compliance</h3>
            <p>
              Understand how our platform aligns with industry standards and regulatory requirements for drug discovery and development.
            </p>

            <h3>Contact</h3>
            <p>
              Get in touch with us: contact@techbrainnetworks.com | India - Thanjavur | United Kingdom - London.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Product Categories</h2>
            <p>Organized solutions for every aspect of pharmaceutical operations</p>
          </div>

          <div className="categories-grid">
            <div className="category-card card fade-in">
              <h4>Discovery & Development</h4>
              <p>Solutions for drug discovery, formulation, and development acceleration.</p>
              <small>3 Products</small>
            </div>
            <div className="category-card card fade-in">
              <h4>Clinical & Safety</h4>
              <p>Clinical trial management, pharmacovigilance, and patient safety.</p>
              <small>4 Products</small>
            </div>
            <div className="category-card card fade-in">
              <h4>Operations & Quality</h4>
              <p>Manufacturing, quality control, and operational excellence.</p>
              <small>5 Products</small>
            </div>
            <div className="category-card card fade-in">
              <h4>Supply & Market</h4>
              <p>Supply chain, inventory, pricing, and market access optimization.</p>
              <small>4 Products</small>
            </div>
            <div className="category-card card fade-in">
              <h4>Compliance & Analytics</h4>
              <p>Regulatory compliance, analytics, and business intelligence.</p>
              <small>2 Products</small>
            </div>
            <div className="category-card card fade-in">
              <h4>Emerging Technologies</h4>
              <p>Personalized medicine, blockchain, telemedicine, and collaboration.</p>
              <small>2 Products</small>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding"
        style={{
          background: 'linear-gradient(135deg, #0A66C2 0%, #084fa1 100%)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2 style={{ marginBottom: '1rem', color: 'white' }}>
            Ready to Transform Your Operations?
          </h2>
          <p style={{ marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.05rem' }}>
            Schedule a demo to see how our products can benefit your organization.
          </p>
          <a href="#contact" className="btn" style={{ backgroundColor: 'white', color: '#0A66C2' }}>
            Schedule a Demo
          </a>
        </div>
      </section>
    </div>
  )
}
