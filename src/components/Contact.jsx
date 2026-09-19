import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Send,
  CheckCircle2,
  Phone,
  Mail,
  Sparkles,
  MessageSquare,
  User,
  Briefcase,
  ChevronDown,
  HelpCircle
} from 'lucide-react'

export default function Contact({ onNavigate }) {
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const faqs = [
    {
      q: 'How fast can an AiBizzApp enterprise instance be deployed?',
      a: 'Standard cloud environments are provisioned within 24 hours. Full-scale enterprise data migrations, custom workflows, and multi-entity configurations typically launch in 2 to 4 weeks with the guidance of our dedicated implementation engineers.'
    },
    {
      q: 'Do you offer on-premise and private cloud hosting?',
      a: 'Yes, AiBizzApp offers fully isolated private cloud instances, in-country data residency, and containerized Kubernetes on-premise deployments compliant with strict enterprise regulations.'
    },
    {
      q: 'Can AiBizzApp integrate with our existing ERP or third-party tools?',
      a: 'Absolutely. AiBizzApp provides comprehensive REST APIs, webhooks, bi-directional sync adapters, and a visual workflow automation builder to connect with legacy systems, payment gateways, and communications stacks.'
    },
    {
      q: 'What kind of support is included with Enterprise plans?',
      a: 'Enterprise plans include 24/7 priority phone and WhatsApp desk access, a guaranteed 15-minute response SLA for critical incidents, a designated Customer Success Manager, and ongoing solution architect reviews.'
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="relative pt-28 sm:pt-32 pb-24 bg-[#f8fafd] text-slate-900 min-h-screen overflow-hidden">
      {/* Dynamic Background Ambient Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none -z-10">
        <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-200/40 via-indigo-100/30 to-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-[420px] h-[420px] bg-gradient-to-bl from-purple-200/30 via-sky-100/40 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* 1. HERO HEADER SECTION                                    */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-blue-200/80 shadow-sm backdrop-blur-md mb-5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-bold text-[#0066cc] uppercase tracking-wider">
              Enterprise Consultation &amp; Global Support
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.15]">
            Get in Touch with AiBizzApp
          </h1>
          
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Speak directly with our enterprise solution architects, explore custom ERP workflows, or request a tailored pilot for your organization.
          </p>

        </div>

        {/* ========================================================= */}
        {/* DIRECT INQUIRY FORM SECTION                               */}
        {/* ========================================================= */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xl shadow-slate-200/40 relative overflow-hidden">
            {/* Soft decorative ambient gradient in corner */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-100/50 via-indigo-50/30 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-14 px-4 space-y-6"
              >
                <div className="w-20 h-20 rounded-3xl bg-emerald-50 border-2 border-emerald-500/30 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/15">
                  <CheckCircle2 className="w-11 h-11" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you for contacting us, <span className="font-semibold text-slate-900">{formData.fullName || 'there'}</span>. An AiBizzApp technical consultant has been assigned to your request and will follow up at <span className="font-semibold text-[#0066cc]">{formData.email}</span> shortly.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100/80 max-w-md mx-auto text-left text-xs text-slate-600 space-y-1.5">
                  <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#0066cc]" />
                    What happens next:
                  </div>
                  <p>1. Our solution team analyzes your organizational requirements.</p>
                  <p>2. We prepare an initial architectural summary &amp; customized feature list.</p>
                  <p>3. We schedule an interactive live walkthrough tailored to your workflows.</p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ fullName: '', email: '', phone: '', company: '', message: '' })
                    }}
                    className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold transition-all cursor-pointer shadow-xs active:scale-[0.98]"
                  >
                    Send another inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <div className="relative z-10">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-[#0066cc] text-xs font-bold uppercase tracking-wider border border-blue-100 mb-2.5">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Direct Inquiry Form</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                    Send us a message
                  </h2>
                  <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
                    Share your requirements with us and our enterprise specialists will respond with tailored specifications and pricing.
                  </p>
                </div>


                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="John Doe"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200/90 focus:border-[#0066cc] focus:ring-4 focus:ring-blue-500/10 outline-none text-sm transition-all text-slate-900 placeholder:text-slate-400 bg-slate-50/50 hover:bg-white focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Business Email *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@company.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200/90 focus:border-[#0066cc] focus:ring-4 focus:ring-blue-500/10 outline-none text-sm transition-all text-slate-900 placeholder:text-slate-400 bg-slate-50/50 hover:bg-white focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200/90 focus:border-[#0066cc] focus:ring-4 focus:ring-blue-500/10 outline-none text-sm transition-all text-slate-900 placeholder:text-slate-400 bg-slate-50/50 hover:bg-white focus:bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Briefcase className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Acme Global Inc."
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200/90 focus:border-[#0066cc] focus:ring-4 focus:ring-blue-500/10 outline-none text-sm transition-all text-slate-900 placeholder:text-slate-400 bg-slate-50/50 hover:bg-white focus:bg-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message or Requirements *
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your organization, current ERP setup, required apps, user count, or timeline..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200/90 focus:border-[#0066cc] focus:ring-4 focus:ring-blue-500/10 outline-none text-sm transition-all text-slate-900 placeholder:text-slate-400 bg-slate-50/50 hover:bg-white focus:bg-white resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0066cc] to-[#0052a3] hover:from-[#005bb5] hover:to-[#004080] text-white font-semibold text-sm sm:text-base transition-all shadow-lg shadow-blue-600/25 active:scale-[0.99] flex items-center justify-center gap-2.5 cursor-pointer group"
                    >
                      <span>Send Inquiry Message</span>
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>


                </form>
              </div>
            )}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 3. FREQUENTLY ASKED INQUIRIES SECTION                     */}
        {/* ========================================================= */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-xl shadow-slate-200/30">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5 text-[#0066cc]" />
              <span>Got Questions?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-slate-500 mt-2">
              Answers to common queries regarding implementation, security, and enterprise onboarding.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/50 overflow-hidden transition-all duration-200 hover:border-blue-300/80"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0066cc]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/40">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>


        </div>

      </div>
    </div>
  )
}
