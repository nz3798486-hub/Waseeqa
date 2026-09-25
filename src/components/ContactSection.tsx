import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Clock, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Sparkles,
  ShieldCheck,
  Building
} from 'lucide-react';
import { servicesData } from '../data/servicesData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Professional Legal Drafting Services',
    urgency: 'Normal (1-2 Days)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct pre-formatted WhatsApp message
    const waMessage = `Assalam-o-Alaikum, I want information about your services.\n\n*Name:* ${formData.name || 'Client'}\n*Phone:* ${formData.phone || 'N/A'}\n*Service Required:* ${formData.service}\n*Urgency:* ${formData.urgency}\n*Details:* ${formData.notes || 'General Inquiry'}`;
    
    const waUrl = `https://wa.me/923401266879?text=${encodeURIComponent(waMessage)}`;
    
    // Open WhatsApp
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 bg-slate-950 border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Phone, WhatsApp CTAs, Hours & Urdu Message */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                <Sparkles className="h-4 w-4 text-amber-400" />
                <span>Get In Touch</span>
                <span className="text-slate-600">·</span>
                <span className="font-urdu text-sm normal-case text-amber-300">رابطہ کریں</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                Need Our Services?
              </h2>

              <p className="mt-3 text-base text-slate-300 leading-relaxed">
                Contact us to discuss your documentation or online service requirement.
              </p>
            </div>

            {/* Authentic Urdu Note */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
              <p className="text-lg font-urdu text-amber-200 text-right leading-loose">
                ہم سے براہ راست فون یا واٹس ایپ پر رابطہ کریں۔ ہمارے ماہرین آپ کی رہنمائی کے لیے ہمہ وقت حاضر ہیں۔
              </p>
            </div>

            {/* Prominent Phone Number Card */}
            <div className="rounded-2xl border border-blue-500/40 bg-gradient-to-br from-slate-900 to-blue-950/40 p-6 sm:p-8 shadow-xl shadow-blue-500/5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                Official Helpline & WhatsApp
              </span>
              
              <div className="flex items-center gap-3 my-3">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-amber-400">
                  📞 +92 340 1266879
                </span>
              </div>

              <p className="text-xs text-slate-300 mb-6">
                Click below to start a WhatsApp conversation or call us directly.
              </p>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href="tel:+923401266879"
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 py-3.5 px-4 text-sm font-bold text-white transition-all shadow-sm"
                >
                  <Phone className="h-4 w-4 text-emerald-400" />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://wa.me/923401266879?text=Assalam-o-Alaikum,%20I%20want%20information%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 py-3.5 px-4 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all"
                >
                  <MessageCircle className="h-4 w-4 text-amber-300" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>

            {/* Working Hours & Scope */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-400 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
                <Clock className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">Timings:</span>
                  <span>Monday – Saturday</span>
                  <span className="block font-mono text-slate-300 mt-0.5">9:00 AM – 8:00 PM PST</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
                <Building className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-slate-200 block">Coverage:</span>
                  <span>Nationwide Online & Remote Services across Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Consultation Booking Form */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl shadow-xl">
              <div className="border-b border-slate-800 pb-4 mb-6">
                <h3 className="text-xl font-bold text-white">
                  Send Documentation Requirement
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill this quick form and our system will connect you on WhatsApp with pre-filled details.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-3">
                  <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Requirement Initiated</h4>
                  <p className="text-xs text-slate-300">
                    Your request was opened on WhatsApp. If WhatsApp didn't open automatically, call us directly at:
                  </p>
                  <a 
                    href="tel:+923401266879" 
                    className="inline-block font-mono font-bold text-amber-400 text-lg hover:underline"
                  >
                    +92 340 1266879
                  </a>
                  <div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-2 text-xs text-slate-400 hover:text-slate-200 underline"
                    >
                      Send another requirement
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Your Name / نام
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Ali"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      WhatsApp / Mobile Number / موبائل نمبر
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0300-1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">
                        Select Service / مطلوبہ خدمت
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-slate-200 focus:border-blue-500 focus:outline-none"
                      >
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-semibold mb-1">
                        Urgency / فوری ضرورت
                      </label>
                      <select
                        value={formData.urgency}
                        onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                        className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-slate-200 focus:border-blue-500 focus:outline-none"
                      >
                        <option value="Same Day Express (2-4 hours)">Same Day Express (2-4 hours)</option>
                        <option value="Normal (1-2 Days)">Normal (1-2 Days)</option>
                        <option value="General Inquiry / Rate Check">General Inquiry / Rate Check</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-semibold mb-1">
                      Brief Requirements / تفصیلات (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Provide any specific details (e.g. 5 Marla house rent agreement, FBR tax return 2026, PPSC online apply)..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3.5 py-2.5 text-slate-200 placeholder-slate-500 focus:border-blue-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-blue-600 hover:bg-blue-500 py-3.5 text-xs font-bold text-white shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Send Message on WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Your contact information is strictly used for documentation assistance.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
