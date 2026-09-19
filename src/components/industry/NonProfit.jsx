import React from 'react'
import {
  HeartHandshake,
  DollarSign,
  Users,
  FileCheck,
  Globe2,
  Calendar,
  ShieldCheck,
  Award,
  Clock,
  PieChart,
  Boxes,
  HandHeart,
  FileSpreadsheet,
  CheckCircle2,
  Layers
} from 'lucide-react'
import IndustryTemplate from './IndustryTemplate'
import nonProfitImg from '../../assets/AiBizzApp2.jpeg'

export default function NonProfit({ onNavigate }) {
  const challenges = [
    {
      icon: DollarSign,
      iconBg: 'bg-rose-50 text-rose-600',
      title: 'Donor Scrutiny & To-the-Cent Fund Tracking',
      desc: 'Donors and board trustees require absolute transparency on where every dollar is spent, making manual spreadsheets or rigid legacy software a liability.'
    },
    {
      icon: Users,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'Volunteer Scheduling & Skill Disconnect',
      desc: 'Mobilizing hundreds of passionate volunteers across ground chapters without knowing real-time availability, language skills, or field specializations.'
    },
    {
      icon: FileSpreadsheet,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Complex Grant Application & Scoring Cycles',
      desc: 'Disbursing, monitoring, and auditing grant funding proposals across international aid initiatives without standard scoring rubrics.'
    },
    {
      icon: Globe2,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Multi-Chapter & Cross-Border Coordination',
      desc: 'Managing decentralized chapters with regional directors, varying local currencies, multi-lingual field reports, and fragmented member rolls.'
    }
  ]

  const whySolutions = [
    {
      icon: ShieldCheck,
      title: 'To-the-Cent Transparent Fund Accounting',
      desc: 'Restricted, unrestricted, and endowment fund accounting that links every dollar spent directly to programs, grants, and field milestones.'
    },
    {
      icon: HandHeart,
      title: 'End-to-End Volunteer & Donor Lifecycle',
      desc: 'Track donor histories, recurring automated gift pledges, volunteer skill rosters, attendance logging, and instant tax-deductible certificates.'
    },
    {
      icon: PieChart,
      title: 'Strict Budget Controls & Real-Time MIS',
      desc: 'Set hard or warning project budget thresholds to stop cost overruns before they occur, with multi-currency grant utilization dashboards.'
    }
  ]

  const functionalSections = [
    {
      badge: 'DONATIONS, MEMBERSHIPS & GRANTS',
      title: 'Donation Management, Pledges & Tax Deduction Slips',
      description: 'Strengthen stakeholder trust with automated donor recognition, membership tiers, and grant scoring.',
      icon: HeartHandshake,
      items: [
        'Automated donor receipt generation with 80G and tax deduction certificates',
        'Recurring pledge management with automated payment gateway debits',
        'Grant proposal evaluation workflow with multi-reviewer 10-point scoring',
        'Tiered membership plans with automated renewals and voting rights tracking'
      ]
    },
    {
      badge: 'PROGRAMS, VOLUNTEERS & FIELD ASSETS',
      title: 'Project Milestone Tracking & Volunteer Deployment',
      description: 'Organize chaotic field missions into structured tasks, assigned volunteer squads, and audited relief supplies.',
      icon: Layers,
      items: [
        'Volunteer database with skill tags, emergency contact verification, and timesheets',
        'Project progress monitoring based on task completion, budget burn, and impact metrics',
        'Regional chapter branch management with customized permissions for chapter heads',
        'Donated relief goods, medical inventory, food supplies, and mobile asset tracking'
      ]
    }
  ]

  const faqs = [
    {
      q: 'How does AiBizz ERP track restricted funds and donor allocations?',
      a: 'The accounting module supports dedicated fund dimensions. Every income and expense transaction is mapped to a specific fund or donor grant, ensuring donor funds cannot be comingled or overspent.'
    },
    {
      q: 'Can volunteers access the platform from smartphones on the ground?',
      a: 'Yes. The responsive web and mobile portal lets ground volunteers submit field data, punch timesheets, and review program tasks without cumbersome training.'
    },
    {
      q: 'Does it support multi-currency international grants and chapter reporting?',
      a: 'Yes. AiBizz ERP supports transactions in over 140 currencies with automatic exchange rate updates, allowing global NGOs to manage overseas branches and cross-border disbursements seamlessly.'
    }
  ]

  return (
    <IndustryTemplate
      badge="All-in-One Non-Profit Suite"
      titlePrefix="ERP Software Solutions for"
      highlightWord="Non-Profits & NGOs"
      subtitle="A complete solution to manage donations, grants, programs, volunteers, and to-the-cent fund accounting — so you can focus on creating impact, not managing complexity."
      trustPoints={['To-The-Cent Fund Tracking', 'Automated Tax Deduction Slips', '140+ Currencies & Chapters']}
      heroImage={nonProfitImg}
      heroHud={{
        badge: 'NON-PROFIT LIVE • 100% TRANSPARENCY',
        statLabel: 'DONATION EFFICIENCY',
        statValue: '99.4% Fund Utilization'
      }}
      overview={{
        title: 'Empower Social Impact with Digital Transparency',
        p1: 'Non-profit organizations, charitable trusts, and global NGOs must maximize every donated cent while operating under heightened public and regulatory scrutiny for financial integrity.',
        subheading: 'Seamless Non-Profit Operations From Donor Pledge to Ground Delivery',
        p2: 'AiBizz Non-Profit ERP unifies fund accounting, volunteer coordination, grant disbursement pipelines, membership directories, and relief asset logistics into one single transparent platform.'
      }}
      challenges={challenges}
      whySolutions={whySolutions}
      functionalSections={functionalSections}
      faqs={faqs}
      onNavigate={onNavigate}
    />
  )
}
