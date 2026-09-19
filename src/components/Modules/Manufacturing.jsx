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

// Real manufacturing module screenshots
import img1 from '../../assets/modules/AiBizzApp1.jpeg'
import img2 from '../../assets/modules/AiBizzApp2.jpeg'
import img3 from '../../assets/modules/AiBizzApp3.jpeg'
import img4 from '../../assets/modules/AiBizzApp4.jpeg'
import img5 from '../../assets/modules/AiBizzApp5.jpeg'
// Stand-in screenshots for remaining sections
import img6 from '../../assets/modules/AiBizzApp6.jpeg'
import img7 from '../../assets/modules/AiBizzApp1.jpeg'
import img8 from '../../assets/modules/AiBizzApp2.jpeg'
import img9 from '../../assets/modules/AiBizzApp3.jpeg'

export default function Manufacturing({ onNavigate }) {
  const tableOfContents = [
    { id: 'bom-operations', title: 'Maintain BOM operations' },
    { id: 'production-planning', title: 'Production planning' },
    { id: 'work-order', title: 'Work order' },
    { id: 'capacity-planning', title: 'Capacity planning' },
    { id: 'subcontracting', title: 'Subcontracting' },
    { id: 'subcontracting-items', title: 'Identify subcontracting items' },
    { id: 'subcontracting-orders', title: 'Subcontracting orders' },
    { id: 'subcontracting-billing', title: 'Subcontracting billing' },
    { id: 'reports-dashboards', title: 'Manufacturing reports and dashboards' }
  ]

  const manufacturingSections = [
    {
      id: 'bom-operations',
      number: '01',
      badge: 'Bill of Materials',
      title: 'Maintain BOM operations',
      urlPath: 'bom-operations',
      paragraphs: [
        'The Bill of Materials (BOM) is the core of every manufacturing operation, linking all processes back to its details. In AiBizzApp, you can maintain comprehensive BOM records, specifying raw materials in different quantities and units of measurement (UoMs) while outlining the sequence of operations needed to transform them into finished goods.',
        'BOMs also serve as a powerful tool for estimating raw material and operation costs, enabling you to calculate the estimated value of finished items. This systematic approach helps determine competitive sales prices for your products, ensuring profitability and market competitiveness.'
      ],
      highlights: [
        'Multi-level nested BOMs for complex assemblies and sub-assemblies',
        'Operation routing with workstation assignment and setup/run times',
        'Automated raw material costing and estimated product valuation'
      ],
      img: img1,
      alt: 'Maintain BOM operations in AiBizzApp'
    },
    {
      id: 'production-planning',
      number: '02',
      badge: 'Production Planning',
      title: 'Production planning',
      urlPath: 'production-planning',
      paragraphs: [
        'Building a production queue requires taking lots of factors into consideration, like committed delivery date to customer, availability of raw materials and sub-assemblies. Production planning provides a step-wise solution to pull items to be produced, fetch raw materials through their BOMs and check their availability in various warehouses.',
        'It enables you to request raw materials and initiate Work Orders accordingly, ensuring timely requisitions and pre-planned production queues.'
      ],
      highlights: [
        'Sales Order and demand-driven production planning engine',
        'Multi-warehouse raw material availability and shortage analysis',
        'Automatic generation of Material Requests and Work Orders'
      ],
      img: img2,
      alt: 'Production planning tool in AiBizzApp'
    },
    {
      id: 'work-order',
      number: '03',
      badge: 'Work Order',
      title: 'Work order',
      urlPath: 'work-order',
      paragraphs: [
        'A Work Order is the key directive for the manufacturing team, outlining the production process as defined in the linked BOM.',
        'It serves as the central document, triggering raw material transfers, generating Job Cards, and enabling backflushing of finished goods. Sales teams can also refer to Work Orders to track production progress and keep customers updated.',
        'If production is like an orchestra, the Work Order is the conductor, coordinating all operations to ensure every action happens on time and in harmony.'
      ],
      highlights: [
        'Centralized production directive driving shop-floor operations',
        'Automated Job Card creation for workstation operators',
        'Live progress tracking and backflushing of stock items upon completion'
      ],
      img: img3,
      alt: 'Work order management in AiBizzApp'
    },
    {
      id: 'capacity-planning',
      number: '04',
      badge: 'Capacity Planning',
      title: 'Capacity planning',
      urlPath: 'capacity-planning',
      paragraphs: [
        "Factory operating costs form a significant part of a company's expenses. Hence, mismanaging production job allocation on Workstations can result in major losses. AiBizzApp's capacity planning feature helps track workloads on each workstation, enabling efficient scheduling of future production jobs.",
        'This ensures optimal utilization of resources, accelerates production, and helps fulfill delivery commitments on time.'
      ],
      highlights: [
        'Real-time workstation workload and availability monitoring',
        'Intelligent job scheduling to avoid machine bottlenecks',
        'Optimized operating costs and on-time delivery fulfillment'
      ],
      img: img4,
      alt: 'Capacity planning in AiBizzApp'
    },
    {
      id: 'subcontracting',
      number: '05',
      badge: 'Subcontracting',
      title: 'Subcontracting',
      urlPath: 'subcontracting',
      paragraphs: [
        'Focus on what you do best and let subcontracting handle the rest. By partnering with experts, you can leverage your core competencies while outsourcing specific tasks. AiBizzApp simplifies this process by allowing you to mark items as subcontracted to suppliers and manage all subcontracting orders in one centralized system.',
        'Track progress, ensure timely execution, and scale your subcontracting operations seamlessly. With AiBizzApp, you can efficiently collaborate with top suppliers, ensuring high-quality services while maintaining focus on your business strengths.'
      ],
      highlights: [
        'Seamless vendor outsourcing workflow with centralized tracking',
        'Automated issue of raw materials to third-party suppliers',
        'Finished goods receipt with precise material consumption accounting'
      ],
      img: img5,
      alt: 'Subcontracting management in AiBizzApp'
    },
    {
      id: 'subcontracting-items',
      number: '06',
      badge: 'Subcontract Items',
      title: 'Identify subcontracting items',
      urlPath: 'subcontracting-items',
      paragraphs: [
        'Even when subcontracting, discipline and precise tracking are crucial to ensure quality and accuracy. In AiBizzApp, you can flag each subcontracted item and link it directly to a detailed Bill of Materials (BOM). This provides a clear list of materials to supply to the subcontractor, reducing logistical challenges and ensuring smooth operations.',
        'Maintain transparency and avoid discrepancies by linking explicit supplier agreements and operation steps directly to each item.'
      ],
      highlights: [
        'Specific BOM association for outsourced items and sub-assemblies',
        'Clear material issue lists for logistical predictability',
        'Standardized inspection specifications for incoming outsourced items'
      ],
      img: img6,
      alt: 'Identify subcontracting items in AiBizzApp'
    },
    {
      id: 'subcontracting-orders',
      number: '07',
      badge: 'Subcontract Orders',
      title: 'Subcontracting orders',
      urlPath: 'subcontracting-orders',
      paragraphs: [
        'A Subcontracting Order in AiBizzApp captures all essential details, including the items to be subcontracted and their BOM. It acts as a central document to manage the transfer of raw materials to subcontractors and track the receipt of finished goods. When finished items are received, AiBizzApp ensures that the raw materials supplied to subcontractors are accurately consumed.',
        'This streamlined workflow allows you to manage multiple subcontracting processes at once, reducing delays, preventing stock pilferage, and maintaining quality standards with precision.'
      ],
      highlights: [
        'End-to-end tracking from raw material delivery to finished receipt',
        'Automated stock ledger updates preventing material pilferage',
        'Parallel management of multiple concurrent subcontractor jobs'
      ],
      img: img7,
      alt: 'Subcontracting orders in AiBizzApp'
    },
    {
      id: 'subcontracting-billing',
      number: '08',
      badge: 'Subcontract Billing',
      title: 'Subcontracting billing',
      urlPath: 'subcontracting-billing',
      paragraphs: [
        'While subcontracting focuses on transforming raw materials into finished goods, accurate billing is equally critical. AiBizzApp allows you to bill your subcontractors for the service, while the actual item received remains a stock item. This ensures seamless creation of Purchase Orders, receipts, and invoices for subcontracting services.',
        'The workflow ensures compliance with statutory regulations and guarantees that payables are accurately recorded.'
      ],
      highlights: [
        'Service charges separated from inventory asset valuation',
        'Direct Purchase Order and Purchase Invoice reconciliation',
        'Full statutory tax compliance and vendor payables tracking'
      ],
      img: img8,
      alt: 'Subcontracting billing in AiBizzApp'
    },
    {
      id: 'reports-dashboards',
      number: '09',
      badge: 'Reports & Dashboards',
      title: 'Manufacturing reports and dashboards',
      urlPath: 'reports-dashboards',
      paragraphs: [
        'Gain complete real-time visibility into your shop floor operations with dedicated manufacturing analytics and interactive dashboards. In AiBizzApp, track workstation capacity and utilization, Job Card cycle times, material shortages, and production variances with precision.',
        'Seamless integration across inventory, procurement, and accounting guarantees end-to-end audit traceability and data accuracy across your entire enterprise.'
      ],
      highlights: [
        'Interactive production dashboards with real-time workstation status',
        'Production variance and BOM vs. Actual cost comparison reports',
        'Shop-floor efficiency, cycle times, and scrap rate analytics'
      ],
      img: img9,
      alt: 'Manufacturing reports and dashboards in AiBizzApp'
    }
  ]

  const frameworkFeatures = [
    {
      icon: MousePointerClick,
      title: 'No-code builder',
      desc: 'Automate tasks with drag-and-drop simplicity'
    },
    {
      icon: Plug,
      title: 'API-first',
      desc: 'Easily integrate with third-party systems'
    },
    {
      icon: Smartphone,
      title: 'Mobile-friendly',
      desc: 'Manage all modules from any device'
    },
    {
      icon: Sliders,
      title: 'Customizable',
      desc: 'Forms, reports, print formats, and dashboards'
    },
    {
      icon: GitMerge,
      title: 'Approval workflows',
      desc: 'Simplify with custom multi-level workflows'
    },
    {
      icon: ShieldCheck,
      title: 'Roles & permissions',
      desc: 'Granular access control to safeguard data'
    }
  ]

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="pt-28 pb-20 bg-white text-slate-900 font-sans select-text selection:bg-[#0066cc] selection:text-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 w-full">

        {/* Top Hero / Header Section */}
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

        {/* Numbered Table of Contents / Index Grid */}
        <div className="my-8 py-8 border-y border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {tableOfContents.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-blue-50/70 hover:border-blue-200 text-left transition-all group cursor-pointer"
              >
                <span className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 group-hover:text-[#0066cc] group-hover:border-blue-300 shrink-0 shadow-2xs">
                  {idx + 1}
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-[#0066cc] transition-colors leading-snug">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── 9 Feature Sections (2-Column Balanced Alternating Split Layout) ── */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24 py-8">
          {manufacturingSections.map((section, index) => {
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
                            aibizzapp.com/manufacturing/{section.urlPath}
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

        {/* Powered by AiBizzApp Framework Section */}
        <div className="pt-16 pb-12 border-t border-slate-200">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-xl sm:text-2xl font-bold text-slate-900">
              Powered by AiBizzApp Framework
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {frameworkFeatures.map((feat, idx) => {
              const Icon = feat.icon
              return (
                <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:shadow-xs transition-all">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-[#0066cc] border border-blue-100 shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Choose Freedom with AiBizzApp Bottom Banner */}
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
