import { useState, useEffect } from 'react';
import { translations } from './translations';
import LanguageToggle from './components/LanguageToggle';
import ScrollToTop from './components/ScrollToTop';
import EnvelopeModal from './components/EnvelopeModal';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import LocationSection from './components/LocationSection';
import PhotoWall from './components/PhotoWall';
import RsvpForm from './components/RsvpForm';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<'mk' | 'en'>('mk');
  const t = translations[lang];

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const hasGalleryHash = window.location.hash === '#gallery';

    if (params.get('view') === 'photos' || hasGalleryHash) {
      setIsOpen(true); // Hide the envelope immediately

      // Scroll down to the gallery after the page renders
      setTimeout(() => {
        const photoWallElement = document.getElementById('photo-wall-section');
        if (photoWallElement) {
          photoWallElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
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
        <RsvpForm t={t} />
        <PhotoWall t={t}/>
        <LocationSection t={t} />
      </div>

      <ScrollToTop />
    </div>
  );
}