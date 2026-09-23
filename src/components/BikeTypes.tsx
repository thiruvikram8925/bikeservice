import { useState } from 'react';
import { CheckCircle2, ShieldCheck, Wrench, Droplet, ArrowRight } from 'lucide-react';
import { BIKE_CATEGORIES, BRANDS_SERVICED } from '../data/workshopData';

interface BikeTypesProps {
  onSelectCategoryForBooking: (categoryName: string) => void;
}

export default function BikeTypes({ onSelectCategoryForBooking }: BikeTypesProps) {
  const [activeTab, setActiveTab] = useState(BIKE_CATEGORIES[0].id);

  const currentCategory = BIKE_CATEGORIES.find(c => c.id === activeTab) || BIKE_CATEGORIES[0];

  return (
    <section id="bikes" className="bg-[#15171E] py-16 lg:py-24 border-b border-[#252A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#242832] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#E65100] font-bold mb-2">
              <span className="w-2 h-2 bg-[#E65100]" />
              <span>INDEPENDENT MULTI-BRAND TWO-WHEELER SPECIALIST</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              VEHICLES & MARQUES WE SERVICE
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-body text-sm sm:text-base text-[#9CA3AF]">
              From everyday gearless scooters (Activa, Jupiter, Access) to cruisers, high-revving sports bikes, tourers, and electric two-wheelers.
            </p>
            <p className="text-[11px] text-[#6E7585] mt-1 font-mono">
              * Independent service center. Brand names are for identification of technical compatibility only.
            </p>
          </div>
        </div>

        {/* Category Tabs (7 Vehicle Categories) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
          {BIKE_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`py-3 px-2 text-center rounded-sm border transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#1F232D] border-[#E65100] text-white shadow-md'
                    : 'bg-[#181B22] border-[#292E3B] text-[#8C93A0] hover:text-[#C5CCD8] hover:border-[#3A4152]'
                }`}
              >
                <span className="block font-heading text-xs sm:text-sm font-bold tracking-wider uppercase truncate">
                  {cat.name}
                </span>
                <span className="block text-[10px] text-[#717A8C] font-mono mt-0.5">
                  {cat.inspectionPoints} Points
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display Panel */}
        <div className="bg-[#181B22] border border-[#2B303C] rounded-sm p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 bg-[#121418] border border-[#303644] text-xs font-mono text-[#E65100]">
                CATEGORY: {currentCategory.name}
              </span>
              <span className="text-xs text-[#8C93A0]">{currentCategory.tagline}</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
              {currentCategory.name} SERVICE PROTOCOL
            </h3>

            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              {currentCategory.serviceFocus}
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-2.5 text-xs text-[#C2C8D4]">
                <Droplet className="w-4 h-4 text-[#E65100] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8C93A0] block">Recommended Fluid & Oil Spec:</span>
                  <span className="font-semibold text-white">{currentCategory.recommendedEngineOil}</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 text-xs text-[#C2C8D4]">
                <Wrench className="w-4 h-4 text-[#E65100] shrink-0 mt-0.5" />
                <div>
                  <span className="text-[#8C93A0] block">Frequently Handled Models in Guindy Workshop:</span>
                  <span className="font-medium text-white">{currentCategory.popularModels.join(" · ")}</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onSelectCategoryForBooking(currentCategory.name)}
                className="bg-[#E65100] hover:bg-[#D94418] text-white px-5 py-2.5 rounded-sm font-heading font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
              >
                <span>BOOK {currentCategory.name} SERVICE</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#121418] border border-[#252933] rounded-sm p-4 space-y-4">
            {/* Category Photorealistic Bike Image Card */}
            <div className="relative rounded-sm overflow-hidden border border-[#2B303C] group shadow-lg">
              <img
                src={currentCategory.id === 'cruiser-retro' || currentCategory.id === 'sport-touring' ? "/images/retro_cruiser_bike.jpg" : "/images/motorcycle_bikes_showcase.jpg"}
                alt={`${currentCategory.name} bike service at Ironwheel`}
                className="w-full h-44 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-black/30 pointer-events-none" />
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-xs text-white bg-black/85 backdrop-blur-sm px-2.5 py-1.5 border border-[#2F3542]">
                <span className="font-heading text-xs font-bold uppercase text-[#E65100]">
                  {currentCategory.name} PROTOCOL
                </span>
                <span className="font-mono text-[10px] text-[#A8B0BE]">{currentCategory.inspectionPoints} POINTS CHECK</span>
              </div>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-[#242730]">
              <span className="font-heading text-xs uppercase tracking-wider text-[#A0A8B8] font-bold">
                Specialized Workshop Tools Assigned
              </span>
              <span className="font-mono text-xs text-[#E65100]">CALIBRATED</span>
            </div>

            <ul className="space-y-2 text-xs text-[#9CA3AF]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E65100]" />
                <span>OEM Specific flywheel pullers & variator holding tools</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E65100]" />
                <span>Digital laser chain & belt alignment jig</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E65100]" />
                <span>OBD-II Multi-Protocol scanner for electronic error clearing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E65100]" />
                <span>Hydraulic tyre bead-breaker & dynamic wheel balancer</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-[#242730] flex items-center justify-between text-[11px] text-[#717A8C]">
              <span>Inspection Standard:</span>
              <span className="text-white font-mono font-semibold">ISO 9001 Garage Checkpoints</span>
            </div>
          </div>

        </div>

        {/* Brands Supported Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-[#7E8796]">
              SUPPORTED TWO-WHEELER MARQUES & BRANDS
            </h4>
            <span className="text-xs text-[#596170] font-mono">100% GENUINE OEM SPARE SOURCING</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {BRANDS_SERVICED.map((b, idx) => (
              <div
                key={idx}
                onClick={() => onSelectCategoryForBooking(`${b.name} (${b.tag})`)}
                className="bg-[#181B22] border border-[#272B36] p-3.5 rounded-sm hover:border-[#E65100]/60 transition-colors cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-heading text-base font-bold text-white uppercase tracking-wide group-hover:text-[#E65100] transition-colors">
                    {b.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#E65100] bg-[#241A14] px-1.5 py-0.5 border border-[#E65100]/30 rounded-xs">
                    {b.tag}
                  </span>
                </div>
                <p className="text-[11px] text-[#7C8594] line-clamp-2">
                  {b.models}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

