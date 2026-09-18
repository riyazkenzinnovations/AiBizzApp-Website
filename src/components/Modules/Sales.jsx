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

// Import custom content-based screenshots for Sales module
import imgQuotations from '../../assets/sales/sales_quotations.png'
import imgOrderToCash from '../../assets/sales/sales_order_to_cash.png'
import imgPricingRules from '../../assets/sales/sales_pricing_rules.png'
import imgBlanketOrders from '../../assets/sales/sales_blanket_orders.png'
import imgTimelyPayments from '../../assets/sales/sales_timely_payments.png'


export default function Sales({ onNavigate }) {
  const tableOfContents = [
    { id: 'make-quotations',  title: 'Make professional quotations' },
    { id: 'order-to-cash',    title: 'Run lightning fast order to delivery to cash cycle' },
    { id: 'pricing-rules',    title: 'Set pricing rules' },
    { id: 'blanket-orders',   title: 'Use blanket orders to honour customer contracts' },
    { id: 'timely-payments',  title: 'Get timely payments from your customers' }
  ]

  const salesSections = [
    {
      id: 'make-quotations',
      number: '01',
      badge: 'Quotations',
      title: 'Make professional quotations',
      urlPath: 'quotations',
      paragraphs: [
        'In winning new business, along with product quality, the responsiveness of the sales team plays a vital role. A quick turnaround in offering a competitive proposal can significantly boost conversions.',
        'With AiBizzApp, you can create quotations on the fly using pre-configured masters. Select a customer or a lead, choose items, fetch terms, and produce a quotation in seconds. You can even use the built-in print designer to build exceptional templates, and upon approval, email the quotation directly to the customer with personalized follow-up tracking.'
      ],
      highlights: [
        'Pre-configured masters for instant quote generation from CRM leads',
        'No-code drag-and-drop Print Designer for bespoke proposal branding',
        'Automated email dispatch with audit logs and 1-click Sales Order conversion'
      ],
      img: imgQuotations,
      alt: 'Make professional quotations in AiBizzApp'
    },
    {
      id: 'order-to-cash',
      number: '02',
      badge: 'Order-to-Cash',
      title: 'Run lightning fast order to delivery to cash cycle',
      urlPath: 'order-to-cash',
      paragraphs: [
        'Fulfilling customer orders is the backbone of repeat business. Every step of your supply chain, from collecting advance payments to ensuring timely deliveries, depends on the success of customer orders.',
        'Celebrate new sales by creating a Sales Order and instantly receiving notifications about stock availability. Reserve item batches to be dispatched against specific Sales Orders, trigger production Work Orders when required, and seamlessly coordinate delivery notes and billing.'
      ],
      highlights: [
        'Real-time warehouse stock availability checks and batch reservation',
        'Automated work order indents for manufactured inventory items',
        'Integrated delivery notes, shipment waybill tracking, and dispatch logs'
      ],
      img: imgOrderToCash,
      alt: 'Order to delivery to cash cycle in AiBizzApp'
    },
    {
      id: 'pricing-rules',
      number: '03',
      badge: 'Pricing Rules',
      title: 'Set pricing rules',
      urlPath: 'pricing-rules',
      paragraphs: [
        'Discounts are a powerful tool to drive short-term sales and encourage repeat business. Never miss an opportunity to apply them when creating an order. Boost your chances of customer retention by automating discount applications.',
        'Set up dynamic Pricing Rules in AiBizzApp to ensure discounts are automatically applied to items when new orders are created based on customer tiers, volume thresholds, promotional date ranges, and strict margin protection rules.'
      ],
      highlights: [
        'Tiered volume discount brackets (10+, 50+, 200+ units) with automatic application',
        'Customer group price lists (Wholesale, Retail, VIP, Enterprise Accounts)',
        'Strict margin protection floor rules preventing unauthorized over-discounting'
      ],
      img: imgPricingRules,
      alt: 'Set pricing rules and discounts in AiBizzApp'
    },
    {
      id: 'blanket-orders',
      number: '04',
      badge: 'Blanket Orders',
      title: 'Use blanket orders to honour customer contracts',
      urlPath: 'blanket-orders',
      paragraphs: [
        'Building a value-driven business starts with honoring your commitments. Capture special rate contracts with key customers through long-term Blanket Orders.',
        'When creating new orders, ensure they align with the agreed-upon rates and quantities. Track fulfillment progress in real-time, view linked sales orders, and automatically alert account managers when contract limits near renewal.'
      ],
      highlights: [
        'Fixed contract rate locks safeguarding agreed pricing over annual terms',
        'Visual fulfillment progress meters tracking delivered vs remaining quotas',
        'Direct 1-click Sales Order generation drawn against blanket contract balances'
      ],
      img: imgBlanketOrders,
      alt: 'Blanket orders and customer contracts in AiBizzApp'
    },
    {
      id: 'timely-payments',
      number: '05',
      badge: 'Accounts Receivable',
      title: 'Get timely payments from your customers',
      urlPath: 'timely-payments',
      paragraphs: [
        'Getting timely payments from customers was never this easy. View accounts receivables reports to track late payers and set automated customized reminders to make sure you receive payments on time.',
        'Accelerate collections with real-time aging summaries (0-30, 31-60, 61-90, 90+ days), integrated multi-channel dunning via email and WhatsApp, and direct payment gateway links embedded in every invoice.'
      ],
      highlights: [
        'Real-time Accounts Receivable aging brackets with instant overdue drill-down',
        'Automated multi-channel payment reminders via WhatsApp, email, and SMS',
        'Days Sales Outstanding (DSO) analytics and customer credit limit controls'
      ],
      img: imgTimelyPayments,
      alt: 'Timely payments and accounts receivable in AiBizzApp'
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
            OPEN SOURCE SALES INVOICING SOFTWARE
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            CRM and order-to-cash, all in one app
          </h1>

          <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Sales is the growth engine of an organization. AiBizzApp keeps it well-oiled with tools that ensure your sales system runs smoothly. Nurture your pipeline by tracking each of your prospects and their needs in CRM. Stay ahead of your competitors by creating competitive and professional quotations and invoices with minimal effort. Manage delivery notes and accounts receivables.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4">
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

        {/* ── 5 Redesigned Feature Sections (2-Column Balanced Alternating Split Layout) ── */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24 py-8">
          {salesSections.map((section, index) => {
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
                            aibizzapp.com/sales/{section.urlPath}
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
