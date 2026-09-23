import { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Calendar, 
  Wrench, 
  CheckCircle2, 
  Send, 
  Navigation,
  FileText,
  Printer,
  RotateCcw,
  MessageCircle,
  Truck,
  Tag,
  Instagram,
  Facebook,
  Youtube,
  Twitter,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { BUSINESS_INFO, SERVICES_DATA, WORKSHOP_OFFERS } from '../data/workshopData';
import { BookingFormData } from '../types';

interface ContactBookingProps {
  initialService?: string;
  initialNotes?: string;
  appliedCoupon?: string;
}

export default function ContactBooking({ 
  initialService = '', 
  initialNotes = '',
  appliedCoupon = ''
}: ContactBookingProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    bikeModel: '',
    vehicleType: 'motorcycle',
    serviceRequired: initialService || 'Periodic Service',
    preferredDate: '',
    preferredTime: 'Morning (8:30 AM - 11:30 AM)',
    additionalNotes: initialNotes || '',
    pickupDropRequired: false,
    pickupAddress: '',
    appliedCoupon: appliedCoupon || ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [couponStatus, setCouponStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormData, string>>>({});

  // Sync external pre-fills
  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, serviceRequired: initialService }));
    }
    if (initialNotes) {
      setFormData(prev => ({ ...prev, additionalNotes: initialNotes }));
    }
  }, [initialService, initialNotes]);

  useEffect(() => {
    if (appliedCoupon) {
      setFormData(prev => ({ ...prev, appliedCoupon }));
      validateCoupon(appliedCoupon);
    }
  }, [appliedCoupon]);

  const validateCoupon = (code: string) => {
    const trimmed = code.trim().toUpperCase();
    const found = WORKSHOP_OFFERS.find(o => o.code === trimmed);
    if (found) {
      setCouponStatus(`Coupon '${found.code}' applied: ${found.discount}!`);
    } else if (trimmed) {
      setCouponStatus("Special seasonal offer requested. Will be reviewed at intake.");
    } else {
      setCouponStatus(null);
    }
  };

  const validate = () => {
    const newErrors: Partial<Record<keyof BookingFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[0-9+ -]{10,14}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.bikeModel.trim()) {
      newErrors.bikeModel = 'Please specify your bike or scooter model (e.g. Activa 6G, RE Classic 350, MT-15)';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred service date';
    }

    if (formData.pickupDropRequired && !formData.pickupAddress.trim()) {
      newErrors.pickupAddress = 'Please enter your pickup address in Chennai';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Generate realistic job sheet ID
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newTicket = `IW-CHN-2026-${randomNum}`;
    setTicketId(newTicket);
    setSubmitted(true);
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      bikeModel: '',
      vehicleType: 'motorcycle',
      serviceRequired: 'Periodic Service',
      preferredDate: '',
      preferredTime: 'Morning (8:30 AM - 11:30 AM)',
      additionalNotes: '',
      pickupDropRequired: false,
      pickupAddress: '',
      appliedCoupon: ''
    });
    setCouponStatus(null);
    setErrors({});
  };

  // Generate WhatsApp message link with prefilled booking info
  const generateWhatsAppBookingUrl = () => {
    const msg = `*NEW TWO-WHEELER SERVICE BOOKING - IRONWHEEL MOTOR WORKS*
Ticket ID: ${ticketId || 'New Booking'}
Name: ${formData.fullName}
Phone: ${formData.phone}
Vehicle: ${formData.bikeModel} (${formData.vehicleType.toUpperCase()})
Service: ${formData.serviceRequired}
Preferred Date: ${formData.preferredDate} (${formData.preferredTime})
Doorstep Pickup: ${formData.pickupDropRequired ? `YES (${formData.pickupAddress})` : 'NO (Customer Drop-off)'}
${formData.appliedCoupon ? `Coupon: ${formData.appliedCoupon}` : ''}
${formData.additionalNotes ? `Notes: ${formData.additionalNotes}` : ''}`;

    return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contact" className="bg-[#121316] py-16 lg:py-24 border-b border-[#252A36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-heading uppercase tracking-widest text-[#E65100] font-bold mb-2">
            <span className="w-2 h-2 bg-[#E65100]" />
            <span>GUINDY WORKSHOP APPOINTMENTS & INTAKE</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            BOOK A SERVICE & CONTACT
          </h2>
          <p className="font-body text-base text-[#9CA3AF] mt-3">
            Schedule your motorcycle or scooter drop-off, book doorstep pickup across Chennai, or chat directly with our master technician on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Workshop Contact Details, Socials & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#181B22] border border-[#2B303C] rounded-sm p-6 sm:p-8 space-y-6">
              
              <div>
                <span className="font-heading text-xs uppercase tracking-widest text-[#E65100] font-bold block mb-1">
                  MAIN SERVICE WORKSHOP
                </span>
                <h3 className="font-heading text-2xl font-bold uppercase text-white">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-xs text-[#8C93A0] italic mt-0.5">
                  "{BUSINESS_INFO.tagline}"
                </p>
                <p className="text-xs text-[#BAC2CF] mt-2 leading-relaxed">
                  {BUSINESS_INFO.introduction}
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 text-sm text-[#C0C6D2] pt-4 border-t border-[#242832]">
                <MapPin className="w-5 h-5 text-[#E65100] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Workshop Address & Landmark:</strong>
                  <span>{BUSINESS_INFO.address.line1}</span><br />
                  <span>{BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city}</span><br />
                  <span>{BUSINESS_INFO.address.state} - {BUSINESS_INFO.address.pincode}</span>
                  <p className="text-xs text-[#E65100] mt-1 font-mono">
                    Landmark: {BUSINESS_INFO.address.landmark}
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 text-sm text-[#C0C6D2]">
                  <Phone className="w-5 h-5 text-[#E65100] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">Phone Support:</strong>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="font-mono text-white hover:text-[#E65100] transition-colors font-semibold"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-[11px] text-[#7E8796] mt-0.5">Desk & Appointments</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-[#C0C6D2]">
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-medium">WhatsApp Desk:</strong>
                    <a
                      href={BUSINESS_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
                    >
                      {BUSINESS_INFO.whatsapp}
                    </a>
                    <p className="text-[11px] text-[#7E8796] mt-0.5">Instant Chat & Quotes</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 text-sm text-[#C0C6D2] pt-2 border-t border-[#242832]">
                <Mail className="w-5 h-5 text-[#E65100] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Email Inquiries:</strong>
                  <a
                    href={`mailto:${BUSINESS_INFO.email}`}
                    className="text-white hover:text-[#E65100] transition-colors font-mono text-xs"
                  >
                    {BUSINESS_INFO.email}
                  </a>
                  <p className="text-xs text-[#7E8796] mt-0.5">Corporate accounts & fleet billing</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3 text-sm text-[#C0C6D2]">
                <Clock className="w-5 h-5 text-[#E65100] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Opening Hours:</strong>
                  <span className="font-mono text-xs">{BUSINESS_INFO.hours.weekday}</span><br />
                  <span className="font-mono text-xs">{BUSINESS_INFO.hours.sunday}</span>
                  <p className="text-[11px] text-emerald-400 font-mono mt-1">
                    Emergency Breakdown Assistance: 24/7
                  </p>
                </div>
              </div>

              {/* Social Media Strip */}
              <div className="pt-3 border-t border-[#242832]">
                <div className="text-xs font-mono text-[#8C93A0] uppercase mb-2">Connect On Social Media:</div>
                <div className="flex items-center gap-3">
                  <a
                    href={BUSINESS_INFO.socialMedia.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#121418] hover:bg-[#1E232C] border border-[#2B303C] hover:border-[#E65100] text-xs text-[#C5CCD8] hover:text-white rounded-sm transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-[#E65100]" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.socialMedia.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#121418] hover:bg-[#1E232C] border border-[#2B303C] hover:border-[#E65100] text-xs text-[#C5CCD8] hover:text-white rounded-sm transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-[#E65100]" />
                    <span>Facebook</span>
                  </a>

                  <a
                    href={BUSINESS_INFO.socialMedia.youtube.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#121418] hover:bg-[#1E232C] border border-[#2B303C] hover:border-[#E65100] text-xs text-[#C5CCD8] hover:text-white rounded-sm transition-colors"
                  >
                    <Youtube className="w-4 h-4 text-[#E65100]" />
                    <span>YouTube</span>
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-[#242832] space-y-2">
                <a
                  href={BUSINESS_INFO.googleMaps.shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#121418] hover:bg-[#1E222A] text-white border border-[#343B4B] hover:border-[#E65100] py-3 rounded-sm font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#E65100]" />
                  <span>OPEN IN GOOGLE MAPS / GET DIRECTIONS</span>
                </a>

                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-400 border border-emerald-800 hover:border-emerald-600 py-3 rounded-sm font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>INSTANT CHAT ON WHATSAPP (+91 98765 43210)</span>
                </a>
              </div>

            </div>

            {/* Embedded Google Maps Box */}
            <div className="bg-[#181B22] border border-[#2B303C] rounded-sm p-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-white">
                  <MapPin className="w-4 h-4 text-[#E65100]" />
                  <span>WORKSHOP LOCATION // GUINDY, CHENNAI</span>
                </div>
                <span className="text-[11px] font-mono text-[#8C93A0]">
                  {BUSINESS_INFO.googleMaps.coordinates}
                </span>
              </div>

              {/* Interactive Google Map Preview / Embed */}
              <div className="relative w-full h-56 bg-[#121418] border border-[#2B303C] overflow-hidden rounded-sm">
                <iframe
                  title="Ironwheel Motor Works Guindy Location"
                  src={BUSINESS_INFO.googleMaps.embedUrl}
                  className="w-full h-full border-0 filter contrast-125 brightness-90"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-2 left-2 bg-[#121418]/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-mono text-white border border-[#2B303C]">
                  400m from Guindy Metro Station
                </div>
              </div>

              <div className="text-[11px] text-[#8C93A0] flex items-center justify-between">
                <span>Direct access via Inner Ring Road / GST Road</span>
                <a
                  href={BUSINESS_INFO.googleMaps.shareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E65100] hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>View Larger Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic Booking Form or Success Confirmation Slip */}
          <div className="lg:col-span-7">
            <div className="bg-[#181B22] border border-[#2B303C] rounded-sm p-6 sm:p-8">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#252A36]">
                    <div className="flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-[#E65100]" />
                      <h3 className="font-heading text-lg font-bold uppercase tracking-wider text-white">
                        SCHEDULE YOUR SERVICE APPOINTMENT
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-[#7E8796]">NO ADVANCE PAYMENT</span>
                  </div>

                  {/* Vehicle Type Selection */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#A0A8B8] mb-1.5">
                      VEHICLE TYPE *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'motorcycle', label: 'Motorcycle' },
                        { id: 'scooter', label: 'Gearless Scooter' },
                        { id: 'electric', label: 'Electric (EV)' },
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, vehicleType: t.id as any })}
                          className={`py-2 px-3 text-xs font-heading font-semibold uppercase tracking-wider rounded-sm border transition-colors cursor-pointer text-center ${
                            formData.vehicleType === t.id
                              ? 'bg-[#E65100] border-[#E65100] text-white'
                              : 'bg-[#121418] border-[#2B303C] text-[#8C93A0] hover:text-white'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row 1: Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#A0A8B8] mb-1.5">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Arun Kumar"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full bg-[#121418] border rounded-sm py-2.5 px-3 text-sm text-white placeholder-[#545C6C] focus:outline-none transition-colors ${
                          errors.fullName ? 'border-red-500' : 'border-[#2B303C] focus:border-[#E65100]'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#A0A8B8] mb-1.5">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full bg-[#121418] border rounded-sm py-2.5 px-3 text-sm text-white placeholder-[#545C6C] focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500' : 'border-[#2B303C] focus:border-[#E65100]'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Bike Model and Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#A0A8B8] mb-1.5">
                        TWO-WHEELER MODEL & BRAND *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Activa 6G / Classic 350 / MT-15"
                        value={formData.bikeModel}
                        onChange={(e) => setFormData({ ...formData, bikeModel: e.target.value })}
                        className={`w-full bg-[#121418] border rounded-sm py-2.5 px-3 text-sm text-white placeholder-[#545C6C] focus:outline-none transition-colors ${
                          errors.bikeModel ? 'border-red-500' : 'border-[#2B303C] focus:border-[#E65100]'
                        }`}
                      />
                      {errors.bikeModel && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.bikeModel}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#A0A8B8] mb-1.5">
                        SERVICE REQUIRED
                      </label>
                      <select
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full bg-[#121418] border border-[#2B303C] focus:border-[#E65100] rounded-sm py-2.5 px-3 text-sm text-white focus:outline-none transition-colors"
                      >
                        {SERVICES_DATA.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.name} ({s.startingPrice})
                          </option>
                        ))}
                        <option value="Basic Care Package (₹699)">Basic Care Package (₹699)</option>
                        <option value="Complete Service Package (₹1,499)">Complete Service Package (₹1,499)</option>
                        <option value="Premium Care Package (₹2,499)">Premium Care Package (₹2,499)</option>
                        <option value="General Diagnostics / Unsure">General Diagnostics / Unsure</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Preferred Date and Arrival Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#A0A8B8] mb-1.5">
                        PREFERRED SERVICE DATE *
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className={`w-full bg-[#121418] border rounded-sm py-2.5 px-3 text-sm text-white focus:outline-none transition-colors ${
                          errors.preferredDate ? 'border-red-500' : 'border-[#2B303C] focus:border-[#E65100]'
                        }`}
                      />
                      {errors.preferredDate && (
                        <p className="text-[11px] text-red-400 mt-1">{errors.preferredDate}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#A0A8B8] mb-1.5">
                        PREFERRED TIME WINDOW
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full bg-[#121418] border border-[#2B303C] focus:border-[#E65100] rounded-sm py-2.5 px-3 text-sm text-white focus:outline-none transition-colors"
                      >
                        <option value="Morning (8:30 AM - 11:30 AM)">Morning (8:30 AM - 11:30 AM)</option>
                        <option value="Midday (11:30 AM - 2:30 PM)">Midday (11:30 AM - 2:30 PM)</option>
                        <option value="Afternoon (2:30 PM - 5:30 PM)">Afternoon (2:30 PM - 5:30 PM)</option>
                        <option value="Evening (5:30 PM - 7:30 PM)">Evening (5:30 PM - 7:30 PM)</option>
                      </select>
                    </div>
                  </div>

                  {/* Doorstep Pickup & Drop Checkbox */}
                  <div className="p-3.5 bg-[#14161C] border border-[#2B303C] rounded-sm space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.pickupDropRequired}
                        onChange={(e) => setFormData({ ...formData, pickupDropRequired: e.target.checked })}
                        className="w-4 h-4 rounded bg-[#121418] border-[#3A404E] text-[#E65100] focus:ring-0 cursor-pointer"
                      />
                      <div className="flex items-center gap-2">
                        <Truck className="w-4 h-4 text-[#E65100]" />
                        <span className="text-xs font-heading font-bold uppercase tracking-wider text-white">
                          REQUEST DOORSTEP PICKUP & RETURN DROP
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-1.5 py-0.2 border border-emerald-800">
                          15 KM RADIUS
                        </span>
                      </div>
                    </label>

                    {formData.pickupDropRequired && (
                      <div className="pt-2 border-t border-[#232731] space-y-1.5 animate-in fade-in duration-200">
                        <label className="block text-xs font-mono text-[#A0A8B8]">
                          PICKUP ADDRESS (WITH LANDMARK) IN CHENNAI *
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., Flat 3B, Sunshine Apts, 2nd Main Rd, Velachery, Chennai"
                          value={formData.pickupAddress}
                          onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                          className={`w-full bg-[#121418] border rounded-sm py-2 px-3 text-xs text-white placeholder-[#545C6C] focus:outline-none ${
                            errors.pickupAddress ? 'border-red-500' : 'border-[#2B303C] focus:border-[#E65100]'
                          }`}
                        />
                        {errors.pickupAddress && (
                          <p className="text-[11px] text-red-400">{errors.pickupAddress}</p>
                        )}
                        <p className="text-[11px] text-[#717A8C]">
                          Our safe hydraulic pickup carrier will contact you 30 minutes before arrival.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Coupon Code Input */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                    <div className="sm:col-span-8">
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#A0A8B8] mb-1.5">
                        OFFER / COUPON CODE (OPTIONAL)
                      </label>
                      <div className="relative">
                        <Tag className="w-4 h-4 text-[#7E8796] absolute left-3 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="e.g. FIRST15, SHINEPRO, SMOOTHCVT"
                          value={formData.appliedCoupon}
                          onChange={(e) => {
                            setFormData({ ...formData, appliedCoupon: e.target.value.toUpperCase() });
                            validateCoupon(e.target.value);
                          }}
                          className="w-full bg-[#121418] border border-[#2B303C] focus:border-[#E65100] rounded-sm py-2 pl-9 pr-3 text-xs text-white uppercase font-mono placeholder-[#545C6C] focus:outline-none"
                        />
                      </div>
                      {couponStatus && (
                        <p className="text-[11px] text-emerald-400 mt-1 font-mono">{couponStatus}</p>
                      )}
                    </div>

                    <div className="sm:col-span-4 flex items-end">
                      <div className="w-full text-center p-2 bg-[#121418] border border-[#2B303C] rounded-sm">
                        <span className="text-[10px] text-[#717A8C] block uppercase">Quick Offer:</span>
                        <span className="font-mono text-xs font-bold text-[#E65100]">FIRST15</span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Symptoms & Notes */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#A0A8B8] mb-1.5">
                      SYMPTOMS / MECHANICAL COMPLAINTS (OPTIONAL)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe any engine noises, vibration speeds, hard gear shifts, or parts you need checked..."
                      value={formData.additionalNotes}
                      onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                      className="w-full bg-[#121418] border border-[#2B303C] focus:border-[#E65100] rounded-sm py-2 px-3 text-sm text-white placeholder-[#545C6C] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 space-y-3">
                    <button
                      type="submit"
                      className="w-full bg-[#E65100] hover:bg-[#D94418] active:bg-[#B3350F] text-white py-3.5 rounded-sm font-heading font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer shadow-md flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>CONFIRM SERVICE APPOINTMENT</span>
                    </button>

                    <div className="flex items-center justify-center gap-4 text-xs text-[#717A8C]">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#E65100]" />
                        <span>Genuine Spares Only</span>
                      </span>
                      <span>·</span>
                      <span>Detailed Digital Job Sheet</span>
                      <span>·</span>
                      <span>Transparent Estimate Before Work</span>
                    </div>
                  </div>

                </form>
              ) : (
                /* Service Confirmation Job Card Slip */
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="flex items-start gap-4 p-4 bg-emerald-950/30 border border-emerald-800/60 rounded-sm">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading text-lg font-bold uppercase text-white tracking-wide">
                        SERVICE APPOINTMENT LOGGED SUCCESSFULLY
                      </h4>
                      <p className="text-xs text-[#BAC2CF] mt-0.5">
                        Your two-wheeler service request is registered in our Guindy workshop bay management schedule.
                      </p>
                    </div>
                  </div>

                  {/* Digital Job Card Slip */}
                  <div className="bg-[#121418] border border-[#2B303C] rounded-sm p-5 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-[#242832]">
                      <div>
                        <span className="text-[10px] text-[#8C93A0] uppercase font-mono block">PROVISIONAL JOB CARD</span>
                        <span className="font-mono text-base font-bold text-[#E65100]">{ticketId}</span>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800 px-2 py-0.5">
                        BAY RESERVED
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <span className="text-[#717A8C] block">Rider Name:</span>
                        <span className="font-semibold text-white">{formData.fullName}</span>
                      </div>
                      <div>
                        <span className="text-[#717A8C] block">Phone:</span>
                        <span className="font-mono text-white">{formData.phone}</span>
                      </div>
                      <div>
                        <span className="text-[#717A8C] block">Vehicle Model & Type:</span>
                        <span className="font-semibold text-white">
                          {formData.bikeModel} ({formData.vehicleType.toUpperCase()})
                        </span>
                      </div>
                      <div>
                        <span className="text-[#717A8C] block">Service Booked:</span>
                        <span className="font-semibold text-[#E65100]">{formData.serviceRequired}</span>
                      </div>
                      <div>
                        <span className="text-[#717A8C] block">Reserved Date:</span>
                        <span className="font-semibold text-white">{formData.preferredDate}</span>
                      </div>
                      <div>
                        <span className="text-[#717A8C] block">Arrival Window:</span>
                        <span className="font-semibold text-white">{formData.preferredTime}</span>
                      </div>
                    </div>

                    {formData.pickupDropRequired && (
                      <div className="pt-2 border-t border-[#232731] text-xs">
                        <span className="text-emerald-400 font-bold block">Doorstep Pickup Requested:</span>
                        <span className="text-[#C0C6D2]">{formData.pickupAddress}</span>
                      </div>
                    )}

                    {formData.appliedCoupon && (
                      <div className="pt-1 text-xs">
                        <span className="text-[#717A8C]">Applied Offer: </span>
                        <span className="font-mono text-[#E65100] font-bold">{formData.appliedCoupon}</span>
                      </div>
                    )}

                    {formData.additionalNotes && (
                      <div className="pt-2 border-t border-[#232731] text-xs">
                        <span className="text-[#717A8C] block">Noted Symptoms / Instructions:</span>
                        <span className="text-[#C0C6D2] italic">{formData.additionalNotes}</span>
                      </div>
                    )}

                    <div className="pt-3 border-t border-[#232731] flex items-center justify-between text-[11px] text-[#717A8C]">
                      <span>Location: Guindy Workshop, Chennai</span>
                      <span className="font-mono text-white">NO ADVANCE PAYMENT NEEDED</span>
                    </div>
                  </div>

                  {/* Actions: Send to WhatsApp, Print, Book Another */}
                  <div className="space-y-3 pt-2">
                    <a
                      href={generateWhatsAppBookingUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 rounded-sm font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>SEND BOOKING DIRECTLY TO WORKSHOP WHATSAPP</span>
                    </a>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => window.print()}
                        className="flex-1 bg-[#1B1E26] hover:bg-[#232731] text-white border border-[#343B4B] py-2.5 rounded-sm font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <Printer className="w-4 h-4 text-[#8C93A0]" />
                        <span>PRINT JOB CARD</span>
                      </button>

                      <button
                        onClick={resetForm}
                        className="flex-1 bg-[#282E3B] hover:bg-[#343C4D] text-white py-2.5 rounded-sm font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                      >
                        <RotateCcw className="w-4 h-4" />
                        <span>BOOK ANOTHER VEHICLE</span>
                      </button>
                    </div>
                  </div>

                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
