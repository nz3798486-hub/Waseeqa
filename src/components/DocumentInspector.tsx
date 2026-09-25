import React, { useState } from 'react';
import { 
  FileText, 
  Stamp, 
  QrCode, 
  CheckCircle2, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles,
  Download,
  Share2
} from 'lucide-react';

interface DocumentInspectorProps {
  onOpenConsultation: (serviceName?: string) => void;
}

export const DocumentInspector: React.FC<DocumentInspectorProps> = ({ onOpenConsultation }) => {
  const [docType, setDocType] = useState<'rent' | 'affidavit' | 'sale' | 'filer'>('rent');
  const [copied, setCopied] = useState(false);

  const handleCopySerial = () => {
    navigator.clipboard.writeText('PB-LHR-2026-9842104-E');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-20 bg-slate-950 border-b border-slate-800/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              <Stamp className="h-4 w-4 text-amber-400" />
              <span>Interactive Document Previewer</span>
              <span className="text-slate-600">·</span>
              <span className="font-urdu text-sm normal-case text-amber-300">اسٹام پیپر اور دستاویزات کا جائزہ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              E-Stamp & Legal Drafting Studio
            </h2>
            <p className="mt-2 text-base text-slate-300 max-w-2xl">
              Inspect how authentic Pakistani e-Stamp papers, affidavits, and tax filings are structured with automated formatting and statutory compliance.
            </p>
          </div>

          {/* Interactive Document Switcher Buttons */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2 p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setDocType('rent')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                docType === 'rent'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Rent Agreement
            </button>
            <button
              onClick={() => setDocType('affidavit')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                docType === 'affidavit'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Affidavit (بیان حلفی)
            </button>
            <button
              onClick={() => setDocType('sale')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                docType === 'sale'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Sale Deed (بیع نامہ)
            </button>
            <button
              onClick={() => setDocType('filer')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                docType === 'filer'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              FBR Filer ATL
            </button>
          </div>
        </div>

        {/* The Document Visualizer Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Authentic Document Rendering (White / Ivory Legal Sheet appearance) */}
          <div className="lg:col-span-8 bg-[#fbfbfa] text-slate-900 rounded-2xl p-6 sm:p-10 shadow-2xl border-4 border-amber-900/20 relative overflow-hidden">
            
            {/* Watermark Seal */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.035] select-none">
              <div className="text-center font-serif text-8xl font-black">
                GOVERNMENT OF PUNJAB<br />E-STAMP
              </div>
            </div>

            {/* Official E-Stamp Green / Gold Header */}
            <div className="border-b-2 border-slate-900 pb-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-emerald-800 text-amber-200 flex items-center justify-center font-bold text-xl shadow-sm border border-emerald-900">
                    🇵🇰
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold uppercase tracking-wide text-emerald-900">
                      Government of the Punjab
                    </h3>
                    <p className="text-[11px] text-slate-600 font-mono">
                      E-Stamping System • Form 32-A Challan (Stamp Duty)
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-500 block uppercase tracking-wider font-semibold">Duty Amount</span>
                  <span className="text-lg font-bold font-mono text-emerald-900">
                    {docType === 'rent' && 'PKR 1,200/-'}
                    {docType === 'affidavit' && 'PKR 100/-'}
                    {docType === 'sale' && 'PKR 15,000/- (Valuation Based)'}
                    {docType === 'filer' && 'FBR Active Status: Active'}
                  </span>
                </div>
              </div>

              {/* Serial & Security Bar */}
              <div className="mt-4 pt-3 border-t border-slate-300 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">E-Stamp No:</span>
                  <span className="font-bold text-slate-900">PB-LHR-2026-9842104-E</span>
                  <button 
                    onClick={handleCopySerial}
                    className="text-blue-600 hover:text-blue-800 ml-1"
                    title="Copy serial"
                  >
                    {copied ? <Check className="h-3 w-3 text-emerald-600" /> : <Copy className="h-3 w-3" />}
                  </button>
                </div>
                <div>
                  <span className="text-slate-500">Date: </span>
                  <span className="font-semibold text-slate-800">25-Sep-2026</span>
                </div>
                <div>
                  <span className="text-slate-500">Sub-Registrar: </span>
                  <span className="font-semibold text-slate-800">Lahore Cantt / City</span>
                </div>
              </div>
            </div>

            {/* Document Specific Body */}
            {docType === 'rent' && (
              <div className="space-y-4 text-xs sm:text-sm text-slate-800">
                <div className="text-center font-bold text-base uppercase tracking-wider border-b border-slate-200 pb-2">
                  Tenancy Agreement / اقرار نامہ کرایہ داری
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs bg-slate-100 p-3 rounded border border-slate-200">
                  <div>
                    <span className="font-bold block text-slate-700">First Party (Landlord / مالک مکان):</span>
                    <span>Muhammad Tariq s/o Abdul Rehman</span>
                    <span className="block font-mono text-[11px] text-slate-500">CNIC: 35201-1984219-3</span>
                  </div>
                  <div>
                    <span className="font-bold block text-slate-700">Second Party (Tenant / کرایہ دار):</span>
                    <span>Usman Javed s/o Javed Iqbal</span>
                    <span className="block font-mono text-[11px] text-slate-500">CNIC: 35202-8419201-5</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 text-slate-800 leading-relaxed">
                  <p className="font-urdu text-sm leading-loose text-right text-slate-900">
                    منکہ فریق اول مالک و قابض مکان واقع سکیم 34، ڈی ایچ اے فیز 5، لاہور ہوں۔ فریقین نے باہمی رضا مندی سے درج ذیل شرائط پر کرایہ داری طے کی ہے:
                  </p>
                  <ol className="list-decimal pl-5 space-y-1 text-xs text-slate-700">
                    <li>The monthly rental consideration is mutually settled at PKR 65,000/- payable before the 5th of each calendar month.</li>
                    <li>Security deposit of 2 months rent (PKR 130,000/-) deposited and acknowledged via bank cross cheque.</li>
                    <li>Tenancy period shall be eleven (11) months, renewable on mutually executed fresh agreement.</li>
                  </ol>
                </div>
              </div>
            )}

            {docType === 'affidavit' && (
              <div className="space-y-4 text-xs sm:text-sm text-slate-800">
                <div className="text-center font-bold text-base uppercase tracking-wider border-b border-slate-200 pb-2">
                  AFFIDAVIT / بیان حلفی
                </div>

                <div className="bg-slate-100 p-3 rounded border border-slate-200 text-xs">
                  <span className="font-bold block text-slate-700">Deponent (حلف دہندہ):</span>
                  <span>Rashid Mehmood s/o Ghulam Nabi, CNIC: 35201-9874102-1</span>
                </div>

                <div className="space-y-2 pt-2 text-slate-800 leading-relaxed font-urdu text-sm text-right">
                  <p className="leading-loose">
                    منکہ حلف دہندہ بالا ہوش و حواس خمسہ بلا جبر و اکراہ روبرو اوتھ کمشنر / مجاز افسر حلفاً بیان کرتا ہوں کہ:
                  </p>
                  <p className="leading-loose text-xs font-sans text-left text-slate-700">
                    1. That the deponent is a bona fide citizen of Pakistan and currently residing at the address provided.<br />
                    2. That all submitted educational testimonials and CNIC details are genuine and unaltered.<br />
                    3. That nothing has been concealed or falsely presented before the authorities.
                  </p>
                </div>
              </div>
            )}

            {docType === 'sale' && (
              <div className="space-y-4 text-xs sm:text-sm text-slate-800">
                <div className="text-center font-bold text-base uppercase tracking-wider border-b border-slate-200 pb-2">
                  SALE DEED / بیع نامہ قطعی
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs bg-slate-100 p-3 rounded border border-slate-200">
                  <div>
                    <span className="font-bold block text-slate-700">Vendor / Seller (بائع):</span>
                    <span>Muhammad Aslam s/o Nazir Ahmad</span>
                    <span className="block font-mono text-[11px] text-slate-500">Khewat No. 142, Khasra 89/1</span>
                  </div>
                  <div>
                    <span className="font-bold block text-slate-700">Vendee / Buyer (مشتری):</span>
                    <span>Zubair Khan s/o Farooq Khan</span>
                    <span className="block font-mono text-[11px] text-slate-500">CNIC: 37405-1290481-7</span>
                  </div>
                </div>

                <div className="pt-2 text-xs text-slate-700 space-y-1">
                  <p><strong>Property Measure:</strong> 1 Kanal (20 Marla), Mouza Heir, District Lahore.</p>
                  <p><strong>Total Consideration:</strong> PKR 18,500,000/- fully liquidated through pay orders.</p>
                  <p className="font-urdu text-sm text-right leading-loose pt-1">
                    بائع نے تمام حقوق ملکیت و قبضہ مشتری کو منتقل کر دیا ہے اور آئندہ بائع یا اس کے وارثان کا اس جائیداد سے کوئی تعلق نہ ہوگا۔
                  </p>
                </div>
              </div>
            )}

            {docType === 'filer' && (
              <div className="space-y-4 text-xs sm:text-sm text-slate-800">
                <div className="text-center font-bold text-base uppercase tracking-wider border-b border-slate-200 pb-2">
                  Federal Board of Revenue (FBR) • Active Taxpayer Status
                </div>

                <div className="bg-emerald-50 border border-emerald-300 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-emerald-800">ACTIVE TAXPAYER STATUS</div>
                    <div className="text-sm font-bold text-emerald-950 font-mono mt-0.5">STATUS: ACTIVE (FILER)</div>
                    <div className="text-[11px] text-emerald-700">Tax Year: 2026 | Section 114 Income Tax Ordinance</div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs bg-slate-100 p-3 rounded">
                  <div>
                    <span className="text-slate-500 block">Registration / NTN:</span>
                    <span className="font-mono font-bold text-slate-900">7491024-8</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Withholding Tax Benefit:</span>
                    <span className="font-bold text-emerald-800">50% to 100% Tax Savings</span>
                  </div>
                </div>
              </div>
            )}

            {/* Signature & Seal Block */}
            <div className="mt-8 pt-6 border-t-2 border-slate-300 grid grid-cols-3 gap-4 text-center text-[11px] text-slate-600">
              <div>
                <div className="h-12 border-b border-dashed border-slate-400 mb-1" />
                <span className="font-semibold text-slate-800">First Party Signature</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full border-2 border-red-700/60 flex items-center justify-center text-red-700 text-[9px] font-bold uppercase rotate-[-8deg] shadow-sm">
                  Sub-Registrar<br />Seal
                </div>
                <span className="font-semibold text-slate-800 mt-1">Official E-Seal</span>
              </div>
              <div>
                <div className="h-12 border-b border-dashed border-slate-400 mb-1" />
                <span className="font-semibold text-slate-800">Second Party Signature</span>
              </div>
            </div>

          </div>

          {/* Right: Technical Features & Instant Drafting CTA */}
          <div className="lg:col-span-4 space-y-5">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                <span>AI WASEEQA FEATURES</span>
              </div>
              
              <h4 className="text-lg font-bold text-white mb-2">
                Statutory Precision
              </h4>
              
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Our drafting templates are tailored for Pakistani courts, land revenue authorities, FBR, and NADRA requirements.
              </p>

              <div className="space-y-3 text-xs text-slate-300 border-t border-slate-800 pt-4">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Valid for all 36 Districts of Punjab, Sindh, KPK & Islamabad</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Verified 32-A Challan form with e-Stamping portal registration</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Bilingual drafting (Urdu + English) for flawless comprehension</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Doorstep delivery or instant high-resolution PDF dispatched</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                <button
                  onClick={() => onOpenConsultation(`E-Stamp Drafting: ${docType}`)}
                  className="w-full rounded-lg bg-blue-600 hover:bg-blue-500 py-3 text-xs font-bold text-white shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <span>Draft This Document For Me</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Helpline Box */}
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 text-xs text-slate-400 flex items-center justify-between">
              <div>
                <span className="text-slate-200 font-semibold block">Need Urgent Stamp Paper?</span>
                <span>Immediate challan & printing assistance</span>
              </div>
              <a
                href="tel:+923401266879"
                className="text-amber-400 hover:underline font-mono font-bold"
              >
                +92 340 1266879
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
