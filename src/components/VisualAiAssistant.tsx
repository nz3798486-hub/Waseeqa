import React, { useState } from 'react';
import { 
  Bot, 
  X, 
  MessageCircle, 
  Phone, 
  FileText, 
  Building, 
  Fingerprint, 
  Briefcase, 
  Landmark, 
  FolderArchive, 
  Sparkles,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface VisualAiAssistantProps {
  onSelectServiceModal: (serviceName: string) => void;
}

export const VisualAiAssistant: React.FC<VisualAiAssistantProps> = ({ onSelectServiceModal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const assistantOptions = [
    { label: 'Legal Drafting', icon: FileText, service: 'Professional Legal Drafting Services', whatsapp: 'Assalam-o-Alaikum, I need help with Legal Drafting / Stamp Paper.' },
    { label: 'Property Registry', icon: Building, service: 'Property Registry & Documentation', whatsapp: 'Assalam-o-Alaikum, I need help with Property Registry & Transfer.' },
    { label: 'Filer & Taxes', icon: FileText, service: 'Filer Related Services', whatsapp: 'Assalam-o-Alaikum, I want to become an FBR Active Tax Filer.' },
    { label: 'File Preparation', icon: FolderArchive, service: 'Complete File Preparation', whatsapp: 'Assalam-o-Alaikum, I need Complete File Preparation.' },
    { label: 'Biometric Services', icon: Fingerprint, service: 'Biometric Related Services', whatsapp: 'Assalam-o-Alaikum, I have questions regarding Biometric verification.' },
    { label: 'Jobs Online Apply', icon: Briefcase, service: 'Online Job Applications', whatsapp: 'Assalam-o-Alaikum, I need to apply for an Online Job application.' },
    { label: 'Government Schemes', icon: Landmark, service: 'Government Schemes & Online Applications', whatsapp: 'Assalam-o-Alaikum, I want information about Government Schemes.' },
  ];

  const handleOptionClick = (opt: typeof assistantOptions[0]) => {
    onSelectServiceModal(opt.service);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Expanded AI Dialogue Box */}
      {isOpen && (
        <div className="mb-3 w-[320px] sm:w-[360px] rounded-2xl border border-blue-500/40 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-4 duration-200">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              {/* AI Robot Avatar with Document Icon on chest */}
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-700 to-indigo-600 text-white shadow-md shadow-blue-500/30">
                <Bot className="h-5 w-5" />
                <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-slate-950" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <span>AI Waseeqa Assistant</span>
                  <Sparkles className="h-3 w-3 text-amber-300" />
                </h4>
                <p className="text-[10px] text-slate-400">Automated Legal & Documentation Guide</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close assistant"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Prompt Message */}
          <div className="rounded-xl bg-slate-900/80 p-3 border border-slate-800 text-xs text-slate-300 mb-3">
            <p className="font-semibold text-white">How can we help you?</p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Select your required service below for instant guidance and WhatsApp connectivity:
            </p>
          </div>

          {/* Options Grid */}
          <div className="max-h-[220px] overflow-y-auto space-y-1.5 pr-1">
            {assistantOptions.map((opt) => {
              const Icon = opt.icon;
              return (
                <button
                  key={opt.label}
                  onClick={() => handleOptionClick(opt)}
                  className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-900/50 hover:bg-blue-950/60 border border-slate-800/80 hover:border-blue-700/60 text-xs text-left text-slate-200 transition-all group"
                >
                  <div className="flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 text-blue-400 group-hover:text-amber-300 transition-colors" />
                    <span>{opt.label}</span>
                  </div>
                  <ChevronRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-white transition-colors" />
                </button>
              );
            })}
          </div>

          {/* Direct WhatsApp & Call Buttons inside Assistant */}
          <div className="mt-4 pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-xs">
            <a
              href="https://wa.me/923401266879?text=Assalam-o-Alaikum,%20I%20want%20information%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 p-2 font-semibold text-white shadow-sm transition-all"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+923401266879"
              className="flex items-center justify-center gap-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 p-2 font-semibold text-slate-200 hover:text-white border border-slate-700 transition-all"
            >
              <Phone className="h-3.5 w-3.5 text-amber-400" />
              <span>Call Us</span>
            </a>
          </div>

        </div>
      )}

      {/* Floating Circular Trigger Bot */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-700 via-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-600/40 border border-blue-400/40 hover:scale-105 active:scale-95 transition-all duration-200"
        aria-label="Toggle AI Legal Assistant"
      >
        {/* Document Icon on Chest / Center of Robot Avatar */}
        <div className="relative flex items-center justify-center">
          <Bot className="h-7 w-7 text-white" />
          <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-amber-400 flex items-center justify-center ring-2 ring-slate-950">
            <FileText className="h-2 w-2 text-slate-950" />
          </div>
        </div>

        {/* Glowing Indicator Pulse */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 ring-2 ring-slate-950" />
        </span>

        {/* Tooltip on hover when closed */}
        {!isOpen && (
          <span className="absolute right-full mr-3 hidden sm:group-hover:inline-block whitespace-nowrap rounded-lg bg-slate-900 border border-slate-700 px-2.5 py-1 text-xs font-semibold text-slate-200 shadow-md">
            AI Waseeqa Assistant
          </span>
        )}
      </button>

    </div>
  );
};
