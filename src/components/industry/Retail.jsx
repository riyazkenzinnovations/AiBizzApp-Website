import React from 'react'
import {
  ShoppingBag,
  Store,
  CreditCard,
  Layers,
  Users,
  Percent,
  RefreshCw,
  Clock,
  Truck,
  Barcode,
  Tag,
  PackageCheck
} from 'lucide-react'
import IndustryTemplate from './IndustryTemplate'
import retailImg from '../../assets/industry-images/logistics.jpeg'

export default function Retail({ onNavigate }) {
  const challenges = [
    {
      icon: Layers,
      iconBg: 'bg-rose-50 text-rose-600',
      title: 'Store & Online Inventory Mismatches',
      desc: 'Selling items on e-commerce channels that were already bought in physical stores, leading to cancellations and customer frustration.'
    },
    {
      icon: Clock,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Slow Checkout & Terminal Outages',
      desc: 'Clunky POS registers and internet downtime during peak holiday shopping hours stalling checkout lanes and increasing cart abandonment.'
    },
    {
      icon: Percent,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'Complex Promotional & Pricing Rules',
      desc: 'Managing seasonal BOGO discounts, bundle offers, and member pricing across multiple chain stores manually leads to margin leakage.'
    },
    {
      icon: RefreshCw,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Multi-Store Return & Exchange Friction',
      desc: 'Inability for shoppers to return or exchange items bought online at local outlets creates customer dissatisfaction and inventory chaos.'
    }
  ]

  const whySolutions = [
    {
      icon: Store,
      title: 'Offline-First Lightning-Fast POS',
      desc: 'High-speed barcode scanning with native offline mode that operates uninterrupted and syncs automatically when connection restores.'
    },
    {
      icon: Truck,
      title: 'Automated Multi-Store Replenishment',
      desc: 'Automated inter-store stock transfers (IST) between central distribution centers and retail stores based on dynamic safety thresholds.'
    },
    {
      icon: Users,
      title: 'Omnichannel Customer Loyalty & Gift Cards',
      desc: 'Unified customer profiles with instant loyalty points accumulation and redemption across online storefronts and physical registers.'
    }
  ]

  const functionalSections = [
    {
      badge: 'POINT OF SALE & CASH MANAGEMENT',
      title: 'Modern Touchscreen POS & Shift Controls',
      description: 'Streamline checkout lanes, support contactless payments, and maintain watertight cash drawer accountability.',
      icon: Store,
      items: [
        'Quick-bill touchscreen UI with multi-tender payments (Cash, Card, QR, Wallet)',
        'Cashier shift opening, float reconciliation, cash-in/cash-out, and end-of-day X/Z reports',
        'Split billing, layaway reservations, and instant customer credit notes',
        'Thermal receipt printing with personalized promotional QR vouchers and warranty codes'
      ]
    },
    {
      badge: 'MERCHANDISING & INVENTORY',
      title: 'Item Variants, Dynamic Pricing & Replenishment',
      description: 'Manage complex size/color matrices, automated promotions, and cross-store distribution.',
      icon: ShoppingBag,
      items: [
        'Item variant matrix generator for apparel, footwear, and consumer goods',
        'Automated promotional pricing rules (BOGO, volume tiers, happy hours, brand discounts)',
        'Intra-company store transfers with barcode dispatch and receiving confirmation',
        'Real-time sell-through rate, GMROI, and slow-moving markdown analytics'
      ]
    }
  ]

  const faqs = [
    {
      q: 'Does the POS register continue working when internet connectivity drops?',
      a: 'Yes. AiBizz POS is built with an offline-first local database. Cashiers can continue scanning items, applying promotions, taking cash payments, and printing receipts. Transactions auto-sync the moment internet returns.'
    },
    {
      q: 'Can customers buy online and pick up or return items in-store (BOPIS / BORIS)?',
      a: 'Yes. AiBizz Retail ERP unifies inventory and customer accounts. Store associates can fulfill Click & Collect orders from the shop floor and accept online returns with instant store credit or original payment refunds.'
    },
    {
      q: 'How does the system handle item variants like apparel sizes and colors?',
      a: 'With the Item Variant Matrix, create a single parent template and automatically generate unique SKUs, barcodes, and price points for hundreds of size and color variations in seconds.'
    }
  ]

  return (
    <IndustryTemplate
      badge="All-in-One Retail Suite"
      titlePrefix="ERP Software Solutions for"
      highlightWord="Retail & Omnichannel Commerce"
      subtitle="Unify brick-and-mortar point of sale, e-commerce storefronts, multi-store inventory replenishment, loyalty programs, and promotional pricing in one unified real-time ERP."
      trustPoints={['Offline-First POS Checkout', 'Real-Time Multi-Store Inventory', 'Omnichannel Order Fulfillment']}
      heroImage={retailImg}
      heroHud={{
        badge: 'OMNICHANNEL LIVE • 99.9% UPTIME',
        statLabel: 'CHECKOUT SPEED',
        statValue: '< 2s Scan to Receipt'
      }}
      overview={{
        title: 'Next-Generation Retail Operations',
        p1: 'Modern retailers face severe inventory fragmentation across physical stores, pop-up shops, online marketplaces, and central distribution hubs. Stock discrepancies lead to lost sales, stockouts during peak shopping periods, and frustrated customers.',
        subheading: 'Deliver Seamless Shopping Experiences In-Store and Online',
        p2: 'AiBizz Retail ERP connects offline-ready touch POS registers, automated central replenishment, tiered loyalty points, and cross-channel returns into a single real-time ledger.'
      }}
      challenges={challenges}
      whySolutions={whySolutions}
      functionalSections={functionalSections}
      faqs={faqs}
      onNavigate={onNavigate}
    />
  )
}
