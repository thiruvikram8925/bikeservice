import { useState, useEffect } from 'react';
import { Menu, X, Phone, Wrench, MapPin, Clock, MessageCircle, Instagram, Facebook, Youtube } from 'lucide-react';
import { BUSINESS_INFO } from '../data/workshopData';

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'SERVICES', href: '#services' },
    { name: 'VEHICLES', href: '#bikes' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PRICING', href: '#pricing' },
    { name: 'OFFERS', href: '#offers' },
    { name: 'REVIEWS', href: '#reviews' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <>
      {/* Top Essential Business Details Bar */}
      <div className="bg-[#0D0E11] text-[#8C93A0] border-b border-[#1E222A] text-[11px] py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#B0B7C3]">
              <MapPin className="w-3.5 h-3.5 text-[#E65100]" />
              <span>Guindy Industrial Estate, Chennai (Near Metro Station)</span>
            </span>
            <span className="flex items-center gap-1.5 text-[#8C93A0]">
              <Clock className="w-3.5 h-3.5 text-[#E65100]" />
              <span>Mon - Sat: 8:30 AM - 8:00 PM | Sun: 9 AM - 2 PM</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            {/* Social Media links */}
            <div className="flex items-center gap-3">
              <span className="text-[#656D7C] text-[10px] uppercase font-mono tracking-wider">Follow Us:</span>
              <a
                href={BUSINESS_INFO.socialMedia.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8C93A0] hover:text-[#E65100] transition-colors"
                title="Instagram: @ironwheelmotorworks"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={BUSINESS_INFO.socialMedia.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8C93A0] hover:text-[#E65100] transition-colors"
                title="Facebook: Ironwheel Motor Works"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href={BUSINESS_INFO.socialMedia.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8C93A0] hover:text-[#E65100] transition-colors"
                title="YouTube: @ironwheelmotorworks"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="w-px h-3.5 bg-[#2B303C]" />

            {/* WhatsApp Direct */}
            <a
              href={BUSINESS_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold font-mono transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: {BUSINESS_INFO.whatsapp}</span>
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-colors duration-200 border-b ${
          scrolled
            ? 'bg-[#121316]/95 backdrop-blur-md border-[#2B303C]'
            : 'bg-[#121316] border-[#22252C]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            
            {/* Zone 1: Single Brand Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 group"
            >
              {/* Minimal Mechanical Sprocket / Wheel Mark */}
              <div className="w-9 h-9 rounded bg-[#1B1E24] border border-[#3A404E] flex items-center justify-center text-[#E65100] group-hover:border-[#E65100] transition-colors">
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                  <circle cx="12" cy="12" r="2" fill="#E65100" />
                </svg>
              </div>
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-wider text-white whitespace-nowrap">
                IRONWHEEL <span className="text-[#8C93A0] font-normal text-lg sm:text-xl">MOTOR WORKS</span>
              </span>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-heading text-xs xl:text-sm font-semibold tracking-wider text-[#A4ABB8] hover:text-[#E65100] transition-colors whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Action & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-[#8C93A0] hover:text-white px-2.5 py-1.5 border border-[#2B303C] rounded-sm hover:border-[#3E4554] transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-[#E65100]" />
                <span className="font-mono tabular-nums">{BUSINESS_INFO.phone}</span>
              </a>

              <button
                onClick={onBookClick}
                className="bg-[#E65100] hover:bg-[#D94418] active:bg-[#B3350F] text-white text-xs sm:text-sm font-heading font-bold uppercase tracking-wider px-4 sm:px-5 py-2.5 rounded-sm transition-colors cursor-pointer shadow-sm flex items-center gap-1.5 whitespace-nowrap"
              >
                <Wrench className="w-4 h-4 hidden sm:inline" />
                <span>BOOK SERVICE</span>
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#A4ABB8] hover:text-white border border-[#2B303C] rounded-sm hover:bg-[#1B1E24] transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-18 z-30 bg-[#15171C] border-b border-[#2B303C] shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="px-5 py-6 space-y-3">
            <div className="grid grid-cols-2 gap-2 pb-4 border-b border-[#242832]">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-heading text-base font-semibold tracking-wider text-[#C0C6D2] hover:text-[#E65100] py-2 px-3 rounded-sm hover:bg-[#1F232B] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-2 space-y-3">
              <div className="flex items-center justify-between text-xs text-[#8C93A0]">
                <span>Guindy Industrial Estate, Chennai</span>
                <span className="font-mono">8:30 AM - 8:00 PM</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-1.5 bg-[#1B1E24] border border-[#2B303C] text-white py-2.5 rounded-sm text-xs font-semibold hover:border-[#E65100] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#E65100]" />
                  <span>Call Us</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-emerald-950/60 border border-emerald-800 text-emerald-400 py-2.5 rounded-sm text-xs font-semibold hover:bg-emerald-900/60 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Social media icons on mobile */}
              <div className="flex items-center justify-center gap-4 py-2 border-t border-[#232731]">
                <span className="text-[11px] text-[#717A8C]">Follow Us:</span>
                <a href={BUSINESS_INFO.socialMedia.instagram.url} target="_blank" rel="noopener noreferrer" className="text-[#8C93A0] hover:text-[#E65100]">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={BUSINESS_INFO.socialMedia.facebook.url} target="_blank" rel="noopener noreferrer" className="text-[#8C93A0] hover:text-[#E65100]">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href={BUSINESS_INFO.socialMedia.youtube.url} target="_blank" rel="noopener noreferrer" className="text-[#8C93A0] hover:text-[#E65100]">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full bg-[#E65100] hover:bg-[#D94418] text-white py-3 rounded-sm font-heading font-bold text-base tracking-wider uppercase transition-colors"
              >
                BOOK A SERVICE NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
