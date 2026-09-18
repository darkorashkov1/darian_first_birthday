import { Compass } from 'lucide-react';

export default function Footer({ t }: { t: any }) {
  return (
    <footer className="py-12 px-6 text-center text-sky-950/70 border-t border-sky-100/50 mt-12 bg-white/40 backdrop-blur-md">
      <div className="max-w-xl mx-auto space-y-3">
        <div className="w-8 h-8 rounded-full bg-sky-100 text-sky-800 flex items-center justify-center mx-auto shadow-sm">
          <Compass className="w-4 h-4 animate-spin-slow" />
        </div>
        <p className="text-xs sm:text-sm font-medium tracking-wide">
          {t.footer}
        </p>
      </div>
    </footer>
  );
}