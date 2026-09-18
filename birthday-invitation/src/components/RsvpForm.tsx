import React, { useState } from 'react';
import { User, Heart, Users, Utensils, Send, CheckCircle2 } from 'lucide-react';

export default function RsvpForm({ t }: { t: any }) {
  const [formData, setFormData] = useState({
    name: '',
    guestCount: 1,
    attending: 'yes',
    dietaryNotes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (name === 'attending') {
      setFormData(prev => ({
        ...prev,
        attending: value,
        guestCount: value === 'no' ? 0 : (prev.guestCount === 0 ? 1 : prev.guestCount),
      }));
      return;
    }

    const isGuestCount = name === 'guestCount';
    setFormData(prev => ({
      ...prev,
      [name]: isGuestCount ? parseInt(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE:
    const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyNS6GX8-5Ou3JrWEKOPZafmH-KH6ccit41c1v9fRr9Yrzgg-6X4N4qlrmmC9dVStl-/exec';

    const finalData = {
      ...formData,
      guestCount: formData.attending === 'yes' ? formData.guestCount : 0
    };

    try {
      await fetch(WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(finalData),
      });

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError(t.errorText);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url('/images/rsvp_background.png')` }}
    >
      <div className="absolute inset-0 bg-sky-950/40 backdrop-blur-[2px] pointer-events-none"></div>

      <div className="relative z-10 max-w-xl mx-auto">
        <div className="text-center mb-10 text-white">
          <h2 className="text-3xl font-extrabold mb-2 font-serif drop-shadow-md">{t.rsvpTitle}</h2>
          <p className="text-sky-100 text-sm drop-shadow-md font-medium">{t.rsvpSubtitle}</p>
        </div>

        {submitted ? (
          <div className="p-10 rounded-[2.5rem] bg-emerald-900/90 backdrop-blur-md border border-emerald-400 text-center space-y-4 shadow-2xl text-white">
            <div className="w-16 h-16 bg-emerald-500 text-white rounded-3xl mx-auto flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-serif">{t.successTitle}</h3>
            <p className="text-emerald-100 text-sm max-w-sm mx-auto">{t.successDesc}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 bg-white/95 backdrop-blur-xl p-8 sm:p-10 rounded-[2.5rem] border border-white/60 shadow-2xl">
            <div>
              <label className="block text-xs uppercase tracking-wider text-sky-900 mb-2 font-extrabold flex items-center gap-1.5">
                <User className="w-4 h-4 text-sky-600" /> {t.nameLabel}
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder={t.namePlaceholder}
                className="w-full bg-sky-50/50 border border-sky-200 rounded-2xl px-4 py-3.5 text-sky-950 focus:outline-none focus:border-sky-500 font-medium"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-sky-900 mb-2 font-extrabold flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-sky-600" /> {t.attendingLabel}
                </label>
                <select
                  name="attending"
                  value={formData.attending}
                  onChange={handleChange}
                  className={`w-full border rounded-2xl px-4 py-3.5 focus:outline-none cursor-pointer font-bold transition-colors ${
                    formData.attending === 'yes'
                      ? 'bg-emerald-50/90 border-emerald-300 text-emerald-950 focus:border-emerald-500'
                      : 'bg-rose-50/90 border-rose-300 text-rose-950 focus:border-rose-500'
                  }`}
                >
                  <option value="yes" className="bg-white text-emerald-900">{t.accept}</option>
                  <option value="no" className="bg-white text-rose-900">{t.decline}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-sky-900 mb-2 font-extrabold flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-sky-600" /> {t.guestsLabel}
                </label>
                <input
                  type="number"
                  name="guestCount"
                  min={formData.attending === 'no' ? 0 : 1}
                  max="10"
                  disabled={formData.attending === 'no'}
                  value={formData.guestCount}
                  onChange={handleChange}
                  className={`w-full border rounded-2xl px-4 py-3.5 focus:outline-none font-medium ${
                    formData.attending === 'no'
                      ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                      : 'bg-sky-50/50 border-sky-200 text-sky-950 focus:border-sky-500'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-sky-900 mb-2 font-extrabold flex items-center gap-1.5">
                <Utensils className="w-4 h-4 text-sky-600" /> {t.dietaryLabel}
              </label>
              <textarea
                name="dietaryNotes"
                rows={3}
                value={formData.dietaryNotes}
                onChange={handleChange}
                placeholder={t.dietaryPlaceholder}
                className="w-full bg-sky-50/50 border border-sky-200 rounded-2xl px-4 py-3.5 text-sky-950 focus:outline-none focus:border-sky-500 resize-none font-medium"
              ></textarea>
            </div>

            {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4.5 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold rounded-2xl tracking-wider uppercase text-sm transition-all shadow-xl shadow-sky-600/30 cursor-pointer mt-2 flex items-center justify-center gap-2"
            >
              <span>{loading ? t.submittingBtn : t.submitBtn}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}