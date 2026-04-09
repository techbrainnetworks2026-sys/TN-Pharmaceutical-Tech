import { Briefcase, Users, Heart, TrendingUp } from 'lucide-react'
import './Careers.css'

export default function Careers() {
  const benefits = [
    {
      icon: <Briefcase size={40} />,
      title: 'Innovative Work Culture',
      description: 'Work on cutting-edge pharmaceutical technology challenges with a talented team.',
    },
    {
      icon: <TrendingUp size={40} />,
      title: 'Growth Opportunities',
      description:
        'Career advancement, continuous learning, and professional development programs.',
    },
    {
      icon: <Heart size={40} />,
      title: 'Comprehensive Benefits',
      description:
        'Competitive salary, health insurance, retirement plans, and wellness programs.',
    },
    {
      icon: <Users size={40} />,
      title: 'Collaborative Environment',
      description:
        'Work with diverse, talented professionals in a supportive and inclusive workplace.',
    },
  ]

  const jobRoles = [
    {
      title: 'Software Developer',
      level: 'Intermediate - Senior',
      location: 'Remote / On-site',
      description:
        'Develop and maintain pharmaceutical software solutions using modern technologies.',
      requirements: [
        '3+ years of software development experience',
        'Proficiency in React, Node.js, or Python',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving skills',
      ],
      salary: '$80K - $130K',
    },
    {
      title: 'Data Analyst',
      level: 'Intermediate',
      location: 'Remote / On-site',
      description: 'Analyze pharmaceutical data to provide actionable business insights.',
      requirements: [
        '2+ years of data analysis experience',
        'Proficiency in Python, SQL, and Tableau/PowerBI',
        'Strong statistical knowledge',
        'Experience with healthcare data preferred',
      ],
      salary: '$70K - $110K',
    },
    {
      title: 'UI/UX Designer',
      level: 'Intermediate - Senior',
      location: 'Remote / On-site',
      description:
        'Design intuitive and compliant user interfaces for healthcare platforms.',
      requirements: [
        '3+ years of UI/UX design experience',
        'Proficiency in Figma, Adobe XD, or Sketch',
        'Understanding of healthcare compliance (HIPAA, WCAG)',
        'Portfolio of healthcare projects',
      ],
      salary: '$75K - $125K',
    },
    {
      title: 'Pharma Specialist',
      level: 'Intermediate - Senior',
      location: 'Hybrid / On-site',
      description:
        'Provide pharmaceutical domain expertise for software development and consulting.',
      requirements: [
        '5+ years of pharmaceutical industry experience',
        'Knowledge of regulatory frameworks (FDA, EMA)',
        'Strong understanding of drug development processes',
        'Experience with clinical trials or manufacturing',
      ],
      salary: '$85K - $135K',
    },
    {
      title: 'Cloud Solutions Architect',
      level: 'Senior',
      location: 'Remote / On-site',
      description: 'Design and implement scalable cloud solutions for pharmaceutical enterprises.',
      requirements: [
        '5+ years of cloud architecture experience',
        'AWS or Azure certification preferred',
        'Experience with healthcare cloud solutions',
        'Strong leadership and communication skills',
      ],
      salary: '$110K - $160K',
    },
    {
      title: 'Quality Assurance Engineer',
      level: 'Intermediate',
      location: 'Remote / On-site',
      description: 'Ensure quality and compliance of pharmaceutical software solutions.',
      requirements: [
        '2+ years of QA experience',
        'Experience with automated testing frameworks',
        'Knowledge of healthcare compliance testing',
        'Strong attention to detail',
      ],
      salary: '$65K - $105K',
    },
  ]

  return (
    <div className="careers">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>Build the future of pharmaceutical technology with us</p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Why Join Techbrain Networks</h2>
            <p>Be part of an innovative team transforming the pharmaceutical industry</p>
          </div>

          <div className="grid grid-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card card fade-in">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Open Positions</h2>
            <p>We're looking for talented professionals to join our team</p>
          </div>

          <div className="jobs-grid">
            {jobRoles.map((job, index) => (
              <div key={index} className="job-card card fade-in">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span className="level">{job.level}</span>
                    <span className="location">{job.location}</span>
                  </div>
                </div>

                <p className="job-description">{job.description}</p>

                <div className="job-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {job.requirements.map((req, i) => (
                      <li key={i}>
                        <span>✓</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="job-footer">
                  <div className="salary">{job.salary}/year</div>
                  <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="culture-content">
            <div className="culture-text">
              <h2>Our Culture</h2>
              <p>
                At Techbrain Networks, we believe that our greatest asset is our people. We foster
                an innovative, inclusive, and collaborative culture where:
              </p>
              <ul className="culture-list">
                <li>Innovation is encouraged and celebrated</li>
                <li>Diversity and inclusion are core values</li>
                <li>Work-life balance is prioritized</li>
                <li>Continuous learning is supported</li>
                <li>Contributions are recognized and rewarded</li>
                <li>Teams collaborate across departments</li>
              </ul>
            </div>
            <div className="culture-image">
              <div
                className="placeholder-image"
                style={{
                  background: 'linear-gradient(135deg, #2ECC71 0%, #0A66C2 100%)',
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
                Team Collaboration
              </div>
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
            Don't See the Right Position?
          </h2>
          <p style={{ marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.95)', fontSize: '1.05rem' }}>
            Send us your resume and let's explore potential opportunities together.
          </p>
          <a href="mailto:careers@techbrainnetworks.com" className="btn" style={{ backgroundColor: 'white', color: '#0A66C2' }}>
            Send Your Resume
          </a>
        </div>
      </section>
    </div>
  )
}
