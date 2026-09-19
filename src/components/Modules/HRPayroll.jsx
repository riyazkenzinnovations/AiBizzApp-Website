import React, { useState } from 'react'
import { ArrowRight, MousePointerClick, Plug, Smartphone, Sliders, GitMerge, ShieldCheck, ChevronDown, CheckCircle2, HeartHandshake, DollarSign, Layers, Sparkles, Building2 } from 'lucide-react'

// UI Screenshots
import img1 from '../../assets/modules/AiBizzApp1.jpeg'
import img2 from '../../assets/modules/AiBizzApp2.jpeg'
import img3 from '../../assets/modules/AiBizzApp3.jpeg'
import img4 from '../../assets/modules/AiBizzApp4.jpeg'
import img5 from '../../assets/modules/AiBizzApp5.jpeg'
import img6 from '../../assets/modules/AiBizzApp6.jpeg'
import img7 from '../../assets/modules/AiBizzApp1.jpeg'

const platformFeatures = [
  { icon: MousePointerClick, title: 'No-code builder',     desc: 'Automate tasks with drag-and-drop simplicity' },
  { icon: Plug,              title: 'API-first',           desc: 'Easily integrate with third-party systems' },
  { icon: Smartphone,        title: 'Mobile-friendly',     desc: 'Manage all modules from any device' },
  { icon: Sliders,           title: 'Customizable',        desc: 'Forms, reports, print formats, and dashboards' },
  { icon: GitMerge,          title: 'Approval workflows',  desc: 'Simplify with custom multi-level workflows' },
  { icon: ShieldCheck,       title: 'Roles & permissions', desc: 'Granular access control to safeguard data' },
]

const whyHrBenefits = [
  {
    num: '1',
    title: '100% open source',
    desc: 'AiBizzApp HR is a 100% open-source HR & Payroll product, offering you complete transparency and flexibility. Backed by a vast global community of developers and partners, there will never be a struggle for solutions.'
  },
  {
    num: '2',
    title: 'Affordable & inclusive',
    desc: 'Say goodbye to overvalued SaaS solutions with inflated per-user pricing. With AiBizzApp HR, your software expenses wouldn’t grow as your team grows. Deliver the best employee and HR experience with a product designed for everyone in the organization.'
  },
  {
    num: '3',
    title: 'Highly customizable',
    desc: 'Configure and customize to your liking. Create reports, forms, custom fields, print formats, and change layouts on the fly without touching code.'
  },
  {
    num: '4',
    title: 'Easy integrations',
    desc: 'Cut ties with disparate payroll and accounting systems to save hours of reconciliation work. AiBizzApp HR promises integrated accounting with AiBizzApp every step of the way. Integrate with biometric tools, banks, or any third-party software.'
  },
  {
    num: '5',
    title: 'Powered by the low-code, no-code AiBizzApp Framework',
    desc: 'AiBizzApp Framework enables you to build your own forms, set up advanced approval workflows on any form, manage roles and permissions, set up notifications and reminders, and build reports and dashboards to meet all your needs.'
  },
  {
    num: '6',
    title: 'All-in-one HR suite of products',
    desc: 'Stop paying licensing fees for 10 different products. Manage all your HR and Payroll operations from one single dashboard and an easy-to-use mobile app. Right from recruitment to exits, managing rosters to payroll - we have got you covered.'
  }
]

const testimonials = [
  {
    name: 'Nikhil Ponnuru',
    role: 'Zerodha',
    quote: '“We have been using the HR module for some years now and the growth with which it has matured is impressive. The UI and UX are very usable and human-friendly. Many things are provided out of the box with a customization option and being open source makes it even more easier to use.”'
  },
  {
    name: 'Imesha Sudasingha',
    role: 'Founder & Leadership, HighFlyer',
    quote: '"I have been using this for several months for an organization with 50+ employees with automated attendance based on fingerprint reader based employee checkins. It\'s been awesome so far."'
  },
  {
    name: 'Mathew Chacko',
    role: 'Operations, Anther Technologies',
    quote: '"It\'s my favourite HR software. I liked the simple UI, flexibility and extendability of the product. As business continuity is important for me, and they have the solution for that too, they provide the source code."'
  }
]

const faqItems = [
  {
    q: 'How does AiBizzApp HR compare to traditional HRMS solutions in terms of cost and flexibility?',
    a: 'Unlike traditional SaaS solutions that charge hefty monthly fees per employee, AiBizzApp HR is 100% open-source and free from artificial seat limits. You gain full source code ownership, allowing customized workflows without licensing lock-in.'
  },
  {
    q: 'Does AiBizzApp HR support remote and hybrid workforce management?',
    a: 'Yes. AiBizzApp HR includes geolocation-enabled mobile check-ins, flexible shift rosters, digital leave applications, expense reimbursements, and automated attendance integration that seamlessly supports in-office, remote, and hybrid work models.'
  },
  {
    q: 'How customizable is AiBizzApp HR compared to other HR software?',
    a: 'Every aspect is configurable on the fly: add custom fields to employee profiles, adjust multi-tier approval workflows, build customized salary structures, and design personalized PDF print formats without writing a single line of code.'
  },
  {
    q: 'Is AiBizzApp HR suitable for enterprises or small businesses?',
    a: 'Yes. It scales effortlessly from high-growth startups with dozens of team members to multi-national enterprises with thousands of employees, supporting multi-company consolidation, varied currency payouts, and regional statutory compliance.'
  },
  {
    q: 'Can I integrate AiBizzApp HR with my existing ERP or accounting system?',
    a: 'AiBizzApp HR natively synchronizes with the AiBizzApp ERP accounting ledger for 1-click salary slip journal entries. Its REST API and webhook engine also connect seamlessly with banks, biometric devices, and third-party accounting suites.'
  },
  {
    q: 'What kind of reports and analytics does AiBizzApp HR provide for decision making?',
    a: 'Out of the box, you receive headcount trends, attrition analysis, leave utilization heatmaps, monthly payroll expense variances, tax projection reports, and appraisal grade distributions.'
  },
  {
    q: 'How secure is employee data stored in AiBizzApp HR?',
    a: 'With role-based access control (RBAC), user permission rules, document-level security, and optional on-premise deployment, your sensitive personnel and payroll data remains under your absolute control.'
  },
  {
    q: 'Does AiBizzApp HR include employee self-service and mobile access features?',
    a: 'Yes! Employees get a self-service portal and responsive mobile interface to inspect salary slips, submit expense receipts, view remaining leave balances, and review team announcements directly.'
  },
  {
    q: 'What support and training options are available when implementing AiBizzApp HR?',
    a: 'AiBizzApp offers dedicated implementation support, migration assistance from legacy HRMS platforms, community discussion forums, comprehensive documentation, and personalized training.'
  }
]

export default function HRPayroll({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(null)

  const tableOfContents = [
    { id: 'recruitment',           title: 'Recruitment' },
    { id: 'employee-lifecycle',    title: 'Employee Lifecycle' },
    { id: 'shifts-attendance',     title: 'Shifts & Attendance' },
    { id: 'leave-management',      title: 'Leave Management' },
    { id: 'expense-management',    title: 'Expense Management' },
    { id: 'performance-management',title: 'Performance Management' },
    { id: 'payroll',               title: 'Payroll' },
    { id: 'payroll-tax-reports',   title: 'Payroll Tax & Reports' },
    { id: 'mobile-app',            title: 'Mobile App' },
  ]

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const sections = [
    {
      id: 'recruitment',
      title: 'Recruitment',
      subtitle: 'Growth made easy: plan, publish, analyze, engage, evaluate & hire',
      img: img1,
      paragraphs: [
        'Growth made easy: plan, publish, analyze, engage, evaluate & hire. Post job openings, collect applicant portfolios, schedule interviews, and track recruitment stages from one unified interface.',
        'Collaborate closely with hiring managers, record scorecard assessments, and auto-generate standardized offer letters with seamless conversion into employee records.'
      ]
    },
    {
      id: 'employee-lifecycle',
      title: 'Employee Lifecycle',
      subtitle: "From onboarding to exits, transfers to promotions, we've got your back every step of the way",
      img: img2,
      paragraphs: [
        "From onboarding to exits, transfers to promotions, we've got your back every step of the way. Maintain comprehensive employee files including documentation, emergency contacts, designated roles, and reporting hierarchies.",
        'Ensure full compliance through automated onboarding and offboarding checklists, departmental transfers, promotions, and full-and-final settlement processing.'
      ]
    },
    {
      id: 'shifts-attendance',
      title: 'Shifts & Attendance',
      subtitle: 'Mobile check-ins, roster management, and auto attendance',
      img: img3,
      paragraphs: [
        'Mobile check-ins, roster management, and auto attendance simplify time tracking across hybrid teams. Capture clock-ins from biometric readers, RFID scanners, or mobile devices with geolocation verification.',
        'Automate shift scheduling, overtime calculations, late-entry penalization, and real-time attendance validation directly connected to payroll.'
      ]
    },
    {
      id: 'leave-management',
      title: 'Leave Management',
      subtitle: 'Manage holidays, complex leave policies and encashments',
      img: img4,
      paragraphs: [
        'Manage holidays, complex leave policies and encashments with flexible configuration. Define vacation, sick, and compensatory off allocations with automatic accrual schedules and rollover limits.',
        'Employees can submit leave requests in seconds, while managers approve with full visibility into team availability calendars.'
      ]
    },
    {
      id: 'expense-management',
      title: 'Expense Management',
      subtitle: 'Payout advances, streamline travel and expense accounting',
      img: img5,
      paragraphs: [
        'Payout advances, streamline travel and expense accounting without receipt chaos. Employees submit expense claims with uploaded bills from their smartphones, triggering customizable multi-tiered approval workflows.',
        'Approved claims post straight into the accounting ledger or process as reimbursement additions within the next payroll run.'
      ]
    },
    {
      id: 'performance-management',
      title: 'Performance Management',
      subtitle: 'Plan goals & KRAs, create appraisals and ensure continuous feedback to help employees grow',
      img: img6,
      paragraphs: [
        'Plan goals & KRAs, create appraisals and ensure continuous feedback to help employees grow. Establish clear Key Result Areas and aligned organizational objectives with milestone progress tracking.',
        'Conduct structured appraisal cycles featuring self-assessments, peer reviews, and manager grading to build a culture of high performance and transparency.'
      ]
    },
    {
      id: 'payroll',
      title: 'Payroll',
      subtitle: 'Map diverse pay structures, employee loans & run accurate payroll with integrated accounting',
      img: img7,
      paragraphs: [
        'Map diverse pay structures, employee loans & run accurate payroll with integrated accounting. Handle formulas, variable earnings, deductions, bonuses, and loan repayments with 100% precision.',
        'Generate secure, password-protected salary slips, create bank transfer disbursement files, and post full general ledger entries in a single click.'
      ]
    },
    {
      id: 'payroll-tax-reports',
      title: 'Payroll Tax & Reports',
      subtitle: 'Configure regional tax regulations & stay informed at all times with tax computation & projection reports',
      img: img1,
      paragraphs: [
        'Configure regional tax regulations & stay informed at all times with tax computation & projection reports. Stay on top of statutory deductions, provident funds, social security, and tax brackets without manual calculation errors.',
        'Equip leadership with live analytics on labor expenses, departmental budgets, salary variances, and year-end compliance reporting.'
      ]
    },
    {
      id: 'mobile-app',
      title: 'Mobile App',
      subtitle: 'Access AiBizzApp HR from the convenience of your smartphone',
      img: img2,
      paragraphs: [
        'Access AiBizzApp HR from the convenience of your smartphone. Give every team member quick access to check in for their shift, apply for leaves, download salary slips, and view company announcements.',
        'Managers can review and approve pending requests on the go, eliminating bottlenecks and keeping operations moving swiftly.'
      ]
    }
  ]

  return (
    <div className="pt-28 pb-20 bg-white text-slate-900 font-sans select-text selection:bg-[#0066cc] selection:text-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 w-full">

        {/* ── Hero Header ── */}
        <div className="text-center pt-8 pb-12 max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-wider text-[#0066cc] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
            OPEN SOURCE HR & PAYROLL
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            The HR revolution brewing just for you
          </h1>
          <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            AiBizzApp HR is a 100% open source, modern, user-friendly solution to drive excellence within your team. Simplify your HR and Payroll operations with a product crafted as per your needs.
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
          <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Trusted by teams of all sizes across startups, scaleups, and enterprises</span>
          </div>
        </div>

        {/* ── Benefits: Why AiBizzApp HR? ── */}
        <div className="my-10 pt-10 pb-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0066cc] tracking-wider uppercase">BENEFITS</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">Why AiBizzApp HR?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyHrBenefits.map((b) => (
              <div key={b.num} className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-blue-50/40 hover:border-blue-200 transition-all group">
                <span className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-600 group-hover:text-[#0066cc] group-hover:border-blue-300 shadow-2xs mb-4">
                  {b.num}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">{b.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Numbered Table of Contents (Aligned with Navbar) ── */}
        <div className="my-8 py-8 border-y border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <span className="text-xs font-bold text-[#0066cc] tracking-wider uppercase">FEATURES</span>
            <h2 className="mt-1 text-xl sm:text-2xl font-bold text-slate-900">What AiBizzApp HR has to offer you</h2>
          </div>
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

        {/* ── 9 Feature Content Sections ── */}
        {sections.map(s => (
          <section key={s.id} id={s.id} className="pt-16 pb-12 scroll-mt-24">
            <div className="max-w-4xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">{s.title}</h2>
              {s.subtitle && (
                <p className="mt-2 text-sm sm:text-base font-medium text-[#0066cc]">{s.subtitle}</p>
              )}
              {s.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">{p}</p>
              ))}
            </div>
            <div className="mt-8 rounded-3xl bg-[#bfdbfe]/30 sm:p-8 p-3 border border-blue-100 shadow-sm overflow-hidden flex items-center justify-center">
              <img src={s.img} alt={s.title} className="rounded-2xl shadow-md w-full max-w-5xl h-auto object-contain bg-white" />
            </div>
          </section>
        ))}

        {/* ── Story of AiBizzApp HR ── */}
        <div className="my-16 p-8 sm:p-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#0066cc] tracking-wider uppercase">FROM THE TEAM</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">Story of AiBizzApp HR</h2>
            <div className="mt-5 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                As our organization started growing in terms of team size, we set out in search of the perfect open-source HR and Payroll software that could meet all of our needs. While our search led us far and wide, we never found any "true" open-source product out there. Being passionate advocates for open technology, we then took it upon ourselves to build one that truly delivers.
              </p>
              <p>
                As dedicated creators passionate about helping employees and perfecting organizational culture, we understood the frustration of fragmented, clunky HR systems. We set out to create a 100% open-source solution with a human-centric UX and a modern, cohesive UI.
              </p>
              <p>
                Thus, AiBizzApp HR was born. Built on the metadata-driven AiBizzApp Framework, it unites recruitment, employee lifecycles, roster scheduling, automated attendance, continuous appraisals, and salary accounting into a unified powerhouse.
              </p>
            </div>
          </div>
        </div>

        {/* ── Testimonials ── */}
        <div className="my-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0066cc] tracking-wider uppercase">USER REVIEWS</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">Take it from our users</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs flex flex-col justify-between">
                <p className="text-sm text-slate-700 italic leading-relaxed mb-6">{t.quote}</p>
                <div className="pt-4 border-t border-slate-100">
                  <div className="text-sm font-bold text-slate-900">{t.name}</div>
                  <div className="text-xs text-[#0066cc] font-medium">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Frequently Asked Questions ── */}
        <div className="my-16 pt-12 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0066cc] tracking-wider uppercase">GOT A QUERY?</span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">Frequently asked questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className="rounded-xl border border-slate-200 bg-white overflow-hidden transition-all">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-slate-800 hover:text-[#0066cc] transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base pr-4">{item.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-[#0066cc]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              )
            })}
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
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Ready to ease your everyday people ops?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Choose freedom with AiBizzApp HR — the comprehensive, user-friendly and 100% open-source ERP suite.
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
