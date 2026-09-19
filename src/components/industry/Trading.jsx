import React from 'react'
import {
  ShoppingCart,
  Globe2,
  Boxes,
  Truck,
  DollarSign,
  TrendingUp,
  FileSpreadsheet,
  ShieldCheck,
  Building,
  CheckCircle2,
  Scale,
  Package
} from 'lucide-react'
import IndustryTemplate from './IndustryTemplate'
import tradingImg from '../../assets/industry-images/logistics.jpeg'

export default function Trading({ onNavigate }) {
  const challenges = [
    {
      icon: DollarSign,
      iconBg: 'bg-rose-50 text-rose-600',
      title: 'Hidden Import & Landed Costs',
      desc: 'Difficulty apportioning ocean freight, customs import duties, port demurrage, and clearance charges onto individual product SKUs.'
    },
    {
      icon: Boxes,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'Slow Container Consignment Tracking',
      desc: 'Inability to track container status at sea, causing missed customer delivery commitments and warehouse storage bottlenecks.'
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Credit Limit & Overdue Receivables Risk',
      desc: 'Sales reps booking orders for wholesale clients with overdue balances or exceeded credit limits, increasing bad debt risk.'
    },
    {
      icon: Globe2,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Multi-Currency Forex Volatility',
      desc: 'Fluctuating foreign currency purchase orders eroding gross profit margins between order placement and supplier settlement.'
    }
  ]

  const whySolutions = [
    {
      icon: DollarSign,
      title: 'Automated Landed-Cost Calculation',
      desc: 'Automatically distribute customs duty, shipping freight, and clearing agent bills across item valuation by weight, volume, or value.'
    },
    {
      icon: ShieldCheck,
      title: 'Strict Automated Credit Limit Controls',
      desc: 'Enforce real-time credit checks at sales order entry with automated supervisor override approvals.'
    },
    {
      icon: Globe2,
      title: 'Multi-Currency Trade Finance & Forex Sync',
      desc: 'Live exchange rates, unrealized/realized forex accounting, and Letter of Credit (LC) lifecycle tracking.'
    }
  ]

  const functionalSections = [
    {
      badge: 'IMPORT & EXPORT',
      title: 'Global Procurement & Landed-Cost Allocation',
      description: 'Streamline overseas trade orders, customs documentation, and container logistics.',
      icon: Globe2,
      items: [
        'Multi-currency proforma purchase orders and proforma invoicing',
        'Customs bill of entry and dynamic landed cost allocation',
        'Container shipping tracking by BL number and ETA alerts',
        'Letter of Credit (LC) and Bank Guarantee (BG) management'
      ]
    },
    {
      badge: 'WHOLESALE DISTRIBUTION',
      title: 'B2B Sales, Pricing Matrices & Credit Risk',
      description: 'Empower wholesale sales teams with customer-tier price lists and inventory visibility.',
      icon: ShoppingCart,
      items: [
        'Customer-specific tiered pricing and volume discount matrices',
        'Real-time available-to-promise (ATP) inventory visibility',
        'Strict credit period, credit limit, and aging stop-delivery controls',
        'Sales representative mobile app for on-field order booking'
      ]
    }
  ]

  const faqs = [
    {
      q: 'How does AiBizz Trading ERP compute landed cost for imported goods?',
      a: 'It allows you to record custom duty, clearing agency fees, marine insurance, and inland transport, distributing the total expense across product SKUs by item value, weight, or quantity.'
    },
    {
      q: 'Can sales representatives book orders on the road?',
      a: 'Yes. The mobile B2B sales portal allows reps to check stock levels, review customer credit status, and submit wholesale orders in seconds.'
    },
    {
      q: 'Does it manage multi-warehouse wholesale distribution?',
      a: 'Yes. It supports central distribution centers, regional fulfillment warehouses, and stock transit transfer orders.'
    }
  ]

  return (
    <IndustryTemplate
      badge="All-in-One Trading Suite"
      titlePrefix="ERP Software Solutions for"
      highlightWord="Wholesale & Global Trading"
      subtitle="Multi-currency purchase orders, container consignment tracking, automated landed-cost calculations, and credit limit risk controls."
      trustPoints={['Automated Landed-Cost Engine', 'Strict Credit Risk Rules', 'Multi-Currency Trade Finance']}
      heroImage={tradingImg}
      heroHud={{
        badge: 'TRADING LIVE • 99.8% PRECISION',
        statLabel: 'MARGIN VISIBILITY',
        statValue: '100% Itemized Landed Cost'
      }}
      overview={{
        title: 'Modern Wholesale & Import/Export Operations',
        p1: 'Wholesale distributors and global trading enterprises deal with multi-currency volatility, complex customs clearance fees, and tight wholesale margins.',
        subheading: 'Master Global Supply Chains and Maximize Trading Profitability',
        p2: 'AiBizz Trading ERP connects global supplier orders, customs landed costing, multi-warehouse inventory, and customer credit management into one seamless platform.'
      }}
      challenges={challenges}
      whySolutions={whySolutions}
      functionalSections={functionalSections}
      faqs={faqs}
      onNavigate={onNavigate}
    />
  )
}
