import React from 'react'
import { ArrowRight, MousePointerClick, Plug, Smartphone, Sliders, GitMerge, ShieldCheck } from 'lucide-react'

// UI Screenshots
import img1 from '../../assets/accounting/media_1789475334615.png'
import img2 from '../../assets/accounting/media_1789475345323.png'
import img3 from '../../assets/accounting/media_1789475358358.png'
import img4 from '../../assets/accounting/media_1789475370670.png'
import img5 from '../../assets/accounting/media_1789475395204.png'
import img6 from '../../assets/accounting/media_1789475407327.png'

const platformFeatures = [
  { icon: MousePointerClick, title: 'No-code builder',     desc: 'Automate tasks with drag-and-drop simplicity' },
  { icon: Plug,              title: 'API-first',           desc: 'Easily integrate with third-party systems' },
  { icon: Smartphone,        title: 'Mobile-friendly',     desc: 'Manage all modules from any device' },
  { icon: Sliders,           title: 'Customizable',        desc: 'Forms, reports, print formats, and dashboards' },
  { icon: GitMerge,          title: 'Approval workflows',  desc: 'Simplify with custom multi-level workflows' },
  { icon: ShieldCheck,       title: 'Roles & permissions', desc: 'Granular access control to safeguard data' },
]

// POS Counter Operations flow steps
const catalogRow = [
  { label: 'Barcode Catalog',     desc: 'Error-free retrieval and batch expiry tracking' },
  { label: 'Multi-Store Setup',   desc: 'Dedicated warehouse tracking for each retail store' },
  { label: 'Store-Based Pricing', desc: 'Seamless location-specific pricing & promotional rules' },
  { label: 'Counter Permissions', desc: 'Pre-configured defaults, cash drawers & user roles' },
]

const counterRow = [
  { label: 'Touchscreen Checkout',desc: 'Touch-friendly UI for rapid, queue-busting billing' },
  { label: 'Multi-Mode Payments', desc: 'Accept cash, cards, split payments, and loyalty points' },
  { label: 'Shift Reconciliation',desc: 'Structured shift opening, closing, and cash count audits' },
  { label: 'Consolidated Ledger', desc: 'Optimize GL postings with single daily summary invoices' },
]

export default function PointOfSale({ onNavigate }) {
  const tableOfContents = [
    { id: 'create-items-prices',          title: 'Create items and prices' },
    { id: 'create-multiple-stores',       title: 'Create multiple stores in a few clicks' },
    { id: 'manage-billing-counters',      title: 'Manage billing counters' },
    { id: 'collection-pos-invoice',       title: 'Collection and POS invoice' },
    { id: 'shift-opening-closing',        title: 'Shift opening and closing' },
    { id: 'community-apps',               title: 'Community apps' },
  ]

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const sections = [
    {
      id: 'create-items-prices',
      title: 'Create items and prices',
      img: img1,
      paragraphs: [
        'Efficient catalog management is crucial, as items are the core unit for tracking. Assign barcodes to items for quick, error-free retrieval during POS invoicing. For perishable products, organize them into batches with expiration dates to ensure proper handling.',
        'If pricing differs between stores, use store-based Item Pricing to apply the correct rates seamlessly. This ensures accurate billing, smooth operations, and better inventory control across all locations.'
      ]
    },
    {
      id: 'create-multiple-stores',
      title: 'Create multiple stores in a few clicks',
      img: img2,
      paragraphs: [
        'In AiBizzApp, you can create a dedicated Warehouse for each store, enabling real-time tracking of all stock movements, including inward, outward, and in-transit. Assign specific roles with predefined permissions to handle stock transfers, billing, and payment collection, ensuring clear accountability.',
        'Monitor each store’s performance by tracking profitability individually, giving you actionable insights to optimize operations and drive better results across your retail network.'
      ]
    },
    {
      id: 'manage-billing-counters',
      title: 'Manage billing counters',
      img: img3,
      paragraphs: [
        'Assign a dedicated POS user for each billing counter, pre-configured with default values such as customer details, warehouse, and mode of payment.',
        'Fetch items effortlessly by scanning barcodes and apply discounts automatically based on active promotional schemes. Enhance the customer experience by enabling loyalty point redemption directly during billing.',
        'Optimize operations with a POS UI tailored for touchscreen devices, ensuring seamless use across POS machines, desktops, tablets, and mobile phones for maximum flexibility and efficiency.'
      ]
    },
    {
      id: 'collection-pos-invoice',
      title: 'Collection and POS invoice',
      img: img4,
      paragraphs: [
        'Choose from a variety of payment modes with ease, allowing you to offer your customers flexibility in how they pay. The system automatically handles the change amount, ensuring accuracy and minimizing errors. Plus, with a pre-defined print format optimized for POS printers, your invoices are printed quickly and professionally, streamlining the entire payment process.'
      ]
    },
    {
      id: 'shift-opening-closing',
      title: 'Shift opening and closing',
      img: img5,
      paragraphs: [
        'At the end of each shift, a consolidated invoice is generated, encompassing all POS transactions made throughout the day. This approach optimizes ledger posting, while retaining individual POS transactions. AiBizzApp POS ensures that each POS station store performs a proper shift opening and closing process, along with updation of the collection details during the day.'
      ]
    },
    {
      id: 'community-apps',
      title: 'Community apps',
      img: img6,
      paragraphs: [
        'Enhance your POS capabilities by exploring additional apps available on the AiBizzApp Marketplace. These apps offer advanced features and an interactive UI, further streamlining POS billing and elevating the customer experience.'
      ]
    }
  ]

  return (
    <div className="pt-28 pb-20 bg-white text-slate-900 font-sans select-text selection:bg-[#0066cc] selection:text-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 w-full">

        {/* ── Hero Header ── */}
        <div className="text-center pt-8 pb-12 max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-wider text-[#0066cc] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
            OPEN SOURCE POS SOFTWARE
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Simple and user-friendly POS to manage your retail business
          </h1>
          <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            AiBizzApp’s POS solution is designed to meet these challenges, combining a user-friendly interface with robust ERP functionalities. Streamline your operations by managing product catalogs, stock deliveries, and billing all in one place. The intuitive, touchscreen-friendly POS UI enables you to generate invoices up to five times faster, ensuring smooth transactions even during peak hours. Additionally, simplify shift closures and consolidate daily sales into a single invoice, boosting operational efficiency and enhancing overall productivity.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('pricing')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-sm transition-all shadow-md shadow-blue-900/20 active:scale-95 cursor-pointer"
            >
              <span>Start free trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                if (onNavigate) onNavigate('contact')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-slate-300 hover:border-slate-800 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Contact us</span>
            </button>
          </div>
        </div>

        {/* ── POS Operations Flow Diagram ── */}
        <div className="my-6 rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
          {/* Store & Catalog Setup row */}
          <div className="border-b border-slate-100 p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#0066cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <span className="text-xs font-bold text-slate-600 tracking-wider uppercase">Store & Catalog Setup</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {catalogRow.map((step, i) => (
                <div key={i} className="rounded-xl border border-slate-200/70 bg-slate-50/70 p-3.5 text-center">
                  <div className="text-xs font-bold text-slate-800 leading-snug mb-1">{step.label}</div>
                  <div className="text-[11px] text-slate-500 leading-snug">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Counter & Checkout Flow row */}
          <div className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#0066cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2zM10 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm5 5a.5.5 0 11-1 0 .5.5 0 011 0z" />
                </svg>
              </div>
              <span className="text-xs font-bold text-slate-600 tracking-wider uppercase">Counter & Checkout Flow</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {counterRow.map((step, i) => (
                <div key={i} className="rounded-xl border border-slate-200/70 bg-slate-50/70 p-3.5 text-center">
                  <div className="text-xs font-bold text-slate-800 leading-snug mb-1">{step.label}</div>
                  <div className="text-[11px] text-slate-500 leading-snug">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Numbered Table of Contents (Aligned with Navbar) ── */}
        <div className="my-8 py-8 border-y border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {tableOfContents.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-blue-50/70 hover:border-blue-200 text-left transition-all group cursor-pointer"
              >
                <span className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 group-hover:text-[#0066cc] group-hover:border-blue-300 shrink-0 shadow-2xs">
                  {idx + 1}
                </span>
                <span className="text-sm font-semibold text-slate-800 group-hover:text-[#0066cc] transition-colors leading-snug">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── 6 Content Sections ── */}
        {sections.map(s => (
          <section key={s.id} id={s.id} className="pt-16 pb-12 scroll-mt-24">
            <div className="max-w-4xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{s.title}</h2>
              {s.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">{p}</p>
              ))}
            </div>
            <div className="mt-8 rounded-3xl bg-[#bfdbfe]/30 sm:p-8 p-3 border border-blue-100 shadow-sm overflow-hidden flex items-center justify-center">
              <img src={s.img} alt={s.title} className="rounded-2xl shadow-md w-full max-w-5xl h-auto object-contain bg-white" />
            </div>
          </section>
        ))}

        {/* ── Powered by AiBizzApp Framework ── */}
        <div className="pt-16 pb-12 border-t border-slate-200">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-xl sm:text-2xl font-bold text-slate-900">
              Powered by AiBizzApp Framework
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {platformFeatures.map((feat, idx) => {
              const Icon = feat.icon
              return (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 transition-all">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-[#0066cc] shrink-0 border border-blue-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{feat.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Choose Freedom with AiBizzApp Banner ── */}
        <div className="mt-12 mb-8 py-14 px-6 sm:px-12 rounded-3xl bg-slate-900 text-white text-center shadow-xl">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight">
            Choose Freedom with AiBizzApp
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            The comprehensive, user-friendly and 100% open-source ERP
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('contact')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm transition-all shadow-sm cursor-pointer"
            >
              <span>Contact us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                if (onNavigate) onNavigate('pricing')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800/80 hover:bg-slate-800 text-white font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Start free trial</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
