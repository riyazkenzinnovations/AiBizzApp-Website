import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Boxes,
  Factory,
  CreditCard,
  Users,
  Globe2,
  BookOpen,
  Mail,
  Info,
  Sparkles,
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Bot,
  Cpu,
  Layers,
  BarChart3,
  HelpCircle,
  FileText,
  HardHat,
  GraduationCap,
  Cog,
  Landmark,
  Stethoscope,
  Sprout,
  Hotel,
  Truck,
  Pickaxe,
  Pill,
  ShoppingBag,
  ArrowRight,
  Calculator,
  TrendingUp,
  Briefcase,
  Store,
  ShieldCheck,
  Headphones,
  UserCheck,
  Sliders
} from 'lucide-react'
import logoImg from '../assets/AiBizzApp.jpeg'

export default function Navbar({ currentPage = 'home', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [showDocs, setShowDocs] = useState(false)
  const navRef = useRef(null)

  // Keep dropdown open until user clicks an option or clicks outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Navigation structure based on AiBizzApp sidebar / dropdown design
  const navSections = [
    {
      title: 'Solutions & Modules',
      items: [
        {
          name: 'Modules',
          icon: Boxes,
          hasDropdown: true,
          badge: 'New',
          children: [
            { name: 'Accounting', icon: Calculator, href: '#accounting' },
            { name: 'Procurement', icon: ShoppingBag, href: '#procurement' },
            { name: 'Sales', icon: TrendingUp, href: '#sales' },
            { name: 'CRM', icon: Users, href: '#crm' },
            { name: 'Stock', icon: Boxes, href: '#stock' },
            { name: 'Manufacturing', icon: Factory, href: '#manufacturing' },
            { name: 'Projects', icon: Briefcase, href: '#projects' },
            { name: 'Assets', icon: Layers, href: '#assets' },
            { name: 'Point of Sale', icon: Store, href: '#pos' },
            { name: 'Quality', icon: ShieldCheck, href: '#quality' },
            { name: 'Support', icon: Headphones, href: '#support' },
            { name: 'HR & Payroll', icon: UserCheck, href: '#hr-payroll' },
            { name: 'No-Code Builder', icon: Sliders, href: '#builder' }
          ]
        },
        {
          name: 'Industry',
          icon: Factory,
          hasDropdown: true,
          children: [
            { name: 'Construction', icon: HardHat, href: '#construction' },
            { name: 'Education', icon: GraduationCap, href: '#education' },
            { name: 'Electronics', icon: Cpu, href: '#electronics' },
            { name: 'Engineering', icon: Cog, href: '#engineering' },
            { name: 'Fintech', icon: Landmark, href: '#fintech' },
            { name: 'Healthcare', icon: Stethoscope, href: '#healthcare' },
            { name: 'Agriculture', icon: Sprout, href: '#agriculture' },
            { name: 'Hospitality', icon: Hotel, href: '#hospitality' },
            { name: 'Logistics', icon: Truck, href: '#logistics' },
            { name: 'Mining', icon: Pickaxe, href: '#mining' },
            { name: 'Pharmaceutical', icon: Pill, href: '#pharmaceutical' }
          ]
        },
        {
          name: 'Services',
          hasDropdown: true,
          children: [
            { name: 'Enterprise', href: '#enterprise' },
            { name: 'AiBizz Cloud', href: '#cloud' },
            { name: 'AiBizz Academy', href: '#academy' }
          ]
        }
      ]
    },
    {
      title: 'Platform & Ecosystem',
      items: [
        { name: 'Ecosystem Apps', icon: Layers, href: '#apps', route: 'apps' },
        { name: 'Pricing', icon: CreditCard, href: '#pricing' },
        { name: 'Customers', icon: Users, href: '#customers' },
        { name: 'Partners', icon: Globe2, href: '#partners' }
      ]
    },
    {
      title: 'Resources & Company',
      items: [
        {
          name: 'Resources',
          icon: FileText,
          hasDropdown: true,
          children: [
            { name: 'Documentation', desc: 'APIs, SDKs and setup guides' },
            { name: 'Community Forum', desc: 'Ask questions and collaborate' },
            { name: 'Case Studies', desc: 'Real-world customer success' }
          ]
        },
        { name: 'Contact us', icon: Mail, href: '#contact', active: true },
        { name: 'About AiBizz', icon: Info, href: '#about' }
      ]
    }
  ]

  const toggleDropdown = (name) => {
    setOpenDropdown(prev => (prev === name ? null : name))
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 w-full transition-all text-slate-800 shadow-xs">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-3 xl:px-8 w-full">
        <div className="flex items-center justify-between h-16 xl:h-20">
          
          {/* 1. Left: Brand Logo */}
          <div 
            onClick={() => {
              if (onNavigate) onNavigate('home')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-2 xl:gap-3 cursor-pointer shrink-0 select-none group"
          >
            <img
              src={logoImg}
              alt="AiBizz Logo"
              className="h-8 w-8 xl:h-10 xl:w-10 rounded-xl object-cover shadow-xs border border-slate-200 group-hover:scale-105 transition-transform shrink-0"
            />
            <div className="flex items-center gap-1.5 xl:gap-2">
              <span className="text-lg xl:text-2xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
                AiBizzApp
              </span>
            </div>
          </div>

          {/* 2. Center: Desktop Navigation Bar */}
          <nav ref={navRef} className="hidden lg:flex items-center gap-0.5 xl:gap-1">
            {/* 1. Modules Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('Modules')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => toggleDropdown('Modules')}
                className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-3 py-1.5 xl:py-2 rounded-xl text-sm xl:text-base font-medium transition-all whitespace-nowrap cursor-pointer ${
                  openDropdown === 'Modules'
                    ? 'text-[#0066cc] bg-blue-50/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                <span>Modules</span>
                <ChevronDown className={`w-3 h-3 xl:w-3.5 xl:h-3.5 transition-transform duration-200 ${openDropdown === 'Modules' ? 'rotate-180 text-[#0066cc]' : 'text-slate-400'}`} />
              </button>

              <AnimatePresence>
                {openDropdown === 'Modules' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-2 w-[460px] sm:w-[480px] max-w-[92vw] p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-300/40 z-50 text-slate-800 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
                  >
                    <div className="grid grid-cols-2 gap-x-1.5 gap-y-0.5 max-h-[72vh] overflow-y-auto pr-0.5">
                      {navSections[0].items[0].children.map((sub, idx) => {
                        const SubIcon = sub.icon
                        const subHash = sub.href ? sub.href.replace('#', '') : ''
                        const isSubActive = currentPage === subHash || (subHash === 'builder' && (currentPage === 'no-code-builder' || currentPage === 'builder'))
                        return (
                          <div key={idx} className="space-y-0.5">
                            <a
                              href={sub.href}
                              onClick={(e) => {
                                e.preventDefault()
                                const targetPage = subHash === 'builder' ? 'no-code-builder' : subHash
                                if (onNavigate) onNavigate(targetPage)
                                setOpenDropdown(null)
                              }}
                              className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl transition-all group ${
                                isSubActive
                                  ? 'bg-blue-50 text-[#0066cc] font-semibold shadow-xs'
                                  : 'text-slate-700 hover:text-[#0066cc] hover:bg-blue-50/60'
                              }`}
                            >
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                                isSubActive
                                  ? 'bg-[#0066cc] text-white border border-[#0066cc]'
                                  : 'bg-blue-50 text-[#0066cc] border border-blue-100/80 group-hover:bg-[#0066cc] group-hover:text-white group-hover:border-[#0066cc]'
                              }`}>
                                {SubIcon && <SubIcon className="w-4 h-4" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold truncate leading-tight group-hover:text-[#0066cc] transition-colors">
                                  {sub.name}
                                </div>
                              </div>
                            </a>
                          </div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. Industry Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('Industry')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => toggleDropdown('Industry')}
                className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-3 py-1.5 xl:py-2 rounded-xl text-sm xl:text-base font-medium transition-all whitespace-nowrap cursor-pointer ${
                  openDropdown === 'Industry'
                    ? 'text-[#0066cc] bg-blue-50/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                <span>Industry</span>
                <ChevronDown className={`w-3 h-3 xl:w-3.5 xl:h-3.5 transition-transform duration-200 ${openDropdown === 'Industry' ? 'rotate-180 text-[#0066cc]' : 'text-slate-400'}`} />
              </button>

              <AnimatePresence>
                {openDropdown === 'Industry' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 lg:-left-12 xl:left-0 mt-2 w-[510px] sm:w-[530px] max-w-[92vw] p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xl shadow-slate-300/40 z-50 text-slate-800 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
                  >
                    <div className="grid grid-cols-2 gap-x-1.5 gap-y-0.5 py-0.5 max-h-[72vh] overflow-y-auto pr-0.5">
                      {navSections[0].items[1].children.map((sub, idx) => {
                        const SubIcon = sub.icon
                        const subSlug = sub.name.toLowerCase().replace(/\s+/g, '-')
                        const isSubActive = currentPage === subSlug
                        return (
                          <div key={idx} className="space-y-0.5">
                            <a
                              href={sub.href || '#industry'}
                              onClick={(e) => {
                                e.preventDefault()
                                if (onNavigate) onNavigate(subSlug)
                                setOpenDropdown(null)
                              }}
                              className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded-xl transition-all group ${
                                isSubActive
                                  ? 'bg-blue-50 text-[#0066cc] font-semibold shadow-xs'
                                  : 'text-slate-700 hover:text-[#0066cc] hover:bg-blue-50/60'
                              }`}
                            >
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all ${
                                isSubActive
                                  ? 'bg-[#0066cc] text-white border border-[#0066cc]'
                                  : 'bg-blue-50 text-[#0066cc] border border-blue-100/80 group-hover:bg-[#0066cc] group-hover:text-white group-hover:border-[#0066cc]'
                              }`}>
                                {SubIcon && <SubIcon className="w-4 h-4" />}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-semibold truncate leading-tight group-hover:text-[#0066cc] transition-colors">
                                  {sub.name}
                                </div>
                              </div>
                            </a>

                            {sub.subItems && (
                              <div className="pl-11 pr-2 pb-1 space-y-1">
                                {sub.subItems.map((child, cIdx) => {
                                  const ChildIcon = child.icon
                                  const childSlug = 'commodities-trading'
                                  const isChildActive = currentPage === childSlug
                                  return (
                                    <a
                                      key={cIdx}
                                      href={child.href}
                                      onClick={(e) => {
                                        e.preventDefault()
                                        if (onNavigate) onNavigate(childSlug)
                                        setOpenDropdown(null)
                                      }}
                                      className={`flex items-center gap-2 px-2.5 py-1.5 text-xs rounded-lg transition-colors ${
                                        isChildActive
                                          ? 'text-[#0066cc] bg-blue-50 font-semibold'
                                          : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                                      }`}
                                    >
                                      {ChildIcon && <ChildIcon className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />}
                                      <span className="truncate">{child.name}</span>
                                    </a>
                                  )
                                })}
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('Services')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => toggleDropdown('Services')}
                className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-3 py-1.5 xl:py-2 rounded-xl text-sm xl:text-base font-medium transition-all whitespace-nowrap cursor-pointer ${
                  openDropdown === 'Services'
                    ? 'text-[#0066cc] bg-blue-50/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-3 h-3 xl:w-3.5 xl:h-3.5 transition-transform duration-200 ${openDropdown === 'Services' ? 'rotate-180 text-[#0066cc]' : 'text-slate-400'}`} />
              </button>

              <AnimatePresence>
                {openDropdown === 'Services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-0 mt-2 w-52 p-2 rounded-2xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60 z-50 text-slate-800 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
                  >
                    <div className="px-3 py-2 text-xs font-semibold text-slate-800 border-b border-slate-100 mb-1">
                      <span>Enterprise Services</span>
                    </div>
                    <div className="py-1 space-y-0.5">
                      {navSections[0].items[2].children.map((srv, idx) => (
                        <a
                          key={idx}
                          href={srv.href}
                          onClick={() => {
                            if (currentPage !== 'home' && onNavigate) onNavigate('home')
                            setOpenDropdown(null)
                          }}
                          className="block px-3 py-2 rounded-xl text-sm font-medium text-slate-700 hover:text-[#0066cc] hover:bg-blue-50/70 transition-colors"
                        >
                          {srv.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. Ecosystem Apps */}
            <button
              onClick={() => {
                if (onNavigate) onNavigate('apps')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className={`px-2 xl:px-3 py-1.5 xl:py-2 rounded-xl text-sm xl:text-base font-medium transition-all whitespace-nowrap cursor-pointer ${
                currentPage === 'apps'
                  ? 'text-[#0066cc] bg-blue-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
              }`}
            >
              <span>Ecosystem Apps</span>
            </button>

            {/* 5. Pricing */}
            <button
              onClick={() => {
                if (onNavigate) onNavigate('pricing')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className={`px-2 xl:px-3 py-1.5 xl:py-2 rounded-xl text-sm xl:text-base font-medium transition-all whitespace-nowrap cursor-pointer ${
                currentPage === 'pricing'
                  ? 'text-[#0066cc] bg-blue-50 font-semibold'
                  : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
              }`}
            >
              <span>Pricing</span>
            </button>

            {/* 6. Customers */}
            <a
              href="#customers"
              onClick={() => {
                if (currentPage !== 'home' && onNavigate) onNavigate('home')
              }}
              className="px-2 xl:px-3 py-1.5 xl:py-2 rounded-xl text-sm xl:text-base font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 transition-all whitespace-nowrap"
            >
              <span>Customers</span>
            </a>

            {/* 7. Partners */}
            <a
              href="#partners"
              onClick={() => {
                if (currentPage !== 'home' && onNavigate) onNavigate('home')
              }}
              className="px-2 xl:px-3 py-1.5 xl:py-2 rounded-xl text-sm xl:text-base font-medium text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 transition-all whitespace-nowrap"
            >
              <span>Partners</span>
            </a>

            {/* 8. Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('Resources')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                onClick={() => toggleDropdown('Resources')}
                className={`flex items-center gap-1 xl:gap-1.5 px-2 xl:px-3 py-1.5 xl:py-2 rounded-xl text-sm xl:text-base font-medium transition-all whitespace-nowrap cursor-pointer ${
                  openDropdown === 'Resources'
                    ? 'text-[#0066cc] bg-blue-50/80 font-semibold'
                    : 'text-slate-600 hover:text-slate-950 hover:bg-slate-100/80'
                }`}
              >
                <span>Resources</span>
                <ChevronDown className={`w-3 h-3 xl:w-3.5 xl:h-3.5 transition-transform duration-200 ${openDropdown === 'Resources' ? 'rotate-180 text-[#0066cc]' : 'text-slate-400'}`} />
              </button>

              <AnimatePresence>
                {openDropdown === 'Resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 xl:left-0 mt-2 w-64 p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xl shadow-slate-200/60 z-50 text-slate-800 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3"
                  >
                    <div className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-800 border-b border-slate-100 mb-1">
                      <FileText className="w-4 h-4 text-[#0066cc]" />
                      <span>Resources</span>
                    </div>
                    <div className="py-1 space-y-1">
                      <button
                        onClick={() => {
                          setShowDocs(true)
                          setOpenDropdown(null)
                        }}
                        className="w-full text-left flex items-start gap-2.5 px-3 py-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-blue-50/80 transition-colors group cursor-pointer"
                      >
                        <BookOpen className="w-4 h-4 text-[#0066cc] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0066cc] transition-colors flex items-center gap-1.5">
                            <span>Documentation</span>
                            <span className="text-[10px] bg-blue-100 text-[#0066cc] px-1.5 py-0.2 rounded font-bold">Docs</span>
                          </div>
                          <div className="text-xs text-slate-500">
                            APIs, SDKs, setup guides &amp; user manual
                          </div>
                        </div>
                      </button>

                      <a
                        href="#forum"
                        onClick={() => {
                          if (currentPage !== 'home' && onNavigate) onNavigate('home')
                          setOpenDropdown(null)
                        }}
                        className="flex items-start gap-2.5 px-3 py-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-colors group"
                      >
                        <Users className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0066cc] transition-colors">
                            Community Forum
                          </div>
                          <div className="text-xs text-slate-500">
                            Ask questions, discuss &amp; collaborate
                          </div>
                        </div>
                      </a>

                      <a
                        href="#case-studies"
                        onClick={() => {
                          if (currentPage !== 'home' && onNavigate) onNavigate('home')
                          setOpenDropdown(null)
                        }}
                        className="flex items-start gap-2.5 px-3 py-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-colors group"
                      >
                        <FileText className="w-4 h-4 text-purple-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-[#0066cc] transition-colors">
                            Case Studies
                          </div>
                          <div className="text-xs text-slate-500">
                            Real-world enterprise customer stories
                          </div>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* 3. Right: Action Buttons Group */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-3 shrink-0">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('contact')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className={`px-2 xl:px-3.5 py-1.5 xl:py-2 rounded-xl text-sm xl:text-base font-medium transition-all whitespace-nowrap cursor-pointer ${
                currentPage === 'contact'
                  ? 'text-[#0066cc] bg-blue-50 font-semibold'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/80'
              }`}
            >
              <span>Contact us</span>
            </button>

            <button
              onClick={() => {
                if (onNavigate) onNavigate('contact')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-1.5 xl:gap-2 px-3 xl:px-5 py-1.5 xl:py-2.5 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white font-semibold text-sm xl:text-base transition-all shadow-md shadow-blue-600/15 hover:shadow-lg hover:shadow-blue-600/25 active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-slate-200 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Clean White Theme matching Website) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-slate-200 bg-white px-5 py-6 max-h-[85vh] overflow-y-auto shadow-2xl text-slate-800"
          >
            {navSections.map((section, sIdx) => (
              <div key={sIdx} className="mb-6 last:mb-0">
                <div className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-3">
                  {section.title}
                </div>
                <div className="space-y-1">
                  {section.items.map((item, iIdx) => {
                    const Icon = item.icon
                    const isExpanded = openDropdown === item.name

                    if (item.hasDropdown) {
                      return (
                        <div key={iIdx} className="rounded-xl overflow-hidden">
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="w-5 h-5 text-slate-600" />
                              <span className="font-medium text-sm text-slate-800">{item.name}</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-slate-900' : 'text-slate-400'}`} />
                          </button>

                          {isExpanded && (
                            <div className="pl-6 pr-2 py-2 space-y-1 bg-slate-50/70 rounded-xl my-1 border-l-2 border-slate-200 ml-4">
                              {item.children.map((sub, subIdx) => {
                                const subSlug = sub.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
                                const isSubActive =
                                  (sub.name === 'Accounting' && currentPage === 'accounting') ||
                                  currentPage === subSlug

                                const SubIcon = sub.icon
                                return (
                                  <div key={subIdx} className="space-y-0.5">
                                    <a
                                      href={sub.href || '#module'}
                                      onClick={(e) => {
                                        if (sub.name === 'Accounting') {
                                          e.preventDefault()
                                          if (onNavigate) onNavigate('accounting')
                                        } else if (item.name === 'Industry') {
                                          e.preventDefault()
                                          if (onNavigate) onNavigate(subSlug)
                                        } else if (item.name === 'Resources' && sub.name === 'Documentation') {
                                          e.preventDefault()
                                          setShowDocs(true)
                                        } else if (currentPage !== 'home' && onNavigate) {
                                          onNavigate('home')
                                        }
                                        setMobileMenuOpen(false)
                                      }}
                                      className={`flex items-center gap-2.5 text-sm py-1.5 px-3 rounded-lg transition-colors font-medium ${
                                        isSubActive
                                          ? 'text-[#0066cc] bg-[#eef4ff] font-semibold'
                                          : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/60'
                                      }`}
                                    >
                                      {SubIcon && item.name === 'Industry' && (
                                        <SubIcon className="w-4 h-4 text-[#ea580c] shrink-0" strokeWidth={1.8} />
                                      )}
                                      <span>{sub.name}</span>
                                    </a>

                                    {sub.subItems && sub.subItems.map((child, cIdx) => {
                                      const ChildIcon = child.icon
                                      const childSlug = 'commodities-trading'
                                      const isChildActive = currentPage === childSlug
                                      return (
                                        <a
                                          key={cIdx}
                                          href={child.href}
                                          onClick={(e) => {
                                            e.preventDefault()
                                            if (onNavigate) onNavigate(childSlug)
                                            setMobileMenuOpen(false)
                                          }}
                                          className={`flex items-center gap-2 pl-8 pr-3 py-1 text-xs font-medium rounded-md ${
                                            isChildActive
                                              ? 'text-[#0066cc] bg-[#eef4ff]'
                                              : 'text-slate-600 hover:text-[#0066cc]'
                                          }`}
                                        >
                                          {ChildIcon && (
                                            <ChildIcon className="w-3.5 h-3.5 text-[#ea580c] shrink-0" strokeWidth={1.8} />
                                          )}
                                          <span>{child.name}</span>
                                        </a>
                                      )
                                    })}
                                  </div>
                                )
                              })}
                            </div>
                          )}
                        </div>
                      )
                    }

                    if (item.name === 'Pricing') {
                      return (
                        <button
                          key={iIdx}
                          onClick={() => {
                            if (onNavigate) onNavigate('pricing')
                            setMobileMenuOpen(false)
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors text-left cursor-pointer ${
                            currentPage === 'pricing'
                              ? 'bg-blue-50 text-blue-600 font-semibold border border-blue-100'
                              : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                          }`}
                        >
                          <Icon className="w-5 h-5 text-slate-600" />
                          <span className="text-slate-800">{item.name}</span>
                        </button>
                      )
                    }

                    if (item.name === 'Ecosystem Apps' || item.route === 'apps') {
                      return (
                        <button
                          key={iIdx}
                          onClick={() => {
                            if (onNavigate) onNavigate('apps')
                            setMobileMenuOpen(false)
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors text-left cursor-pointer ${
                            currentPage === 'apps'
                              ? 'bg-blue-50 text-blue-600 font-semibold border border-blue-100'
                              : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                          }`}
                        >
                          <Icon className="w-5 h-5 text-slate-600" />
                          <span className="text-slate-800">{item.name}</span>
                        </button>
                      )
                    }

                    if (item.name === 'Contact us') {
                      return (
                        <button
                          key={iIdx}
                          onClick={() => {
                            if (onNavigate) onNavigate('contact')
                            setMobileMenuOpen(false)
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                          }}
                          className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors text-left cursor-pointer ${
                            currentPage === 'contact'
                              ? 'bg-blue-50 text-blue-600 font-semibold border border-blue-100'
                              : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                          }`}
                        >
                          <Icon className="w-5 h-5 text-slate-600" />
                          <span className="text-slate-800">{item.name}</span>
                        </button>
                      )
                    }

                    return (
                      <a
                        key={iIdx}
                        href={item.href}
                        onClick={() => {
                          if (currentPage !== 'home' && onNavigate) onNavigate('home')
                          setMobileMenuOpen(false)
                        }}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                          item.active && currentPage === 'home'
                            ? 'bg-slate-100 text-slate-900 font-semibold border border-slate-200'
                            : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                        }`}
                      >
                        <Icon className="w-5 h-5 text-slate-600" />
                        <span>{item.name}</span>
                      </a>
                    )
                  })}
                </div>
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <button
                onClick={() => {
                  if (onNavigate) onNavigate('contact')
                  setMobileMenuOpen(false)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="w-full py-3 rounded-lg bg-[#0066cc] hover:bg-[#0052a3] text-white font-semibold text-sm transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Documentation Modal */}
      <AnimatePresence>
        {showDocs && (
          <div 
            onClick={() => setShowDocs(false)}
            className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 select-text"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0066cc] flex items-center justify-center shadow-xs border border-blue-100">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-blue-50 text-[#0066cc] text-[10px] font-bold uppercase tracking-wider mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Knowledge Base</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      AiBizzApp Documentation &amp; Guides
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setShowDocs(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-all cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Doc Resources Grid */}
              <div className="py-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div 
                  onClick={() => {
                    setShowDocs(false)
                    if (onNavigate) onNavigate('contact')
                  }}
                  className="p-4 rounded-2xl border border-slate-200/90 hover:border-[#0066cc] hover:bg-blue-50/40 transition-all cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-2.5 shadow-xs">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors flex items-center justify-between">
                    <span>Getting Started Guide</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    First-time cloud workspace setup, company profile creation &amp; admin configuration.
                  </p>
                </div>

                <div 
                  onClick={() => {
                    setShowDocs(false)
                    if (onNavigate) onNavigate('contact')
                  }}
                  className="p-4 rounded-2xl border border-slate-200/90 hover:border-[#0066cc] hover:bg-blue-50/40 transition-all cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-2.5 shadow-xs">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors flex items-center justify-between">
                    <span>REST API &amp; Webhooks</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Token authentication, DocType CRUD endpoints, webhooks, and third-party sync APIs.
                  </p>
                </div>

                <div 
                  onClick={() => {
                    setShowDocs(false)
                    if (onNavigate) onNavigate('apps')
                  }}
                  className="p-4 rounded-2xl border border-slate-200/90 hover:border-[#0066cc] hover:bg-blue-50/40 transition-all cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-600 text-white flex items-center justify-center mb-2.5 shadow-xs">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors flex items-center justify-between">
                    <span>Module Manuals</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Complete reference for Accounting, HR, CRM, Stock, Manufacturing &amp; Buying.
                  </p>
                </div>

                <div 
                  onClick={() => {
                    setShowDocs(false)
                    if (onNavigate) onNavigate('contact')
                  }}
                  className="p-4 rounded-2xl border border-slate-200/90 hover:border-[#0066cc] hover:bg-blue-50/40 transition-all cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center mb-2.5 shadow-xs">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors flex items-center justify-between">
                    <span>Hosting &amp; Migration</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Cloud deployment specifications, automated backups, and data migration guides.
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                <span>Need customized developer documentation or enterprise SLA support?</span>
                <button
                  onClick={() => {
                    setShowDocs(false)
                    if (onNavigate) onNavigate('contact')
                  }}
                  className="px-4 py-2 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white font-semibold transition-all cursor-pointer whitespace-nowrap shadow-xs"
                >
                  Contact Technical Support
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  )
}
