export default function DressCode({ t }: { t: any }) {
  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center border-y border-sky-200 text-center my-8 overflow-hidden"
      style={{ backgroundImage: `url('/images/dresscode_background.png')` }}
    >
      {/* Light background overlay so it doesn't wash out the image */}
      <div className="absolute inset-0 bg-sky-950/20 backdrop-blur-[1px] pointer-events-none"></div>

      <div className="relative z-10 max-w-xl mx-auto">
        {/* Transparent card */}
        <div className="p-8 sm:p-10 rounded-[2.5rem] bg-white/60 backdrop-blur-md border border-white/80 shadow-2xl space-y-4">

          {/* Elegant Tuxedo & Dress Icons Container */}
          <div className="flex items-center justify-center gap-4 mx-auto mb-2">

            {/* Men's Tuxedo / Suit Icon */}
            <div className="w-14 h-14 rounded-2xl bg-sky-900 text-white shadow-lg flex items-center justify-center p-2.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                {/* Tuxedo lapels & bow tie */}
                <path d="M15 3h-6l-2 5 3 4-1 9h6l-1-9 3-4-2-5z" />
                <path d="M12 3v5" />
                <path d="M10 7l2 2 2-2" />
                <circle cx="12" cy="11" r="0.8" fill="currentColor" />
                <circle cx="12" cy="14" r="0.8" fill="currentColor" />
              </svg>
            </div>

            {/* Women's Evening Dress Icon */}
            <div className="w-14 h-14 rounded-2xl bg-sky-700 text-white shadow-lg flex items-center justify-center p-2.5">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
                {/* Elegant flowing gown silhouette */}
                <path d="M9 3h6l1 3-3 2v12h-2V8L8 6l1-3z" />
                <path d="M6 21h12" />
              </svg>
            </div>

          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-sky-950 font-serif">
            {t?.dressCodeTitle || "Кодекс на облекување"}
          </h2>
          <p className="text-sky-900 text-sm sm:text-base leading-relaxed font-medium">
            {t?.dressCodeDesc || "Ве молиме погледнете ја инспирацијата во позадина за свечениот дрес код."}
          </p>
        </div>
      </div>
    </section>
  );
}