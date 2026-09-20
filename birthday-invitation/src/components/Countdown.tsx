import { useState, useEffect } from 'react';
import { Clock, Cake, Heart } from 'lucide-react';

export default function Countdown({ t }: { t: any }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // Keep your target date
    const targetDate = new Date('2026-11-07T17:00:00').getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setIsExpired(true);
        return true;
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
        return false;
      }
    };

    if (calculateTime()) return;

    const interval = setInterval(() => {
      if (calculateTime()) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 px-6 max-w-xl mx-auto text-center">
      <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white/95 backdrop-blur-xl border border-sky-100 shadow-2xl shadow-sky-900/15 transition-all duration-700 relative overflow-hidden">

        {/* Background decorative ambient glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-sky-200/50 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-blue-200/40 rounded-full blur-2xl pointer-events-none"></div>

        {isExpired ? (
          /* Celebration Card Layout */
          <div className="py-2 space-y-5 relative z-10 animate-fade-in">

            {/* Icon Badge */}
            <div className="w-16 h-16 bg-gradient-to-tr from-sky-500 to-blue-600 text-white rounded-3xl mx-auto flex items-center justify-center shadow-lg shadow-sky-500/30 transform hover:rotate-6 transition-transform">
              <Cake className="w-8 h-8" />
            </div>

            {/* Main Greeting */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-extrabold font-serif text-sky-950 tracking-tight">
                {t.countdownExpiredTitle}
              </h3>

              <div className="flex items-center justify-center gap-2 text-sky-600 font-medium text-xs sm:text-sm uppercase tracking-widest pt-1">
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
                <span>{t.countdownExpiredSubtitle}</span>
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
              </div>
            </div>

            {/* Divider line */}
            <div className="w-12 h-1 bg-sky-200 rounded-full mx-auto mt-4"></div>
          </div>
        ) : (
          /* Countdown Display */
          <>
            <h3 className="font-extrabold text-sky-900 text-xs uppercase tracking-widest mb-6 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4 text-sky-600 animate-spin" style={{ animationDuration: '10s' }} />
              {t.countdownTitle}
            </h3>

            <div className="grid grid-cols-4 gap-3 text-sky-950">
              <div className="bg-sky-50/90 p-4 rounded-2xl border border-sky-100 shadow-inner transform transition hover:scale-105">
                <span className="block text-2xl sm:text-3xl font-black text-sky-700">{timeLeft.days}</span>
                <span className="text-[10px] uppercase font-bold text-sky-500">{t.days}</span>
              </div>
              <div className="bg-sky-50/90 p-4 rounded-2xl border border-sky-100 shadow-inner transform transition hover:scale-105">
                <span className="block text-2xl sm:text-3xl font-black text-sky-700">{timeLeft.hours}</span>
                <span className="text-[10px] uppercase font-bold text-sky-500">{t.hours}</span>
              </div>
              <div className="bg-sky-50/90 p-4 rounded-2xl border border-sky-100 shadow-inner transform transition hover:scale-105">
                <span className="block text-2xl sm:text-3xl font-black text-sky-700">{timeLeft.minutes}</span>
                <span className="text-[10px] uppercase font-bold text-sky-500">{t.minutes}</span>
              </div>
              <div className="bg-sky-50/90 p-4 rounded-2xl border border-sky-100 shadow-inner transform transition hover:scale-105">
                <span className="block text-2xl sm:text-3xl font-black text-sky-700">{timeLeft.seconds}</span>
                <span className="text-[10px] uppercase font-bold text-sky-500">{t.seconds}</span>
              </div>
            </div>
          </>
        )}

      </div>
    </section>
  );
}