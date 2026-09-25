import React, { useState } from 'react';
import { 
  FileText, 
  PenTool, 
  Building, 
  FolderArchive, 
  BookOpenCheck, 
  Fingerprint, 
  Briefcase, 
  Landmark, 
  ArrowRight, 
  Check, 
  ShieldCheck,
  Search,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { servicesData, ServiceItem } from '../data/servicesData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'legal' | 'tax' | 'govt' | 'biometric'>('all');
  const [hoveredServiceId, setHoveredServiceId] = useState<string | null>(null);
  const [activeSimulationId, setActiveSimulationId] = useState<string>('filer');

  const filteredServices = activeCategory === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === activeCategory);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'filer':
        return <FileText className="h-6 w-6 text-emerald-400" />;
      case 'legal-drafting':
        return <PenTool className="h-6 w-6 text-amber-400" />;
      case 'registry':
        return <Building className="h-6 w-6 text-blue-400" />;
      case 'file-preparation':
        return <FolderArchive className="h-6 w-6 text-indigo-400" />;
      case 'legal-research':
        return <BookOpenCheck className="h-6 w-6 text-sky-400" />;
      case 'biometric':
        return <Fingerprint className="h-6 w-6 text-rose-400" />;
      case 'jobs-apply':
        return <Briefcase className="h-6 w-6 text-teal-400" />;
      case 'government-schemes':
        return <Landmark className="h-6 w-6 text-amber-400" />;
      default:
        return <FileText className="h-6 w-6 text-blue-400" />;
    }
  };

  const activeServiceObj = servicesData.find(s => s.id === activeSimulationId) || servicesData[0];

  return (
    <section id="services" className="relative py-20 bg-slate-950 border-b border-slate-800/80">
      {/* Background glow highlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-900/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-2">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>Comprehensive Solutions</span>
              <span className="text-slate-600">·</span>
              <span className="font-urdu text-sm normal-case text-amber-300">ہماری خدمات</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Our Services
            </h2>
            <p className="mt-2 text-base text-slate-400 max-w-2xl">
              From FBR tax filings and e-stamp legal drafting to property registry files and online government applications—handled with digital precision.
            </p>
          </div>

          {/* Interactive Category Segmented Tabs */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              All (8)
            </button>
            <button
              onClick={() => setActiveCategory('legal')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'legal'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              Legal & Registry
            </button>
            <button
              onClick={() => setActiveCategory('tax')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'tax'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              Filer & Tax
            </button>
            <button
              onClick={() => setActiveCategory('biometric')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'biometric'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              Biometric
            </button>
            <button
              onClick={() => setActiveCategory('govt')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === 'govt'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              Jobs & Schemes
            </button>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const isHovered = hoveredServiceId === service.id;
            const isSelectedSim = activeSimulationId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => {
                  setHoveredServiceId(service.id);
                  setActiveSimulationId(service.id);
                }}
                onMouseLeave={() => setHoveredServiceId(null)}
                className={`group relative rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 ${
                  isSelectedSim
                    ? 'border-blue-500/80 bg-slate-900/90 shadow-xl shadow-blue-500/10 -translate-y-1'
                    : 'border-slate-800/90 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/70 hover:-translate-y-1 hover:shadow-lg'
                }`}
              >
                {/* Glowing Aura on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 pointer-events-none ${
                  isHovered || isSelectedSim ? 'opacity-100' : ''
                }`} />

                <div>
                  {/* Card Header: Service Number and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-blue-400 transition-colors">
                      Service {service.number}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800/80 border border-slate-700/60 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300">
                      {getServiceIcon(service.id)}
                    </div>
                  </div>

                  {/* Urdu & English Titles */}
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-urdu text-sm text-amber-300/90 mt-1 line-clamp-1">
                    {service.titleUrdu}
                  </p>

                  {/* Tagline / Subtitle */}
                  <p className="text-xs text-slate-400 mt-2 font-medium">
                    {service.tagline}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs text-slate-400 mt-3 leading-relaxed border-t border-slate-800/60 pt-3">
                    {service.description}
                  </p>

                  {/* Visual Tags / Elements */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.visualElements.slice(0, 3).map((elem) => (
                      <span
                        key={elem}
                        className="text-[10px] text-slate-400 bg-slate-800/70 px-2 py-0.5 rounded border border-slate-700/50"
                      >
                        {elem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveSimulationId(service.id)}
                    className="text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    View Process
                  </button>

                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600/90 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-500 transition-all group-hover:bg-blue-600"
                  >
                    <span>Get Service</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Interactive Workflow Simulation Box for Selected Service */}
        <div className="mt-14 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 lg:p-8 backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-5 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
                <span>SIMULATION PREVIEW</span>
                <span>·</span>
                <span className="text-amber-400 font-bold">{activeServiceObj.title}</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                How this service is executed from start to completion
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={`https://wa.me/923401266879?text=${encodeURIComponent(activeServiceObj.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs font-bold text-white shadow-sm transition-all"
              >
                <span>Order via WhatsApp</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <button
                onClick={() => onSelectService(activeServiceObj)}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 px-4 py-2 text-xs font-bold text-white shadow-sm transition-all"
              >
                <span>Request Consultation</span>
              </button>
            </div>
          </div>

          {/* 4 Execution Steps for the Active Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeServiceObj.processStages.map((stage, idx) => (
              <div 
                key={idx}
                className="relative rounded-xl border border-slate-800 bg-slate-950/80 p-4 transition-all hover:border-slate-700"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="h-6 w-6 rounded-full bg-blue-600/20 text-blue-400 font-mono text-xs font-bold flex items-center justify-center border border-blue-500/30">
                    {idx + 1}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono font-medium flex items-center gap-1">
                    <Check className="h-3 w-3" />
                    Verified
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-200">
                  {stage.label}
                </h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
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
