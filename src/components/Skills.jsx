import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Smartphone, 
  Globe, 
  Layers, 
  Cpu, 
  FileCode, 
  Paintbrush, 
  GitBranch, 
  Layout, 
  Code,
  CheckCircle2,
  Languages
} from 'lucide-react';
import { cvData } from '../data/cvData';

export const Skills = ({ lang }) => {
  const { skills, languages } = cvData;
  const [activeCategory, setActiveCategory] = useState('All');

  const iconMap = {
    Server: <Server className="skill-svg text-purple" />,
    Code2: <Code2 className="skill-svg text-cyan" />,
    Smartphone: <Smartphone className="skill-svg text-emerald" />,
    Layers: <Layers className="skill-svg text-cyan" />,
    Database: <Database className="skill-svg text-amber" />,
    Layout: <Layout className="skill-svg text-cyan" />,
    Cpu: <Cpu className="skill-svg text-purple" />,
    Code: <Code className="skill-svg text-purple" />,
    FileCode: <FileCode className="skill-svg text-cyan" />,
    Paintbrush: <Paintbrush className="skill-svg text-cyan" />,
    GitBranch: <GitBranch className="skill-svg text-amber" />
  };

  const categories = [
    { id: 'All', label: { fr: 'Toutes', en: 'All Skills' } },
    { id: 'Frontend', label: { fr: 'Frontend', en: 'Frontend' } },
    { id: 'Backend', label: { fr: 'Backend', en: 'Backend' } },
    { id: 'Mobile', label: { fr: 'Mobile', en: 'Mobile' } },
    { id: 'Database', label: { fr: 'Bases de données', en: 'Databases' } },
    { id: 'Tools', label: { fr: 'Outils', en: 'Tools' } }
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <Code2 className="sub-icon" />
            {lang === 'fr' ? 'Compétences & Langues' : 'Skills & Languages'}
          </span>
          <h2 className="section-title">
            {lang === 'fr' ? 'Stack Technique & Maîtrise' : 'Technical Stack & Expertise'}
          </h2>
        </div>

        {/* Category Filters */}
        <div className="category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* Technical Skills Grid */}
        <div className="skills-grid">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="glass-panel skill-card">
              <div className="skill-card-top">
                <div className="skill-icon-wrapper">
                  {iconMap[skill.icon] || <Code2 className="skill-svg text-cyan" />}
                </div>
                <div className="skill-meta">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-cat">{skill.category}</span>
                </div>
                <span className="skill-percent">{skill.level}%</span>
              </div>

              {/* Progress Level Bar */}
              <div className="progress-track">
                <div 
                  className="progress-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="languages-wrapper">
          <div className="lang-header">
            <Languages className="lang-header-icon" />
            <h3>{lang === 'fr' ? 'Compétences Linguistiques' : 'Language Proficiency'}</h3>
          </div>

          <div className="languages-grid">
            {languages.map((l, idx) => (
              <div key={idx} className="glass-panel lang-card">
                <div className="lang-info">
                  <h4 className="lang-name">{l.name[lang]}</h4>
                  <span className="lang-level">{l.level[lang]}</span>
                </div>

                {/* Rating Dots */}
                <div className="dots-wrapper">
                  {[1, 2, 3, 4, 5].map((dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`dot ${dotIndex <= l.dots ? 'filled' : ''}`}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .skills-section {
          padding: 6rem 0;
          position: relative;
        }

        .category-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 3rem;
        }

        .tab-btn {
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-secondary);
          font-weight: 500;
          font-size: 0.9rem;
          transition: all 0.25s ease;
        }

        .tab-btn:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--accent-cyan);
          color: var(--text-primary);
        }

        .tab-btn.active {
          background: var(--gradient-primary);
          color: white;
          border-color: transparent;
          font-weight: 600;
          box-shadow: var(--shadow-glow);
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
          margin-bottom: 4.5rem;
        }

        .skill-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .skill-card:hover {
          transform: translateY(-4px);
          border-color: var(--accent-cyan);
        }

        .skill-card-top {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .skill-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-color);
        }

        .skill-svg {
          width: 22px;
          height: 22px;
        }

        .skill-meta {
          flex: 1;
        }

        .skill-name {
          font-size: 1.05rem;
          font-weight: 700;
          line-height: 1.2;
        }

        .skill-cat {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .skill-percent {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--accent-cyan);
          font-family: var(--font-heading);
        }

        .progress-track {
          width: 100%;
          height: 7px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-full);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: var(--radius-full);
          transition: width 1s ease-in-out;
        }

        .languages-wrapper {
          margin-top: 2rem;
        }

        .lang-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .lang-header-icon {
          width: 26px;
          height: 26px;
          color: var(--accent-cyan);
        }

        .lang-header h3 {
          font-size: 1.5rem;
        }

        .languages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .lang-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .lang-info {
          display: flex;
          flex-direction: column;
        }

        .lang-name {
          font-size: 1.15rem;
          font-weight: 700;
        }

        .lang-level {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .dots-wrapper {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.15);
          transition: all 0.3s ease;
        }

        .dot.filled {
          background: var(--accent-cyan);
          box-shadow: 0 0 10px rgba(6, 182, 212, 0.6);
        }

        @media (max-width: 900px) {
          .languages-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
