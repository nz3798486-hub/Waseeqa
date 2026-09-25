import React from 'react';
import { 
  Sparkles, 
  Workflow, 
  FileText, 
  Layers, 
  Cpu, 
  Smile, 
  Headphones, 
  PhoneCall,
  CheckCircle2
} from 'lucide-react';
import { whyChooseUsItems } from '../data/servicesData';

export const WhyChooseUsSection: React.FC = () => {
  const getFeatureIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Workflow className="h-5 w-5 text-blue-400" />;
      case 1:
        return <FileText className="h-5 w-5 text-amber-400" />;
      case 2:
        return <Layers className="h-5 w-5 text-indigo-400" />;
      case 3:
        return <Cpu className="h-5 w-5 text-emerald-400" />;
      case 4:
        return <Smile className="h-5 w-5 text-teal-400" />;
      case 5:
        return <PhoneCall className="h-5 w-5 text-sky-400" />;
      default:
        return <Sparkles className="h-5 w-5 text-blue-400" />;
    }
  };

  return (
    <section id="why-us" className="relative py-20 bg-slate-950/90 border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span>Built for Trust & Clarity</span>
            <span className="text-slate-600">·</span>
            <span className="font-urdu text-sm normal-case text-amber-300">ہمیں کیوں منتخب کریں</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Why Choose Us
          </h2>
          <p className="mt-3 text-base text-slate-300">
            A modern, responsible approach to Pakistani legal drafting and government services focused on precision, speed, and genuine client support.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsItems.map((item, idx) => (
            <div
              key={item.number}
              className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 transition-all duration-300 hover:border-slate-700 hover:bg-slate-900/70 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-blue-400 transition-colors">
                  {item.number}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:border-blue-500/50 group-hover:bg-slate-800 transition-all">
                  {getFeatureIcon(idx)}
                </div>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                {item.title}
              </h3>
              
              <p className="font-urdu text-sm text-amber-300/90 mt-1">
                {item.titleUrdu}
              </p>

              <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-slate-500 group-hover:text-slate-400">
                <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Notice Banner (Zero Pill, Editorial) */}
        <div className="mt-12 rounded-xl border border-slate-800 bg-slate-900/30 p-4 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-400 leading-relaxed">
            <span className="text-slate-300 font-semibold">Standard Compliance:</span> We adhere strictly to statutory provisions of the Stamp Act, Contract Act, Registration Act, and FBR rules. We provide transparent documentation and drafting assistance without making unsupported legal guarantees.
          </p>
        </div>

      </div>
    </section>
  );
};
