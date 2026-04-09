import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="contact">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with our team</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container">
          <div className="contact-wrapper">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <p>
                Have questions about our products or services? We'd love to hear from you. Reach
                out to our team and we'll respond as quickly as possible.
              </p>

              <div className="contact-details">
                <div className="contact-item fade-in">
                  <div className="contact-icon">
                    <Mail size={32} />
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>info@techbrainnetworks.com</p>
                    <a href="mailto:info@techbrainnetworks.com">Send Email</a>
                  </div>
                </div>

                <div className="contact-item fade-in">
                  <div className="contact-icon">
                    <Phone size={32} />
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+91-XXXXXXXXXX</p>
                    <a href="tel:+91XXXXXXXXXX">Call Now</a>
                  </div>
                </div>

                <div className="contact-item fade-in">
                  <div className="contact-icon">
                    <MapPin size={32} />
                  </div>
                  <div className="contact-text">
                    <h4>Office</h4>
                    <p>Pharmaceutical Technology Hub</p>
                    <a href="#/">View Location</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper fade-in">
              <h2>Send us a Message</h2>
              {submitted && (
                <div className="success-message">
                  <p>✓ Thank you! We've received your message and will get back to you soon.</p>
                </div>
              )}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="info-boxes">
            <div className="info-box card fade-in">
              <h3>Sales Inquiries</h3>
              <p>Interested in our products? Our sales team is ready to help you find the perfect solution.</p>
              <a href="mailto:sales@techbrainnetworks.com" className="learn-more">
                Contact Sales →
              </a>
            </div>
            <div className="info-box card fade-in">
              <h3>Technical Support</h3>
              <p>Need assistance with an existing product? Our technical support team is available 24/7.</p>
              <a href="mailto:support@techbrainnetworks.com" className="learn-more">
                Get Support →
              </a>
            </div>
            <div className="info-box card fade-in">
              <h3>Partnership</h3>
              <p>Looking to partner with us? We're always interested in strategic collaborations.</p>
              <a href="mailto:partnerships@techbrainnetworks.com" className="learn-more">
                Explore Partnerships →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header text-center mb-4">
            <h2>Frequently Asked Questions</h2>
            <p>Quick answers to common questions</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item fade-in">
              <h4>What is your response time?</h4>
              <p>
                We typically respond to inquiries within 24 hours during business days. For urgent matters,
                please call us directly.
              </p>
            </div>
            <div className="faq-item fade-in">
              <h4>Do you offer free consultations?</h4>
              <p>
                Yes! We offer free initial consultations to understand your needs and discuss how we can help.
                Schedule a meeting with our team.
              </p>
            </div>
            <div className="faq-item fade-in">
              <h4>What are your business hours?</h4>
              <p>
                Our team is available Monday to Friday, 9:00 AM - 6:00 PM (EST). Technical support is available
                24/7 for urgent issues.
              </p>
            </div>
            <div className="faq-item fade-in">
              <h4>Do you provide demos?</h4>
              <p>
                Absolutely! We love showing potential clients how our solutions work. Contact us to schedule a
                personalized demo.
              </p>
            </div>
            <div className="faq-item fade-in">
              <h4>Can you customize solutions for us?</h4>
              <p>
                Yes, we specialize in custom pharmaceutical software development. Contact our solutions team to
                discuss your specific requirements.
              </p>
            </div>
            <div className="faq-item fade-in">
              <h4>How do we get started?</h4>
              <p>
                Simply fill out the contact form above, and one of our representatives will reach out to discuss
                your needs and next steps.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
