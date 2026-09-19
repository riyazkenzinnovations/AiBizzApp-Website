import React, { useState, useMemo, useEffect, useRef } from 'react'
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
  ChevronRight,
  X,
  Headphones,
  ShoppingBag
} from 'lucide-react'

// Real AiBizzApp 3D App Logos
import erpLogo from '../assets/AiBizzApp2.jpeg'
import hrLogo from '../assets/AiBizzApp6.jpeg'
import ravenLogo from '../assets/AiBizzApp4.jpeg'
import crmLogo from '../assets/AiBizzApp5.jpeg'
import paymentsLogo from '../assets/AiBizzApp3.jpeg'
import lmsLogo from '../assets/AiBizzApp1.jpeg'

// 1. Featured Marketplace Apps (Matches Screenshots 1, 2 & 3)
const FEATURED_APPS = [
  // Row 1 (Screenshot 1)
  // 1. AiBizzApp ERP
  {
    id: 'aibizz-erp',
    title: 'AiBizzApp ERP',
    description: 'A comprehensive, feature-rich ERP solution',
    price: '$12 Per User/Month',
    image: erpLogo,
    category: 'Core ERP'
  },
  // 2. AiBizzApp CRM
  {
    id: 'aibizz-crm',
    title: 'AiBizzApp CRM',
    description: 'Simplify Sales, Amplify Relationships',
    price: '$3 Per User/Month',
    image: crmLogo,
    category: 'CRM'
  },
  // 3. HR & Payroll
  {
    id: 'hr-payroll',
    title: 'HR & Payroll',
    description: 'Efficient HR and payroll management',
    price: '$3 Per User/Month',
    image: hrLogo,
    category: 'HRMS'
  },
  // 4. Helpdesk
  {
    id: 'helpdesk',
    title: 'Helpdesk',
    description: 'Customer Service, Made Simple and Effective',
    price: '$3 Per User/Month',
    badgeType: 'helpdesk',
    category: 'Support'
  },
  // 5. Education
  {
    id: 'education',
    title: 'Education',
    description: 'Education and School Management System',
    price: '$3 Per User/Month',
    badgeType: 'education',
    category: 'Education'
  },
  // 6. Payments
  {
    id: 'payments',
    title: 'Payments',
    description: 'Payments app for AiBizzApp',
    price: '$3 Per User/Month',
    image: paymentsLogo,
    category: 'Finance'
  },
  // 7. AiBizzApp LMS
  {
    id: 'aibizz-lms',
    title: 'AiBizzApp LMS',
    description: 'Efficient Learning Management System',
    price: '$3 Per User/Month',
    image: lmsLogo,
    category: 'Learning'
  },
  // 8. SaaS Integration
  {
    id: 'saas-integration',
    title: 'SaaS Integration',
    description: 'SaaS Integration',
    price: '$3 Per User/Month',
    badgeType: 'saas',
    category: 'Integrations'
  },
  // 9. Zatca Phase-2
  {
    id: 'zatca-phase-2',
    title: 'Zatca Phase-2',
    description: 'Zatca Phase-2 Compliance',
    price: '$3 Per User/Month',
    badgeType: 'zatca-2',
    category: 'Compliance'
  },
  // Remaining apps
  // 10. Raven
  {
    id: 'raven',
    title: 'Raven',
    description: 'Team chat for seamless communication',
    price: '$3 Per User/Month',
    image: ravenLogo,
    category: 'Communication'
  },
  // 11. India Compliance
  {
    id: 'india-compliance',
    title: 'India Compliance',
    description: 'Compliance solutions for Indian businesses',
    price: '$3 Per User/Month',
    badgeType: 'india',
    category: 'Compliance'
  },
  // 12. KSA Compliance
  {
    id: 'ksa-compliance',
    title: 'KSA Compliance',
    description: 'KSA Compliance with ZATCA Integration',
    price: '$3 Per User/Month',
    badgeType: 'ksa',
    category: 'Compliance'
  },
  // 13. Ecommerce Integrations
  {
    id: 'ecommerce-integrations',
    title: 'Ecommerce Integrations',
    description: 'Ecommerce Marketplace Integrations',
    price: '$3 Per User/Month',
    badgeType: 'ecommerce',
    category: 'E-Commerce'
  },
  // 14. HRMS Extension
  {
    id: 'hrms-extension',
    title: 'HRMS Extension',
    description: 'HRMS Extension',
    price: '$3 Per User/Month',
    badgeType: 'hrms',
    category: 'HRMS'
  },
  // 15. CRM Extension
  {
    id: 'crm-extension',
    title: 'CRM Extension',
    description: 'CRM Extension',
    price: '$3 Per User/Month',
    badgeType: 'crm-ext',
    category: 'CRM'
  }
]

// 2. Full 60+ Ecosystem Apps & Extensions Catalog (Matches Screenshots 2, 3, 4, 5)
const ECOSYSTEM_APPS = [
  // Page 1 (Screenshot 2)
  {
    name: 'AiBizzApp',
    desc: "Unified enterprise AI ERP with integrated business operations",
    category: 'Core ERP',
    price: 'Price: $12 Per User/Month',
    iconType: 'aibizz',
    iconBg: 'bg-[#0070f3]',
    initial: 'A'
  },
    {
    name: 'Telegram',
    desc: 'Telegram Integration for AiBizzApp',
    category: 'Communication',
    price: 'Price: $3 Per User/Month',
    iconType: 'telegram',
    iconBg: 'bg-[#0088cc]',
    icon: Send
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
  'Logistics',
  'Support'
]

// Reusable Ai Logo Badge for marketplace cards
function AiBadge({ color1, color2, bubbleColor }) {
  const gradientId = `grad-${color1.replace('#', '')}`
  return (
    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-200">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xs">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color1} />
            <stop offset="100%" stopColor={color2} />
          </linearGradient>
        </defs>
        {/* Floating bubbles */}
        <circle cx="28" cy="22" r="3.5" fill={color1} opacity="0.85" />
        <circle cx="35" cy="14" r="2.2" fill={color1} opacity="0.65" />
        <circle cx="43" cy="18" r="4" fill={bubbleColor} opacity="0.9" />
        <circle cx="22" cy="30" r="2.5" fill={color1} opacity="0.75" />
        {/* 3D play-shield body */}
        <path
          d="M 28 32 C 28 26 34 22 40 25 L 75 44 C 81 47 81 55 75 58 L 40 77 C 34 80 28 76 28 70 Z"
          fill={`url(#${gradientId})`}
        />
        {/* White Ai Text */}
        <text
          x="49"
          y="56"
          textAnchor="middle"
          fill="#ffffff"
          fontWeight="800"
          fontSize="24"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          Ai
        </text>
      </svg>
    </div>
  )
}

// Logo and Badge Renderer for Marketplace Cards (Matches Screenshots 1, 2, 3)
function AppCardLogo({ app }) {
  if (app.image) {
    return (
      <img
        src={app.image}
        alt={app.title || app.name}
        className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-xs group-hover:scale-105 transition-transform duration-200"
      />
    )
  }

  switch (app.badgeType) {
    case 'helpdesk':
      return <AiBadge color1="#f59e0b" color2="#d97706" bubbleColor="#fbbf24" />
    case 'ecommerce':
      return <AiBadge color1="#10b981" color2="#059669" bubbleColor="#34d399" />
    case 'education':
      return <AiBadge color1="#06b6d4" color2="#0891b2" bubbleColor="#38bdf8" />
    case 'crm-ext':
      return <AiBadge color1="#2563eb" color2="#1d4ed8" bubbleColor="#60a5fa" />
    case 'india':
      return (
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#373a3c] rounded-xl flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200">
          <svg viewBox="0 0 60 60" className="w-10 h-10">
            <path d="M 23 29 C 23 15 37 13 46 13 C 46 21 44 35 30 35 C 26 35 23 32 23 29 Z" fill="#22c55e" />
            <path d="M 16 41 C 16 33 26 31 32 31 C 32 36 30 45 21 45 C 18 45 16 43 16 41 Z" fill="#4ade80" />
          </svg>
        </div>
      )
    case 'zatca-2':
      return (
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#373a3c] rounded-xl flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200">
          <svg viewBox="0 0 60 60" className="w-10 h-10">
            <path d="M 23 29 C 23 15 37 13 46 13 C 46 21 44 35 30 35 C 26 35 23 32 23 29 Z" fill="#eab308" />
            <path d="M 16 41 C 16 33 26 31 32 31 C 32 36 30 45 21 45 C 18 45 16 43 16 41 Z" fill="#facc15" />
          </svg>
        </div>
      )
    case 'ksa':
      return (
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#006c35] rounded-xl flex items-center justify-center p-2 shadow-xs group-hover:scale-105 transition-transform duration-200">
          <svg viewBox="0 0 64 48" className="w-12 h-9">
            <g fill="#ffffff" stroke="#ffffff">
              <path d="M 12 16 Q 18 10 24 16 Q 30 10 36 16 Q 42 10 48 16 Q 52 12 55 16" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 14 22 Q 22 18 30 22 Q 38 18 46 22 Q 51 20 53 23" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M 12 31 L 49 31 M 17 28 L 17 34 M 14 31 L 12 31" strokeWidth="2" strokeLinecap="round" />
              <path d="M 49 31 Q 53 31 55 29" strokeWidth="2" strokeLinecap="round" fill="none" />
            </g>
          </svg>
        </div>
      )
    case 'saas':
      return (
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#646b73] rounded-xl flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform duration-200">
          <svg viewBox="0 0 24 24" className="w-9 h-9 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
      )
    case 'hrms':
      return (
        <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
          <svg viewBox="0 0 64 64" className="w-14 h-14 drop-shadow-xs">
            <defs>
              <linearGradient id="hrmsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <path d="M 22 18 L 36 18 C 46 18 50 26 44 34 C 38 42 28 42 24 38 L 24 50 L 18 50 L 18 22 C 18 19 20 18 22 18 Z" fill="url(#hrmsGradient)" />
            <path d="M 26 24 L 35 24 C 40 24 43 28 40 32 C 37 36 31 36 28 34 Z" fill="#ffffff" opacity="0.9" />
            <rect x="18" y="30" width="4" height="4" fill="#60a5fa" rx="1" />
            <rect x="14" y="36" width="3" height="3" fill="#38bdf8" rx="0.5" />
          </svg>
        </div>
      )
    default:
      return null
  }
}

export default function AppServices({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [displayCount, setDisplayCount] = useState(15)
  const [selectedApp, setSelectedApp] = useState(null)
  const [toast, setToast] = useState(null)
  const [isHovered, setIsHovered] = useState(false)
  const [timeLeft, setTimeLeft] = useState(4000)
  const timerRef = useRef(null)

  useEffect(() => {
    if (!toast) {
      setTimeLeft(4000)
      setIsHovered(false)
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    // Stop countdown and pause redirect when user hovers to read
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current)
      return
    }

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 100) {
          clearInterval(timerRef.current)
          const destination = toast?.redirectUrl || 'https://aibizzhub.io/marketplace'
          setToast(null)
          if (destination.includes('#contact')) {
            if (onNavigate) onNavigate('contact')
            window.location.hash = '#contact'
            const contactElem = document.getElementById('contact')
            if (contactElem) {
              contactElem.scrollIntoView({ behavior: 'smooth' })
            }
          } else {
            window.location.href = destination
          }
          return 0
        }
        return prev - 100
      })
    }, 100)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [toast, isHovered])

  const handleDeploy = (e) => {
    if (e) e.preventDefault()
    const appName = selectedApp?.title || selectedApp?.name || 'Selected App'

    let targetUrl = 'https://aibizzhub.io/marketplace'
    let toastTitle = `Preparing ${appName} Deployment`
    let toastMsg = `Redirecting to AiBizzHub Marketplace to complete installation and activate ${appName} for your account.`

    // Only in Marketplace & Addons:
    // 1st app -> https://aibizzhub.io/register
    // remaining 58 apps -> http://localhost:5173/#contact
    if (selectedApp?.isEcosystem) {
      if (selectedApp?.name === 'AiBizzApp' || selectedApp?.ecosystemIndex === 0) {
        targetUrl = 'https://aibizzhub.io/register'
        toastTitle = `Registering for ${appName}`
        toastMsg = `Redirecting to AiBizzHub Registration to create your account and deploy ${appName}...`
      } else {
        targetUrl = 'http://localhost:5173/#contact'
        toastTitle = `Requesting Setup for ${appName}`
        toastMsg = `Redirecting to contact page to deploy and configure ${appName} for your ERP...`
      }
    }

    setTimeLeft(4000)
    setIsHovered(false)
    setToast({
      id: Date.now(),
      title: toastTitle,
      message: toastMsg,
      redirectUrl: targetUrl,
      type: 'success'
    })
    setSelectedApp(null)
  }

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

  const visibleApps = filteredApps.slice(0, displayCount)

  return (
    <section className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 bg-[#f8fafc] border-b border-slate-200 text-slate-900 overflow-hidden select-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* SECTION 1: MARKETPLACE APPS (Screenshots 1, 2 & 3)         */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs font-semibold tracking-wider text-[#0066cc] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block mb-3 shadow-xs">
            Essential Integrations
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c3652] tracking-tight">
            Enterprise Apps &amp; Third-Party Integrations
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Pre-built, certified connectors and integrations ready to deploy seamlessly into your AiBizzApp ERP workspace.
          </p>
        </div>

        {/* 15 Featured Marketplace Apps Cards Grid (Matches Screenshots 1, 2 & 3) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-20">
          {FEATURED_APPS.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-slate-300 transition-all duration-200 flex flex-col items-center text-center justify-between group"
            >
              {/* App Icon / Badge */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 flex items-center justify-center">
                <AppCardLogo app={app} />
              </div>

              {/* Title & Description */}
              <div className="w-full flex flex-col items-center mb-4">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 group-hover:text-[#0066cc] transition-colors">
                  {app.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed min-h-[38px] flex items-center justify-center px-2">
                  {app.description}
                </p>
              </div>

              {/* Price & Buy Button */}
              <div className="w-full flex flex-col items-center pt-2">
                <div className="text-xs sm:text-sm font-semibold text-slate-700 mb-3.5">
                  Price: {app.price}
                </div>
                <button
                  onClick={() => setSelectedApp({ ...app, isFeatured: true })}
                  className="w-full max-w-[210px] py-2.5 px-6 bg-[#1e293b] hover:bg-[#0f172a] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-xs hover:shadow transition-all active:scale-[0.98] cursor-pointer"
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>


        {/* ========================================================= */}
        {/* SECTION 2: 60+ ECOSYSTEM APPS DIRECTORY (Screenshots 2-5) */}
        {/* ========================================================= */}
        <div className="pt-10 border-t border-slate-200/80">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-semibold tracking-wider text-[#0066cc] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-2">
                Marketplace &amp; Addons
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0c3652] tracking-tight">
                Browse 60+ Ecosystem Apps &amp; Extensions
              </h3>
              <p className="mt-1.5 text-sm text-slate-500">
                Explore verified extensions, localized country packs, and connectors built for modern enterprise workflows.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search 60+ apps, connectors, or tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0066cc]/20 focus:border-[#0066cc] transition-all shadow-xs"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat)
                  setDisplayCount(15)
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0066cc] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 3-Column Marketplace App Grid (Matches Same Design as Section 1) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {visibleApps.map((app, index) => {
              const IconComponent = app.icon

              return (
                <div
                  key={app.id || index}
                  className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-slate-300 transition-all duration-200 flex flex-col items-center text-center justify-between group"
                >
                  {/* App Icon / Badge */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mb-4 flex items-center justify-center">
                    {app.image || app.badgeType ? (
                      <AppCardLogo app={app} />
                    ) : (
                      <div className={`w-14 h-14 rounded-2xl ${app.iconBg || 'bg-[#0066cc]'} text-white flex items-center justify-center font-bold text-xl shadow-xs group-hover:scale-105 transition-transform duration-200`}>
                        {IconComponent ? (
                          <IconComponent className="w-7 h-7 text-white" />
                        ) : (
                          <span>{app.initial || app.name?.charAt(0) || 'A'}</span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="w-full flex flex-col items-center mb-4">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 group-hover:text-[#0066cc] transition-colors">
                      {app.name || app.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed min-h-[38px] flex items-center justify-center px-2 line-clamp-2">
                      {app.desc || app.description}
                    </p>
                  </div>

                  {/* Price & Buy Button */}
                  <div className="w-full flex flex-col items-center pt-2">
                    <div className="text-xs sm:text-sm font-semibold text-slate-700 mb-3.5">
                      {app.price ? (app.price.startsWith('Price:') ? app.price : `Price: ${app.price}`) : 'Price: $3 Per User/Month'}
                    </div>
                    <button
                      onClick={() => setSelectedApp({ ...app, isEcosystem: true, ecosystemIndex: index })}
                      className="w-full max-w-[210px] py-2.5 px-6 bg-[#1e293b] hover:bg-[#0f172a] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-xs hover:shadow transition-all active:scale-[0.98] cursor-pointer"
                    >
                      Buy
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Empty Search State */}
          {visibleApps.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
              <p className="text-slate-500 text-sm">No apps found matching "{searchQuery}".</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('All')
                }}
                className="mt-3 text-xs font-semibold text-[#0066cc] hover:underline cursor-pointer"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Load More / Expand Button */}
          {displayCount < filteredApps.length && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setDisplayCount((prev) => Math.min(prev + 15, filteredApps.length))}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 hover:border-[#0066cc] hover:text-[#0066cc] text-slate-700 text-sm font-semibold transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                <span>Show More Apps ({filteredApps.length - displayCount} remaining)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Custom Integration Request Callout */}
          <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h4 className="text-lg sm:text-xl font-bold">Need a Custom ERP App or Proprietary Integration?</h4>
              <p className="text-xs sm:text-sm text-blue-200 mt-1 max-w-2xl">
                Our certified engineers build custom AiBizzApp extensions, legacy database connectors, and API bridges tailored specifically to your business operations.
              </p>
            </div>
            <button
              onClick={() => handleAction('contact')}
              className="whitespace-nowrap px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-[#1b35b5] font-bold text-sm transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              Request Custom Build &rarr;
            </button>
          </div>

        </div>

      </div>

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
              <div className={`w-12 h-12 rounded-xl ${selectedApp.iconBg || 'bg-slate-50 border border-slate-100'} flex items-center justify-center font-bold text-base shrink-0 shadow-xs overflow-hidden`}>
                {selectedApp.image || selectedApp.badgeType ? (
                  <div className="w-10 h-10 flex items-center justify-center scale-90">
                    <AppCardLogo app={selectedApp} />
                  </div>
                ) : selectedApp.icon ? (
                  <selectedApp.icon className="w-6 h-6 text-white" />
                ) : (
                  <span className="text-slate-700">{selectedApp.initial || selectedApp.name?.charAt(0) || selectedApp.title?.charAt(0)}</span>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0066cc] bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {selectedApp.category || selectedApp.tag}
                  </span>
                  <span className="text-[10px] font-bold tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {selectedApp.price || 'Price: $99.99 Per User/Month'}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {selectedApp.title || selectedApp.name}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedApp(null)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedApp.description || selectedApp.desc}
            </p>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 mb-6 text-xs text-slate-600 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>Compatible with AiBizzApp Cloud &amp; Self-Hosted Deployments.</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={
                  selectedApp?.isEcosystem
                    ? (selectedApp?.name === 'AiBizzApp' || selectedApp?.ecosystemIndex === 0 ? 'https://aibizzhub.io/register' : 'http://localhost:5173/#contact')
                    : 'https://aibizzhub.io/marketplace'
                }
                onClick={handleDeploy}
                className="flex-1 py-3 px-4 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-sm text-center transition-all shadow-md active:scale-95 cursor-pointer block"
              >
                Deploy into My ERP
              </a>
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

      {/* React-Toastify Style Notification with Pause-on-Hover */}
      {toast && (
        <div 
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="fixed top-5 right-5 z-[99999] max-w-sm w-full animate-in fade-in slide-in-from-top-4 duration-300 transition-all"
        >
          <div className="bg-white rounded-xl shadow-2xl border border-slate-200/90 p-4 relative overflow-hidden flex items-start gap-3 select-none hover:shadow-emerald-500/10 transition-shadow">
            {/* Success icon */}
            <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            </div>

            {/* Message Body */}
            <div className="flex-1 pr-2">
              <div className="flex items-center gap-2 mb-0.5">
                <h4 className="text-sm font-bold text-slate-900 leading-snug">
                  {toast.title}
                </h4>
                {isHovered && (
                  <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/80 px-1.5 py-0.2 rounded shrink-0 animate-pulse">
                    Paused
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {toast.message}
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={() => {
                setToast(null)
                setIsHovered(false)
              }}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* React-Toastify Progress Bar (freezes on hover) */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100 overflow-hidden">
              <div 
                className="h-full bg-emerald-500"
                style={{
                  width: `${Math.max(0, Math.min(100, (timeLeft / 4000) * 100))}%`,
                  transition: isHovered ? 'none' : 'width 100ms linear'
                }}
              />
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
