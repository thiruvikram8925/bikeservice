import { useState } from 'react';
import { Tag, Check, Copy, Truck, ShieldCheck, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { WORKSHOP_OFFERS, BUSINESS_INFO } from '../data/workshopData';

interface SpecialOffersProps {
  onApplyOffer: (code: string) => void;
  onBookPickup: () => void;
}

export default function SpecialOffers({ onApplyOffer, onBookPickup }: SpecialOffersProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    onApplyOffer(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2500);
  };

  return (
    <section id="offers" className="bg-[#15171D] py-16 lg:py-24 border-b border-[#252A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#242832] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#E65100] font-bold mb-2">
              <span className="w-2 h-2 bg-[#E65100]" />
              <span>CURRENT DISCOUNTS & RIDER BENEFITS</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              OFFERS & CONVENIENCE
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[#9CA3AF] max-w-md">
            Exclusive workshop deals, seasonal health camps, and doorstep pickup facilities designed to give you peak mechanical care with zero hassle.
          </p>
        </div>

        {/* 4 Active Offer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {WORKSHOP_OFFERS.map((offer) => {
            const isCopied = copiedCode === offer.code;
            return (
              <div
                key={offer.id}
                className="bg-[#181B22] border border-[#2B303C] hover:border-[#E65100]/60 rounded-sm p-5 flex flex-col justify-between transition-colors relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#E65100]/15 text-[#E65100] border border-[#E65100]/30 font-bold">
                      {offer.tag}
                    </span>
                    <span className="text-xs font-mono text-[#7E8796]">
                      {offer.validUntil}
                    </span>
                  </div>

                  <div className="font-heading text-2xl font-extrabold text-white tracking-tight mb-1 text-[#E65100]">
                    {offer.discount}
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white uppercase tracking-wide mb-2 group-hover:text-[#E65100] transition-colors">
                    {offer.title}
                  </h3>

                  <p className="text-xs text-[#8C93A0] leading-relaxed mb-4">
                    {offer.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#232731] flex items-center justify-between gap-2">
                  <div className="font-mono text-xs font-bold text-[#D0D6E2] bg-[#121418] px-2.5 py-1.5 border border-[#303644] rounded-sm select-all">
                    CODE: {offer.code}
                  </div>

                  <button
                    onClick={() => handleCopy(offer.code)}
                    className="flex items-center gap-1 text-xs font-heading font-bold uppercase tracking-wider px-3 py-1.5 bg-[#1F232C] hover:bg-[#E65100] text-white hover:text-white border border-[#384050] hover:border-[#E65100] rounded-sm transition-colors cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>APPLIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>APPLY</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Doorstep Pickup & Drop Feature Banner */}
        <div className="bg-[#181B22] border-2 border-[#E65100]/40 rounded-sm p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E65100]/5 blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#231A14] border border-[#E65100]/40 text-[#E65100] text-xs font-mono uppercase tracking-wider font-bold">
                <Truck className="w-4 h-4" />
                <span>DOORSTEP PICKUP & RETURN DELIVERY FACILITY</span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase text-white tracking-tight">
                TOO BUSY TO VISIT THE GARAGE? WE COLLECT FROM YOUR DOORSTEP.
              </h3>

              <p className="font-body text-sm sm:text-base text-[#A4ABB8] leading-relaxed max-w-2xl">
                We safely collect your motorcycle or scooter from your home or workplace anywhere in Chennai, transport it using hydraulic ramps and soft-loop straps, perform the required service, and deliver it back smooth, clean, and road-ready.
              </p>

              {/* Specs & Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-[#121418] border border-[#2B303C] p-3 rounded-sm">
                  <div className="text-xs text-[#7E8796] uppercase font-mono">Service Radius</div>
                  <div className="text-sm font-heading font-bold text-white uppercase mt-0.5">
                    {BUSINESS_INFO.pickupDrop.radius}
                  </div>
                </div>

                <div className="bg-[#121418] border border-[#2B303C] p-3 rounded-sm">
                  <div className="text-xs text-[#7E8796] uppercase font-mono">Pricing Policy</div>
                  <div className="text-sm font-heading font-bold text-emerald-400 uppercase mt-0.5">
                    FREE on Complete Service
                  </div>
                </div>

                <div className="bg-[#121418] border border-[#2B303C] p-3 rounded-sm">
                  <div className="text-xs text-[#7E8796] uppercase font-mono">Transit Safety</div>
                  <div className="text-sm font-heading font-bold text-white uppercase mt-0.5">
                    Soft-Tie Ratchets & Video Intake
                  </div>
                </div>
              </div>

              {/* Coverage areas tag list */}
              <div className="pt-2">
                <div className="flex items-center gap-1.5 text-xs text-[#8C93A0] mb-2 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-[#E65100]" />
                  <span>Doorstep Service Available in:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {BUSINESS_INFO.pickupDrop.coverageAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-[#121418] border border-[#2B303C] text-[11px] font-mono text-[#B0B7C4]"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Action CTA Box */}
            <div className="lg:col-span-4 bg-[#121418] border border-[#303644] p-6 rounded-sm space-y-4 text-center">
              <div className="w-12 h-12 mx-auto rounded bg-[#1B1E26] border border-[#3C4454] flex items-center justify-center text-[#E65100]">
                <Truck className="w-6 h-6" />
              </div>

              <h4 className="font-heading text-lg font-bold uppercase text-white">
                REQUEST DOORSTEP PICKUP
              </h4>

              <p className="text-xs text-[#8C93A0]">
                Select the "Doorstep Pickup & Drop" option during booking or chat with us on WhatsApp to lock your pickup time slot.
              </p>

              <button
                onClick={onBookPickup}
                className="w-full bg-[#E65100] hover:bg-[#D94418] text-white py-3 rounded-sm font-heading font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2"
              >
                <span>BOOK DOORSTEP PICKUP</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block bg-[#1E232C] hover:bg-[#282F3B] text-[#C2C9D6] hover:text-white border border-[#384050] py-2.5 rounded-sm text-xs font-semibold transition-colors"
              >
                Direct WhatsApp Pickup Request
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
