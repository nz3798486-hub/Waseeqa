import React, { useState } from 'react';
import { 
  MessageSquareText, 
  FileCheck, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  FileBadge 
} from 'lucide-react';
import { processSteps } from '../data/servicesData';

interface HowItWorksSectionProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenConsultation }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stepDetails = [
    {
      detailBullets: [
        'Reach out via WhatsApp or call our helpline (+92 340 1266879).',
        'State your required documentation (e.g. Sale Deed, Rent Agreement, Filer return, Job portal).',
        'Receive an instant clarity checklist of necessary details.'
      ],
      clientAction: 'Share basic particulars via WhatsApp voice note or message',
      estimatedTime: '5 Minutes'
    },
    {
      detailBullets: [
        'Secure inspection of CNIC copies, property title documents, or salary slips.',
        'Cross-verifying party names with NADRA and Arazi Record standards.',
        'Identifying missing legal annexures before any drafting begins.'
      ],
      clientAction: 'Send photos or PDF scans of existing documents',
      estimatedTime: '15–30 Minutes'
    },
    {
      detailBullets: [
        'Statutory drafting on official e-Stamp paper (Form 32-A Challan).',
        'Direct submission on FBR Iris / PPSC / Government scheme portals.',
        'Verification of legal boundary markers, witness sections, and terms.'
      ],
      clientAction: 'Preview drafted copy for review and confirmation',
      estimatedTime: '2–4 Hours'
    },
    {
      detailBullets: [
        'Delivery of verified print-ready e-stamp document or registration dossier.',
        'Official submission confirmation slip, roll number slip, or FBR CPR receipt.',
        'Guidance on Sub-Registrar / Bank / Department presentation.'
      ],
      clientAction: 'Receive final verified file in person or via express courier / WhatsApp PDF',
      estimatedTime: 'Same Day'
    }
  ];

  return (
    <section id="how-it-works" className="relative py-20 bg-slate-950 border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            <Clock className="h-4 w-4 text-amber-400" />
            <span>Structured Process</span>
            <span className="text-slate-600">·</span>
            <span className="font-urdu text-sm normal-case text-amber-300">طریقہ کار</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            How It Works
          </h2>
          <p className="mt-3 text-base text-slate-300">
            A simple, transparent 4-step workflow to get your legal drafts, registries, and government services completed without hassles.
          </p>
        </div>

        {/* 4 Steps Horizontal Stepper Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'border-blue-500 bg-slate-900/90 shadow-xl shadow-blue-500/10 -translate-y-1'
                    : 'border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-2xl font-black font-mono tracking-tight ${
                      isActive ? 'text-amber-400' : 'text-slate-600'
                    }`}>
                      {step.step}
                    </span>
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center border transition-all ${
                      isActive 
                        ? 'bg-blue-600 text-white border-blue-400 shadow-sm shadow-blue-500/40' 
                        : 'bg-slate-800/80 text-slate-400 border-slate-700'
                    }`}>
                      {idx === 0 && <MessageSquareText className="h-5 w-5" />}
                      {idx === 1 && <FileCheck className="h-5 w-5" />}
                      {idx === 2 && <Cpu className="h-5 w-5" />}
                      {idx === 3 && <CheckCircle2 className="h-5 w-5" />}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="font-urdu text-sm text-amber-300/90 mb-3">
                    {step.titleUrdu}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className={isActive ? 'text-blue-400 font-semibold' : 'text-slate-500'}>
                    {isActive ? 'Currently Viewing' : 'Click to inspect'}
                  </span>
                  <span className="text-slate-500 font-mono">Step {idx + 1} of 4</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Active Step Deep-Dive Interactive Panel */}
        <div className="mt-10 rounded-2xl border border-blue-900/50 bg-slate-900/80 p-6 sm:p-8 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2.5 py-0.5 rounded">
                  STEP {processSteps[activeStep].step} BREAKDOWN
                </span>
                <span className="text-xs text-slate-400">·</span>
                <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                  <ShieldCheck className="h-3.5 w-3.5" /> Client Protected
                </span>
              </div>

              <h4 className="text-2xl font-bold text-white">
                {processSteps[activeStep].title} — <span className="font-urdu text-amber-300 text-xl">{processSteps[activeStep].titleUrdu}</span>
              </h4>

              <div className="space-y-2.5 pt-2">
                {stepDetails[activeStep].detailBullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <div>
                  <span className="text-slate-500 block">Your Action:</span>
                  <span className="text-slate-200 font-medium">{stepDetails[activeStep].clientAction}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">Estimated Duration:</span>
                  <span className="text-amber-400 font-mono font-bold">{stepDetails[activeStep].estimatedTime}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
                <FileBadge className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-xs font-bold text-white">Ready to begin this step?</div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Direct WhatsApp consultation or phone support available now.
                </div>
              </div>

              <button
                onClick={() => onOpenConsultation(`Step: ${processSteps[activeStep].title}`)}
                className="w-full rounded-lg bg-blue-600 hover:bg-blue-500 py-3 text-xs font-bold text-white shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
              >
                <span>Start Step {activeStep + 1} Now</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
