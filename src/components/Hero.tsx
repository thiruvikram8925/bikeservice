import { ArrowRight, Wrench, ShieldCheck, Award, Clock } from 'lucide-react';
import { BUSINESS_INFO } from '../data/workshopData';

interface HeroProps {
  onBookClick: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onBookClick, onExploreClick }: HeroProps) {
  return (
    <section id="home" className="relative bg-[#121316] text-white border-b border-[#242832] overflow-hidden">
      {/* Workshop Atmosphere Background with Industrial Grid and Steel Hatching */}
      <div className="absolute inset-0 bg-workshop-grid opacity-60 pointer-events-none" />
      
      {/* Subtle Mechanical Lighting Effect (Realistic Garage Pendant Illumination, Not Cyberpunk) */}
      <div className="absolute -top-32 right-0 w-[600px] h-[600px] bg-[#E65100]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-[-150px] w-[450px] h-[450px] bg-[#2B303C]/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Subheading & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Workshop Status Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1A1D24] border border-[#2F3542] rounded-sm text-xs text-[#A8B0BE] uppercase tracking-wider font-heading">
              <span className="w-2 h-2 rounded-full bg-[#E65100] animate-pulse"></span>
              <span>Chennai's Independent Multi-Brand Motorcycle Specialist</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-[0.95]">
              BUILT TO RIDE. <br />
              <span className="text-[#E65100]">SERVICED TO LAST.</span>
            </h1>

            {/* Subheading */}
            <p className="font-body text-base sm:text-lg text-[#9CA3AF] max-w-2xl leading-relaxed">
              Professional motorcycle servicing, diagnostics, repairs, and periodic maintenance handled by experienced technicians in Guindy, Chennai. We respect the machine you ride.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onBookClick}
                className="bg-[#E65100] hover:bg-[#D94418] active:bg-[#B3350F] text-white px-7 py-3.5 rounded-sm font-heading text-lg font-bold uppercase tracking-wider transition-all duration-150 flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
              >
                <span>BOOK A SERVICE</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreClick}
                className="bg-[#1A1D24] hover:bg-[#232731] text-[#E2E4E9] border border-[#3A404E] hover:border-[#E65100]/60 px-6 py-3.5 rounded-sm font-heading text-lg font-semibold uppercase tracking-wider transition-all duration-150 flex items-center gap-2 cursor-pointer"
              >
                <span>EXPLORE SERVICES</span>
              </button>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-8 border-t border-[#242832] grid grid-cols-3 gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#E65100]">
                  <Clock className="w-4 h-4" />
                  <span className="font-heading font-bold text-xl sm:text-2xl text-white tracking-wide">10+ YEARS</span>
                </div>
                <p className="text-xs text-[#8C93A0] uppercase tracking-wider font-heading">Workshop Experience</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#E65100]">
                  <Wrench className="w-4 h-4" />
                  <span className="font-heading font-bold text-xl sm:text-2xl text-white tracking-wide">2,500+</span>
                </div>
                <p className="text-xs text-[#8C93A0] uppercase tracking-wider font-heading">Bikes Serviced</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-[#E65100]">
                  <ShieldCheck className="w-4 h-4" />
                  <span className="font-heading font-bold text-xl sm:text-2xl text-white tracking-wide">CERTIFIED</span>
                </div>
                <p className="text-xs text-[#8C93A0] uppercase tracking-wider font-heading">Senior Technicians</p>
              </div>
            </div>

          </div>

          {/* Right Column: Photorealistic Motorcycle Workshop Showcase & Diagnostic Visual */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#181B22] border border-[#2D3340] rounded-sm p-6 shadow-2xl">
              
              {/* Workshop Bay Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-[#252A36]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-none bg-[#E65100] animate-pulse" />
                  <span className="font-heading text-xs uppercase tracking-widest text-[#B4BAC6] font-semibold">
                    BAY 01 // MULTI-BRAND SUPERBIKE BENCH
                  </span>
                </div>
                <span className="font-mono text-xs text-[#E65100] bg-[#121418] px-2 py-0.5 border border-[#2F3542]">
                  LIVE WORKSHOP
                </span>
              </div>

              {/* Photorealistic Bikes Showcase Visual Card */}
              <div className="my-5 relative rounded-sm bg-[#121418] border border-[#222630] overflow-hidden group">
                <img
                  src="/images/motorcycle_bikes_showcase.jpg"
                  alt="Multi-brand motorcycles in Ironwheel Motor Works garage"
                  className="w-full h-56 sm:h-64 object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Vignette and Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121418] via-transparent to-black/30 pointer-events-none" />

                {/* Spec Tag */}
                <div className="absolute top-2.5 right-2.5 text-[10px] font-mono text-white bg-black/80 backdrop-blur-sm border border-[#E65100]/60 px-2 py-1 rounded-none shadow">
                  100cc - 1000cc+ TWIN / INLINE-4 / SINGLE
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-xs text-white bg-black/85 backdrop-blur-md px-3 py-2 border border-[#2F3542]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
                    <span className="font-heading text-xs font-bold uppercase tracking-wider text-[#E65100]">
                      EXPERT SERVICING & DIAGNOSTICS
                    </span>
                  </div>
                  <span className="font-mono text-[11px] text-[#A8B0BE]">GUINDY BAY 01</span>
                </div>
              </div>

              {/* Service Bay Quick Status Notes */}
              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between py-1.5 px-3 bg-[#13151A] rounded-sm border border-[#242832]">
                  <span className="text-[#8C93A0]">Today's Turnaround:</span>
                  <span className="font-medium text-white">Same-Day Pickup Available</span>
                </div>
                <div className="flex items-center justify-between py-1.5 px-3 bg-[#13151A] rounded-sm border border-[#242832]">
                  <span className="text-[#8C93A0]">Genuine Spares In Stock:</span>
                  <span className="font-mono text-[#E65100]">Motul, Castrol, RE, Yamaha, KTM</span>
                </div>
                <div className="flex items-center justify-between py-1.5 px-3 bg-[#13151A] rounded-sm border border-[#242832]">
                  <span className="text-[#8C93A0]">Location:</span>
                  <span className="text-[#D1D5DB] font-medium">Guindy Industrial Estate, Chennai</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
