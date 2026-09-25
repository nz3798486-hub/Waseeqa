import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck, Search } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation?: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Traditional vs AI', href: '#technology' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Contact us', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-all shadow-xs">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo matching reference screenshot */}
        <a 
          href="#" 
          className="group flex items-center gap-3 transition-opacity hover:opacity-95"
          aria-label="AI Waseeqa Navesi Home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0c2356] to-[#123b8f] text-white font-extrabold text-lg shadow-sm border border-[#0c2356]">
            AI
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-[#0c2356] leading-tight">
              AI Waseeqa Navesi
            </span>
            <span className="text-[10px] font-semibold text-slate-500 font-urdu -mt-0.5">
              قانونی و سرکاری دستاویزات
            </span>
          </div>
        </a>

        {/* Navigation links matching reference screenshot */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="py-1 transition-colors hover:text-[#0c2356] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#0c2356] after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons matching screenshot (Log in / Call & Get Services) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+923401266879"
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 hover:text-[#0c2356] transition-colors whitespace-nowrap"
          >
            <Phone className="h-3.5 w-3.5 text-emerald-600" />
            <span>+92 340 1266879</span>
          </a>

          <a
            href="https://wa.me/923401266879?text=Assalam-o-Alaikum,%20I%20want%20information%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-[#0c2356] hover:bg-[#123b8f] px-4 py-2 text-xs font-bold text-white shadow-sm transition-all whitespace-nowrap"
          >
            <MessageCircle className="h-3.5 w-3.5 text-amber-300" />
            <span>Get Services</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href="tel:+923401266879"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-[#0c2356]"
            aria-label="Call Helpline"
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 hover:text-[#0c2356]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#0c2356]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 pt-4 border-t border-slate-200 flex flex-col gap-2.5">
            <a
              href="tel:+923401266879"
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-slate-50 py-2.5 text-sm font-bold text-slate-800"
            >
              <Phone className="h-4 w-4 text-emerald-600" />
              <span>Call +92 340 1266879</span>
            </a>
            <a
              href="https://wa.me/923401266879?text=Assalam-o-Alaikum,%20I%20want%20information%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-[#0c2356] py-2.5 text-sm font-bold text-white shadow-sm"
            >
              <MessageCircle className="h-4 w-4 text-amber-300" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
