import { Phone, Mail, MapPin, Clock, ArrowUp, Wrench, MessageCircle, Instagram, Facebook, Youtube, Twitter } from 'lucide-react';
import { BUSINESS_INFO } from '../data/workshopData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#0D0E11] text-[#9CA3AF] border-t border-[#22252C] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1E2128]">
          
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#1B1E24] border border-[#3A404E] flex items-center justify-center text-[#E65100]">
                <Wrench className="w-4 h-4" />
              </div>
              <span className="font-heading text-xl font-bold tracking-wider text-white">
                IRONWHEEL <span className="text-[#8C93A0] font-normal text-lg">MOTOR WORKS</span>
              </span>
            </div>

            <p className="font-body text-sm text-[#8C93A0] leading-relaxed max-w-sm">
              "{BUSINESS_INFO.tagline}"
            </p>

            <p className="text-xs text-[#6F7684] leading-relaxed max-w-sm">
              Chennai's premier multi-brand motorcycle and scooter service workshop in Guindy. Certified mechanical engineering, computerized diagnostics, genuine OEM spares, and doorstep pickup.
            </p>

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-[11px] font-mono text-[#788191] uppercase tracking-wider block mb-2">
                FOLLOW OUR WORKSHOP
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={BUSINESS_INFO.socialMedia.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-sm bg-[#16181F] border border-[#2B303C] hover:border-[#E65100] flex items-center justify-center text-[#9CA3AF] hover:text-[#E65100] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_INFO.socialMedia.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-sm bg-[#16181F] border border-[#2B303C] hover:border-[#E65100] flex items-center justify-center text-[#9CA3AF] hover:text-[#E65100] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_INFO.socialMedia.youtube.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-sm bg-[#16181F] border border-[#2B303C] hover:border-[#E65100] flex items-center justify-center text-[#9CA3AF] hover:text-[#E65100] transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={BUSINESS_INFO.socialMedia.twitter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-sm bg-[#16181F] border border-[#2B303C] hover:border-[#E65100] flex items-center justify-center text-[#9CA3AF] hover:text-[#E65100] transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="pt-2 text-xs font-mono text-[#E65100]">
              CHENNAI WORKSHOP ID: IW-CHN-600032
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => handleLinkClick(e, '#home')}
                  className="hover:text-[#E65100] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="hover:text-[#E65100] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#bikes" 
                  onClick={(e) => handleLinkClick(e, '#bikes')}
                  className="hover:text-[#E65100] transition-colors"
                >
                  Bikes & Scooters
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="hover:text-[#E65100] transition-colors"
                >
                  About Workshop
                </a>
              </li>
              <li>
                <a 
                  href="#pricing" 
                  onClick={(e) => handleLinkClick(e, '#pricing')}
                  className="hover:text-[#E65100] transition-colors"
                >
                  Service Pricing
                </a>
              </li>
              <li>
                <a 
                  href="#offers" 
                  onClick={(e) => handleLinkClick(e, '#offers')}
                  className="text-[#E65100] font-semibold hover:underline transition-colors"
                >
                  Offers & Pickup
                </a>
              </li>
              <li>
                <a 
                  href="#reviews" 
                  onClick={(e) => handleLinkClick(e, '#reviews')}
                  className="hover:text-[#E65100] transition-colors"
                >
                  Rider Reviews
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="hover:text-[#E65100] transition-colors"
                >
                  Book / Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              TWO-WHEELER SERVICES
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="hover:text-[#E65100] transition-colors"
                >
                  Periodic Service & Inspection
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="hover:text-[#E65100] transition-colors"
                >
                  Scooter CVT & Transmission Overhaul
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="hover:text-[#E65100] transition-colors"
                >
                  Engine Repair & Valve Tappet Tuning
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="hover:text-[#E65100] transition-colors"
                >
                  Brake Caliper & Hydraulic Bleeding
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="hover:text-[#E65100] transition-colors"
                >
                  Drive Chain & Sprocket Alignment
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleLinkClick(e, '#services')}
                  className="hover:text-[#E65100] transition-colors"
                >
                  Electrical & EFI Diagnostics
                </a>
              </li>
              <li>
                <a 
                  href="#offers" 
                  onClick={(e) => handleLinkClick(e, '#offers')}
                  className="text-emerald-400 hover:underline transition-colors"
                >
                  Doorstep Pickup & Roadside Breakdown
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours Column (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
              CONTACT & LOCATION
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#E65100] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} - {BUSINESS_INFO.address.pincode}
                  <br />
                  <span className="text-[11px] text-[#717A8C]">
                    Landmark: {BUSINESS_INFO.address.landmark}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#E65100] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-mono text-white hover:text-[#E65100]">
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={BUSINESS_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="font-mono text-emerald-400 hover:text-emerald-300">
                  WhatsApp: {BUSINESS_INFO.whatsapp}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#E65100] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-white hover:text-[#E65100]">
                  {BUSINESS_INFO.email}
                </a>
              </div>

              <div className="pt-2 border-t border-[#1C1F26] text-[11px] space-y-1">
                <div className="flex items-center gap-1.5 text-white font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#E65100]" />
                  <span>Workshop Operational Hours:</span>
                </div>
                <div className="pl-5 text-[#8C93A0]">
                  <span>{BUSINESS_INFO.hours.weekday}</span><br />
                  <span>{BUSINESS_INFO.hours.sunday}</span><br />
                  <span className="text-emerald-400 font-mono">Breakdown Support: 24/7</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F7684]">
          <div className="flex items-center gap-2 flex-wrap">
            <span>© 2026 Ironwheel Motor Works. All Rights Reserved.</span>
            <span>·</span>
            <span>Guindy Industrial Estate, Chennai</span>
            <span>·</span>
            <span className="text-[#8C93A0] italic">"Precision Service. Reliable Performance."</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#A0A8B8] hover:text-[#E65100] transition-colors font-heading font-semibold uppercase tracking-wider cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
