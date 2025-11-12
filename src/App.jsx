import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { ArrowRight, Shield, Zap, CreditCard, Globe2, Sparkles, CheckCircle2, Plane } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur-sm bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center text-white">
            <Plane className="h-5 w-5" />
          </div>
          <span className="text-white font-semibold tracking-tight">Relysia</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#resources" className="hover:text-white transition-colors">Resources</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex px-4 py-2 rounded-lg text-sm font-medium text-white/90 hover:text-white transition-colors">Sign in</button>
          <a href="#cta" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-colors">
            Get started
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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-orange-500/5" />

      <div className="relative z-10 pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              Fintech-grade rails for a borderless world
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Payments that travel as fast as you do
            </h1>
            <p className="mt-6 text-lg text-white/80 leading-relaxed">
              Relysia powers modern, global transactions with real-time settlement, enterprise security, and delightful developer tools. From checkout to cross-border, we handle the rails so you can focus on growth.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-colors">
                Start building
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white/90 border border-white/15 bg-white/5 hover:bg-white/10 transition-colors">
                Explore features
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-white/70">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-emerald-400" /><span className="text-sm">Bank-grade security</span></div>
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-amber-400" /><span className="text-sm">Real-time rails</span></div>
              <div className="flex items-center gap-2"><Globe2 className="h-4 w-4 text-sky-400" /><span className="text-sm">Global by default</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LogoCloud() {
  const logos = [
    'Aviara', 'SkyBank', 'Travelio', 'OrbitPay', 'Zen Commerce', 'NovaAir'
  ]
  return (
    <section className="bg-black py-10 border-t border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-white/50 mb-6">Trusted by forward-thinking teams</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 opacity-70">
          {logos.map((l) => (
            <div key={l} className="h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center text-white/60 text-sm">
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
      icon: <CreditCard className="h-5 w-5 text-orange-400" />, 
      title: 'Unified Payments',
      desc: 'One API for cards, bank transfers, and digital assets with instant settlement.'
    },
    {
      icon: <Shield className="h-5 w-5 text-emerald-400" />, 
      title: 'Enterprise Security',
      desc: 'End-to-end encryption, granular controls, and continuous monitoring.'
    },
    {
      icon: <Zap className="h-5 w-5 text-amber-300" />, 
      title: 'Real-time Rails',
      desc: 'Move value globally in seconds with transparent fees and status.'
    },
    {
      icon: <Globe2 className="h-5 w-5 text-sky-400" />, 
      title: 'Global Coverage',
      desc: 'Scale to new markets with compliance-ready infrastructure.'
    },
  ]

  return (
    <section id="features" className="relative bg-gradient-to-b from-black to-[#0b0b0c] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Everything you need to move money</h2>
          <p className="mt-4 text-white/70">Designed for modern fintech and travel experiences — fast, secure, and borderless.</p>
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
    'PCI-ready architecture',
    'Sandbox + live modes',
    'Transparent pricing',
  ]
  return (
    <section id="cta" className="relative py-20 bg-[#0a0a0b]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.15),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center rounded-3xl border border-white/10 bg-white/[0.04] p-8">
          <div>
            <h3 className="text-3xl font-bold text-white">Launch with confidence</h3>
            <p className="mt-3 text-white/70">Go from prototype to production with best-in-class tooling, docs, and support — all on secure, globally-scaled infrastructure.</p>
            <ul className="mt-6 space-y-2 text-white/80">
              {checks.map((c) => (
                <li key={c} className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-400" />{c}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-colors">
                Create account
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white/90 border border-white/15 bg-white/5 hover:bg-white/10 transition-colors">
                Talk to sales
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <div className="text-white/80 text-sm">Demo Checkout</div>
            <div className="mt-3 grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="text-xs text-white/60">Email</label>
                <input className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-orange-400/40" placeholder="you@company.com" />
              </div>
              <div>
                <label className="text-xs text-white/60">Card number</label>
                <input className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40" placeholder="4242 4242 4242 4242" />
              </div>
              <div>
                <label className="text-xs text-white/60">Expiry</label>
                <input className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40" placeholder="08 / 28" />
              </div>
              <div>
                <label className="text-xs text-white/60">CVC</label>
                <input className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white placeholder:text-white/40" placeholder="123" />
              </div>
              <div>
                <label className="text-xs text-white/60">Country</label>
                <select className="mt-1 w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-white">
                  <option className="bg-black">Switzerland</option>
                  <option className="bg-black">Germany</option>
                  <option className="bg-black">United States</option>
                </select>
              </div>
              <button className="col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 transition-colors">
                Pay CHF 49.00
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
            <span className="text-sm">© {new Date().getFullYear()} Relysia. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
            <a className="hover:text-white" href="#">Status</a>
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
