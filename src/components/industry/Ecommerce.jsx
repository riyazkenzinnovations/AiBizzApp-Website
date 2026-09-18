import React, { useState } from 'react'
import {
  ShoppingCart,
  Package,
  Truck,
  RotateCcw,
  BarChart3,
  Layers,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Boxes,
  Zap,
  ShieldCheck,
  Globe2,
  DollarSign,
  Users,
  Search,
  MessageSquare,
  Sparkles,
  Smartphone,
  CreditCard,
  QrCode,
  Tag,
  AlertTriangle,
  Clock,
  TrendingUp,
  FileText,
  Percent,
  Warehouse,
  Headphones,
  Check,
  Send
} from 'lucide-react'
import heroImg from '../../assets/industry/ecommerce/hero.jpg'

export default function Ecommerce({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(0)

  const challenges = [
    {
      icon: Boxes,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'Inventory Desynchronization',
      desc: 'Stock discrepancies between Shopify, Amazon, and physical stores causing costly overselling and account suspensions.'
    },
    {
      icon: RotateCcw,
      iconBg: 'bg-orange-50 text-orange-600',
      title: 'High RTO & Return Costs',
      desc: 'Return to Origin (RTO) eroding net margins with sluggish reverse inspection, misplaced items, and delayed restocking.'
    },
    {
      icon: Warehouse,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Multi-Warehouse Routing Chaos',
      desc: 'Manual dispatch decisions resulting in inefficient courier shipping zones, split deliveries, and delayed customer transit times.'
    },
    {
      icon: DollarSign,
      iconBg: 'bg-purple-50 text-purple-600',
      title: 'Marketplace Reconciliation Pains',
      desc: 'Difficulty auditing complex marketplace commission deductions, return fee clawbacks, and hidden payment gateway fees.'
    },
    {
      icon: Clock,
      iconBg: 'bg-rose-50 text-rose-600',
      title: 'Peak Season Fulfillment Delays',
      desc: 'Order surges during festive flash sales overwhelming warehouse pickers, creating shipping backlogs and SLA violations.'
    },
    {
      icon: Users,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Customer Churn & Abandoned Carts',
      desc: 'Lack of real-time courier tracking notifications, slow delivery estimates, and delayed refund turnaround driving customers away.'
    },
    {
      icon: AlertTriangle,
      iconBg: 'bg-cyan-50 text-cyan-600',
      title: 'Supplier Restocking Lead Times',
      desc: 'Poor demand visibility causing sudden out-of-stock events on top-selling SKUs and expensive emergency supplier shipments.'
    },
    {
      icon: TrendingUp,
      iconBg: 'bg-orange-50 text-orange-600',
      title: 'SKU Margin Blindness',
      desc: 'Inability to calculate actual net profitability per product variant after deducting ad spend, courier freight, packaging, and return loss.'
    }
  ]

  const whySolutions = [
    {
      icon: ShoppingCart,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'Centralized Omnichannel Hub',
      desc: 'Connect Shopify, WooCommerce, Amazon, Flipkart, and physical POS under one single source of truth with 2-way real-time stock sync.'
    },
    {
      icon: Warehouse,
      iconBg: 'bg-orange-50 text-orange-600',
      title: 'Intelligent Order Routing',
      desc: 'Automatically allocate orders to the closest regional warehouse, dark store, or 3PL to minimize shipping rates and expedite delivery.'
    },
    {
      icon: Truck,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Automated 3PL & Courier Booking',
      desc: 'Pre-integrated with Shiprocket, Delhivery, Bluedart, FedEx, and DHL for 1-click AWB generation, automated manifests, and live tracking.'
    },
    {
      icon: RotateCcw,
      iconBg: 'bg-purple-50 text-purple-600',
      title: 'AI Returns & RTO Management',
      desc: 'Standardized QC inspection workflows, automated reverse courier pickup triggers, instant customer refunds, and NDR fraud prevention.'
    },
    {
      icon: DollarSign,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Automated Settlement Audit',
      desc: 'Auto-reconcile bank credits with marketplace payout statements to instantly identify unpaid invoices, commission overcharges, and tax variances.'
    },
    {
      icon: BarChart3,
      iconBg: 'bg-cyan-50 text-cyan-600',
      title: 'Real-Time SKU Unit Economics',
      desc: 'Calculate precise gross and net profit margins per SKU in real time, factoring in marketing CAC, packaging, shipping, and reverse logistics.'
    }
  ]

  // Deep Dive Functional Management Sections (4 cards per section)
  const functionalSections = [
    {
      title: 'Omnichannel Sales and Order Management',
      subtitle: 'Streamline high-volume orders across marketplaces and direct storefronts with automated validation.',
      cards: [
        {
          icon: ShoppingCart,
          iconBg: 'bg-blue-50 text-blue-600',
          title: 'Unified Order Hub',
          desc: 'Aggregate orders across Shopify, Amazon, and POS into a single synchronized processing pipeline.'
        },
        {
          icon: Layers,
          iconBg: 'bg-orange-50 text-orange-600',
          title: 'Batch & Wave Picking',
          desc: 'Group similar orders into optimized warehouse pick lists to cut picker travel time by over 40%.'
        },
        {
          icon: Boxes,
          iconBg: 'bg-emerald-50 text-emerald-600',
          title: 'Split Order Fulfillment',
          desc: 'Fulfill line items from different warehouses while giving the buyer unified live tracking links.'
        },
        {
          icon: FileText,
          iconBg: 'bg-purple-50 text-purple-600',
          title: 'Automated Invoicing',
          desc: 'Generate GST-compliant tax invoices, packing slips, and shipping labels in bulk with zero manual touch.'
        }
      ]
    },
    {
      title: 'Multi-Warehouse & Smart Inventory Management',
      subtitle: 'Maintain real-time inventory visibility, eliminate stockouts, and optimize warehouse slotting.',
      cards: [
        {
          icon: Boxes,
          iconBg: 'bg-blue-50 text-blue-600',
          title: '2-Way Stock Synchronization',
          desc: 'Instant inventory buffer updates pushed to all sales channels to prevent overselling on flash sales.'
        },
        {
          icon: QrCode,
          iconBg: 'bg-orange-50 text-orange-600',
          title: 'Barcode & Bin Slotting',
          desc: 'Assign every product to bin, rack, and shelf addresses with mobile barcode scan validation.'
        },
        {
          icon: Zap,
          iconBg: 'bg-emerald-50 text-emerald-600',
          title: 'Dynamic Safety Stock',
          desc: 'AI-calculated reorder points that adapt to sales spikes, festive seasonality, and supplier lead times.'
        },
        {
          icon: Warehouse,
          iconBg: 'bg-purple-50 text-purple-600',
          title: 'Inter-Warehouse Transfers',
          desc: 'Manage stock replenishment between central distribution hubs, regional dark stores, and retail stores.'
        }
      ]
    },
    {
      title: 'Logistics, 3PL & Shipping Carrier Integration',
      subtitle: 'Automate courier allocation, eliminate dispatch bottlenecks, and lower last-mile delivery costs.',
      cards: [
        {
          icon: Truck,
          iconBg: 'bg-blue-50 text-blue-600',
          title: 'Smart Carrier Allocation',
          desc: 'Automatically choose the cheapest or fastest courier based on destination PIN code and shipment weight.'
        },
        {
          icon: Tag,
          iconBg: 'bg-orange-50 text-orange-600',
          title: '1-Click AWB Generation',
          desc: 'Generate shipping labels and manifest handovers with pre-integrated national and global 3PL partners.'
        },
        {
          icon: Globe2,
          iconBg: 'bg-emerald-50 text-emerald-600',
          title: 'Live Tracking Webhooks',
          desc: 'Real-time synchronization of courier transit milestones from dispatch to door-step delivery.'
        },
        {
          icon: Headphones,
          iconBg: 'bg-purple-50 text-purple-600',
          title: 'Automated NDR Workflow',
          desc: 'Instant buyer WhatsApp confirmations on failed delivery attempts to maximize successful re-deliveries.'
        }
      ]
    },
    {
      title: 'Customer Experience & Loyalty Automation',
      subtitle: 'Turn first-time buyers into loyal repeat brand advocates with omnichannel CRM and communication.',
      cards: [
        {
          icon: Users,
          iconBg: 'bg-blue-50 text-blue-600',
          title: 'Unified Customer Profile',
          desc: 'Consolidate customer purchasing history, lifetime value (LTV), and support tickets across all channels.'
        },
        {
          icon: MessageSquare,
          iconBg: 'bg-orange-50 text-orange-600',
          title: 'WhatsApp & SMS Alerts',
          desc: 'Send automated branded order confirmations, dispatch updates, and OTP notifications on WhatsApp.'
        },
        {
          icon: Sparkles,
          iconBg: 'bg-emerald-50 text-emerald-600',
          title: 'Omnichannel Loyalty Points',
          desc: 'Enable customers to earn and redeem rewards seamlessly whether shopping online or in retail outlets.'
        },
        {
          icon: Send,
          iconBg: 'bg-purple-50 text-purple-600',
          title: 'Cart Recovery Automation',
          desc: 'Trigger personalized abandoned cart reminders and back-in-stock alerts to boost conversion rates.'
        }
      ]
    },
    {
      title: 'Quality, Returns & RTO Reverse Logistics',
      subtitle: 'Take the friction out of reverse logistics while safeguarding margins from fraud and damage.',
      cards: [
        {
          icon: RotateCcw,
          iconBg: 'bg-blue-50 text-blue-600',
          title: 'Self-Service Return Portal',
          desc: 'Intuitive branded portal for customers to request exchanges, size swaps, or refunds with photo proof.'
        },
        {
          icon: Truck,
          iconBg: 'bg-orange-50 text-orange-600',
          title: 'Automated Reverse Pickup',
          desc: 'Trigger reverse courier airway bills automatically as soon as a customer return request is approved.'
        },
        {
          icon: CheckCircle2,
          iconBg: 'bg-emerald-50 text-emerald-600',
          title: 'QC Inspection & Grading',
          desc: 'Standardized warehouse inspection checklists to categorize items as restockable, refurbished, or scrap.'
        },
        {
          icon: CreditCard,
          iconBg: 'bg-purple-50 text-purple-600',
          title: 'Instant Refund & Store Credit',
          desc: 'Automatically disburse bank refunds or digital store credit wallet balances upon successful QC check.'
        }
      ]
    },
    {
      title: 'Financial Management & Marketplace Settlement',
      subtitle: 'Gain complete financial control with automated marketplace fee auditing and compliant accounting.',
      cards: [
        {
          icon: DollarSign,
          iconBg: 'bg-blue-50 text-blue-600',
          title: 'Marketplace Fee Auditing',
          desc: 'Match Amazon and Flipkart settlement statements against contractual fee slabs to recover overcharged fees.'
        },
        {
          icon: FileText,
          iconBg: 'bg-orange-50 text-orange-600',
          title: 'Multi-State GST Compliance',
          desc: 'Automate state-wise GST returns (GSTR-1, GSTR-3B) and e-way bill generation for B2B and B2C sales.'
        },
        {
          icon: Percent,
          iconBg: 'bg-emerald-50 text-emerald-600',
          title: 'Real-Time Gross Margin',
          desc: 'Monitor dynamic product margins after deducting shipping freight, COD fees, ad spend, and return losses.'
        },
        {
          icon: BarChart3,
          iconBg: 'bg-purple-50 text-purple-600',
          title: 'Automated Accounts Payable',
          desc: 'Streamline vendor PO bills, drop-shipper commissions, and logistics freight payment approvals.'
        }
      ]
    }
  ]

  const digitalTransformation = [
    {
      icon: Zap,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'High-Concurrency Cloud',
      desc: 'Engineered to handle 100,000+ orders per hour during festive flash sales and Black Friday promotions without latency.'
    },
    {
      icon: Globe2,
      iconBg: 'bg-orange-50 text-orange-600',
      title: 'Plug-and-Play Integrations',
      desc: 'Pre-built native connectors for Shopify, WooCommerce, Amazon, Flipkart, Myntra, Shiprocket, and AiBizzApp.'
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Enterprise Security & Roles',
      desc: 'Role-based access control, tenant data isolation, multi-factor authentication, and end-to-end data encryption.'
    },
    {
      icon: Smartphone,
      iconBg: 'bg-purple-50 text-purple-600',
      title: 'Mobile Warehouse App',
      desc: 'Empower warehouse staff with Android and iOS mobile barcode scanners for rapid picking, packing, and receiving.'
    },
    {
      icon: Layers,
      iconBg: 'bg-rose-50 text-rose-600',
      title: 'No-Code Workflow Engine',
      desc: 'Easily customize order routing rules, notification triggers, and document approval flows with zero coding required.'
    },
    {
      icon: Headphones,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Dedicated 24/7 Support',
      desc: 'Enterprise SLA guarantees with dedicated technical account managers and continuous system monitoring.'
    }
  ]

  const faqs = [
    {
      q: 'How does AiBizz ERP synchronize inventory across multiple marketplaces?',
      a: 'AiBizz utilizes real-time two-way webhooks and API polling. Whenever an order is placed on any channel—whether your Shopify store, Amazon, or a physical POS—the inventory count is instantly updated across all connected platforms in sub-second speed to prevent overselling.'
    },
    {
      q: 'Which e-commerce platforms and courier services does AiBizz support?',
      a: 'AiBizz supports Shopify, WooCommerce, Magento, Amazon, Flipkart, Myntra, Nykaa, and custom storefronts via REST API. On the logistics side, we are pre-integrated with Shiprocket, Delhivery, Bluedart, FedEx, DHL, DTDC, and custom 3PL courier integrations.'
    },
    {
      q: 'Can AiBizz handle festive flash sales and high peak order volumes?',
      a: 'Yes. Our cloud architecture is built on auto-scaling microservices capable of processing over 100,000 orders per hour without performance degradation, ensuring zero downtime during Diwali, Black Friday, or Big Billion Day sales.'
    },
    {
      q: 'How does automated return and RTO management help reduce losses?',
      a: 'AiBizz provides automated reverse courier pickup generation, standardized warehouse QC grading to route returned items back into active stock quickly, and customer risk profiling to identify high-risk Cash on Delivery (COD) orders before dispatch.'
    },
    {
      q: 'Can AiBizz automatically reconcile Amazon and Flipkart payments?',
      a: 'Yes. AiBizz automatically ingests marketplace settlement reports and reconciles them against your actual bank credits, highlighting commission discrepancies, incorrect weight freight charges, and unreimbursed return damages so you can raise claims immediately.'
    }
  ]

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? -1 : idx)
  }

  const handleCta = () => {
    if (onNavigate) {
      onNavigate('contact')
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="w-full bg-white text-slate-900 font-sans select-text">
      
      {/* 1. HERO SECTION (Signature Royal Blue to Violet Gradient Theme) */}
      <section
        className="relative pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28 text-white overflow-hidden"
        style={{
          background: 'linear-gradient(172deg, #102ba8 0%, #1f2cb4 22%, #4222b8 50%, #6817c2 76%, #8e10d2 100%)'
        }}
      >
        {/* Ambient background lighting flares */}
        <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-fuchsia-500/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-radial-at-t from-blue-500/15 via-transparent to-transparent pointer-events-none" />

        {/* Decorative 4-point sparkle stars on the left */}
        <div className="absolute bottom-20 left-8 sm:left-14 pointer-events-none opacity-80 hidden sm:block">
          <svg className="w-12 h-12 text-white/30" viewBox="0 0 60 60" fill="none">
            <path 
              d="M30 4C30 18 18 30 4 30C18 30 30 42 30 56C30 42 42 30 56 30C42 30 30 18 30 4Z" 
              fill="rgba(255,255,255,0.18)" 
              stroke="rgba(255,255,255,0.5)" 
              strokeWidth="1.5" 
            />
          </svg>
        </div>
        <div className="absolute bottom-12 left-20 sm:left-28 pointer-events-none opacity-70 hidden sm:block">
          <svg className="w-7 h-7 text-white/30" viewBox="0 0 60 60" fill="none">
            <path 
              d="M30 4C30 18 18 30 4 30C18 30 30 42 30 56C30 42 42 30 56 30C42 30 30 18 30 4Z" 
              fill="rgba(255,255,255,0.22)" 
              stroke="rgba(255,255,255,0.5)" 
              strokeWidth="1.5" 
            />
          </svg>
        </div>

        <div className="max-w-7xl xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* Left Column: Title & Actions */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-5 sm:space-y-6 text-left">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-semibold text-white backdrop-blur-md shadow-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
                <span>All-in-One E-Commerce ERP Suite</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] 2xl:text-[50px] font-bold text-white tracking-tight leading-[1.18]">
                <span>E-commerce ERP Software for </span>
                <span className="text-cyan-300 drop-shadow-sm">Omnichannel Growth</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-xl font-normal">
                Streamline multi-channel sales, automate inventory synchronization across warehouses, prevent stockouts, and accelerate fulfillment with real-time AI-powered ERP.
              </p>

              {/* Action Buttons matching the Hero design */}
              <div className="pt-1 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleCta}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#1b35b5] text-sm sm:text-base font-bold transition-all shadow-xl shadow-indigo-950/30 active:scale-95 cursor-pointer"
                >
                  <span>Request a Free Demo</span>
                  <ArrowRight className="w-4 h-4 text-[#1b35b5]" />
                </button>

                <button
                  onClick={() => {
                    const el = document.getElementById('overview')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="px-6 sm:px-7 py-3.5 rounded-xl border border-white/40 bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-semibold transition-all backdrop-blur-sm active:scale-95 cursor-pointer"
                >
                  Explore Features
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-2 flex flex-wrap items-center gap-x-5 lg:gap-x-6 gap-y-2 text-xs sm:text-sm text-blue-100/90 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="whitespace-nowrap">Shopify & Amazon 2-Way Sync</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="whitespace-nowrap">Pre-Integrated 3PL Carriers</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero High-Tech Illustration in Glassmorphic Container */}
            <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center w-full">
              {/* Ambient glow behind card */}
              <div className="absolute inset-0 mx-auto bg-gradient-to-r from-blue-400/25 via-fuchsia-400/25 to-purple-400/25 rounded-full blur-3xl pointer-events-none" />

              {/* Glassmorphic Container */}
              <div className="relative w-full max-w-[760px] rounded-2xl overflow-hidden border border-white/30 shadow-[0_30px_80px_rgba(10,5,50,0.55)] bg-white/10 backdrop-blur-xl p-2 sm:p-2.5 group">
                <div className="relative w-full rounded-xl overflow-hidden aspect-[16/10] bg-slate-950">
                  <img
                    src={heroImg}
                    alt="E-commerce ERP automated warehouse and live fulfillment dashboard"
                    className="w-full h-full object-cover object-center block transform transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  
                  {/* Floating HUD Badges */}
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-slate-950/85 backdrop-blur-md px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border border-white/20 text-xs font-semibold text-white flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>ERP LIVE • 99.8% INVENTORY SYNC</span>
                  </div>

                  <div className="absolute bottom-3.5 right-3.5 sm:bottom-4 sm:right-4 bg-slate-950/90 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-white/20 text-xs text-white shadow-lg">
                    <div className="text-[10px] text-blue-200/80 font-medium">DISPATCH VELOCITY</div>
                    <div className="text-sm sm:text-base font-bold text-cyan-300">+45% Faster Pick-Pack</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Signature pointer shape pointing cleanly into the section below */}
        <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-t-[18px] border-t-[#8e10d2] z-20 pointer-events-none" />
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section id="overview" className="py-16 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center sm:text-left">
          
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Overview
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              In today's hyper-competitive e-commerce landscape, brands must balance surging order volumes across Direct-to-Consumer (D2C) webstores, leading marketplaces like Amazon and Flipkart, quick commerce platforms, and offline retail outlets. Without an integrated ERP system, fragmented spreadsheets and disconnected warehouse apps inevitably lead to stockouts, overselling penalties, delayed dispatches, and lost customer goodwill.
            </p>
          </div>

          <div className="pt-2">
            <h3 className="text-lg sm:text-xl font-bold text-[#0066cc] mb-3">
              Transform your Operations with Integrated E-commerce ERP Software
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              AiBizz E-commerce ERP provides an end-to-end digital nervous system that connects front-end shopping carts directly to back-office fulfillment operations. By unifying real-time inventory buffers, automated multi-warehouse order routing, barcode-driven batch picking, automated courier shipping label printing, and automated marketplace payment reconciliation, your brand can scale to tens of thousands of daily orders with lean, predictable operations.
            </p>
          </div>

        </div>
      </section>

      {/* 3. THE UNIQUE CHALLENGES OF THE E-COMMERCE INDUSTRY (8 Cards Grid) */}
      <section className="py-18 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              The Unique Challenges of the E-commerce Industry
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Modern multi-channel sellers encounter operational roadblocks that shrink profit margins and stall brand expansion.
            </p>
          </div>

          {/* 4x2 Grid of Challenge Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all hover:-translate-y-1 text-center sm:text-left flex flex-col items-center sm:items-start"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg} mb-4 shrink-0`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* 4. WHY AIBIZZ ERP IS THE IDEAL SOLUTION FOR E-COMMERCE (6 Cards Grid) */}
      <section className="py-18 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Why AiBizz ERP is the Ideal Solution for E-commerce
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Engineered specifically for high-velocity online brands and multi-channel retailers.
            </p>
          </div>

          {/* 3x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whySolutions.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="bg-[#fcfdfe] rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all hover:-translate-y-1.5 flex flex-col items-center sm:items-start text-center sm:text-left"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg} mb-5 shrink-0`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* 5. DEEP-DIVE FUNCTIONAL MANAGEMENT SECTIONS (4 Cards each, exactly matching reference image) */}
      <section className="py-14 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {functionalSections.map((section, sIdx) => (
            <div key={sIdx} className="space-y-8">
              
              {/* Section Header */}
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                  {section.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  {section.subtitle}
                </p>
              </div>

              {/* 4 Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {section.cards.map((card, cIdx) => {
                  const Icon = card.icon
                  return (
                    <div
                      key={cIdx}
                      className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-md transition-all hover:-translate-y-1 flex flex-col items-center sm:items-start text-center sm:text-left"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.iconBg} mb-4 shrink-0`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  )
                })}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* 6. WHAT KEY FEATURES MAKE AIBIZZ YOUR PARTNER (6 Cards Grid) */}
      <section className="py-18 bg-white border-b border-slate-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              What Key Features Make AiBizz Your Partner in Digital Transformation
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Enterprise reliability, modern architecture, and rapid deployment engineered for continuous growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {digitalTransformation.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="bg-[#fcfdfe] rounded-2xl p-7 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col items-center sm:items-start text-center sm:text-left"
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.iconBg} mb-4 shrink-0`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* 7. CALL TO ACTION BANNER (Matching reference image) */}
      <section className="py-14 bg-[#f8fafc]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden"
            style={{
              background: 'linear-gradient(172deg, #102ba8 0%, #1f2cb4 25%, #4222b8 55%, #6817c2 80%, #8e10d2 100%)'
            }}
          >
            {/* Background Ambient Glows */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-fuchsia-400/25 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
              <div className="inline-block px-3.5 py-1 rounded-full bg-white/15 border border-white/25 text-cyan-200 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                READY TO ELEVATE YOUR STORE?
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Scale Your Business with <br />
                <span className="text-cyan-300 drop-shadow-sm">E-commerce ERP Solutions</span>
              </h2>

              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
                Experience seamless automation from storefront checkout to last-mile doorstep delivery.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <button
                  onClick={handleCta}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white hover:bg-slate-100 text-[#1b35b5] font-bold text-sm sm:text-base shadow-xl shadow-indigo-950/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>Request a Free Demo</span>
                  <ArrowRight className="w-4 h-4 text-[#1b35b5]" />
                </button>
                <button
                  onClick={handleCta}
                  className="px-8 py-3.5 rounded-xl border border-white/40 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base transition-all backdrop-blur-sm cursor-pointer"
                >
                  Speak to an Expert
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS (FAQ Accordion matching bottom of reference) */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600">
              Everything you need to know about implementing AiBizz E-commerce ERP.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900 pr-4">
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

    </div>
  )
}
