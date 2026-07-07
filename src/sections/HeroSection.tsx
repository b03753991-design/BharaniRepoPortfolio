import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, ExternalLink, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Github, Linkedin } from '../components/SocialIcons';
import { 
  ReactIcon, NetCoreIcon, PostgresIcon, OracleIcon, 
  NodejsIcon, ExpressIcon, PostmanIcon, SwaggerIcon, ApiIcon, LinqIcon
} from '../components/TechIcons';
import './HeroSection.css';

const TITLES = [
  'Full Stack Developer',
  'React & ASP.NET Specialist',
  'UI / UX Enthusiast',
  'Problem Solver',
];

const PYRAMID_NODES = [
  // Row 1 (Apex)
  { name: 'React', icon: <ReactIcon size={24} className="tech-react" />, bgClass: 'tech-react-bg', posClass: 'p-1-1' },
  
  // Row 2
  { name: 'ASP.NET', icon: <NetCoreIcon size={24} className="tech-netcore" />, bgClass: 'tech-netcore-bg', posClass: 'p-2-1' },
  { name: 'Node.js', icon: <NodejsIcon size={24} className="tech-node" />, bgClass: 'tech-node-bg', posClass: 'p-2-2' },
  
  // Row 3
  { name: 'Express.js', icon: <ExpressIcon size={22} className="tech-express" />, bgClass: 'tech-express-bg', posClass: 'p-3-1' },
  { name: 'PostgreSQL', icon: <PostgresIcon size={22} className="tech-postgres" />, bgClass: 'tech-postgres-bg', posClass: 'p-3-2' },
  { name: 'Oracle DB', icon: <OracleIcon size={22} className="tech-oracle" />, bgClass: 'tech-oracle-bg', posClass: 'p-3-3' },
  
  // Row 4 (Base)
  { name: 'C# / LINQ', icon: <LinqIcon size={20} className="tech-linq" />, bgClass: 'tech-linq-bg', posClass: 'p-4-1' },
  { name: 'APIs', icon: <ApiIcon size={20} className="tech-api" />, bgClass: 'tech-api-bg', posClass: 'p-4-2' },
  { name: 'Postman', icon: <PostmanIcon size={20} className="tech-postman" />, bgClass: 'tech-postman-bg', posClass: 'p-4-3' },
  { name: 'Swagger', icon: <SwaggerIcon size={20} className="tech-swagger" />, bgClass: 'tech-swagger-bg', posClass: 'p-4-4' },
];

export const HeroSection: React.FC = () => {
  const [typedText, setTypedText]   = useState('');
  const [titleIdx,  setTitleIdx]    = useState(0);
  const [charIdx,   setCharIdx]     = useState(0);
  const [deleting,  setDeleting]    = useState(false);

  /* ── typewriter ── */
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const cur = TITLES[titleIdx];
    if (deleting) {
      t = setTimeout(() => { setTypedText(cur.slice(0, charIdx - 1)); setCharIdx(p => p - 1); }, 40);
    } else {
      t = setTimeout(() => { setTypedText(cur.slice(0, charIdx + 1)); setCharIdx(p => p + 1); }, 85);
    }
    if (!deleting && charIdx === cur.length)  t = setTimeout(() => setDeleting(true), 2400);
    if (deleting  && charIdx === 0)           { setDeleting(false); setTitleIdx(p => (p + 1) % TITLES.length); }
    return () => clearTimeout(t);
  }, [charIdx, deleting, titleIdx]);

  /* ── smooth scroll ── */
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hs-root">

      {/* ── Background ── */}
      <div className="hs-bg">
        <div className="hs-blob b1" />
        <div className="hs-blob b2" />
        <div className="hs-blob b3" />
        <div className="hs-grid" />
        <div className="hs-noise" />
      </div>

      <div className="container hs-wrap">

        {/* ══════════════ LEFT COLUMN: Content ══════════════ */}
        <div className="hs-left">
          {/* Status pill */}
          <div className="hs-pill">
            <span className="hs-pulse" />
            <span>ASP.NET Developer Currently at NavaNala Technologies 6+ Months Experience</span>
          </div>

          {/* Greeting */}
          {/* <p className="hs-greeting">Hello, World! 👋</p> */}

          {/* Name */}
          <h1 className="hs-name">
            I'm <span className="hs-gradient-text">Bharani</span>
            <span className="hs-underline-bar" />
          </h1>

          {/* Typewriter */}
          <div className="hs-tw">
            <span className="hs-tw-icon">{'</>'}</span>
            <span className="hs-tw-text">{typedText}</span>
            <span className="hs-tw-cursor">|</span>
          </div>

          {/* Description */}
          <p className="hs-desc">
            I craft <strong>premium digital experiences</strong> — from pixel-perfect interfaces
            to robust back-end systems. Passionate about clean architecture and breathtaking UI.
          </p>

          {/* Location */}
          <div className="hs-location">
            <MapPin size={14} />
            <span>Tamil Nadu, India</span>
          </div>

          {/* ── CTAs ── */}
          <div className="hs-ctas">
            {/* PRIMARY — Hire Me */}
            <a href="mailto:bharani7224@gmail.com" className="hs-btn-hire">
              <span className="hs-btn-hire-shine" />
              <Mail size={16} />
              <span>Hire Me</span>
              <ArrowRight size={15} className="hs-arrow" />
            </a>

            {/* SECONDARY — View My Work */}
            <button className="hs-btn-work" onClick={() => scrollTo('projects')}>
              <ExternalLink size={15} />
              <span>View My Work</span>
            </button>

            {/* TERTIARY — Resume */}
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hs-btn-resume">
              <Download size={14} />
              <span>Resume</span>
            </a>
          </div>

          {/* Socials */}
          <div className="hs-socials">
            <span className="hs-socials-label">Find me on</span>
            <a href="https://github.com/bharani" target="_blank" rel="noreferrer" aria-label="GitHub" className="hs-social">
              <Github size={17} />
            </a>
            <a href="https://www.linkedin.com/in/bharani-dharan-d-26624a293" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hs-social">
              <Linkedin size={17} />
            </a>
            <a href="mailto:bharani7224@gmail.com" aria-label="Email" className="hs-social">
              <Mail size={17} />
            </a>
          </div>
        </div>

        {/* ══════════════ RIGHT COLUMN: Pyramid Tech Network ══════════════ */}
        <div className="hs-right">
          <div className="hs-pyramid-wrapper">
            
            {/* Animated network lines connecting nodes of the pyramid */}
            <svg className="hs-pyramid-lines" viewBox="0 0 400 350" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Row 1 to Row 2 */}
              <line x1="200" y1="40" x2="135" y2="135" className="hs-py-line" />
              <line x1="200" y1="40" x2="265" y2="135" className="hs-py-line" />
              
              {/* Row 2 to Row 3 */}
              <line x1="135" y1="135" x2="70" y2="230" className="hs-py-line" />
              <line x1="135" y1="135" x2="200" y2="230" className="hs-py-line" />
              <line x1="265" y1="135" x2="200" y2="230" className="hs-py-line" />
              <line x1="265" y1="135" x2="330" y2="230" className="hs-py-line" />
              
              {/* Row 3 to Row 4 */}
              <line x1="70" y1="230" x2="20" y2="315" className="hs-py-line" />
              <line x1="70" y1="230" x2="140" y2="315" className="hs-py-line" />
              <line x1="200" y1="230" x2="140" y2="315" className="hs-py-line" />
              <line x1="200" y1="230" x2="260" y2="315" className="hs-py-line" />
              <line x1="330" y1="230" x2="260" y2="315" className="hs-py-line" />
              <line x1="330" y1="230" x2="380" y2="315" className="hs-py-line" />
            </svg>

            {/* Render tech nodes at coordinates */}
            {PYRAMID_NODES.map((node, index) => (
              <div 
                key={node.name} 
                className={`hs-py-node ${node.posClass}`} 
                style={{ animationDelay: `${index * -0.4}s` }}
                title={node.name}
              >
                <div className={`hs-py-coin ${node.bgClass}`}>
                  {node.icon}
                </div>
                <span className="hs-py-label">{node.name}</span>
              </div>
            ))}

          </div>
        </div>

      </div>

      {/* ── Scroll cue ── */}
      <div className="hs-scroll" onClick={() => scrollTo('education')}>
        <span>Scroll Down</span>
        <div className="hs-scroll-arrow-box">
          <ChevronDown size={16} className="hs-scroll-arrow" />
        </div>
      </div>
    </section>
  );
};
