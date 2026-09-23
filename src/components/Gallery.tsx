import { useState } from 'react';
import { Eye, X, Wrench, ChevronRight, Layers } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/workshopData';
import { GalleryItem } from '../types';

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  // High detail graphic placeholders crafted specifically with mechanical technical schemas
  const getBayGraphic = (id: string) => {
    switch (id) {
      case 'bay-1':
        return (
          <div className="w-full h-48 bg-[#121418] relative overflow-hidden border-b border-[#242832] group">
            <img
              src="/images/retro_cruiser_bike.jpg"
              alt="Hydraulic Service Bay & Lift Station"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-black/30 pointer-events-none" />
            <div className="absolute top-2 left-2 text-[9px] font-mono text-[#E65100] bg-[#121418]/90 backdrop-blur-sm px-2 py-0.5 border border-[#E65100]/50 font-bold">
              HYDRAULIC LIFT BAY #1
            </div>
            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white bg-black/80 backdrop-blur-sm px-2 py-0.5 border border-[#2B303C]">
              ACTIVE RE SERVICE
            </div>
          </div>
        );
      case 'engine-bench':
        return (
          <div className="w-full h-48 bg-[#121418] flex items-center justify-center p-4 relative overflow-hidden border-b border-[#242832]">
            <svg viewBox="0 0 200 120" className="w-full h-full stroke-[#5A6375]" fill="none" strokeWidth="1.5">
              {/* Cylinder head and valve train cross section */}
              <rect x="50" y="30" width="100" height="60" rx="3" stroke="#8C93A0" strokeWidth="2" fill="#181B22" />
              <circle cx="80" cy="55" r="16" stroke="#E65100" strokeWidth="1.5" />
              <circle cx="120" cy="55" r="16" stroke="#E65100" strokeWidth="1.5" />
              <line x1="50" y1="42" x2="150" y2="42" stroke="#3D4554" />
              <line x1="50" y1="52" x2="150" y2="52" stroke="#3D4554" />
              <line x1="50" y1="62" x2="150" y2="62" stroke="#3D4554" />
              <line x1="80" y1="30" x2="80" y2="90" stroke="#E65100" strokeDasharray="2 2" />
              <line x1="120" y1="30" x2="120" y2="90" stroke="#E65100" strokeDasharray="2 2" />
              <text x="65" y="105" fill="#A0A8B8" fontSize="8" fontFamily="monospace">VALVE LAPPING BENCH</text>
            </svg>
            <div className="absolute top-2 left-2 text-[9px] font-mono text-[#8C93A0] bg-[#1B1E26] px-1.5 py-0.5 border border-[#2B303C]">
              TOLERANCE: 0.02mm
            </div>
          </div>
        );
      case 'tool-wall':
        return (
          <div className="w-full h-48 bg-[#121418] flex items-center justify-center p-4 relative overflow-hidden border-b border-[#242832]">
            <svg viewBox="0 0 200 120" className="w-full h-full stroke-[#4E5666]" fill="none" strokeWidth="1.5">
              {/* Pegboard Shadow Board with Tools */}
              <rect x="20" y="15" width="160" height="90" stroke="#2B303C" strokeDasharray="4 4" />
              {/* Spanners in Order */}
              <line x1="35" y1="25" x2="35" y2="85" stroke="#E65100" strokeWidth="3" />
              <line x1="50" y1="28" x2="50" y2="85" stroke="#D1D5DB" strokeWidth="2.5" />
              <line x1="65" y1="32" x2="65" y2="85" stroke="#D1D5DB" strokeWidth="2" />
              <line x1="80" y1="36" x2="80" y2="85" stroke="#D1D5DB" strokeWidth="2" />
              <line x1="95" y1="40" x2="95" y2="85" stroke="#D1D5DB" strokeWidth="1.5" />
              {/* Torque Wrench */}
              <rect x="115" y="30" width="50" height="8" rx="2" stroke="#8C93A0" fill="#2E3442" />
              <line x1="115" y1="34" x2="160" y2="34" stroke="#E65100" strokeWidth="2" />
              <circle cx="160" cy="34" r="5" stroke="#8C93A0" fill="#181B22" />
              <text x="65" y="102" fill="#8C93A0" fontSize="8" fontFamily="monospace">SHADOW BOARD A-1</text>
            </svg>
            <div className="absolute top-2 left-2 text-[9px] font-mono text-[#8C93A0] bg-[#1B1E26] px-1.5 py-0.5 border border-[#2B303C]">
              GEDORE & NORBAR
            </div>
          </div>
        );
      case 'brake-lathe':
        return (
          <div className="w-full h-48 bg-[#121418] flex items-center justify-center p-4 relative overflow-hidden border-b border-[#242832]">
            <svg viewBox="0 0 200 120" className="w-full h-full stroke-[#4E5666]" fill="none" strokeWidth="1.5">
              {/* Disc Brake Rotor and Caliper Detail */}
              <circle cx="100" cy="60" r="42" stroke="#8C93A0" strokeWidth="2.5" />
              <circle cx="100" cy="60" r="28" stroke="#484F5D" strokeDasharray="3 3" />
              <circle cx="100" cy="60" r="14" stroke="#E65100" strokeWidth="2" />
              {/* Caliper Piston assembly */}
              <rect x="125" y="35" width="35" height="30" rx="3" stroke="#E65100" strokeWidth="2" fill="#242934" />
              <line x1="135" y1="35" x2="135" y2="65" stroke="#A0A8B8" />
              <circle cx="145" cy="50" r="5" fill="#E65100" />
              <text x="50" y="112" fill="#A0A8B8" fontSize="8" fontFamily="monospace">DOT 4 VACUUM PURGE</text>
            </svg>
            <div className="absolute top-2 left-2 text-[9px] font-mono text-[#8C93A0] bg-[#1B1E26] px-1.5 py-0.5 border border-[#2B303C]">
              RUNOUT &lt;0.03MM
            </div>
          </div>
        );
      case 'tyre-station':
        return (
          <div className="w-full h-48 bg-[#121418] flex items-center justify-center p-4 relative overflow-hidden border-b border-[#242832]">
            <svg viewBox="0 0 200 120" className="w-full h-full stroke-[#4E5666]" fill="none" strokeWidth="1.5">
              {/* Dynamic Wheel Balancer Display */}
              <circle cx="100" cy="55" r="38" stroke="#8C93A0" strokeWidth="3" />
              <circle cx="100" cy="55" r="20" stroke="#E65100" strokeWidth="2" />
              <line x1="100" y1="17" x2="100" y2="93" stroke="#3D4452" />
              <line x1="62" y1="55" x2="138" y2="55" stroke="#3D4452" />
              <rect x="30" y="96" width="140" height="14" rx="2" stroke="#2B303C" fill="#1C2028" />
              <text x="65" y="106" fill="#E65100" fontSize="8" fontFamily="monospace">STATIC: 0g | DYN: 0g</text>
            </svg>
            <div className="absolute top-2 left-2 text-[9px] font-mono text-[#8C93A0] bg-[#1B1E26] px-1.5 py-0.5 border border-[#2B303C]">
              RIM-CLAMP MOUNT
            </div>
          </div>
        );
      case 'delivery-bay':
      default:
        return (
          <div className="w-full h-48 bg-[#121418] relative overflow-hidden border-b border-[#242832] group">
            <img
              src="/images/motorcycle_bikes_showcase.jpg"
              alt="Final Inspection & Customer Handover Bay"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-black/30 pointer-events-none" />
            <div className="absolute top-2 left-2 text-[9px] font-mono text-emerald-400 bg-[#121E18]/90 backdrop-blur-sm px-2 py-0.5 border border-emerald-800 font-bold">
              QC APPROVED & HANDOVER
            </div>
            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white bg-black/80 backdrop-blur-sm px-2 py-0.5 border border-[#2B303C]">
              MULTIPLE MARQUES READY
            </div>
          </div>
        );
    }
  };

  return (
    <section className="bg-[#15171E] py-16 lg:py-24 border-b border-[#252A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#242832] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#E65100] font-bold mb-2">
              <span className="w-2 h-2 bg-[#E65100]" />
              <span>SHOP FLOOR & TOOLING INFRASTRUCTURE</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              WORKSHOP GALLERY
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[#9CA3AF] max-w-md">
            Take a look inside our Guindy service facility. Purpose-built motorcycle lifts, calibrated instruments, and dedicated mechanical stations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-[#181B22] border border-[#272B36] rounded-sm overflow-hidden hover:border-[#E65100]/60 transition-all duration-150 group cursor-pointer flex flex-col justify-between"
              onClick={() => setSelectedPhoto(item)}
            >
              <div>
                {/* Visual Bay Graphic */}
                {getBayGraphic(item.id)}

                {/* Details */}
                <div className="p-5">
                  <div className="flex items-center justify-between text-[11px] text-[#7E8796] mb-1">
                    <span className="font-mono text-[#E65100] uppercase font-semibold">{item.category}</span>
                    <span className="flex items-center gap-1 group-hover:text-white transition-colors">
                      <Eye className="w-3.5 h-3.5" />
                      View Bay
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-white group-hover:text-[#E65100] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[#8C93A0] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Specs Bar */}
              <div className="px-5 py-3 bg-[#13151A] border-t border-[#232731] text-[11px] font-mono text-[#A4ABB8] flex items-center justify-between">
                <span>{item.specs}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#5B6373] group-hover:text-[#E65100]" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-2xl bg-[#181B22] border border-[#3A404E] rounded-sm shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#14161C] border-b border-[#252A36] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#E65100]" />
                <span className="font-heading text-xs uppercase tracking-wider text-[#A0A8B8]">
                  {selectedPhoto.category} · GUINDY WORKSHOP
                </span>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 text-[#8C93A0] hover:text-white rounded-sm hover:bg-[#252A36] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Graphic Display */}
            <div className="p-6 bg-[#121418]">
              {getBayGraphic(selectedPhoto.id)}
            </div>

            {/* Details */}
            <div className="p-6 space-y-3">
              <h4 className="font-heading text-2xl font-bold uppercase text-white">
                {selectedPhoto.title}
              </h4>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                {selectedPhoto.description}
              </p>

              <div className="p-3 bg-[#14161C] border border-[#252A36] rounded-sm text-xs font-mono text-[#D1D5DB] flex items-center justify-between">
                <span>Technical Specifications:</span>
                <span className="text-[#E65100] font-bold">{selectedPhoto.specs}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3.5 bg-[#14161C] border-t border-[#252A36] flex justify-end">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="px-5 py-2 bg-[#252A36] hover:bg-[#323846] text-white text-xs font-heading font-semibold uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
              >
                Close View
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
