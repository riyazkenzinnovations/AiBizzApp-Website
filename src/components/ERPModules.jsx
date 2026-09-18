import React, { useRef, useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Official 3D Module Icons from Downloads
import imgLearning from '../assets/modules/AiBizzApp1.jpeg'
import imgERP from '../assets/modules/AiBizzApp2.jpeg'
import imgPayments from '../assets/modules/AiBizzApp3.jpeg'
import imgRaven from '../assets/modules/AiBizzApp4.jpeg'
import imgCRM from '../assets/modules/AiBizzApp5.jpeg'
import imgHRPayroll from '../assets/modules/AiBizzApp6.jpeg'

const MODULES = [
  {
    id: 'erp',
    title: 'ERP',
    image: imgERP,
    quote: 'Integrate every department, streamline processes, and unlock real-time intelligence.',
    author: 'Enterprise Core'
  },
  {
    id: 'crm',
    title: 'CRM',
    image: imgCRM,
    quote: 'Customer experience is the next competitive battleground.',
    author: 'Jerry Gregoire'
  },
  {
    id: 'payments',
    title: 'Payments',
    image: imgPayments,
    quote: 'Seamless, high-security global transactions powering modern enterprise commerce.',
    author: 'Financial Flow'
  },
  {
    id: 'hr-payroll',
    title: 'HR & Payroll',
    image: imgHRPayroll,
    quote: 'Clients do not come first. Employees come first. Take care of your employees, and they will take care of your clients.',
    author: 'Richard Branson'
  },
  {
    id: 'learning',
    title: 'Learning',
    image: imgLearning,
    quote: 'Continuous workforce education, skills evolution, and empowered organizational intelligence.',
    author: 'Talent Growth'
  },
  {
    id: 'raven',
    title: 'Raven',
    image: imgRaven,
    quote: 'Next-generation autonomous AI agent orchestrating seamless business workflows.',
    author: 'Autonomous AI'
  }
]

export default function ERPModules({ onNavigate }) {
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current

      if (direction === 'right') {
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
        }
      } else {
        if (scrollLeft <= 10) {
          scrollRef.current.scrollTo({ left: scrollWidth, behavior: 'smooth' })
        } else {
          scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
        }
      }
    }
  }

  // Automatic scrolling every 2.8 seconds (pauses on hover)
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        // If reached the end of cards, smoothly loop back to start
        if (scrollLeft + clientWidth >= scrollWidth - 15) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
        }
      }
    }, 2800)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section className="relative py-12 sm:py-16 bg-[#f8fafc] border-b border-slate-200/80 text-slate-900 overflow-hidden">
      {/* Subtle ambient light overlay */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            AiBizz Tech track record spans over <span className="font-semibold text-[#0066cc]">10+ years</span> of IT business solutions. We have technology in our genes. We provide innovative solution that work for all the industries/businesses.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-500 font-medium">
            We are adept enough to help fit an AiBizzApp solution that exactly meets your goals.
          </p>
        </div>

        {/* Centered Full-Width Card Carousel Slider with Auto-Scroll Pause */}
        <div 
          className="relative max-w-6xl mx-auto px-3 sm:px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
            
            {/* Left Nav Arrow Button */}
            <button
              onClick={() => handleScroll('left')}
              aria-label="Scroll left"
              className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center shadow-lg border border-slate-200 transition-all active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 text-slate-700" />
            </button>

            {/* Right Nav Arrow Button */}
            <button
              onClick={() => handleScroll('right')}
              aria-label="Scroll right"
              className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center shadow-lg border border-slate-200 transition-all active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 text-slate-700" />
            </button>

            {/* Horizontal Cards Scroller */}
            <div
              ref={scrollRef}
              className="flex items-stretch gap-5 overflow-x-auto scroll-smooth py-4 px-2 no-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {MODULES.map((item) => (
                <div
                  key={item.id}
                  className="w-[260px] sm:w-[280px] flex-shrink-0 bg-white rounded-2xl p-6 sm:p-7 text-center shadow-lg hover:shadow-xl border border-slate-200/90 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 group"
                >
                  {/* Top 3D Module Badge */}
                  <div className="w-full h-36 sm:h-40 flex items-center justify-center p-2 rounded-xl bg-slate-50/90 border border-slate-100 mb-4 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* Module Title with Signature Brand Blue Underline */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </h3>
                    <div className="w-10 h-0.5 bg-[#0066cc] mx-auto mt-2 mb-4 rounded-full" />
                  </div>

                  {/* Quote Description & Author */}
                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                      "{item.quote}"
                    </p>
                    <p className="text-xs font-semibold text-slate-500">
                      - {item.author}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

      </div>
    </section>
  )
}
