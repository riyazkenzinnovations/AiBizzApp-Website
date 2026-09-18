import React from 'react'
import { ArrowRight, MousePointerClick, Plug, Smartphone, Sliders, GitMerge, ShieldCheck, Code2, Database, Bell, CheckSquare, Mail, Layers, Sparkles, Quote } from 'lucide-react'

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

export default function NoCodeBuilder({ onNavigate }) {
  const tableOfContents = [
    { id: 'api-integrations',       title: 'API-first & integrations' },
    { id: 'mobile-friendly-ux',     title: '100% Mobile-friendly UX' },
    { id: 'limitless-customization',title: 'Customizable beyond imagination' },
    { id: 'workflows-approvals',    title: 'Workflows & instant approvals' },
    { id: 'centralised-comm',       title: 'Centralised communication' },
    { id: 'roles-permissions',      title: 'Enterprise roles & permissions' },
    { id: 'rapid-development',     title: 'Rapid development tools' },
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
            NO-CODE LOW-CODE PLATFORM
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Extend AiBizzApp with no-code low-code
          </h1>
          <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            AiBizzApp is built on AiBizzApp Framework, a full-stack, batteries-included web framework written in Python and JavaScript.
          </p>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            If you’re not a techie, consider it a no-code low-code extension to your AiBizzApp. Most ERPs are rigid, but AiBizzApp Framework makes AiBizzApp customizable, extensible, and powerful. Here’s how.
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

        {/* ── Table of Contents Jump Grid ── */}
        <div className="my-8 py-8 border-y border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {tableOfContents.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-3 p-4 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-blue-50/70 hover:border-blue-200 text-left transition-all group cursor-pointer"
              >
                <span className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 group-hover:text-[#0066cc] group-hover:border-blue-300 shrink-0 shadow-2xs">
                  {idx + 1}
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-[#0066cc] transition-colors leading-snug">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Section 1: API-first, integrates with almost any app ── */}
        <section id="api-integrations" className="pt-16 pb-12 scroll-mt-24">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">API-first, integrates with almost any app</h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              In essence, Framework’s approach to APIs and integrations means you spend less time wrestling with connectivity issues and more time innovating. Your data, your apps, and your integrations all work together in harmony, with minimal fuss and maximum efficiency.
            </p>
          </div>
          {/* Quote Card */}
          <div className="mt-6 p-6 rounded-2xl bg-blue-50/60 border border-blue-100 max-w-3xl flex items-start gap-4">
            <Quote className="w-6 h-6 text-[#0066cc] shrink-0 mt-1" />
            <div>
              <p className="text-base sm:text-lg text-slate-800 italic leading-relaxed">
                “The extensibility and flexibility of AiBizzApp is unrivaled. Every custom field you create becomes instantly available as an API point in the powerful interface of the ERP software.”
              </p>
              <div className="mt-3 text-sm font-bold text-slate-900">
                Martin Seibert <span className="text-slate-500 font-normal">· CEO at Seibert Media</span>
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-3xl bg-[#bfdbfe]/30 sm:p-8 p-3 border border-blue-100 shadow-sm overflow-hidden flex items-center justify-center">
            <img src={img1} alt="API first integrations" className="rounded-2xl shadow-md w-full max-w-5xl h-auto object-contain bg-white" />
          </div>
        </section>

        {/* ── Section 2: 100% Mobile-friendly UX ── */}
        <section id="mobile-friendly-ux" className="pt-16 pb-12 scroll-mt-24">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">100% Mobile-friendly UX</h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              All modules and all use cases can be managed from a tablet or a mobile phone. This is especially useful for your sales, CRM, maintenance, quality, retail, and HR use cases. This is also useful for on-the-go approvals and viewing real-time management dashboards.
            </p>
          </div>
          <div className="mt-8 rounded-3xl bg-[#bfdbfe]/30 sm:p-8 p-3 border border-blue-100 shadow-sm overflow-hidden flex items-center justify-center">
            <img src={img2} alt="100% mobile friendly UX" className="rounded-2xl shadow-md w-full max-w-5xl h-auto object-contain bg-white" />
          </div>
        </section>

        {/* ── Section 3: Customizable beyond imagination ── */}
        <section id="limitless-customization" className="pt-16 pb-12 scroll-mt-24">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">Customizable beyond imagination, that too without writing much code</h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              AiBizzApp is insanely customizable. Apps like Zoho, QuickBooks, and NetSuite have zero to minimal customizability, and other apps like SAP, Oracle, Odoo, and Salesforce make customizations expensive as you have to hire an expert to tweak, build, or change a small thing, making it lengthy and painful. When it comes to AiBizzApp, the app can bend to suit your needs.
            </p>
          </div>
          {/* 4 Feature Sub-cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 max-w-4xl">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70 hover:border-blue-200 transition-all">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0066cc]"></span> Customize Forms
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                Hide, add, modify, or calculate fields in any standard transaction (eg. sales invoice, sales order, item master, BOM) with just a few clicks and a sleek visual editor, without adding a single line of code.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70 hover:border-blue-200 transition-all">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0066cc]"></span> Custom Reports and Dashboards
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                Build custom reports and dashboards on any metric and save them for future reference and automated scheduling.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70 hover:border-blue-200 transition-all">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0066cc]"></span> Print Format Builder
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                Make professional and beautiful print formats. Include logo, letterhead, terms & conditions, and anything you need on your item catalogs, sales quotations, invoices, and offer letters.
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70 hover:border-blue-200 transition-all">
              <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0066cc]"></span> Customise Workspace
              </h3>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                Organize and access your most-used DocTypes, reports, and key charts on your dashboard to monitor everything that matters at a glance.
              </p>
            </div>
          </div>
          <div className="mt-8 rounded-3xl bg-[#bfdbfe]/30 sm:p-8 p-3 border border-blue-100 shadow-sm overflow-hidden flex items-center justify-center">
            <img src={img3} alt="Limitless customization" className="rounded-2xl shadow-md w-full max-w-5xl h-auto object-contain bg-white" />
          </div>
        </section>

        {/* ── Section 4: Workflows to add control ── */}
        <section id="workflows-approvals" className="pt-16 pb-12 scroll-mt-24">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">Workflows to add control, almost anywhere, instantly</h2>
            <div className="mt-6 space-y-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-200 transition-all">
                <div className="flex items-center gap-2.5 text-lg sm:text-xl font-bold text-slate-900 mb-2.5">
                  <Bell className="w-5 h-5 text-[#0066cc]" />
                  <span>Notifications</span>
                </div>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Create in-app / email / WhatsApp / Slack notifications on the fly. If you’re a CXO, get important reports mailed to you on a set frequency. If you’re an HR, set up an email notification when someone requests a leave. If you’re in sales, set up a Slack ping every time a new lead is created in the CRM. Save hours and become drastically more efficient.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:border-blue-200 transition-all">
                <div className="flex items-center gap-2.5 text-lg sm:text-xl font-bold text-slate-900 mb-2.5">
                  <CheckSquare className="w-5 h-5 text-[#0066cc]" />
                  <span>Approvals</span>
                </div>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  Build conditional approval workflows on the fly. Create workflows based on amounts, cost-center, organization structure, or any custom rule. Establish multi-level sign-offs for critical actions like payments and purchase approvals.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-3xl bg-[#bfdbfe]/30 sm:p-8 p-3 border border-blue-100 shadow-sm overflow-hidden flex items-center justify-center">
            <img src={img4} alt="Workflows and approvals" className="rounded-2xl shadow-md w-full max-w-5xl h-auto object-contain bg-white" />
          </div>
        </section>

        {/* ── Section 5: Centralised communication ── */}
        <section id="centralised-comm" className="pt-16 pb-12 scroll-mt-24">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">Centralised communication</h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Configure the default incoming and outgoing email account once and let AiBizzApp handle the rest. Once emails are configured you don’t have to go out of the system. All your communication with customers, suppliers, leads, and employees can be done to and from AiBizzApp and tracked centrally. This helps track all communication in one single place, and say goodbye to messy shared email inboxes.
            </p>
          </div>
          <div className="mt-8 rounded-3xl bg-[#bfdbfe]/30 sm:p-8 p-3 border border-blue-100 shadow-sm overflow-hidden flex items-center justify-center">
            <img src={img5} alt="Centralised communication" className="rounded-2xl shadow-md w-full max-w-5xl h-auto object-contain bg-white" />
          </div>
        </section>

        {/* ── Section 6: Enterprise-grade roles and permissions ── */}
        <section id="roles-permissions" className="pt-16 pb-12 scroll-mt-24">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">Enterprise-grade roles and permissions</h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              In AiBizzApp, you can set granular roles and permissions on your own, that can go as granular as a doctype field. Restrict sensitive financial figures, control edit permissions by role, and safeguard organizational data effortlessly.
            </p>
          </div>
          <div className="mt-8 rounded-3xl bg-[#bfdbfe]/30 sm:p-8 p-3 border border-blue-100 shadow-sm overflow-hidden flex items-center justify-center">
            <img src={img1} alt="Roles and permissions" className="rounded-2xl shadow-md w-full max-w-5xl h-auto object-contain bg-white" />
          </div>
        </section>

        {/* ── Section 7: Tools that help rapid development ── */}
        <section id="rapid-development" className="pt-16 pb-12 scroll-mt-24">
          <div className="max-w-4xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">Tools that help rapid development</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70 hover:border-blue-200 transition-all">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Web forms</h3>
                <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Building forms from scratch? Isn’t it too time-consuming? With AiBizzApp Framework's Form Builder, you can create and configure DocTypes with a simple drag-and-drop interface.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70 hover:border-blue-200 transition-all">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Client scripts</h3>
                <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                  When out-of-the-box functionality just doesn’t cut it, custom scripts are your secret weapon. Use client scripts to add interactive features on the frontend and server scripts to handle backend logic.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70 hover:border-blue-200 transition-all">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Server scripts</h3>
                <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                  In AiBizzApp, server scripts are Python scripts that run on the server when a document event or API occurs. You can use server scripts to dynamically define how data is handled.
                </p>
              </div>
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/70 hover:border-blue-200 transition-all">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">Custom doctypes and apps</h3>
                <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
                  Custom scripts alone can't manage hooks or override Doctype classes and methods. That's where custom apps shine. For complex functionalities that server or client scripts can’t handle, creating custom apps is key.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 rounded-3xl bg-[#bfdbfe]/30 sm:p-8 p-3 border border-blue-100 shadow-sm overflow-hidden flex items-center justify-center">
            <img src={img2} alt="Rapid development tools" className="rounded-2xl shadow-md w-full max-w-5xl h-auto object-contain bg-white" />
          </div>
        </section>

        {/* ── 95% Development Savings Callout ── */}
        <div className="my-14 p-8 sm:p-10 rounded-3xl bg-blue-50 border border-blue-200 text-center max-w-4xl mx-auto">
          <Sparkles className="w-8 h-8 text-[#0066cc] mx-auto mb-3" />
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
            AiBizzApp Framework saves ~95% of software development effort
          </h3>
          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            Build enterprise applications, custom portals, and automated business workflows in days instead of months.
          </p>
          <div className="mt-6">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('pricing')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0066cc] hover:bg-[#0052a3] text-white font-semibold text-sm transition-all shadow-md cursor-pointer"
            >
              <span>Try now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
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
