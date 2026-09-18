import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function Countdown({ t }: { t: any }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('2026-11-07T17:00:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-10 px-6 max-w-xl mx-auto text-center">
      <div className="p-8 rounded-[2.5rem] bg-white/90 backdrop-blur-xl border border-sky-100 shadow-2xl shadow-sky-900/10">
        <h3 className="font-extrabold text-sky-900 text-xs uppercase tracking-widest mb-6 flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 text-sky-600" /> {t.countdownTitle}
        </h3>
        <div className="grid grid-cols-4 gap-3 text-sky-950">
          <div className="bg-sky-50/90 p-4 rounded-2xl border border-sky-100 shadow-inner">
            <span className="block text-2xl sm:text-3xl font-black text-sky-700">{timeLeft.days}</span>
            <span className="text-[10px] uppercase font-bold text-sky-500">{t.days}</span>
          </div>
          <div className="bg-sky-50/90 p-4 rounded-2xl border border-sky-100 shadow-inner">
            <span className="block text-2xl sm:text-3xl font-black text-sky-700">{timeLeft.hours}</span>
            <span className="text-[10px] uppercase font-bold text-sky-500">{t.hours}</span>
          </div>
          <div className="bg-sky-50/90 p-4 rounded-2xl border border-sky-100 shadow-inner">
            <span className="block text-2xl sm:text-3xl font-black text-sky-700">{timeLeft.minutes}</span>
            <span className="text-[10px] uppercase font-bold text-sky-500">{t.minutes}</span>
          </div>
          <div className="bg-sky-50/90 p-4 rounded-2xl border border-sky-100 shadow-inner">
            <span className="block text-2xl sm:text-3xl font-black text-sky-700">{timeLeft.seconds}</span>
            <span className="text-[10px] uppercase font-bold text-sky-500">{t.seconds}</span>
          </div>
        </div>
      </div>
    </section>
  );
}