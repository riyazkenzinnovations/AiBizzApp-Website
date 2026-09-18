import React from 'react'
import { Award, TrendingUp, Globe, Target } from 'lucide-react'

const STATS = [
  {
    id: 'experience',
    title: 'Implementing AiBizzApp',
    stat: '10+',
    unit: 'Years',
    description: 'Decade of expertise in delivering cutting-edge solutions',
    icon: Award,
    iconBg: 'bg-[#ff7a00]',
    iconShadow: 'shadow-orange-500/20'
  },
  {
    id: 'projects',
    title: 'Proven Track Record',
    stat: '200+',
    unit: 'Projects',
    description: 'Every project completed with exceptional precision and care',
    icon: TrendingUp,
    iconBg: 'bg-[#0066cc]',
    iconShadow: 'shadow-blue-600/20'
  },
  {
    id: 'global',
    title: 'Global Client Presence',
    stat: '12+',
    unit: 'Countries',
    description: 'Serving clients across multiple continents worldwide',
    icon: Globe,
    iconBg: 'bg-[#10b981]',
    iconShadow: 'shadow-emerald-500/20'
  },
  {
    id: 'custom-apps',
    title: 'Built for Unique Client Needs',
    stat: '150+',
    unit: 'Custom Apps',
    description: 'Transform your operations with intelligent automation',
    icon: Target,
    iconBg: 'bg-[#9333ea]',
    iconShadow: 'shadow-purple-500/20'
  }
]

export default function WhyChooseUs({ onNavigate }) {
  return (
    <section id="why-choose-us" className="relative py-16 sm:py-20 bg-white border-b border-slate-100 text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c3652] tracking-tight">
            Why Choose <span className="text-[#0066cc]">AiBizzApp</span>
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#0066cc] font-medium tracking-normal">
            Proven results that speak for themselves
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-7 sm:p-8 text-center border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-between"
              >
                {/* Rounded Icon Badge */}
                <div
                  className={`w-12 h-12 rounded-xl ${item.iconBg} text-white flex items-center justify-center mb-5 shadow-lg ${item.iconShadow}`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                {/* Card Title */}
                <h3 className="text-base font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>

                {/* Big Stat Metric */}
                <div className="flex items-baseline justify-center gap-1.5 mb-3">
                  <span className="text-3xl sm:text-4xl font-black text-[#0c3652] tracking-tight">
                    {item.stat}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {item.unit}
                  </span>
                </div>

                {/* Description Subtitle */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
