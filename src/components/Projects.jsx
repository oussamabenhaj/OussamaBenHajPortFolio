import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Award, 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  X,
  Smartphone,
  Globe,
  Database,
  Image as ImageIcon
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { cvData } from '../data/cvData';

export const Projects = ({ lang }) => {
  const { projects } = cvData;
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const handleOpenModal = (proj) => {
    setSelectedProject(proj);
    setActiveImageIdx(0);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {
      // fallback if confetti fails
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <FolderGit2 className="sub-icon" />
            {lang === 'fr' ? 'Projets Récents' : 'Featured Projects'}
          </span>
          <h2 className="section-title">
            {lang === 'fr' ? 'Réalisations & Mises en Application' : 'Real-World Projects & Engineering'}
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((proj) => (
            <div key={proj.id} className="glass-panel project-card">
              {/* Project Banner Image */}
              <div className="project-image-wrapper">
                <img src={proj.image} alt={proj.title} className="project-img" />
                <div className="image-overlay">
                  <button 
                    onClick={() => handleOpenModal(proj)} 
                    className="overlay-btn"
                  >
                    <Sparkles className="btn-icon" />
                    <span>{lang === 'fr' ? 'Aperçu & Captures' : 'View Screenshots'}</span>
                  </button>
                </div>

                {proj.honors && (
                  <div className="project-badge badge-emerald">
                    <Award className="icon-xs" />
                    <span>{proj.honors[lang]}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <div className="project-type-row">
                  <span className="project-type">{proj.type}</span>
                  <span className="project-cat">{proj.category}</span>
                </div>

                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.description[lang]}</p>

                {/* Tech Pills */}
                <div className="project-tech-list">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="proj-pill">{tag}</span>
                  ))}
                </div>

                {/* Bottom Trigger */}
                <div className="project-card-footer">
                  <button 
                    onClick={() => handleOpenModal(proj)}
                    className="explore-link"
                  >
                    <span>{lang === 'fr' ? 'Explorer le projet' : 'Explore Project'}</span>
                    <ExternalLink className="icon-xs" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal for Project Details & Image Gallery */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="glass-panel modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>
              <X />
            </button>

            <div className="modal-header">
              <span className="modal-type">{selectedProject.type}</span>
              <h2 className="modal-title">{selectedProject.title}</h2>
              {selectedProject.honors && (
                <div className="badge badge-emerald modal-badge">
                  <Award className="icon-xs" />
                  <span>{selectedProject.honors[lang]}</span>
                </div>
              )}
            </div>

            {/* Gallery View */}
            {selectedProject.gallery && selectedProject.gallery.length > 0 && (
              <div className="gallery-container">
                <div className="main-gallery-view">
                  <img 
                    src={selectedProject.gallery[activeImageIdx]} 
                    alt="Project preview" 
                    className="gallery-main-img" 
                  />
                </div>
                
                {selectedProject.gallery.length > 1 && (
                  <div className="gallery-thumbs">
                    {selectedProject.gallery.map((imgUrl, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setActiveImageIdx(idx)}
                        className={`thumb-btn ${activeImageIdx === idx ? 'active' : ''}`}
                      >
                        <img src={imgUrl} alt={`Thumb ${idx}`} className="thumb-img" />
                        <span className="thumb-label">
                          {idx === 0 ? 'Web (Next.js)' : 'Mobile (React Native)'}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            <p className="modal-desc">{selectedProject.description[lang]}</p>

            {/* Key Features */}
            <div className="modal-section">
              <h4>{lang === 'fr' ? 'Fonctionnalités Clés & Architecture' : 'Key Features & Architecture'}</h4>
              <div className="features-grid">
                {selectedProject.features.map((feat, idx) => (
                  <div key={idx} className="feat-card">
                    <CheckCircle2 className="feat-icon text-cyan" />
                    <span>{feat[lang]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .projects-section {
          padding: 6rem 0;
          position: relative;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2.25rem;
        }

        .project-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: var(--accent-cyan);
        }

        .project-image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: rgba(10, 13, 20, 0.5);
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-img {
          transform: scale(1.06);
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: rgba(10, 13, 20, 0.65);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .image-overlay {
          opacity: 1;
        }

        .overlay-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.25rem;
          border-radius: var(--radius-full);
          background: var(--gradient-primary);
          color: white;
          font-weight: 600;
          font-size: 0.88rem;
          box-shadow: var(--shadow-glow);
        }

        .project-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 2;
        }

        .project-card-body {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          flex: 1;
        }

        .project-type-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .project-title {
          font-size: 1.3rem;
          font-weight: 800;
          line-height: 1.3;
        }

        .project-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: auto;
        }

        .proj-pill {
          font-size: 0.78rem;
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
        }

        .project-card-footer {
          padding-top: 0.75rem;
          border-top: 1px solid var(--border-color);
        }

        .explore-link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--accent-cyan);
        }

        .explore-link:hover {
          text-decoration: underline;
        }

        /* Modal styling */
        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }

        .modal-content {
          position: relative;
          width: 100%;
          max-width: 780px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .modal-close {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }

        .modal-close:hover {
          background: rgba(255, 255, 255, 0.18);
        }

        .modal-type {
          font-size: 0.85rem;
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .modal-title {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .modal-badge {
          display: inline-flex;
        }

        .gallery-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .main-gallery-view {
          width: 100%;
          max-height: 380px;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-color);
        }

        .gallery-main-img {
          width: 100%;
          max-height: 380px;
          object-fit: contain;
        }

        .gallery-thumbs {
          display: flex;
          gap: 0.75rem;
        }

        .thumb-btn {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 0.85rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.04);
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .thumb-btn.active {
          border-color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.12);
          color: var(--accent-cyan);
          font-weight: 600;
        }

        .thumb-img {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          object-fit: cover;
        }

        .thumb-label {
          font-size: 0.85rem;
        }

        .modal-desc {
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .modal-section h4 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .features-grid {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .feat-card {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.03);
          padding: 0.75rem 1rem;
          border-radius: var(--radius-md);
          border: 1px solid var(--border-color);
          font-size: 0.95rem;
        }

        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
