import React from 'react'
import {
  Truck,
  Scale,
  Fuel,
  ShieldCheck,
  AlertTriangle,
  Clock,
  Layers,
  Wrench,
  CheckCircle2,
  Boxes,
  DollarSign,
  Activity
} from 'lucide-react'
import IndustryTemplate from './IndustryTemplate'
import miningImg from '../../assets/industry-images/WhatsApp Image 2026-09-19 at 6.12.18 PM (1).jpeg'

export default function Mining({ onNavigate }) {
  const challenges = [
    {
      icon: Scale,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Ore Extraction Yield & Grade Variance',
      desc: 'Discrepancies between estimated geological ore grades and actual recovered mineral concentrates at processing plants.'
    },
    {
      icon: Fuel,
      iconBg: 'bg-rose-50 text-rose-600',
      title: 'Heavy Machinery Operating & Fuel Costs',
      desc: 'Massive diesel expenditure and unscheduled breakdown downtime of dump trucks, draglines, and crushers.'
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Environmental & Statutory Royalty Compliance',
      desc: 'Stringent mining lease royalties, environmental permits, and blasting explosive inventory accounting mandates.'
    },
    {
      icon: Truck,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'Pit-to-Port Weighbridge Bottlenecks',
      desc: 'Long truck queues at weighbridges and pilferage risks during mineral transit to railheads and sea terminals.'
    }
  ]

  const whySolutions = [
    {
      icon: Scale,
      title: 'IoT Automated Weighbridge Integration',
      desc: 'Unmanned RFID weighbridge automation capturing tare, gross, and net weights with automated dispatch transit passes.'
    },
    {
      icon: Wrench,
      title: 'Heavy Equipment Telemetry & Maintenance',
      desc: 'Track engine run hours, preventive service cycles, tyre wear lifecycles, and fuel efficiency benchmarks.'
    },
    {
      icon: ShieldCheck,
      title: 'Automated Royalty & Statutory Reporting',
      desc: 'Calculate mineral production royalties, environmental clearance quotas, and statutory government returns.'
    }
  ]

  const functionalSections = [
    {
      badge: 'MINE OPERATIONS',
      title: 'Extraction, Crushing & Stockpile Management',
      description: 'Total operational command from drill and blast to mineral processing plants.',
      icon: Layers,
      items: [
        'Shift-wise pit production and overburden extraction logging',
        'Stockpile grade assay tracking and blending formulation',
        'Explosive magazine stock register and statutory usage permits',
        'Process plant recovery yield calculations and tailings accounting'
      ]
    },
    {
      badge: 'LOGISTICS & FLEET',
      title: 'Weighbridge Automation & Plant Maintenance',
      description: 'Maximize equipment uptime and accelerate mineral evacuation.',
      icon: Truck,
      items: [
        'RFID and ANPR camera-enabled unmanned weighbridge systems',
        'Heavy earthmoving machinery (HEMM) preventive maintenance schedules',
        'Diesel fuel dispenser integration with automated equipment consumption logs',
        'Rake loading, railway freight challans, and port dispatch management'
      ]
    }
  ]

  const faqs = [
    {
      q: 'How does AiBizz Mining ERP automate weighbridges?',
      a: 'It interfaces directly with weighbridge indicator digital heads, barrier gates, RFID truck tags, and ANPR cameras to log weighment data without human intervention.'
    },
    {
      q: 'Can it track heavy equipment maintenance and diesel fuel?',
      a: 'Yes. It monitors Heavy Earth Moving Machinery (HEMM) running hours, logs fuel pump dispenses, and schedules preventive maintenance by operating hours or mileage.'
    },
    {
      q: 'Does it calculate mineral royalties and environmental limits?',
      a: 'Yes. Statutory royalties and district mineral foundation (DMF) charges are calculated automatically on dispatched tonnage.'
    }
  ]

  return (
    <IndustryTemplate
      badge="All-in-One Mining Suite"
      titlePrefix="ERP Software Solutions for"
      highlightWord="Mining & Mineral Extraction"
      subtitle="Pit-to-port ore tracking, weighbridge automation, heavy earthmoving equipment telemetry, and environmental statutory compliance."
      trustPoints={['Unmanned Weighbridge Automation', 'HEMM Plant Maintenance', 'Statutory Royalty Calculation']}
      heroImage={miningImg}
      heroHud={{
        badge: 'MINE LIVE • 99.8% THROUGHPUT',
        statLabel: 'EQUIPMENT UPTIME',
        statValue: '94% HEMM Availability'
      }}
      overview={{
        title: 'Modern Mining & Heavy Extraction Operations',
        p1: 'Open-cast and underground mining corporations manage capital-intensive heavy machinery, high environmental safety mandates, and massive bulk transport logistics.',
        subheading: 'Unify Extraction Operations with Heavy Equipment Telematics',
        p2: 'AiBizz Mining ERP streamlines mine pit extraction, mineral stockpile blending, automated weighbridge dispatch, and enterprise asset maintenance.'
      }}
      challenges={challenges}
      whySolutions={whySolutions}
      functionalSections={functionalSections}
      faqs={faqs}
      onNavigate={onNavigate}
    />
  )
}
