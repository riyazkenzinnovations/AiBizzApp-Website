import React from 'react'
import {
  Cog,
  Wrench,
  Layers,
  FileSpreadsheet,
  Clock,
  ShieldCheck,
  Building,
  CheckCircle2,
  Cpu,
  Boxes,
  Zap,
  DollarSign
} from 'lucide-react'
import IndustryTemplate from './IndustryTemplate'
import engImg from '../../assets/industry/engineering.jpg'

export default function Engineering({ onNavigate }) {
  const challenges = [
    {
      icon: Layers,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'Complex Engineer-to-Order (ETO) BOMs',
      desc: 'Each custom project requiring bespoke CAD drawings, revision changes, and non-standard raw material sourcing.'
    },
    {
      icon: DollarSign,
      iconBg: 'bg-rose-50 text-rose-600',
      title: 'Uncontrolled Scope Creep & Cost Creep',
      desc: 'Frequent client engineering modifications eroding project gross margins without formal Engineering Change Order (ECO) billing.'
    },
    {
      icon: Clock,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Subcontracted Fabrication Bottlenecks',
      desc: 'Lack of visibility into third-party galvanizing, heat treatment, and precision machining job work delays.'
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Quality Dossiers & Material Test Reports (MTR)',
      desc: 'Manual collation of raw material heat numbers, ultrasound test certificates, and client inspection sign-offs.'
    }
  ]

  const whySolutions = [
    {
      icon: Layers,
      title: 'Bespoke ETO BOM & CAD Integration',
      desc: 'Direct import of SolidWorks, AutoCAD, and Inventor assemblies into multi-level manufacturing BOMs in seconds.'
    },
    {
      icon: DollarSign,
      title: 'Dynamic Engineering Change Order (ECO) Costing',
      desc: 'Automate revision approvals, scrap estimation, and client change-request invoicing to protect profit margins.'
    },
    {
      icon: ShieldCheck,
      title: 'Heat Number & MTR Quality Traceability',
      desc: 'Track metal heat numbers, mill test reports, and non-destructive testing (NDT) results linked to every fabricated component.'
    }
  ]

  const functionalSections = [
    {
      badge: 'DESIGN & ESTIMATION',
      title: 'Project Engineering & BOM Management',
      description: 'Streamline custom design lifecycles from preliminary quotation to final fabrication drawings.',
      icon: Cog,
      items: [
        'CAD BOM import with automated item code and weight calculation',
        'Engineering Change Request (ECR) and ECO revision history',
        'Direct project-to-procurement requisition generation',
        'Subcontractor job-work dispatch and return material reconciliation'
      ]
    },
    {
      badge: 'PROJECT FABRICATION',
      title: 'Shop-Floor Routing & Milestone Erection',
      description: 'Monitor structural fabrication, assembly staging, and on-site client commissioning.',
      icon: Building,
      items: [
        'Machine shop routing: CNC milling, turning, welding & painting',
        'Material Test Certificate (MTC) and Heat number mapping',
        'Client inspection call scheduling and Quality Assurance (QA) dossiers',
        'Progress billing linked to milestone inspection approvals'
      ]
    }
  ]

  const faqs = [
    {
      q: 'Does AiBizz Engineering ERP support Engineer-to-Order (ETO) processes?',
      a: 'Yes. It allows customized BOMs created on the fly for specific sales orders, without cluttering standard product catalogs.'
    },
    {
      q: 'Can it track outsourced job-work processes?',
      a: 'Yes. It generates job-work challans, monitors raw materials sent to third-party vendors (heat treaters, coaters), and reconciles scrap upon return.'
    },
    {
      q: 'How does it maintain Material Test Reports (MTR)?',
      a: 'Incoming steel plates, pipes, and castings are tagged with heat and batch numbers, which flow automatically onto the final customer inspection dossier.'
    }
  ]

  return (
    <IndustryTemplate
      badge="All-in-One Engineering Suite"
      titlePrefix="ERP Software Solutions for"
      highlightWord="Engineering & Industrial EPC"
      subtitle="Engineer-To-Order (ETO) BOM management, CAD revision sync, project milestone tracking, and dynamic engineering change orders."
      trustPoints={['CAD Integration Ready', 'Subcontract Job-Work Sync', 'Mill Test Certificate Traceability']}
      heroImage={engImg}
      heroHud={{
        badge: 'ENGINEERING LIVE • 99.8% PRECISION',
        statLabel: 'FABRICATION SPEED',
        statValue: '35% Faster Delivery'
      }}
      overview={{
        title: 'Precision Engineering & Custom EPC Operations',
        p1: 'Capital equipment manufacturers, structural fabricators, and engineering EPC contractors handle complex, one-of-a-kind projects with tight delivery windows and stringent quality codes (ASME, ISO, API).',
        subheading: 'Master Custom Engineering from Blueprint to Commissioning',
        p2: 'AiBizz Engineering ERP connects design engineering, shop floor fabrication, outsourced job-work, and financial project accounting into a unified platform.'
      }}
      challenges={challenges}
      whySolutions={whySolutions}
      functionalSections={functionalSections}
      faqs={faqs}
      onNavigate={onNavigate}
    />
  )
}
