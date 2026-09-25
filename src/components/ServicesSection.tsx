import React, { useState } from 'react';
import { 
  ArrowRight, 
  Check, 
  ExternalLink, 
  Sparkles,
  Search,
  MessageCircle,
  Phone
} from 'lucide-react';
import { servicesData, ServiceItem } from '../data/servicesData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedServiceForSimulation, setSelectedServiceForSimulation] = useState<string>('filer');

  const activeService = servicesData.find(s => s.id === selectedServiceForSimulation) || servicesData[0];

  return (
    <section id="services" className="relative py-16 lg:py-24 bg-[#f8fafc] text-slate-900 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching reference screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
            Services Section
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0c2356]">
            Our Services
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 font-urdu">
            تمام ضروری قانونی، سرکاری اور آن لائن خدمات کا ایک مکمل اور جدید مرکز
          </p>
        </div>

        {/* 8 Signature Service Cards matching reference screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 01: Filer Related Services */}
          <div
            onMouseEnter={() => {
              setHoveredCard('filer');
              setSelectedServiceForSimulation('filer');
            }}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-2xl bg-white p-5 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0c2356] transition-colors">
                Filer Related Services
              </h3>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                Filer
              </p>

              {/* Multi-step Visual Diagram: Tax Doc -> Verification -> Completed */}
              <div className="my-6 py-4 px-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-1.5 overflow-hidden">
                
                {/* 1. Tax Document Icon */}
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <div className="relative h-12 w-10 rounded-md bg-white border border-slate-300 shadow-xs p-1 flex flex-col justify-between group-hover:border-blue-400 transition-colors">
                    <div className="w-5 h-2 rounded bg-amber-400 text-[6px] font-black text-slate-900 flex items-center justify-center uppercase">
                      TAX
                    </div>
                    <div className="space-y-0.5">
                      <div className="h-0.5 w-full bg-slate-200" />
                      <div className="h-0.5 w-4/5 bg-slate-200" />
                      <div className="h-0.5 w-3/5 bg-slate-200" />
                    </div>
                    <div className="h-1.5 w-3 rounded-xs bg-emerald-500/40" />
                  </div>
                  <span className="text-[9px] font-bold text-slate-600">Filer</span>
                </div>

                {/* Arrow 1 */}
                <span className="text-slate-400 font-bold text-sm">→</span>

                {/* 2. Verification Green Circle */}
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <div className="h-9 w-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    <Check className="h-5 w-5 stroke-[3]" />
                  </div>
                  <span className="text-[9px] font-medium text-slate-600">Verification</span>
                </div>

                {/* Arrow 2 */}
                <span className="text-slate-400 font-bold text-sm">→</span>

                {/* 3. Completed Green Circle */}
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <div className="h-9 w-9 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                    <Check className="h-5 w-5 stroke-[3]" />
                  </div>
                  <span className="text-[9px] font-bold text-emerald-700">Completed</span>
                </div>

              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                NTN registration, FBR Iris income tax returns, wealth statements, and Active Taxpayer List (ATL) certification.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-bold text-emerald-700 font-mono">FBR Active Status</span>
              <button
                onClick={() => onSelectService(servicesData[0])}
                className="text-xs font-bold text-[#0c2356] hover:text-blue-700 inline-flex items-center gap-1"
              >
                <span>Get Service</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 02: Professional Legal Drafting Services */}
          <div
            onMouseEnter={() => {
              setHoveredCard('legal-drafting');
              setSelectedServiceForSimulation('legal-drafting');
            }}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-2xl bg-white p-5 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0c2356] transition-colors">
                Professional Legal Drafting
              </h3>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                Legal Drafting
              </p>

              {/* Multi-step Visual Diagram: Blank Sheet + Pen -> Arrow -> Stamped Legal Agreement */}
              <div className="my-6 py-4 px-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-around gap-2 overflow-hidden">
                
                {/* 1. Blank Document being written with Pen */}
                <div className="relative flex flex-col items-center">
                  <div className="relative h-13 w-10 rounded-md bg-white border border-slate-300 shadow-xs p-1.5">
                    <div className="space-y-1">
                      <div className="h-0.5 w-full bg-slate-300" />
                      <div className="h-0.5 w-4/5 bg-slate-300" />
                      <div className="h-0.5 w-3/5 bg-blue-400" />
                    </div>
                    {/* Sleek Blue Fountain Pen */}
                    <div className="absolute -right-2 top-2 h-7 w-2 bg-gradient-to-b from-blue-700 via-blue-500 to-amber-400 rounded-full rotate-[-35deg] shadow-xs group-hover:rotate-[-20deg] transition-transform duration-300" />
                  </div>
                  <span className="text-[9px] font-medium text-slate-600 mt-1">Drafting</span>
                </div>

                <span className="text-slate-400 font-bold text-sm">→</span>

                {/* 2. Finished Legal Agreement with Red Official Seal */}
                <div className="flex flex-col items-center">
                  <div className="relative h-13 w-10 rounded-md bg-white border border-slate-300 shadow-xs p-1.5 group-hover:border-amber-500 transition-colors">
                    <div className="h-1.5 w-full bg-emerald-700/30 rounded-xs mb-1" />
                    <div className="space-y-0.5">
                      <div className="h-0.5 w-full bg-slate-300" />
                      <div className="h-0.5 w-full bg-slate-300" />
                      <div className="h-0.5 w-3/4 bg-slate-300" />
                    </div>
                    {/* Official Red Wax Stamp Seal */}
                    <div className="absolute bottom-1 right-1 h-3.5 w-3.5 rounded-full bg-red-600/90 border border-red-700 flex items-center justify-center text-[5px] text-white font-bold shadow-xs">
                      ★
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-slate-800 mt-1">E-Stamp</span>
                </div>

              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Rent agreements, affidavits (Bayan-e-Halfi), partnership deeds, and contracts drafted on official Form 32-A e-Stamp paper.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-bold text-amber-700 font-mono">Verified E-Stamp</span>
              <button
                onClick={() => onSelectService(servicesData[1])}
                className="text-xs font-bold text-[#0c2356] hover:text-blue-700 inline-flex items-center gap-1"
              >
                <span>Get Service</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 03: Property Registry & Documentation */}
          <div
            onMouseEnter={() => {
              setHoveredCard('registry');
              setSelectedServiceForSimulation('registry');
            }}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-2xl bg-white p-5 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0c2356] transition-colors">
                Property Registry & Docs
              </h3>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                Registry
              </p>

              {/* Multi-step Visual Diagram: House + Check -> Arrow -> Stamped Registry Deed */}
              <div className="my-6 py-4 px-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-around gap-2 overflow-hidden">
                
                {/* 1. House with Green Checkmark */}
                <div className="flex flex-col items-center">
                  <div className="relative h-12 w-12 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-xl shadow-xs">
                    🏡
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-md bg-emerald-500 text-white flex items-center justify-center text-[9px] shadow-xs">
                      ✓
                    </div>
                  </div>
                  <span className="text-[9px] font-medium text-slate-600 mt-1">Property</span>
                </div>

                <span className="text-slate-400 font-bold text-sm">→</span>

                {/* 2. Registry Deed + Notary Stamp */}
                <div className="flex flex-col items-center">
                  <div className="relative flex items-center">
                    <div className="h-13 w-10 rounded-md bg-white border border-slate-300 shadow-xs p-1.5">
                      <div className="space-y-1">
                        <div className="h-0.5 w-full bg-slate-300" />
                        <div className="h-0.5 w-full bg-slate-300" />
                        <div className="h-0.5 w-2/3 bg-slate-300" />
                      </div>
                    </div>
                    {/* Wooden / Brass Notary Stamp icon */}
                    <div className="absolute -right-2.5 bottom-0 h-6 w-5 bg-gradient-to-t from-amber-700 via-amber-800 to-amber-950 rounded-t-sm shadow-md flex items-end justify-center group-hover:translate-y-[-2px] transition-transform">
                      <div className="w-6 h-1.5 bg-amber-500 rounded-xs" />
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-slate-800 mt-1">Registered</span>
                </div>

              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Sale deeds (Baye Nama), Fard Malkiat verification, DC table valuation rates, and sub-registrar registration files.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-bold text-blue-700 font-mono">Sub-Registrar</span>
              <button
                onClick={() => onSelectService(servicesData[2])}
                className="text-xs font-bold text-[#0c2356] hover:text-blue-700 inline-flex items-center gap-1"
              >
                <span>Get Service</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 04: Complete File Preparation */}
          <div
            onMouseEnter={() => {
              setHoveredCard('file-preparation');
              setSelectedServiceForSimulation('file-preparation');
            }}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-2xl bg-white p-5 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0c2356] transition-colors">
                Complete File Preparation
              </h3>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                File Preparation
              </p>

              {/* Multi-step Visual Diagram: Multiple yellow folders -> Arrow -> Neat bound blue dossier */}
              <div className="my-6 py-4 px-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-around gap-2 overflow-hidden">
                
                {/* 1. Multiple loose yellow files */}
                <div className="flex flex-col items-center">
                  <div className="relative h-12 w-12 flex items-center justify-center">
                    <div className="absolute top-0 left-0 h-9 w-10 rounded bg-amber-400 border border-amber-500 rotate-[-12deg] shadow-xs" />
                    <div className="absolute top-1 left-2 h-9 w-10 rounded bg-amber-300 border border-amber-400 shadow-xs" />
                  </div>
                  <span className="text-[9px] font-medium text-slate-600 mt-1">Scattered</span>
                </div>

                <span className="text-slate-400 font-bold text-sm">→</span>

                {/* 2. Organized Blue Bound File */}
                <div className="flex flex-col items-center">
                  <div className="h-12 w-11 rounded-md bg-blue-700 border-2 border-blue-900 shadow-md p-1 flex flex-col justify-between text-white group-hover:scale-105 transition-transform">
                    <div className="flex items-center justify-between">
                      <div className="h-1.5 w-4 bg-white/80 rounded-xs" />
                      <div className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="h-0.5 w-full bg-white/60" />
                      <div className="h-0.5 w-full bg-white/60" />
                      <div className="h-0.5 w-3/4 bg-white/60" />
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-slate-800 mt-1">Indexed File</span>
                </div>

              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Systematic collation, indexing, and presentation dossiers for court submissions, bank loans, visa applications, and tenders.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-bold text-indigo-700 font-mono">Dossier Binding</span>
              <button
                onClick={() => onSelectService(servicesData[3])}
                className="text-xs font-bold text-[#0c2356] hover:text-blue-700 inline-flex items-center gap-1"
              >
                <span>Get Service</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 05: Legal Research & Information */}
          <div
            onMouseEnter={() => {
              setHoveredCard('legal-research');
              setSelectedServiceForSimulation('legal-research');
            }}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-2xl bg-white p-5 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0c2356] transition-colors">
                Legal Research & Info
              </h3>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                Legal Research
              </p>

              {/* Multi-step Visual Diagram: Law books -> AI Magnifier -> Summary */}
              <div className="my-6 py-4 px-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-around gap-2 overflow-hidden">
                
                {/* 1. Law book */}
                <div className="flex flex-col items-center">
                  <div className="h-12 w-10 rounded bg-indigo-900 border border-indigo-950 p-1 text-amber-300 flex flex-col justify-between shadow-xs">
                    <span className="text-[7px] font-serif font-bold uppercase">PLD</span>
                    <div className="space-y-0.5">
                      <div className="h-0.5 w-full bg-white/40" />
                      <div className="h-0.5 w-full bg-white/40" />
                    </div>
                  </div>
                  <span className="text-[9px] font-medium text-slate-600 mt-1">Statutes</span>
                </div>

                <span className="text-slate-400 font-bold text-sm">→</span>

                {/* 2. AI Search Magnifier + Extracted Precedent */}
                <div className="flex flex-col items-center">
                  <div className="relative h-12 w-11 rounded bg-white border border-slate-300 p-1 shadow-xs">
                    <div className="h-1 w-full bg-blue-500 rounded-xs mb-1" />
                    <div className="space-y-0.5">
                      <div className="h-0.5 w-full bg-slate-200" />
                      <div className="h-0.5 w-4/5 bg-slate-200" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] shadow-xs">
                      🔍
                    </div>
                  </div>
                  <span className="text-[9px] font-bold text-slate-800 mt-1">Precedents</span>
                </div>

              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Computerized statutory discovery, procedural clarifications across Civil Procedure Code, and relevant case law cross-referencing.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-bold text-sky-700 font-mono">Precedent Discovery</span>
              <button
                onClick={() => onSelectService(servicesData[4])}
                className="text-xs font-bold text-[#0c2356] hover:text-blue-700 inline-flex items-center gap-1"
              >
                <span>Get Service</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 06: Biometric Related Services */}
          <div
            onMouseEnter={() => {
              setHoveredCard('biometric');
              setSelectedServiceForSimulation('biometric');
            }}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-2xl bg-white p-5 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0c2356] transition-colors">
                Biometric Related Services
              </h3>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                Biometric
              </p>

              {/* Multi-step Visual Diagram: Fingerprint -> Scanner Beam -> Verification */}
              <div className="my-6 py-4 px-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-around gap-2 overflow-hidden">
                
                {/* 1. Fingerprint with scanning line */}
                <div className="flex flex-col items-center">
                  <div className="relative h-12 w-11 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-xl text-blue-600 overflow-hidden shadow-xs">
                    👆
                    <div className="absolute inset-x-0 h-[2px] bg-blue-500 shadow-sm animate-scan-line" />
                  </div>
                  <span className="text-[9px] font-medium text-slate-600 mt-1">Scan</span>
                </div>

                <span className="text-slate-400 font-bold text-sm">→</span>

                {/* 2. Verified Token */}
                <div className="flex flex-col items-center">
                  <div className="h-12 w-11 rounded-lg bg-emerald-50 border border-emerald-300 flex flex-col items-center justify-center text-emerald-700 shadow-xs">
                    <span className="text-xs font-bold font-mono">NADRA</span>
                    <span className="text-[8px] bg-emerald-600 text-white px-1 rounded-xs mt-0.5 font-bold">VERIFIED</span>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-700 mt-1">E-Sahulat</span>
                </div>

              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Step-by-step guidance for NADRA Pak-ID biometric app, vehicle transfer e-biometrics, and fingerprint mismatch resolution.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-bold text-rose-700 font-mono">E-Biometrics</span>
              <button
                onClick={() => onSelectService(servicesData[5])}
                className="text-xs font-bold text-[#0c2356] hover:text-blue-700 inline-flex items-center gap-1"
              >
                <span>Get Service</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 07: Online Job Applications */}
          <div
            onMouseEnter={() => {
              setHoveredCard('jobs-apply');
              setSelectedServiceForSimulation('jobs-apply');
            }}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-2xl bg-white p-5 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0c2356] transition-colors">
                Online Job Applications
              </h3>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                Online Job Applications
              </p>

              {/* Multi-step Visual Diagram: Job Ad -> Form + Challan -> Roll No Slip */}
              <div className="my-6 py-4 px-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-around gap-2 overflow-hidden">
                
                {/* 1. Job Ad + Briefcase */}
                <div className="flex flex-col items-center">
                  <div className="h-12 w-11 rounded-lg bg-teal-50 border border-teal-200 flex flex-col items-center justify-center shadow-xs">
                    <span className="text-sm">💼</span>
                    <span className="text-[8px] font-bold text-teal-800">PPSC</span>
                  </div>
                  <span className="text-[9px] font-medium text-slate-600 mt-1">Listing</span>
                </div>

                <span className="text-slate-400 font-bold text-sm">→</span>

                {/* 2. Confirmed Roll No Slip */}
                <div className="flex flex-col items-center">
                  <div className="h-12 w-11 rounded-md bg-white border border-teal-400 shadow-xs p-1 flex flex-col justify-between">
                    <div className="text-[7px] font-mono font-bold text-teal-700">SUBMITTED</div>
                    <div className="h-2 w-full bg-slate-200 rounded-xs flex items-center px-0.5">
                      <div className="h-1 w-2/3 bg-teal-600" />
                    </div>
                    <div className="text-[6px] text-slate-500 font-mono">Roll # 8419</div>
                  </div>
                  <span className="text-[9px] font-bold text-slate-800 mt-1">Roll No Slip</span>
                </div>

              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Accurate online submissions for PPSC, FPSC, NTS, PTS recruitment portals, challan generation, and profile optimization.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-bold text-teal-700 font-mono">Challan & Slip</span>
              <button
                onClick={() => onSelectService(servicesData[6])}
                className="text-xs font-bold text-[#0c2356] hover:text-blue-700 inline-flex items-center gap-1"
              >
                <span>Get Service</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 08: Government Schemes & Online Applications */}
          <div
            onMouseEnter={() => {
              setHoveredCard('government-schemes');
              setSelectedServiceForSimulation('government-schemes');
            }}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative rounded-2xl bg-white p-5 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0c2356] transition-colors">
                Government Schemes & Apps
              </h3>
              <p className="text-xs font-medium text-slate-500 mt-0.5">
                Government Schemes
              </p>

              {/* Multi-step Visual Diagram: Govt Building -> Application -> Approved */}
              <div className="my-6 py-4 px-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-around gap-2 overflow-hidden">
                
                {/* 1. Government Pillar Building */}
                <div className="flex flex-col items-center">
                  <div className="h-12 w-11 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-xl shadow-xs">
                    🏛️
                  </div>
                  <span className="text-[9px] font-medium text-slate-600 mt-1">Portal</span>
                </div>

                <span className="text-slate-400 font-bold text-sm">→</span>

                {/* 2. Approved Status */}
                <div className="flex flex-col items-center">
                  <div className="h-12 w-11 rounded-md bg-white border border-amber-400 shadow-xs p-1 flex flex-col justify-between text-center">
                    <div className="text-[7px] font-bold text-amber-700">SCHEME</div>
                    <div className="text-[8px] font-bold text-emerald-600 bg-emerald-50 rounded-xs py-0.5">
                      APPROVED
                    </div>
                    <div className="text-[6px] text-slate-400 font-mono">ID: PK-984</div>
                  </div>
                  <span className="text-[9px] font-bold text-slate-800 mt-1">Registered</span>
                </div>

              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Registration support for Apni Chhat Apna Ghar, Kisan Card, Youth Business Loans, and social welfare programs.
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-bold text-amber-700 font-mono">Citizen Subsidy</span>
              <button
                onClick={() => onSelectService(servicesData[7])}
                className="text-xs font-bold text-[#0c2356] hover:text-blue-700 inline-flex items-center gap-1"
              >
                <span>Get Service</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Live Interactive Detail Drawer for Currently Highlighted Service */}
        <div className="mt-14 rounded-2xl bg-white border border-slate-200 p-6 lg:p-8 shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-5 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0c2356] mb-1">
                <span>EXECUTION BLUEPRINT</span>
                <span>·</span>
                <span className="text-amber-600">{activeService.title}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Full 4-Stage Computerized Process
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/923401266879?text=${encodeURIComponent(activeService.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Order on WhatsApp</span>
              </a>

              <button
                onClick={() => onSelectService(activeService)}
                className="inline-flex items-center gap-2 rounded-lg bg-[#0c2356] hover:bg-[#123b8f] px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all"
              >
                <span>Book Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeService.processStages.map((stage, idx) => (
              <div 
                key={idx}
                className="rounded-xl border border-slate-200 bg-slate-50/80 p-4 transition-all hover:bg-white hover:shadow-xs"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="h-6 w-6 rounded-full bg-[#0c2356] text-white font-mono text-xs font-bold flex items-center justify-center">
                    {idx + 1}
                  </span>
                  <span className="text-[10px] text-emerald-700 font-mono font-bold flex items-center gap-1">
                    <Check className="h-3 w-3" />
                    Verified
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-900">
                  {stage.label}
                </h4>
                <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
                  {stage.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
