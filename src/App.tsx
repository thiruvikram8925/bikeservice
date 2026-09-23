/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickServiceBar from './components/QuickServiceBar';
import Services from './components/Services';
import BikeTypes from './components/BikeTypes';
import WorkshopExperience from './components/WorkshopExperience';
import ServiceProcess from './components/ServiceProcess';
import Pricing from './components/Pricing';
import SpecialOffers from './components/SpecialOffers';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import About from './components/About';
import EmergencyCTA from './components/EmergencyCTA';
import ContactBooking from './components/ContactBooking';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [bookingService, setBookingService] = useState<string>('Periodic Service');
  const [bookingNotes, setBookingNotes] = useState<string>('');
  const [appliedCoupon, setAppliedCoupon] = useState<string>('');

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const topOffset = 70;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      const topOffset = 70;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleBookService = (serviceName: string) => {
    setBookingService(serviceName);
    scrollToContact();
  };

  const handleSelectPackageForBooking = (packageName: string) => {
    setBookingService(packageName);
    scrollToContact();
  };

  const handleSelectCategoryForBooking = (categoryName: string) => {
    setBookingNotes(`Two-Wheeler Category: ${categoryName}`);
    scrollToContact();
  };

  const handleApplyOffer = (code: string) => {
    setAppliedCoupon(code);
    scrollToContact();
  };

  const handleBookPickup = () => {
    setBookingNotes('Requested Doorstep Pickup & Return Delivery in Chennai');
    scrollToContact();
  };

  const handleApplyCustomEstimate = (details: {
    bikeType: string;
    packageName: string;
    totalEst: number;
    notes: string;
  }) => {
    setBookingService(details.packageName);
    setBookingNotes(`${details.notes} | Estimated Total: ₹${details.totalEst}`);
    scrollToContact();
  };

  const handleQuickServiceSelect = (quickId: string) => {
    const serviceNameMap: Record<string, string> = {
      engine: 'Engine Repair & Overhaul',
      oil: 'Periodic Service',
      brake: 'Brake & Clutch Service',
      tyre: 'Tyre & Wheel Service',
      electrical: 'Electrical Diagnostics & Wiring',
      inspection: 'Complete Service Package'
    };

    const targetService = serviceNameMap[quickId] || 'Periodic Service';
    setBookingService(targetService);
    scrollToServices();
  };

  return (
    <div className="min-h-screen bg-[#121316] text-[#E2E4E9] flex flex-col font-body selection:bg-[#E65100] selection:text-white">
      {/* Sticky Top Bar */}
      <Navbar onBookClick={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onBookClick={scrollToContact}
          onExploreClick={scrollToServices}
        />

        {/* Quick Service Bar */}
        <QuickServiceBar onSelectService={handleQuickServiceSelect} />

        {/* Services Section */}
        <Services onBookService={handleBookService} />

        {/* Bike & Scooter Types Section */}
        <BikeTypes onSelectCategoryForBooking={handleSelectCategoryForBooking} />

        {/* Workshop Experience Section */}
        <WorkshopExperience />

        {/* Service Process */}
        <ServiceProcess onBookClick={scrollToContact} />

        {/* Pricing Section */}
        <Pricing
          onSelectPackageForBooking={handleSelectPackageForBooking}
          onApplyCustomEstimate={handleApplyCustomEstimate}
        />

        {/* Special Offers & Doorstep Pickup & Drop Section */}
        <SpecialOffers
          onApplyOffer={handleApplyOffer}
          onBookPickup={handleBookPickup}
        />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Testimonials */}
        <Testimonials />

        {/* Workshop Gallery */}
        <Gallery />

        {/* About Section */}
        <About />

        {/* Emergency / Breakdown Support CTA */}
        <EmergencyCTA />

        {/* Contact & Booking Section */}
        <ContactBooking
          initialService={bookingService}
          initialNotes={bookingNotes}
          appliedCoupon={appliedCoupon}
        />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* 24/7 Floating WhatsApp Advisor */}
      <FloatingWhatsApp />
    </div>
  );
}
