import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { EducationSection } from './sections/EducationSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { AboutSection } from './sections/AboutSection';
import { ContactSection } from './sections/ContactSection';
import { ParticleNetworkCanvas } from './components/ParticleNetworkCanvas';
import { Mail, Phone, MapPin, ArrowUpRight, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './components/SocialIcons';
import './App.css';

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

const NAV_LINKS = [
  { label: 'Home',      id: 'home' },
  { label: 'Education', id: 'education' },
  { label: 'Projects',  id: 'projects' },
  { label: 'About',     id: 'about' },
  { label: 'Contact',   id: 'contact' },
];

const SOCIALS = [
  { href: 'https://github.com/bharani',                               label: 'GitHub',   icon: <Github size={18} /> },
  { href: 'www.linkedin.com/in/bharani-dharan-d-26624a293',  label: 'LinkedIn', icon: <Linkedin size={18} /> },
  { href: 'mailto:bharani7224@gmail.com',                             label: 'Email',    icon: <Mail size={18} /> },
];

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <ParticleNetworkCanvas />
      <Navbar />
      <main>
        <HeroSection />
        <EducationSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>

      {/* ====== FOOTER ====== */}
      <footer className="site-footer">
        {/* Wave divider */}
        <div className="footer-wave">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#090d16" />
          </svg>
        </div>

        <div className="footer-body">
          <div className="container footer-grid">

            {/* Brand column */}
            <div className="footer-brand-col">
              <div className="footer-logo">
                <div className="footer-logo-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <span className="footer-logo-text">Bharani<span>.dev</span></span>
              </div>
              <p className="footer-tagline">
                Crafting premium digital experiences with clean code and modern design. Available for freelance & full-time roles.
              </p>
              {/* Socials */}
              <div className="footer-socials">
                {SOCIALS.map(({ href, label, icon }) => (
                  <a key={label} href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer" aria-label={label}
                    className="footer-social-btn">
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links column */}
            <div className="footer-col">
              <h4 className="footer-col-title">Quick Links</h4>
              <ul className="footer-links">
                {NAV_LINKS.map(({ label, id }) => (
                  <li key={id}>
                    <button onClick={() => scrollTo(id)} className="footer-link">
                      <ArrowUpRight size={13} />
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact column */}
            <div className="footer-col">
              <h4 className="footer-col-title">Get In Touch</h4>
              <ul className="footer-contact-list">
                <li>
                  <a href="mailto:bharani7224@gmail.com" className="footer-contact-item">
                    <div className="footer-contact-icon"><Mail size={14} /></div>
                    <span>bharani7224@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+919360680467" className="footer-contact-item">
                    <div className="footer-contact-icon"><Phone size={14} /></div>
                    <span>+91 93606 80467</span>
                  </a>
                </li>
                <li>
                  <div className="footer-contact-item">
                    <div className="footer-contact-icon"><MapPin size={14} /></div>
                    <span>Tamil Nadu, India</span>
                  </div>
                </li>
              </ul>

              {/* Availability badge */}
              <div className="footer-available">
                <span className="avail-dot" />
                Available for new projects
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="footer-divider" />

        
        </div>
      </footer>
      
      {/* Back to top button */}
      <button 
        className={`hs-back-to-top ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </>
  );
}

export default App;
