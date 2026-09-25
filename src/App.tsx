/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { ComparisonSection } from './components/ComparisonSection';
import { DocumentInspector } from './components/DocumentInspector';
import { HowItWorksSection } from './components/HowItWorksSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VisualAiAssistant } from './components/VisualAiAssistant';
import { ServiceInquiryModal } from './components/ServiceInquiryModal';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ServiceItem } from './data/servicesData';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>(
    'Professional Legal Drafting Services'
  );

  const handleOpenConsultation = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceTitle(serviceName);
    }
    setModalOpen(true);
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceTitle(service.title);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600/30 selection:text-blue-200">
      {/* Primary Top Bar Contract */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Flow */}
      <main className="flex-1 pb-16 md:pb-0">
        {/* Hero Section with Modern Animated Legal Office */}
        <HeroSection onOpenConsultation={handleOpenConsultation} />

        {/* 8 Core Services Grid with Interactive Process Simulations */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* AI Waseeqa Navesi Split Screen: Traditional Documentation Meets AI */}
        <ComparisonSection />

        {/* E-Stamp & Legal Drafting Studio (Interactive Pakistani Documents) */}
        <DocumentInspector onOpenConsultation={handleOpenConsultation} />

        {/* 4-Step Animated Process: How It Works */}
        <HowItWorksSection onOpenConsultation={handleOpenConsultation} />

        {/* 6 Key Features: Why Choose Us */}
        <WhyChooseUsSection />

        {/* Direct Contact & WhatsApp Consultation Section */}
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer onSelectServiceModal={handleOpenConsultation} />

      {/* Floating Animated AI Assistant Robot */}
      <VisualAiAssistant onSelectServiceModal={handleOpenConsultation} />

      {/* Mobile Sticky Quick Action Bar (<15% viewport height compliance) */}
      <MobileStickyBar />

      {/* Service Inquiry & WhatsApp Booking Modal */}
      <ServiceInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialServiceTitle={selectedServiceTitle}
      />
    </div>
  );
}
