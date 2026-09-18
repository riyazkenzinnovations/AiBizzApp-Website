import React, { useState, useMemo } from 'react'
import {
  Cpu,
  MessageSquare,
  Send,
  ShoppingCart,
  CreditCard,
  CheckCircle2,
  Search,
  BookOpen,
  FileText,
  Truck,
  Globe,
  Building,
  DollarSign,
  Heart,
  Users,
  Shield,
  Calendar,
  Layers,
  HelpCircle,
  GraduationCap,
  FileSpreadsheet,
  Activity,
  Phone,
  BarChart3,
  Paperclip,
  CheckSquare,
  QrCode,
  Tag,
  ArrowRight,
  Sparkles,
  ExternalLink,
  ChevronRight
} from 'lucide-react'

// 1. Featured Top 6 Essential Integrations (Screenshot 1)
const FEATURED_APPS = [
  {
    id: 'aibizz-core',
    title: 'AiBizzApp',
    description: "World's leading AI-powered enterprise ERP with unified accounting, supply chain, CRM, and manufacturing.",
    icon: Cpu,
    iconBg: 'bg-[#0284c7]',
    tag: 'Core ERP'
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Cloud API',
    description: 'Send invoices, delivery updates, OTP verifications, and customer support messages directly via official WhatsApp API.',
    icon: MessageSquare,
    iconBg: 'bg-[#16a34a]',
    tag: 'Communication'
  },
  {
    id: 'twilio',
    title: 'Twilio Integration',
    description: 'Automated SMS, phone number verification, and instant voice alerts integrated seamlessly with ERP workflows.',
    icon: MessageSquare,
    iconBg: 'bg-[#e11d48]',
    tag: 'Messaging'
  },
  {
    id: 'woocommerce',
    title: 'WooCommerce Connector',
    description: 'Real-time two-way synchronization of product catalogs, live stock inventory, customer profiles, and web orders.',
    icon: ShoppingCart,
    iconBg: 'bg-[#9333ea]',
    tag: 'E-Commerce'
  },
  {
    id: 'telegram',
    title: 'Telegram Integration',
    description: 'Instant notification bots and alert triggers for sales approvals, critical exceptions, and daily executive reports.',
    icon: Send,
    iconBg: 'bg-[#0ea5e9]',
    tag: 'Automation'
  },
  {
    id: 'paystack',
    title: 'Paystack Gateway',
    description: 'Secure multi-currency payment gateway processing credit cards, bank transfers, and mobile money with auto-reconciliation.',
    icon: CreditCard,
    iconBg: 'bg-[#0d9488]',
    tag: 'Payments'
  }
]

// 2. Full 60+ Ecosystem Apps & Extensions (Screenshots 2, 3, 4, 5)
const ECOSYSTEM_APPS = [
  // Page 1 (Screenshot 2)
  {
    name: 'AiBizzApp',
    desc: "Unified enterprise AI ERP with integrated business operations",
    category: 'Core ERP',
    iconType: 'aibizz',
    iconBg: 'bg-[#0070f3]',
    initial: 'A'
  },
  {
    name: 'Twilio',
    desc: 'Twilio Integration for AiBizzApp',
    category: 'Communication',
    iconType: 'twilio',
    iconBg: 'bg-[#f22f46]',
    icon: Phone
  },
  {
    name: 'Wiki',
    desc: 'Open source knowledge management software',
    category: 'Operations',
    iconType: 'wiki',
    iconBg: 'bg-[#f59e0b]',
    icon: BookOpen
  },
  {
    name: 'PDF on Submit',
    desc: 'Automatically create a PDF on document submission',
    category: 'Automation',
    iconType: 'pdf',
    iconBg: 'bg-[#10b981]',
    icon: FileText
  },
  {
    name: 'Telegram',
    desc: 'Telegram Integration for AiBizzApp',
    category: 'Communication',
    iconType: 'telegram',
    iconBg: 'bg-[#0088cc]',
    icon: Send
  },
  {
    name: 'AiBizz Shipping',
    desc: 'Shipping integration for AiBizzApp',
    category: 'Logistics',
    iconType: 'shipping',
    iconBg: 'bg-[#0284c7]',
    icon: Truck
  },
  {
    name: 'Ecommerce Integrations',
    desc: 'E-commerce marketplace integrations for AiBizzApp',
    category: 'E-Commerce',
    iconType: 'ecommerce',
    iconBg: 'bg-[#2563eb]',
    icon: ShoppingCart
  },
  {
    name: 'Tanzania Customizations',
    desc: 'Country Specific Functionality for Tanzania required for apps...',
    category: 'Compliance',
    iconType: 'flag',
    iconBg: 'bg-[#059669]',
    icon: Globe
  },
  {
    name: 'Swiss Accounting Integration',
    desc: 'Swiss Accounting Integration for AiBizzApp is for companies in...',
    category: 'Accounting',
    iconType: 'banknote',
    iconBg: 'bg-[#64748b]',
    icon: DollarSign
  },
  {
    name: 'Property Management Solution',
    desc: 'Includes: Lease, Daily Checklist, Key Set, Meter, Outsourced Attendance...',
    category: 'Operations',
    iconType: 'building',
    iconBg: 'bg-[#ef4444]',
    icon: Building
  },
  {
    name: 'IT Management',
    desc: 'With IT Management for AiBizzApp you can manage your companies o...',
    category: 'Operations',
    iconType: 'it',
    iconBg: 'bg-[#475569]',
    icon: Cpu
  },
  {
    name: 'Special Item Accountancy Code',
    desc: 'This application allow to define Accountancy code on Item...',
    category: 'Accounting',
    iconType: 'code',
    iconBg: 'bg-[#f43f5e]',
    icon: Tag
  },
  {
    name: 'Swiss Factur X E Invoicing',
    desc: 'Swiss AiBizz App for E-Invoice Hybrid PDF based on Factur-X and...',
    category: 'Compliance',
    iconType: 'factur',
    iconBg: 'bg-[#4f46e5]',
    initial: 'G'
  },
  {
    name: 'Learning',
    desc: 'Easy to use, open source learning management system',
    category: 'HR',
    iconType: 'book',
    iconBg: 'bg-[#0d9488]',
    icon: GraduationCap
  },
  {
    name: 'Grynn Swiss QR Bill',
    desc: 'A Swiss QR Bill Generator app for AiBizzApp. This APP makes it easy t...',
    category: 'Compliance',
    iconType: 'qr',
    iconBg: 'bg-[#4338ca]',
    icon: QrCode
  },

  // Page 2 (Screenshot 3)
  {
    name: 'Paystack Gateway',
    desc: 'Paystack payment gateway integration for AiBizzApp',
    category: 'Payments',
    iconType: 'paystack',
    iconBg: 'bg-[#0284c7]',
    icon: CreditCard
  },
  {
    name: 'WooCommerce Connector',
    desc: 'Allows the synchronisation of items, stock, customers, addresses, sales...',
    category: 'E-Commerce',
    iconType: 'woocommerce',
    iconBg: 'bg-[#9333ea]',
    icon: ShoppingCart
  },
  {
    name: 'Marley Healthcare',
    desc: 'One stop solution for all your Healthcare Information System(HIS)...',
    category: 'Healthcare',
    iconType: 'heart',
    iconBg: 'bg-[#e11d48]',
    icon: Heart
  },
  {
    name: 'PAV',
    desc: 'PAV stands for Partner Added Value, this app has been created for Yem...',
    category: 'Operations',
    iconType: 'pav',
    iconBg: 'bg-[#991b1b]',
    initial: 'P'
  },
  {
    name: 'Project Payroll',
    desc: 'For NPOs or companies that need to pay employee salary based on...',
    category: 'HR',
    iconType: 'payroll',
    iconBg: 'bg-[#059669]',
    icon: DollarSign
  },
  {
    name: 'Rich Text tinyMCE',
    desc: "Enhanced rich text editor with tinyMCE integration",
    category: 'Operations',
    iconType: 'editor',
    iconBg: 'bg-[#0f172a]',
    icon: FileText
  },
  {
    name: 'GSTR 2B Reconciler',
    desc: 'Reconciliation tool for GSTR 2B and Purchase Register (PR) that includ...',
    category: 'Compliance',
    iconType: 'reconciler',
    iconBg: 'bg-[#18181b]',
    icon: FileSpreadsheet
  },
  {
    name: 'Contract Payment',
    desc: 'Link between contract with sales invoice and purchase invoice and...',
    category: 'Accounting',
    iconType: 'contract',
    iconBg: 'bg-[#d97706]',
    icon: CheckCircle2
  },
  {
    name: 'Email Delivery Service',
    desc: 'A plug and play email delivery service for AiBizz Cloud.',
    category: 'Communication',
    iconType: 'email',
    iconBg: 'bg-[#2563eb]',
    icon: Send
  },
  {
    name: 'Incident Management',
    desc: 'The alert automated, real time incident marking system. This app ...',
    category: 'Operations',
    iconType: 'incident',
    iconBg: 'bg-[#0891b2]',
    icon: Activity
  },
  {
    name: 'DATEV Integration',
    desc: 'Integration with DATEV Unternehmen Online for AiBizzApp.',
    category: 'Accounting',
    iconType: 'datev',
    iconBg: 'bg-[#14b8a6]',
    icon: Layers
  },
  {
    name: 'Non Profit Management',
    desc: 'A comprehensive non-profit and NGO app built for AiBizzApp',
    category: 'Operations',
    iconType: 'nonprofit',
    iconBg: 'bg-[#1d4ed8]',
    icon: Heart
  },
  {
    name: 'Stone Warehouse',
    desc: 'This is a custom app to manage batch wise balance, especially set...',
    category: 'Logistics',
    iconType: 'warehouse',
    iconBg: 'bg-[#64748b]',
    icon: Layers
  },
  {
    name: 'Staffing',
    desc: 'Manpower Supply services for AiBizzApp, this app has been create...',
    category: 'HR',
    iconType: 'staffing',
    iconBg: 'bg-[#ea580c]',
    icon: Users
  },
  {
    name: 'AiBizz Germany',
    desc: 'AiBizzApp extension for companies in Germany.',
    category: 'Compliance',
    iconType: 'germany',
    iconBg: 'bg-[#0d9488]',
    icon: Globe
  },

  // Page 3 (Screenshot 4)
  {
    name: 'Navari CSF Ke',
    desc: 'Country Specific Functionality for Kenya',
    category: 'Compliance',
    iconType: 'kenya',
    iconBg: 'bg-[#1c1917]',
    icon: Globe
  },
  {
    name: 'FCM Notification',
    desc: 'Send Firebase Cloud Messaging Notifications from your AiBizz Site',
    category: 'Communication',
    iconType: 'fcm',
    iconBg: 'bg-[#0284c7]',
    icon: Send
  },
  {
    name: 'WhatsApp Integration',
    desc: 'WhatsApp Cloud API integration for AiBizzApp sites.',
    category: 'Communication',
    iconType: 'whatsapp',
    iconBg: 'bg-[#10b981]',
    icon: MessageSquare
  },
  {
    name: 'System Monitor',
    desc: 'View your CPU, RAM, Disk Usage and more.',
    category: 'Operations',
    iconType: 'monitor',
    iconBg: 'bg-[#2563eb]',
    icon: Cpu
  },
  {
    name: 'Persona',
    desc: 'Lets System Managers impersonate any user',
    category: 'Operations',
    iconType: 'persona',
    iconBg: 'bg-[#4338ca]',
    icon: Shield
  },
  {
    name: 'PibiCut',
    desc: 'Shorten links and generate QR code in a click',
    category: 'Operations',
    iconType: 'pibicut',
    iconBg: 'bg-[#059669]',
    icon: QrCode
  },
  {
    name: 'Calendar Planner for Job Card',
    desc: 'Add a calendar view Job Card Planning where you can drag and...',
    category: 'Operations',
    iconType: 'calendar',
    iconBg: 'bg-[#f43f5e]',
    icon: Calendar
  },
  {
    name: 'HR Addon',
    desc: 'Addon for AiBizzApp attendance and employee checkins',
    category: 'HR',
    iconType: 'hraddon',
    iconBg: 'bg-[#171717]',
    icon: Users
  },
  {
    name: 'Green Checklist',
    desc: 'This app is used for maintaining the records/status of daily activities to...',
    category: 'Operations',
    iconType: 'checklist',
    iconBg: 'bg-[#0891b2]',
    icon: CheckSquare
  },
  {
    name: 'Indiamart Integration',
    desc: 'Automatically pull purchase inquires from indiamart and create leads in...',
    category: 'E-Commerce',
    iconType: 'indiamart',
    iconBg: 'bg-[#dc2626]',
    icon: ShoppingCart
  },
  {
    name: 'WATI Integration',
    desc: 'WATI integration for AiBizzApp',
    category: 'Communication',
    iconType: 'wati',
    iconBg: 'bg-[#0284c7]',
    icon: MessageSquare
  },
  {
    name: 'Site Management',
    desc: 'The app is designed to facilitate the needs of an organisation like...',
    category: 'Operations',
    iconType: 'site',
    iconBg: 'bg-[#0284c7]',
    icon: Building
  },
  {
    name: 'Fiscal Year Based Date Fields',
    desc: 'AiBizzApp plugin that makes date related fields respect the start and...',
    category: 'Accounting',
    iconType: 'fiscal',
    iconBg: 'bg-[#d97706]',
    icon: Calendar
  },
  {
    name: 'HR & Payroll',
    desc: 'Open source, modern, and user-friendly HR and payroll software fo...',
    category: 'HR',
    iconType: 'hrpayroll',
    iconBg: 'bg-[#10b981]',
    icon: Users
  },
  {
    name: 'Helpdesk Management',
    desc: 'Capture the TAT and calculate the time required to resolve the tickets...',
    category: 'Support',
    iconType: 'helpdesk',
    iconBg: 'bg-[#2563eb]',
    icon: HelpCircle
  },

  // Page 4 (Screenshot 5)
  {
    name: 'POS Restaurant',
    desc: 'POS Restaurant billing and kitchen order management',
    category: 'Retail',
    iconType: 'pos',
    iconBg: 'bg-[#0d9488]',
    icon: ShoppingCart
  },
  {
    name: 'Payments',
    desc: 'RazorPay, Stripe, Braintree, PayPal and Paytm integration for AiBizzApp...',
    category: 'Payments',
    iconType: 'payments',
    iconBg: 'bg-[#0284c7]',
    icon: CreditCard
  },
  {
    name: 'Exotel Integration',
    desc: 'Please add a short description about your app here... Cloud telephony',
    category: 'Communication',
    iconType: 'exotel',
    iconBg: 'bg-[#0ea5e9]',
    icon: Phone
  },
  {
    name: 'Insights',
    desc: 'Open source business intelligence tool',
    category: 'Analytics',
    iconType: 'insights',
    iconBg: 'bg-[#d97706]',
    icon: BarChart3
  },
  {
    name: 'Better Attach Control',
    desc: 'A plugin for AiBizzApp that adds customization to the attach control...',
    category: 'Operations',
    iconType: 'attach',
    iconBg: 'bg-[#475569]',
    icon: Paperclip
  },
  {
    name: 'Better Select Control',
    desc: 'A plugin that adds the support of options group...',
    category: 'Operations',
    iconType: 'select',
    iconBg: 'bg-[#2563eb]',
    icon: Layers
  },
  {
    name: 'India Compliance',
    desc: 'Simple, yet powerful compliance solutions for Indian businesses',
    category: 'Compliance',
    iconType: 'leaf',
    iconBg: 'bg-[#15803d]',
    icon: Shield
  },
  {
    name: 'List Unassign From',
    desc: 'A plugin that adds the support of unassign from users for...',
    category: 'Operations',
    iconType: 'unassign',
    iconBg: 'bg-[#f59e0b]',
    icon: CheckSquare
  },
  {
    name: 'Education',
    desc: 'Open source ERP for academic institutes',
    category: 'Education',
    iconType: 'education',
    iconBg: 'bg-[#1d4ed8]',
    icon: GraduationCap
  },
  {
    name: 'Check Run',
    desc: 'Check Run is an application that extends AiBizzApp to allow users to...',
    category: 'Accounting',
    iconType: 'checkrun',
    iconBg: 'bg-[#78350f]',
    icon: CheckCircle2
  },
  {
    name: 'Helpdesk',
    desc: 'Well designed, open source ticketing system',
    category: 'Support',
    iconType: 'ticket',
    iconBg: 'bg-[#7c3aed]',
    icon: HelpCircle
  },
  {
    name: 'Red Background',
    desc: 'Adds a light red background to distinguish test systems from...',
    category: 'Operations',
    iconType: 'test',
    iconBg: 'bg-[#dc2626]',
    icon: Layers
  },
  {
    name: 'Active Users',
    desc: 'A plugin that displays a list of current active users...',
    category: 'Operations',
    iconType: 'activeusers',
    iconBg: 'bg-[#3b82f6]',
    icon: Users
  },
  {
    name: 'Go1 CMS',
    desc: 'Its a Advanced Content Management System built on top o...',
    category: 'Operations',
    iconType: 'cms',
    iconBg: 'bg-[#4f46e5]',
    icon: Layers
  },
  {
    name: 'E Invoice Egypt',
    desc: 'Integration app offering fast and reliable integration with Egyptian tax...',
    category: 'Compliance',
    iconType: 'egypt',
    iconBg: 'bg-[#1e40af]',
    icon: FileText
  }
]

const CATEGORIES = [
  'All',
  'Core ERP',
  'Communication',
  'E-Commerce',
  'Accounting',
  'Compliance',
  'HR',
  'Operations',
  'Payments',
  'Support'
]

export default function AppsPage({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedApp, setSelectedApp] = useState(null)

  const handleAction = (action) => {
    if (onNavigate) onNavigate(action)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Filter ecosystem apps based on search & category
  const filteredApps = useMemo(() => {
    return ECOSYSTEM_APPS.filter((app) => {
      const matchesCategory =
        selectedCategory === 'All' || app.category === selectedCategory
      const matchesSearch =
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.desc.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [searchQuery, selectedCategory])

  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-900 font-sans select-text pt-20">
      
      {/* 1. HERO HEADER SECTION */}
      <section 
        className="relative pt-20 pb-20 sm:pt-24 sm:pb-24 text-white overflow-hidden"
        style={{
          background: 'linear-gradient(172deg, #102ba8 0%, #1f2cb4 22%, #4222b8 50%, #6817c2 76%, #8e10d2 100%)'
        }}
      >
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-5 right-10 w-[500px] h-[500px] bg-fuchsia-500/25 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-semibold text-white backdrop-blur-md shadow-sm mb-5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>Marketplace &amp; Addons</span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Browse 60+ Ecosystem <br />
            <span className="text-cyan-300">Apps &amp; Extensions</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-blue-100/90 leading-relaxed max-w-2xl mx-auto font-normal">
            Explore certified connectors, localized compliance modules, and verified integrations ready to deploy seamlessly into your AiBizzApp ERP workspace.
          </p>

          {/* Search Box in Hero */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search 60+ verified apps, connectors, or tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 text-sm sm:text-base shadow-2xl focus:outline-none focus:ring-4 focus:ring-cyan-300/30 transition-all"
            />
          </div>
        </div>

        {/* Pointer Arrow */}
        <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[28px] border-l-transparent border-r-[28px] border-r-transparent border-b-[22px] border-b-slate-50 z-20 pointer-events-none" />
      </section>


      {/* 2. FEATURED CORE APPS HIGHLIGHT (Screenshot 1) */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#0066cc] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-2">
                Essential Integrations
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c3652] tracking-tight">
                Featured Turnkey Connectors
              </h2>
            </div>
            <p className="text-sm text-slate-500 max-w-md">
              High-impact enterprise modules pre-configured for one-click setup and native synchronization.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_APPS.map((app) => {
              const Icon = app.icon
              return (
                <div
                  key={app.id}
                  className="bg-slate-50/60 rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:bg-white hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-xl ${app.iconBg} text-white flex items-center justify-center shadow-md`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-md border border-slate-200/70 shadow-xs">
                        {app.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-1.5 group-hover:text-[#0066cc] transition-colors">
                      {app.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {app.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs">
                    <span className="inline-flex items-center gap-1.5 text-emerald-600 font-semibold text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Ready to Deploy</span>
                    </span>
                    <button
                      onClick={() => handleAction('contact')}
                      className="text-[#0066cc] hover:text-[#004d99] transition-colors cursor-pointer font-bold text-[11px] inline-flex items-center gap-1"
                    >
                      <span>Request Setup</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>


      {/* 3. FULL 60+ APPS DIRECTORY GRID (Screenshots 2, 3, 4, 5) */}
      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Controls */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0c3652] tracking-tight">
                All Verified Apps ({filteredApps.length})
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Click any app to request configuration or deployment assistance.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#0066cc] text-white shadow-sm'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 3-Column Ecosystem Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredApps.map((app, index) => {
              const IconComponent = app.icon
              return (
                <div
                  key={index}
                  onClick={() => setSelectedApp(app)}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-blue-400 shadow-xs hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    {/* Top App Icon Badge */}
                    <div className="mb-3.5">
                      <div className={`w-11 h-11 rounded-xl ${app.iconBg} text-white flex items-center justify-center font-bold text-sm shadow-xs group-hover:scale-105 transition-transform`}>
                        {IconComponent ? (
                          <IconComponent className="w-5 h-5 text-white" />
                        ) : (
                          <span>{app.initial || app.name.charAt(0)}</span>
                        )}
                      </div>
                    </div>

                    {/* App Name */}
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors leading-snug mb-1">
                      {app.name}
                    </h4>

                    {/* App Description (2 lines clamp) */}
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {app.desc}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 group-hover:text-[#0066cc] transition-colors">
                    <span className="font-medium text-slate-500">{app.category}</span>
                    <span className="inline-flex items-center gap-1 font-semibold">
                      <span>View details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Empty State */}
          {filteredApps.length === 0 && (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-sm">No apps found matching "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All')
                }}
                className="mt-3 text-xs font-semibold text-[#0066cc] hover:underline cursor-pointer"
              >
                Reset all filters
              </button>
            </div>
          )}

          {/* Custom Integration Request Callout */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-950 via-indigo-900 to-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-cyan-300 mb-3">
                <Sparkles className="w-3 h-3" />
                <span>Custom Engineering</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold">Have a Custom ERP App or Proprietary API to Integrate?</h4>
              <p className="text-xs sm:text-sm text-blue-200/90 mt-2 max-w-2xl leading-relaxed">
                Our certified engineers design and deploy custom AiBizzApp extensions, legacy ERP data bridges, and high-frequency webhook pipelines customized for your enterprise.
              </p>
            </div>
            <button
              onClick={() => handleAction('contact')}
              className="whitespace-nowrap px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#1b35b5] font-bold text-sm sm:text-base transition-all shadow-xl active:scale-95 cursor-pointer"
            >
              Request Custom Integration &rarr;
            </button>
          </div>

        </div>
      </section>

      {/* App Detail Modal */}
      {selectedApp && (
        <div 
          onClick={() => setSelectedApp(null)}
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-12 h-12 rounded-xl ${selectedApp.iconBg} text-white flex items-center justify-center font-bold text-base shrink-0 shadow-md`}>
                {selectedApp.icon ? (
                  <selectedApp.icon className="w-6 h-6 text-white" />
                ) : (
                  <span>{selectedApp.initial || selectedApp.name.charAt(0)}</span>
                )}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0066cc] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  {selectedApp.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{selectedApp.name}</h3>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedApp.desc}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-6 text-xs text-slate-600 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Compatible with AiBizzApp Cloud &amp; Self-Hosted Deployments.</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setSelectedApp(null)
                  handleAction('contact')
                }}
                className="flex-1 py-3 px-4 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-sm text-center transition-all shadow-md active:scale-95 cursor-pointer"
              >
                Deploy into My ERP
              </button>
              <button
                onClick={() => setSelectedApp(null)}
                className="py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-sm transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
