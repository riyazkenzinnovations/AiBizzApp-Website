import React from 'react'
import {
  TrendingUp,
  Anchor,
  Scale,
  ShieldCheck,
  Globe2,
  FileSpreadsheet,
  Truck,
  Warehouse,
  Boxes,
  Zap,
  DollarSign,
  PieChart
} from 'lucide-react'
import IndustryTemplate from './IndustryTemplate'
import commoditiesImg from '../../assets/industry-images/logistics.jpeg'

export default function CommoditiesTrading({ onNavigate }) {
  const challenges = [
    {
      icon: TrendingUp,
      iconBg: 'bg-indigo-50 text-indigo-600',
      title: 'Volatile Global Price Fluctuation',
      desc: 'Rapid intraday commodity price shifts causing margin erosion without live mark-to-market (MtM) risk valuation.'
    },
    {
      icon: Scale,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Weighbridge & Quality Discrepancies',
      desc: 'Moisture content variances, impurities, and weight shrinkage between source port dispatch and destination weighbridge.'
    },
    {
      icon: Anchor,
      iconBg: 'bg-cyan-50 text-cyan-600',
      title: 'Complex Vessel & Demurrage Costs',
      desc: 'Port congestion, laytime penalties, and multi-currency customs tariffs eroding profitability on bulk cargo charters.'
    },
    {
      icon: FileSpreadsheet,
      iconBg: 'bg-rose-50 text-rose-600',
      title: 'Disparate Hedging & Physical Contracts',
      desc: 'Disjointed spreadsheets tracking forward purchase agreements, futures exchange hedges, and warehouse warrants.'
    }
  ]

  const whySolutions = [
    {
      icon: TrendingUp,
      title: 'Real-Time Mark-to-Market (MtM) & Hedging',
      desc: 'Connect physical trade positions directly to exchange commodity feeds for automated real-time exposure calculation.'
    },
    {
      icon: Scale,
      title: 'Automated Weighbridge & Quality Deductions',
      desc: 'Direct weighbridge hardware IoT integration with automatic quality grading and moisture-index price penalties.'
    },
    {
      icon: Anchor,
      title: 'Bulk Vessel & Landed-Cost Allocation',
      desc: 'Collate ocean freight, insurance, customs duty, port demurrage, and clearance fees directly onto inventory valuation.'
    }
  ]

  const functionalSections = [
    {
      badge: 'TRADE LIFECYCLE',
      title: 'Contract Management & Deal Capture',
      description: 'Capture fixed-price, index-linked, and basis contracts across agricultural, metal, and energy commodities.',
      icon: Globe2,
      items: [
        'Multi-currency physical trade deal tickets',
        'Formula pricing with dynamic index feeds',
        'Letter of Credit (LC) & Trade Finance tracking',
        'Automated tolerance percentage & short-shipment handling'
      ]
    },
    {
      badge: 'LOGISTICS & SETTLEMENT',
      title: 'Vessel Chartering & Weighbridge Logistics',
      description: 'Streamline bulk bulk shipments, customs clearance, and dynamic supplier settlements.',
      icon: Truck,
      items: [
        'Laytime & demurrage calculation engine',
        'Automated weighbridge gross-tare-net tickets',
        'Moisture, purity and grading deduction schedules',
        'Provisional vs. final commercial invoice reconciliation'
      ]
    }
  ]

  const faqs = [
    {
      q: 'Can AiBizz handle both physical commodity contracts and exchange hedging?',
      a: 'Yes. AiBizz Commodity Trading ERP links physical purchase/sales contracts to derivative hedging instruments on global exchanges (LME, CBOT, MCX).'
    },
    {
      q: 'How does it automate weighbridge data capture?',
      a: 'Through RS232, Modbus, and IP camera integrations, truck weighments are logged directly onto delivery challans without manual operator tampering.'
    },
    {
      q: 'Does it calculate landed costs for imported bulk shipments?',
      a: 'Yes. Every cost element—ocean freight, port handling, marine insurance, and customs duty—is apportioned to the metric ton valuation.'
    }
  ]

  return (
    <IndustryTemplate
      badge="Commodities Trading ERP Suite"
      titlePrefix="ERP Software Solutions for"
      highlightWord="Commodities Trading & Bulk Logistics"
      subtitle="Hedging contract management, weighbridge integration, quality parameter deductions, bulk vessel tracking, and real-time P&L mark-to-market."
      trustPoints={['Real-Time MtM Valuation', 'IoT Weighbridge Sync', 'Multi-Currency Trade Finance']}
      heroImage={commoditiesImg}
      heroHud={{
        badge: 'COMMODITY LIVE • 99.8% PRECISION',
        statLabel: 'TRADE SETTLEMENT',
        statValue: '+45% Faster Turnaround'
      }}
      overview={{
        title: 'High-Velocity Commodity Trading',
        p1: 'Global commodity trading firms operate under volatile price swings, tight physical margins, and high counterparty risk. Manual spreadsheets fail to deliver instant visibility on open trade positions, vessel demurrage, and forex exposure.',
        subheading: 'Streamline the Entire Trade Lifecycle from Port to Silo',
        p2: 'AiBizz Commodities Trading ERP unifies trade deal capture, physical logistics, weighbridge quality verification, and back-office accounting into a unified, audit-ready operational hub.'
      }}
      challenges={challenges}
      whySolutions={whySolutions}
      functionalSections={functionalSections}
      faqs={faqs}
      onNavigate={onNavigate}
    />
  )
}
