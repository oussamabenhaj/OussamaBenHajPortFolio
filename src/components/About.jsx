import React from 'react';
import { User, CheckCircle2, Layout, Server, Database, Sparkles, GraduationCap } from 'lucide-react';

export const About = ({ lang }) => {
  const highlights = [
    {
      icon: <Layout className="hl-icon text-cyan" />,
      title: { fr: "Frontend & Mobile Web", en: "Frontend & Mobile Web" },
      desc: { 
        fr: "Création d'interfaces web réactives et applications mobiles performantes avec React.js, Next.js et React Native.",
        en: "Crafting responsive web interfaces and mobile apps using React.js, Next.js, and React Native." 
      }
    },
    {
      icon: <Server className="hl-icon text-purple" />,
      title: { fr: "Architecture Backend", en: "Backend Architecture" },
      desc: { 
        fr: "Conception d'APIs RESTful évolutives et microservices sous Node.js (Express) et PHP.",
        en: "Building scalable RESTful APIs and microservices powered by Node.js (Express) and PHP." 
      }
    },
    {
      icon: <Database className="hl-icon text-emerald" />,
      title: { fr: "Bases de Données", en: "Databases & Data" },
      desc: { 
        fr: "Modélisation relationnelle et NoSQL optimisée avec MySQL et MongoDB pour des traitements sécurisés.",
        en: "Optimized relational & NoSQL data modeling using MySQL and MongoDB." 
      }
    },
    {
      icon: <GraduationCap className="hl-icon text-amber" />,
      title: { fr: "Rigueur & Excellence", en: "Academic Excellence" },
      desc: { 
        fr: "Diplômé de l'ISET Djerba (Mention Très Bien) et PFE évalué avec les félicitations du jury.",
        en: "Graduated from ISET Djerba (Highest Honors) with PFE project awarded Highest Honors." 
      }
    }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <User className="sub-icon" />
            {lang === 'fr' ? 'À propos de moi' : 'About Me'}
          </span>
          <h2 className="section-title">
            {lang === 'fr' ? 'Développeur passionné & rigoureux' : 'Passionate & Rigorous Developer'}
          </h2>
        </div>

        <div className="about-grid">
          {/* Detailed Bio Card */}
          <div className="glass-panel bio-card">
            <div className="bio-header">
              <Sparkles className="bio-sparkle" />
              <h3>{lang === 'fr' ? 'Mon Profil Professionnel' : 'My Professional Profile'}</h3>
            </div>
            
            <p className="bio-text">
              {lang === 'fr' ? (
                <>
                  Je suis <strong>Oussama Ben Haj</strong>, développeur Full Stack JavaScript basé à <strong>Djerba, Tunisie</strong>. Titulaire d'une <strong>Licence en Développement Systèmes Informatiques (ISET Djerba)</strong> obtenue avec la mention <strong>Très Bien</strong>, je me spécialise dans la création de solutions informatiques modernes et innovantes.
                </>
              ) : (
                <>
                  I am <strong>Oussama Ben Haj</strong>, a Full Stack JavaScript Developer based in <strong>Djerba, Tunisia</strong>. Holder of a <strong>Bachelor's Degree in Computer Systems Development (ISET Djerba)</strong> with <strong>Highest Honors (Mention Très Bien)</strong>, I specialize in engineering modern, innovative software solutions.
                </>
              )}
            </p>

            <p className="bio-text">
              {lang === 'fr' ? (
                <>
                  Au cours de mon parcours (notamment lors de mon projet de fin d'études <strong>EduSpher</strong> chez Amitech Smart Solution et mes expériences chez Cyber Park et Vacancia Travel), j'ai développé une solide expertise dans la conception d'applications multiplateformes Web & Mobile avec <strong>React, Next.js, React Native, Node.js, Express, MySQL et MongoDB</strong>.
                </>
              ) : (
                <>
                  Through my professional journey (notably leading the <strong>EduSpher</strong> graduation project at Amitech Smart Solution and technical roles at Cyber Park and Vacancia Travel), I have cultivated deep expertise designing cross-platform Web & Mobile apps using <strong>React, Next.js, React Native, Node.js, Express, MySQL, and MongoDB</strong>.
                </>
              )}
            </p>

            <div className="bio-features">
              <div className="feature-item">
                <CheckCircle2 className="feat-icon text-cyan" />
                <span>{lang === 'fr' ? 'Architecture propre & modularité' : 'Clean architecture & modular code'}</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 className="feat-icon text-cyan" />
                <span>{lang === 'fr' ? 'Expérience utilisateur (UI/UX) soignée' : 'Polished UI/UX & Responsive Design'}</span>
              </div>
              <div className="feature-item">
                <CheckCircle2 className="feat-icon text-cyan" />
                <span>{lang === 'fr' ? 'Apprentissage rapide et esprit d\'équipe' : 'Fast learner & collaborative mindset'}</span>
              </div>
            </div>
          </div>

          {/* Core Strengths Grid */}
          <div className="highlights-grid">
            {highlights.map((item, idx) => (
              <div key={idx} className="glass-panel hl-card">
                <div className="hl-icon-wrapper">{item.icon}</div>
                <h4 className="hl-title">{item.title[lang]}</h4>
                <p className="hl-desc">{item.desc[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 6rem 0;
          position: relative;
        }

        .sub-icon {
          width: 18px;
          height: 18px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
          align-items: stretch;
        }

        .bio-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .bio-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }

        .bio-header h3 {
          font-size: 1.5rem;
          color: var(--text-primary);
        }

        .bio-sparkle {
          width: 24px;
          height: 24px;
          color: var(--accent-cyan);
        }

        .bio-text {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.75;
          margin-bottom: 1.25rem;
        }

        .bio-text strong {
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .bio-features {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .feat-icon {
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .hl-card {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .hl-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-cyan);
        }

        .hl-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-color);
        }

        .hl-icon {
          width: 24px;
          height: 24px;
        }

        .text-cyan { color: var(--accent-cyan); }
        .text-purple { color: var(--accent-purple); }
        .text-emerald { color: var(--accent-emerald); }
        .text-amber { color: var(--accent-amber); }

        .hl-title {
          font-size: 1.1rem;
          font-weight: 700;
        }

        .hl-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .highlights-grid {
            grid-template-columns: 1fr;
          }
          .bio-card {
            padding: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
};
