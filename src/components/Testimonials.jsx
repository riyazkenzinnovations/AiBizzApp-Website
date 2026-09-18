import React, { useState, useRef, useEffect } from 'react'
import { Star, ExternalLink, X, ChevronLeft, ChevronRight } from 'lucide-react'

const TESTIMONIALS = [
  {
    id: 'deep-patel',
    name: 'Deep Patel',
    role: 'CEO & Founder',
    company: 'Millennium Vitrified Tiles Pvt. Ltd.',
    avatarInitials: 'DP',
    avatarBg: 'bg-[#0f4c81]',
    topBorderColor: 'border-t-[#0066cc]',
    stars: 5,
    quote:
      "We've had an excellent experience working with this software service provider. Their innovative approach to solving complex technical challenges has significantly improved our product. The addition of a dedicated developer to our team ensured seamless communication and consistent progress. They consistently deliver high-quality solutions, demonstrating both technical expertise and a strong commitment to client success. We highly recommend them to anyone seeking reliable, forward-thinking development support."
  },
  {
    id: 'ali-saleh',
    name: 'Ali Saleh Al-Ebrahim',
    role: 'CTO',
    company: 'Construction Pillars Company',
    avatarInitials: 'ALI',
    avatarBg: 'bg-[#ff7a00]',
    topBorderColor: 'border-t-[#ff7a00]',
    stars: 5,
    quote:
      'We at Construction Pillars Company, have been lucky to work with the team for the past few months. And, I personally think they go far and beyond in their delivery and commitments. As well as insuring that their clients are happy and well informed with there needs. I am looking forward to work every day with a such a professional team and a dedicated company.'
  },
  {
    id: 'pampero',
    name: 'Chief Executive Officer',
    role: 'Executive Leadership',
    company: 'COOPERATIVA DE TRABAJO APICOLA PAMPERO',
    avatarInitials: 'SL',
    avatarBg: 'bg-[#9333ea]',
    topBorderColor: 'border-t-[#9333ea]',
    stars: 5,
    quote:
      'Great and professional software solutions, with a team very focused on client satisfaction.'
  },
  {
    id: 'elena-rostova',
    name: 'Elena Rostova',
    role: 'VP Digital Transformation',
    company: 'Nexus Global Logistics GmbH',
    avatarInitials: 'ER',
    avatarBg: 'bg-[#10b981]',
    topBorderColor: 'border-t-[#10b981]',
    stars: 5,
    quote:
      'The AI automation solutions integrated with our ERP transformed our order fulfillment times from days to hours. Truly exceptional technical capability, rapid delivery cycles, and enterprise-grade reliability.'
  },
  {
    id: 'marcus-vance',
    name: 'Marcus Vance',
    role: 'Head of Technology',
    company: 'Sterling Capital Financial Partners',
    avatarInitials: 'MV',
    avatarBg: 'bg-[#0284c7]',
    topBorderColor: 'border-t-[#0284c7]',
    stars: 5,
    quote:
      'Migrating our core financial ledgers and international accounting compliance was effortless. The engineering team delivered ahead of schedule with zero business downtime.'
  },
  {
    id: 'rajiv-mehta',
    name: 'Rajiv Mehta',
    role: 'Managing Director',
    company: 'Apex Precision Engineering Solutions',
    avatarInitials: 'RM',
    avatarBg: 'bg-[#e11d48]',
    topBorderColor: 'border-t-[#e11d48]',
    stars: 5,
    quote:
      'Outstanding ERP implementation. The custom job card scheduling and multi-warehouse inventory tracking gave our shop floor plants unprecedented clarity and operational velocity.'
  }
]

export default function Testimonials({ onNavigate }) {
  const [selectedReview, setSelectedReview] = useState(null)
  const scrollRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  // Scroll manually via buttons
  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  // Smooth Auto-scroll with pause on hover
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        // If reached end, smoothly loop back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' })
        } else {
          scrollRef.current.scrollBy({ left: 380, behavior: 'smooth' })
        }
      }
    }, 4500)

    return () => clearInterval(interval)
  }, [isPaused])

  return (
    <section className="relative py-20 sm:py-24 bg-white border-b border-slate-200 text-slate-900 overflow-hidden select-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c3652] tracking-tight">
            Trusted by Clients Globally
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#0066cc] font-medium tracking-normal">
            See what our partners say about working with us
          </p>
        </div>

        {/* Carousel Container with Left & Right Nav Buttons */}
        <div 
          className="relative px-2 sm:px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Left Arrow Button */}
          <button
            onClick={() => handleScroll('left')}
            aria-label="Previous Testimonials"
            className="absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center shadow-xl border border-slate-200 transition-all active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={() => handleScroll('right')}
            aria-label="Next Testimonials"
            className="absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white hover:bg-slate-50 text-slate-700 flex items-center justify-center shadow-xl border border-slate-200 transition-all active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>

          {/* Horizontal Smooth Scroll Track */}
          <div
            ref={scrollRef}
            className="flex items-stretch gap-6 sm:gap-7 overflow-x-auto scroll-smooth py-4 px-2 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className={`w-[320px] sm:w-[380px] lg:w-[410px] flex-shrink-0 bg-white rounded-2xl p-7 sm:p-8 border border-slate-200/90 ${item.topBorderColor} border-t-4 shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_34px_rgba(0,0,0,0.09)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* Author Info Row */}
                  <div className="flex items-center gap-4 mb-5">
                    {/* Initials Avatar */}
                    <div
                      className={`w-12 h-12 rounded-full ${item.avatarBg} text-white font-bold text-sm tracking-wider flex items-center justify-center shrink-0 shadow-sm`}
                    >
                      {item.avatarInitials}
                    </div>

                    {/* Name & Role */}
                    <div className="text-left overflow-hidden">
                      <h3 className="text-base font-bold text-slate-900 tracking-tight leading-snug truncate">
                        {item.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-700 mt-0.5">
                        {item.role}
                      </p>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  {/* Star Ratings */}
                  <div className="flex items-center gap-1 mb-4 text-amber-500">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Quote */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic text-left font-normal line-clamp-6">
                    "{item.quote}"
                  </p>
                </div>

                {/* View Review Action Link */}
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-start">
                  <button
                    onClick={() => setSelectedReview(item)}
                    className="text-xs font-medium text-slate-500 hover:text-[#0066cc] transition-colors cursor-pointer flex items-center gap-1.5 group"
                  >
                    <span>View Review</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* Full Review Modal Dialog */}
      {selectedReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-4">
              <div
                className={`w-12 h-12 rounded-full ${selectedReview.avatarBg} text-white font-bold text-sm flex items-center justify-center`}
              >
                {selectedReview.avatarInitials}
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{selectedReview.name}</h3>
                <p className="text-xs font-semibold text-slate-700">{selectedReview.role}</p>
                <p className="text-xs text-slate-500">{selectedReview.company}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-4 text-amber-500">
              {[...Array(selectedReview.stars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <p className="text-sm text-slate-600 leading-relaxed italic">
              "{selectedReview.quote}"
            </p>

            <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedReview(null)}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
