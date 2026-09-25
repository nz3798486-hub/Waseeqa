import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, ShieldCheck } from 'lucide-react';

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
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="group flex items-center gap-2.5 text-xl font-extrabold tracking-tight text-white transition-opacity hover:opacity-95"
          aria-label="AI Waseeqa Navesi Home"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 text-amber-300 shadow-sm shadow-blue-500/20 ring-1 ring-white/15">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            AI Waseeqa Navesi
          </span>
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-1 transition-colors hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-amber-400 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+923401266879"
            className="flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-900/80 px-3.5 py-2 text-xs font-semibold text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-white whitespace-nowrap"
          >
            <Phone className="h-3.5 w-3.5 text-emerald-400" />
            <span>+92 340 1266879</span>
          </a>

          <a
            href="https://wa.me/923401266879?text=Assalam-o-Alaikum,%20I%20want%20information%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-blue-600/30 transition-all hover:from-blue-500 hover:to-blue-600 whitespace-nowrap"
          >
            <MessageCircle className="h-3.5 w-3.5 text-amber-300" />
            <span>WhatsApp Us</span>
          </a>
        </div>

        {/* Mobile menu hamburger toggle */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://wa.me/923401266879?text=Assalam-o-Alaikum,%20I%20want%20information%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:text-white"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-3 pb-6 backdrop-blur-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-900 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
            <a
              href="tel:+923401266879"
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 py-2.5 text-sm font-semibold text-slate-200"
            >
              <Phone className="h-4 w-4 text-emerald-400" />
              <span>Call +92 340 1266879</span>
            </a>
            <a
              href="https://wa.me/923401266879?text=Assalam-o-Alaikum,%20I%20want%20information%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white"
            >
              <MessageCircle className="h-4 w-4 text-amber-300" />
              <span>WhatsApp Message</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
