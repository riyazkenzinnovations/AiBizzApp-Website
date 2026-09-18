import React, { useRef } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

// Official website hero video asset
import heroVideo from '../assets/AiBizzApp-Webite-hero.mp4'

export default function Hero({ onNavigate }) {
  const videoRef = useRef(null)

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen()
      } else if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      } else if (videoRef.current.webkitRequestFullscreen) {
        videoRef.current.webkitRequestFullscreen()
      }
    }
  }

  const handleCta = () => {
    if (onNavigate) {
      onNavigate('contact')
    } else {
      window.location.hash = '#contact'
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleExplore = () => {
    const el = document.getElementById('why-choose-us') || document.querySelector('section:nth-of-type(2)')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.scrollBy({ top: 600, behavior: 'smooth' })
    }
  }

  return (
    <section 
      className="relative w-full pt-28 pb-48 sm:pt-32 sm:pb-56 lg:pt-36 lg:pb-64 text-white overflow-hidden"
      style={{
        background: 'linear-gradient(172deg, #102ba8 0%, #1f2cb4 22%, #4222b8 50%, #6817c2 76%, #8e10d2 100%)'
      }}
    >
      {/* Ambient background lighting flares */}
      <div className="absolute top-0 left-1/4 w-[520px] h-[520px] bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-fuchsia-500/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-radial-at-t from-blue-500/15 via-transparent to-transparent pointer-events-none" />

      {/* Decorative 4-point sparkle stars on the left (matches reference image) */}
      <div className="absolute bottom-24 left-8 sm:left-14 pointer-events-none opacity-80 hidden sm:block">
        <svg className="w-12 h-12 text-white/30" viewBox="0 0 60 60" fill="none">
          <path 
            d="M30 4C30 18 18 30 4 30C18 30 30 42 30 56C30 42 42 30 56 30C42 30 30 18 30 4Z" 
            fill="rgba(255,255,255,0.18)" 
            stroke="rgba(255,255,255,0.5)" 
            strokeWidth="1.5" 
          />
        </svg>
      </div>
      <div className="absolute bottom-14 left-20 sm:left-28 pointer-events-none opacity-70 hidden sm:block">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Title & Actions (AiBizzApp Focused) */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-5 sm:space-y-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 text-xs font-semibold text-white backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse" />
              <span>All-in-One Cloud Suite • AiBizzApp</span>
            </div>

            {/* Main Heading - Clean 2-line structure */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[50px] 2xl:text-[54px] font-bold text-white tracking-tight leading-[1.16]">
              Intelligent Enterprise ERP <br className="hidden sm:inline" />
              Powered by <span className="text-cyan-300 drop-shadow-sm">AiBizzApp</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-xl font-normal">
              Empower your entire business with AiBizzApp. Seamlessly unify ERP, CRM, HR &amp; Payroll, Financial Accounting, and Supply Chain automation into one intelligent, scalable cloud platform.
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
                onClick={handleExplore}
                className="px-6 sm:px-7 py-3.5 rounded-xl border border-white/40 bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-semibold transition-all backdrop-blur-sm active:scale-95 cursor-pointer"
              >
                Explore Features
              </button>
            </div>

            {/* Trust Indicators - Single Aligned Row */}
            <div className="pt-2 flex flex-wrap items-center gap-x-5 lg:gap-x-6 gap-y-2 text-xs sm:text-sm text-blue-100/90 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                <span className="whitespace-nowrap">Unified Multi-Module ERP</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                <span className="whitespace-nowrap">Real-Time Cloud Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-300 shrink-0" />
                <span className="whitespace-nowrap">Enterprise AI Security</span>
              </div>
            </div>
          </div>

          {/* Right Column: Video Container – larger & centered */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center w-full">
            {/* Ambient glow behind card */}
            <div className="absolute inset-0 mx-auto bg-gradient-to-r from-blue-400/25 via-fuchsia-400/25 to-purple-400/25 rounded-full blur-3xl pointer-events-none" />

            {/* Glassmorphic Container – bigger max-width */}
            <div className="relative w-full max-w-[780px] rounded-2xl overflow-hidden border border-white/30 shadow-[0_30px_80px_rgba(10,5,50,0.55)] bg-white/10 backdrop-blur-xl p-2 sm:p-2.5 group">
              <div className="relative w-full rounded-xl overflow-hidden aspect-video bg-slate-950">
                <video
                  ref={videoRef}
                  src={heroVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={handleFullscreen}
                  className="w-full h-full object-cover object-center block cursor-pointer transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Signature pointer shape pointing cleanly DOWN into the section below */}
      <div className="absolute -bottom-px left-1/2 -translate-x-1/2 w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-t-[18px] border-t-[#8e10d2] z-20 pointer-events-none" />
    </section>
  )
}
