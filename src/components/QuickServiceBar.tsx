import { Wrench, Droplets, Disc, CircleDot, Zap, ClipboardCheck, ArrowUpRight } from 'lucide-react';
import { QUICK_SERVICES } from '../data/workshopData';

interface QuickServiceBarProps {
  onSelectService: (serviceId: string) => void;
}

export default function QuickServiceBar({ onSelectService }: QuickServiceBarProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#E65100]" />;
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-[#E65100]" />;
      case 'Disc':
        return <Disc className="w-5 h-5 text-[#E65100]" />;
      case 'CircleDot':
        return <CircleDot className="w-5 h-5 text-[#E65100]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#E65100]" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-5 h-5 text-[#E65100]" />;
      default:
        return <Wrench className="w-5 h-5 text-[#E65100]" />;
    }
  };

  return (
    <section className="bg-[#16181F] border-b border-[#252A36] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-4 bg-[#E65100] inline-block" />
            <h2 className="font-heading text-sm font-bold uppercase tracking-widest text-[#A0A8B8]">
              QUICK SERVICE SHORTCUTS & COMMON REPAIRS
            </h2>
          </div>
          <span className="text-xs text-[#717A8C] font-mono hidden md:inline">
            SAME-DAY DIAGNOSTICS & FAST TRACK LANES
          </span>
        </div>

        {/* 6 Quick Service Panels */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {QUICK_SERVICES.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelectService(item.id)}
              className="group text-left p-3.5 bg-[#1B1E26] hover:bg-[#222631] border border-[#2B313E] hover:border-[#E65100]/60 rounded-sm transition-all duration-150 flex flex-col justify-between cursor-pointer"
            >
              <div className="flex items-center justify-between w-full mb-3">
                <div className="p-2 bg-[#13151A] rounded-sm border border-[#272C38] group-hover:border-[#E65100]/40 transition-colors">
                  {getIcon(item.icon)}
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#5D6575] group-hover:text-[#E65100] transition-colors" />
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white uppercase tracking-wide group-hover:text-[#E65100] transition-colors">
                  {item.label}
                </h3>
                <p className="text-[11px] text-[#8C93A0] line-clamp-1 mt-0.5">
                  {item.desc}
                </p>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
