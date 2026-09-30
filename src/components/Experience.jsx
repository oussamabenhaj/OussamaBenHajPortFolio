import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  Sparkles,
  ChevronRight,
  Building2
} from 'lucide-react';
import { cvData } from '../data/cvData';

export const Experience = ({ lang }) => {
  const { experiences, education } = cvData;
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <Briefcase className="sub-icon" />
            {lang === 'fr' ? 'Expériences & Formation' : 'Career & Education'}
          </span>
          <h2 className="section-title">
            {lang === 'fr' ? 'Mon Parcours Professionnel' : 'My Professional Journey'}
          </h2>
        </div>

        {/* View Switcher (Experience / Education) */}
        <div className="timeline-toggle">
          <button
            onClick={() => setActiveTab('experience')}
            className={`toggle-btn ${activeTab === 'experience' ? 'active' : ''}`}
          >
            <Briefcase className="btn-icon-sm" />
            <span>{lang === 'fr' ? 'Expériences Pro' : 'Work Experience'}</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`toggle-btn ${activeTab === 'education' ? 'active' : ''}`}
          >
            <GraduationCap className="btn-icon-sm" />
            <span>{lang === 'fr' ? 'Formation & Diplômes' : 'Education'}</span>
          </button>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container">
          <div className="timeline-line"></div>

          {activeTab === 'experience' ? (
            <div className="timeline-items">
              {experiences.map((exp, idx) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-dot">
                    <Briefcase className="dot-icon" />
                  </div>

                  <div className="glass-panel timeline-content">
                    <div className="item-header">
                      <div>
                        <span className="item-period">
                          <Calendar className="icon-xs" />
                          {exp.period}
                        </span>
                        <h3 className="item-role">{exp.role[lang]}</h3>
                        <div className="company-badge">
                          <Building2 className="icon-xs text-cyan" />
                          <span>{exp.company}</span>
                          <span className="dot-sep">•</span>
                          <MapPin className="icon-xs" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      {exp.badge && (
                        <div className="badge badge-emerald">
                          <Award className="icon-xs" />
                          <span>{exp.badge[lang]}</span>
                        </div>
                      )}
                    </div>

                    <p className="item-desc">{exp.description[lang]}</p>

                    {/* Key Highlights */}
                    <div className="highlights-list">
                      {exp.highlights.map((h, i) => (
                        <div key={i} className="hl-item">
                          <ChevronRight className="hl-arrow text-cyan" />
                          <span>{h[lang]}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="tech-pills">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="tech-pill">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="timeline-items">
              {education.map((edu, idx) => (
                <div key={edu.id} className="timeline-item">
                  <div className="timeline-dot dot-purple">
                    <GraduationCap className="dot-icon" />
                  </div>

                  <div className="glass-panel timeline-content">
                    <div className="item-header">
                      <div>
                        <span className="item-period">
                          <Calendar className="icon-xs" />
                          {edu.year}
                        </span>
                        <h3 className="item-role">{edu.degree[lang]}</h3>
                        <div className="company-badge">
                          <Building2 className="icon-xs text-purple" />
                          <span>{edu.institution}</span>
                          <span className="dot-sep">•</span>
                          <MapPin className="icon-xs" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      {edu.badge && (
                        <div className="badge badge-emerald">
                          <Award className="icon-xs" />
                          <span>{edu.badge[lang]}</span>
                        </div>
                      )}
                    </div>

                    <p className="item-desc">{edu.description[lang]}</p>

                    {/* Courses / Subjects */}
                    <div className="tech-pills">
                      {edu.courses.map((course, i) => (
                        <span key={i} className="tech-pill pill-purple">{course}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        .experience-section {
          padding: 6rem 0;
          position: relative;
        }

        .timeline-toggle {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3.5rem;
        }

        .toggle-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.75rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.25s ease;
        }

        .toggle-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--accent-cyan);
        }

        .toggle-btn.active {
          background: var(--gradient-primary);
          color: white;
          border-color: transparent;
          box-shadow: var(--shadow-glow);
        }

        .btn-icon-sm {
          width: 18px;
          height: 18px;
        }

        .timeline-container {
          position: relative;
          max-width: 920px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 28px;
          width: 2px;
          background: linear-gradient(to bottom, var(--accent-cyan), var(--accent-purple), transparent);
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .timeline-item {
          position: relative;
          padding-left: 70px;
        }

        .timeline-dot {
          position: absolute;
          left: 10px;
          top: 15px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: var(--shadow-glow);
          z-index: 2;
        }

        .dot-purple {
          background: linear-gradient(135deg, #8b5cf6, #6366f1);
          box-shadow: var(--shadow-purple-glow);
        }

        .dot-icon {
          width: 18px;
          height: 18px;
        }

        .timeline-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .timeline-content:hover {
          transform: translateX(6px);
          border-color: var(--accent-cyan);
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .item-period {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--accent-cyan);
          font-weight: 600;
          margin-bottom: 0.35rem;
        }

        .item-role {
          font-size: 1.35rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 0.4rem;
        }

        .company-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .dot-sep {
          margin: 0 0.2rem;
        }

        .icon-xs {
          width: 14px;
          height: 14px;
        }

        .item-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .highlights-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.02);
          padding: 0.85rem 1rem;
          border-radius: var(--radius-md);
          border: 1px dashed var(--border-color);
        }

        .hl-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .hl-arrow {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }

        .tech-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-pill {
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          background: rgba(6, 182, 212, 0.1);
          color: var(--accent-cyan);
          border: 1px solid rgba(6, 182, 212, 0.2);
        }

        .pill-purple {
          background: rgba(139, 92, 246, 0.1);
          color: var(--accent-purple);
          border-color: rgba(139, 92, 246, 0.2);
        }

        @media (max-width: 640px) {
          .timeline-item {
            padding-left: 50px;
          }
          .timeline-line {
            left: 18px;
          }
          .timeline-dot {
            left: 0;
            width: 32px;
            height: 32px;
          }
          .timeline-content {
            padding: 1.5rem;
          }
          .item-role {
            font-size: 1.15rem;
          }
        }
      `}</style>
    </section>
  );
};
