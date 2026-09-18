import React from 'react'
import {
  Phone,
  MapPin,
  Mail,
  Linkedin,
  Twitter,
  Youtube,
  Facebook
} from 'lucide-react'
import logoImg from '../assets/AiBizzApp.jpeg'

export default function Footer({ onNavigate }) {
  // Navigation links structured 100% as per Navbar.jsx

  // 1. ERP Modules (Matches Navbar 'Modules' dropdown)
  const modulesLinks = [
    { name: 'Accounting', route: 'accounting' },
    { name: 'Procurement', href: '#procurement' },
    { name: 'Sales & CRM', href: '#sales' },
    { name: 'Stock & Inventory', href: '#stock' },
    { name: 'Manufacturing ERP', route: 'manufacturing' },
    { name: 'HR & Global Payroll', href: '#hr-payroll' },
    { name: 'Point of Sale (POS)', href: '#pos' },
    { name: 'Projects & Tasks', href: '#projects' },
    { name: 'Quality Inspection', href: '#quality' },
  ]

  // 2. Industry Solutions (Matches Navbar 'Industry' dropdown)
  const industryLinks = [
    { name: 'Manufacturing', route: 'manufacturing' },
    { name: 'Healthcare', route: 'healthcare' },
    { name: 'Fintech', route: 'fintech' },
    { name: 'Logistics', route: 'logistics' },
    { name: 'Agriculture', route: 'agriculture' },
    { name: 'Hospitality', route: 'hospitality' },
    { name: 'Construction', route: 'construction' },
    { name: 'Education', route: 'education' },
    { name: 'Retail & Trading', route: 'trading' },
  ]

  // 3. Services & Ecosystem (Matches Navbar 'Services' and 'Platform & Ecosystem')
  const servicesEcosystemLinks = [
    { name: 'Ecosystem Apps', route: 'apps' },
    { name: 'Enterprise Services', href: '#enterprise' },
    { name: 'AiBizz Cloud Hosting', href: '#cloud' },
    { name: 'AiBizz Academy', href: '#academy' },
    { name: 'Customers & Success', href: '#customers' },
    { name: 'Partners Network', href: '#partners' },
    { name: 'API & Webhooks', href: '#apps' },
    { name: 'Custom Connectors', href: '#contact' },
    { name: 'System Integrations', href: '#apps' },
  ]

  // 4. Resources & Platform (Matches Navbar 'Resources & Company' and Platform)
  const resourcesPlatformLinks = [
    { name: 'Pricing Plans', route: 'pricing' },
    { name: 'Documentation', href: '#docs' },
    { name: 'Community Forum', href: '#forum' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact us', route: 'contact' },
    { name: 'About AiBizz', href: '#about' },
    { name: 'Security & Privacy', href: '#security' },
    { name: 'Release Notes', href: '#apps' },
    { name: 'Status & Uptime', href: '#status' },
  ]

  const handleNavClick = (target, e) => {
    if (e) e.preventDefault()
    if (!target) return
    const cleanRoute = target.replace(/^#/, '')

    // Direct page routing supported in App.jsx
    const directRoutes = [
      'home',
      'apps',
      'pricing',
      'contact',
      'accounting',
      'manufacturing',
      'ecommerce',
      'construction',
      'education',
      'electronics',
      'engineering',
      'fintech',
      'healthcare',
      'agriculture',
      'hospitality',
      'logistics',
      'trading',
      'commodities-trading',
      'mining',
      'pharmaceutical'
    ]

    if (directRoutes.includes(cleanRoute)) {
      if (onNavigate) onNavigate(cleanRoute)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    // Anchor hash scrolling on the active page
    const el = document.getElementById(cleanRoute)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
      return
    }

    // If anchor is on home page but currently on another page, navigate home first
    if (onNavigate) {
      onNavigate('home')
      setTimeout(() => {
        const targetEl = document.getElementById(cleanRoute)
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' })
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }, 100)
      return
    }

    // Fallback
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-[#f0f3f8] border-t border-slate-200 text-slate-700 pt-12 pb-8 relative select-text font-sans">
      <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row: Brand Info + 4 Equal Nav Columns spanning full container width */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-10 xl:gap-14 pb-8 border-b border-slate-300/70 w-full">
          
          {/* Column 1: Brand Info, Direct Contact Channels & Socials */}
          {/* Left Column: Brand, Value Proposition, Contact Details & Socials */}
          <div className="w-full lg:w-[340px] xl:w-[380px] shrink-0 space-y-6">
            
            {/* Logo matching Navbar */}
            <div
              onClick={(e) => handleNavClick('home', e)}
              className="flex items-center gap-3 cursor-pointer shrink-0 select-none group inline-flex"
            >
              <img
                src={logoImg}
                alt="AiBizzApp Logo"
                className="h-11 w-11 rounded-xl object-cover shadow-xs border border-slate-200 group-hover:scale-105 transition-transform shrink-0"
              />
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-[30px] font-bold tracking-tight text-slate-900">
                  AiBizzApp<span className="text-[#0066cc]">.</span>
                </span>
              </div>
            </div>

            {/* Subtitle / Platform summary */}
            <p className="text-base sm:text-[17px] text-slate-600 leading-relaxed max-w-sm font-normal">
              Empower your enterprise with AiBizzApp. Unified AI-driven ERP, CRM, Financial Accounting, Supply Chain, and 60+ ecosystem integrations.
            </p>

            {/* Direct Contact Channels */}
            <div className="space-y-4 pt-1">

              {/* Contact Number */}
              <div className="flex items-start gap-3 text-slate-800">
                <Phone className="w-5 h-5 text-slate-500 mt-1 shrink-0" />
                <div className="space-y-0.5">
                  <div className="text-sm sm:text-[15px] text-slate-500 font-medium">Contact Number</div>
                  <a
                    href="tel:+966539845000"
                    className="text-lg sm:text-xl font-bold text-slate-900 hover:text-[#0066cc] tracking-tight block whitespace-nowrap transition-colors"
                  >
                    +966 53 984 5000
                  </a>
                </div>
              </div>

              {/* Head Office Address */}
              <div className="flex items-start gap-3 text-slate-800">
                <MapPin className="w-5 h-5 text-slate-500 mt-1 shrink-0" />
                <div className="space-y-0.5">
                  <div className="text-sm sm:text-[15px] text-slate-500 font-medium">Head Office</div>
                  <div className="text-base sm:text-[17px] font-bold text-slate-900 leading-snug">
                    65 Aura Avenue, Nepean, K2J 6R9
                  </div>
                  <div className="text-sm sm:text-[15px] text-slate-600 font-medium">
                    Ontario, Canada
                  </div>
                </div>
              </div>

            </div>

            {/* Connect With Us */}
            <div className="pt-3 border-t border-slate-200/80">
              <div className="text-sm sm:text-[15px] font-bold tracking-wider text-slate-500 uppercase mb-3">
                Connect With Us
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-[#0066cc] hover:bg-blue-50 text-slate-600 hover:text-[#0066cc] flex items-center justify-center transition-all shadow-xs cursor-pointer"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-[#0066cc] hover:bg-blue-50 text-slate-600 hover:text-[#0066cc] flex items-center justify-center transition-all shadow-xs cursor-pointer"
                >
                  <Twitter className="w-4.5 h-4.5" />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-[#0066cc] hover:bg-blue-50 text-slate-600 hover:text-[#0066cc] flex items-center justify-center transition-all shadow-xs cursor-pointer"
                >
                  <Youtube className="w-4.5 h-4.5" />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-[#0066cc] hover:bg-blue-50 text-slate-600 hover:text-[#0066cc] flex items-center justify-center transition-all shadow-xs cursor-pointer"
                >
                  <Facebook className="w-4.5 h-4.5" />
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick('contact', e)}
                  aria-label="Email Contact"
                  className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-[#0066cc] hover:bg-blue-50 text-slate-600 hover:text-[#0066cc] flex items-center justify-center transition-all shadow-xs cursor-pointer"
                >
                  <Mail className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

          </div>

          {/* 4 Equal Navigation Columns spanning 100% of the remaining width to the right margin */}
          <div className="w-full lg:flex-1 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-6 xl:gap-8">
            
            {/* Column 2: ERP MODULES */}
            <div className="min-w-0">
              <h3 className="text-base sm:text-[17px] font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 pb-3 mb-4 border-b border-slate-200/80">
                <span>ERP Modules</span>
              </h3>
              <ul className="space-y-3">
                {modulesLinks.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href || `#${item.route}`}
                      onClick={(e) => handleNavClick(item.route || item.href, e)}
                      className="text-base sm:text-[16.5px] text-slate-600 hover:text-[#0066cc] transition-colors leading-normal flex items-center gap-2 cursor-pointer group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: INDUSTRY SOLUTIONS */}
            <div className="min-w-0">
              <h3 className="text-base sm:text-[17px] font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 pb-3 mb-4 border-b border-slate-200/80">
                <span>Industry Solutions</span>
              </h3>
              <ul className="space-y-3">
                {industryLinks.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href || `#${item.route}`}
                      onClick={(e) => handleNavClick(item.route || item.href, e)}
                      className="text-base sm:text-[16.5px] text-slate-600 hover:text-[#0066cc] transition-colors leading-normal flex items-center gap-2 cursor-pointer group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: SERVICES & ECOSYSTEM */}
            <div className="min-w-0">
              <h3 className="text-base sm:text-[17px] font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 pb-3 mb-4 border-b border-slate-200/80">
                <span>Services &amp; Apps</span>
              </h3>
              <ul className="space-y-3">
                {servicesEcosystemLinks.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href || `#${item.route}`}
                      onClick={(e) => handleNavClick(item.route || item.href, e)}
                      className="text-base sm:text-[16.5px] text-slate-600 hover:text-[#0066cc] transition-colors leading-normal flex items-center gap-2 cursor-pointer group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: PLATFORM */}
            <div className="min-w-0">
              <h3 className="text-base sm:text-[17px] font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 pb-3 mb-4 border-b border-slate-200/80">
                <span>Platform</span>
              </h3>
              <ul className="space-y-3">
                {resourcesPlatformLinks.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href || `#${item.route}`}
                      onClick={(e) => handleNavClick(item.route || item.href, e)}
                      className="text-base sm:text-[16.5px] text-slate-600 hover:text-[#0066cc] transition-colors leading-normal flex items-center gap-2 cursor-pointer group"
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{item.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[15px] sm:text-base text-slate-500">
          <div>
            © {new Date().getFullYear()} <span className="font-semibold text-slate-800">AiBizzApp Inc.</span> All rights reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2 text-[15px] sm:text-base">
            <a
              href="#privacy"
              onClick={(e) => handleNavClick('privacy', e)}
              className="text-slate-500 hover:text-[#0066cc] transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="#terms"
              onClick={(e) => handleNavClick('terms', e)}
              className="text-slate-500 hover:text-[#0066cc] transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
            <span className="text-slate-300">•</span>
            <a
              href="#security"
              onClick={(e) => handleNavClick('security', e)}
              className="text-slate-500 hover:text-[#0066cc] transition-colors cursor-pointer"
            >
              Security &amp; Compliance
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
