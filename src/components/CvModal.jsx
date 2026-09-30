import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Globe 
} from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { cvData } from '../data/cvData';

export const CvModal = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const { personalInfo, education, experiences, skills, languages } = cvData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="cv-modal-overlay" onClick={onClose}>
      <div className="cv-modal-window" onClick={(e) => e.stopPropagation()}>
        {/* Floating Controls (No-Print) */}
        <div className="cv-modal-controls no-print">
          <button onClick={handlePrint} className="control-act-btn btn-print">
            <Printer className="ctrl-icon" />
            <span>{lang === 'fr' ? 'Imprimer / Exporter PDF' : 'Print / Export PDF'}</span>
          </button>

          <button onClick={onClose} className="control-act-btn btn-close">
            <X className="ctrl-icon" />
          </button>
        </div>

        {/* Printable CV Document Content */}
        <div className="cv-document" id="printable-cv">
          {/* Header Bar */}
          <div className="cv-header">
            <div className="cv-profile-side">
              <div className="cv-avatar-box">
                <img src={personalInfo.avatar} alt={personalInfo.name} className="cv-avatar-img" />
              </div>
              <div>
                <h1 className="cv-name">{personalInfo.name}</h1>
                <h2 className="cv-title-sub">{personalInfo.title[lang]}</h2>
              </div>
            </div>

            <div className="cv-contacts-side">
              <div className="cv-c-item">
                <Mail className="cv-c-icon" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="cv-c-item">
                <Phone className="cv-c-icon" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="cv-c-item">
                <MapPin className="cv-c-icon" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="cv-c-item">
                <LinkedinIcon className="cv-c-icon" />
                <span>{personalInfo.linkedinDisplay}</span>
              </div>
            </div>
          </div>

          <div className="cv-body-grid">
            {/* Left Sidebar Column */}
            <div className="cv-sidebar-col">
              {/* Profile Summary */}
              <div className="cv-block">
                <h3 className="cv-block-title">{lang === 'fr' ? 'Profil' : 'Profile'}</h3>
                <p className="cv-summary-text">{personalInfo.bio[lang]}</p>
              </div>

              {/* Skills */}
              <div className="cv-block">
                <h3 className="cv-block-title">{lang === 'fr' ? 'Compétences' : 'Skills'}</h3>
                <div className="cv-skills-list">
                  {skills.map((s, i) => (
                    <div key={i} className="cv-skill-item">
                      <span className="cv-skill-name">{s.name}</span>
                      <div className="cv-skill-bar">
                        <div className="cv-skill-fill" style={{ width: `${s.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="cv-block">
                <h3 className="cv-block-title">{lang === 'fr' ? 'Langues' : 'Languages'}</h3>
                <div className="cv-lang-list">
                  {languages.map((l, i) => (
                    <div key={i} className="cv-lang-item">
                      <span>{l.name[lang]}</span>
                      <span className="cv-lang-tag">{l.level[lang]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Main Column */}
            <div className="cv-main-col">
              {/* Formation */}
              <div className="cv-block">
                <h3 className="cv-block-title cv-title-main">
                  <GraduationCap className="title-icon" />
                  <span>{lang === 'fr' ? 'Formation' : 'Education'}</span>
                </h3>

                <div className="cv-items-stack">
                  {education.map((edu) => (
                    <div key={edu.id} className="cv-item">
                      <div className="cv-item-top">
                        <h4 className="cv-item-degree">{edu.degree[lang]}</h4>
                        <span className="cv-item-year">{edu.year}</span>
                      </div>
                      <span className="cv-item-sub">{edu.institution}</span>
                      <p className="cv-item-desc">{edu.description[lang]}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="cv-block">
                <h3 className="cv-block-title cv-title-main">
                  <Briefcase className="title-icon" />
                  <span>{lang === 'fr' ? 'Expérience Professionnelle' : 'Work Experience'}</span>
                </h3>

                <div className="cv-items-stack">
                  {experiences.map((exp) => (
                    <div key={exp.id} className="cv-item">
                      <div className="cv-item-top">
                        <h4 className="cv-item-degree">{exp.role[lang]}</h4>
                        <span className="cv-item-year">{exp.period}</span>
                      </div>
                      <span className="cv-item-sub">{exp.company} — {exp.location}</span>
                      <p className="cv-item-desc">{exp.description[lang]}</p>
                      
                      {exp.badge && (
                        <div className="cv-honors-pill">
                          <Award className="icon-xs" />
                          <span>{exp.badge[lang]}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cv-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          overflow-y: auto;
        }

        .cv-modal-window {
          position: relative;
          width: 100%;
          max-width: 900px;
          max-height: 92vh;
          overflow-y: auto;
          background: #ffffff;
          color: #1e293b;
          border-radius: var(--radius-lg);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .cv-modal-controls {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
          background: #0f172a;
          color: white;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .control-act-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          font-weight: 600;
          font-size: 0.88rem;
          transition: all 0.2s ease;
        }

        .btn-print {
          background: var(--gradient-primary);
          color: white;
        }

        .btn-close {
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        .btn-close:hover {
          background: rgba(239, 68, 68, 0.8);
        }

        .ctrl-icon {
          width: 18px;
          height: 18px;
        }

        /* Printable CV document styling */
        .cv-document {
          padding: 2.5rem;
          background: #ffffff;
          color: #0f172a;
          font-family: 'Inter', sans-serif;
        }

        .cv-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1.75rem;
          border-bottom: 3px solid #06b6d4;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .cv-profile-side {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .cv-avatar-box {
          width: 85px;
          height: 85px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #06b6d4;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
        }

        .cv-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .cv-name {
          font-size: 1.9rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
        }

        .cv-title-sub {
          font-size: 1.05rem;
          color: #06b6d4;
          font-weight: 600;
          margin-top: 0.25rem;
        }

        .cv-contacts-side {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
          font-size: 0.85rem;
          color: #475569;
        }

        .cv-c-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .cv-c-icon {
          width: 14px;
          height: 14px;
          color: #06b6d4;
        }

        .cv-body-grid {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 2rem;
        }

        .cv-block {
          margin-bottom: 1.75rem;
        }

        .cv-block-title {
          font-size: 1.05rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #0f172a;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 0.35rem;
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }

        .cv-title-main {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #0284c7;
        }

        .title-icon {
          width: 20px;
          height: 20px;
        }

        .cv-summary-text {
          font-size: 0.88rem;
          color: #334155;
          line-height: 1.6;
        }

        .cv-skills-list {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .cv-skill-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .cv-skill-name {
          font-size: 0.82rem;
          font-weight: 600;
          color: #1e293b;
        }

        .cv-skill-bar {
          height: 5px;
          background: #e2e8f0;
          border-radius: 4px;
          overflow: hidden;
        }

        .cv-skill-fill {
          height: 100%;
          background: #06b6d4;
        }

        .cv-lang-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .cv-lang-item {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .cv-lang-tag {
          color: #64748b;
          font-size: 0.78rem;
        }

        .cv-items-stack {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .cv-item-top {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .cv-item-degree {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f172a;
        }

        .cv-item-year {
          font-size: 0.82rem;
          font-weight: 700;
          color: #06b6d4;
        }

        .cv-item-sub {
          font-size: 0.88rem;
          font-weight: 600;
          color: #475569;
          display: block;
          margin-bottom: 0.4rem;
        }

        .cv-item-desc {
          font-size: 0.88rem;
          color: #334155;
          line-height: 1.6;
        }

        .cv-honors-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.78rem;
          font-weight: 700;
          color: #047857;
          background: #ecfdf5;
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          margin-top: 0.5rem;
        }

        /* Print CSS rules */
        @media print {
          .no-print {
            display: none !important;
          }
          body * {
            visibility: hidden;
          }
          #printable-cv, #printable-cv * {
            visibility: visible;
          }
          #printable-cv {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 0;
          }
          .cv-modal-overlay {
            position: absolute;
            inset: 0;
            background: white;
            padding: 0;
          }
          .cv-modal-window {
            max-width: 100%;
            box-shadow: none;
          }
        }

        @media (max-width: 700px) {
          .cv-body-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
