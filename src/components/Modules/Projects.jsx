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

// Project lifecycle steps
const planRow = [
  { label: 'Project Template',    desc: 'Quickly spin up projects with pre-configured milestones' },
  { label: 'Task Breakdown',      desc: 'Divide milestones into actionable, assignable deliverables' },
  { label: 'Gantt & Dependencies',desc: 'Visualize critical paths, timelines, and inter-dependencies' },
  { label: 'Budget Allocation',   desc: 'Set commercial guardrails for materials, labor & overheads' },
]

const deliverRow = [
  { label: 'Kanban & Execution',  desc: 'Drag-and-drop task status updates and live owner tracking' },
  { label: 'Timesheets & Costs',  desc: 'Log hours, capture billable rates, and link to payroll' },
  { label: 'Site Inventory',      desc: 'Tag project warehouses to manage materials across sites' },
  { label: 'Client Portal',       desc: 'Give stakeholders real-time visibility with zero friction' },
]

export default function Projects({ onNavigate }) {
  const tableOfContents = [
    { id: 'track-project-completion',  title: 'Track project completion' },
    { id: 'track-tasks-deadlines',     title: 'Track tasks, deadlines, owners' },
    { id: 'map-expenses-timesheets',   title: 'Map invoices, expenses and timesheets to projects' },
    { id: 'track-inventories-assets',  title: 'Track project-level inventories and assets' },
    { id: 'customer-project-progress', title: 'Let your customers see project progress' },
  ]

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const sections = [
    {
      id: 'track-project-completion',
      title: 'Track project completion',
      img: img1,
      paragraphs: [
        'A project serves as the single source of truth, consolidating all associated details like Tasks, Timesheets, Sales, and Purchases—into one place. AiBizzApp enhances transparency by enabling customers to access project updates through a portal view, reducing back-and-forth communication.',
        'Projects can also be interlinked and visualized in a tree view, offering a clear overview of how various projects and tasks are connected, streamlining management and improving coordination.'
      ]
    },
    {
      id: 'track-tasks-deadlines',
      title: 'Track tasks, deadlines, owners',
      img: img2,
      paragraphs: [
        'In Projects, the gap between planning and execution can sometimes be significant. Foster accountability by assigning tasks to individuals with clear deliverables and planned completion dates. Easily track delayed tasks where deadlines have passed, ensuring timely follow-ups.',
        'Visualize task dependencies using the Gantt view to see how tasks are interconnected and evaluate the accuracy of planning. For quick updates, use the Kanban view with drag-and-drop functionality to adjust task statuses on the fly.',
        'Stay in control of your tasks—the foundation of real work—ensuring project success and seamless execution.'
      ]
    },
    {
      id: 'map-expenses-timesheets',
      title: 'Map invoices, expenses and timesheets to projects',
      img: img3,
      paragraphs: [
        'With Timesheets, you can closely monitor the effort invested in Projects or Tasks, ensuring accountability and attaching evidence of work for transparency.',
        'Timesheets also provide valuable insights into activity-level profitability by tracking both cost and billing rates for each Activity. For employees who go above and beyond, you can reward their dedication by generating Additional Salary entries directly from their Timesheets.'
      ]
    },
    {
      id: 'track-inventories-assets',
      title: 'Track project-level inventories and assets',
      img: img4,
      paragraphs: [
        'We understand how important it is to get a single view of your inventory, especially when your project locations are scattered in multiple locations. With AiBizzApp, you can tag each warehouse to reference your project location and track, move, and plan inventory better.'
      ]
    },
    {
      id: 'customer-project-progress',
      title: 'Let your customers see project progress',
      img: img5,
      paragraphs: [
        'The #1 rule of project management is to keep customers in the loop. Over-communicating and informing every progress and blockers to the sponsors of the project ensures no last-minute surprises and satisfied customers. However, with complex and siloed projects, this is hard to achieve.',
        'With AiBizzApp you can design your own customer portal and give access to customers to view project progress as a website user.'
      ]
    }
  ]

  return (
    <div className="pt-28 pb-20 bg-white text-slate-900 font-sans select-text selection:bg-[#0066cc] selection:text-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 w-full">

        {/* ── Hero Header ── */}
        <div className="text-center pt-8 pb-12 max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-wider text-[#0066cc] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
            OPEN SOURCE PROJECT MANAGEMENT
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Monitor project-level profitability with integrated accounting capabilities
          </h1>
          <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Projects represent unique delivery commitments that must be fulfilled on time and to the customer’s exact expectations. In project-based delivery, it’s crucial to balance customization with standardized processes. Also, meticulous planning is required to ensure commercial viability as per the budgets.
          </p>
          <p className="mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            AiBizzApp’s Project Management simplifies this by breaking down Projects into manageable milestones, which are further divided into assignable Tasks. Create new projects effortlessly using Project Templates, ensuring no standard task is overlooked. Link projects to sales and purchase transactions to track profitability and manage expenses within budget limits.
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

        {/* ── Project Lifecycle Flow Diagram ── */}
        <div className="my-6 rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
          {/* Plan & Structure row */}
          <div className="border-b border-slate-100 p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#0066cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <span className="text-xs font-bold text-slate-600 tracking-wider uppercase">Plan & Structure</span>
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
          {/* Deliver & Control row */}
          <div className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#0066cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs font-bold text-slate-600 tracking-wider uppercase">Deliver & Control</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {deliverRow.map((step, i) => (
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

        {/* ── 5 Content Sections ── */}
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
