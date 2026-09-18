import { MapPin, ExternalLink } from 'lucide-react';

export default function LocationSection({ t }: { t: any }) {
  return (
    <section className="py-12 px-6 max-w-xl mx-auto text-center">
      <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white/95 backdrop-blur-xl border border-sky-100 shadow-2xl shadow-sky-900/10 space-y-4">
        <div className="w-12 h-12 bg-sky-100 text-sky-700 rounded-2xl mx-auto flex items-center justify-center">
          <MapPin className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-extrabold text-sky-950 text-xl font-serif">{t.locationName}</h3>
          <p className="text-sky-600 text-sm mt-1">{t.locationAddress}</p>
        </div>
        <a
          href="https://maps.app.goo.gl/dnqrFyBXqzqDBD649"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-2 px-6 py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-2xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-sky-600/30 cursor-pointer"
        >
          <span>{t.mapBtn}</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}