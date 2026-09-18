interface LanguageToggleProps {
  lang: 'mk' | 'en';
  setLang: React.Dispatch<React.SetStateAction<'mk' | 'en'>>;
}

export default function LanguageToggle({ lang, setLang }: LanguageToggleProps) {
  const toggleLanguage = () => {
    setLang(prev => (prev === 'mk' ? 'en' : 'mk'));
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label={`Switch to ${lang === 'mk' ? 'English' : 'Macedonian'}`}
      type="button"
      className="absolute top-5 right-5 z-50 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md border border-sky-200 shadow-xl flex items-center justify-center cursor-pointer overflow-hidden focus:outline-none transition-transform hover:scale-105"
    >
      <span
        className={`relative w-full h-full flex items-center justify-center transition-transform duration-500 transform ${
          lang === 'en' ? 'rotate-180' : 'rotate-0'
        }`}
      >
        {/* MK label (acting like the Sun icon position) */}
        <span
          className={`absolute inset-0 flex items-center justify-center text-xs font-black tracking-wider transition-opacity duration-300 ${
            lang === 'mk' ? 'opacity-100 text-sky-950 scale-100' : 'opacity-0 text-sky-400 scale-75 pointer-events-none'
          }`}
        >
          MK
        </span>

        {/* EN label (acting like the Moon icon position) */}
        <span
          className={`absolute inset-0 flex items-center justify-center text-xs font-black tracking-wider transition-opacity duration-300 transform rotate-180 ${
            lang === 'en' ? 'opacity-100 text-sky-950 scale-100' : 'opacity-0 text-sky-400 scale-75 pointer-events-none'
          }`}
        >
          EN
        </span>
      </span>
    </button>
  );
}