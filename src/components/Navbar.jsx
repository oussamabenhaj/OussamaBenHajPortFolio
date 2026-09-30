import React, { useState, useEffect } from 'react';
import { Sun, Moon, Globe, Menu, X, Sparkles, FileText } from 'lucide-react';

export const Navbar = ({ theme, toggleTheme, lang, toggleLang, onOpenCv }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: { fr: 'Accueil', en: 'Home' } },
    { id: 'about', label: { fr: 'À propos', en: 'About' } },
    { id: 'skills', label: { fr: 'Compétences', en: 'Skills' } },
    { id: 'experience', label: { fr: 'Parcours', en: 'Experience' } },
    { id: 'projects', label: { fr: 'Projets', en: 'Projects' } },
    { id: 'contact', label: { fr: 'Contact', en: 'Contact' } },
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#hero" className="nav-logo">
          <div className="logo-badge">
            <Sparkles className="logo-icon" />
          </div>
          <span className="logo-text">
            Oussama<span className="logo-accent">.BenHaj</span>
          </span>
        </a>

        {/* Desktop Nav Items */}
        <nav className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-item ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label[lang]}
            </a>
          ))}
        </nav>

        {/* Controls (Theme, Language, CV Button) */}
        <div className="nav-actions">
          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="control-btn lang-btn"
            title={lang === 'fr' ? 'Switch to English' : 'Passer en Français'}
          >
            <Globe className="btn-icon" />
            <span className="lang-code">{lang.toUpperCase()}</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="control-btn theme-btn"
            title={theme === 'dark' ? 'Mode Clair' : 'Mode Sombre'}
          >
            {theme === 'dark' ? <Sun className="btn-icon text-amber" /> : <Moon className="btn-icon" />}
          </button>

          {/* CV Modal Trigger */}
          <button onClick={onOpenCv} className="cv-nav-btn">
            <FileText className="btn-icon" />
            <span>CV</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`mobile-nav-item ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label[lang]}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCv();
              }}
              className="mobile-cv-btn"
            >
              <FileText className="btn-icon" />
              <span>Voir le CV complet</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.25rem 0;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .navbar.scrolled {
          padding: 0.75rem 0;
          background: var(--bg-glass);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
          box-shadow: var(--shadow-md);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 1.35rem;
        }

        .logo-badge {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: var(--gradient-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: var(--shadow-glow);
        }

        .logo-icon {
          width: 20px;
          height: 20px;
        }

        .logo-text {
          color: var(--text-primary);
        }

        .logo-accent {
          color: var(--accent-cyan);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.35rem 0.5rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
        }

        .nav-item {
          padding: 0.5rem 1rem;
          border-radius: var(--radius-full);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .nav-item:hover, .nav-item.active {
          color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.12);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .control-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 0.85rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
          font-size: 0.85rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .control-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--accent-cyan);
          transform: translateY(-1px);
        }

        .btn-icon {
          width: 16px;
          height: 16px;
        }

        .text-amber {
          color: #f59e0b;
        }

        .cv-nav-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.1rem;
          border-radius: var(--radius-full);
          background: var(--gradient-primary);
          color: white;
          font-weight: 600;
          font-size: 0.88rem;
          box-shadow: var(--shadow-glow);
          transition: all 0.25s ease;
        }

        .cv-nav-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 25px rgba(99, 102, 241, 0.5);
        }

        .mobile-toggle {
          display: none;
          color: var(--text-primary);
          padding: 0.5rem;
        }

        .mobile-drawer {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: var(--bg-dark);
          border-bottom: 1px solid var(--border-color);
          padding: 1.5rem;
          box-shadow: var(--shadow-md);
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .mobile-nav-item {
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          font-size: 1rem;
          color: var(--text-secondary);
        }

        .mobile-nav-item.active {
          background: rgba(6, 182, 212, 0.12);
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .mobile-cv-btn {
          margin-top: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.85rem;
          border-radius: var(--radius-md);
          background: var(--gradient-primary);
          color: white;
          font-weight: 600;
        }

        @media (max-width: 900px) {
          .nav-links {
            display: none;
          }
          .mobile-toggle {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
};
