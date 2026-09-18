import React from 'react'
import { motion } from 'framer-motion'
import {
  Factory,
  Smartphone,
  ArrowUpRight
} from 'lucide-react'

export default function Industries({ onNavigate }) {
  const industriesList = [
    {
      title: 'Manufacturing',
      icon: Factory,
      href: '#manufacturing',
      description: 'Multi-level BOMs, shop floor routing, machine maintenance, and automated MRP II for discrete & process manufacturing.'
    },
    {
      title: 'E-commerce',
      icon: Smartphone,
      href: '#ecommerce',
      description: 'Omnichannel inventory sync, multi-warehouse order routing, 1-click courier shipping, and automated return & RTO management.'
    }
  ]

  return (
    <section id="industry" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-slate-900">
      
      {/* Header & Sub-text */}
      <div className="max-w-3xl mb-14 text-left">
        <span className="text-xs font-semibold tracking-wider text-[#0066cc] uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100 inline-block">
          Industries
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-slate-900 tracking-tight mt-3 leading-tight">
          Industry-specific features ensure ease of doing business
        </h2>
        <p className="text-base text-slate-600 leading-relaxed mt-4">
          From manufacturing plants to healthcare systems, AiBizzApp adapts to meet the unique demands of your industry. Simplify operations, optimize resources, and grow faster with a flexible, all-in-one ERP solution.
        </p>
      </div>

      {/* 2-Column Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
        {industriesList.map((item, idx) => {
          const IconComponent = item.icon

          return (
            <motion.a
              key={idx}
              href={item.href}
              onClick={(e) => {
                if (item.title === 'Manufacturing') {
                  e.preventDefault()
                  if (onNavigate) onNavigate('manufacturing')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                } else if (item.title === 'E-commerce') {
                  e.preventDefault()
                  if (onNavigate) onNavigate('ecommerce')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="group p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-[#0066cc]/40 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Icon Container with subtle tint */}
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-[#0066cc] transition-colors flex items-center justify-center shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  {/* Arrow Indicator */}
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#0066cc] group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-2 flex items-center gap-1 text-xs font-semibold text-[#0066cc] group-hover:translate-x-1 transition-transform">
                <span>Explore capability</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </motion.a>
          )
        })}
      </div>

    </section>
  )
}
