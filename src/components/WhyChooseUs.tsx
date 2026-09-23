import { BUSINESS_INFO } from '../data/workshopData';
import { ShieldCheck, Award, MessageSquare, Wrench } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#E65100]" />,
      title: "Genuine Parts Guarantee",
      desc: "Every oil filter, brake shoe, clutch friction plate, and gasket is sourced from authorized OEM parts channels."
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#E65100]" />,
      title: "Digital Job Card & WhatsApp Snaps",
      desc: "Receive clear photos and video clips of old worn-out components directly on WhatsApp before any replacement happens."
    },
    {
      icon: <Wrench className="w-5 h-5 text-[#E65100]" />,
      title: "Calibrated Torque Specs",
      desc: "No overtightened stripped threads. We torque engine studs, axle bolts, and chassis mounts strictly to OEM workshop manuals."
    },
    {
      icon: <Award className="w-5 h-5 text-[#E65100]" />,
      title: "Complimentary Road Testing",
      desc: "Before you pay the final bill, our senior technician road tests your motorcycle through braking, acceleration, and handling cycles."
    }
  ];

  return (
    <section className="bg-[#15171E] py-16 lg:py-24 border-b border-[#252A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#E65100] font-bold mb-2">
            <span className="w-2 h-2 bg-[#E65100]" />
            <span>MEASURABLE WORKSHOP RECORD</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            WHY RIDERS CHOOSE IRONWHEEL
          </h2>
          <p className="font-body text-base text-[#9CA3AF] mt-3">
            Over a decade of turning wrenches on commuter bikes, retro singles, track bikes, and heavy cruisers in Chennai with honest advice and zero fluff.
          </p>
        </div>

        {/* 4 Large Mechanical Number Metric Tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {BUSINESS_INFO.stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#181B22] border border-[#2B303C] p-6 rounded-sm relative overflow-hidden"
            >
              {/* Subtle Corner Notch Indicator */}
              <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
                <div className="absolute transform rotate-45 bg-[#252A36] text-[8px] font-mono text-[#8C93A0] w-12 text-center -top-1 -right-4 py-0.5">
                  IW
                </div>
              </div>

              <span className="font-mono text-4xl sm:text-5xl lg:text-6xl font-black text-white tabular-nums tracking-tight">
                {stat.value}
              </span>
              <div className="mt-2 pt-2 border-t border-[#252A36]">
                <h3 className="font-heading text-base font-bold uppercase tracking-wider text-[#D1D5DB]">
                  {stat.label}
                </h3>
                <span className="text-xs text-[#E65100] font-mono block mt-0.5">
                  {stat.unit}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Pillars of Workshop Trust */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#181B22] border border-[#272B36] p-5 rounded-sm hover:border-[#383F4F] transition-colors"
            >
              <div className="w-10 h-10 rounded-sm bg-[#121418] border border-[#2B313E] flex items-center justify-center mb-3">
                {pillar.icon}
              </div>
              <h4 className="font-heading text-lg font-bold uppercase tracking-wide text-white mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs text-[#8C93A0] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
