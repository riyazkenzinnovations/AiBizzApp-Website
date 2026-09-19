import React from 'react'
import {
  Hotel,
  Building2,
  Calendar,
  Utensils,
  CreditCard,
  Users,
  ShieldCheck,
  Clock,
  DollarSign,
  Coffee,
  CheckCircle2,
  Sparkles
} from 'lucide-react'
import IndustryTemplate from './IndustryTemplate'
import hospImg from '../../assets/industry-images/WhatsApp Image 2026-09-19 at 6.12.18 PM (2).jpeg'

export default function Hospitality({ onNavigate }) {
  const challenges = [
    {
      icon: Calendar,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'OTA Overbooking & Channel Drift',
      desc: 'Room inventory desynchronization across Booking.com, Expedia, and direct web booking engines causing costly double bookings.'
    },
    {
      icon: Utensils,
      iconBg: 'bg-rose-50 text-rose-600',
      title: 'Food Cost Leakage in Central Kitchens',
      desc: 'Uncontrolled kitchen recipe variance, unchecked raw ingredient wastage, and pilferage cutting into F&B restaurant margins.'
    },
    {
      icon: Clock,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Housekeeping Turnaround Bottlenecks',
      desc: 'Slow communication between front desk checkout and housekeeping staff delaying room readiness for incoming guests.'
    },
    {
      icon: CreditCard,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Fragmented Guest Billing Folios',
      desc: 'Room service charges, spa treatments, banquet bookings, and mini-bar tabs scattered across multiple POS terminals.'
    }
  ]

  const whySolutions = [
    {
      icon: Building2,
      title: 'Unified Property Management System (PMS)',
      desc: 'Synchronize 2-way live room inventory across global Online Travel Agencies (OTAs) with zero overbooking risk.'
    },
    {
      icon: Utensils,
      title: 'F&B Recipe & Central Kitchen Costing',
      desc: 'Automate standardized recipe BOMs, automatic kitchen inventory deduction on POS order punch, and variance tracking.'
    },
    {
      icon: CreditCard,
      title: 'Consolidated Single-Folio Guest Billing',
      desc: 'Room charges, dining bills, spa appointments, and laundry automatically stream into one centralized guest checkout folio.'
    }
  ]

  const functionalSections = [
    {
      badge: 'FRONT DESK & RESERVATIONS',
      title: 'Property Management & Channel Manager',
      description: 'Streamline reservations for boutique resorts, luxury hotels, and hospitality chains.',
      icon: Hotel,
      items: [
        'Real-time 2-way OTA channel synchronization',
        'Guest profile CRM with VIP preferences and stay history',
        'Mobile keyless check-in and digital identity verification',
        'Housekeeping room status mobile board: Dirty / Clean / Inspected'
      ]
    },
    {
      badge: 'FOOD & BEVERAGE',
      title: 'Restaurant POS, Banquets & Kitchen Inventory',
      description: 'Control food costs and manage high-volume banqueting events.',
      icon: Utensils,
      items: [
        'Touchscreen Restaurant POS with Kitchen Order Tickets (KOT)',
        'Menu engineering and automated recipe ingredient costing',
        'Banquet hall scheduling, catering packages & milestone advances',
        'Central commissary warehouse procurement and store transfers'
      ]
    }
  ]

  const faqs = [
    {
      q: 'Does AiBizz Hospitality ERP integrate with Channel Managers and OTAs?',
      a: 'Yes. It supports 2-way real-time rate and inventory synchronization with major channel managers, ensuring zero room overbooking.'
    },
    {
      q: 'How does it handle kitchen food costing?',
      a: 'Every dish on your menu is mapped to a recipe BOM. When a waiter punches a KOT, inventory for ingredients is deducted automatically in real time.'
    },
    {
      q: 'Can it manage banquet events and corporate conferences?',
      a: 'Yes. It handles hall bookings, catering menu packages, audiovisual equipment charges, and staggered advance payment schedules.'
    }
  ]

  return (
    <IndustryTemplate
      badge="All-in-One Hotel Suite"
      titlePrefix="ERP Software Solutions for"
      highlightWord="Hotels & Resorts"
      subtitle="Front-desk reservation sync, central kitchen food costing, banquet booking billing, housekeeping tasks, and vendor purchase automation."
      trustPoints={['2-Way OTA Channel Sync', 'Live Recipe Costing', 'Single-Folio Express Checkout']}
      heroImage={hospImg}
      heroHud={{
        badge: 'HOTEL LIVE • 99.9% OCCUPANCY',
        statLabel: 'CHECKOUT SPEED',
        statValue: '2 Minutes Express Checkout'
      }}
      overview={{
        title: 'Modern Hotel & Resort Operations',
        p1: 'Independent hotels, luxury resort chains, and multi-outlet hospitality groups must deliver flawless guest experiences while rigorously managing food cost margins and staff productivity.',
        subheading: 'Seamless Hotel Operations from Reservation to Checkout',
        p2: 'AiBizz Hotel ERP unites front-desk reservations, restaurant POS, kitchen inventory, banquet management, and accounting into one high-performance cloud platform.'
      }}
      challenges={challenges}
      whySolutions={whySolutions}
      functionalSections={functionalSections}
      faqs={faqs}
      onNavigate={onNavigate}
    />
  )
}
