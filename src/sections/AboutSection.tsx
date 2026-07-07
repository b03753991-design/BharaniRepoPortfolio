import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Monitor, Database, Cpu } from 'lucide-react';
import bharaniImg from '../assets/bharani.jpg';
import { ScrollReveal } from '../components/ScrollReveal';
import './AboutSection.css';

const skills = [
  { name: 'C# & ASP.NET Web API', pct: 90, color: '#0d3b6e' },
  { name: 'React.js & Tailwind CSS', pct: 92, color: '#1e6fa0' },
  { name: 'Node.js & Express.js', pct: 86, color: '#2e86c1' },
  { name: 'PostgreSQL & Oracle DB', pct: 84, color: '#1a5276' },
  { name: 'MongoDB', pct: 80, color: '#0d3b6e' },
];

const services = [
  {
    icon: <Monitor size={22} />,
    title: 'Frontend Engineering',
    desc: 'Building responsive, highly-interactive user interfaces using React, TypeScript, and modern state-management.',
  },
  {
    icon: <Database size={22} />,
    title: 'Backend Systems',
    desc: 'Designing stable REST APIs, serverless handlers, database schemas (SQL/NoSQL) and securing backend communications.',
  },
  {
    icon: <Cpu size={22} />,
    title: 'Performance & Optimization',
    desc: 'Optimizing application bundles for lightning fast speeds — code splitting, caching, and static page builds.',
  },
];

export const AboutSection: React.FC = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <ScrollReveal animation="fade-up" triggerOnce>
          <div className="section-header">
            <h2>About <span>Me</span></h2>
            <div className="section-divider" />
            <p>Get to know my background, skills, and what I bring to every project.</p>
          </div>
        </ScrollReveal>

        {/* Intro row */}
        <div className="about-intro">
          <ScrollReveal animation="fade-right" triggerOnce className="about-img-wrapper">
            <div className="about-img-frame">
              <div className="about-img-glow" />
              <img src={bharaniImg} alt="Bharani" className="about-img" />
              {/* Floating chip */}
              <div className="about-chip">
                <span className="chip-dot-green" />
                Open to Work
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-left" delay={150} triggerOnce>
            <div className="about-bio">
              <span className="about-badge">ABOUT ME</span>
              <h3 className="about-bio-title">Who is <span>Bharani</span>?</h3>
              <p className="about-bio-text">
                I am a passionate software developer based in Tamil Nadu, India. With a deep focus on crafting interactive visual experiences, I love bridging the gap between pixel-perfect mockups and functional engineering.
              </p>
              <p className="about-bio-text">
                My development processes center around responsiveness, clean logic architecture, and minimizing load times. I specialize in the modern web ecosystem, creating scalable React clients powered by Node backends.
              </p>

              <div className="about-info">
                <div className="about-info-item">
                  <MapPin size={16} className="info-icon" />
                  <span>Tamil Nadu, India</span>
                </div>
                <div className="about-info-item">
                  <Mail size={16} className="info-icon" />
                  <span>bharani7224@gmail.com</span>
                </div>
                <div className="about-info-item">
                  <Phone size={16} className="info-icon" />
                  <span>+91 93606 80467</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Skills */}
        <div className="about-skills-block">
          <ScrollReveal animation="fade-up" triggerOnce>
            <h3 className="about-sub-title">Core <span>Skills</span></h3>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100} triggerOnce>
            <div className="skills-card">
              {skills.map((skill, i) => (
                <div key={i} className="skill-row">
                  <div className="skill-row-header">
                    <span className="skill-row-name">{skill.name}</span>
                    <span className="skill-row-pct">{skill.pct}%</span>
                  </div>
                  <div className="skill-track">
                    <div
                      className="skill-fill"
                      style={{ width: animated ? `${skill.pct}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Services */}
        <div className="about-services">
          <ScrollReveal animation="fade-up" triggerOnce>
            <h3 className="about-sub-title">What I <span>Deliver</span></h3>
          </ScrollReveal>
          <div className="services-grid">
            {services.map((svc, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 120} triggerOnce>
                <div className="svc-card">
                  <div className="svc-icon">{svc.icon}</div>
                  <h4 className="svc-title">{svc.title}</h4>
                  <p className="svc-desc">{svc.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
