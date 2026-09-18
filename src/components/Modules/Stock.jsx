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

// Import custom white-themed screenshots for Stock module
import imgItemMaster from '../../assets/stock/stock_item_master.png'
import imgWarehouses from '../../assets/stock/stock_flexible_warehouses.png'
import imgReplenishment from '../../assets/stock/stock_stock_replenishment.png'
import imgReservation from '../../assets/stock/stock_stock_reservation.png'
import imgReconciliation from '../../assets/stock/stock_stock_reconciliation.png'
import imgPutawayPick from '../../assets/stock/stock_putaway_pick_list.png'
import imgBatches from '../../assets/stock/stock_serialized_batched.png'
import imgReports from '../../assets/stock/stock_stock_reports.png'

const platformFeatures = [
  { icon: MousePointerClick, title: 'No-code builder',     desc: 'Automate tasks with drag-and-drop simplicity' },
  { icon: Plug,              title: 'API-first',           desc: 'Easily integrate with third-party systems' },
  { icon: Smartphone,        title: 'Mobile-friendly',     desc: 'Manage all modules from any device' },
  { icon: Sliders,           title: 'Customizable',        desc: 'Forms, reports, print formats, and dashboards' },
  { icon: GitMerge,          title: 'Approval workflows',  desc: 'Simplify with custom multi-level workflows' },
  { icon: ShieldCheck,       title: 'Roles & permissions', desc: 'Granular access control to safeguard data' },
]

export default function Stock({ onNavigate }) {
  const tableOfContents = [
    { id: 'item-master',          title: 'Centralized item master' },
    { id: 'flexible-warehouses',  title: 'Flexible warehouses' },
    { id: 'stock-replenishment',  title: 'Maintain inventory levels using stock replenishment' },
    { id: 'stock-reservation',    title: 'Improve order fulfillment using stock reservation' },
    { id: 'stock-reconciliation', title: 'Reconcile inventory levels for accuracy' },
    { id: 'putaway-pick-list',    title: 'Putaway and Pick List' },
    { id: 'serialized-batched',   title: 'Serialised and Batched Inventory' },
    { id: 'stock-reports',        title: 'Stock Reports' },
  ]

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const sections = [
    {
      id: 'item-master',
      number: '01',
      badge: 'Item Master',
      title: 'Centralized item master',
      urlPath: 'item-master',
      paragraphs: [
        'Define product categories as Item Groups, and get an analysis of stock movement at item and Item Group level. Define naming conventions for items to prevent duplication and discover items with ease.',
        'Manage items of different nature and purpose seamlessly—stockable items, consulting services, raw materials, and sub-contracted items.'
      ],
      highlights: [
        'Single source of truth with standardized naming conventions and barcodes',
        'Item group hierarchy with deep stock movement and velocity analysis',
        'Native support for stockable items, services, raw materials, and subcontracting'
      ],
      img: imgItemMaster,
      alt: 'Centralized item master in AiBizzApp Stock'
    },
    {
      id: 'flexible-warehouses',
      number: '02',
      badge: 'Warehouses',
      title: 'Flexible warehouses',
      urlPath: 'warehouses',
      paragraphs: [
        'Warehouses serve as the physical or virtual hubs where inventory is stored and managed. AiBizzApp simplifies this with a tree-view Warehouse Master, allowing you to design a structure that mirrors your warehouse layout and its sub-locations.',
        'The Perpetual Inventory valuation system integrates a warehouse with an accounting ledger. This ensures automatic General Ledger postings alongside Stock Ledger updates, providing accurate and real-time inventory valuation.'
      ],
      highlights: [
        'Hierarchical tree-view warehouse master mirroring rooms, racks, and bins',
        'Perpetual inventory system linking physical stock moves to financial GL ledgers',
        'Automatic real-time balance updates across regional distribution hubs'
      ],
      img: imgWarehouses,
      alt: 'Flexible warehouses tree view and perpetual inventory in AiBizzApp'
    },
    {
      id: 'stock-replenishment',
      number: '03',
      badge: 'Replenishment',
      title: 'Maintain inventory levels using stock replenishment',
      urlPath: 'replenishment',
      paragraphs: [
        'Prevent stockouts by setting re-order levels and quantities for an item and a warehouse. With AiBizzApp, automate the replenishment process by triggering Material Requests automatically when stock reaches the re-order threshold.',
        'This ensures you stay ahead of inventory needs and maintain smooth operations across all distribution centers without manual tracking delays.'
      ],
      highlights: [
        'Automated Material Requests triggered when stock falls below reorder point',
        'Configurable safety stock buffers by individual item and warehouse location',
        'Direct integration with procurement to issue RFQs and purchase orders'
      ],
      img: imgReplenishment,
      alt: 'Automated stock replenishment and reorder engine in AiBizzApp'
    },
    {
      id: 'stock-reservation',
      number: '04',
      badge: 'Stock Reservation',
      title: 'Improve order fulfillment using stock reservation',
      urlPath: 'reservation',
      paragraphs: [
        'If you operate on a Make to Order or Purchase to Order basis, linking your orders to purchasing or manufacturing processes becomes essential.',
        'AiBizzApp ensures that stock purchased or manufactured is reserved for specific orders, preventing the same items from being dispatched to different customers. This guarantees accurate order fulfillment and prevents stock conflicts.'
      ],
      highlights: [
        'Dedicated inventory quarantine for confirmed customer Sales Orders',
        'Strict conflict prevention blocking counter sales or unauthorized transfers',
        'Automatic allocation against incoming Purchase Orders and Production batches'
      ],
      img: imgReservation,
      alt: 'Sales order stock reservation matrix in AiBizzApp'
    },
    {
      id: 'stock-reconciliation',
      number: '05',
      badge: 'Reconciliation',
      title: 'Reconcile inventory levels for accuracy',
      urlPath: 'reconciliation',
      paragraphs: [
        "Just like a sailing ship's course is subtly altered by waves, frequent stock movements can cause discrepancies between your ERP system’s stock balance and the actual inventory in the warehouse.",
        'Stock Reconciliation helps you course-correct by aligning the system’s stock records with the physical inventory, ensuring everything stays in sync with verifiable audit trails.'
      ],
      highlights: [
        'Barcode-assisted physical cycle count verification and variance reporting',
        'Automated valuation adjustment vouchers posted to GL Stock Adjustment ledger',
        'Comprehensive audit history protecting GAAP and IFRS regulatory compliance'
      ],
      img: imgReconciliation,
      alt: 'Stock reconciliation and cycle count variance adjustment in AiBizzApp'
    },
    {
      id: 'putaway-pick-list',
      number: '06',
      badge: 'Putaway & Pick',
      title: 'Putaway and Pick List',
      urlPath: 'putaway-pick',
      paragraphs: [
        'Storing the right items in the right locations makes it easier to find products in a large warehouse. With putaway rules, you can assign specific racks or bins to particular product types, optimizing space and organization.',
        "AiBizzApp's pick list simplifies the picking process, ensuring that the correct items are selected for orders. This streamlined process boosts operational efficiency and enhances customer satisfaction."
      ],
      highlights: [
        'Smart bin putaway rules based on item velocity, weight, and storage temperature',
        'Wave pick list routing that minimizes warehouse travel time by up to 45%',
        'Mandatory handheld barcode scanning to ensure zero dispatch errors'
      ],
      img: imgPutawayPick,
      alt: 'Putaway strategy and wave pick list in AiBizzApp'
    },
    {
      id: 'serialized-batched',
      number: '07',
      badge: 'Serials & Batches',
      title: 'Serialised and Batched Inventory',
      urlPath: 'serialized-batched',
      paragraphs: [
        "If you're dealing with high-value items that come with product warranties, AiBizzApp's Serialized Inventory feature helps you track each unit meticulously. Monitor purchase origin, cost, customer assignment, and warranty expiry.",
        'For items with limited shelf life, bundle them under a unique Batch ID with Expiry Dates. AiBizzApp ensures compliance by preventing items from expired batches from being dispatched to customers.'
      ],
      highlights: [
        'Individual serial number tracking with complete warranty lifecycle logs',
        'Batch identification with automated First-Expiry-First-Out (FEFO) picking',
        'Strict hard-lock preventing dispatch of expired stock to customers'
      ],
      img: imgBatches,
      alt: 'Serialized inventory and batch expiry management in AiBizzApp'
    },
    {
      id: 'stock-reports',
      number: '08',
      badge: 'Reports & Aging',
      title: 'Stock Reports',
      urlPath: 'stock-reports',
      paragraphs: [
        "Stock Aging: To optimize item placement in your warehouse, it's crucial to identify slow and fast-moving items. AiBizzApp's Stock Aging report makes this process easier by highlighting items based on their movement speed.",
        'Stock Balance and Stock Ledger Report: The Stock Ledger, stock balance, and available batch reports offer detailed insights into inventory levels at specific warehouses on any given date with complete time-machine drilldown.'
      ],
      highlights: [
        'Multi-bucket stock aging reports (0-30, 31-60, 61-90, 90+ days) for capital efficiency',
        'Real-time Stock Ledger with drill-down into every receipt, dispatch, and transfer',
        'Exportable executive analytics in PDF and Excel formats with FIFO valuation'
      ],
      img: imgReports,
      alt: 'Stock aging report and real-time stock ledger in AiBizzApp'
    }
  ]

  return (
    <div className="pt-28 pb-20 bg-white text-slate-900 font-sans select-text selection:bg-[#0066cc] selection:text-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 w-full">

        {/* ── Hero Header ── */}
        <div className="text-center pt-8 pb-12 max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-wider text-[#0066cc] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
            OPEN SOURCE INVENTORY MANAGEMENT SOFTWARE
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            A complete inventory management system for 100% visibility and efficiency
          </h1>

          <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Effective stock management is the backbone of retail, distribution, and manufacturing business. Create Item Master as your single source of truth, eliminating duplications. Keep tight control over stock movements with built-in approvals and quality checks. Maintain accurate item valuations, enabling precise profitability reports. Automate stock replenishment based on customer orders and forecast reports.
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
          {sections.map((section, index) => {
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

                    {/* Feature Highlights Checklist */}
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
                            aibizzapp.com/stock/{section.urlPath}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider hidden sm:inline-block">
                          AiBizzApp Stock
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
          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Choose Freedom with AiBizzApp
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
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
