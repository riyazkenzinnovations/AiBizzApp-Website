import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Send,
  CheckCircle2,
  ExternalLink,
  Phone,
  MapPin,
  Mail,
  Building2,
  Globe2,
  Headphones,
  Clock,
  ShieldCheck,
  Sparkles,
  Copy,
  Check,
  MessageSquare
} from 'lucide-react'

export default function Contact({ onNavigate }) {
  const [submitted, setSubmitted] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState('Enterprise ERP')
  const [copiedField, setCopiedField] = useState(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const topics = [
    { id: 'Enterprise ERP', label: 'Enterprise ERP' },
    { id: 'AiBizz Cloud', label: 'AiBizz Cloud' },
    { id: 'Custom AI Agents', label: 'AI & Automation' },
    { id: 'Partnership', label: 'Partnership' },
    { id: 'General Inquiry', label: 'General Inquiry' }
  ]

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text)
    setCopiedField(fieldName)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-[#fbfcfd] text-slate-900 min-h-screen">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/70 via-indigo-50/30 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================= */}
        {/* 1. HERO HEADER SECTION                                    */}
        {/* ========================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-xs mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-semibold text-[#0066cc] uppercase tracking-wider">
              Contact &amp; Global Offices
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight sm:leading-none">
            Get in Touch with <span className="text-[#0066cc]">AiBizz</span>
          </h1>
          
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Want to write to us, request an enterprise demonstration, or discuss custom business workflows? Our regional specialists and solution architects are here for you.
          </p>

          {/* Key Value Badges */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
              <Clock className="w-3.5 h-3.5 text-[#0066cc]" />
              <span>&lt; 15 Min First Response</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
              <Headphones className="w-3.5 h-3.5 text-emerald-600" />
              <span>24/7 Dedicated Engineering Support</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
              <span>Enterprise ISO 27001 &amp; NDA Protected</span>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. MAIN 2-COLUMN SECTION: FORM + OFFICES                  */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mb-16 items-start">
          
          {/* LEFT COLUMN: DIRECT INTERACTIVE INQUIRY FORM (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xl shadow-slate-200/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-100/40 to-indigo-100/20 rounded-full blur-2xl pointer-events-none -z-0" />
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-14 px-4 space-y-5"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500/30 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Inquiry Received!
                </h3>
                <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="font-semibold text-slate-900">{formData.fullName || 'there'}</span>. An AiBizz enterprise consultant has been assigned to your request and will contact you at <span className="font-semibold text-[#0066cc]">{formData.email}</span> shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false)
                      setFormData({ fullName: '', email: '', phone: '', company: '', message: '' })
                    }}
                    className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold transition-all cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              </motion.div>
            ) : (
              <div>
                <div className="mb-7">
                  <span className="text-[11px] font-bold tracking-wider text-[#0066cc] uppercase bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
                    Direct Inquiry
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
                    Send us a message
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Select your topic and share your requirements. We'll respond with tailored technical and pricing details.
                  </p>
                </div>

                {/* Topic Selector Pills */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-2">
                    What can we help you with?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setSelectedTopic(t.id)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          selectedTopic === t.id
                            ? 'bg-[#0066cc] text-white shadow-xs'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200/90 focus:border-[#0066cc] focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all text-slate-900 placeholder:text-slate-400 bg-slate-50/50 hover:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200/90 focus:border-[#0066cc] focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all text-slate-900 placeholder:text-slate-400 bg-slate-50/50 hover:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200/90 focus:border-[#0066cc] focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all text-slate-900 placeholder:text-slate-400 bg-slate-50/50 hover:bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200/90 focus:border-[#0066cc] focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all text-slate-900 placeholder:text-slate-400 bg-slate-50/50 hover:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message or Requirements *
                    </label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your organization, required ERP modules, number of users, or any specific challenges..."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200/90 focus:border-[#0066cc] focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all text-slate-900 placeholder:text-slate-400 bg-slate-50/50 hover:bg-white resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white font-semibold text-sm sm:text-base transition-all shadow-md shadow-blue-600/20 active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Send Inquiry Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      100% confidential &amp; NDA protected
                    </span>
                    <span>No spam guarantee</span>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: GLOBAL HUBS & DIRECT CHANNELS (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* HUB 1: INDIA HEADQUARTERS (CYBER TOWERS) */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-lg shadow-slate-200/30 transition-all hover:border-blue-300">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 text-[#0066cc] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0066cc] bg-blue-50 px-2 py-0.5 rounded">
                      Global Tech HQ
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      AiBizz Technologies Pvt. Ltd.
                    </h3>
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 text-sm text-slate-600 pt-1">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Level 4, Cyber Towers, HITEC City, Madhapur, Hyderabad, Telangana 500081, India
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2 border-t border-slate-100">
                  <a
                    href="tel:+914048970555"
                    className="flex items-center gap-2 text-slate-800 font-semibold hover:text-[#0066cc] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#0066cc]" />
                    <span>+91 40 4897 0555</span>
                  </a>
                  <a
                    href="mailto:hello@aibizz.app"
                    className="flex items-center gap-2 text-slate-800 font-semibold hover:text-[#0066cc] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#0066cc]" />
                    <span>hello@aibizz.app</span>
                  </a>
                </div>
              </div>
            </div>

            {/* HUB 2: NORTH AMERICA HEAD OFFICE (CANADA) */}
            <div className="rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-lg shadow-slate-200/30 transition-all hover:border-purple-300">
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-purple-50 border border-purple-200 text-purple-600 flex items-center justify-center shrink-0">
                    <Globe2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded">
                      North America Hub
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      Head Office • Canada
                    </h3>
                  </div>
                </div>
              </div>

              <div className="space-y-3.5 text-sm text-slate-600 pt-1">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    65 Aura Avenue, Nepean, K2J 6R9, Ontario, Canada
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-purple-600" />
                    <span>09:00 AM – 06:00 PM EST</span>
                  </div>
                  <span className="font-semibold text-slate-700">Dedicated Regional Liaison</span>
                </div>
              </div>
            </div>

            {/* CARD 3: 24/7 DEDICATED SUPPORT & SALES CHANNELS */}
            <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-[#0d162a] p-6 sm:p-7 text-white shadow-xl shadow-slate-900/10">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-300">
                    24/7 Dedicated Support
                  </span>
                </div>
                <span className="text-[11px] font-medium bg-white/10 px-2.5 py-0.5 rounded-full text-slate-300">
                  Worldwide
                </span>
              </div>

              <div className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                Priority Enterprise Line
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center justify-between py-1 border-b border-white/10">
                  <span className="text-slate-400">Direct Desk / WhatsApp:</span>
                  <a href="tel:+914048970555" className="text-white font-semibold hover:text-blue-300 transition-colors">
                    +91 40 4897 0555
                  </a>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-white/10">
                  <span className="text-slate-400">Global Customer Email:</span>
                  <a href="mailto:hello@aibizz.app" className="text-white font-semibold hover:text-blue-300 transition-colors">
                    hello@aibizz.app
                  </a>
                </div>
                <div className="flex items-center justify-between py-1">
                  <span className="text-slate-400">Enterprise Procurement:</span>
                  <a href="mailto:sales@aibizz.app" className="text-white font-semibold hover:text-blue-300 transition-colors">
                    sales@aibizz.app
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* 3. INTERACTIVE MAP OF HYDERABAD CYBER TOWERS HQ            */}
        {/* ========================================================= */}
        <div className="rounded-3xl border border-slate-200/90 shadow-xl shadow-slate-200/40 overflow-hidden bg-white relative mb-16">
          <div className="px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#0066cc] mb-0.5">
                On-Site Visit &amp; Navigation
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                AiBizz Technologies • Cyber Towers, HITEC City
              </h3>
            </div>

            <a
              href="https://maps.google.com/?q=Cyber+Towers+HITEC+City+Hyderabad+Telangana+500081"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 hover:bg-blue-100 text-[#0066cc] text-xs font-semibold border border-blue-200/80 transition-all shadow-xs shrink-0 self-start sm:self-auto cursor-pointer"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative h-[380px] sm:h-[440px] w-full bg-slate-100">
            <iframe
              title="AiBizz Technologies Hyderabad Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.294246835165!2d78.3743513759359!3d17.44754708345037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sCyber%20Towers%2C%20HITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Info Tag in Map */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-200 text-xs text-slate-800 hidden sm:block max-w-xs">
              <div className="font-bold text-slate-900 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#0066cc]" />
                Level 4, Cyber Towers
              </div>
              <div className="text-slate-500 mt-0.5">
                HITEC City, Madhapur, Hyderabad
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 4. FREQUENTLY ASKED INQUIRIES SECTION                     */}
        {/* ========================================================= */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-lg shadow-slate-200/30">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Quick answers before scheduling your consultation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70">
              <div className="font-bold text-sm text-slate-900 mb-1.5">
                How fast can we deploy?
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standard cloud instances are activated within 24 hours. Full multi-company enterprise migrations typically complete in 2 to 4 weeks with dedicated support.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70">
              <div className="font-bold text-sm text-slate-900 mb-1.5">
                Do you support on-premise hosting?
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Yes. AiBizz offers private cloud, sovereign country hosting, and on-premise containerized Kubernetes clusters for high-compliance sectors.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70">
              <div className="font-bold text-sm text-slate-900 mb-1.5">
                Can we customize workflows?
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Absolutely. Our built-in No-Code Workflow Builder, custom scripts, REST APIs, and webhook engines give you total flexibility.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
