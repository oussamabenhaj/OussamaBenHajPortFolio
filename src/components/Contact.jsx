import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { LinkedinIcon } from './SocialIcons';
import { cvData } from '../data/cvData';

export const Contact = ({ lang, showToast }) => {
  const { personalInfo } = cvData;
  const [copiedField, setCopiedField] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopy = (text, fieldLabel) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldLabel);
    showToast(
      lang === 'fr' 
        ? `${fieldLabel} copié dans le presse-papier !` 
        : `${fieldLabel} copied to clipboard!`
    );
    setTimeout(() => setCopiedField(null), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitted(true);
    showToast(
      lang === 'fr' 
        ? 'Message envoyé avec succès !' 
        : 'Message sent successfully!'
    );
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">
            <MessageSquare className="sub-icon" />
            {lang === 'fr' ? 'Me Contacter' : 'Get In Touch'}
          </span>
          <h2 className="section-title">
            {lang === 'fr' ? 'Travaillons Ensemble' : "Let's Build Something Together"}
          </h2>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="contact-info-column">
            <div className="glass-panel contact-intro-card">
              <Sparkles className="contact-sparkle text-cyan" />
              <h3>{lang === 'fr' ? 'Discutons de vos projets' : 'Start a Conversation'}</h3>
              <p>
                {lang === 'fr'
                  ? "Que ce soit pour un recrutement, une opportunité de projet ou une collaboration freelance, je suis toujours ouvert à l'échange !"
                  : "Whether it is for a full-time role, project development, or freelance collaboration, I am always ready to chat!"
                }
              </p>
            </div>

            {/* Quick Copy Contact Items */}
            <div className="contact-cards-stack">
              {/* Email Card */}
              <div className="glass-panel contact-item-card">
                <div className="contact-icon-box bg-cyan">
                  <Mail className="c-svg" />
                </div>
                <div className="contact-details">
                  <span className="c-label">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="c-value">{personalInfo.email}</a>
                </div>
                <button 
                  onClick={() => handleCopy(personalInfo.email, 'Email')}
                  className="copy-btn"
                  title="Copier Email"
                >
                  {copiedField === 'Email' ? <Check className="text-emerald" /> : <Copy />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="glass-panel contact-item-card">
                <div className="contact-icon-box bg-purple">
                  <Phone className="c-svg" />
                </div>
                <div className="contact-details">
                  <span className="c-label">{lang === 'fr' ? 'Téléphone' : 'Phone'}</span>
                  <a href={`tel:${personalInfo.phone}`} className="c-value">{personalInfo.phone}</a>
                </div>
                <button 
                  onClick={() => handleCopy(personalInfo.phone, 'Téléphone')}
                  className="copy-btn"
                  title="Copier Téléphone"
                >
                  {copiedField === 'Téléphone' ? <Check className="text-emerald" /> : <Copy />}
                </button>
              </div>

              {/* Location Card */}
              <div className="glass-panel contact-item-card">
                <div className="contact-icon-box bg-emerald">
                  <MapPin className="c-svg" />
                </div>
                <div className="contact-details">
                  <span className="c-label">{lang === 'fr' ? 'Localisation' : 'Location'}</span>
                  <span className="c-value">{personalInfo.location}</span>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="glass-panel contact-item-card">
                <div className="contact-icon-box bg-amber">
                  <LinkedinIcon className="c-svg" />
                </div>
                <div className="contact-details">
                  <span className="c-label">LinkedIn</span>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="c-value">
                    {personalInfo.linkedinDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Interactive Form */}
          <div className="glass-panel contact-form-card">
            <h3>{lang === 'fr' ? 'Envoyer un message direct' : 'Send a Direct Message'}</h3>
            
            {formSubmitted ? (
              <div className="form-success-box">
                <div className="success-icon-box">
                  <Check className="success-svg" />
                </div>
                <h4>{lang === 'fr' ? 'Merci beaucoup !' : 'Thank you!'}</h4>
                <p>
                  {lang === 'fr' 
                    ? 'Votre message a été transmis. Je vous répondrai dans les plus brefs délais.' 
                    : 'Your message has been received. I will reply to you as soon as possible.'
                  }
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label>{lang === 'fr' ? 'Votre Nom' : 'Your Name'}</label>
                  <input 
                    type="text" 
                    required
                    placeholder={lang === 'fr' ? 'ex. Jean Dupont' : 'e.g. John Doe'}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>{lang === 'fr' ? 'Votre Email' : 'Your Email'}</label>
                  <input 
                    type="email" 
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>{lang === 'fr' ? 'Sujet' : 'Subject'}</label>
                  <input 
                    type="text" 
                    placeholder={lang === 'fr' ? 'ex. Proposition de projet' : 'e.g. Project Proposal'}
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label>{lang === 'fr' ? 'Message' : 'Message'}</label>
                  <textarea 
                    rows="5"
                    required
                    placeholder={lang === 'fr' ? 'Écrivez votre message ici...' : 'Write your message here...'}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="form-submit-btn">
                  <span>{lang === 'fr' ? 'Envoyer le message' : 'Send Message'}</span>
                  <Send className="btn-icon" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 6rem 0;
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 2.5rem;
          align-items: start;
        }

        .contact-info-column {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-intro-card {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-sparkle {
          width: 28px;
          height: 28px;
        }

        .contact-intro-card h3 {
          font-size: 1.35rem;
        }

        .contact-intro-card p {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .contact-cards-stack {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-item-card {
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .contact-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .c-svg {
          width: 22px;
          height: 22px;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .c-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .c-value {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          transition: color 0.2s ease;
        }

        a.c-value:hover {
          color: var(--accent-cyan);
        }

        .copy-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .copy-btn:hover {
          background: rgba(6, 182, 212, 0.15);
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
        }

        .contact-form-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-form-card h3 {
          font-size: 1.5rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-input {
          width: 100%;
          padding: 0.85rem 1.1rem;
          border-radius: var(--radius-md);
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.25s ease, background 0.25s ease;
        }

        .form-input:focus {
          border-color: var(--accent-cyan);
          background: rgba(6, 182, 212, 0.05);
        }

        .form-textarea {
          resize: vertical;
        }

        .form-submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 1rem;
          border-radius: var(--radius-full);
          background: var(--gradient-primary);
          color: white;
          font-weight: 700;
          font-size: 1rem;
          box-shadow: var(--shadow-glow);
          transition: all 0.3s ease;
          margin-top: 0.5rem;
        }

        .form-submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 30px rgba(6, 182, 212, 0.5);
        }

        .form-success-box {
          padding: 3rem 1.5rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .success-icon-box {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          color: var(--accent-emerald);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .success-svg {
          width: 32px;
          height: 32px;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
