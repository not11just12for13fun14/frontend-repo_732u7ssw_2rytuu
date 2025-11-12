import Spline from '@splinetool/react-spline'
import { ArrowRight, Dumbbell, Salad, Activity, Sparkles, CheckCircle2, Shield, HeartPulse, Users } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-sm bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center text-white font-bold">
            R
          </div>
          <span className="text-white font-semibold tracking-tight">Relysian</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#training" className="hover:text-white transition-colors">Training</a>
          <a href="#coaches" className="hover:text-white transition-colors">Coaches</a>
          <a href="#studio" className="hover:text-white transition-colors">Studio</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white transition-colors">Member login</button>
          <a href="#cta" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-colors">
            Book a session
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-[#0a0a0b]">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Dark to warm gradient overlay - doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-orange-500/10" />

      <div className="relative z-10 pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              Personal training studio • Zürich
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Train smarter. Move better. Feel incredible.
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              1:1 coaching tailored to your goals — strength, fat loss, mobility and performance. Evidence-based methods, accountability, and a premium studio experience.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-colors">
                Book a free consultation
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#training" className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white/90 border border-white/15 bg-white/5 hover:bg-white/10 transition-colors">
                See programs
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-white/70">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-emerald-400" /><span className="text-sm">Certified coaches</span></div>
              <div className="flex items-center gap-2"><HeartPulse className="h-4 w-4 text-rose-400" /><span className="text-sm">Holistic approach</span></div>
              <div className="flex items-center gap-2"><Users className="h-4 w-4 text-sky-400" /><span className="text-sm">Beginner friendly</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LogoCloud() {
  const logos = ['NASM', 'ISSA', 'FMS', 'Precision Nutrition', 'Eleiko', 'ROGUE']
  return (
    <section className="bg-black py-10 border-t border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-white/50 mb-6">Backed by proven methods and top-tier equipment</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-80">
          {logos.map((l) => (
            <div key={l} className="h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/70 text-xs sm:text-sm">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  const features = [
    {
      icon: <Dumbbell className="h-5 w-5 text-orange-400" />, 
      title: 'Personalized Coaching',
      desc: 'Programs tailored to your goals, schedule, and training history.'
    },
    {
      icon: <Activity className="h-5 w-5 text-emerald-400" />, 
      title: 'Strength & Mobility',
      desc: 'Build strength, improve posture, and move pain‑free with smart progressions.'
    },
    {
      icon: <Salad className="h-5 w-5 text-amber-300" />, 
      title: 'Nutrition Guidance',
      desc: 'Sustainable nutrition coaching to support fat loss, muscle gain, and energy.'
    },
    {
      icon: <HeartPulse className="h-5 w-5 text-rose-400" />, 
      title: 'Accountability',
      desc: 'Weekly check‑ins, habit tracking, and clear milestones to stay on track.'
    },
  ]

  return (
    <section id="training" className="relative bg-gradient-to-b from-black to-[#0b0b0c] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Coaching that adapts to you</h2>
          <p className="mt-4 text-white/70">Whether you’re new to the gym or optimizing performance, we meet you where you are and guide you forward.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors p-5">
              <div className="h-10 w-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4">{f.icon}</div>
              <h3 className="text-white font-semibold tracking-tight">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{f.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm text-amber-300 group-hover:gap-2 transition-all">
                Learn more <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  const checks = [
    'Private, fully equipped studio',
    'Flexible scheduling (6:00–21:00)',
    'Results you can measure',
  ]
  return (
    <section id="cta" className="relative py-20 bg-[#0a0a0b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <div>
            <h3 className="text-3xl font-bold text-white">Ready to get started?</h3>
            <p className="mt-3 text-white/70">Book a free consultation to discuss your goals, see the studio, and get a personalized plan.</p>
            <ul className="mt-6 space-y-2 text-white/80">
              {checks.map((c) => (
                <li key={c} className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400" />{c}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <div className="text-white/80 text-sm">Consultation Request</div>
            <div className="mt-3 grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="text-xs text-white/60">Full name</label>
                <input className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange-400/40" placeholder="Your name" />
              </div>
              <div className="col-span-2">
                <label className="text-xs text-white/60">Email</label>
                <input className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-xs text-white/60">Preferred day</label>
                <select className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white">
                  <option className="bg-black">Monday</option>
                  <option className="bg-black">Wednesday</option>
                  <option className="bg-black">Friday</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-white/60">Time</label>
                <select className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white">
                  <option className="bg-black">Morning</option>
                  <option className="bg-black">Lunch</option>
                  <option className="bg-black">Evening</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="text-xs text-white/60">Goal</label>
                <input className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40" placeholder="e.g. Lose 5kg, build muscle, fix back pain" />
              </div>
              <button className="col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-colors">
                Request consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white/70">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-orange-400 to-rose-500" />
            <span className="text-sm">© {new Date().getFullYear()} Relysian. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
