import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import ERPModules from './components/ERPModules'
import AIBusinessTiles from './components/AIBusinessTiles'
import KeyFeatures from './components/KeyFeatures'
import Industries from './components/Industries'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Accounting from './components/Modules/Accounting'
import Procurement from './components/Modules/Procurement'
import Sales from './components/Modules/Sales'
import CRM from './components/Modules/CRM'
import Stock from './components/Modules/Stock'
import Projects from './components/Modules/Projects'
import Assets from './components/Modules/Assets'
import PointOfSale from './components/Modules/PointOfSale'
import Quality from './components/Modules/Quality'
import Support from './components/Modules/Support'
import HRPayroll from './components/Modules/HRPayroll'
import NoCodeBuilder from './components/Modules/NoCodeBuilder'
import Manufacturing from './components/Modules/Manufacturing'
import Ecommerce from './components/industry/Ecommerce'
import Construction from './components/industry/Construction'
import Education from './components/industry/Education'
import Electronics from './components/industry/Electronics'
import Engineering from './components/industry/Engineering'
import Fintech from './components/industry/Fintech'
import Healthcare from './components/industry/Healthcare'
import Agriculture from './components/industry/Agriculture'
import Hospitality from './components/industry/Hospitality'
import Logistics from './components/industry/Logistics'
import Trading from './components/industry/Trading'
import CommoditiesTrading from './components/industry/CommoditiesTrading'
import Mining from './components/industry/Mining'
import Pharmaceutical from './components/industry/Pharmaceutical'
import Contact from './components/Contact'
import AppServices from './components/AppServices'
import Footer from './components/Footer'

const industryComponents = {
  construction: Construction,
  education: Education,
  electronics: Electronics,
  engineering: Engineering,
  fintech: Fintech,
  healthcare: Healthcare,
  agriculture: Agriculture,
  hospitality: Hospitality,
  logistics: Logistics,
  trading: Trading,
  'commodities-trading': CommoditiesTrading,
  mining: Mining,
  pharmaceutical: Pharmaceutical
}

export default function App() {
  const KNOWN_PAGES = ['pricing', 'accounting', 'procurement', 'sales', 'crm', 'stock', 'projects', 'assets', 'pos', 'quality', 'support', 'hr-payroll', 'no-code-builder', 'builder', 'manufacturing', 'ecommerce', 'contact', 'apps']

  const getPageFromHash = () => {
    const hash = window.location.hash.replace(/^#/, '').trim()
    if (KNOWN_PAGES.includes(hash) || industryComponents[hash]) return hash
    if (!hash || hash === 'home') return 'home'
    return 'home'
  }

  const [currentPage, setCurrentPage] = useState(getPageFromHash)

  useEffect(() => {
    const handleHash = () => {
      setCurrentPage(getPageFromHash())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', handleHash)
    return () => window.removeEventListener('hashchange', handleHash)
  }, [])

  const handleNavigate = (page) => {
    setCurrentPage(page)
    if (page === 'home') {
      window.history.pushState(null, '', window.location.pathname)
    } else {
      window.location.hash = `#${page}`
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const ActiveIndustryComponent = industryComponents[currentPage]

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0066cc] selection:text-white relative overflow-hidden">
      {/* Modular Navbar Component */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === 'pricing' ? (
        <Pricing onNavigate={handleNavigate} />
      ) : currentPage === 'accounting' ? (
        <Accounting onNavigate={handleNavigate} />
      ) : currentPage === 'procurement' ? (
        <Procurement onNavigate={handleNavigate} />
      ) : currentPage === 'sales' ? (
        <Sales onNavigate={handleNavigate} />
      ) : currentPage === 'crm' ? (
        <CRM onNavigate={handleNavigate} />
      ) : currentPage === 'stock' ? (
        <Stock onNavigate={handleNavigate} />
      ) : currentPage === 'projects' ? (
        <Projects onNavigate={handleNavigate} />
      ) : currentPage === 'assets' ? (
        <Assets onNavigate={handleNavigate} />
      ) : currentPage === 'pos' ? (
        <PointOfSale onNavigate={handleNavigate} />
      ) : currentPage === 'quality' ? (
        <Quality onNavigate={handleNavigate} />
      ) : currentPage === 'support' ? (
        <Support onNavigate={handleNavigate} />
      ) : currentPage === 'hr-payroll' ? (
        <HRPayroll onNavigate={handleNavigate} />
      ) : (currentPage === 'no-code-builder' || currentPage === 'builder') ? (
        <NoCodeBuilder onNavigate={handleNavigate} />
      ) : currentPage === 'manufacturing' ? (
        <Manufacturing onNavigate={handleNavigate} />
      ) : currentPage === 'ecommerce' ? (
        <Ecommerce onNavigate={handleNavigate} />
      ) : currentPage === 'contact' ? (
        <Contact onNavigate={handleNavigate} />
      ) : currentPage === 'apps' ? (
        <AppServices onNavigate={handleNavigate} />
      ) : ActiveIndustryComponent ? (
        <ActiveIndustryComponent onNavigate={handleNavigate} />
      ) : (
        <main>
          {/* Modular Hero Section */}
          <Hero onNavigate={handleNavigate} />

          {/* SAP-Style Business AI Across Domains Section */}
          <AIBusinessTiles onNavigate={handleNavigate} />

          {/* Why Choose Us Section */}
          <WhyChooseUs onNavigate={handleNavigate} />

          {/* Key Features (Interactive Tabs & Dashboard Mockup) */}
          <KeyFeatures onNavigate={handleNavigate} />

          {/* Modules of AiBizzApp (10+ Years Track Record Carousel) - Middle of Home Page */}
          <ERPModules onNavigate={handleNavigate} />

          {/* Industries Section */}
          <Industries onNavigate={handleNavigate} />

          {/* Testimonials: Trusted by Clients Globally */}
          <Testimonials onNavigate={handleNavigate} />
        </main>
      )}

      {/* Footer Section */}
      <Footer currentPage={currentPage} onNavigate={handleNavigate} />
    </div>
  )
}
