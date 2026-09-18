import React from 'react'
import {
  ArrowRight,
  Check,
  MousePointerClick,
  Plug,
  Smartphone,
  Sliders,
  GitMerge,
  ShieldCheck
} from 'lucide-react'

// Import custom content-based screenshots for Procurement module
import imgMaterialRequest from '../../assets/procurement/proc_material_requests.jpg'
import imgAutoReorder from '../../assets/procurement/proc_auto_reorder.jpg'
import imgRFQ from '../../assets/procurement/proc_rfq.png'
import imgSupplierQuotation from '../../assets/procurement/proc_supplier_quotation.png'
import imgPurchaseOrder from '../../assets/procurement/proc_purchase_order.jpg'
import imgReceiveGoods from '../../assets/procurement/proc_receive_goods.png'
import imgPayments from '../../assets/procurement/proc_payable_payment.png'
import imgReports from '../../assets/procurement/proc_reports_analytics.png'


export default function Procurement({ onNavigate }) {
  const tableOfContents = [
    { id: 'material-requests',  title: 'Automate procurement with material requests' },
    { id: 'auto-reorder',       title: 'Automate stock replenishment with auto re-order' },
    { id: 'rfq',                title: 'Request for quotation' },
    { id: 'supplier-quotation', title: 'Supplier quotation' },
    { id: 'purchase-order',     title: 'Centralize procurements through purchase order' },
    { id: 'receive-goods',      title: 'Receive goods' },
    { id: 'payable-payment',    title: 'Managing payable and payment' },
    { id: 'reports',            title: 'Procurement reports and analytics' }
  ]

  const procurementSections = [
    {
      id: 'material-requests',
      number: '01',
      badge: 'Material Requests',
      title: 'Automate procurement with material requests',
      urlPath: 'material-requests',
      paragraphs: [
        'Optimised purchasing is all about buying the items, in the right quantity, at the fair price. The integrated Buying module of AiBizzApp allows users from different departments like sales, stores and manufacturing departments to raise flags to the procurement team, just when the need arises.',
        'Eliminate disconnected spreadsheets and email threads with unified requisition tracking, multi-tier manager approvals, and automated conversion into RFQs or Purchase Orders.'
      ],
      highlights: [
        'Automated indent triggers from Sales Orders & Bill of Materials (BOM)',
        'Multi-level authorization workflows based on department budget limits',
        'Direct 1-click conversion into Supplier RFQs or Purchase Orders'
      ],
      img: imgMaterialRequest,
      alt: 'Automate procurement with material requests in AiBizzApp'
    },
    {
      id: 'auto-reorder',
      number: '02',
      badge: 'Auto Re-order',
      title: 'Automate stock replenishment with auto re-order',
      urlPath: 'auto-reorder',
      paragraphs: [
        'AiBizzApp automatically raises the flag to the procurement team by comparing your current stock levels vis-a-vis the re-order level threshold of an item, ensuring timely replenishment. It gets as close as AI-enabled for your purchasing.',
        'Prevent stock-outs during peak cycles while avoiding excessive capital lockup. System-wide threshold monitors continuously audit lead times and safety stocks across all warehouse locations.'
      ],
      highlights: [
        'Warehouse-specific reorder level and safety stock threshold configurations',
        'Lead-time tracking with automatic supplier replenishment schedules',
        'Prevent stock-outs and excess holding costs with intelligent forecasting'
      ],
      img: imgAutoReorder,
      alt: 'Automate stock replenishment with auto re-order in AiBizzApp'
    },
    {
      id: 'rfq',
      number: '03',
      badge: 'RFQ Portal',
      title: 'Request for quotation',
      urlPath: 'request-for-quotation',
      paragraphs: [
        'Simplify the quotation process by enabling Suppliers to access your Request for Quotation (RFQ) via the Supplier Portal—reducing back-and-forth communication. With all necessary details at your fingertips, issuing Purchase Orders becomes effortless.',
        'Vendors input their quotes, terms, and delivery commitments directly. The unified buying workflow eliminates repetitive manual data entry and ensures you make fully informed purchasing decisions every time.'
      ],
      highlights: [
        'Dedicated self-service Supplier Portal for real-time bid submissions',
        'Automated email notifications and quotation request dispatch',
        'Standardized term bidding with currency and tax itemization'
      ],
      img: imgRFQ,
      alt: 'Request for quotation RFQ dashboard in AiBizzApp'
    },
    {
      id: 'supplier-quotation',
      number: '04',
      badge: 'Quotation Analysis',
      title: 'Supplier quotation',
      urlPath: 'supplier-quotation',
      paragraphs: [
        'Effortlessly compile all supplier quotations received in response to your RFQ for easy comparison. Use the Supplier Quotation Report to perform a detailed line-by-line analysis of item pricing across multiple suppliers.',
        'The Supplier Quotation tool helps you compare offers, highlight the lowest bids (L1), negotiate effectively, and secure the most advantageous commercial terms for your business.'
      ],
      highlights: [
        'Side-by-side line-item comparison matrix with automatic L1 bid tagging',
        'Supplier reliability and on-time delivery track record scoring',
        'Direct award and 1-click conversion into binding Purchase Orders'
      ],
      img: imgSupplierQuotation,
      alt: 'Supplier quotation comparison and evaluation in AiBizzApp'
    },
    {
      id: 'purchase-order',
      number: '05',
      badge: 'Purchase Order',
      title: 'Centralize procurements through purchase order',
      urlPath: 'purchase-order',
      paragraphs: [
        'Centralize procurement with Purchase Orders to ensure a structured and efficient buying process with enforceable commitments, delivery schedules, and price locks.',
        'Streamline communication across internal departments and external suppliers. A comprehensive audit trail gives every stakeholder complete context on order fulfillment status, ensuring total transparency across every transaction.'
      ],
      highlights: [
        'Customizable PDF print templates with digital signatures and company branding',
        'Strict budget controls preventing order values from exceeding allocated funds',
        'Real-time status tracking across ordered, received, billed, and pending quantities'
      ],
      img: imgPurchaseOrder,
      alt: 'Centralize procurements through purchase order in AiBizzApp'
    },
    {
      id: 'receive-goods',
      number: '06',
      badge: 'Goods Receipt',
      title: 'Receive goods',
      urlPath: 'receive-goods',
      paragraphs: [
        'Timely receipt of purchase items is critical to prevent stock-outs and maintain a smooth manufacturing flow. Use a one-click report to track delayed receipts and enable timely notifications to ensure procurement teams and suppliers meet delivery deadlines.',
        'Ensure received items comply with supplier commitments by using the Purchase Order as the primary reference. Conduct mandatory quality checks before stock is inwarded into the warehouse, maintaining complete inspection reports linked to each receipt.'
      ],
      highlights: [
        'PO-linked Goods Receipt Note (GRN) with 3-way matching validation',
        'Integrated Quality Inspection workflows with pass/reject batch routing',
        'Automated warehouse put-away rules and real-time stock ledger updates'
      ],
      img: imgReceiveGoods,
      alt: 'Receive goods and purchase receipt in AiBizzApp'
    },
    {
      id: 'payable-payment',
      number: '07',
      badge: 'Payables & Invoicing',
      title: 'Managing payable and payment',
      urlPath: 'payable-payment',
      paragraphs: [
        'Maintain strong supplier relationships by ensuring timely payments. With Purchase Orders and Receipts already logged, creating invoices takes just a few clicks. Perpetual Inventory keeps stock balances updated in real-time, reflecting directly in the Balance Sheet.',
        'Effortlessly track Accounts Payables by invoice and supplier, and use aging analysis in the Payables Report to manage payments efficiently, ensuring a healthy cash flow and seamless bulk payout orders.'
      ],
      highlights: [
        'Automated 3-way matching between PO, Purchase Receipt, and Vendor Bill',
        'Dynamic AP aging breakdown (0-30, 31-60, 61-90, 90+ days) and cash flow forecasts',
        'Batch payment order generation with integrated bank format reconciliation'
      ],
      img: imgPayments,
      alt: 'Managing payable and payment in AiBizzApp'
    },
    {
      id: 'reports',
      number: '08',
      badge: 'Procurement Analytics',
      title: 'Procurement reports and analytics',
      urlPath: 'reports-analytics',
      paragraphs: [
        'Track your procurement items with ease by using tools such as procurement tracker, purchase analysis, and supplier performance scorecards. Identify purchase trends across different item levels, cost centers, and regional entities.',
        'Implement automated budget controls and make intelligent decisions across your entire procure-to-pay process with interactive visualizations, variance tracking, and downloadable executive summaries.'
      ],
      highlights: [
        'Interactive spend analytics categorized by item groups, vendors, and cost centers',
        'Supplier performance KPIs measuring fulfillment velocity and defect rates',
        'Automated budget vs. actual purchase variance alerts and audit logs'
      ],
      img: imgReports,
      alt: 'Procurement reports and analytics in AiBizzApp'
    }
  ]

  const platformFeatures = [
    { icon: MousePointerClick, title: 'No-code builder',     desc: 'Automate tasks with drag-and-drop simplicity' },
    { icon: Plug,              title: 'API-first',           desc: 'Easily integrate with third-party systems' },
    { icon: Smartphone,        title: 'Mobile-friendly',     desc: 'Manage all modules from any device' },
    { icon: Sliders,           title: 'Customizable',        desc: 'Forms, reports, print formats, and dashboards' },
    { icon: GitMerge,          title: 'Approval workflows',  desc: 'Simplify with custom multi-level workflows' },
    { icon: ShieldCheck,       title: 'Roles & permissions', desc: 'Granular access control to safeguard data' }
  ]

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="pt-28 pb-20 bg-white text-slate-900 font-sans select-text selection:bg-[#0066cc] selection:text-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 w-full">

        {/* ── Hero Header ── */}
        <div className="text-center pt-8 pb-12 max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-wider text-[#0066cc] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
            OPEN SOURCE PROCUREMENT SOFTWARE
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Procure, receive, pay, and manage suppliers efficiently
          </h1>

          <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Purchases are often the biggest expense a company incurs, and poor management can impact
            cash flow, profitability, and growth. With AiBizzApp, you can digitize the entire
            purchase flow—from material requests to invoicing—while ensuring budget limits
            are enforced.
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

        {/* ── Numbered Table of Contents / Index Grid ── */}
        <div className="my-8 py-8 border-y border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
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

        {/* ── 8 Redesigned Feature Sections (2-Column Balanced Alternating Split Layout) ── */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24 py-8">
          {procurementSections.map((section, index) => {
            const isEven = index % 2 === 1

            return (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 pt-4 pb-4"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

                  {/* Text & Capability Column (5 cols on Desktop) */}
                  <div
                    className={`lg:col-span-5 space-y-4 sm:space-y-5 text-left ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {/* Badge / Pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066cc] border border-blue-100 text-xs font-bold tracking-wide uppercase">
                      <span>{section.number}</span>
                      <span className="w-1 h-1 rounded-full bg-[#0066cc]"></span>
                      <span>{section.badge}</span>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-bold text-slate-900 tracking-tight leading-[1.25]">
                      {section.title}
                    </h2>

                    {/* Paragraphs */}
                    <div className="space-y-3">
                      {section.paragraphs.map((p, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal"
                        >
                          {p}
                        </p>
                      ))}
                    </div>

                    {/* Feature Highlights Checklist (Fills whitespace purposefully) */}
                    <div className="pt-2 space-y-2.5">
                      {section.highlights.map((point, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-md bg-blue-50 border border-blue-200/90 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-[#0066cc] stroke-[2.5]" />
                          </div>
                          <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* UI Mockup Window Column (7 cols on Desktop) */}
                  <div
                    className={`lg:col-span-7 w-full ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="rounded-2xl bg-gradient-to-b from-slate-100/90 to-slate-50/50 p-2 sm:p-3.5 border border-slate-200/80 shadow-md shadow-slate-200/50 overflow-hidden group hover:shadow-xl transition-all duration-300">
                      {/* Browser Mockup Window Header */}
                      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200/70 mb-2.5 bg-white/85 backdrop-blur-xs rounded-lg text-xs text-slate-500 font-medium">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block"></span>
                          <span className="ml-2 font-mono text-[11px] text-slate-400 truncate max-w-[180px] sm:max-w-xs">
                            aibizzapp.com/procurement/{section.urlPath}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider hidden sm:inline-block">
                          AiBizzApp ERP
                        </span>
                      </div>

                      {/* Image Asset */}
                      <img
                        src={section.img}
                        alt={section.alt}
                        className="rounded-xl shadow-2xs w-full h-auto object-cover bg-white border border-slate-200/70 group-hover:scale-[1.01] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>

                </div>
              </section>
            )
          })}
        </div>

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
                <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:shadow-xs transition-all">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-[#0066cc] border border-blue-100 shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{feat.title}</h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ── Bottom CTA Banner ── */}
        <div className="mt-16 pt-16 border-t border-slate-200 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
            Choose Freedom with AiBizzApp
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            The comprehensive, user-friendly and 100% open-source ERP
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('contact')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <span>Contact us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                if (onNavigate) onNavigate('pricing')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-slate-300 hover:border-slate-800 bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Start free trial</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
