import { CalendarCheck, Search, Wrench, ShieldCheck, Bike, ArrowRight } from 'lucide-react';
import { SERVICE_STEPS } from '../data/workshopData';

interface ServiceProcessProps {
  onBookClick: () => void;
}

export default function ServiceProcess({ onBookClick }: ServiceProcessProps) {
  const getStepIcon = (idx: number) => {
    switch (idx) {
      case 0: return <CalendarCheck className="w-5 h-5 text-[#E65100]" />;
      case 1: return <Search className="w-5 h-5 text-[#E65100]" />;
      case 2: return <Wrench className="w-5 h-5 text-[#E65100]" />;
      case 3: return <ShieldCheck className="w-5 h-5 text-[#E65100]" />;
      case 4: return <Bike className="w-5 h-5 text-[#E65100]" />;
      default: return <Wrench className="w-5 h-5 text-[#E65100]" />;
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
              <span>CLEAR OPERATIONAL TIMELINE</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
              HOW IT WORKS
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[#9CA3AF] max-w-md">
            No endless waiting or ambiguous estimates. We follow a structured five-step turnaround from drop-off to key handover.
          </p>
        </div>

        {/* 5-Step Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {SERVICE_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="bg-[#181B22] border border-[#272B36] p-5 rounded-sm flex flex-col justify-between hover:border-[#E65100]/60 transition-colors group"
            >
              <div>
                {/* Step Mechanical Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-3xl font-black text-[#E65100]/70 group-hover:text-[#E65100] transition-colors">
                    {step.step}
                  </span>
                  <div className="w-9 h-9 rounded-sm bg-[#121418] border border-[#2B303C] flex items-center justify-center">
                    {getStepIcon(idx)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-[#8C93A0] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Progress Notch */}
              <div className="pt-4 mt-4 border-t border-[#232731] flex items-center justify-between text-[11px] font-mono text-[#677080]">
                <span>STAGE {idx + 1} OF 5</span>
                <span className="text-[#A4ABB8] font-semibold">VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Callout */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-[#1B1E26] border border-[#2B303C] rounded-sm">
          <div>
            <h4 className="font-heading text-lg font-bold uppercase text-white tracking-wide">
              Ready to schedule your motorcycle's next service?
            </h4>
            <p className="text-xs text-[#9CA3AF] mt-0.5">
              Select a preferred time slot or drop by our Guindy workshop for a free preliminary evaluation.
            </p>
          </div>

          <button
            onClick={onBookClick}
            className="bg-[#E65100] hover:bg-[#D94418] text-white px-6 py-2.5 rounded-sm font-heading font-bold text-sm uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
          >
            <span>BOOK SERVICE ONLINE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
