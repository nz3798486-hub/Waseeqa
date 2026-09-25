import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-slate-950/95 border-t border-slate-800/90 px-3 py-2 backdrop-blur-lg flex items-center justify-between gap-2 shadow-2xl h-14">
      <a
        href="tel:+923401266879"
        className="flex-1 flex items-center justify-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 py-2.5 text-xs font-bold text-slate-100 active:bg-slate-800 transition-colors whitespace-nowrap min-h-[44px]"
      >
        <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
        <span>Call Now</span>
      </a>

      <a
        href="https://wa.me/923401266879?text=Assalam-o-Alaikum,%20I%20want%20information%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 py-2.5 text-xs font-bold text-white shadow-sm active:from-blue-700 active:to-blue-800 transition-colors whitespace-nowrap min-h-[44px]"
      >
        <MessageCircle className="h-4 w-4 text-amber-300 shrink-0" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
