import React, { useState } from 'react';
import { 
  FileText, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Bot, 
  Laptop, 
  FolderLock, 
  Stamp, 
  Landmark, 
  FileCheck,
  Building2,
  ScanLine,
  Fingerprint
} from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'flow' | 'stamp'>('flow');

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-slate-800/80 bg-slate-950 py-12 md:py-20">
      {/* Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_waseeqa_office_1790331844412.jpg"
          alt="Modern Pakistani Legal and Documentation Consultancy Office"
          className="h-full w-full object-cover object-center opacity-25 filter blur-[1px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.25),rgba(255,255,255,0))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headings, Urdu Copy, Badges & CTAs */}
          <div className="lg:col-span-6 flex flex-col text-left">
            
            {/* Trust Marker & Status */}
            <div className="inline-flex items-center gap-2.5 text-xs text-amber-400/90 font-medium mb-4">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Modern Legal & Documentation Services Center</span>
              <span className="text-slate-600">·</span>
              <span>Pakistan Nationwide</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-none">
              AI Waseeqa Navesi
            </h1>

            {/* Subheading */}
            <p className="mt-3 text-lg sm:text-xl font-semibold text-blue-400 tracking-wide">
              Legal Documentation • Online Services • Government Services
            </p>

            {/* Authentic Urdu Supporting Line */}
            <div className="mt-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm">
              <p className="text-xl sm:text-2xl font-urdu text-amber-200 text-right leading-loose">
                آپ کے ضروری دستاویزات اور آن لائن کام، آسان اور منظم طریقے سے۔
              </p>
              <p className="mt-1 text-sm text-slate-300">
                Drafting stamp papers, FBR tax filer returns, property registry dossiers, biometric guidance, and government schemes through structured, computerized precision.
              </p>
            </div>

            {/* Key Service Bullets (Editorial, clean) */}
            <div className="mt-5 grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Verified E-Stamp Paper</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Active FBR Tax Filer</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Property Registry Dossiers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Online Govt Applications</span>
              </div>
            </div>

            {/* Two Primary CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:from-blue-500 hover:to-indigo-500 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <span>Get Services</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-semibold text-slate-200 shadow-sm transition-all hover:border-slate-500 hover:bg-slate-800 hover:text-white whitespace-nowrap"
              >
                <Phone className="h-4 w-4 text-amber-400" />
                <span>Contact Us</span>
              </a>

              <button
                onClick={() => onOpenConsultation('Quick Inquiry')}
                className="text-xs text-slate-400 hover:text-amber-300 underline underline-offset-4 transition-colors cursor-pointer"
              >
                Or request free consultation call →
              </button>
            </div>

            {/* Direct Hotline Marker */}
            <div className="mt-6 flex items-center gap-3 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Helpline:</span>
              <a href="tel:+923401266879" className="text-amber-400 font-bold hover:underline font-mono">
                +92 340 1266879
              </a>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">Mon - Sat: 9:00 AM - 8:00 PM</span>
            </div>
          </div>

          {/* Right Column: Hero Animation - Modern Digital Legal Office & Document Pipeline */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-5 sm:p-7 shadow-2xl backdrop-blur-xl">
              
              {/* Header Bar of the Simulation Card */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex space-x-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2">ai-waseeqa-workspace</span>
                </div>

                <div className="flex items-center gap-1.5 bg-slate-950/80 p-1 rounded-lg border border-slate-800 text-xs">
                  <button
                    onClick={() => setActiveTab('flow')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'flow' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Digital Pipeline
                  </button>
                  <button
                    onClick={() => setActiveTab('stamp')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'stamp' ? 'bg-blue-600 text-white font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    E-Stamp View
                  </button>
                </div>
              </div>

              {/* View 1: Physical to Digital AI Workspace Pipeline */}
              {activeTab === 'flow' && (
                <div className="space-y-4">
                  {/* Floating Legal Icons Bar */}
                  <div className="flex items-center justify-between px-2 text-slate-400 text-xs">
                    <div className="flex items-center gap-1.5">
                      <FolderLock className="h-4 w-4 text-amber-400" />
                      <span>Physical Dossier</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-blue-400">
                      <ScanLine className="h-4 w-4 animate-spin" style={{ animationDuration: '6s' }} />
                      <span className="font-semibold">AI Scan & Structuring</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-emerald-400">
                      <FileCheck className="h-4 w-4" />
                      <span>Execution Ready</span>
                    </div>
                  </div>

                  {/* The Interactive Interactive Flow Area */}
                  <div className="relative rounded-xl border border-slate-800/80 bg-slate-950/90 p-4 overflow-hidden min-h-[280px]">
                    {/* Laser Scanning Line */}
                    <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_12px_#3b82f6] animate-scan-line pointer-events-none z-20" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                      {/* Left: Input / Raw Physical File */}
                      <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3.5 space-y-2.5">
                        <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-2">
                          <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                            <Stamp className="h-3.5 w-3.5 text-amber-400" />
                            Client Requirement
                          </span>
                          <span className="text-[10px] text-amber-300 font-mono">STAGE 01</span>
                        </div>
                        
                        <div className="space-y-2 text-xs">
                          <div className="p-2 rounded bg-slate-950/80 border border-slate-800 text-slate-300 flex items-center justify-between">
                            <span>Bayan-e-Halfi / Affidavit</span>
                            <span className="text-[10px] text-emerald-400">Raw Input</span>
                          </div>
                          <div className="p-2 rounded bg-slate-950/80 border border-slate-800 text-slate-300 flex items-center justify-between">
                            <span>CNIC & Property Fard Copies</span>
                            <span className="text-[10px] text-emerald-400">Verified</span>
                          </div>
                          <div className="p-2 rounded bg-slate-950/80 border border-slate-800 text-slate-300 flex items-center justify-between">
                            <span>FBR IRIS Income Tax Slips</span>
                            <span className="text-[10px] text-emerald-400">Imported</span>
                          </div>
                        </div>

                        <div className="pt-1 flex items-center gap-1.5 text-[11px] text-slate-400">
                          <Laptop className="h-3 w-3 text-blue-400" />
                          <span>Computerized Waseeqa System</span>
                        </div>
                      </div>

                      {/* Right: AI Output / Verification */}
                      <div className="rounded-lg border border-blue-900/50 bg-blue-950/20 p-3.5 space-y-2.5">
                        <div className="flex items-center justify-between text-xs border-b border-blue-900/40 pb-2">
                          <span className="font-semibold text-blue-300 flex items-center gap-1.5">
                            <Bot className="h-3.5 w-3.5 text-blue-400" />
                            AI Legal Processing
                          </span>
                          <span className="text-[10px] text-emerald-400 font-mono">STATUS: OK</span>
                        </div>

                        <div className="space-y-2 text-xs">
                          <div className="p-2 rounded bg-slate-950/80 border border-blue-900/40 text-slate-200">
                            <div className="flex justify-between items-center text-[11px] text-amber-300">
                              <span>E-Stamp Serial</span>
                              <span className="font-mono">PB-LHR-2026-9810</span>
                            </div>
                            <div className="text-[10px] text-slate-400 mt-0.5">Statutory formatting checked</div>
                          </div>

                          <div className="p-2 rounded bg-slate-950/80 border border-blue-900/40 text-slate-200">
                            <div className="flex justify-between items-center text-[11px] text-emerald-400">
                              <span>Digital Signature & Seals</span>
                              <span>Ready</span>
                            </div>
                            <div className="text-[10px] text-slate-400 mt-0.5">Witness & sub-registrar layout</div>
                          </div>

                          <div className="p-2 rounded bg-slate-950/80 border border-blue-900/40 text-slate-200">
                            <div className="flex justify-between items-center text-[11px] text-blue-300">
                              <span>FBR Active Tax Status</span>
                              <span className="font-mono font-bold text-emerald-400">ATL ACTIVE</span>
                            </div>
                          </div>
                        </div>

                        <div className="pt-1 flex items-center justify-between text-[11px] text-emerald-400">
                          <span className="flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3" />
                            File Ready for Execution
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Animated Connection Bridge in Bottom */}
                    <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                      <div className="flex items-center gap-2">
                        <Fingerprint className="h-3.5 w-3.5 text-blue-400" />
                        <span>Biometric & NADRA compatible formatting</span>
                      </div>
                      <span className="text-amber-400 font-medium">Standard Compliance</span>
                    </div>
                  </div>
                </div>
              )}

              {/* View 2: Authentic Pakistani E-Stamp Paper Preview */}
              {activeTab === 'stamp' && (
                <div className="rounded-xl border border-amber-600/30 bg-amber-950/10 p-4 text-slate-200 space-y-3">
                  <div className="border-b border-amber-500/20 pb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded bg-amber-500/20 flex items-center justify-center text-amber-400 font-bold text-xs">
                        🏛️
                      </div>
                      <div>
                        <div className="text-xs font-bold text-amber-300">GOVERNMENT OF THE PUNJAB</div>
                        <div className="text-[10px] text-slate-400">E-STAMPING SYSTEM • CHALLAN FORM 32-A</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-slate-400">Stamp Value</div>
                      <div className="text-sm font-bold text-amber-400 font-mono">PKR 100 / 1,200</div>
                    </div>
                  </div>

                  <div className="bg-slate-950/80 rounded-lg p-3 text-xs space-y-2 border border-slate-800">
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div>
                        <span className="text-slate-500 block">E-Stamp No:</span>
                        <span className="font-mono text-slate-200">PB-LHR-E739810-2026</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Issue Date:</span>
                        <span className="font-mono text-slate-200">25-Sep-2026</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">First Party:</span>
                        <span className="text-slate-200">Seller / Executant (CNIC Verified)</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block">Second Party:</span>
                        <span className="text-slate-200">Purchaser / Beneficiary</span>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-slate-800/80">
                      <div className="text-[11px] font-semibold text-blue-300 mb-1">
                        Contract Agreement / Bayan-e-Halfi Draft Body:
                      </div>
                      <p className="text-[11px] text-slate-300 italic font-urdu leading-loose text-right">
                        منکہ مسمیٰ با ہوش و حواس خمسہ بلا جبر و اکراہ روبرو گواہان اقرار کرتا ہوں کہ مندرجہ بالا شرائط درست و تسلیم ہیں۔۔۔
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      QR Code & Barcode Verification Built-in
                    </span>
                    <button 
                      onClick={() => onOpenConsultation('Legal Drafting / Stamp Paper')}
                      className="text-amber-400 hover:text-amber-300 underline font-semibold"
                    >
                      Draft Your E-Stamp →
                    </button>
                  </div>
                </div>
              )}

              {/* Bottom Quick Feature Strip */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Landmark className="h-3.5 w-3.5 text-blue-400" />
                  <span>Judicial & Non-Judicial Documentation</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5 text-indigo-400" />
                  <span>Sub-Registrar Standards</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
