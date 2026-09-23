import { PhoneCall, Navigation, AlertTriangle, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/workshopData';

export default function EmergencyCTA() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('24 Industrial Estate Road Guindy Chennai 600032')}`;

  return (
    <section className="bg-[#0E0F12] border-y border-[#292E3B] py-14 relative overflow-hidden">
      {/* Industrial Accent Hatching */}
      <div className="absolute inset-0 bg-steel-stripes opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#181B24] border-2 border-[#E65100]/60 rounded-sm p-6 sm:p-10 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E65100] font-bold">
              <AlertTriangle className="w-4 h-4 text-[#E65100]" />
              <span>ROADSIDE ASSISTANCE & FLATBED PICKUP IN CHENNAI</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
              BIKE NOT STARTING?
            </h2>

            <p className="font-body text-base text-[#BAC2CF] leading-relaxed">
              Need roadside assistance, battery jump-start, or urgent workshop support? Our mobile mechanic van is stationed in Guindy and covers a 10 km radius across Chennai.
            </p>

            <div className="flex items-center gap-4 text-xs text-[#8C93A0] pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#E65100]" />
                Average response time: 20-35 mins
              </span>
              <span>·</span>
              <span>Flatbed pickup available</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="bg-[#E65100] hover:bg-[#D94418] text-white px-6 py-4 rounded-sm font-heading font-bold text-base uppercase tracking-wider flex items-center justify-center gap-2.5 transition-colors shadow-lg cursor-pointer whitespace-nowrap"
            >
              <PhoneCall className="w-5 h-5" />
              <span>CALL WORKSHOP: {BUSINESS_INFO.phone}</span>
            </a>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#14161C] hover:bg-[#1F232B] text-white border border-[#3A404E] hover:border-[#E65100] px-6 py-4 rounded-sm font-heading font-semibold text-base uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
            >
              <Navigation className="w-4 h-4 text-[#E65100]" />
              <span>GET DIRECTIONS</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
