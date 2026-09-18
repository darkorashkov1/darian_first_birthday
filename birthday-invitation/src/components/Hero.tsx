import { Calendar, Clock, MapPin, Compass, Plane } from 'lucide-react';

interface HeroProps {
  t: any;
}

export default function Hero({ t }: HeroProps) {
  return (
    <header className="relative flex flex-col items-center justify-center px-6 pt-32 pb-24 text-center min-h-[90vh] bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url('/images/Hero_background.png')` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-sky-950/50 via-sky-900/30 to-sky-950/60 backdrop-blur-[2px] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">

        <div className="relative w-20 h-20 bg-gradient-to-tr from-sky-900 to-sky-800 border-2 border-amber-200/60 rounded-3xl flex items-center justify-center text-amber-100 shadow-2xl mb-6 transform -rotate-6 hover:rotate-0 transition-transform">
          <Plane className="w-10 h-10 transform -rotate-45" />
        </div>

        <span className="text-amber-100/90 tracking-[0.25em] uppercase text-xs sm:text-sm mb-3 font-extrabold flex items-center gap-2 drop-shadow-md bg-white/10 px-4 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
          <Compass className="w-4 h-4 text-amber-200 animate-spin-slow" /> {t.heroBadge || "Christening & First Birthday"}
        </span>

        <h1 className="text-6xl sm:text-8xl font-black tracking-tight mb-4 text-white font-serif drop-shadow-lg">
          {t.babyName}
        </h1>

        <p className="max-w-xl text-sky-100 text-base sm:text-lg leading-relaxed mb-12 drop-shadow-md font-medium italic">
          {t.heroIntro}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 p-6 rounded-[2.5rem] bg-white/85 border border-white/40 shadow-2xl backdrop-blur-xl max-w-4xl w-full text-sm">
          <div className="flex flex-col items-center p-5 rounded-2xl bg-sky-50/80 border border-sky-100 transition-transform hover:scale-105">
            <div className="w-10 h-10 rounded-xl bg-sky-800 text-white flex items-center justify-center shadow-md mb-3">
              <Calendar className="w-5 h-5" />
            </div>
            <span className="text-sky-800 font-bold uppercase tracking-wider text-[11px] mb-1">{t.dateLabel}</span>
            <span className="font-bold text-slate-900 text-center">{t.dateValue}</span>
          </div>

          <div className="flex flex-col items-center p-5 rounded-2xl bg-sky-50/80 border border-sky-100 transition-transform hover:scale-105">
            <div className="w-10 h-10 rounded-xl bg-sky-800 text-white flex items-center justify-center shadow-md mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-sky-800 font-bold uppercase tracking-wider text-[11px] mb-1">{t.timeLabel}</span>
            <span className="font-bold text-slate-900 text-center">{t.timeValue}</span>
          </div>

          <div className="flex flex-col items-center p-5 rounded-2xl bg-sky-50/80 border border-sky-100 transition-transform hover:scale-105">
            <div className="w-10 h-10 rounded-xl bg-sky-800 text-white flex items-center justify-center shadow-md mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-sky-800 font-bold uppercase tracking-wider text-[11px] mb-1">{t.locationLabel}</span>
            <span className="font-bold text-slate-900 text-center">{t.locationName}</span>
          </div>
        </div>

      </div>
    </header>
  );
}