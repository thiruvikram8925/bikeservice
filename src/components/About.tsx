import { ShieldCheck, Award, HeartHandshake, Wrench, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/workshopData';

export default function About() {
  const pillars = [
    {
      title: "Experience",
      desc: "Founded by motorcycle enthusiasts with over a decade of hands-on mechanical wrenching across Chennai's varied riding conditions.",
      icon: <Award className="w-5 h-5 text-[#E65100]" />
    },
    {
      title: "Technical Expertise",
      desc: "Deep diagnostic understanding of modern EFI systems, valve gear geometry, inverted suspension damping, and ABS hydraulic blocks.",
      icon: <Wrench className="w-5 h-5 text-[#E65100]" />
    },
    {
      title: "Transparent Service",
      desc: "Clear upfront estimates, digital photo job cards, and zero hidden line items. You always see the old removed parts in your handover box.",
      icon: <ShieldCheck className="w-5 h-5 text-[#E65100]" />
    },
    {
      title: "Customer First",
      desc: "Whether you ride a 110cc commuter to work or tour the Himalayas on a 650 twin, your machine receives equal care and thorough road testing.",
      icon: <HeartHandshake className="w-5 h-5 text-[#E65100]" />
    }
  ];

  return (
    <section id="about" className="bg-[#121316] py-16 lg:py-24 border-b border-[#252A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Core Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#E65100] font-bold">
              <span className="w-2 h-2 bg-[#E65100]" />
              <span>THE IRONWHEEL ETHOS</span>
            </div>

            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              BUILT AROUND THE WAY YOU RIDE.
            </h2>

            <p className="font-body text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
              <strong className="text-white font-medium">IRONWHEEL MOTOR WORKS</strong> is a multi-brand motorcycle service workshop focused on reliable maintenance, honest recommendations, and careful workmanship. Located in Guindy, Chennai, we opened our bay doors with a clear mission: provide honest, engineering-grade motorcycle care without dealership inflated bills or roadside guesswork.
            </p>

            <p className="text-sm text-[#8C93A0] leading-relaxed">
              Every motorcycle is someone's daily commute, weekend freedom, or pride and joy. We believe in treating each machine with mechanical empathy—ensuring valve clearances are checked cold, fasteners are torqued with calibrated tools, and safety checks are never rushed.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((p, idx) => (
                <div key={idx} className="p-4 bg-[#181B22] border border-[#272B36] rounded-sm space-y-1.5">
                  <div className="flex items-center gap-2">
                    {p.icon}
                    <h3 className="font-heading text-base font-bold uppercase tracking-wide text-white">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#8C93A0] leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Workshop Facility Profile Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#181B22] border border-[#2D3342] rounded-sm p-6 sm:p-8 space-y-6 shadow-xl relative">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#252A36]">
                <div>
                  <h3 className="font-heading text-xl font-bold uppercase text-white">
                    GUINDY WORKSHOP FACILITY
                  </h3>
                  <span className="text-xs text-[#E65100] font-mono">ESTABLISHED 2016</span>
                </div>
                <div className="w-10 h-10 rounded-sm bg-[#121418] border border-[#2F3542] flex items-center justify-center text-[#E65100]">
                  <Wrench className="w-5 h-5" />
                </div>
              </div>

              {/* Workshop Facts */}
              <div className="space-y-3 text-xs text-[#9CA3AF]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E65100] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white block font-medium">Full Multi-Brand Diagnostic Bay:</strong>
                    Trained technicians covering Royal Enfield, Yamaha, KTM, Honda, TVS, Bajaj, Suzuki, and Electric Scooters.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E65100] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white block font-medium">Customer Viewing Lounge:</strong>
                    Air-conditioned observation lounge with high-speed Wi-Fi and direct sightlines into active service bays.
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E65100] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white block font-medium">Environmental Waste Discipline:</strong>
                    100% of used engine oil, worn lead-acid batteries, and coolant fluids are collected for certified eco-recycling.
                  </span>
                </div>
              </div>

              {/* Workshop Shift Schedule */}
              <div className="p-4 bg-[#121418] border border-[#252A36] rounded-sm space-y-2 text-xs">
                <span className="font-heading text-xs uppercase tracking-wider text-[#A0A8B8] font-bold block">
                  GARAGE OPERATING HOURS
                </span>
                <div className="flex justify-between text-[#8C93A0]">
                  <span>Monday - Saturday:</span>
                  <span className="font-mono text-white font-semibold">8:30 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between text-[#8C93A0]">
                  <span>Sunday:</span>
                  <span className="font-mono text-white font-semibold">9:00 AM - 2:00 PM</span>
                </div>
              </div>

              <div className="text-[11px] text-[#6E7585] text-center font-mono">
                24, Industrial Estate Road, Guindy, Chennai - 600032
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
