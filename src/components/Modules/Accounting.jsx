import React from 'react'
import {
  ArrowRight,
  Check,
  MousePointerClick,
  Plug,
  Smartphone,
  Sliders,
  GitMerge,
  ShieldCheck
} from 'lucide-react'

// Import screenshots for Accounting module
import imgChartOfAccounts from '../../assets/accounting/acc_chart_of_accounts.jpg'
import imgGeneralLedger from '../../assets/accounting/acc_general_ledger.jpg'
import imgBillingPayables from '../../assets/accounting/acc_billing_payables.jpg'
import imgTaxesCompliance from '../../assets/accounting/acc_taxes_compliance.jpg'
import imgCostCenters from '../../assets/accounting/acc_cost_centers_budget.jpg'
import imgFinancialStatements from '../../assets/accounting/acc_financial_statements.jpg'
import imgAssets from '../../assets/accounting/acc_asset_management.jpg'
import imgReconciliation from '../../assets/accounting/acc_bank_reconciliation.jpg'
import imgMultiCurrency from '../../assets/accounting/acc_multi_company_currency.jpg'

export default function Accounting({ onNavigate }) {
  const tableOfContents = [
    { id: 'chart-of-accounts', title: 'Flexible chart of accounts' },
    { id: 'general-ledger', title: 'Comprehensive general ledger' },
    { id: 'billing-payables', title: 'Manage billing, payables and receivables' },
    { id: 'taxes-compliance', title: 'Taxes and compliance' },
    { id: 'cost-centers', title: 'Cost centers, dimensions and budgeting' },
    { id: 'financial-statements', title: 'Financial statements' },
    { id: 'assets', title: 'Assets' },
    { id: 'account-reconciliation', title: 'Account reconciliation' },
    { id: 'multi-currency', title: 'Multi-company & multi-currency management' }
  ]

  const accountingSections = [
    {
      id: 'chart-of-accounts',
      number: '01',
      badge: 'Chart of Accounts',
      title: 'Flexible chart of accounts',
      urlPath: 'chart-of-accounts',
      paragraphs: [
        'AiBizzApp simplifies financial management with a flexible Chart of Accounts (CoA) that adapts to any business structure. The tree view feature lets you organize ledgers into parent and child nodes, making it easier to categorize and break down financial data.',
        'AiBizzApp also supports multi-company accounting, consolidates financials, and offers multi-currency capabilities, making it ideal for global businesses to provide clear financial insights.'
      ],
      highlights: [
        'Hierarchical tree view with customizable parent and child nodes',
        'Out-of-the-box multi-company financial consolidation',
        'Native multi-currency support across international entities'
      ],
      img: imgChartOfAccounts,
      alt: 'Chart of Accounts tree view in AiBizzApp'
    },
    {
      id: 'general-ledger',
      number: '02',
      badge: 'General Ledger',
      title: 'Comprehensive general ledger',
      urlPath: 'general-ledger',
      paragraphs: [
        'The general ledger is the foundation of every accounting report. In AiBizzApp, every submitted accounting transaction—including those in Stock and Manufacturing—automatically creates a GL entry, ensuring a comprehensive and flexible General Ledger report.',
        'This report lets you drill down into individual ledger postings, acting as a time machine to trace and verify the impact of any transaction with deep receivables and multi-currency analysis.'
      ],
      highlights: [
        'Automatic GL postings from stock, manufacturing & sales transactions',
        'Granular transaction drill-down with verifiable audit trail',
        'Real-time balance aggregation by customer, supplier, or currency'
      ],
      img: imgGeneralLedger,
      alt: 'Comprehensive general ledger report in AiBizzApp'
    },
    {
      id: 'billing-payables',
      number: '03',
      badge: 'Payables & Receivables',
      title: 'Manage billing, payables and receivables',
      urlPath: 'receivables-payables',
      paragraphs: [
        'Effective cash flow management is crucial, and AiBizzApp offers a comprehensive system for managing payables and receivables. The Accounts Payable module tracks vendor invoices, schedules payments, and manages liabilities.',
        'The Accounts Receivable module streamlines invoicing, payment tracking, and automated follow-ups with aging reports and credit management for healthy cash reserves.'
      ],
      highlights: [
        'Visual aging brackets (0-30, 31-60, 61-90, 90+ days) for overdue tracking',
        'Automated payment scheduling and vendor liability management',
        'Multi-channel payment reminders via email and automated workflows'
      ],
      img: imgBillingPayables,
      alt: 'Manage billing, payables and receivables in AiBizzApp'
    },
    {
      id: 'taxes-compliance',
      number: '04',
      badge: 'Taxes & Compliance',
      title: 'Taxes and compliance',
      urlPath: 'taxes-compliance',
      paragraphs: [
        'Stay statutory compliant with ease by defining tax ledgers in the Chart of Accounts. AiBizzApp\'s flexibility allows businesses across regions to seamlessly manage GST, VAT, Consumption Tax, and other regional tax types.',
        'Even when billing hundreds of items, ensure accurate tax application by linking items with their respective tax ledgers, and integrate with regional government portals to generate e-invoices with QR verification.'
      ],
      highlights: [
        'Pre-configured Sales and Purchase Tax calculation templates',
        'Automated item-level tax mapping and category rules',
        'Electronic invoice generation with verifiable QR code integration'
      ],
      img: imgTaxesCompliance,
      alt: 'Taxes and compliance e-invoicing dashboard in AiBizzApp'
    },
    {
      id: 'cost-centers',
      number: '05',
      badge: 'Cost Centers & Budget',
      title: 'Cost centers, dimensions and budgeting',
      urlPath: 'cost-centers-budget',
      paragraphs: [
        'AiBizzApp\'s Cost Centers and Dimensions help track profitability across multiple units, such as online, offline, or channel sales, while keeping your Chart of Accounts organized.',
        'Additionally, AiBizzApp\'s budgeting module lets you define and track budgets for costs and dimensions, breaking them into monthly splits to prevent overspending and maintain financial discipline.'
      ],
      highlights: [
        'Multi-dimensional profitability tracking across departments and channels',
        'Monthly budget allocations with automated overspend alerts',
        'Interactive Budget vs. Actual expense comparison analytics'
      ],
      img: imgCostCenters,
      alt: 'Cost center tree and budgeting in AiBizzApp'
    },
    {
      id: 'financial-statements',
      number: '06',
      badge: 'Financial Statements',
      title: 'Financial statements',
      urlPath: 'financial-statements',
      paragraphs: [
        'AiBizzApp provides businesses with one-click access to real-time financial reports, helping them make informed decisions with accurate financial data.',
        'The system offers essential reports such as General Ledger (GL), Trial Balance (TB), Balance Sheet (BS), Profit & Loss Statement (P&L), and Cash Flow Statements along with liquidity ratio analytics.'
      ],
      highlights: [
        'One-click real-time Balance Sheet, P&L, and Cash Flow reports',
        'Automated liquidity ratios and working capital stability indicators',
        'Customizable executive exports in standard PDF and Excel formats'
      ],
      img: imgFinancialStatements,
      alt: 'Financial statements and profit loss trends in AiBizzApp'
    },
    {
      id: 'assets',
      number: '07',
      badge: 'Fixed Assets',
      title: 'Assets',
      urlPath: 'fixed-assets',
      paragraphs: [
        'Assets play a crucial role in business, acting as a long-term investment that grows over the years. With AiBizzApp, maintain a comprehensive Asset Register along with an automated depreciation schedule.',
        'Track the complete asset lifecycle—from purchase to disposal or resale—with out-of-the-box ledger postings and built-in methods like Written Down Value, Straight Line, and Double Declining Balance.'
      ],
      highlights: [
        'Centralized Asset Register with full maintenance & lifecycle logs',
        'Automated Straight Line, WDV, and Double Declining depreciation',
        'Automatic ledger postings for asset acquisitions, transfers, and disposals'
      ],
      img: imgAssets,
      alt: 'Asset management and depreciation in AiBizzApp'
    },
    {
      id: 'account-reconciliation',
      number: '08',
      badge: 'Reconciliation',
      title: 'Account reconciliation',
      urlPath: 'reconciliation',
      paragraphs: [
        'Gain a clear and accurate view of receivables and payables by efficiently matching unreconciled payments with outstanding invoices using an intuitive Payment Reconciliation Tool.',
        'Streamline your payment reconciliation process by aligning payment entries with bank statements through direct statement feed imports and automated reference number matching.'
      ],
      highlights: [
        'Split-pane Bank Reconciliation with 1-click Auto Reconcile All',
        'Direct bank feed statements import via CSV and Open Banking APIs',
        'Automatic reference number matching to clear unmatched ledger entries'
      ],
      img: imgReconciliation,
      alt: 'Payment and bank reconciliation tool in AiBizzApp'
    },
    {
      id: 'multi-currency',
      number: '09',
      badge: 'Multi-Company & Currency',
      title: 'Multi-company & multi-currency management',
      urlPath: 'multi-currency',
      paragraphs: [
        'Consolidating data from multiple entities into a single ERP instance can be a costly and complex endeavor for group companies. With AiBizzApp, seamlessly manage multiple companies across different regions within a unified account.',
        'Generate inter-company sales and purchase transactions automatically. AiBizzApp captures account balances in both base and ledger currencies for complete clarity and timely collections.'
      ],
      highlights: [
        'Unified multi-subsidiary governance under a global holding structure',
        'Automated mirror transactions for inter-company sales and purchases',
        'Live foreign exchange rates and dual-currency ledger reporting'
      ],
      img: imgMultiCurrency,
      alt: 'Multi-company and multi-currency management in AiBizzApp'
    }
  ]

  const frameworkFeatures = [
    {
      icon: MousePointerClick,
      title: 'No-code builder',
      desc: 'Automate tasks with drag-and-drop simplicity'
    },
    {
      icon: Plug,
      title: 'API-first',
      desc: 'Easily integrate with third-party systems'
    },
    {
      icon: Smartphone,
      title: 'Mobile-friendly',
      desc: 'Manage all modules from any device'
    },
    {
      icon: Sliders,
      title: 'Customizable',
      desc: 'Forms, reports, print formats, and dashboards'
    },
    {
      icon: GitMerge,
      title: 'Approval workflows',
      desc: 'Simplify with custom multi-level workflows'
    },
    {
      icon: ShieldCheck,
      title: 'Roles & permissions',
      desc: 'Granular access control to safeguard data'
    }
  ]

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="pt-28 pb-20 bg-white text-slate-900 font-sans select-text selection:bg-[#0066cc] selection:text-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-8 w-full">

        {/* Top Hero / Header Section */}
        <div className="text-center pt-8 pb-12 max-w-4xl mx-auto">
          <span className="text-xs font-semibold tracking-wider text-[#0066cc] uppercase bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block">
            OPEN SOURCE ACCOUNTING SOFTWARE
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Manage your accounts accurately with the right controls
          </h1>
          <p className="mt-6 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Maintaining accurate financial records is crucial—not just for statutory compliance, but for a clear, real-time view of your organization's financial health. With AiBizzApp, a fully open-source ERP software for accounting, you can streamline compliance, reduce manual spreadsheet efforts, and minimize reliance on external auditors. AiBizzApp transforms accounting by seamlessly integrating with inventory, manufacturing, HR, and more—turning your ERP into a centralized financial hub.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('pricing')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#0066cc] hover:bg-[#0052a3] text-white font-bold text-sm transition-all shadow-md shadow-blue-900/20 active:scale-95 cursor-pointer"
            >
              <span>Start free trial</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                if (onNavigate) onNavigate('contact')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-slate-300 hover:border-slate-800 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Contact us</span>
            </button>
          </div>
        </div>

        {/* Numbered Table of Contents / Index Grid */}
        <div className="my-8 py-8 border-y border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {tableOfContents.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center gap-3 p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 hover:bg-blue-50/70 hover:border-blue-200 text-left transition-all group cursor-pointer"
              >
                <span className="w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-500 group-hover:text-[#0066cc] group-hover:border-blue-300 shrink-0 shadow-2xs">
                  {idx + 1}
                </span>
                <span className="text-sm sm:text-base font-semibold text-slate-800 group-hover:text-[#0066cc] transition-colors leading-snug">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── 9 Redesigned Feature Sections (2-Column Balanced Alternating Split Layout) ── */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24 py-8">
          {accountingSections.map((section, index) => {
            const isEven = index % 2 === 1

            return (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 pt-4 pb-4"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
                  
                  {/* Text & Capability Column (5 cols on Desktop) */}
                  <div
                    className={`lg:col-span-5 space-y-4 sm:space-y-5 text-left ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    {/* Badge / Pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0066cc] border border-blue-100 text-xs font-bold tracking-wide uppercase">
                      <span>{section.number}</span>
                      <span className="w-1 h-1 rounded-full bg-[#0066cc]"></span>
                      <span>{section.badge}</span>
                    </div>

                    {/* Section Title */}
                    <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-[36px] font-bold text-slate-900 tracking-tight leading-[1.25]">
                      {section.title}
                    </h2>

                    {/* Paragraphs */}
                    <div className="space-y-3">
                      {section.paragraphs.map((p, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal"
                        >
                          {p}
                        </p>
                      ))}
                    </div>

                    {/* Feature Highlights Checklist (Fills whitespace purposefully) */}
                    <div className="pt-2 space-y-2.5">
                      {section.highlights.map((point, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-md bg-blue-50 border border-blue-200/90 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-[#0066cc] stroke-[2.5]" />
                          </div>
                          <span className="text-xs sm:text-sm text-slate-700 font-medium leading-snug">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* UI Mockup Window Column (7 cols on Desktop) */}
                  <div
                    className={`lg:col-span-7 w-full ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="rounded-2xl bg-gradient-to-b from-slate-100/90 to-slate-50/50 p-2 sm:p-3.5 border border-slate-200/80 shadow-md shadow-slate-200/50 overflow-hidden group hover:shadow-xl transition-all duration-300">
                      {/* Browser Mockup Window Header */}
                      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200/70 mb-2.5 bg-white/85 backdrop-blur-xs rounded-lg text-xs text-slate-500 font-medium">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-400/80 inline-block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80 inline-block"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block"></span>
                          <span className="ml-2 font-mono text-[11px] text-slate-400 truncate max-w-[180px] sm:max-w-xs">
                            aibizzapp.com/accounting/{section.urlPath}
                          </span>
                        </div>
                        <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider hidden sm:inline-block">
                          AiBizzApp ERP
                        </span>
                      </div>

                      {/* Image Asset */}
                      <img
                        src={section.img}
                        alt={section.alt}
                        className="rounded-xl shadow-2xs w-full h-auto object-cover bg-white border border-slate-200/70 group-hover:scale-[1.01] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>

                </div>
              </section>
            )
          })}
        </div>

        {/* Powered by AiBizzApp Framework Section */}
        <div className="pt-16 pb-12 border-t border-slate-200">
          <div className="flex items-center gap-2 mb-8">
            <span className="text-xl sm:text-2xl font-bold text-slate-900">
              Powered by AiBizzApp Framework
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {frameworkFeatures.map((feat, idx) => {
              const Icon = feat.icon
              return (
                <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:shadow-xs transition-all">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-[#0066cc] border border-blue-100 shrink-0 mt-0.5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Choose Freedom with AiBizzApp Bottom Banner */}
        <div className="mt-16 pt-16 border-t border-slate-200 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-slate-900 tracking-tight leading-tight">
            Choose Freedom with AiBizzApp
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            The comprehensive, user-friendly and 100% open-source ERP
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                if (onNavigate) onNavigate('contact')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <span>Contact us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                if (onNavigate) onNavigate('pricing')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl border border-slate-300 hover:border-slate-800 bg-white hover:bg-slate-50 text-slate-900 font-semibold text-sm transition-all cursor-pointer"
            >
              <span>Start free trial</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

