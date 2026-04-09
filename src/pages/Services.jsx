import { Code, Cloud, BarChart3, CheckCircle, Palette, Link as LinkIcon } from 'lucide-react'
import './Services.css'

export default function Services() {
  const services = [
    {
      icon: <Code size={48} />,
      title: 'Custom Pharmaceutical Software Development',
      description:
        'Bespoke solutions tailored to your unique business requirements and operational workflows.',
      features: [
        'Requirements analysis and system design',
        'Agile development methodology',
        'Quality assurance and testing',
        'Post-launch support and maintenance',
      ],
    },
    {
      icon: <Cloud size={48} />,
      title: 'Cloud Solutions and Integration',
      description:
        'Secure, scalable cloud infrastructure designed specifically for pharmaceutical enterprises.',
      features: [
        'Cloud migration and deployment',
        'System integration services',
        'APIs and middleware solutions',
        'Cloud infrastructure management',
      ],
    },
    {
      icon: <BarChart3 size={48} />,
      title: 'AI and Data Analytics',
      description:
        'Advanced analytics and AI-powered insights to drive data-driven decision making.',
      features: [
        'Predictive analytics models',
        'Data visualization dashboards',
        'Business intelligence solutions',
        'Machine learning integration',
      ],
    },
    {
      icon: <CheckCircle size={48} />,
      title: 'Regulatory Compliance Consulting',
      description:
        'Expert guidance on FDA, EMA, and international regulatory requirements.',
      features: [
        'Compliance audits and assessments',
        'SOPs and documentation development',
        'Regulatory submission support',
        'Ongoing compliance monitoring',
      ],
    },
    {
      icon: <Palette size={48} />,
      title: 'UI/UX Design for Healthcare Platforms',
      description:
        'User-centered design for healthcare applications that prioritize usability and compliance.',
      features: [
        'User research and wireframing',
        'Visual design and prototyping',
        'Usability testing',
        'Accessibility compliance (WCAG, HIPAA)',
      ],
    },
    {
      icon: <LinkIcon size={48} />,
      title: 'System Integration',
      description:
        'Seamless integration of legacy systems with modern pharmaceutical platforms.',
      features: [
        'Legacy system modernization',
        'ERP integration',
        'Data migration services',
        'API development and integration',
      ],
    },
  ]

  return (
    <div className="services">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive solutions for pharmaceutical enterprises</p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card card fade-in">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-features">
                  <h4>Key Offerings:</h4>
                  <ul>
                    {service.features.map((feature, i) => (
                      <li key={i}>
                        <span className="checkmark">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Why Choose Our Services</h2>
            <p>Experience and expertise in pharmaceutical technology</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-item fade-in">
              <div className="benefit-number">01</div>
              <h4>Expert Team</h4>
              <p>
                Our team consists of certified pharmaceutical technology specialists with
                extensive industry experience.
              </p>
            </div>
            <div className="benefit-item fade-in">
              <div className="benefit-number">02</div>
              <h4>Proven Methodology</h4>
              <p>
                We follow industry best practices and proven methodologies to ensure project
                success.
              </p>
            </div>
            <div className="benefit-item fade-in">
              <div className="benefit-number">03</div>
              <h4>Quality Assurance</h4>
              <p>
                Rigorous QA processes and testing protocols to deliver reliable, secure
                solutions.
              </p>
            </div>
            <div className="benefit-item fade-in">
              <div className="benefit-number">04</div>
              <h4>24/7 Support</h4>
              <p>
                Continuous support and maintenance services to ensure your systems run
                smoothly.
              </p>
            </div>
            <div className="benefit-item fade-in">
              <div className="benefit-number">05</div>
              <h4>Cost Effective</h4>
              <p>
                Flexible engagement models and transparent pricing to maximize your ROI.
              </p>
            </div>
            <div className="benefit-item fade-in">
              <div className="benefit-number">06</div>
              <h4>Compliance First</h4>
              <p>
                All services designed with regulatory compliance as a foundational
                requirement.
              </p>
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
            Need a Custom Service Solution?
          </h2>
          <p style={{ marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.05rem' }}>
            Contact our team to discuss your specific requirements and create a tailored solution.
          </p>
          <a href="#contact" className="btn" style={{ backgroundColor: 'white', color: '#0A66C2' }}>
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  )
}
