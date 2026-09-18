import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  Send,
  CheckCircle2,
  ExternalLink,
  Phone,
  MapPin,
  X
} from 'lucide-react'
import contactMapImg from '../assets/contact/map_only.png'

export default function Contact({ onNavigate }) {
  const [showFormModal, setShowFormModal] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setShowFormModal(false)
      setFormData({ fullName: '', email: '', phone: '', message: '' })
    }, 2000)
  }

  return (
    <div className="pt-32 pb-24 bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-950 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section matching screenshot */}
        <div className="mb-10">
          <span className="text-xs font-semibold tracking-wider text-[#0066cc] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
            CONTACT
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Get in touch
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Want to write to us or have a question or comment? Write in, we would love to hear from you.
          </p>
        </div>

        {/* ========================================================= */}
        {/* CALL SUPPORT & HEAD OFFICE CARDS                         */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          
          {/* Card 1: Call Support */}
          <a
            href="tel:+966539845000"
            className="rounded-2xl bg-[#0e0a24] hover:bg-[#150f38] border border-purple-500/30 hover:border-purple-400/50 p-5 sm:p-6 flex items-center gap-4 sm:gap-5 shadow-xl transition-all duration-300 group cursor-pointer text-white"
          >
            <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#1b123d] border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-inner group-hover:scale-105 group-hover:text-white transition-all shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-purple-300/80 mb-1 flex items-center gap-2">
                <span>Call Support</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-tight group-hover:text-purple-200 transition-colors truncate">
                +966 53 984 5000
              </div>
              <div className="text-xs text-slate-400 mt-1 flex items-center gap-2">
                <span>India: +91-80-66655771</span>
                <span className="text-slate-600">•</span>
                <span className="text-purple-300 font-medium">24/7 Dedicated Line</span>
              </div>
            </div>
          </a>

          {/* Card 2: Head Office */}
          <div className="rounded-2xl bg-[#0e0a24] border border-purple-500/30 p-5 sm:p-6 flex items-center justify-between gap-4 shadow-xl transition-all duration-300 text-white">
            <div className="flex items-center gap-4 sm:gap-5 min-w-0">
              <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-[#1b123d] border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-inner shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-purple-300/80 mb-1">
                  Head Office
                </div>
                <div className="text-base sm:text-lg font-bold text-white tracking-tight leading-tight truncate">
                  65 Aura Avenue, Nepean, K2J 6R9
                </div>
                <div className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
                  Ontario, Canada
                </div>
              </div>
            </div>

            {/* Glowing Live Location Beacon */}
            <div className="w-9 h-9 rounded-full bg-purple-500/15 border border-purple-400/30 flex items-center justify-center shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_10px_#fff]" />
            </div>
          </div>

        </div>

        {/* Contact Information Details Grid matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-7 gap-x-12 mb-7">
          {/* E-mail */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              E-mail
            </h3>
            <a
              href="mailto:hello@aibizz.app"
              className="text-sm text-slate-700 hover:text-slate-950 transition-colors"
            >
              hello@aibizz.app
            </a>
          </div>

          {/* India Phone */}
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              India
            </h3>
            <a
              href="tel:+914048970555"
              className="text-sm text-slate-700 hover:text-slate-950 transition-colors"
            >
              +91 40 4897 0555
            </a>
          </div>

          {/* Office */}
          <div className="sm:col-span-2">
            <h3 className="text-sm font-bold text-slate-900 mb-1">
              Office
            </h3>
            <address className="not-italic text-sm text-slate-700 leading-relaxed">
              AiBizz Technologies Pvt. Ltd.,<br />
              Level 4, Cyber Towers, HITEC City, Madhapur,<br />
              Hyderabad, Telangana 500081, India
            </address>
          </div>
        </div>

        {/* Get in touch Button matching screenshot */}
        <div className="mb-10">
          <button
            onClick={() => setShowFormModal(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0066cc] hover:bg-[#0052a3] text-white text-sm font-semibold transition-all shadow-xs active:scale-95 cursor-pointer"
          >
            <span>Get in touch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Map Section for Hyderabad Office */}
        <div className="rounded-3xl border border-slate-200 shadow-lg overflow-hidden bg-slate-100 relative group h-[400px] sm:h-[480px]">
          <iframe
            title="AiBizz Technologies Hyderabad Office"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.294246835165!2d78.3743513759359!3d17.44754708345037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688beb557fa0ee!2sCyber%20Towers%2C%20HITEC%20City%2C%20Hyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-md border border-slate-200 text-xs font-semibold text-slate-800 flex items-center gap-1.5 hover:text-blue-600 transition-colors z-10">
            <a
              href="https://maps.google.com/?q=Cyber+Towers+HITEC+City+Hyderabad+Telangana+500081"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>

      {/* Interactive Contact Inquiry Modal */}
      <AnimatePresence>
        {showFormModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 relative"
            >
              {/* Close button */}
              <button
                onClick={() => setShowFormModal(false)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Thank you!
                  </h3>
                  <p className="text-sm text-slate-600">
                    Your message has been sent successfully. Our team will reach out to you shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                      SEND A MESSAGE
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">
                      Write to us
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill in the details below and we'll get right back to you.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all text-slate-800"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all text-slate-800"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all text-slate-800"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Message
                      </label>
                      <textarea
                        rows="4"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your requirements or questions..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all text-slate-800 resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-[#0066cc] hover:bg-[#0052a3] text-white font-semibold text-sm transition-all shadow-md shadow-blue-900/20 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
