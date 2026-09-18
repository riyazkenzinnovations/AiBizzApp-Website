import React from 'react'
import {
  Zap,
  Cpu,
  Boxes,
  QrCode,
  ShieldAlert,
  RotateCcw,
  CheckCircle2,
  Settings,
  Clock,
  Layers,
  Wrench,
  FileCheck
} from 'lucide-react'
import IndustryTemplate from './IndustryTemplate'
import elecImg from '../../assets/industry/electronics.jpg'

export default function Electronics({ onNavigate }) {
  const challenges = [
    {
      icon: QrCode,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'Component Serial & IMEI Traceability',
      desc: 'Inability to track individual PCB boards, microchips, and finished products across multi-tier assembly lines.'
    },
    {
      icon: RotateCcw,
      iconBg: 'bg-rose-50 text-rose-600',
      title: 'High RMA Warranty & Return Costs',
      desc: 'Disorganized reverse logistics, slow customer RMA turnaround, and lack of component-level failure root-cause analysis.'
    },
    {
      icon: ShieldAlert,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Component Obsolescence & Shortages',
      desc: 'Rapid semiconductor lifecycles and global chip shortages causing sudden production shutdowns without alternate BOM mapping.'
    },
    {
      icon: Settings,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Stringent SMT Quality & ESD Standards',
      desc: 'High scrap rates during Surface Mount Technology (SMT) reflow without real-time machine parameter monitoring.'
    }
  ]

  const whySolutions = [
    {
      icon: QrCode,
      title: 'End-to-End Serial Number Genealogies',
      desc: 'Capture component serial numbers at each assembly station to build a complete digital twin genealogy of every device.'
    },
    {
      icon: RotateCcw,
      title: 'Streamlined RMA & Warranty Portal',
      desc: 'Automate warranty claim validation, reverse shipping labels, repair work orders, and replacement ledger entries.'
    },
    {
      icon: Layers,
      title: 'Multi-Level Engineering BOMs with Alternates',
      desc: 'Maintain active engineering BOMs with pre-approved component substitutes to eliminate supply chain line-stoppages.'
    }
  ]

  const functionalSections = [
    {
      badge: 'MANUFACTURING CORE',
      title: 'SMT Assembly & Shop-Floor Execution',
      description: 'Precision control for high-mix, low-volume and high-volume electronics assembly lines.',
      icon: Cpu,
      items: [
        'Multi-level electronics BOM with automated component substitutes',
        'SMT machine feeder setup verification and reel barcode scanning',
        'In-Circuit Testing (ICT) and Functional Testing (FCT) logging',
        'ESD and cleanroom compliance checklist workflows'
      ]
    },
    {
      badge: 'POST-SALES & AFTERMARKET',
      title: 'RMA, Warranty & Service Center Network',
      description: 'Accelerate warranty turnaround and optimize spare parts distribution.',
      icon: Wrench,
      items: [
        'IMEI/Serial validation against original production date and sales invoice',
        'Component-level rework tickets with scrap recovery tracking',
        'Authorized service center inventory and technician billing',
        'Component failure rate Pareto analysis for R&D improvements'
      ]
    }
  ]

  const faqs = [
    {
      q: 'Does AiBizz Electronics ERP support serial and IMEI number tracking?',
      a: 'Yes. Every device can have unique serial numbers, MAC addresses, and IMEI codes generated or scanned, linking back to every component used in its assembly.'
    },
    {
      q: 'How does it handle engineering change orders (ECO)?',
      a: 'ECO workflows allow revision control of BOMs, preventing obsolete components from being issued to shop-floor work orders.'
    },
    {
      q: 'Can it manage RMA warranty repairs and returns?',
      a: 'Yes. It provides a complete customer RMA portal, authorizes return shipments, creates repair work orders, and manages replacement inventory.'
    }
  ]

  return (
    <IndustryTemplate
      badge="All-in-One High-Tech Suite"
      titlePrefix="ERP Software Solutions for"
      highlightWord="Electronics & Hardware Assembly"
      subtitle="Serial & IMEI level traceability, automated RMA warranty workflows, multi-level electronic BOMs, and component lifecycle tracking."
      trustPoints={['Serial & IMEI Genealogies', 'BOM Alternate Mapping', 'Automated RMA Portal']}
      heroImage={elecImg}
      heroHud={{
        badge: 'SMT LIVE • 99.9% FIRST-PASS',
        statLabel: 'RMA CYCLE TIME',
        statValue: '60% Faster Turnaround'
      }}
      overview={{
        title: 'Modern High-Tech Electronics Operations',
        p1: 'Consumer electronics, IoT hardware makers, and contract EMS manufacturers operate in fast-paced markets with rapid technological turnover, strict quality certifications, and tight component lead times.',
        subheading: 'Precision Engineering from Prototype to Mass Production',
        p2: 'AiBizz Electronics ERP powers seamless SMT assembly execution, component-level traceability, and rapid customer warranty service.'
      }}
      challenges={challenges}
      whySolutions={whySolutions}
      functionalSections={functionalSections}
      faqs={faqs}
      onNavigate={onNavigate}
    />
  )
}
