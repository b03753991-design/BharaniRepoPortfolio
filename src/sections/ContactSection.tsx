import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Github, Linkedin } from '../components/SocialIcons';
import { ScrollReveal } from '../components/ScrollReveal';
import './ContactSection.css';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'bharani7224@gmail.com',
    href: 'mailto:bharani7224@gmail.com',
  },
  {
    icon: <Phone size={20} />,
    label: 'Phone',
    value: '+91 93606 80467',
    href: 'tel:+919360680467',
  },
  {
    icon: <MapPin size={20} />,
    label: 'Location',
    value: 'Tamil Nadu, India',
    href: '#',
  },
];

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Name is required.';
    if (!form.email.trim()) e.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email.';
    if (!form.subject.trim()) e.subject = 'Subject is required.';
    if (!form.message.trim()) e.message = 'Message cannot be empty.';
    else if (form.message.length < 10) e.message = 'At least 10 characters.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors(p => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 6000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <ScrollReveal animation="fade-up" triggerOnce>
          <div className="section-header">
            <h2>Get In <span>Touch</span></h2>
            <div className="section-divider" />
            <p>Have a project in mind or a job opportunity? I'd love to hear from you — let's build something great together.</p>
          </div>
        </ScrollReveal>

        <div className="contact-grid">
          {/* Left: Info */}
          <ScrollReveal animation="fade-right" triggerOnce>
            <div className="contact-info-col">
              <h3 className="contact-info-title">Let's talk 👋</h3>
              <p className="contact-info-text">
                I'm currently available for freelance work, full-time roles, or interesting project collaborations. Don't hesitate to reach out!
              </p>

              <div className="contact-cards">
                {contactInfo.map(({ icon, label, value, href }) => (
                  <a key={label} href={href} className="contact-info-card">
                    <div className="ci-icon">{icon}</div>
                    <div>
                      <span className="ci-label">{label}</span>
                      <span className="ci-value">{value}</span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social links */}
              <div className="contact-socials">
                <a href="https://github.com/bharani" target="_blank" rel="noreferrer" aria-label="GitHub" className="contact-social-btn">
                  <Github size={18} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/bharani-dharan-d-26624a293" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="contact-social-btn linkedin">
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal animation="fade-left" delay={150} triggerOnce>
            <div className="contact-form-card">
              {submitSuccess ? (
                <div className="contact-success">
                  <div className="success-ring">
                    <CheckCircle size={40} />
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. Bharani will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text" id="name" name="name"
                        value={form.name} onChange={handleChange}
                        placeholder="John Doe"
                        className={errors.name ? 'error' : ''}
                        disabled={isSubmitting}
                      />
                      {errors.name && <span className="form-error"><AlertCircle size={12} /> {errors.name}</span>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email" id="email" name="email"
                        value={form.email} onChange={handleChange}
                        placeholder="john@example.com"
                        className={errors.email ? 'error' : ''}
                        disabled={isSubmitting}
                      />
                      {errors.email && <span className="form-error"><AlertCircle size={12} /> {errors.email}</span>}
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text" id="subject" name="subject"
                      value={form.subject} onChange={handleChange}
                      placeholder="Project Collaboration"
                      className={errors.subject ? 'error' : ''}
                      disabled={isSubmitting}
                    />
                    {errors.subject && <span className="form-error"><AlertCircle size={12} /> {errors.subject}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message" name="message"
                      value={form.message} onChange={handleChange}
                      rows={5}
                      placeholder="Hey Bharani, let's collaborate on..."
                      className={errors.message ? 'error' : ''}
                      disabled={isSubmitting}
                    />
                    {errors.message && <span className="form-error"><AlertCircle size={12} /> {errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary btn-send" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={15} />
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
