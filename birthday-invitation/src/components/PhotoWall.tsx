import React, { useState, useEffect, useRef } from 'react';
import { Camera, Upload, CheckCircle2, Image as ImageIcon, Loader2, Download, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { uploadPartyPhoto, subscribeToPartyPhotos } from '../firebase/storage';

export default function PhotoWall({ t }: { t: any }) {
  const [photos, setPhotos] = useState<string[]>([]);
  const [uploadingCamera, setUploadingCamera] = useState(false);
  const [uploadingGallery, setUploadingGallery] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loadingPhotos, setLoadingPhotos] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const [visibleCount, setVisibleCount] = useState<number>(10);

  const cameraInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  // Set up live real-time listener on mount
  useEffect(() => {
    setLoadingPhotos(true);
    const unsubscribe = subscribeToPartyPhotos((updatedPhotos) => {
      setPhotos(updatedPhotos);
      setLoadingPhotos(false);
    });

    // Cleanup subscription on unmount
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>, isCamera: boolean) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (isCamera) {
      setUploadingCamera(true);
    } else {
      setUploadingGallery(true);
    }

    try {
      await uploadPartyPhoto(file);
      // No need to manually call loadPhotos() anymore!
      // The database listener will catch it automatically in milliseconds.
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    } catch (error) {
      console.error("Upload failed", error);
      alert("Грешка при качување на сликата.");
    } finally {
      if (isCamera) {
        setUploadingCamera(false);
        if (cameraInputRef.current) cameraInputRef.current.value = '';
      } else {
        setUploadingGallery(false);
        if (galleryInputRef.current) galleryInputRef.current.value = '';
      }
    }
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null && prev < photos.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : photos.length - 1));
  };

  const selectedPhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  const displayedPhotos = photos.slice(0, visibleCount);
  const hasMorePhotos = visibleCount < photos.length;

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-sky-50 to-amber-50/40">
      <div className="max-w-4xl mx-auto text-center space-y-6">

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-black tracking-wider uppercase shadow-sm">
          <Camera className="w-4 h-4" /> {t?.liveMemoryWall || "Live Memory Wall"}
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-sky-950 font-serif">
          {t?.photoWallTitle || "Споделете ги вашите моментни слики 📸"}
        </h2>
        <p className="text-sky-800 text-sm sm:text-base max-w-xl mx-auto font-medium">
          {t?.photoWallSubtitle || "Сликајте се за време на прославата и споделете ги спомените во нашата трајна галерија!"}
        </p>

        {/* Dual Upload Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
          <label className="cursor-pointer group flex flex-col items-center justify-center border-2 border-dashed border-amber-300 hover:border-amber-500 rounded-[2rem] p-6 transition-all bg-amber-50/50 hover:bg-amber-50 shadow-md">
            <div className="w-14 h-14 bg-amber-500 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-3">
              {uploadingCamera ? <Loader2 className="w-7 h-7 animate-spin" /> : <Camera className="w-7 h-7" />}
            </div>
            <span className="text-amber-950 font-bold text-sm">
              {uploadingCamera ? "Се зачувува..." : (t?.cameraCardTitle || "Сликај со камера")}
            </span>
            <span className="text-amber-600 text-xs mt-1">Отворете ја камерата веднаш</span>
            <input
              ref={cameraInputRef}
              type="file"
              accept="image/*"
              capture="environment"
              onChange={(e) => handleUpload(e, true)}
              disabled={uploadingCamera || uploadingGallery}
              className="hidden"
            />
          </label>

          <label className="cursor-pointer group flex flex-col items-center justify-center border-2 border-dashed border-sky-300 hover:border-sky-500 rounded-[2rem] p-6 transition-all bg-sky-50/50 hover:bg-sky-50 shadow-md">
            <div className="w-14 h-14 bg-sky-500 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-3">
              {uploadingGallery ? <Loader2 className="w-7 h-7 animate-spin" /> : <Upload className="w-7 h-7" />}
            </div>
            <span className="text-sky-950 font-bold text-sm">
              {uploadingGallery ? "Се зачувува..." : (t?.uploadCardTitle || "Прикажи од галерија")}
            </span>
            <span className="text-sky-500 text-xs mt-1">Изберете постоечка слика</span>
            <input
              ref={galleryInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => handleUpload(e, false)}
              disabled={uploadingCamera || uploadingGallery}
              className="hidden"
            />
          </label>
        </div>

        {success && (
          <div className="max-w-md mx-auto p-3 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center gap-2 text-xs font-bold animate-fade-in">
            <CheckCircle2 className="w-4 h-4" /> Успешно зачувано во галеријата!
          </div>
        )}

        {/* PREVIEW VIEWER WITH ARROWS */}
        <div ref={previewRef}>
          {selectedPhoto && (
            <div className="my-6 p-4 bg-white border-2 border-sky-200 rounded-3xl shadow-xl max-w-xl mx-auto animate-fade-in flex flex-col items-center">
              <div className="w-full flex justify-between items-center mb-3 px-2">
                <span className="text-xs font-bold text-sky-900 uppercase tracking-wide">
                  Слика {selectedIndex! + 1} од {photos.length}
                </span>
                <button
                  onClick={() => setSelectedIndex(null)}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 transition-colors"
                >
                  <X className="w-4 h-4" /> Затвори
                </button>
              </div>

              <div className="relative w-full max-h-[50vh] overflow-hidden rounded-2xl bg-black/5 flex items-center justify-center mb-4">
                <button
                  onClick={handlePrev}
                  className="absolute left-2 z-10 bg-black/50 hover:bg-black/80 text-white w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-md"
                  aria-label="Previous Photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <img
                  src={selectedPhoto}
                  alt="Selected Memory"
                  className="max-h-[45vh] w-auto object-contain rounded-xl"
                />

                <button
                  onClick={handleNext}
                  className="absolute right-2 z-10 bg-black/50 hover:bg-black/80 text-white w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all shadow-md"
                  aria-label="Next Photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <a
                href={selectedPhoto}
                download={`darian-birthday-${Date.now()}.jpg`}
                className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-2.5 px-6 rounded-full shadow-md text-sm flex items-center gap-2 transition-all"
              >
                <Download className="w-4 h-4" /> Преземи ја сликата
              </a>
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="pt-10">
          <h3 className="text-xl font-bold text-sky-950 mb-6 flex items-center justify-center gap-2 font-serif">
            <ImageIcon className="w-5 h-5 text-sky-600" /> Галерија на гостите ({photos.length})
          </h3>

          {loadingPhotos ? (
            <div className="flex justify-center py-10">
              <Loader2 className="w-8 h-8 animate-spin text-sky-500" />
            </div>
          ) : photos.length === 0 ? (
            <p className="text-sm text-sky-600/80 italic">Сè уште нема качени слики. Бидете први што ќе споделете момент! ✈️</p>
          ) : (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {displayedPhotos.map((photo, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      setSelectedIndex(idx);
                      setTimeout(() => {
                        previewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                      }, 50);
                    }}
                    className="relative aspect-square rounded-2xl overflow-hidden shadow-md border-2 border-white group animate-fade-in bg-sky-100 cursor-pointer"
                  >
                    <img src={photo} alt="Party memory" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-bold">
                      Кликни за преглед
                    </div>
                  </div>
                ))}
              </div>

              {hasMorePhotos && (
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 10)}
                    className="bg-transparent hover:bg-sky-500/10 text-sky-900 border-2 border-sky-400 font-bold px-8 py-3 rounded-full transition-all shadow-sm text-sm tracking-wide"
                  >
                    Прикажи повеќе ({photos.length - visibleCount} преостанати)
                  </button>
                </div>
              )}
            </>
          )}
        </div>

      </div>
    </section>
  );
}