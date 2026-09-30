import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Award,
  CheckCircle2,
  Code2,
  Server,
  Smartphone
} from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { cvData } from '../data/cvData';

export const Hero = ({ lang, onOpenCv }) => {
  const { personalInfo, stats } = cvData;

  return (
    <section id="hero" className="hero-section">
      {/* Dynamic Ambient Background Glows */}
      <div className="glow-sphere glow-1 animate-pulse-glow"></div>
      <div className="glow-sphere glow-2 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      <div className="container hero-container">
        {/* Left Column: Hero Text & Information */}
        <div className="hero-content">
          {/* Status Badge */}
          <div className="status-pill">
            <span className="status-dot"></span>
            <span className="status-text">{personalInfo.status[lang]}</span>
          </div>

          {/* Main Title & Subtitle */}
          <h1 className="hero-title">
            <span className="greeting">{lang === 'fr' ? 'Bonjour, je suis' : "Hello, I'm"}</span>
            <br />
            <span className="name-highlight text-gradient">{personalInfo.name}</span>
          </h1>

          <h2 className="hero-subtitle">
            <Sparkles className="icon-sparkle" />
            {personalInfo.title[lang]}
          </h2>

          <p className="hero-description">
            {personalInfo.bio[lang]}
          </p>

          {/* Quick Info Tags */}
          <div className="quick-tags">
            <div className="tag-item">
              <MapPin className="tag-icon" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="tag-item">
              <Award className="tag-icon text-amber" />
              <span>{lang === 'fr' ? 'Mention Très Bien (PFE 2025)' : 'Highest Honors (Graduation 2025)'}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">
              <span>{lang === 'fr' ? 'Découvrir mes projets' : 'Explore My Projects'}</span>
              <ArrowRight className="btn-arrow" />
            </a>

            <button onClick={onOpenCv} className="btn-secondary">
              <Download className="btn-icon-left" />
              <span>{lang === 'fr' ? 'Consulter le CV' : 'View Full Resume'}</span>
            </button>
          </div>

          {/* Social Links & Quick Contact */}
          <div className="hero-socials">
            <span className="social-label">{lang === 'fr' ? 'Me contacter :' : 'Connect with me:'}</span>
            <div className="social-icons">
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn"
                title="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`} 
                className="social-btn"
                title="Email"
              >
                <Mail />
              </a>
              <a 
                href={`tel:${personalInfo.phone}`} 
                className="social-btn"
                title="Phone"
              >
                <Phone />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Profile Image & Floating Cards */}
        <div className="hero-visual">
          <div className="avatar-wrapper">
            {/* Glowing Ring Effect */}
            <div className="avatar-glow"></div>
            
            {/* Real Image of Oussama Ben Haj */}
            <div className="avatar-frame">
              <img 
                src={personalInfo.avatar} 
                alt={personalInfo.name} 
                className="avatar-img"
              />
            </div>

            {/* Floating Card 1: PFE Mention */}
            <div className="floating-card card-top-left glass-panel animate-float">
              <div className="fc-icon bg-emerald">
                <Award className="fc-svg" />
              </div>
              <div className="fc-text">
                <span className="fc-title">EduSpher PFE</span>
                <span className="fc-desc">{lang === 'fr' ? 'Mention Très Bien' : 'Highest Honors'}</span>
              </div>
            </div>

            {/* Floating Card 2: Main Stack */}
            <div className="floating-card card-bottom-right glass-panel animate-float" style={{ animationDelay: '3s' }}>
              <div className="fc-icon bg-cyan">
                <Code2 className="fc-svg" />
              </div>
              <div className="fc-text">
                <span className="fc-title">Full Stack JS</span>
                <span className="fc-desc">React • Next • Node • Mobile</span>
              </div>
            </div>

            {/* Tech Badges Floating Pill */}
            <div className="tech-orbit">
              <span className="orbit-pill">React.js</span>
              <span className="orbit-pill">Next.js</span>
              <span className="orbit-pill">Node.js</span>
              <span className="orbit-pill">React Native</span>
              <span className="orbit-pill">MySQL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section Bar */}
      <div className="container">
        <div className="stats-bar glass-panel">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <span className="stat-value text-gradient">{stat.value}</span>
              <span className="stat-label">{stat.label[lang]}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          padding-top: 8rem;
          padding-bottom: 4rem;
          overflow: hidden;
        }

        .glow-sphere {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
          z-index: 0;
        }

        .glow-1 {
          top: 10%;
          left: -5%;
          width: 450px;
          height: 450px;
          background: rgba(6, 182, 212, 0.18);
        }

        .glow-2 {
          top: 40%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: rgba(99, 102, 241, 0.18);
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1rem;
          border-radius: var(--radius-full);
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          margin-bottom: 1.25rem;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--accent-emerald);
          box-shadow: 0 0 10px var(--accent-emerald);
        }

        .status-text {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent-emerald);
        }

        .hero-title {
          font-size: 3.25rem;
          line-height: 1.15;
          margin-bottom: 0.75rem;
        }

        .greeting {
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--text-secondary);
        }

        .name-highlight {
          font-weight: 900;
        }

        .hero-subtitle {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.4rem;
          color: var(--accent-cyan);
          font-weight: 600;
          margin-bottom: 1.25rem;
        }

        .icon-sparkle {
          width: 22px;
          height: 22px;
        }

        .hero-description {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1.75rem;
          max-width: 580px;
          line-height: 1.7;
        }

        .quick-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .tag-item {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.88rem;
          color: var(--text-muted);
          background: rgba(255, 255, 255, 0.04);
          padding: 0.35rem 0.85rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
        }

        .tag-icon {
          width: 16px;
          height: 16px;
          color: var(--accent-cyan);
        }

        .text-amber {
          color: #f59e0b;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.25rem;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 1.75rem;
          border-radius: var(--radius-full);
          background: var(--gradient-primary);
          color: white;
          font-weight: 600;
          font-size: 1rem;
          box-shadow: var(--shadow-glow);
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(6, 182, 212, 0.5);
        }

        .btn-arrow {
          width: 18px;
          height: 18px;
          transition: transform 0.2s ease;
        }

        .btn-primary:hover .btn-arrow {
          transform: translateX(4px);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1.5rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: var(--accent-cyan);
          transform: translateY(-2px);
        }

        .btn-icon-left {
          width: 18px;
          height: 18px;
          color: var(--accent-cyan);
        }

        .hero-socials {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .social-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .social-icons {
          display: flex;
          gap: 0.6rem;
        }

        .social-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all 0.25s ease;
        }

        .social-btn:hover {
          background: var(--gradient-primary);
          color: white;
          border-color: transparent;
          transform: translateY(-3px) scale(1.05);
          box-shadow: var(--shadow-glow);
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          position: relative;
        }

        .avatar-wrapper {
          position: relative;
          width: 320px;
          height: 380px;
        }

        .avatar-glow {
          position: absolute;
          inset: -15px;
          border-radius: 30px;
          background: var(--gradient-primary);
          opacity: 0.4;
          filter: blur(25px);
          z-index: 0;
        }

        .avatar-frame {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          border-radius: 26px;
          overflow: hidden;
          border: 2px solid rgba(255, 255, 255, 0.15);
          box-shadow: var(--shadow-md);
          background: var(--bg-card);
        }

        .avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          transition: transform 0.5s ease;
        }

        .avatar-frame:hover .avatar-img {
          transform: scale(1.04);
        }

        .floating-card {
          position: absolute;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          min-width: 180px;
        }

        .card-top-left {
          top: -20px;
          left: -40px;
        }

        .card-bottom-right {
          bottom: -20px;
          right: -30px;
        }

        .fc-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .bg-emerald {
          background: linear-gradient(135deg, #10b981, #059669);
        }

        .bg-cyan {
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
        }

        .fc-svg {
          width: 20px;
          height: 20px;
        }

        .fc-text {
          display: flex;
          flex-direction: column;
        }

        .fc-title {
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--text-primary);
        }

        .fc-desc {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .tech-orbit {
          position: absolute;
          bottom: 15px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          gap: 0.4rem;
          background: rgba(10, 13, 20, 0.85);
          backdrop-filter: blur(8px);
          padding: 0.35rem 0.6rem;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
          max-width: 90%;
          overflow-x: auto;
        }

        .orbit-pill {
          font-size: 0.72rem;
          font-weight: 600;
          color: var(--accent-cyan);
          white-space: nowrap;
          padding: 0.2rem 0.5rem;
          background: rgba(6, 182, 212, 0.1);
          border-radius: 6px;
        }

        .stats-bar {
          margin-top: 3.5rem;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 1.5rem 2rem;
          text-align: center;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          border-right: 1px solid var(--border-color);
        }

        .stat-item:last-child {
          border-right: none;
        }

        .stat-value {
          font-size: 2.25rem;
          font-weight: 900;
          font-family: var(--font-heading);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2.5rem;
          }
          .hero-subtitle, .quick-tags, .hero-actions, .hero-socials {
            justify-content: center;
          }
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
          .card-top-left {
            left: 0;
          }
          .card-bottom-right {
            right: 0;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.35rem;
          }
          .avatar-wrapper {
            width: 270px;
            height: 330px;
          }
          .stats-bar {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .stat-item {
            border-right: none;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .btn-primary, .btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};
