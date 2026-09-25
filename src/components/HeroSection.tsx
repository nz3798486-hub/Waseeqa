import React from 'react';
import heroRobotImg from '../assets/images/hero_robot_legal_1790333305199.jpg';
import { 
  ArrowRight, 
  Phone, 
  CheckCircle2, 
  Sparkles, 
  FileCheck, 
  Stamp, 
  Home, 
  ShieldCheck, 
  Fingerprint,
  FileText
} from 'lucide-react';

interface HeroSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#06143b] via-[#0a205a] to-[#0f2c7a] py-12 lg:py-20 text-white">
      {/* Subtle radial tech background glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Exactly matching the reference image */}
          <div className="lg:col-span-6 flex flex-col text-left z-10">
            
            {/* Top Gold Urdu Heading matching screenshot */}
            <div className="mb-2">
              <span className="font-urdu text-2xl sm:text-3xl lg:text-4xl text-[#f5bf42] font-bold tracking-wide drop-shadow-xs block">
                AI وثیقہ نویسی
              </span>
            </div>

            {/* Main English Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              AI Waseeqa Navesi
            </h1>

            {/* Subheading */}
            <p className="mt-2 text-base sm:text-lg font-semibold text-blue-200 tracking-wide">
              Legal Documentation • Online Services • Government Services
            </p>

            {/* Supporting Urdu Line */}
            <p className="mt-4 font-urdu text-lg sm:text-xl text-slate-100 leading-loose max-w-xl">
              آپ کے ضروری دستاویزات اور آن لائن کام، آسان اور منظم طریقے سے۔
            </p>

            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
              Modern computerized legal drafting, authentic e-stamp papers, FBR active tax returns, property registry documentation, and government online applications in one place.
            </p>

            {/* Two Action Buttons matching the screenshot (Gold "Get Services" + White "Contact Us") */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#d99b26] hover:bg-[#c98e1f] px-7 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <span>Get Services</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-slate-100 px-7 py-3 text-sm font-bold text-slate-900 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
              >
                <span>Contact Us</span>
              </a>
            </div>

            {/* Direct Hotline Marker */}
            <div className="mt-8 pt-4 border-t border-blue-400/20 flex flex-wrap items-center gap-4 text-xs text-blue-200">
              <div className="flex items-center gap-2 font-mono">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-300">Helpline:</span>
                <a href="tel:+923401266879" className="font-bold text-[#f5bf42] hover:underline text-sm">
                  +92 340 1266879
                </a>
              </div>
              <span className="text-blue-400/60 hidden sm:inline">|</span>
              <span className="text-slate-300">Punjab, Sindh, KPK & Islamabad</span>
            </div>

          </div>

          {/* Right Column: 3D Robot Illustration with Floating Interactive Legal Elements */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* The Main 3D Artwork Container */}
            <div className="relative w-full max-w-[560px] rounded-2xl overflow-hidden border border-blue-400/30 bg-gradient-to-b from-[#0b2158]/80 to-[#07163d]/90 p-2 shadow-2xl shadow-blue-950/80">
              
              <img
                src={heroRobotImg}
                alt="AI Waseeqa Navesi - 3D AI Robot Assistant drafting legal documents on laptop"
                className="w-full h-auto rounded-xl object-cover transform transition-transform duration-700 hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />

              {/* Floating Interactive Badge 1: Property Registry Verified (Top-Left) */}
              <div className="absolute top-5 left-5 rounded-xl bg-slate-950/90 border border-emerald-500/50 p-2.5 shadow-lg backdrop-blur-md flex items-center gap-2.5 animate-float-slow">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Home className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white flex items-center gap-1">
                    <span>Property Registry</span>
                    <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                  </div>
                  <div className="text-[9px] text-emerald-400 font-mono">Title & Fard Verified</div>
                </div>
              </div>

              {/* Floating Interactive Badge 2: E-Stamp Paper Form 32-A (Top-Right) */}
              <div className="absolute top-5 right-5 rounded-xl bg-slate-950/90 border border-amber-500/50 p-2.5 shadow-lg backdrop-blur-md flex items-center gap-2.5 animate-float-reverse">
                <div className="h-8 w-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Stamp className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white flex items-center gap-1">
                    <span>E-Stamp Form 32-A</span>
                    <Sparkles className="h-3 w-3 text-amber-300" />
                  </div>
                  <div className="text-[9px] text-amber-300 font-mono">Govt Punjab Verified</div>
                </div>
              </div>

              {/* Floating Interactive Badge 3: FBR ATL Active (Bottom-Left) */}
              <div className="absolute bottom-5 left-5 rounded-xl bg-slate-950/90 border border-blue-400/50 p-2.5 shadow-lg backdrop-blur-md flex items-center gap-2.5 animate-float-reverse">
                <div className="h-8 w-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">FBR Active Filer</div>
                  <div className="text-[9px] text-emerald-400 font-mono font-bold">ATL ACTIVE STATUS</div>
                </div>
              </div>

              {/* Floating Interactive Badge 4: Biometric Clear (Bottom-Right) */}
              <div className="absolute bottom-5 right-5 rounded-xl bg-slate-950/90 border border-indigo-400/50 p-2.5 shadow-lg backdrop-blur-md flex items-center gap-2.5 animate-float-slow">
                <div className="h-8 w-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Fingerprint className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white">Biometric Ready</div>
                  <div className="text-[9px] text-indigo-300 font-mono">NADRA / E-Sahulat</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
