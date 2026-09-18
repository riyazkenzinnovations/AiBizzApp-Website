import React from 'react'
import {
  Hammer,
  HardHat,
  Building,
  Ruler,
  Clock,
  ShieldCheck,
  Truck,
  FileText,
  DollarSign,
  Boxes,
  CheckCircle2,
  Calendar
} from 'lucide-react'
import IndustryTemplate from './IndustryTemplate'
import constructionImg from '../../assets/industry/construction.jpg'

export default function Construction({ onNavigate }) {
  const challenges = [
    {
      icon: DollarSign,
      iconBg: 'bg-rose-50 text-rose-600',
      title: 'Project Budget & Cost Overruns',
      desc: 'Unmonitored subcontractor variations, raw material price surges, and delayed client milestone billing eroding contract margins.'
    },
    {
      icon: Ruler,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'Discrepancies in Measurement Sheets',
      desc: 'Disputes over work done between contractor joint measurement sheets (JMS), site engineers, and billing engineers.'
    },
    {
      icon: Truck,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Site Material Wastage & Pilferage',
      desc: 'Steel, cement, and aggregate losses at distant project sites without geo-tagged material receipt and consumption tracking.'
    },
    {
      icon: Clock,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Equipment Downtime & Idle Machinery',
      desc: 'Unscheduled breakdowns of cranes, excavators, and generators stalling critical path project milestones.'
    }
  ]

  const whySolutions = [
    {
      icon: DollarSign,
      title: 'Real-Time Job Costing & Milestone Billing',
      desc: 'Connect procurement, labor timesheets, and equipment fuel logs to specific WBS codes for live project profitability.'
    },
    {
      icon: Ruler,
      title: 'Digital Joint Measurement Sheets (JMS)',
      desc: 'Mobile-enabled digital measurement entries with photo verification and automatic RA (Running Account) bill generation.'
    },
    {
      icon: HardHat,
      title: 'Heavy Equipment Telemetry & Maintenance',
      desc: 'Track machine operating hours, preventive service intervals, fuel consumption ratios, and idle hours.'
    }
  ]

  const functionalSections = [
    {
      badge: 'PROJECT GOVERNANCE',
      title: 'Work Breakdown Structure (WBS) & Scheduling',
      description: 'Break down multi-million dollar projects into traceable milestones, budgets, and subcontractor packages.',
      icon: Building,
      items: [
        'Multi-tier WBS hierarchy with CPM critical path tracking',
        'Subcontractor measurement and retention money management',
        'Mobile daily progress reports (DPR) with GPS site check-in',
        'Automated Running Account (RA) client billing with tax TDS'
      ]
    },
    {
      badge: 'PROCUREMENT & PLANT',
      title: 'Site Material Requisition & Heavy Plant Machinery',
      description: 'Ensure materials arrive on schedule and monitor equipment utilization across nationwide sites.',
      icon: Truck,
      items: [
        'Site indent to central warehouse automated requisition',
        'Steel reinforcement bar (Rebar) cutting wastage logs',
        'Fleet maintenance, engine hours & diesel logbook',
        'Subcontractor safety compliance & induction tracking'
      ]
    }
  ]

  const faqs = [
    {
      q: 'How does AiBizz handle subcontractor billing and retention money?',
      a: 'It automates subcontractor work orders, tracks certified measurement quantities, and automatically withholds contract retention percentages and statutory TDS until final defect liability sign-off.'
    },
    {
      q: 'Can site supervisors log progress from mobile devices?',
      a: 'Yes. Site engineers can enter Daily Progress Reports (DPR), upload site photos, log labor headcounts, and record material arrivals offline or online via mobile.'
    },
    {
      q: 'Does it integrate with Primavera and MS Project?',
      a: 'Yes. You can import and export Gantt schedules, task milestones, and resource allocation baselines directly into AiBizz ERP.'
    }
  ]

  return (
    <IndustryTemplate
      badge="All-in-One Construction Suite"
      titlePrefix="ERP Software Solutions for"
      highlightWord="Construction & Real Estate"
      subtitle="Project milestone billing, sub-contractor measurement sheets, equipment telematics, material requisition workflows, and job profitability."
      trustPoints={['Earned Value Analysis (EVA)', 'Subcontractor Retention Automation', 'Mobile DPR Logging']}
      heroImage={constructionImg}
      heroHud={{
        badge: 'PROJECT LIVE • 99.4% ON SCHEDULE',
        statLabel: 'BILLING RECON',
        statValue: '2.5X Faster Approvals'
      }}
      overview={{
        title: 'Modern Infrastructure Operations',
        p1: 'General contractors, civil EPC firms, and real estate developers operate across dispersed construction sites with volatile raw material prices and stringent completion penalties (liquidated damages).',
        subheading: 'Deliver Complex Projects on Time and Under Budget',
        p2: 'AiBizz Construction ERP unites engineering estimates, site material indenting, subcontractor measurement sheets, and corporate finance into a single pane of glass.'
      }}
      challenges={challenges}
      whySolutions={whySolutions}
      functionalSections={functionalSections}
      faqs={faqs}
      onNavigate={onNavigate}
    />
  )
}
