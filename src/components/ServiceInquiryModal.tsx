import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Phone, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import { servicesData, ServiceItem } from '../data/servicesData';

interface ServiceInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceTitle?: string;
}

export const ServiceInquiryModal: React.FC<ServiceInquiryModalProps> = ({
  isOpen,
  onClose,
  initialServiceTitle
}) => {
  const [selectedService, setSelectedService] = useState<string>(
    initialServiceTitle || 'Professional Legal Drafting Services'
  );
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialServiceTitle) {
      setSelectedService(initialServiceTitle);
    }
  }, [initialServiceTitle]);

  if (!isOpen) return null;

  const currentServiceObj = servicesData.find(s => s.title === selectedService || selectedService.includes(s.title)) || servicesData[1];

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Assalam-o-Alaikum, I want information about your services.\n\n*Service:* ${selectedService}\n*Name:* ${clientName || 'Valued Client'}\n*Contact:* ${clientPhone || 'Not provided'}\n*Details:* ${notes || 'Need urgent assistance'}`;
    const url = `https://wa.me/923401266879?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg rounded-2xl border border-blue-500/40 bg-slate-950 p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b border-slate-800 pb-4 mb-5">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-1">
            <ShieldCheck className="h-4 w-4" />
            <span>AI WASEEQA NAVESI DIRECT INQUIRY</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            Request Service Consultation
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Speak directly with our legal documentation specialists on WhatsApp or Phone.
          </p>
        </div>

        {/* Quick Highlights for Selected Service */}
        <div className="rounded-xl bg-slate-900/80 border border-slate-800/80 p-3.5 mb-5 text-xs">
          <div className="flex justify-between items-center text-slate-300 font-semibold mb-1">
            <span>{currentServiceObj.title}</span>
            <span className="font-urdu text-amber-300 text-sm">{currentServiceObj.titleUrdu}</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            {currentServiceObj.description}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleWhatsAppSend} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Select Service
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200 focus:border-blue-500 focus:outline-none"
            >
              {servicesData.map((s) => (
                <option key={s.id} value={s.title}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                Your Name
              </label>
              <input
                type="text"
                placeholder="e.g. Tariq Mehmood"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">
                WhatsApp Number
              </label>
              <input
                type="tel"
                placeholder="0340-1234567"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-slate-300 font-semibold mb-1">
              Specific Requirement / Note (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Urgent rent agreement for house in DHA / NTN registration"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 py-3 text-xs font-bold text-white shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Connect on WhatsApp</span>
            </button>

            <a
              href="tel:+923401266879"
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 py-3 px-4 text-xs font-bold text-slate-200 hover:text-white transition-all"
            >
              <Phone className="h-4 w-4 text-amber-400" />
              <span>Direct Call</span>
            </a>
          </div>

          <p className="text-[10px] text-slate-500 text-center pt-1">
            Official helpline: <span className="font-mono text-slate-400">+92 340 1266879</span> • Response usually within minutes
          </p>
        </form>
      </div>
    </div>
  );
};
