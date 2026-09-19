import React, { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles
} from 'lucide-react'

export default function IndustryTemplate({
  badge = 'All-in-One ERP Suite',
  titlePrefix = 'ERP Software Solutions for',
  highlightWord = 'Operational Excellence',
  subtitle = 'Streamline workflows, automate real-time synchronization across departments, and accelerate growth with AiBizz ERP.',
  trustPoints = ['Cloud-Native Architecture', '24/7 Enterprise Support'],
  heroImage,
  heroHud = {
    badge: 'ERP LIVE • 99.8% PRECISION',
    statLabel: 'EFFICIENCY GAIN',
    statValue: '+45% Faster Turnaround'
  },
  overview = {
    title: 'Overview',
    p1: 'Modern organizations face operational complexity, fragmented departmental silos, and unpredictable compliance demands. Without a unified ERP platform, manual handoffs inevitably cause bottlenecks, data discrepancies, and lost productivity.',
    subheading: 'Transform your Operations with Integrated ERP Software',
    p2: 'AiBizz ERP provides a complete, modern digital nervous system tailored to industry-specific demands. From front-office operations to backend financial ledgers, automate and streamline your operations with real-time intelligence.'
  },
  challenges = [],
  whySolutions = [],
  functionalSections = [],
  digitalTransformation = [],
  cta = {
    eyebrow: 'READY TO MODERNIZE YOUR OPERATIONS?',
    titlePrefix: 'Scale Your Organization with',
    highlightWord: 'Industry ERP Solutions',
    subtitle: 'Experience seamless automation from initial requisition to real-time reporting.',
    primaryBtn: 'Request a Free Demo',
    secondaryBtn: 'Speak to an Expert'
  },
  faqs = [],
  onNavigate
}) {
  const [openFaq, setOpenFaq] = useState(0)

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx)
  }

  const handleCta = () => {
    if (onNavigate) {
      onNavigate('contact')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="w-full bg-white text-slate-900 font-sans select-text">
      
      {/* 1. HERO SECTION (Signature Royal Blue to Violet Gradient Theme) */}
      <section
        className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 text-white overflow-hidden"
        style={{
          background: 'linear-gradient(172deg, #0e44cb 0%, #143fb9 25%, #183cae 50%, #143194 76%, #0c1f68 100%)'
        }}
      >
        {/* Ambient background lighting flares */}
        <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-blue-600/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-radial-at-t from-blue-500/15 via-transparent to-transparent pointer-events-none" />

        {/* Decorative 4-point sparkle stars on the left */}
        <div className="absolute bottom-20 left-8 sm:left-14 pointer-events-none opacity-80 hidden sm:block">
          <svg className="w-12 h-12 text-white/30" viewBox="0 0 60 60" fill="none">
            <path 
              d="M30 4C30 18 18 30 4 30C18 30 30 42 30 56C30 42 42 30 56 30C42 30 30 18 30 4Z" 
              fill="rgba(255,255,255,0.18)" 
              stroke="rgba(255,255,255,0.5)" 
              strokeWidth="1.5" 
            />
          </svg>
        </div>
        <div className="absolute bottom-12 left-20 sm:left-28 pointer-events-none opacity-70 hidden sm:block">
          <svg className="w-7 h-7 text-white/30" viewBox="0 0 60 60" fill="none">
            <path 
              d="M30 4C30 18 18 30 4 30C18 30 30 42 30 56C30 42 42 30 56 30C42 30 30 18 30 4Z" 
              fill="rgba(255,255,255,0.22)" 
              stroke="rgba(255,255,255,0.5)" 
              strokeWidth="1.5" 
            />
          </svg>
        </div>

        <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Title & Actions */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-5 sm:space-y-6 text-left">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-semibold text-white backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                <span>{badge}</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] 2xl:text-[50px] font-bold text-white tracking-tight leading-[1.18]">
                <span>{titlePrefix} </span>
                <span className="text-cyan-300 drop-shadow-sm">{highlightWord}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-xl font-normal">
                {subtitle}
              </p>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleCta}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#1b35b5] text-sm sm:text-base font-bold transition-all shadow-xl shadow-indigo-950/30 active:scale-95 cursor-pointer"
                >
                  <span>Request a Free Demo</span>
                  <ArrowRight className="w-4 h-4 text-[#1b35b5]" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('overview')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="px-6 sm:px-7 py-3.5 rounded-xl border border-white/40 bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-semibold transition-all backdrop-blur-sm active:scale-95 cursor-pointer"
                >
                  Explore Features
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-2 flex flex-wrap items-center gap-x-5 lg:gap-x-6 gap-y-2 text-xs sm:text-sm text-blue-100/90 font-medium">
                {trustPoints.map((tp, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                    <span className="whitespace-nowrap">{tp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Illustration in Glassmorphic Container */}
            <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center w-full">
              {/* Ambient glow behind card */}
              <div className="absolute inset-0 mx-auto bg-gradient-to-r from-blue-400/25 via-fuchsia-400/25 to-purple-400/25 rounded-full blur-3xl pointer-events-none" />

              {/* Glassmorphic Container */}
              <div className="relative w-full max-w-[760px] rounded-2xl overflow-hidden border border-white/30 shadow-[0_30px_80px_rgba(10,5,50,0.55)] bg-white/10 backdrop-blur-xl p-2 sm:p-2.5 group">
                <div className="relative w-full rounded-xl overflow-hidden aspect-[16/10] bg-slate-950">
                  {heroImage ? (
                    <img
                      src={heroImage}
                      alt={highlightWord}
                      className="w-full h-full object-cover object-center block transform transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center p-8 text-center bg-gradient-to-br from-blue-900/60 via-purple-900/40 to-slate-900/80">
                      <Sparkles className="w-12 h-12 text-cyan-300 animate-pulse" />
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Signature pointer shape pointing cleanly into the section below */}
        <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-t-[18px] border-t-[#0c1f68] z-20 pointer-events-none" />
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section id="overview" className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center sm:text-left">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              {overview.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {overview.p1}
            </p>
          </div>

          <div className="pt-2">
            <h3 className="text-lg sm:text-xl font-bold text-[#0066cc] mb-3">
              {overview.subheading}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {overview.p2}
            </p>
          </div>
        </div>
      </section>

      {/* 3. CHALLENGES SECTION (8 Cards Grid) */}
      {challenges && challenges.length > 0 && (
        <section className="py-18 bg-[#f8fafc] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                The Unique Challenges of the {highlightWord} Sector
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Operational bottlenecks and fragmented tools that cause administrative overhead, delay service delivery, and reduce profitability.
              </p>
            </div>

            {/* 4x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {challenges.map((item, idx) => {
                const Icon = item.icon || CheckCircle2
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all hover:-translate-y-1 text-center sm:text-left flex flex-col items-center sm:items-start"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg || 'bg-blue-50 text-blue-600'} mb-4 shrink-0`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* 4. WHY SOLUTIONS (6 Cards Grid) */}
      {whySolutions && whySolutions.length > 0 && (
        <section className="py-18 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                Why AiBizz ERP is the Ideal Solution for {highlightWord}
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Purpose-built architectures designed to ensure compliance, agility, and measurable ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {whySolutions.map((item, idx) => {
                const Icon = item.icon || CheckCircle2
                return (
                  <div
                    key={idx}
                    className="bg-[#fcfdfe] rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all hover:-translate-y-1.5 flex flex-col items-center sm:items-start text-center sm:text-left"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg || 'bg-blue-50 text-blue-600'} mb-5 shrink-0`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* 5. DEEP-DIVE FUNCTIONAL MANAGEMENT */}
      {functionalSections && functionalSections.length > 0 && (
        <section className="py-14 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {functionalSections.map((section, sIdx) => {
              const SectionIcon = section.icon || CheckCircle2
              return (
                <div key={sIdx} className="space-y-8">
                  <div className="text-center max-w-2xl mx-auto">
                    {section.badge && (
                      <span className="text-xs font-bold text-blue-600 tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block mb-2">
                        {section.badge}
                      </span>
                    )}
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                      {section.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      {section.description || section.subtitle}
                    </p>
                  </div>

                  {section.cards && section.cards.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {section.cards.map((card, cIdx) => {
                        const Icon = card.icon || CheckCircle2
                        return (
                          <div
                            key={cIdx}
                            className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all hover:-translate-y-1 flex flex-col items-center sm:items-start text-center sm:text-left"
                          >
                            <div
                              className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.iconBg || 'bg-blue-50 text-blue-600'} mb-4 shrink-0`}
                            >
                              <Icon className="w-6 h-6" />
                            </div>
                            <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                              {card.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                              {card.desc}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  ) : section.items && section.items.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {section.items.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all hover:-translate-y-1 flex items-start gap-3.5 text-left"
                        >
                          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-blue-600" />
                          </div>
                          <p className="text-sm font-medium text-slate-800 leading-snug">
                            {feat}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* 6. DIGITAL TRANSFORMATION (6 Cards Grid) */}
      {digitalTransformation && digitalTransformation.length > 0 && (
        <section className="py-18 bg-white border-b border-slate-200/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                What Key Features Make AiBizz Your Partner in Digital Transformation
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                Enterprise security, modern cloud scale, and rapid deployment for continuous growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {digitalTransformation.map((item, idx) => {
                const Icon = item.icon || CheckCircle2
                return (
                  <div
                    key={idx}
                    className="bg-[#fcfdfe] rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col items-center sm:items-start text-center sm:text-left"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg || 'bg-blue-50 text-blue-600'} mb-4 shrink-0`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* 7. CALL TO ACTION BANNER */}
      <section className="py-14 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(172deg, #0e44cb 0%, #143fb9 25%, #183cae 50%, #143194 76%, #0c1f68 100%)'
            }}
          >
            {/* Background Ambient Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <div className="inline-block px-3.5 py-1 rounded-full bg-white/15 border border-white/25 text-cyan-200 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                {cta.eyebrow}
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white">
                {cta.titlePrefix} <br />
                <span className="text-cyan-300 drop-shadow-sm">{cta.highlightWord}</span>
              </h2>

              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
                {cta.subtitle}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={handleCta}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#1b35b5] font-bold text-sm sm:text-base shadow-xl shadow-indigo-950/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>{cta.primaryBtn}</span>
                  <ArrowRight className="w-4 h-4 text-[#1b35b5]" />
                </button>
                <button
                  onClick={handleCta}
                  className="px-8 py-3.5 rounded-xl border border-white/40 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base transition-all backdrop-blur-sm cursor-pointer"
                >
                  {cta.secondaryBtn}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-slate-600">
                Everything you need to know about deploying AiBizz {highlightWord} ERP.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900 pr-4">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )}

    </div>
  )
}
