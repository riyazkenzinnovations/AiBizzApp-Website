import React from 'react'
import {
  Pill,
  ShieldCheck,
  FileCheck,
  Thermometer,
  Clock,
  Activity,
  AlertTriangle,
  Boxes,
  CheckCircle2,
  Layers,
  FlaskConical,
  RotateCcw
} from 'lucide-react'
import IndustryTemplate from './IndustryTemplate'
import pharmaImg from '../../assets/industry/pharmaceutical.jpg'

export default function Pharmaceutical({ onNavigate }) {
  const challenges = [
    {
      icon: ShieldCheck,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'Stringent US FDA 21 CFR Part 11 Compliance',
      desc: 'Paper-based batch production logs failing strict regulatory audit guidelines for electronic records and electronic signatures.'
    },
    {
      icon: Pill,
      iconBg: 'bg-rose-50 text-rose-600',
      title: 'Active Pharmaceutical Ingredient (API) Potency Variations',
      desc: 'Formulation batch recipe inaccuracies caused by unadjusted active potency and assay water content variations.'
    },
    {
      icon: Thermometer,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Cold-Chain Temperature Excursions',
      desc: 'Vaccine and biological drug spoilage during storage and transit without real-time IoT temperature logging.'
    },
    {
      icon: Clock,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Sluggish Quality Control (QC) Release',
      desc: 'Quarantine inventory backlogs while waiting for multi-day microbiology, stability, and HPLC chromatography testing sign-offs.'
    }
  ]

  const whySolutions = [
    {
      icon: FileCheck,
      title: 'Electronic Batch Manufacturing Records (eBMR)',
      desc: '21 CFR Part 11 compliant digital workflow with dual-signoff witness verification and immutable audit logs.'
    },
    {
      icon: FlaskConical,
      title: 'Dynamic API Potency & Formulation Balancing',
      desc: 'Automate raw material batch recipe scaling based on active ingredient assay purity and moisture percentages.'
    },
    {
      icon: Thermometer,
      title: 'Cold-Chain IoT Monitoring & FEFO Allocation',
      desc: 'Real-time wireless temperature sensor alerts and automated First-Expiry-First-Out dispensing.'
    }
  ]

  const functionalSections = [
    {
      badge: 'FORMULATION & BATCHING',
      title: 'Master Formula Records (MFR) & Production',
      description: 'Zero-error execution for tablets, capsules, injectables, and liquid syrups.',
      icon: FlaskConical,
      items: [
        'Master Formula Records (MFR) with Bill of Materials and manufacturing steps',
        'Electronic Batch Manufacturing Records (eBMR) with digital signatures',
        'Dispensing booth barcoded weight verification against target formulation',
        'In-process quality checks (IPQC): dissolution, hardness, friability'
      ]
    },
    {
      badge: 'QUALITY & STABILITY',
      title: 'LIMS Quality Control & Stability Studies',
      description: 'Accelerate batch quarantine release and maintain regulatory audit readiness.',
      icon: ShieldCheck,
      items: [
        'Integrated Laboratory Information Management System (LIMS)',
        'Sample lifecycle tracking, CoA certificate generation & OOS investigations',
        'Stability chamber sample testing schedules and shelf-life determination',
        'Automated annual product quality review (APQR) reports'
      ]
    }
  ]

  const faqs = [
    {
      q: 'Is AiBizz Pharma ERP compliant with US FDA 21 CFR Part 11?',
      a: 'Yes. It provides encrypted electronic signatures, dual-person verification, time-stamped immutable audit trails, and strict password aging policies.'
    },
    {
      q: 'How does it handle API active ingredient potency calculation?',
      a: 'During batch formulation dispensing, the system automatically recalibrates the required quantity of API and excipients based on the CoA assay purity percentage.'
    },
    {
      q: 'Can it manage stability sample testing and APQR reports?',
      a: 'Yes. It schedules stability testing intervals (0, 3, 6, 12, 24, 36 months), records test parameters, and auto-compiles the Annual Product Quality Review (APQR).'
    }
  ]

  return (
    <IndustryTemplate
      badge="All-in-One Life Sciences Suite"
      titlePrefix="ERP Software Solutions for"
      highlightWord="Pharmaceuticals & Life Sciences"
      subtitle="Master Formula Records (MFR), electronic batch records (eBR), 21 CFR Part 11 validation, expiry alerts, and cold-chain compliance."
      trustPoints={['21 CFR Part 11 Compliant', 'Automated eBMR & LIMS', 'Active API Potency Balancing']}
      heroImage={pharmaImg}
      heroHud={{
        badge: 'PHARMA LIVE • 100% AUDIT READY',
        statLabel: 'BATCH RELEASE',
        statValue: '4X Faster QC Signoff'
      }}
      overview={{
        title: 'Modern Pharmaceutical & Life Sciences Operations',
        p1: 'Pharmaceutical manufacturers, clinical research organizations, and biotechnology firms face strict global health authority scrutiny (FDA, EMA, WHO-GMP) where product safety and audit integrity are paramount.',
        subheading: 'Ensure Total Regulatory Compliance and Zero-Defect Formulations',
        p2: 'AiBizz Pharma ERP integrates formulation recipes, electronic batch manufacturing records (eBMR), QC laboratory testing (LIMS), and cold chain logistics into a secure cloud platform.'
      }}
      challenges={challenges}
      whySolutions={whySolutions}
      functionalSections={functionalSections}
      faqs={faqs}
      onNavigate={onNavigate}
    />
  )
}
