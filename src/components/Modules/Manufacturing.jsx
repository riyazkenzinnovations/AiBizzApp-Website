import React from 'react'
import { ArrowRight, MousePointerClick, Plug, Smartphone, Sliders, GitMerge, ShieldCheck } from 'lucide-react'

// Real manufacturing module screenshots
import img1 from '../../assets/industry/manufacturing/media_1789477360105.png'
import img2 from '../../assets/industry/manufacturing/media_1789477377470.png'
import img3 from '../../assets/industry/manufacturing/media_1789477395885.png'
import img4 from '../../assets/industry/manufacturing/media_1789477411716.png'
import img5 from '../../assets/industry/manufacturing/media_1789477429817.png'
// Stand-in screenshots for remaining sections
import img6 from '../../assets/accounting/media_1789475334615.png'
import img7 from '../../assets/accounting/media_1789475345323.png'
import img8 from '../../assets/accounting/media_1789475358358.png'
import img9 from '../../assets/accounting/media_1789475370670.png'

const platformFeatures = [
  { icon: MousePointerClick, title: 'No-code builder',     desc: 'Automate tasks with drag-and-drop simplicity' },
  { icon: Plug,              title: 'API-first',           desc: 'Easily integrate with third-party systems' },
  { icon: Smartphone,        title: 'Mobile-friendly',     desc: 'Manage all modules from any device' },
  { icon: Sliders,           title: 'Customizable',        desc: 'Forms, reports, print formats, and dashboards' },
  { icon: GitMerge,          title: 'Approval workflows',  desc: 'Simplify with custom multi-level workflows' },
  { icon: ShieldCheck,       title: 'Roles & permissions', desc: 'Granular access control to safeguard data' },
]

// Manufacturing workflow steps
const planRow = [
  { label: 'Bill of Materials', desc: 'Define multi-level BOMs with operations and scrap' },
  { label: 'Work Order',        desc: 'Plan production runs against Sales Orders or forecasts' },
  { label: 'Job Card',          desc: 'Track work at each operation on the shop floor' },
  { label: 'Material Issue',    desc: 'Issue raw materials from store to production' },
]
const finishRow = [
  { label: 'Stock Entry',       desc: 'Record finished goods into the warehouse' },
  { label: 'Quality Inspection',desc: 'Inspect output before accepting into stock' },
  { label: 'Scrap / By-product',desc: 'Record waste and by-products accurately' },
  { label: 'Costing Report',    desc: 'Compare actual vs standard production costs' },
]

export default function Manufacturing({ onNavigate }) {
  const tableOfContents = [
    { id: 'bom-operations',        title: 'Maintain BOM operations' },
    { id: 'production-planning',   title: 'Production planning' },
    { id: 'work-order',            title: 'Work order' },
    { id: 'capacity-planning',     title: 'Capacity planning' },
    { id: 'subcontracting',        title: 'Subcontracting' },
    { id: 'subcontracting-items',  title: 'Identify subcontracting items' },
    { id: 'subcontracting-orders', title: 'Subcontracting orders' },
    { id: 'subcontracting-billing',title: 'Subcontracting billing' },
    { id: 'reports-dashboards',    title: 'Manufacturing reports and dashboards' },
  ]

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const sections = [
    {
      id: 'bom-operations',
      title: 'Maintain BOM operations',
      img: img1,
      paragraphs: [
        'The Bill of Materials (BOM) is the core of every manufacturing operation, linking all processes back to its details. In AiBizzApp, you can maintain comprehensive BOM records, specifying raw materials in different quantities and units of measurement (UoMs) while outlining the sequence of operations needed to transform them into finished goods.',
        'BOMs also serve as a powerful tool for estimating raw material and operation costs, enabling you to calculate the estimated value of finished items. This systematic approach helps determine competitive sales prices for your products, ensuring profitability and market competitiveness.'
      ]
    },
    {
      id: 'production-planning',
      title: 'Production planning',
      img: img2,
      paragraphs: [
        'Building a production queue requires taking lots of factors into consideration, like committed delivery date to customer, availability of raw materials and sub-assemblies. Production planning provides a step-wise solution to pull items to be produced, fetch raw materials through their BOMs and check their availability in various warehouses. It enables you to request raw materials and initiate Work Orders accordingly.'
      ]
    },
    {
      id: 'work-order',
      title: 'Work order',
      img: img3,
      paragraphs: [
        'A Work Order is the key directive for the manufacturing team, outlining the production process as defined in the linked BOM.',
        'It serves as the central document, triggering raw material transfers, generating Job Cards, and enabling backflushing of finished goods. Sales teams can also refer to Work Orders to track production progress and keep customers updated.',
        'If production is like an orchestra, the Work Order is the conductor, coordinating all operations to ensure every action happens on time and in harmony.'
      ]
    },
    {
      id: 'capacity-planning',
      title: 'Capacity planning',
      img: img4,
      paragraphs: [
        "Factory operating costs form a significant part of a company's expenses. Hence, mismanaging production job allocation on Workstations can result in major losses. AiBizzApp's capacity planning feature helps track workloads on each workstation, enabling efficient scheduling of future production jobs.",
        'This ensures optimal utilization of resources, accelerates production, and helps fulfill delivery commitments on time.'
      ]
    },
    {
      id: 'subcontracting',
      title: 'Subcontracting',
      img: img5,
      paragraphs: [
        'Focus on what you do best and let subcontracting handle the rest. By partnering with experts, you can leverage your core competencies while outsourcing specific tasks. AiBizzApp simplifies this process by allowing you to mark items as subcontracted to suppliers and manage all subcontracting orders in one centralized system.',
        'Track progress, ensure timely execution, and scale your subcontracting operations seamlessly. With AiBizzApp, you can efficiently collaborate with top suppliers, ensuring high-quality services while maintaining focus on your business strengths.'
      ]
    },
    {
      id: 'subcontracting-items',
      title: 'Identify subcontracting items',
      img: img6,
      paragraphs: [
        'Even when subcontracting, discipline and precise tracking are crucial to ensure quality and accuracy. In AiBizzApp, you can flag each subcontracted item and link it directly to a detailed Bill of Materials (BOM). This provides a clear list of materials to supply to the subcontractor, reducing logistical challenges and ensuring smooth operations.'
      ]
    },
    {
      id: 'subcontracting-orders',
      title: 'Subcontracting orders',
      img: img7,
      paragraphs: [
        'A Subcontracting Order in AiBizzApp captures all essential details, including the items to be subcontracted and their BOM. It acts as a central document to manage the transfer of raw materials to subcontractors and track the receipt of finished goods. When finished items are received, AiBizzApp ensures that the raw materials supplied to subcontractors are accurately consumed.',
        'This streamlined workflow allows you to manage multiple subcontracting processes at once, reducing delays, preventing stock pilferage, and maintaining quality standards with precision.'
      ]
    },
    {
      id: 'subcontracting-billing',
      title: 'Subcontracting billing',
      img: img8,
      paragraphs: [
        'While subcontracting focuses on transforming raw materials into finished goods, accurate billing is equally critical. AiBizzApp allows you to bill your subcontractors for the service, while the actual item received remains a stock item. This ensures seamless creation of Purchase Orders, receipts, and invoices for subcontracting services. The workflow ensures compliance with statutory regulations and guarantees that payables are accurately recorded.'
      ]
    },
    {
      id: 'reports-dashboards',
      title: 'Manufacturing reports and dashboards',
      img: img9,
      paragraphs: [
        'Gain complete real-time visibility into your shop floor operations with dedicated manufacturing analytics and interactive dashboards. In AiBizzApp, track workstation capacity and utilization, Job Card cycle times, material shortages, and production variances with precision.',
        'Seamless integration across inventory, procurement, and accounting guarantees end-to-end audit traceability and data accuracy across your entire enterprise.'
      ]
    }
  ]

  return (
    <div className="pt-28 pb-20 bg-white text-slate-900 font-sans select-text selection:bg-[#0066cc] selection:text-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 w-full">

        {/* ── Hero Header ── */}
        <div className="text-center pt-8 pb-12 max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-wider text-[#0066cc] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
            OPEN SOURCE MANUFACTURING ERP
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Get 100% visibility and traceability in your manufacturing process
          </h1>
          <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            With AiBizzApp’s manufacturing module, you can track multi-level BOMs (Bill of Materials) for both finished goods and sub-assemblies. Integration with sales and stock ensures you stay ahead, anticipating upcoming production jobs and pre-planning your production queues. Estimate raw material requirements and initiate timely requisitions to keep things flowing. Ensure the accurate valuation of produced items, along with quality checks, before back-flushing is carried out.
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

        {/* ── Manufacturing Flow Diagram ── */}
        <div className="my-6 rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
          {/* Plan & Execute row */}
          <div className="border-b border-slate-100 p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#0066cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                </svg>
              </div>
              <span className="text-xs font-bold text-slate-600 tracking-wider uppercase">Plan & Execute</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {planRow.map((step, i) => (
                <div key={i} className="rounded-xl border border-slate-200/70 bg-slate-50/70 p-3.5 text-center">
                  <div className="text-xs font-bold text-slate-800 leading-snug mb-1">{step.label}</div>
                  <div className="text-[11px] text-slate-500 leading-snug">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Finish & Record row */}
          <div className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#0066cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs font-bold text-slate-600 tracking-wider uppercase">Finish & Record</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {finishRow.map((step, i) => (
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

        {/* ── Bottom CTA ── */}
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

