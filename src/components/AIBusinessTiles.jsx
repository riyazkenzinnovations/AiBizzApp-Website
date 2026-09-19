import React, { useState } from 'react'
import {
  TrendingUp,
  Truck,
  Users,
  Target,
  ShoppingBag,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Bot,
  Layers,
  ShieldCheck,
  ChevronRight,
  X
} from 'lucide-react'

export default function AIBusinessTiles({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedDomain, setSelectedDomain] = useState(null)

  const domainTiles = [
    {
      id: 'finance',
      category: 'finance',
      domain: 'Finance & Accounting',
      badge: '40% Faster Close',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      themeColor: '#0066cc',
      barGradient: 'from-blue-600 to-cyan-500',
      iconBg: 'bg-blue-50 text-[#0066cc]',
      icon: TrendingUp,
      title: 'AI in Finance & Risk',
      headline: 'Autonomous financial closing and predictive cash intelligence',
      description:
        'Eliminate manual reconciliations and forecast liquidity with precision. AiBizz Finance AI continuously audits transactions and flags anomalies before period close.',
      capabilities: [
        'Autonomous 3-way invoice matching and dispute resolution',
        'Predictive working capital and multi-currency cash flow forecasting',
        'Real-time fraud scoring and automated tax compliance validation',
        'Natural-language financial reporting and variance explanations'
      ],
      kpis: [
        { label: 'Invoice Processing', value: '85% automated' },
        { label: 'Close Cycle', value: '4 days faster' }
      ]
    },
    {
      id: 'supply-chain',
      category: 'supply-chain',
      domain: 'Supply Chain & Logistics',
      badge: '35% Less Inventory Holding',
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      themeColor: '#4f46e5',
      barGradient: 'from-indigo-600 to-violet-500',
      iconBg: 'bg-indigo-50 text-indigo-600',
      icon: Truck,
      title: 'AI in Supply Chain',
      headline: 'Demand sensing and dynamic logistics optimization',
      description:
        'Transform fragile supply lines into self-healing networks. Our AI models analyze demand signals, weather disruptions, and vendor lead times in real time.',
      capabilities: [
        'AI demand forecasting incorporating external market signals',
        'Automated safety stock dynamic replenishment triggers',
        'Predictive delivery delay alerting and route re-optimization',
        'Warehouse picking sequence optimization and labor forecasting'
      ],
      kpis: [
        { label: 'Forecast Accuracy', value: '94.2%' },
        { label: 'Stockouts Reduction', value: '62%' }
      ]
    },
    {
      id: 'hr',
      category: 'hr',
      domain: 'Human Resources & Talent',
      badge: '50% Faster Hiring',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      themeColor: '#059669',
      barGradient: 'from-emerald-600 to-teal-500',
      iconBg: 'bg-emerald-50 text-emerald-600',
      icon: Users,
      title: 'AI in Human Capital',
      headline: 'Skills ontology mapping and intelligent talent management',
      description:
        'Bridge skills gaps and elevate employee engagement. AI uncovers hidden talent, recommends hyper-personalized training paths, and streamlines onboarding.',
      capabilities: [
        'Automated job description generation and candidate talent matching',
        'Enterprise skills ontology and dynamic career path modeling',
        'AI conversational onboarding assistant and policy Q&A',
        'Predictive turnover risk index and retention recommendations'
      ],
      kpis: [
        { label: 'Screening Time', value: '70% reduction' },
        { label: 'Talent Retention', value: '+34%' }
      ]
    },
    {
      id: 'sales',
      category: 'sales',
      domain: 'Sales & Customer Service',
      badge: '28% Higher Win Rate',
      badgeColor: 'bg-violet-50 text-violet-700 border-violet-200',
      themeColor: '#7c3aed',
      barGradient: 'from-violet-600 to-purple-500',
      iconBg: 'bg-violet-50 text-violet-600',
      icon: Target,
      title: 'AI in Sales & CX',
      headline: 'Predictive lead scoring and automated quote engineering',
      description:
        'Empower revenue teams with deal intelligence. Generate tailored CPQ quotes, summarize buyer sentiment, and recommend optimal follow-up steps automatically.',
      capabilities: [
        'AI lead prioritization scoring based on behavioral engagement',
        'Context-aware quote generation and automated pricing margin guards',
        '24/7 autonomous customer support agent via WhatsApp & Web',
        'Meeting intelligence summaries and CRM auto-logging'
      ],
      kpis: [
        { label: 'Quote Turnaround', value: 'Under 5 mins' },
        { label: 'CSAT Score', value: '4.9 / 5.0' }
      ]
    },
    {
      id: 'procurement',
      category: 'procurement',
      domain: 'Sourcing & Procurement',
      badge: '22% Spend Savings',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      themeColor: '#d97706',
      barGradient: 'from-amber-500 to-orange-500',
      iconBg: 'bg-amber-50 text-amber-600',
      icon: ShoppingBag,
      title: 'AI in Procurement',
      headline: 'Intelligent spend analytics and automated contract compliance',
      description:
        'Control tail spend and negotiate with superior leverage. AI categorizes unstructured line items and benchmarks supplier quotes against industry indexes.',
      capabilities: [
        'Automated catalog spend classification and duplicate detection',
        'Supplier risk radar monitoring financial health and ESG compliance',
        'Contract clause comparison and auto-flagging of non-standard terms',
        'Autonomous RFQ generation and bid analysis comparisons'
      ],
      kpis: [
        { label: 'Maverick Spend', value: '-48%' },
        { label: 'Contract Cycle', value: '3x faster' }
      ]
    },
    {
      id: 'agents',
      category: 'agents',
      domain: 'Platform & Autonomous Agents',
      badge: 'Zero Data Leakage',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      themeColor: '#0284c7',
      barGradient: 'from-sky-500 to-blue-600',
      iconBg: 'bg-sky-50 text-sky-600',
      icon: Cpu,
      title: 'AiBizz Autonomous Foundation',
      headline: 'Enterprise generative AI hub and agent orchestration',
      description:
        'Ground AI directly in your trusted business data. Deploy custom autonomous multi-agent systems with role-based privacy, audit logging, and zero vendor lock-in.',
      capabilities: [
        'Collaborative multi-agent workflows executing cross-system tasks',
        'Secure Generative AI Hub with support for enterprise LLMs',
        'Strict tenant-level data isolation and ISO 27001 compliance',
        'Low-code prompt studio and conversational workflow builder'
      ],
      kpis: [
        { label: 'Agent Response', value: '< 400ms' },
        { label: 'Enterprise SLA', value: '99.95%' }
      ]
    }
  ]

  const filters = [
    { id: 'all', label: 'All Business Domains' },
    { id: 'finance', label: 'Finance & Risk' },
    { id: 'supply-chain', label: 'Supply Chain' },
    { id: 'hr', label: 'HR & Talent' },
    { id: 'sales', label: 'Sales & CX' },
    { id: 'procurement', label: 'Procurement' },
    { id: 'agents', label: 'AI Foundation' }
  ]

  const filteredTiles =
    activeFilter === 'all'
      ? domainTiles
      : domainTiles.filter((t) => t.category === activeFilter)

  const handleOpenModal = (tile) => {
    setSelectedDomain(tile)
  }

  const handleCloseModal = () => {
    setSelectedDomain(null)
  }

  const handleExploreClick = (tile) => {
    if (onNavigate) {
      onNavigate('contact')
    }
  }

  return (
    <section
      id="business-ai"
      className="py-20 lg:py-28 bg-[#f8fafc] text-slate-900 relative overflow-hidden select-text border-b border-slate-200/90 -mt-16 lg:-mt-20 z-10"
    >
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute -top-40 right-10 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching SAP Business AI page structure */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#0066cc] text-xs sm:text-sm font-semibold mb-4 tracking-wide">
            <Sparkles className="w-4 h-4 text-[#0066cc]" />
            <span>BUSINESS AI ACROSS DOMAINS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-5">
            Relevant, Reliable & Responsible <br className="hidden sm:inline" />
            <span className="text-[#0066cc]">Business AI for Every Team</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Built directly into your core business applications. AiBizz combines deep business context with cutting-edge artificial intelligence so your teams can automate routine tasks, predict outcomes, and execute with confidence.
          </p>
        </div>

        {/* Filter Pills (Desktop & Tablet) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-xs'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTiles.map((tile) => {
            const Icon = tile.icon
            return (
              <div
                key={tile.id}
                className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Gradient Bar */}
                <div
                  className={`h-1.5 w-full bg-gradient-to-r ${tile.barGradient}`}
                />

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  
                  {/* Top Row: Icon + Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${tile.iconBg} shadow-xs transition-transform duration-300 group-hover:scale-105`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full border ${tile.badgeColor}`}
                    >
                      {tile.badge}
                    </span>
                  </div>

                  {/* Domain & Heading */}
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {tile.domain}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors mb-2 tracking-tight">
                    {tile.title}
                  </h3>

                  <p className="text-sm font-semibold text-slate-800 mb-3">
                    {tile.headline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed flex-1">
                    {tile.description}
                  </p>

                  {/* Key Capabilities Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Key AI Capabilities:
                    </div>
                    {tile.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-[13px] text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="leading-snug">{cap}</span>
                      </div>
                    ))}
                  </div>

                  {/* Domain KPIs Pill Row */}
                  <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-6">
                    {tile.kpis.map((kpi, ki) => (
                      <div key={ki} className="text-left px-2">
                        <div className="text-[11px] text-slate-500 font-medium">{kpi.label}</div>
                        <div className="text-sm font-bold text-slate-900">{kpi.value}</div>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Bottom Card Footer Action */}
                <div className="px-6 sm:px-7 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenModal(tile)}
                    className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0066cc] transition-colors cursor-pointer"
                  >
                    View details
                  </button>

                  <button
                    onClick={() => handleExploreClick(tile)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0066cc] group-hover:text-[#0052a3] transition-colors cursor-pointer"
                  >
                    <span>Explore solution</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

              </div>
            )
          })}
        </div>

        {/* Bottom Banner with SAP-Style CTA */}
        <div className="mt-14 bg-gradient-to-r from-slate-900 via-[#102ba8] to-[#1f2cb4] rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-blue-200 text-xs font-bold tracking-wider uppercase">
              <Bot className="w-4 h-4" />
              <span>Joule & Autonomous Agents Integration</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Ready to deploy AI tailored to your industry workflows?
            </h3>
            <p className="text-sm sm:text-base text-blue-100 max-w-2xl">
              Get an enterprise architecture assessment and see how our embedded AI foundation drives measurable ROI within 90 days.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer text-center"
            >
              Request AI Demo
            </button>
            <button
              onClick={() => onNavigate && onNavigate('pricing')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-700/60 hover:bg-blue-700 text-white border border-blue-400/40 font-semibold text-sm transition-all cursor-pointer text-center"
            >
              Explore AI Pricing
            </button>
          </div>
        </div>

      </div>

      {/* Detail Modal if "View details" is clicked */}
      {selectedDomain && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div
            className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Accent */}
            <div className={`h-2 w-full bg-gradient-to-r ${selectedDomain.barGradient}`} />

            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${selectedDomain.iconBg}`}>
                    {React.createElement(selectedDomain.icon, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                      {selectedDomain.domain}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {selectedDomain.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={handleCloseModal}
                  className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <p className="text-base text-slate-700 font-medium">
                  {selectedDomain.headline}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedDomain.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-sm font-bold text-slate-900 mb-3">
                    Full AI Capability Matrix:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedDomain.capabilities.map((cap, ci) => (
                      <div key={ci} className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-700">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-sm font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    handleCloseModal()
                    if (onNavigate) onNavigate('contact')
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white text-sm font-bold shadow-md transition-all cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Request {selectedDomain.domain} Demo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
