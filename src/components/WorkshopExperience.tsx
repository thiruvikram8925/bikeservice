import { CheckCircle2, Gauge, Wrench, Shield, Compass, Activity } from 'lucide-react';
import { WORKSHOP_CHECKLIST } from '../data/workshopData';

export default function WorkshopExperience() {
  const bays = [
    { id: "BAY 01", name: "Pneumatic Lift 1", job: "Periodic Maintenance · RE Classic 350", status: "In Progress", tech: "Rajesh S." },
    { id: "BAY 02", name: "Pneumatic Lift 2", job: "Brake Fluid Flush & Caliper Rebuild", status: "Ready for Test", tech: "Murugan V." },
    { id: "BAY 03", name: "Engine Rebuild Bench", job: "Valve Lapping & Tappet Clearance Check", status: "Active Precision", tech: "Dinesh K. (Sr. Tech)" },
    { id: "BAY 04", name: "Tyre & OBD Station", job: "Wheel Balancing & Diagnostic Scan", status: "Open for Intake", tech: "Workshop Queue" },
  ];

  return (
    <section className="bg-[#121316] py-16 lg:py-24 border-b border-[#252A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#E65100] font-bold mb-2">
            <span className="w-2 h-2 bg-[#E65100]" />
            <span>REAL GARAGE ENVIRONMENT & PROTOCOLS</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            WHERE EVERY BIKE GETS ATTENTION.
          </h2>
          <p className="font-body text-base text-[#9CA3AF] mt-3 leading-relaxed">
            Every motorcycle that enters our workshop receives a proper inspection before service begins. We operate a clean, structured garage floor where tools are calibrated, parts are cataloged, and quality checks are non-negotiable.
          </p>
        </div>

        {/* 5-Point Quality Checklist Card + Live Floor Monitor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          
          {/* Left: 5 Checklist Pillars */}
          <div className="lg:col-span-7 bg-[#171A21] border border-[#2B303C] rounded-sm p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#242832]">
              <span className="font-heading text-lg font-bold uppercase tracking-wider text-white">
                THE IRONWHEEL WORKSHOP STANDARD
              </span>
              <span className="text-xs text-[#E65100] font-mono">100% COMPLIANT</span>
            </div>

            <div className="space-y-4">
              {WORKSHOP_CHECKLIST.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-none bg-[#E65100]/15 border border-[#E65100]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E65100]" />
                  </div>
                  <div>
                    <h4 className="font-heading text-base font-bold uppercase tracking-wide text-white">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#8C93A0] leading-relaxed mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#242832] flex items-center justify-between text-xs text-[#6F7684]">
              <span>Facility: Guindy Industrial Estate, Chennai</span>
              <span className="font-mono">4 DEDICATED HYDRAULIC BAYS</span>
            </div>
          </div>

          {/* Right: Live Workshop Floor Bay Status */}
          <div className="lg:col-span-5 bg-[#181B23] border border-[#2D3342] rounded-sm p-6 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#252A36]">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#E65100]" />
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
                  LIVE WORKSHOP BAY MONITOR
                </h3>
              </div>
              <span className="text-[10px] font-mono text-[#8C93A0] bg-[#121418] px-2 py-0.5 border border-[#2B303C]">
                FLOOR TEMP: 28°C
              </span>
            </div>

            <div className="space-y-3">
              {bays.map((bay) => (
                <div
                  key={bay.id}
                  className="bg-[#121418] border border-[#242832] p-3.5 rounded-sm space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 font-mono font-semibold text-white">
                      <span className="text-[#E65100]">{bay.id}</span>
                      <span className="text-[#8C93A0]">|</span>
                      <span>{bay.name}</span>
                    </div>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-none ${
                      bay.status === 'Open for Intake'
                        ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-800'
                        : 'bg-[#252A36] text-[#BAC2CF] border border-[#3A404E]'
                    }`}>
                      {bay.status}
                    </span>
                  </div>

                  <p className="text-xs text-[#C0C6D2] font-medium">
                    {bay.job}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-[#6F7684]">
                    <span>Tech: {bay.tech}</span>
                    <span className="font-mono">TORQUE CHECKED</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-[#13151A] border border-[#262A35] rounded-sm text-xs text-[#8C93A0] flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#E65100] shrink-0" />
              <span>Walk-in inspection slots available daily before 11:00 AM.</span>
            </div>

          </div>

        </div>

        {/* Visual Equipment Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#181B22] border border-[#282C38] p-5 rounded-sm">
            <Wrench className="w-5 h-5 text-[#E65100] mb-3" />
            <h4 className="font-heading text-lg font-bold uppercase text-white tracking-wide">
              Torque Precision
            </h4>
            <p className="text-xs text-[#8C93A0] mt-1 leading-relaxed">
              Every engine bolt, axle nut, and triple clamp is tightened with calibrated Norbar and King Tony torque wrenches to exact Nm specs.
            </p>
          </div>

          <div className="bg-[#181B22] border border-[#282C38] p-5 rounded-sm">
            <Gauge className="w-5 h-5 text-[#E65100] mb-3" />
            <h4 className="font-heading text-lg font-bold uppercase text-white tracking-wide">
              Diagnostic Hardware
            </h4>
            <p className="text-xs text-[#8C93A0] mt-1 leading-relaxed">
              OBD-II scanners read ECU error codes, monitor live throttle position sensors, and verify oxygen sensor trim on modern FI bikes.
            </p>
          </div>

          <div className="bg-[#181B22] border border-[#282C38] p-5 rounded-sm">
            <Shield className="w-5 h-5 text-[#E65100] mb-3" />
            <h4 className="font-heading text-lg font-bold uppercase text-white tracking-wide">
              Pneumatic Tyre Machine
            </h4>
            <p className="text-xs text-[#8C93A0] mt-1 leading-relaxed">
              Tubeless tyres are mounted using plastic-shielded rim clamps to protect costly alloy wheels from scratches and bent rims.
            </p>
          </div>

          <div className="bg-[#181B22] border border-[#282C38] p-5 rounded-sm">
            <CheckCircle2 className="w-5 h-5 text-[#E65100] mb-3" />
            <h4 className="font-heading text-lg font-bold uppercase text-white tracking-wide">
              Chemical & Lube Lab
            </h4>
            <p className="text-xs text-[#8C93A0] mt-1 leading-relaxed">
              We stock authentic 100% synthetic engine oils (Motul 7100/300V, Castrol Power1 Ultimate, Shell Advance), and DOT 4 brake fluids.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
