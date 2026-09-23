import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/workshopData';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2">
      {/* Informative Tooltip */}
      {showTooltip && (
        <div className="bg-[#181B22] border border-[#2F3542] text-white p-3 rounded-sm shadow-2xl max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-[#7E8796] hover:text-white p-0.5 cursor-pointer"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-emerald-400">
              GARAGE ADVISOR ONLINE
            </span>
          </div>
          <p className="text-xs text-[#BAC2CF]">
            Need quick quote, scooter service, or doorstep breakdown pickup?
          </p>
          <span className="text-[11px] font-mono text-[#E65100] mt-1 block">
            WhatsApp: {BUSINESS_INFO.whatsapp}
          </span>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={BUSINESS_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-3 rounded-full shadow-2xl border-2 border-emerald-400/40 hover:border-emerald-300 transition-all duration-200 transform hover:scale-105"
        aria-label="Chat with Ironwheel Motor Works on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="font-heading text-xs font-bold uppercase tracking-wider hidden sm:inline whitespace-nowrap">
          CHAT ON WHATSAPP
        </span>
      </a>
    </div>
  );
}
