import React from 'react'
import {
  ArrowRight,
  Check,
  MousePointerClick,
  Plug,
  Smartphone,
  Sliders,
  GitMerge,
  ShieldCheck,
  Quote,
  Users,
  Mail,
  BarChart3
} from 'lucide-react'

// Import custom content-based screenshots for CRM module
import imgDealPipeline from '../../assets/crm/crm_deal_pipeline.png'
import imgCustomizations from '../../assets/crm/crm_customizations.png'
import imgWhatsApp from '../../assets/crm/crm_whatsapp_integration.png'
import imgMetaLeads from '../../assets/crm/crm_meta_leads.png'

export default function CRM({ onNavigate }) {
  const tableOfContents = [
    { id: 'better-crm',         title: 'A Better CRM: Deal Flow' },
    { id: 'customizations',     title: 'Easy Customizations' },
    { id: 'whatsapp',           title: 'WhatsApp Integration' },
    { id: 'meta-integration',   title: 'Meta Lead Ads Integration' },
    { id: 'key-features',       title: 'Key Capabilities' },
    { id: 'customer-stories',   title: 'Customer Stories' },
    { id: 'pricing-philosophy', title: 'Fair Pricing Philosophy' }
  ]

  const crmSections = [
    {
      id: 'better-crm',
      number: '01',
      badge: 'Deal Pipeline',
      title: 'A Better CRM: Visual deal flow & pipeline',
      urlPath: 'deal-flow',
      paragraphs: [
        'It all began with rethinking our sales experience. Our internal sales team first sounded the alarm—surely, there is a better designed and simpler way to track deal flows out there.',
        'As it turns out, available CRMs in the market could not meet our needs: too basic, too expensive, or bloated with hidden fees. Since building our own is in our DNA, we built AiBizzApp CRM—modern, flexible, and lightning-fast.'
      ],
      highlights: [
        'Visual Kanban drag-and-drop pipeline stages with real-time deal values',
        'Automated deal probability scoring and expected closing date tracking',
        'One-click lead conversion into active deals, accounts, and quotations'
      ],
      img: imgDealPipeline,
      alt: 'Visual deal flow and sales pipeline in AiBizzApp CRM'
    },
    {
      id: 'customizations',
      number: '02',
      badge: 'No-Code Studio',
      title: 'Easy Customizations: Make it your own',
      urlPath: 'customizations',
      paragraphs: [
        'The underlying platform for AiBizzApp CRM is the powerful AiBizzApp Framework. The framework allows you to rapidly build new data models or extend pre-existing schemas with zero friction.',
        'Adding custom fields or child tables is effortless, and you can add quick automation using visual triggers or pluggable script hooks. AiBizzApp CRM builds on this unified platform and offers an exceptional enterprise experience out of the box.'
      ],
      highlights: [
        'Drag-and-drop form schema customizer to add custom fields and child tables',
        'Visual workflow trigger builder for deal stage transitions and manager approvals',
        'Extensible Python and JavaScript API hooks without modifying core code'
      ],
      img: imgCustomizations,
      alt: 'Customizations and No-Code Studio in AiBizzApp CRM'
    },
    {
      id: 'whatsapp',
      number: '03',
      badge: 'Omnichannel',
      title: 'WhatsApp Integration: Move faster with WhatsApp',
      urlPath: 'whatsapp-integration',
      paragraphs: [
        'Sales happens across different channels—emails, calls, instant messages—and keeping everything connected shouldn’t be a struggle. AiBizzApp CRM works with the tools you already use, keeping your conversations linked to deals.',
        'Connect directly via the official WhatsApp Business Cloud API. Send proposals, follow up on quotes, schedule meetings, and convert prospects right from within the CRM interface with complete team visibility.'
      ],
      highlights: [
        'Official WhatsApp Business Cloud API integration for direct customer messaging',
        'Auto-link chat threads directly with CRM contact and deal records',
        'One-click quick reply templates for quotation PDFs and meeting links'
      ],
      img: imgWhatsApp,
      alt: 'WhatsApp integration and deal messenger in AiBizzApp CRM'
    },
    {
      id: 'meta-integration',
      number: '04',
      badge: 'Lead Automation',
      title: 'Meta Integration: Pull leads from Facebook and Instagram',
      urlPath: 'meta-lead-ads',
      paragraphs: [
        'Managing Facebook and Instagram leads inside Meta’s dashboard feels disconnected from your actual sales workflow. You end up downloading manual CSVs or copying details into the CRM, making it easy for leads to go cold.',
        'AiBizzApp CRM pulls every Meta lead straight into your pipeline with all contact fields populated automatically. Your sales team receives instant notifications and engages leads the moment they express interest.'
      ],
      highlights: [
        'Zero-latency real-time webhook sync from Facebook & Instagram Lead Ads',
        'Automated round-robin lead distribution across sales development reps',
        'Instant automated WhatsApp & email welcome notifications to new prospects'
      ],
      img: imgMetaLeads,
      alt: 'Meta Facebook and Instagram lead integration in AiBizzApp CRM'
    }
  ]

  const keyFeaturesList = [
    {
      icon: Users,
      title: 'Contact & Deal Management',
      desc: 'Keep all leads, contacts, deals, and organizations organized in one place for a clear sales pipeline.'
    },
    {
      icon: Mail,
      title: 'Unified Communications',
      desc: 'Track emails, calls, chats, and team discussions in one system to ensure smooth coordination.'
    },
    {
      icon: GitMerge,
      title: 'Workflow Automation',
      desc: 'Automate lead assignments, follow-ups, and deal progress to reduce repetitive manual work.'
    },
    {
      icon: BarChart3,
      title: 'Reports & Analytics',
      desc: 'Customize how you see your data with saved, public, and pinned views for quick access.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive Experience',
      desc: 'Access your CRM from any device, with a fast, app-like experience right from your browser.'
    }
  ]

  const testimonials = [
    {
      quote: "Hands down, one of the best features of AiBizzApp CRM is its WhatsApp integration. It's a total game-changer for keeping in touch with our clients. The UI? Super clean and straightforward, making it a breeze to navigate. AiBizzApp CRM? It just works.",
      name: 'Nilay Patel',
      company: 'Vulcan Group'
    },
    {
      quote: 'Overall, AiBizzApp CRM is an exceptional solution for businesses looking for an easy-to-use CRM. It provides Centralized Customer Information, Improved Communication within team members to take follow-ups, and complete visibility across deals.',
      name: 'Aniket Bapat',
      company: 'Chandorkar Tech'
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
            OPEN SOURCE CRM SOFTWARE
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Customer relationships that last
          </h1>

          <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            AiBizzApp CRM helps your sales team accelerate deal velocity, not slow you down. Open-source, intuitive, and completely free from artificial per-user seat penalties.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3 sm:gap-4">
            {tableOfContents.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-blue-50/70 hover:border-blue-200 text-left transition-all group cursor-pointer"
              >
                <span className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 group-hover:text-[#0066cc] group-hover:border-blue-300 shrink-0 shadow-2xs">
                  {idx + 1}
                </span>
                <span className="text-sm font-semibold text-slate-800 group-hover:text-[#0066cc] transition-colors leading-snug truncate">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── 4 Redesigned Feature Sections (2-Column Balanced Alternating Split Layout) ── */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24 py-8">
          {crmSections.map((section, index) => {
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
                            aibizzapp.com/crm/{section.urlPath}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider hidden sm:inline-block">
                          AiBizzApp CRM
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

        {/* ── Section 5: Key CRM Capabilities Grid ── */}
        <section id="key-features" className="pt-16 pb-12 scroll-mt-24 border-t border-slate-200">
          <div className="max-w-4xl mb-8">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Features</span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              More Key CRM Capabilities
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Everything your revenue team needs to manage prospects, communicate effortlessly, and close deals faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeaturesList.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:shadow-xs transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0066cc] border border-blue-100 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* ── Section 6: Customer Stories & Testimonials ── */}
        <section id="customer-stories" className="pt-16 pb-12 scroll-mt-24 border-t border-slate-200">
          <div className="max-w-4xl mb-8">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Social Proof</span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              What Customers Say About AiBizzApp CRM
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between">
                <div>
                  <Quote className="w-8 h-8 text-blue-500/30 mb-4" />
                  <p className="text-sm sm:text-base text-slate-700 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <div className="text-sm font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500 font-medium">{t.company}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100">
              <h3 className="text-base font-bold text-slate-900 mb-2">Sharp, modern, and minimal</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We invested in making a beautiful and powerful design system that blends modernism and minimalism, helping users focus on revenue-generating activities without friction.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-base font-bold text-slate-900 mb-2">The CRM we use ourselves</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We use AiBizzApp CRM every day to manage our own sales pipeline. Every feature is battle-tested by our internal sales team before shipping to users.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 7: Pricing Philosophy ── */}
        <section id="pricing-philosophy" className="pt-16 pb-12 scroll-mt-24 border-t border-slate-200">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Fair Pricing</span>
            <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Don't pay per user
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Most CRM products in the market charge extortionate per-user seat fees that penalize growing companies. We believe software cost should reflect computational resources, not your headcount.
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              With AiBizzApp CRM, onboard your entire company—sales, support, marketing, and leadership—with unlimited user access and zero surprise license fees.
            </p>
          </div>
        </section>

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
