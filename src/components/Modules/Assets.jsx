import React from 'react'
import { ArrowRight, MousePointerClick, Plug, Smartphone, Sliders, GitMerge, ShieldCheck } from 'lucide-react'

// UI Screenshots
import img1 from '../../assets/accounting/media_1789475334615.png'
import img2 from '../../assets/accounting/media_1789475345323.png'
import img3 from '../../assets/accounting/media_1789475358358.png'
import img4 from '../../assets/accounting/media_1789475370670.png'
import img5 from '../../assets/accounting/media_1789475395204.png'

const platformFeatures = [
  { icon: MousePointerClick, title: 'No-code builder',     desc: 'Automate tasks with drag-and-drop simplicity' },
  { icon: Plug,              title: 'API-first',           desc: 'Easily integrate with third-party systems' },
  { icon: Smartphone,        title: 'Mobile-friendly',     desc: 'Manage all modules from any device' },
  { icon: Sliders,           title: 'Customizable',        desc: 'Forms, reports, print formats, and dashboards' },
  { icon: GitMerge,          title: 'Approval workflows',  desc: 'Simplify with custom multi-level workflows' },
  { icon: ShieldCheck,       title: 'Roles & permissions', desc: 'Granular access control to safeguard data' },
]

// Asset lifecycle flow steps
const acquireRow = [
  { label: 'Purchase Receipt',   desc: 'Auto-creates asset record directly from item master' },
  { label: 'Barcode & Tracking', desc: 'Scan barcodes via mobile camera for rapid tagging' },
  { label: 'Location & Custody', desc: 'Assign branches, departments, and custodians' },
  { label: 'Warranty & Policy',  desc: 'Track active insurance, coverage terms, and renewal' },
]

const manageRow = [
  { label: 'Auto-Depreciation',  desc: 'Automated schedules with Straight Line or WDV' },
  { label: 'Preventive Care',    desc: 'Service logs, maintenance calendars, and downtime alerts' },
  { label: 'Value Adjustment',   desc: 'Revalue assets with auto journal entries and recast curves' },
  { label: 'Scrap & Disposal',   desc: '1-click retirement, resale, or write-off with audit trail' },
]

export default function Assets({ onNavigate }) {
  const tableOfContents = [
    { id: 'manage-asset-lifecycle',     title: 'Manage asset lifecycle' },
    { id: 'track-inventory-details',    title: 'Track inventory details of assets' },
    { id: 'procure-assets',             title: 'Procure assets in few clicks' },
    { id: 'sell-assets',                title: 'Sell assets' },
    { id: 'automate-depreciation',      title: 'Automate asset depreciation' },
    { id: 'scrap-assets',               title: 'Scrap assets' },
    { id: 'asset-value-adjustment',     title: 'Asset value adjustment' },
    { id: 'asset-reporting',            title: 'Asset reporting' },
    { id: 'on-the-fly-customizations',  title: 'On-the-fly customizations' },
  ]

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const sections = [
    {
      id: 'manage-asset-lifecycle',
      title: 'Manage asset lifecycle',
      img: img1,
      paragraphs: [
        'AiBizzApp simplifies financial management with a flexible Chart of Accounts (CoA) that adapts to any business structure. The tree view feature lets you organize ledgers into parent and child nodes, making it easier to categorize and break down financial data. AiBizzApp also supports multi-company accounting, consolidates financials, and offers multi-currency capabilities, making it ideal for global businesses. This helps enhance data analysis, provides clear financial insights, and streamlines management across multiple entities.'
      ]
    },
    {
      id: 'track-inventory-details',
      title: 'Track inventory details of assets',
      img: img2,
      paragraphs: [
        "AiBizzApp features integrated inventory so you can easily manage all information about an asset. Batched or serialized items? Take your pick. Scan barcodes with your device camera for blazing fast search, faster outputs, and data-driven decisions based on assets' availability, locations, and more. When an asset is purchased, the system auto-creates the asset record based on the information stored in the item master."
      ]
    },
    {
      id: 'procure-assets',
      title: 'Procure assets in few clicks',
      img: img3,
      paragraphs: [
        'Procuring assets is done via purchase receipts (goods received notes) or purchase invoices. The system directly creates a record for the asset, based on the information stored in the item master. Depreciation methods, schedule, insurance details and more can be updated with a few clicks. Asset procurement simplified with one-time configuration.'
      ]
    },
    {
      id: 'sell-assets',
      title: 'Sell assets',
      img: img4,
      paragraphs: [
        'With a few clicks, you can sell assets that you no longer need. There is no overhead of maintaining accounting books, since the system will auto-create those journal entries, keeping the process quick and seamless.'
      ]
    },
    {
      id: 'automate-depreciation',
      title: 'Automate asset depreciation',
      img: img5,
      paragraphs: [
        'Automated asset accounting removes the hassle of manual depreciation entries. Configure depreciation schedules for various categories of assets, and watch the software auto-calculate the depreciation amount or dates and create accounting entries.'
      ]
    },
    {
      id: 'scrap-assets',
      title: 'Scrap assets',
      img: img1,
      paragraphs: [
        'When you no longer need an asset, you can scrap it with just one click. The accounting entries are handled by our asset management software so the process always stays smooth.'
      ]
    },
    {
      id: 'asset-value-adjustment',
      title: 'Asset value adjustment',
      img: img2,
      paragraphs: [
        'If the value of an asset increases or drops off suddenly, it can be recorded using the Asset Value Adjustment feature. The system will create journal entries (based on the re-adjustment values that were entered) and recalculate depreciation amounts.'
      ]
    },
    {
      id: 'asset-reporting',
      title: 'Asset reporting',
      img: img3,
      paragraphs: [
        'Identify bottlenecks, monitor performance, and improve service delivery with reporting features. Out-of-the-box standard reports and easy-to-build custom reports empower you with data-driven analysis for better decisions.'
      ]
    },
    {
      id: 'on-the-fly-customizations',
      title: 'On-the-fly customizations',
      img: img4,
      paragraphs: [
        'Create your own open source asset management software. Map the data you care about by adding custom fields in your forms. Then customize form behavior by auto-fetching values, hide fields based on user roles, and create custom print formats — all without a single line of code.'
      ]
    }
  ]

  return (
    <div className="pt-28 pb-20 bg-white text-slate-900 font-sans select-text selection:bg-[#0066cc] selection:text-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 w-full">

        {/* ── Hero Header ── */}
        <div className="text-center pt-8 pb-12 max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-wider text-[#0066cc] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
            OPEN SOURCE FIXED ASSET MANAGEMENT
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Manage asset lifecycle from acquisition to retirement, with ease
          </h1>
          <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            AiBizzApp makes asset management painless, from purchase to perishment, IT infrastructure to equipment. It covers every branch of your organization in one centralized system. Use the ample features packed into a single tool to manage assets better.
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

        {/* ── Asset Lifecycle Flow Diagram ── */}
        <div className="my-6 rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
          {/* Acquire & Register row */}
          <div className="border-b border-slate-100 p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#0066cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <span className="text-xs font-bold text-slate-600 tracking-wider uppercase">Acquire & Register</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {acquireRow.map((step, i) => (
                <div key={i} className="rounded-xl border border-slate-200/70 bg-slate-50/70 p-3.5 text-center">
                  <div className="text-xs font-bold text-slate-800 leading-snug mb-1">{step.label}</div>
                  <div className="text-[11px] text-slate-500 leading-snug">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Maintain & Depreciate row */}
          <div className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#0066cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-xs font-bold text-slate-600 tracking-wider uppercase">Maintain & Depreciate</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {manageRow.map((step, i) => (
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

        {/* ── 9 Content Sections ── */}
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
