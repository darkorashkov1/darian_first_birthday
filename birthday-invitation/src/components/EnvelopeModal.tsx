import { Gift, ArrowRight } from 'lucide-react';

interface EnvelopeModalProps {
  isOpen: boolean;
  onOpen: () => void;
  lang: 'mk' | 'en';
  text: string;
}

export default function EnvelopeModal({ isOpen, onOpen, lang, text }: EnvelopeModalProps) {
  if (isOpen) return null;

  const handleOpenClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onOpen();
  };

  return (
    <div className="fixed inset-0 z-50 bg-sky-950/80 backdrop-blur-2xl flex items-center justify-center p-4 transition-all duration-700 animate-fade-in">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-tr from-sky-400/20 to-amber-300/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>

      <div className="bg-white/90 backdrop-blur-3xl max-w-md w-full rounded-[3rem] p-8 sm:p-10 shadow-[0_0_50px_rgba(56,189,248,0.2)] text-center border border-white/80 relative overflow-hidden transform transition-all hover:scale-[1.01]">

        <div className="relative w-28 h-28 mx-auto mb-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-sky-400/20 rounded-[2rem] animate-ping opacity-75"></div>
          <div className="relative w-full h-full bg-gradient-to-tr from-sky-500 via-sky-400 to-blue-600 rounded-[2.5rem] flex items-center justify-center text-white shadow-xl shadow-sky-500/40 transform hover:rotate-6 transition-transform duration-300">
            <Gift className="w-14 h-14 drop-shadow-md animate-bounce" style={{ animationDuration: '3s' }} />
          </div>
        </div>

        <div className="space-y-2 mb-8">
          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-sky-100/80 text-sky-800 text-[11px] font-extrabold tracking-widest uppercase border border-sky-200/50">
            {lang === 'mk' ? 'Крштевка и Прв Роденден' : 'Christening & First Birthday'}
          </span>

          <h2 className="text-4xl sm:text-5xl font-black text-sky-950 font-serif tracking-tight pt-1">
            Дариан
          </h2>
          <p className="text-sky-800/80 text-sm font-medium">
            {lang === 'mk' ? 'Крштевката и првиот роденден ве повикуваат...' : 'Christening & first birthday await you... Click to open'}
          </p>
        </div>

        <button
          onClick={handleOpenClick}
          className="group relative w-full py-4.5 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-extrabold rounded-2xl uppercase tracking-wider text-xs transition-all shadow-xl shadow-sky-600/30 cursor-pointer flex items-center justify-center gap-2 overflow-hidden"
        >
          <div className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-[45deg] -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000"></div>
          <span>{text}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </div>
  );
}