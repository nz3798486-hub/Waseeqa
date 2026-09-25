import React, { useState } from 'react';
import traditionalSplitImg from '../assets/images/traditional_digital_split_1790331866250.jpg';
import { 
  FileStack, 
  Cpu, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  Layers, 
  Zap, 
  Search, 
  ShieldCheck, 
  RefreshCw,
  FolderOpen,
  SlidersHorizontal
} from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const traditionalPoints = [
    { title: 'Manual Typing on Typewriters', detail: 'Prone to typographical errors requiring complete re-stamping.' },
    { title: 'Physical Register Hunting', detail: 'Searching through dusty record books in district record rooms.' },
    { title: 'Scattered Unorganized Paperwork', detail: 'Frequent lost annexures, missing CNIC copies, and uncertified slips.' },
    { title: 'Uncertain Tax & Legal Revisions', detail: 'Outdated manual calculations of stamp duty and DC rates.' }
  ];

  const aiDigitalPoints = [
    { title: 'Computerized E-Stamp Precision', detail: 'Formatted digital templates conforming with statutory legal provisions.' },
    { title: 'Instant Statues & Precedents', detail: 'Quick digital cross-referencing of Pakistani civil and revenue acts.' },
    { title: 'Automated Portfolio Indexing', detail: 'Single bound digital dossier with indexed bookmarks and clean margins.' },
    { title: 'FBR & Active Tax Integration', detail: 'Direct Iris portal synchronization with withholding tax optimization.' }
  ];

  return (
    <section id="technology" className="relative py-20 bg-slate-950/95 border-b border-slate-800/80 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            <Cpu className="h-4 w-4 text-blue-400" />
            <span>Digital Modernization</span>
            <span className="text-slate-600">·</span>
            <span className="font-urdu text-sm normal-case text-amber-300">جدید ٹیکنالوجی اور دستاویزات</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Traditional Documentation Meets AI
          </h2>
          <p className="mt-3 text-base text-slate-300 leading-relaxed">
            AI technology helps make documentation and information-based work more organized, accessible and efficient.
          </p>
          <p className="mt-1 text-xs text-slate-400">
            * We combine modern computerized drafting with experienced human oversight to ensure accurate, compliant documentation. AI assists in organization; judicial procedures remain sovereign.
          </p>
        </div>

        {/* Featured Visual Representation with Split Image */}
        <div className="relative rounded-2xl border border-slate-800 bg-slate-900/80 p-4 sm:p-6 mb-12 shadow-2xl backdrop-blur-xl">
          <div className="relative h-[260px] sm:h-[340px] md:h-[400px] w-full rounded-xl overflow-hidden border border-slate-700/60">
            <img
              src={traditionalSplitImg}
              alt="Traditional legal registers transforming into AI digital workspace"
              className="h-full w-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            
            {/* Scrim Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40 pointer-events-none" />

            {/* Split Badges */}
            <div className="absolute top-4 left-4 z-10 rounded-lg bg-slate-950/80 border border-slate-800 px-3.5 py-1.5 backdrop-blur-md">
              <span className="text-xs font-bold text-amber-400">Traditional Paperwork</span>
              <span className="text-[10px] text-slate-400 block">Physical Registers & Stamps</span>
            </div>

            {/* Center AI Conduit Pill */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-1.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/90 text-white shadow-xl shadow-blue-500/40 border border-blue-400/40 animate-pulse">
                <Sparkles className="h-6 w-6 text-amber-300" />
              </div>
              <span className="text-[11px] font-mono font-bold tracking-widest text-blue-200 bg-slate-950/90 px-3 py-0.5 rounded-full border border-blue-500/30">
                AI BRIDGE
              </span>
            </div>

            <div className="absolute top-4 right-4 z-10 rounded-lg bg-blue-950/90 border border-blue-700/60 px-3.5 py-1.5 backdrop-blur-md">
              <span className="text-xs font-bold text-blue-300">Modern AI Workspace</span>
              <span className="text-[10px] text-slate-400 block">Digital Verification & Speed</span>
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-4 inset-x-4 z-10 flex items-center justify-between text-xs text-slate-300 bg-slate-950/80 p-3 rounded-lg border border-slate-800">
              <span className="hidden sm:inline">From manual stamp queues to structured computerized execution</span>
              <span className="text-amber-400 font-semibold font-mono">Precision • Speed • Compliance</span>
            </div>
          </div>
        </div>

        {/* Detailed Side-by-Side Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Traditional Paperwork */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-800/90 bg-slate-900/50 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-amber-400">
                    <FileStack className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-200">Traditional Documentation</h3>
                    <p className="text-[11px] text-slate-400">Manual Paperwork & Registers</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-rose-400 bg-rose-950/50 border border-rose-900/50 px-2 py-0.5 rounded">
                  Bottlenecks
                </span>
              </div>

              <div className="space-y-4">
                {traditionalPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-500/20 text-rose-400">
                      <AlertCircle className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-300">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
              <span>Average Turnaround:</span>
              <span className="text-rose-400 font-mono">3–7 Business Days</span>
            </div>
          </div>

          {/* Center Column: The AI Conduit */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center py-4 lg:py-0">
            <div className="hidden lg:flex flex-col items-center gap-4 w-full">
              <div className="h-16 w-0.5 bg-gradient-to-b from-slate-700 via-blue-500 to-indigo-600" />
              <div className="rounded-2xl border border-blue-500/50 bg-blue-950/40 p-3 shadow-lg shadow-blue-600/20 text-center">
                <Zap className="h-5 w-5 text-amber-400 mx-auto mb-1 animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-blue-300 block">AUTOMATION</span>
              </div>
              <div className="h-16 w-0.5 bg-gradient-to-b from-indigo-600 via-blue-500 to-slate-700" />
            </div>

            <div className="lg:hidden flex items-center gap-3 py-2 text-xs text-blue-400 font-mono">
              <div className="h-0.5 w-12 bg-blue-500/40" />
              <span>UPGRADED VIA AI ENGINE</span>
              <div className="h-0.5 w-12 bg-blue-500/40" />
            </div>
          </div>

          {/* Right Column: Modern AI Workspace */}
          <div className="lg:col-span-5 rounded-2xl border border-blue-900/60 bg-slate-900/90 p-6 flex flex-col justify-between shadow-xl shadow-blue-600/5">
            <div>
              <div className="flex items-center justify-between border-b border-blue-900/40 pb-3 mb-5">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-amber-300 shadow-sm shadow-blue-500/30">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">AI-Powered Workspace</h3>
                    <p className="text-[11px] text-blue-300">Modern Digital Waseeqa Center</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/50 px-2 py-0.5 rounded">
                  Optimized
                </span>
              </div>

              <div className="space-y-4">
                {aiDigitalPoints.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                      <CheckCircle2 className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-slate-100">{item.title}</h4>
                      <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-900/40 text-xs text-slate-300 flex items-center justify-between">
              <span>Average Turnaround:</span>
              <span className="text-emerald-400 font-mono font-bold">Same-Day / 24 Hours</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
