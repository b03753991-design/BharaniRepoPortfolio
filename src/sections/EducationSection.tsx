import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';
import './EducationSection.css';

interface TimelineItem {
  type: string;
  period: string;
  title: string;
  institution: string;
  location: string;
  desc: string;
  grade?: string;
  icon: React.ReactElement;
}

const education = [
  {
    type: 'education',
    period: '2023 – 2026',
    title: 'BCA – Bachelor of Computer Applications',
    institution: 'Erode Arts and Science College',
    location: 'Erode, Tamil Nadu',
    desc: 'Completed core courses in web design, databases, software development, and application management. Graduated with a CGPA of 7.36.',
    grade: 'CGPA: 7.36',
    icon: <GraduationCap size={20} />,
  },
];

const experience: TimelineItem[] = [
  {
    type: 'work',
    period: 'Jan 2026 – Present',
    title: 'Software Developer (6 Mos Completed)',
    institution: 'NavaNala Technologies Private Limited',
    location: 'Perundurai, Tamil Nadu',
    desc: 'Developing dynamic web applications with clean frontend architectures, optimizing logic routines, and collaborating on full-stack features.',
    icon: <Briefcase size={20} />,
  },
  {
    type: 'internship',
    period: 'Jul 2025 – Dec 2025',
    title: 'MernStack Developer Intern',
    institution: 'BlackStone Infomatics',
    location: 'Coimbatore, Tamil Nadu',
    desc: 'Collaborated in developing modern web applications using React.js, Node.js, Express.js, and MongoDB. Assisted in building responsive user interfaces, developing RESTful APIs, managing database operations, and working closely with the development team to deliver scalable full-stack solutions.',
    icon: <Briefcase size={20} />,
  },
];

const TimelineCard: React.FC<{
  item: TimelineItem;
  delay?: number;
}> = ({ item, delay = 0 }) => (
  <ScrollReveal animation="fade-up" delay={delay} triggerOnce>
    <div className={`edu-card ${item.type === 'work' ? 'work-card' : 'study-card'}`}>
      <div className="edu-card-icon">
        {item.icon}
      </div>
      <div className="edu-card-body">
        <div className="edu-card-meta">
          <span className="edu-period">
            <Calendar size={12} /> {item.period}
          </span>
          <span className="edu-location">
            <MapPin size={12} /> {item.location}
          </span>
        </div>
        <h4 className="edu-title">{item.title}</h4>
        <span className="edu-institution">{item.institution}</span>
        <p className="edu-desc">{item.desc}</p>
        {item.grade && (
          <span className="edu-grade">{item.grade}</span>
        )}
      </div>
    </div>
  </ScrollReveal>
);

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <ScrollReveal animation="fade-up" triggerOnce>
          <div className="section-header">
            <h2>Education & <span>Experience</span></h2>
            <div className="section-divider" />
            <p>My academic foundation and professional journey that shaped my skills.</p>
          </div>
        </ScrollReveal>

        <div className="edu-grid">
          {/* Education Column */}
          <div className="edu-column">
            <ScrollReveal animation="fade-right" triggerOnce>
              <div className="edu-column-label">
                <GraduationCap size={16} />
                Education
              </div>
            </ScrollReveal>
            <div className="edu-timeline">
              {education.map((item, i) => (
                <TimelineCard key={i} item={item} delay={i * 150} />
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div className="edu-column">
            <ScrollReveal animation="fade-left" triggerOnce>
              <div className="edu-column-label work">
                <Briefcase size={16} />
                Experience
              </div>
            </ScrollReveal>
            <div className="edu-timeline">
              {experience.map((item, i) => (
                <TimelineCard key={i} item={item} delay={i * 150} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
