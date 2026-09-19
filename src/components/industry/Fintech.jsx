import React from 'react'
import {
  DollarSign,
  ShieldCheck,
  TrendingUp,
  FileText,
  Lock,
  Zap,
  Globe2,
  Users,
  CheckCircle2,
  BarChart3,
  CreditCard,
  Building
} from 'lucide-react'
import IndustryTemplate from './IndustryTemplate'
import fintechImg from '../../assets/industry-images/fintech.jpeg'

export default function Fintech({ onNavigate }) {
  const challenges = [
    {
      icon: DollarSign,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Multi-Entity Treasury Silos',
      desc: 'Fragmented accounts across banks, payment gateways, and subsidiaries delaying consolidated cash visibility and reconciliation.'
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'Regulatory & Audit Compliance',
      desc: 'Ever-tightening regulatory requirements (AML, KYC, SOC 2, SOX) requiring immutable transaction audit trails and instant reporting.'
    },
    {
      icon: Lock,
      iconBg: 'bg-indigo-50 text-indigo-600',
      title: 'Fraud Detection & Chargebacks',
      desc: 'Real-time payment anomalies and unauthorized chargebacks eroding operating revenue without automated risk intelligence.'
    },
    {
      icon: Zap,
      iconBg: 'bg-cyan-50 text-cyan-600',
      title: 'High-Volume Transaction Latency',
      desc: 'Legacy general ledgers failing to ingest hundreds of micro-transactions per second with sub-second journal balancing.'
    }
  ]

  const whySolutions = [
    {
      icon: Zap,
      title: 'Automated 1-Click Bank Reconciliation',
      desc: 'Ingest MT940, CAMT.053, and API bank feeds with AI rule-matching for 99.4% auto-cleared journal transactions.'
    },
    {
      icon: ShieldCheck,
      title: 'Bank-Grade Security & Audit Trails',
      desc: 'Granular role-based permissions, cryptographic audit logging, and automated AML watchlist verification.'
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Financial Intelligence',
      desc: 'Live P&L, balance sheet consolidation across 50+ currencies, and cash flow forecasting with AI predictive algorithms.'
    }
  ]

  const functionalSections = [
    {
      badge: 'FINANCIAL CORE',
      title: 'Enterprise Treasury & Multi-Currency Ledger',
      description: 'Unified double-entry accounting engine architected for digital payments, neo-banks, and financial institutions.',
      icon: CreditCard,
      items: [
        'Sub-second general ledger journal generation',
        'Multi-currency automated forex revaluation',
        'Real-time liquidity & automated treasury sweeps',
        'Regulatory capital adequacy (CAR) monitoring'
      ]
    },
    {
      badge: 'RISK & COMPLIANCE',
      title: 'Automated Compliance & Risk Controls',
      description: 'Continuous monitoring across payment gateways, merchant settlements, and vendor disbursements.',
      icon: Lock,
      items: [
        'Automated SOC 2 and ISO 27001 audit logging',
        'PEP & Sanctions list integration',
        'Dynamic merchant credit risk limits',
        'Automated 1099, GST & international tax filings'
      ]
    }
  ]

  const faqs = [
    {
      q: 'Can AiBizz Fintech ERP handle high-volume micro-transactions?',
      a: 'Yes. AiBizz ERP is architected with an asynchronous queue that ingests thousands of payment transactions per minute into a unified double-entry ledger without blocking user queries.'
    },
    {
      q: 'Does it support multi-currency forex revaluation?',
      a: 'Yes. Live exchange rates are synced from global central bank APIs, with automated unrealized and realized forex gain/loss computations.'
    },
    {
      q: 'How does it integrate with banking APIs and payment gateways?',
      a: 'AiBizz offers native webhooks and RESTful connectors for Stripe, Razorpay, Adyen, Plaid, SWIFT, and core banking systems.'
    }
  ]

  return (
    <IndustryTemplate
      badge="All-in-One Fintech Suite"
      titlePrefix="ERP Software Solutions for"
      highlightWord="Fintech & Financial Services"
      subtitle="Automate multi-entity general ledgers, treasury reconciliations, compliance audits, and instant payment settlement pipelines with bank-grade security."
      trustPoints={['SOC 2 Type II Certified', 'Real-Time Bank API Sync', '99.99% Uptime SLA']}
      heroImage={fintechImg}
      heroHud={{
        badge: 'FINTECH LIVE • 99.9% RECON',
        statLabel: 'TRANSACTION THROUGHPUT',
        statValue: '10,000+ TX / SEC'
      }}
      overview={{
        title: 'Modern Financial Operations',
        p1: 'Fintech platforms, payment processors, and lending institutions manage massive transaction velocities across diverse regulatory regimes. Traditional ERPs crumble under micro-transaction volumes and multi-currency complexity.',
        subheading: 'Power Your Financial Infrastructure with Real-Time Automation',
        p2: 'AiBizz Fintech ERP unifies core accounting, automated banking reconciliation, treasury liquidity management, and compliance governance into a single, lightning-fast digital nervous system.'
      }}
      challenges={challenges}
      whySolutions={whySolutions}
      functionalSections={functionalSections}
      faqs={faqs}
      onNavigate={onNavigate}
    />
  )
}
