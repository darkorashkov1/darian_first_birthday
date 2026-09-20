import { MapPin, ExternalLink } from 'lucide-react';

export default function LocationSection({ t }: { t: any }) {
  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center border-y border-sky-200 text-center my-8 overflow-hidden"
      style={{ backgroundImage: `url('/images/dresscode_background.png')` }}
    >
      {/* Light background overlay for readability */}
      <div className="absolute inset-0 bg-sky-950/20 backdrop-blur-[1px] pointer-events-none"></div>

      <div className="relative z-10 max-w-xl mx-auto">
        <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white/90 backdrop-blur-md border border-white/80 shadow-2xl space-y-4">
          <div className="w-12 h-12 bg-sky-100 text-sky-700 rounded-2xl mx-auto flex items-center justify-center shadow-md">
            <MapPin className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-extrabold text-sky-950 text-xl font-serif">{t.locationName}</h3>
            <p className="text-sky-700 text-sm mt-1 font-medium">{t.locationAddress}</p>
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
      </div>
    </section>
  );
}