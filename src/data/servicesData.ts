export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  titleUrdu: string;
  category: 'legal' | 'tax' | 'govt' | 'biometric';
  tagline: string;
  taglineUrdu: string;
  description: string;
  visualElements: string[];
  processStages: { label: string; detail: string }[];
  whatsappText: string;
  featured?: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'filer',
    number: '01',
    title: 'Filer Related Services',
    titleUrdu: 'فائلر اور ٹیکس انکم ریٹرن خدمات',
    category: 'tax',
    tagline: 'NTN Registration, FBR Iris Tax Returns & Active Taxpayer List (ATL)',
    taglineUrdu: 'این ٹی این، ایف بی آر انکم ٹیکس گوشوارے اور ایکٹو ٹیکس پیئر لسٹ',
    description: 'Complete assistance for salaried individuals, business owners, and freelancers to become active tax filers on the FBR IRIS portal with legal compliance and reduced withholding taxes.',
    visualElements: ['Tax Return (114)', 'FBR Iris Portal', 'Active Status Verification', 'Withholding Exemption'],
    processStages: [
      { label: 'Step 1: Document Intake', detail: 'CNIC, bank statement & salary/business income slips' },
      { label: 'Step 2: Digital Verification', detail: 'FBR Iris profile setup and withholding tax audit' },
      { label: 'Step 3: Filing & CPR Gen', detail: 'Electronic calculation and IRIS return transmission' },
      { label: 'Step 4: Active Status', detail: 'ATL verification certificate issued with active benefits' }
    ],
    whatsappText: 'Assalam-o-Alaikum, I need assistance regarding Filer Related Services and FBR Tax Return filing.',
    featured: true
  },
  {
    id: 'legal-drafting',
    number: '02',
    title: 'Professional Legal Drafting Services',
    titleUrdu: 'پیشہ ورانہ قانونی ڈرافٹنگ اور تحریر',
    category: 'legal',
    tagline: 'Agreements, Affidavits, Power of Attorney, Sale Deeds & Notices',
    taglineUrdu: 'اقرار نامہ، بیان حلفی، مختار نامہ، بیع نامہ اور قانونی نوٹسز',
    description: 'Expert drafting of customized legal agreements, affidavits (Bayan-e-Halfi), partnership deeds, and contracts on official e-Stamp paper with legally binding clauses and precision.',
    visualElements: ['E-Stamp Paper', 'Rent Agreement', 'Affidavit / Bayan Halfi', 'Digital Seal'],
    processStages: [
      { label: 'Step 1: Clause Gathering', detail: 'Parties particulars, consideration terms, and covenants' },
      { label: 'Step 2: Legal Structuring', detail: 'Formatting in accordance with Contract Act & Stamp Duty' },
      { label: 'Step 3: E-Stamp Generation', detail: 'Issuance of official e-Stamp paper with verified Challan 32-A' },
      { label: 'Step 4: Execution Ready', detail: 'Formatted printout with witness blocks and digital verification' }
    ],
    whatsappText: 'Assalam-o-Alaikum, I want to draft a professional Legal Agreement / Affidavit.',
    featured: true
  },
  {
    id: 'registry',
    number: '03',
    title: 'Property Registry & Documentation',
    titleUrdu: 'پراپرٹی رجسٹری، انتقال اور دستاویزات',
    category: 'legal',
    tagline: 'Sale Deeds, Fard Verification, Mutation (Inteqal) & Sub-Registrar Filing',
    taglineUrdu: 'رجسٹری بیع نامہ، فرد ملکیت، انتقال اور سب رجسٹرار فائل',
    description: 'End-to-end guidance and dossier preparation for real estate transactions, residential plots, agricultural land registries, Fard verification, and sub-registrar branch documentation.',
    visualElements: ['Property Deed', 'Fard Malkiat', 'Khasra / Khewat Record', 'Sub-Registrar Stamp'],
    processStages: [
      { label: 'Step 1: Land Record Check', detail: 'Verification of Fard Malkiat & clear title at Arazi Record Center' },
      { label: 'Step 2: Valuation & Stamp Duty', detail: 'FBR/DC table property rate calculation & e-Stamp issue' },
      { label: 'Step 3: Deed Drafting', detail: 'Comprehensive Sale Deed (Baye Nama) with complete boundary markers' },
      { label: 'Step 4: Registry Stamp', detail: 'Dossier organized for Sub-Registrar presentation and Inteqal' }
    ],
    whatsappText: 'Assalam-o-Alaikum, I need guidance regarding Property Registry and land documentation.',
    featured: true
  },
  {
    id: 'file-preparation',
    number: '04',
    title: 'Complete File Preparation',
    titleUrdu: 'مکمل فائل اور دستاویزاتی فائل تیاری',
    category: 'legal',
    tagline: 'Court Dossiers, Bank Loan Portfolios, Visa Files & Corporate Tenders',
    taglineUrdu: 'عدالتی فائل، بینک لون فائل، ویزا اور محکمانہ درخواستیں',
    description: 'Disorganized documents systematically structured into indexed, compliant folders. Includes chronological order, table of contents, notarization tags, and government-standard formatting.',
    visualElements: ['Document Indexing', 'CNIC / Supporting Slips', 'Certified Copies', 'Archival Folder'],
    processStages: [
      { label: 'Step 1: Collection', detail: 'Gathering identity proofs, financial statements and forms' },
      { label: 'Step 2: De-duplication', detail: 'Detecting missing annexures and ensuring clarity' },
      { label: 'Step 3: Indexing & Binding', detail: 'Sequential page numbering and indexed divider tabs' },
      { label: 'Step 4: Delivery', detail: 'Submission-ready portfolio delivered in physical and PDF formats' }
    ],
    whatsappText: 'Assalam-o-Alaikum, I want assistance with Complete File Preparation for my case/application.'
  },
  {
    id: 'legal-research',
    number: '05',
    title: 'Legal Research & Information',
    titleUrdu: 'قانونی تحقیق اور بنیادی معلومات کی رہنمائی',
    category: 'legal',
    tagline: 'Precedent Discovery, Statutory References & Procedural Clarification',
    taglineUrdu: 'قوانین کی دفعات، عدالتی نظائر اور طریقہ کار کی آگاہی',
    description: 'Digital search and clause extraction across Pakistani federal and provincial statutes (PLD, SCMR, Civil Code) to help clients understand procedural requirements and paperwork standards.',
    visualElements: ['Civil Procedure Code', 'Statute Search', 'Precedent Clauses', 'Information Summary'],
    processStages: [
      { label: 'Step 1: Query Formulation', detail: 'Defining the specific legal question or procedural hurdle' },
      { label: 'Step 2: Precedent Search', detail: 'Cross-referencing Pakistani legal databases and statutes' },
      { label: 'Step 3: Summary Compilation', detail: 'Extracting key clauses and relevant legal sections' },
      { label: 'Step 4: Client Briefing', detail: 'Providing actionable, clear procedural information' }
    ],
    whatsappText: 'Assalam-o-Alaikum, I require Legal Research and procedural information for my matter.'
  },
  {
    id: 'biometric',
    number: '06',
    title: 'Biometric Related Services',
    titleUrdu: 'بائیو میٹرک تصدیق اور معاونت',
    category: 'biometric',
    tagline: 'NADRA Verification Guidance, Vehicle Biometrics, Bank & BISP Assistance',
    taglineUrdu: 'گاڑیوں کی بائیو میٹرک، نادرا تصدیق اور ای سہولت رہنمائی',
    description: 'Step-by-step guidance for biometric verification requirements, vehicle transfer e-biometric appointments, family tree verification, and resolving fingerprint mismatch issues.',
    visualElements: ['Fingerprint Scanner', 'NADRA Pak-ID App', 'Vehicle Transfer Token', 'E-Sahulat Verify'],
    processStages: [
      { label: 'Step 1: Requirement Check', detail: 'Determining exact biometric requirement (NADRA, Excise, or Bank)' },
      { label: 'Step 2: Token / App Booking', detail: 'Booking NADRA e-Sahulat or Pak-ID digital fingerprint appointment' },
      { label: 'Step 3: Scan Guidance', detail: 'Optimal sensor placement guidance and biometric clearance' },
      { label: 'Step 4: Receipt Verification', detail: 'Official biometric transmission slip verification' }
    ],
    whatsappText: 'Assalam-o-Alaikum, I need help regarding Biometric verification services.'
  },
  {
    id: 'jobs-apply',
    number: '07',
    title: 'Online Job Applications',
    titleUrdu: 'سرکاری و نجی نوکریوں کی آن لائن درخواستیں',
    category: 'govt',
    tagline: 'PPSC, FPSC, NTS, PTS & Government Recruitment Portals',
    taglineUrdu: 'پی پی ایس سی، ایف پی ایس سی اور این ٹی ایس درخواستیں',
    description: 'Error-free online application submissions for public service commission jobs, educational test services, challan payments, profile optimization, and CV tailoring.',
    visualElements: ['Job Advertisement', 'Candidate Profile', 'Challan 32-A Receipt', 'Application Roll No'],
    processStages: [
      { label: 'Step 1: Post Eligibility Check', detail: 'Verifying qualification, age limits, and domicile requirements' },
      { label: 'Step 2: Profile & Document Upload', detail: 'Compressing CNIC, degrees, and photographs to portal specs' },
      { label: 'Step 3: Challan Verification', detail: 'Bank challan or 1Link digital payment processing' },
      { label: 'Step 4: Confirmed Submission', detail: 'Final submission slip and tracking roll-number receipt delivered' }
    ],
    whatsappText: 'Assalam-o-Alaikum, I need assistance applying for an Online Job application.'
  },
  {
    id: 'government-schemes',
    number: '08',
    title: 'Government Schemes & Online Applications',
    titleUrdu: 'حکومتی اسکیمیں اور آن لائن درخواستیں',
    category: 'govt',
    tagline: 'Kisan Card, Youth Loans, Apni Chhat Apna Ghar & Social Subsidies',
    taglineUrdu: 'اپنی چھت اپنا گھر، کسان کارڈ، یوتھ بزنس لون اور حکومتی پورٹلز',
    description: 'Dedicated support for citizens applying for federal and provincial welfare schemes, subsidized housing programs, micro-finance youth loans, and agriculture subsidies.',
    visualElements: ['Government Scheme Portal', 'Citizen Registration', 'Eligibility Assessment', 'Approved Token'],
    processStages: [
      { label: 'Step 1: Eligibility Screening', detail: 'Checking PMT score, income ceiling, and district quota' },
      { label: 'Step 2: Form Preparation', detail: 'Organizing land fard, CNIC, and family registration certificate' },
      { label: 'Step 3: Portal Submission', detail: 'Registering on official Punjab/Federal government scheme portals' },
      { label: 'Step 4: Application Tracking', detail: 'Providing reference tracking ID and SMS status follow-ups' }
    ],
    whatsappText: 'Assalam-o-Alaikum, I need information and online apply assistance for Government Schemes.',
    featured: true
  }
];

export const processSteps = [
  {
    step: '01',
    title: 'Tell Us Your Requirement',
    titleUrdu: 'اپنی ضرورت بتائیں',
    description: 'Connect with us via WhatsApp or Phone (+92 340 1266879) and describe your required documentation, registry, or online service.',
    icon: 'MessageSquareText'
  },
  {
    step: '02',
    title: 'Document & Information Review',
    titleUrdu: 'دستاویزات کی جانچ پڑتال',
    description: 'We review your identity documents, property records, or application prerequisites to ensure 100% compliance and no missing links.',
    icon: 'FileCheck'
  },
  {
    step: '03',
    title: 'Preparation / Online Processing',
    titleUrdu: 'قانونی ڈرافٹنگ اور آن لائن عمل',
    description: 'Our team prepares professional drafts on authentic e-stamp paper, processes FBR tax filings, or completes government portal submissions.',
    icon: 'Cpu'
  },
  {
    step: '04',
    title: 'Completed Service',
    titleUrdu: 'مکمل اور تصدیق شدہ دستاویز کی فراہمی',
    description: 'Receive your finalized, print-ready legal document, verified submission receipt, or registry dossier ready for formal execution.',
    icon: 'CheckCircle2'
  }
];

export const whyChooseUsItems = [
  {
    number: '01',
    title: 'Easy Process',
    titleUrdu: 'سادہ اور آسان طریقہ کار',
    description: 'Simple and understandable service process without cumbersome legal jargon or confusing office runs.'
  },
  {
    number: '02',
    title: 'Professional Documentation',
    titleUrdu: 'پیشہ ورانہ دستاویزات',
    description: 'Organized document preparation formatted in strict compliance with Pakistani statutory standards.'
  },
  {
    number: '03',
    title: 'Multiple Services',
    titleUrdu: 'ایک ہی چھت تلے تمام خدمات',
    description: 'Legal drafting, e-stamp paper, FBR filer, property registries, and online portals all managed together.'
  },
  {
    number: '04',
    title: 'Digital Assistance',
    titleUrdu: 'جدید ڈیجیٹل اور کمپیوٹرائزڈ معاونت',
    description: 'Modern technology-assisted workflow that reduces errors and speeds up verification turnaround.'
  },
  {
    number: '05',
    title: 'Convenient',
    titleUrdu: 'بغیر کسی الجھن اور خوار کے سہولت',
    description: 'Reduce unnecessary complexity in routine documentation—get your paperwork prepared from home or office.'
  },
  {
    number: '06',
    title: 'Customer Support',
    titleUrdu: 'آسان اور فوری رابطہ',
    description: 'Easy communication for service requirements via direct phone call and dedicated WhatsApp messaging.'
  }
];
