import React from 'react'
import {
  Truck,
  Navigation,
  Fuel,
  PackageCheck,
  Clock,
  ShieldCheck,
  DollarSign,
  Boxes,
  FileText,
  MapPin,
  CheckCircle2,
  Calendar
} from 'lucide-react'
import IndustryTemplate from './IndustryTemplate'
import logisticsImg from '../../assets/industry-images/logistics.jpeg'

export default function Logistics({ onNavigate }) {
  const challenges = [
    {
      icon: Fuel,
      iconBg: 'bg-rose-50 text-rose-600',
      title: 'High Fuel Consumption & Empty Runs',
      desc: 'Deadhead miles and poor route sequencing eroding thin freight margins without automated multi-stop route optimization.'
    },
    {
      icon: Clock,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Delayed Proof of Delivery (POD)',
      desc: 'Paper-based delivery receipts getting lost in transit, delaying client invoice generation and working capital collection.'
    },
    {
      icon: Navigation,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'Blind-Spot Vehicle Tracking',
      desc: 'Disconnected GPS devices preventing dispatchers from providing accurate ETAs, detecting unscheduled halts, or monitoring driver behavior.'
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Fleet Compliance & Toll Spikes',
      desc: 'Expired vehicle fitness certificates, road tax penalties, and unverified electronic toll charges cutting into fleet earnings.'
    }
  ]

  const whySolutions = [
    {
      icon: Navigation,
      title: 'AI Automated Route & Load Optimization',
      desc: 'Intelligent multi-stop dispatch algorithms balancing truck payload capacities, transit time windows, and toll expenses.'
    },
    {
      icon: PackageCheck,
      title: 'Digital e-POD & Instant Billing',
      desc: 'Driver mobile app captures receiver signatures, geo-coordinates, and cargo inspection photos to auto-trigger customer invoices.'
    },
    {
      icon: Fuel,
      title: 'Fleet Telematics & Fuel Expense Auditing',
      desc: 'Real-time OBD-II telematics integration tracking mileage vs. fuel card transactions to eliminate fuel siphoning.'
    }
  ]

  const functionalSections = [
    {
      badge: 'FLEET MANAGEMENT',
      title: 'Vehicle Dispatch & Driver Operations',
      description: 'Total command of owned and outsourced freight fleets from trip creation to maintenance scheduling.',
      icon: Truck,
      items: [
        'Consignment Booking & Lorry Receipt (LR) generation',
        'Automated trip advance and toll card settlement',
        'Driver license, vehicle fitness & PUC statutory alerts',
        'Predictive tyre management & retreading lifecycle logs'
      ]
    },
    {
      badge: 'FREIGHT SETTLEMENT',
      title: 'Freight Invoicing & Subcontractor Billing',
      description: 'Streamline multi-rate contracts, detention billing, and broker commissions.',
      icon: DollarSign,
      items: [
        'Weight vs. volume dimensional freight pricing',
        'Customer detention and demurrage automated charges',
        'Market vehicle hire purchase order reconciliations',
        'Real-time trip-by-trip gross margin reports'
      ]
    }
  ]

  const faqs = [
    {
      q: 'How does AiBizz Logistics ERP handle electronic Proof of Delivery (e-POD)?',
      a: 'The driver mobile app lets delivery staff capture receiver signatures, upload timestamped cargo photos, and tag GPS coordinates. This immediately clears the LR status and generates the customer invoice.'
    },
    {
      q: 'Can it track outsourced or market vehicles?',
      a: 'Yes. AiBizz manages market vehicle broker agreements, creates trip purchase orders, tracks temporary driver SIM locations, and reconciles broker freight advances.'
    },
    {
      q: 'Does it integrate with FASTag and GPS tracking providers?',
      a: 'Yes. Native APIs connect with GPS hardware vendors and national electronic toll systems for live trip status and toll expense auditing.'
    }
  ]

  return (
    <IndustryTemplate
      badge="All-in-One Logistics Suite"
      titlePrefix="ERP Software Solutions for"
      highlightWord="Logistics, Freight & Fleet Networks"
      subtitle="Consignment booking, GPS fleet dispatch, electronic proof of delivery (e-POD), fuel expense tracking, and automated freight billing."
      trustPoints={['e-POD Mobile Automation', 'FASTag & GPS Integration', 'Dynamic Freight Invoicing']}
      heroImage={logisticsImg}
      heroHud={{
        badge: 'FLEET LIVE • 99.7% ON-TIME',
        statLabel: 'DISPATCH VELOCITY',
        statValue: '40% Less Transit Idle'
      }}
      overview={{
        title: 'Modern Transportation & Freight Operations',
        p1: 'Logistics service providers, 3PL/4PL operators, and private fleet owners face fluctuating fuel costs, driver shortages, and rigorous customer delivery SLAs.',
        subheading: 'Power Fleet Intelligence and Accelerate Cash Flow',
        p2: 'AiBizz Logistics ERP connects order booking, load dispatching, live telematics, and automated invoicing into an end-to-end cloud platform.'
      }}
      challenges={challenges}
      whySolutions={whySolutions}
      functionalSections={functionalSections}
      faqs={faqs}
      onNavigate={onNavigate}
    />
  )
}
