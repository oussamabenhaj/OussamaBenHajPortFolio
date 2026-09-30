import React from 'react';
import { ArrowUp, Heart, Sparkles } from 'lucide-react';
import { cvData } from '../data/cvData';

export const Footer = ({ lang }) => {
  const { personalInfo } = cvData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo-badge-sm">
            <Sparkles className="icon-sm" />
          </div>
          <span className="footer-logo-text">
            Oussama<span className="logo-accent">.BenHaj</span>
          </span>
        </div>

        <p className="footer-copyright">
          © {new Date().getFullYear()} {personalInfo.name}. {lang === 'fr' ? 'Développeur Full Stack JavaScript. Tous droits réservés.' : 'Full Stack JavaScript Developer. All rights reserved.'}
        </p>

        <button onClick={scrollToTop} className="scroll-top-btn" title="Retour en haut">
          <ArrowUp className="icon-sm" />
        </button>
      </div>

      <style>{`
        .footer-section {
          padding: 2.5rem 0;
          background: rgba(10, 13, 20, 0.95);
          border-top: 1px solid var(--border-color);
        }

        .footer-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.15rem;
        }

        .logo-badge-sm {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .icon-sm {
          width: 16px;
          height: 16px;
        }

        .footer-logo-text {
          color: var(--text-primary);
        }

        .footer-copyright {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .scroll-top-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
        }

        .scroll-top-btn:hover {
          background: var(--gradient-primary);
          color: white;
          transform: translateY(-3px);
          box-shadow: var(--shadow-glow);
        }

        @media (max-width: 600px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};
