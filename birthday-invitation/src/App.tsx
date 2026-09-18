import { useState, useEffect } from 'react';
import { translations } from './translations';
import LanguageToggle from './components/LanguageToggle';
import ScrollToTop from './components/ScrollToTop';
import EnvelopeModal from './components/EnvelopeModal';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import LocationSection from './components/LocationSection';
import DressCode from './components/DressCode';
import PhotoWall from './components/PhotoWall';
import RsvpForm from './components/RsvpForm';
import Footer from './components/Footer';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<'mk' | 'en'>('mk');
  const t = translations[lang];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('view') === 'photos') {
      setIsOpen(true); // Skip the envelope

      setTimeout(() => {
        const photoWallElement = document.getElementById('photo-wall-section');
        if (photoWallElement) {
          photoWallElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-b from-sky-100 via-sky-50 to-white text-sky-950 font-sans selection:bg-sky-200 selection:text-sky-900 relative overflow-x-hidden">

      <LanguageToggle lang={lang} setLang={setLang} />

      <EnvelopeModal
        isOpen={isOpen}
        onOpen={() => setIsOpen(true)}
        lang={lang}
        text={t.openEnvelope}
      />

      <div className={`transition-all duration-1000 transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <Hero t={t} />
        <Countdown t={t} />
        <LocationSection t={t} />
        <DressCode t={t} />
        <PhotoWall t={t}/>
        <RsvpForm t={t} />
        <Footer t={t} />
      </div>

      <ScrollToTop />
    </div>
  );
}