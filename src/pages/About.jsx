import { Check, Target, Eye, Lightbulb } from 'lucide-react'
import './About.css'

export default function About() {
  const values = [
    {
      icon: <Lightbulb size={32} />,
      title: 'Innovation',
      description: 'Our passion for research and development fuels our relentless pursuit of elegant solutions to complex challenges.',
    },
    {
      icon: <Target size={32} />,
      title: 'Excellence',
      description: 'Every product and service reflects our commitment to innovation and excellence in every aspect.',
    },
    {
      icon: <Check size={32} />,
      title: 'Integrity',
      description: 'Operating with transparency and ethical business practices across all our operations.',
    },
    {
      icon: <Eye size={32} />,
      title: 'Accessibility',
      description: 'Making advanced technology accessible to all, creating global impact and shaping a brighter future.',
    },
  ]

  const achievements = [
    { number: '480+', label: 'Innovative Products' },
    { number: '24', label: 'Industries Served' },
    { number: '30', label: 'Target Countries' },
    { number: '2027+', label: 'Global Expansion' },
  ]

  return (
    <div className="about">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Techbrain Networks</h1>
          <p>Revolutionizing Technology Innovation Across Global Industries</p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <h2>Who We Are</h2>
              <p>
                Techbrain Networks is a leading Software Product Development company that specializes in <strong>AI, IoT, Big Data, Blockchain, Cloud Computing, Quantum Computing, and Digital Marketing</strong>.
              </p>
              <p>
                We are revolutionizing the future of technology with <strong>480 innovative products</strong> spanning <strong>24 industries</strong>. Starting in 2027, our solutions will reach <strong>30 countries</strong>, transforming industries and improving lives. Our mission is to make advanced technology accessible to all, creating a global impact and shaping a brighter future.
              </p>
              <p>
                Our solutions are always tailored to your needs - both in terms of budget and scope. Whether you are in education, finance, transportation, retail, healthcare, or any other sector, we have a solution for you.
              </p>
            </div>
            <div className="overview-image">
              <div
                className="placeholder-image"
                style={{
                  background: 'linear-gradient(135deg, #0055CC 0%, #7C3AED 100%)',
                  borderRadius: 'var(--border-radius)',
                  height: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                }}
              >
                Technology Innovation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Passion */}
      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Our Values & Vision</h2>
          </div>
          <div className="mission-vision">
            <div className="mission-card card fade-in">
              <h3>🎯 Our Mission</h3>
              <p>
                We are dedicated to empowering businesses and individuals globally with cutting-edge technology solutions that drive innovation, efficiency, and sustainability. Our commitment is to deliver reliable, scalable, and secure products across diverse industries, enabling our clients to excel in a rapidly evolving digital landscape.
              </p>
            </div>
            <div className="mission-card card fade-in">
              <h3>🌟 Our Vision</h3>
              <p>
                We aspire to be a global leader in technology innovation, setting new benchmarks for excellence. Our goal is to create a future where technology elevates the quality of life, fosters sustainability, and drives growth and collaboration on a global scale, shaping a smarter, more connected world.
              </p>
            </div>
            <div className="mission-card card fade-in">
              <h3>❤️ Our Passion</h3>
              <p>
                Our passion for research and development fuels our relentless pursuit of elegant solutions to complex challenges. We push the boundaries of what's possible to inspire the future of technology and build a world where possibilities are limitless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Our Core Values</h2>
            <p>Principles that drive everything we do</p>
          </div>
          <div className="grid grid-4">
            {values.map((value, index) => (
              <div key={index} className="value-card fade-in">
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section
        className="section-padding"
        style={{
          background: 'linear-gradient(135deg, #0055CC 0%, #003D99 100%)',
          color: 'white',
        }}
      >
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2 style={{ color: 'white' }}>Our Impact</h2>
          </div>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-item text-center">
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Meet Our Founder</h2>
            <p>Visionary leadership driving innovation</p>
          </div>
          <div className="founder-section">
            <div className="founder-card">
              <div
                className="founder-image"
                style={{
                  background: 'linear-gradient(135deg, #0055CC 0%, #28A745 100%)',
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '2rem',
                }}
              >
                RA
              </div>
              <h3 style={{ textAlign: 'center' }}>Ramkumar Arunachalam</h3>
              <p style={{ textAlign: 'center', color: '#0055CC', fontWeight: 600, marginBottom: '1rem' }}>
                Founder of Techbrain Networks
              </p>
              <p style={{ textAlign: 'center', color: '#666' }}>
                Visionary entrepreneur dedicated to transforming businesses through cutting-edge technology solutions and fostering global innovation across 24+ industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section 
        className="section-padding" 
        style={{ 
          backgroundColor: '#f8f9fa',
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'techPattern\' x=\'0\' y=\'0\' width=\'200\' height=\'200\' patternUnits=\'userSpaceOnUse\'%3E%3Cg opacity=\'0.03\'%3E%3C!-- Gear/Cog --%3E%3Ccircle cx=\'50\' cy=\'50\' r=\'20\' fill=\'none\' stroke=\'%230055CC\' stroke-width=\'1.5\'/%3E%3Crect x=\'48\' y=\'20\' width=\'4\' height=\'10\' fill=\'%230055CC\'/%3E%3Crect x=\'48\' y=\'70\' width=\'4\' height=\'10\' fill=\'%230055CC\'/%3E%3Crect x=\'20\' y=\'48\' width=\'10\' height=\'4\' fill=\'%230055CC\'/%3E%3Crect x=\'70\' y=\'48\' width=\'10\' height=\'4\' fill=\'%230055CC\'/%3E%3C!-- Network Nodes --%3E%3Ccircle cx=\'130\' cy=\'60\' r=\'3\' fill=\'%2328A745\'/%3E%3Ccircle cx=\'160\' cy=\'80\' r=\'3\' fill=\'%2328A745\'/%3E%3Ccircle cx=\'150\' cy=\'110\' r=\'3\' fill=\'%2328A745\'/%3E%3Cline x1=\'130\' y1=\'60\' x2=\'160\' y2=\'80\' stroke=\'%2328A745\' stroke-width=\'1\' opacity=\'0.5\'/%3E%3Cline x1=\'160\' y1=\'80\' x2=\'150\' y2=\'110\' stroke=\'%2328A745\' stroke-width=\'1\' opacity=\'0.5\'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23techPattern)\'/%3E%3C/svg%3E")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Why Partner With Techbrain Networks</h2>
            <p>Proven expertise and commitment to excellence across global markets</p>
          </div>
          <div className="why-us-grid">
            <div className="why-us-item card fade-in">
              <div className="why-us-number">01</div>
              <h4>Comprehensive Solutions</h4>
              <p>
                480+ innovative products across AI, IoT, Big Data, Blockchain, Cloud Computing, and Quantum Computing serving diverse needs.
              </p>
            </div>
            <div className="why-us-item card fade-in">
              <div className="why-us-number">02</div>
              <h4>Industry Coverage</h4>
              <p>
                Solutions tailored for 24 industries including Aerospace, Automotive, Healthcare, Finance, Education, and more.
              </p>
            </div>
            <div className="why-us-item card fade-in">
              <div className="why-us-number">03</div>
              <h4>Global Presence</h4>
              <p>
                Offices in India (Thanjavur) and United Kingdom (London), with expansion to 30 countries starting 2027.
              </p>
            </div>
            <div className="why-us-item card fade-in">
              <div className="why-us-number">04</div>
              <h4>Customized Services</h4>
              <p>
                Software Development, Hardware Engineering, Product Design, and Research & Development tailored to your specific needs.
              </p>
            </div>
            <div className="why-us-item card fade-in">
              <div className="why-us-number">05</div>
              <h4>Innovation-Driven</h4>
              <p>
                Passionate about R&D, pushing boundaries to deliver elegant solutions to complex challenges in the digital age.
              </p>
            </div>
            <div className="why-us-item card fade-in">
              <div className="why-us-number">06</div>
              <h4>Flexible Solutions</h4>
              <p>
                We develop both large and small projects with solutions tailored to your budget and scope requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
