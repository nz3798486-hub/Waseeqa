import React from 'react';
import { ShieldCheck, Phone, MessageCircle, MapPin, Mail } from 'lucide-react';

interface FooterProps {
  onSelectServiceModal?: (serviceName: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectServiceModal }) => {
  const serviceLinks = [
    'Filer Related Services',
    'Professional Legal Drafting Services',
    'Property Registry & Documentation',
    'Complete File Preparation',
    'Legal Research & Information',
    'Biometric Related Services',
    'Online Job Applications',
    'Government Schemes & Online Applications'
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand & Subtitle Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-amber-300 shadow-sm shadow-blue-500/20">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                AI Waseeqa Navesi
              </span>
            </div>

            <p className="text-sm font-semibold text-blue-400">
              Legal Documentation • Online Services • Government Services
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering citizens, property purchasers, job aspirants, and business filers with modern computerized drafting, statutory stamp paper formatting, and rapid online submissions.
            </p>

            <div className="pt-2">
              <div className="font-urdu text-amber-300 text-sm leading-loose">
                آپ کے تمام قانونی دستاویزات اور آن لائن سرکاری امور کے لیے بااعتماد مرکز۔
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#technology" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={() => onSelectServiceModal?.(s)}
                    className="hover:text-white transition-colors block truncate"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Contact & Helpline
            </h4>
            
            <div className="space-y-3 text-slate-300">
              <a
                href="tel:+923401266879"
                className="flex items-center gap-2.5 text-amber-400 hover:text-amber-300 font-mono font-bold text-sm"
              >
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>+92 340 1266879</span>
              </a>

              <a
                href="https://wa.me/923401266879?text=Assalam-o-Alaikum,%20I%20want%20information%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-white"
              >
                <MessageCircle className="h-4 w-4 text-blue-400 shrink-0" />
                <span>WhatsApp Official Hotline</span>
              </a>

              <div className="pt-2 text-slate-400 text-[11px] leading-relaxed">
                <span>Working Hours:</span><br />
                <span className="text-slate-200 font-medium">Monday to Saturday: 9:00 AM – 8:00 PM</span><br />
                <span>Online remote support available nationwide.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 AI Waseeqa Navesi. All Rights Reserved.</p>
          <p className="text-slate-500 text-center sm:text-right">
            Providing modern legal documentation, e-stamping assistance & government online services.
          </p>
        </div>
      </div>
    </footer>
  );
};
