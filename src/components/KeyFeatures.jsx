import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

// Import the downloaded feature screenshots
import accountingImg from '../assets/image212282.webp'
import procurementImg from '../assets/imagedb5c1e.webp'
import salesImg from '../assets/imagef4764b.webp'
import crmImg from '../assets/ERPNexte2a3b6.png'
import stockImg from '../assets/image98c3bd.webp'
import manufacturingImg from '../assets/image23e960.webp'
import projectsImg from '../assets/image8a0940.webp'
import posImg from '../assets/image553752.webp'
import qualityImg from '../assets/image60bb1d.webp'
import supportImg from '../assets/imageec0ab1.webp'

export default function KeyFeatures({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('Accounting')

  const tabs = [
    { id: 'Accounting', label: 'Accounting' },
    { id: 'Procurement', label: 'Procurement' },
    { id: 'Sales', label: 'Sales' },
    { id: 'CRM', label: 'CRM' },
    { id: 'Stock', label: 'Stock' },
    { id: 'Manufacturing', label: 'Manufacturing' },
    { id: 'Projects', label: 'Projects' },
    { id: 'POS', label: 'POS' },
    { id: 'Quality', label: 'Quality' },
    { id: 'Support', label: 'Support' },
  ]

  const tabData = {
    Accounting: {
      title: 'Accounting',
      image: accountingImg,
      checklist: [
        'Multi-subsidiary, Multi-currency',
        'Financial statements',
        'General ledger',
        'Fixed assets',
        'Accounts payable/receivable',
        'Global tax and compliance'
      ]
    },
    Procurement: {
      title: 'Procurement',
      image: procurementImg,
      checklist: [
        'Automated Purchase Orders',
        'Supplier lifecycle management',
        'Request for Quotation (RFQ)',
        'Purchase Analytics & Reports',
        'Real-time Vendor Scorecards',
        '3-Way Invoice Matching'
      ]
    },
    Sales: {
      title: 'Sales',
      image: salesImg,
      checklist: [
        'Multi-channel Quote Generator',
        'Sales pipeline analytics',
        'Automated Invoice Generation',
        'Customer subscription recurring',
        'Commission tracking',
        'Opportunity pipeline scoring'
      ]
    },
    CRM: {
      title: 'CRM',
      image: crmImg,
      checklist: [
        '360° Customer Profiles',
        'Omnichannel Messaging Sync',
        'Autonomous Follow-up Agents',
        'Lead qualification & routing',
        'Customer health scores',
        'Support ticket integration'
      ]
    },
    Stock: {
      title: 'Stock',
      image: stockImg,
      checklist: [
        'Multi-warehouse real-time sync',
        'Batch & Serial tracking',
        'Automated Reorder Alerts',
        'Barcode / RFID Scanner Support',
        'Stock Valuation (FIFO, LIFO)',
        'Automated Stock Reconciliation'
      ]
    },
    Manufacturing: {
      title: 'Manufacturing',
      image: manufacturingImg,
      checklist: [
        'Bill of Materials (Multi-level BOM)',
        'Shop floor & Workstation tracking',
        'Production Capacity Planning',
        'Predictive Machine Maintenance',
        'Sub-contracting management',
        'Real-time Quality Inspections'
      ]
    },
    Projects: {
      title: 'Projects',
      image: projectsImg,
      checklist: [
        'Gantt charts & Kanban boards',
        'Timesheet & Billing integration',
        'Resource workload balancing',
        'Milestone tracking & Budgets',
        'Cost-to-complete forecasting',
        'Agile sprints & Backlogs'
      ]
    },
    POS: {
      title: 'Point of Sale (POS)',
      image: posImg,
      checklist: [
        'Offline-first retail checkout',
        'Omnichannel payment gateways',
        'Barcode scanning & Cash drawers',
        'Loyalty programs & Discounts',
        'Shift management & Registers',
        'Real-time receipt printing & SMS'
      ]
    },
    Quality: {
      title: 'Quality',
      image: qualityImg,
      checklist: [
        'Incoming inspection criteria',
        'In-process & Final checkpoints',
        'Non-conformance reports (NCR)',
        'Corrective & Preventive Action (CAPA)',
        'Sampling plans (AQL standards)',
        'Audits & Compliance certificates'
      ]
    },
    Support: {
      title: 'Support',
      image: supportImg,
      checklist: [
        'AI Ticket routing & auto-triage',
        'Multi-channel inbox (Email, Chat, WhatsApp)',
        'SLA tracking & Escalation rules',
        'Knowledge base self-service',
        'Customer CSAT surveys',
        'Autonomous AI resolution agent'
      ]
    }
  }

  const current = tabData[activeTab]

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] border-b border-slate-200/70 text-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Eyebrow & Title */}
        <div className="mb-12 text-left">
          <span className="text-xs font-semibold tracking-wider text-[#0066cc] uppercase bg-blue-50/80 px-3 py-1 rounded-full border border-blue-100 inline-block">
            Key Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight mt-3 leading-tight">
            Run your entire business on one platform
          </h2>
          <p className="mt-3 text-slate-600 text-base max-w-2xl">
            Integrated business applications engineered for seamless scalability, operational precision, and real-time control.
          </p>
        </div>

        {/* Tabs Row */}
        <div className="flex border-b border-slate-200 overflow-x-auto no-scrollbar gap-2 sm:gap-6 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-3 pt-1 px-2 text-base sm:text-lg font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  isActive ? 'text-[#0066cc] font-bold' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <span>{tab.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0066cc] rounded-full"
                    transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="space-y-8"
          >
            {/* Section Sub-heading */}
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              {current.title}
            </h3>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3.5 gap-x-8 max-w-3xl">
              {current.checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-md bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#0066cc]" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Actual Feature Image from Screenshots */}
            <div className="rounded-2xl border border-slate-200/90 bg-white shadow-xl shadow-slate-200/50 overflow-hidden p-1.5 sm:p-2.5">
              <img
                src={current.image}
                alt={`${current.title} Screenshot Preview`}
                className="w-full h-auto object-cover rounded-xl"
                loading="lazy"
              />
            </div>

            {/* Know More link */}
            <div className="pt-2">
              <button
                onClick={() => {
                  if (activeTab === 'Accounting' && onNavigate) {
                    onNavigate('accounting')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  } else if (activeTab === 'Manufacturing' && onNavigate) {
                    onNavigate('manufacturing')
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
                className="inline-flex items-center gap-2 text-base font-semibold text-[#0066cc] hover:text-[#0052a3] transition-colors group cursor-pointer"
              >
                <span>Know more about {current.title}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
