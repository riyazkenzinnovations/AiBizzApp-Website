import React, { useState } from 'react'
import {
  Factory,
  Cpu,
  Layers,
  Wrench,
  BarChart3,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Boxes,
  Zap,
  Clock,
  AlertTriangle,
  FileText,
  Percent,
  Sliders,
  Smartphone,
  Headphones,
  Compass,
  RotateCcw,
  Sparkles,
  GitMerge,
  Gauge
} from 'lucide-react'
import heroImg from '../../assets/industry/manufacturing/hero.jpg'

export default function Manufacturing({ onNavigate }) {
  const [openFaq, setOpenFaq] = useState(0)

  const challenges = [
    {
      icon: Layers,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'BOM Complexity & Engineering Changes',
      desc: 'Managing multi-level nested Bill of Materials (BOM) and frequent Engineering Change Orders (ECO) across revisions without assembly errors.'
    },
    {
      icon: Wrench,
      iconBg: 'bg-orange-50 text-orange-600',
      title: 'Unplanned Machine Downtime',
      desc: 'Sudden breakdown of key shop-floor machinery causing expensive idle labor, missed production deadlines, and elevated repair costs.'
    },
    {
      icon: Clock,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Shop Floor & WIP Blindness',
      desc: 'Lack of real-time visibility into Work-in-Progress (WIP) batches, workstation bottlenecks, and true job completion percentages.'
    },
    {
      icon: Boxes,
      iconBg: 'bg-purple-50 text-purple-600',
      title: 'Raw Material Shortages & Delays',
      desc: 'Stock mismatches and erratic supplier lead times causing assembly lines to stall while holding excess inventory on slow-moving materials.'
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-rose-50 text-rose-600',
      title: 'Strict Quality & Traceability',
      desc: 'High scrap rates and compliance risks when unable to instantly trace defective finished goods back to specific raw material heat/lot numbers.'
    },
    {
      icon: BarChart3,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Inaccurate Job Costing',
      desc: 'Inability to calculate actual cost per unit by factoring in machine electricity, direct labor, scrap loss, and overhead absorption in real time.'
    },
    {
      icon: AlertTriangle,
      iconBg: 'bg-cyan-50 text-cyan-600',
      title: 'Subcontracting & Job Work Friction',
      desc: 'Tracking raw materials sent to external job-workers, monitoring process losses, and validating subcontractor billing against delivered output.'
    },
    {
      icon: FileText,
      iconBg: 'bg-orange-50 text-orange-600',
      title: 'Audit & Regulatory Overhead',
      desc: 'Complex documentation requirements for ISO 9001, GMP, RoHS, and CE standards consuming hours of manual paper logging every month.'
    }
  ]

  const whySolutions = [
    {
      icon: Layers,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'Multi-Level BOM & Routing Engine',
      desc: 'Define complex multi-level assembly hierarchies, alternative BOMs, scrap allowances, and precise workstation routing with version control.'
    },
    {
      icon: Gauge,
      iconBg: 'bg-orange-50 text-orange-600',
      title: 'Real-Time Shop Floor Control',
      desc: 'Deploy touchscreen operator kiosks to log job card progress, track machine cycle times, and monitor Overall Equipment Effectiveness (OEE).'
    },
    {
      icon: Wrench,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Predictive Asset Maintenance',
      desc: 'Automate preventive maintenance schedules based on machine runtime hours or IoT sensor triggers to prevent catastrophic equipment failures.'
    },
    {
      icon: Boxes,
      iconBg: 'bg-purple-50 text-purple-600',
      title: 'Automated MRP II & Indents',
      desc: 'Translate sales orders and demand forecasts into automated material purchase requisitions and time-phased production schedules.'
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'End-to-End Lot & Batch Traceability',
      desc: 'Trace any serialized finished product forward or backward through every inspection point, vendor batch, and machine operator with one click.'
    },
    {
      icon: Percent,
      iconBg: 'bg-cyan-50 text-cyan-600',
      title: 'Dynamic Standard vs. Actual Costing',
      desc: 'Compare estimated standard costs against actual consumed raw materials, labor hours, and overheads to capture profit leakage instantly.'
    }
  ]

  const functionalSections = [
    {
      title: 'Production Planning and Work Order Management',
      subtitle: 'Balance machine capacities, prioritize production queues, and dispatch work orders seamlessly.',
      cards: [
        {
          icon: Layers,
          iconBg: 'bg-blue-50 text-blue-600',
          title: 'Multi-Level BOM Engine',
          desc: 'Create multi-tier BOMs with sub-assemblies, scrap percentages, and alternative substitute materials.'
        },
        {
          icon: Clock,
          iconBg: 'bg-orange-50 text-orange-600',
          title: 'Gantt Schedule & Planning',
          desc: 'Visual drag-and-drop production scheduling to avoid machine overburdening and align with delivery deadlines.'
        },
        {
          icon: FileText,
          iconBg: 'bg-emerald-50 text-emerald-600',
          title: 'Automated Work Orders',
          desc: 'Generate work orders automatically from sales orders with instant material reservation from inventory.'
        },
        {
          icon: GitMerge,
          iconBg: 'bg-purple-50 text-purple-600',
          title: 'Subcontracting Control',
          desc: 'Manage raw material transfers to third-party processors, track processing loss, and reconcile job-work bills.'
        }
      ]
    },
    {
      title: 'Shop Floor Execution & Workstation Monitoring',
      subtitle: 'Empower floor operators with digital job cards and monitor machine availability in real time.',
      cards: [
        {
          icon: Gauge,
          iconBg: 'bg-blue-50 text-blue-600',
          title: 'Operator Kiosk Interface',
          desc: 'Simplified barcode-driven touchscreen UI for operators to start, pause, and complete operations.'
        },
        {
          icon: Zap,
          iconBg: 'bg-orange-50 text-orange-600',
          title: 'Live OEE Analytics',
          desc: 'Continuously track machine availability, performance rate, and quality metrics on executive dashboards.'
        },
        {
          icon: AlertTriangle,
          iconBg: 'bg-emerald-50 text-emerald-600',
          title: 'Breakdown & Downtime Logs',
          desc: 'Instant downtime alerting with reason codes (die change, power cut, tool wear) to improve MTBF.'
        },
        {
          icon: Smartphone,
          iconBg: 'bg-purple-50 text-purple-600',
          title: 'Mobile Work Order Dispatch',
          desc: 'Shift supervisors can reassign jobs, inspect WIP, and approve operation completions directly from tablets.'
        }
      ]
    },
    {
      title: 'Material Requirements Planning (MRP II) & Procurement',
      subtitle: 'Ensure zero production line shutdowns while keeping carrying costs lean.',
      cards: [
        {
          icon: Boxes,
          iconBg: 'bg-blue-50 text-blue-600',
          title: 'Auto Reorder Calculations',
          desc: 'Dynamically compute safety stock and reorder quantities based on lead times and production forecasts.'
        },
        {
          icon: FileText,
          iconBg: 'bg-orange-50 text-orange-600',
          title: 'Automated Purchase Indents',
          desc: 'Transform raw material shortages into grouped supplier RFQs and purchase orders with 1-click approvals.'
        },
        {
          icon: Compass,
          iconBg: 'bg-emerald-50 text-emerald-600',
          title: 'Supplier Performance Score',
          desc: 'Track vendor on-time delivery rates, pricing competitiveness, and incoming material rejection ratios.'
        },
        {
          icon: CheckCircle2,
          iconBg: 'bg-purple-50 text-purple-600',
          title: 'Incoming Goods Inspection (GRN)',
          desc: 'Conduct gate quality checks against purchase specs before accepting raw materials into production inventory.'
        }
      ]
    },
    {
      title: 'Quality Assurance & Regulatory Compliance',
      subtitle: 'Enforce stringent quality parameters across every production phase with digital audit trails.',
      cards: [
        {
          icon: ShieldCheck,
          iconBg: 'bg-blue-50 text-blue-600',
          title: 'In-Process Quality Checks',
          desc: 'Mandatory parameter readings and dimensional checks recorded at workstations before batch forwarding.'
        },
        {
          icon: RotateCcw,
          iconBg: 'bg-orange-50 text-orange-600',
          title: 'Non-Conformance & CAPA',
          desc: 'Automated Corrective and Preventive Action (CAPA) tracking with root-cause analysis logging.'
        },
        {
          icon: Layers,
          iconBg: 'bg-emerald-50 text-emerald-600',
          title: 'Batch & Heat Traceability',
          desc: 'Full genealogical tracking linking supplier raw material heat numbers to finished goods serial numbers.'
        },
        {
          icon: FileText,
          iconBg: 'bg-purple-50 text-purple-600',
          title: 'Certificate of Analysis (CoA)',
          desc: 'Auto-generate customer-ready Certificates of Analysis with test results directly from QC inspection logs.'
        }
      ]
    },
    {
      title: 'Plant Machinery & Asset Maintenance',
      subtitle: 'Maximize asset lifespan, reduce emergency repair costs, and optimize spare parts inventory.',
      cards: [
        {
          icon: Wrench,
          iconBg: 'bg-blue-50 text-blue-600',
          title: 'Preventive Maintenance Schedules',
          desc: 'Automated maintenance calendars based on operating hours, output units, or calendar milestones.'
        },
        {
          icon: AlertTriangle,
          iconBg: 'bg-orange-50 text-orange-600',
          title: 'Corrective Repair Work Orders',
          desc: 'Fast-track breakdown tickets with technician assignment, fault diagnosis, and repair procedure logs.'
        },
        {
          icon: BarChart3,
          iconBg: 'bg-emerald-50 text-emerald-600',
          title: 'MTTR & MTBF Metrics',
          desc: 'Analyze Mean Time to Repair and Mean Time Between Failures to spot aging, high-risk machines.'
        },
        {
          icon: Boxes,
          iconBg: 'bg-purple-50 text-purple-600',
          title: 'Spare Parts Management',
          desc: 'Track critical machine spares, prevent stockouts on essential replacement parts, and track usage costs.'
        }
      ]
    },
    {
      title: 'Costing, Financials & Enterprise Compliance',
      subtitle: 'Eliminate margin guesswork with granular cost variance analysis and compliant accounting.',
      cards: [
        {
          icon: Percent,
          iconBg: 'bg-blue-50 text-blue-600',
          title: 'Standard vs. Actual Variance',
          desc: 'Real-time variance analysis identifying unexpected material wastage, overtime labor, or machine inefficiencies.'
        },
        {
          icon: BarChart3,
          iconBg: 'bg-orange-50 text-orange-600',
          title: 'Overhead Cost Absorption',
          desc: 'Accurately allocate factory electricity, depreciation, and supervisor salaries to specific production batches.'
        },
        {
          icon: FileText,
          iconBg: 'bg-emerald-50 text-emerald-600',
          title: 'E-Way Bill & GST Invoicing',
          desc: 'Automate compliant B2B tax invoices, e-way bills for dispatches, and multi-state GST returns.'
        },
        {
          icon: ShieldCheck,
          iconBg: 'bg-purple-50 text-purple-600',
          title: 'Audit-Ready Regulatory Logs',
          desc: 'Digital tamper-proof audit trails for ISO 9001, FDA, and environmental compliance audits.'
        }
      ]
    }
  ]

  const digitalTransformation = [
    {
      icon: Cpu,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'IoT & Machine Integration',
      desc: 'Direct PLC and sensor connections (Modbus, OPC-UA, MQTT) for automatic cycle count and telemetry capture.'
    },
    {
      icon: Zap,
      iconBg: 'bg-orange-50 text-orange-600',
      title: 'High-Concurrency Cloud',
      desc: 'Reliable cloud infrastructure capable of processing millions of shop-floor data points with 99.99% uptime.'
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Granular Role Permissions',
      desc: 'Strict access controls separating operator views, maintenance tickets, procurement POs, and financial ledgers.'
    },
    {
      icon: Smartphone,
      iconBg: 'bg-purple-50 text-purple-600',
      title: 'Mobile Factory App',
      desc: 'Equip floor supervisors and stock clerks with Android and iOS barcode scanners for stock intake and job updates.'
    },
    {
      icon: Sliders,
      iconBg: 'bg-rose-50 text-rose-600',
      title: 'No-Code Workflow Builder',
      desc: 'Design custom approval workflows for purchase orders, engineering changes, and quality sign-offs with zero code.'
    },
    {
      icon: Headphones,
      iconBg: 'bg-amber-50 text-amber-600',
      title: '24/7 Manufacturing SLA Support',
      desc: 'Dedicated enterprise manufacturing specialists ensuring uninterrupted factory operations around the clock.'
    }
  ]

  const faqs = [
    {
      q: 'Does AiBizz ERP support both discrete and process manufacturing?',
      a: 'Yes. AiBizz ERP is purpose-built for discrete manufacturing (automotive, machinery, electronics, furniture) with multi-level BOMs, routing, and assembly work orders, as well as process manufacturing (chemicals, food, pharmaceuticals) requiring formula recipes, batch potency, and expiration tracking.'
    },
    {
      q: 'How does the system handle multi-level nested Bill of Materials (BOM)?',
      a: 'AiBizz supports infinite multi-level BOM hierarchies. You can define sub-assemblies, track scrap percentage allowances, specify alternative substitute items, and implement Engineering Change Orders (ECO) with complete revision version control.'
    },
    {
      q: 'Can AiBizz connect directly to our plant machines and PLCs?',
      a: 'Yes. AiBizz provides native IoT connectors and standard industrial protocols (OPC-UA, Modbus, MQTT, REST Webhooks). You can automatically stream machine cycle counts, runtime hours, temperatures, and defect signals directly into your live ERP shop-floor dashboard.'
    },
    {
      q: 'How does AiBizz ensure complete raw material to finished goods traceability?',
      a: 'Every incoming raw material batch is assigned a unique lot/heat barcode. During production, operations record consumed batch IDs into the work order. If a quality defect arises months later, you can trace the exact raw material vendor, machine, and operator with a single click.'
    },
    {
      q: 'How long does it take to implement AiBizz Manufacturing ERP?',
      a: 'Thanks to our pre-configured manufacturing industry templates, standard implementations typically go live in 4 to 8 weeks. Our team assists with existing BOM data migration, workstation mapping, and operator onboarding.'
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
                <span>All-in-One Manufacturing ERP Suite</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[46px] 2xl:text-[50px] font-bold text-white tracking-tight leading-[1.18]">
                <span>Manufacturing ERP Software for </span>
                <span className="text-cyan-300 drop-shadow-sm">Production Excellence</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-xl font-normal">
                Streamline multi-level BOMs, shop floor routing, machine maintenance, capacity planning, and supply chain with real-time AI-powered ERP.
              </p>

              {/* Action Buttons */}
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
                  <span className="whitespace-nowrap">Multi-Level BOM & Routing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span className="whitespace-nowrap">Real-Time IoT & Shop Floor Tracking</span>
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
                    alt="Manufacturing ERP digital twin factory and smart production hub"
                    className="w-full h-full object-cover object-center block transform transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  
                  {/* Floating HUD Badges */}
                  <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-slate-950/85 backdrop-blur-md px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border border-white/20 text-xs font-semibold text-white flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>ERP LIVE • 92.1% OEE PRECISION</span>
                  </div>

                  <div className="absolute bottom-3.5 right-3.5 sm:bottom-4 sm:right-4 bg-slate-950/90 backdrop-blur-md px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-white/20 text-xs text-white shadow-lg">
                    <div className="text-[10px] text-blue-200/80 font-medium">ASSEMBLY VELOCITY</div>
                    <div className="text-sm sm:text-base font-bold text-cyan-300">+42% Faster Turnaround</div>
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
              Industrial manufacturers today operate in an increasingly volatile environment characterized by rising raw material costs, supply chain bottlenecks, unpredictable machine breakdowns, and strict regulatory standards. Operating with disconnected legacy systems or manual spreadsheets results in production schedule slip-ups, unchecked scrap accumulation, excessive work-in-progress inventory, and eroded profit margins.
            </p>
          </div>

          <div className="pt-2">
            <h3 className="text-lg sm:text-xl font-bold text-[#0066cc] mb-3">
              Transform your Operations with Integrated Manufacturing ERP Software
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              AiBizz Manufacturing ERP unifies every facet of production—from multi-level engineering BOMs and automated Material Requirements Planning (MRP II) to touch-screen shop-floor execution, predictive machine maintenance, and real-time job costing. Connect plant machinery directly to your balance sheet for a lean, data-driven factory that delivers on time, every time.
            </p>
          </div>

        </div>
      </section>

      {/* 3. THE UNIQUE CHALLENGES OF THE MANUFACTURING INDUSTRY (8 Cards Grid) */}
      <section className="py-18 bg-[#f8fafc] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              The Unique Challenges of the Manufacturing Industry
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Modern discrete and process manufacturers encounter operational obstacles that cause downtime, delay deliveries, and inflate costs.
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

      {/* 4. WHY AIBIZZ ERP IS THE IDEAL SOLUTION FOR MANUFACTURING (6 Cards Grid) */}
      <section className="py-18 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Why AiBizz ERP is the Ideal Solution for Manufacturing
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Engineered specifically for discrete, batch, and process manufacturing enterprises seeking operational agility.
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

      {/* 5. DEEP-DIVE FUNCTIONAL MANAGEMENT SECTIONS (4 Cards each) */}
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
              Industrial-grade reliability, real-time IoT connectivity, and end-to-end operational visibility.
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

      {/* 7. CALL TO ACTION BANNER */}
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
                READY TO MODERNIZE YOUR PLANT?
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Scale Your Factory with <br />
                <span className="text-cyan-300 drop-shadow-sm">Manufacturing ERP Solutions</span>
              </h2>

              <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
                Empower your engineers, operators, and plant managers with real-time digital intelligence.
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

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600">
              Everything you need to know about deploying AiBizz Manufacturing ERP.
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
