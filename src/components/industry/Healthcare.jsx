import React from 'react'
import {
  Heart,
  ShieldCheck,
  Activity,
  FileText,
  Clock,
  Zap,
  Users,
  Building2,
  CheckCircle2,
  Stethoscope,
  Pill,
  Hospital
} from 'lucide-react'
import IndustryTemplate from './IndustryTemplate'
import healthcareImg from '../../assets/industry/healthcare.jpg'

export default function Healthcare({ onNavigate }) {
  const challenges = [
    {
      icon: Activity,
      iconBg: 'bg-rose-50 text-rose-600',
      title: 'Departmental Patient Data Silos',
      desc: 'Disconnected OPD, IPD, radiology, pathology, and billing databases delaying emergency care decisions and patient discharge.'
    },
    {
      icon: Pill,
      iconBg: 'bg-indigo-50 text-indigo-600',
      title: 'Pharmacy & Drug Expiry Wastage',
      desc: 'High inventory write-offs caused by unmonitored drug shelf-life, batch mismatch, and lack of automated first-expiry-first-out (FEFO) dispensing.'
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'NABH & HIPAA Compliance Audits',
      desc: 'Strict patient confidentiality standards and regulatory documentation mandates requiring strict role-based access and EHR encryption.'
    },
    {
      icon: Clock,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Sluggish Discharge & TPA Billing',
      desc: 'Multi-hour discharge delays due to manual medical insurance claim generation, itemized billing collation, and third-party approvals.'
    }
  ]

  const whySolutions = [
    {
      icon: Stethoscope,
      title: 'Unified Hospital Information System (HIS)',
      desc: 'Seamlessly link patient registration, electronic health records (EHR), OT scheduling, and bedside nursing charts.'
    },
    {
      icon: Pill,
      title: 'Batch & Expiry Controlled Pharmacy ERP',
      desc: 'Automate barcode scanning, FEFO inventory allocation, narcotic schedule drug registers, and automated supplier replenishment.'
    },
    {
      icon: ShieldCheck,
      title: 'Instant Insurance & TPA Claim Settlement',
      desc: 'Automated claim collation, ICD-10 diagnostic coding validation, and direct insurance gateway dispatch.'
    }
  ]

  const functionalSections = [
    {
      badge: 'CLINICAL OPERATIONS',
      title: 'EHR, OPD & In-Patient Management',
      description: 'End-to-end patient workflow from biometric registration to outpatient prescription and ICU management.',
      icon: Hospital,
      items: [
        'Electronic Health Records (EHR) with ICD-10 coding',
        'Operation Theatre (OT) & bed occupancy automation',
        'Digital doctor consultation & e-prescriptions',
        'Nursing station task delegation and vital monitoring'
      ]
    },
    {
      badge: 'SUPPLY CHAIN & ASSETS',
      title: 'Pharmacy, Lab & Biomedical Equipment ERP',
      description: 'Ensure 100% equipment uptime and eliminate expired drug write-downs with preventive maintenance.',
      icon: Pill,
      items: [
        'First-Expiry-First-Out (FEFO) automated dispensing',
        'Biomedical equipment calibration & AMC management',
        'Automated laboratory analyzer LIS interface',
        'Central sterile supply department (CSSD) tracking'
      ]
    }
  ]

  const faqs = [
    {
      q: 'Is AiBizz Healthcare ERP compliant with HIPAA and NABH?',
      a: 'Yes. AiBizz includes role-based access control, cryptographic EHR data encryption at rest and in transit, and immutable patient access logs.'
    },
    {
      q: 'Can it interface with laboratory diagnostic equipment (LIS)?',
      a: 'Yes. It supports ASTM and HL7 bi-directional protocols to automatically import pathology and biochemistry analyzer test results into patient charts.'
    },
    {
      q: 'How does it streamline patient discharge billing?',
      a: 'All doctor consultations, pharmacy dispatches, lab investigations, and room charges are automatically collated onto an itemized patient ledger in real time.'
    }
  ]

  return (
    <IndustryTemplate
      badge="All-in-One Healthcare Suite"
      titlePrefix="ERP Software Solutions for"
      highlightWord="Healthcare & Hospital Networks"
      subtitle="Unified hospital information management, OPD/IPD billing, pharmacy inventory batching, NABH audit readiness, and doctor scheduling."
      trustPoints={['HIPAA & NABH Ready', 'HL7 / LIS Integration', '24/7 Clinical Support']}
      heroImage={healthcareImg}
      heroHud={{
        badge: 'HOSPITAL LIVE • 99.8% PRECISION',
        statLabel: 'DISCHARGE SPEED',
        statValue: '3X Faster Turnaround'
      }}
      overview={{
        title: 'Modern Healthcare Operations',
        p1: 'Modern hospitals and multispecialty healthcare chains require instant synchronization across clinical departments, diagnostic laboratories, and financial billing desks to save lives and maximize bed utilization.',
        subheading: 'Deliver Superior Patient Care with Connected Hospital Operations',
        p2: 'AiBizz Healthcare ERP bridges clinical excellence with administrative precision, automating patient flow, supply chain replenishment, and insurance claim approvals.'
      }}
      challenges={challenges}
      whySolutions={whySolutions}
      functionalSections={functionalSections}
      faqs={faqs}
      onNavigate={onNavigate}
    />
  )
}
