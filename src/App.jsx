import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { CheckCircle2 } from 'lucide-react';

export function App() {
  const [theme, setTheme] = useState('dark');
  const [lang, setLang] = useState('fr');
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleLang = () => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="app-main">
      {/* Top Header */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        lang={lang}
        toggleLang={toggleLang}
        onOpenCv={() => setIsCvOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        <Hero lang={lang} onOpenCv={() => setIsCvOpen(true)} />
        <About lang={lang} />
        <Skills lang={lang} />
        <Experience lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} showToast={showToast} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Interactive Printable CV Modal */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
        lang={lang}
      />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <CheckCircle2 className="text-emerald" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
