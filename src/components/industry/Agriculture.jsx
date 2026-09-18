import React from 'react'
import {
  Leaf,
  Sprout,
  Sun,
  Droplets,
  Calendar,
  Warehouse,
  Truck,
  DollarSign,
  Scale,
  ShieldCheck,
  CheckCircle2,
  FileText
} from 'lucide-react'
import IndustryTemplate from './IndustryTemplate'
import agriImg from '../../assets/industry/agriculture.jpg'

export default function Agriculture({ onNavigate }) {
  const challenges = [
    {
      icon: Droplets,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Unpredictable Crop Yield Cycles',
      desc: 'Variations in weather, pest infestations, and soil nutrients making harvest scheduling and seasonal cash flow forecasting inaccurate.'
    },
    {
      icon: Warehouse,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Post-Harvest Perishable Spoilage',
      desc: 'Cold storage delays and slow inventory turnover resulting in massive quality degradation of farm produce.'
    },
    {
      icon: DollarSign,
      iconBg: 'bg-rose-50 text-rose-600',
      title: 'Complex Farmer Payouts & Advances',
      desc: 'Contract farming networks struggling to track seed/fertilizer inputs, loan advances, and harvest weighment settlements.'
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'Global Organic & Export Traceability',
      desc: 'Stringent export standards requiring plot-level crop traceability, chemical spray logs, and GAP certification audits.'
    }
  ]

  const whySolutions = [
    {
      icon: Sprout,
      title: 'Plot & Crop Lifecycle Management',
      desc: 'Manage crop sowing schedules, fertilizer application logs, irrigation timings, and automated harvest forecasting.'
    },
    {
      icon: Scale,
      title: 'Procurement Weighment & Quality Grading',
      desc: 'Direct procurement center weighbridge sync with instant moisture and purity grading deduction rules.'
    },
    {
      icon: DollarSign,
      title: 'Automated Farmer Settlement Accounts',
      desc: 'Automate input advances, crop purchase credits, interest deductions, and direct bank transfer payouts.'
    }
  ]

  const functionalSections = [
    {
      badge: 'FARM OPERATIONS',
      title: 'Crop Scheduling & Input Management',
      description: 'End-to-end farm parcel tracking for corporate farming and outgrower networks.',
      icon: Leaf,
      items: [
        'Geo-tagged farm parcel master and crop calendar',
        'Fertilizer and pesticide dosage consumption logs',
        'Contract farming outgrower agreements and seed distribution',
        'Daily farm labor muster roll and piece-rate harvest wages'
      ]
    },
    {
      badge: 'SUPPLY CHAIN & COLD CHAIN',
      title: 'Produce Procurement & Packhouse Processing',
      description: 'Streamline sorting, grading, cold chain storage, and distribution.',
      icon: Warehouse,
      items: [
        'Electronic procurement center weighing slips',
        'Packhouse batch sorting, grading & packing operations',
        'Cold storage pallet location and temperature tracking',
        'GlobalGAP and organic traceability certification reports'
      ]
    }
  ]

  const faqs = [
    {
      q: 'Does AiBizz Agriculture ERP support outgrower contract farming?',
      a: 'Yes. It manages farmer registrations, tracks agricultural inputs distributed on credit, monitors farm visits by agronomists, and deducts input costs during harvest procurement.'
    },
    {
      q: 'Can it track batch-level traceability for agricultural exports?',
      a: 'Yes. Every batch of packaged produce can be traced back to the specific farm parcel, harvest date, and chemical spray history via QR code.'
    },
    {
      q: 'How does it handle weighbridge procurement at grain mandis / centers?',
      a: 'IoT weigh scales record gross, tare, and net weights, calculate moisture/foreign matter deductions, and generate payment advice instantly.'
    }
  ]

  return (
    <IndustryTemplate
      badge="All-in-One Agri-Business Suite"
      titlePrefix="ERP Software Solutions for"
      highlightWord="Agri-Business & Farm Management"
      subtitle="Farm plot tracking, crop cycle batch management, bulk grain procurement, perishable cold-chain logistics, and farmer settlement."
      trustPoints={['Farm Parcel Geo-Tagging', 'Mandi Weighment Sync', 'Full Export Traceability']}
      heroImage={agriImg}
      heroHud={{
        badge: 'FARM LIVE • 99.8% PRECISION',
        statLabel: 'HARVEST YIELD',
        statValue: '+28% Crop Productivity'
      }}
      overview={{
        title: 'Modern Agri-Business Operations',
        p1: 'Agricultural enterprises, food processors, and contract farming networks require tight integration between on-field agronomy, harvest procurement, cold storage logistics, and farmer payout ledgers.',
        subheading: 'Cultivate Operational Precision from Seed to Shelf',
        p2: 'AiBizz Agriculture ERP bridges agricultural field data with commercial enterprise accounting, eliminating paperwork and maximizing crop profitability.'
      }}
      challenges={challenges}
      whySolutions={whySolutions}
      functionalSections={functionalSections}
      faqs={faqs}
      onNavigate={onNavigate}
    />
  )
}
