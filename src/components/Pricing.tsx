import { useState } from 'react';
import { Check, Clock, Calculator, ArrowRight, ShieldCheck } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data/workshopData';
import EstimateCalculatorModal from './EstimateCalculatorModal';

interface PricingProps {
  onSelectPackageForBooking: (packageName: string) => void;
  onApplyCustomEstimate: (details: {
    bikeType: string;
    packageName: string;
    totalEst: number;
    notes: string;
  }) => void;
}

export default function Pricing({ onSelectPackageForBooking, onApplyCustomEstimate }: PricingProps) {
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  return (
    <section id="pricing" className="bg-[#121316] py-16 lg:py-24 border-b border-[#252A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#242832] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#E65100] font-bold mb-2">
              <span className="w-2 h-2 bg-[#E65100]" />
              <span>TRANSPARENT WORKSHOP TARIFFS</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              SERVICE PACKAGES
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <button
              onClick={() => setCalculatorOpen(true)}
              className="bg-[#1B1E26] hover:bg-[#232731] border border-[#3A404E] hover:border-[#E65100] text-white px-4 py-2.5 rounded-sm font-heading font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Calculator className="w-4 h-4 text-[#E65100]" />
              <span>CUSTOM ESTIMATE CALCULATOR</span>
            </button>
          </div>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {SERVICE_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-[#181B22] rounded-sm p-6 sm:p-8 flex flex-col justify-between border transition-all duration-150 ${
                pkg.popular
                  ? 'border-[#E65100] shadow-xl bg-[#1C1F28]'
                  : 'border-[#272B36] hover:border-[#383F4F]'
              }`}
            >
              {/* Badge if Popular */}
              {pkg.badge && (
                <div className="absolute -top-3 right-6 bg-[#E65100] text-white text-[10px] font-heading font-black tracking-widest uppercase px-3 py-1 rounded-none shadow-sm">
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="border-b border-[#252A36] pb-5 mb-5">
                  <h3 className="font-heading text-2xl font-bold uppercase tracking-wide text-white">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-[#8C93A0] mt-1">
                    {pkg.idealFor}
                  </p>

                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="text-xs text-[#8C93A0] uppercase font-mono">Starts from</span>
                    <span className="font-mono text-4xl font-extrabold text-white">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-[#6C7382]">/ bike</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#7F8796] mt-2 font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#E65100]" />
                    <span>Turnaround: {pkg.turnaroundTime}</span>
                  </div>
                </div>

                {/* Inclusions List */}
                <div className="space-y-3 mb-6">
                  <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#A0A8B8] block">
                    PACKAGE INCLUSIONS:
                  </span>
                  <ul className="space-y-2.5 text-xs text-[#C0C6D2]">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#E65100] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-[#252A36] space-y-2">
                <button
                  onClick={() => onSelectPackageForBooking(pkg.name)}
                  className={`w-full py-3 rounded-sm font-heading font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 ${
                    pkg.popular
                      ? 'bg-[#E65100] hover:bg-[#D94418] text-white shadow-md'
                      : 'bg-[#222630] hover:bg-[#2C313E] text-white'
                  }`}
                >
                  <span>BOOK {pkg.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Pricing Clarification Note */}
        <div className="mt-8 p-4 bg-[#16181F] border border-[#272B36] rounded-sm text-xs text-[#8C93A0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E65100] shrink-0" />
            <span>
              Final pricing depends on motorcycle model, displacement (cc), and required replacement parts. Engine oil & spare components are billed at genuine MRP.
            </span>
          </div>
          <button
            onClick={() => setCalculatorOpen(true)}
            className="text-[#E65100] hover:underline font-heading font-bold uppercase tracking-wider text-xs whitespace-nowrap cursor-pointer"
          >
            GET SERVICE ESTIMATE →
          </button>
        </div>

      </div>

      {/* Estimate Calculator Modal */}
      <EstimateCalculatorModal
        isOpen={calculatorOpen}
        onClose={() => setCalculatorOpen(false)}
        onApplyEstimateToBooking={onApplyCustomEstimate}
      />
    </section>
  );
}
