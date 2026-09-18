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

// Support Flow steps
const ingestRow = [
  { label: 'Omnichannel Inbox',   desc: 'Calls (Twilio/Exotel), emails and chats as tickets' },
  { label: 'Auto-Assignment',     desc: 'Round-robin & load balancing distribution across agents' },
  { label: 'SLA Engine',          desc: 'Target response & resolution tracking with alerts' },
  { label: 'Customer Portal',     desc: 'Self-service dashboard to raise, track & discuss tickets' },
]

const resolveRow = [
  { label: 'Knowledge Base',      desc: 'Rich repository of FAQs, How-To articles & guides' },
  { label: 'Smart Suggestions',   desc: 'Auto-suggested articles to reduce agent response time' },
  { label: 'Field Maintenance',   desc: 'Schedule on-site visits, log work & collect feedback' },
  { label: 'Support Analytics',   desc: 'First response time, issue analytics & workload charts' },
]

export default function Support({ onNavigate }) {
  const tableOfContents = [
    { id: 'manage-customer-tickets',    title: 'Manage customer tickets across multiple channels' },
    { id: 'automate-ticket-assignments',title: 'Automate ticket assignments' },
    { id: 'track-slas-resolutions',     title: 'Track SLAs for timely resolutions' },
    { id: 'monitor-team-performance',   title: 'Monitor team performance with detailed reports' },
    { id: 'empower-customer-portals',   title: 'Empower customers with self-service portals' },
    { id: 'reduce-ticket-load-kb',      title: 'Reduce ticket load with a knowledge base' },
    { id: 'schedule-maintenance-visits',title: 'Schedule and track maintenance visits' },
  ]

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const sections = [
    {
      id: 'manage-customer-tickets',
      title: 'Manage customer tickets across multiple channels',
      img: img1,
      paragraphs: [
        'AiBizzApp centralizes all customer interactions, whether calls, emails, or chats, into support tickets. This ensures your team can handle all inquiries in one place, reducing response times and improving efficiency. Features like call popup via Twilio or Exotel integration notify you of incoming calls, while email-to-ticket conversion ensures that every query is captured.'
      ]
    },
    {
      id: 'automate-ticket-assignments',
      title: 'Automate ticket assignments',
      img: img2,
      paragraphs: [
        'Simplify ticket distribution by setting up automatic assignment rules, such as round-robin or load balancing, to ensure an even workload across your team. This minimizes manual effort and allows your team to focus on resolving customer issues faster, improving response times and customer satisfaction.'
      ]
    },
    {
      id: 'track-slas-resolutions',
      title: 'Track SLAs for timely resolutions',
      img: img3,
      paragraphs: [
        'Set response and resolution times with SLAs that align with your support policies. AiBizzApp automatically tracks and updates the SLA status of tickets in real-time, keeping your team informed and helping them address issues promptly if targets are not met. This ensures timely resolution and adherence to your support standards.'
      ]
    },
    {
      id: 'monitor-team-performance',
      title: 'Monitor team performance with detailed reports',
      img: img4,
      paragraphs: [
        'AiBizzApp provides key reports like Support Hour Distribution, Issue Summary, Issue Analytics, and First Response Time for Issues. These insights help you track team efficiency, understand workload distribution, and identify areas for improvement to ensure better customer service outcomes.'
      ]
    },
    {
      id: 'empower-customer-portals',
      title: 'Empower customers with self-service portals',
      img: img5,
      paragraphs: [
        'The AiBizzApp support module allows businesses to provide efficient customer service with a dedicated portal for customers to log, track, and manage their support tickets. Customers can view ticket statuses, raise new issues, and communicate directly with support teams for resolution.'
      ]
    },
    {
      id: 'reduce-ticket-load-kb',
      title: 'Reduce ticket load with a knowledge base',
      img: img1,
      paragraphs: [
        'The Knowledge Base is a repository of articles designed to address frequently asked questions (FAQs) and "How-To" queries of customers. By leveraging this resource, you can build a valuable asset that empowers customers to resolve issues independently. When an issue is reported, relevant Knowledge Base articles are automatically suggested based on the subject. This robust collection of articles also enhances the efficiency of support agents, significantly reducing response times on customer queries.'
      ]
    },
    {
      id: 'schedule-maintenance-visits',
      title: 'Schedule and track maintenance visits',
      img: img2,
      paragraphs: [
        'The Maintenance Schedule feature allows you to plan and track service visits, log the work completed, and capture customer feedback. This ensures that maintenance tasks are carried out seamlessly and all details are recorded efficiently, helping you provide consistent and high-quality service.'
      ]
    }
  ]

  return (
    <div className="pt-28 pb-20 bg-white text-slate-900 font-sans select-text selection:bg-[#0066cc] selection:text-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 w-full">

        {/* ── Hero Header ── */}
        <div className="text-center pt-8 pb-12 max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-wider text-[#0066cc] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
            OPEN SOURCE SUPPORT TICKETING SOFTWARE
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            A self-service support portal to increase customer satisfaction
          </h1>
          <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Effectively handling customer issues is crucial for maintaining customer satisfaction, but juggling multiple support channels, meeting SLAs, and resolving tickets on time can be challenging. AiBizzApp's support module simplifies this process by centralizing ticket management, automating workflows, and providing real-time insights, all within a single, cohesive system.
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

        {/* ── Support Operations Flow Diagram ── */}
        <div className="my-6 rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden">
          {/* Omnichannel Ingestion row */}
          <div className="border-b border-slate-100 p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#0066cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <span className="text-xs font-bold text-slate-600 tracking-wider uppercase">Omnichannel Ingestion</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {ingestRow.map((step, i) => (
                <div key={i} className="rounded-xl border border-slate-200/70 bg-slate-50/70 p-3.5 text-center">
                  <div className="text-xs font-bold text-slate-800 leading-snug mb-1">{step.label}</div>
                  <div className="text-[11px] text-slate-500 leading-snug">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Resolve & Analyze row */}
          <div className="p-4 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#0066cc]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-xs font-bold text-slate-600 tracking-wider uppercase">Resolve & Analyze</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {resolveRow.map((step, i) => (
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

        {/* ── 7 Content Sections ── */}
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
