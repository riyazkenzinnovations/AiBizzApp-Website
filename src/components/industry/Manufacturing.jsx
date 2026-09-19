import React from 'react'
import {
  Factory,
  Cpu,
  Layers,
  Wrench,
  Gauge,
  Clock,
  Boxes,
  ShieldCheck,
  CheckCircle2,
  FileText,
  AlertTriangle,
  GitMerge
} from 'lucide-react'
import IndustryTemplate from './IndustryTemplate'
import manufacturingImg from '../../assets/industry-images/engineering.jpeg'

export default function Manufacturing({ onNavigate }) {
  const challenges = [
    {
      icon: Layers,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'BOM Complexity & Engineering Changes',
      desc: 'Managing multi-level nested Bill of Materials (BOM) and frequent Engineering Change Orders (ECO) without assembly floor errors.'
    },
    {
      icon: Wrench,
      iconBg: 'bg-orange-50 text-orange-600',
      title: 'Unplanned Machine Downtime',
      desc: 'Sudden breakdown of key shop-floor machinery causing expensive idle labor, missed production deadlines, and elevated repair costs.'
    },
    {
      icon: Clock,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Shop Floor & WIP Blindness',
      desc: 'Lack of real-time visibility into Work-in-Progress (WIP) batches, workstation bottlenecks, and true job completion percentages.'
    },
    {
      icon: Boxes,
      iconBg: 'bg-purple-50 text-purple-600',
      title: 'Raw Material Shortages & Delays',
      desc: 'Stock mismatches and erratic supplier lead times causing assembly lines to stall while holding excess inventory on slow-moving items.'
    }
  ]

  const whySolutions = [
    {
      icon: Boxes,
      title: 'Automated MRP II & Material Indents',
      desc: 'Translate sales orders and demand forecasts into automated material purchase requisitions and time-phased production schedules.'
    },
    {
      icon: Cpu,
      title: 'Digital Shop Floor Job Cards & Kiosks',
      desc: 'Simplified barcode-driven touchscreen UI for operators to start, pause, record scrap, and complete operations in real time.'
    },
    {
      icon: Gauge,
      title: 'Dynamic Standard vs. Actual Costing',
      desc: 'Compare estimated standard costs against actual consumed raw materials, labor hours, and overheads to capture profit leakage instantly.'
    }
  ]

  const functionalSections = [
    {
      badge: 'PRODUCTION PLANNING & WORK ORDERS',
      title: 'Multi-Level BOMs, Work Orders & Capacity Scheduling',
      description: 'Balance machine capacities, prioritize production queues, and dispatch work orders seamlessly.',
      icon: Factory,
      items: [
        'Multi-level nested BOM engine with scrap percentages and alternative substitute materials',
        'Visual drag-and-drop production scheduling to avoid machine overburdening and align with delivery dates',
        'Automated work orders generated from sales orders with immediate stock reservation',
        'Comprehensive subcontracting control for raw material transfers and external job-work billing'
      ]
    },
    {
      badge: 'SHOP FLOOR & QUALITY CONTROL',
      title: 'Workstation Execution, OEE & Lot Traceability',
      description: 'Empower floor operators with touchscreen kiosks and enforce rigorous quality checks at every station.',
      icon: Gauge,
      items: [
        'Operator kiosk interface with barcode scanning for quick time and piece logging',
        'Live Overall Equipment Effectiveness (OEE) tracking with automated downtime reason categorization',
        'In-process dimensional quality inspections with digital inspection log approval',
        'End-to-end forward and backward lot traceability from supplier heat number to finished customer delivery'
      ]
    }
  ]

  const faqs = [
    {
      q: 'How does AiBizz handle multi-level nested Bills of Materials (BOM)?',
      a: 'AiBizz supports unlimited levels of sub-assemblies. You can define operations, workstation routings, scrap allowances, and alternative substitute materials with full version control.'
    },
    {
      q: 'Can operators log work order progress directly from shop floor tablets?',
      a: 'Yes. The operator kiosk interface is optimized for touchscreen tablets and barcode scanners, allowing workers to punch in, log good/scrap pieces, and view technical drawings.'
    },
    {
      q: 'Does it support subcontracting and third-party job-work?',
      a: 'Yes. You can issue raw materials to external subcontractors, track processing losses, record inbound finished parts, and automatically reconcile job-work invoices.'
    }
  ]

  return (
    <IndustryTemplate
      badge="All-in-One Manufacturing Suite"
      titlePrefix="ERP Software Solutions for"
      highlightWord="Discrete & Process Manufacturing"
      subtitle="Multi-level Bill of Materials (BOM), production scheduling, shop floor execution, scrap tracking, predictive maintenance, and real-time job costing."
      trustPoints={['Multi-Level Nested BOM Engine', 'Shop Floor Touchscreen Kiosks', 'Automated MRP II & Indents']}
      heroImage={manufacturingImg}
      heroHud={{
        badge: 'SHOP FLOOR LIVE • 96.4% OEE',
        statLabel: 'YIELD EFFICIENCY',
        statValue: '+32% Throughput Gain'
      }}
      overview={{
        title: 'Intelligent Digital Manufacturing',
        p1: 'Manufacturers navigate intense supply chain volatility, tight engineering tolerances, and the critical challenge of keeping high-value machines running without unpredicted downtime or raw material shortages.',
        subheading: 'Gain Total Visibility From Raw Material to Finished Pallet',
        p2: 'AiBizz Manufacturing ERP unifies CAD engineering bills of materials, visual drag-and-drop production scheduling, operator kiosk work orders, and perpetual inventory into an intelligent operational core.'
      }}
      challenges={challenges}
      whySolutions={whySolutions}
      functionalSections={functionalSections}
      faqs={faqs}
      onNavigate={onNavigate}
    />
  )
}
