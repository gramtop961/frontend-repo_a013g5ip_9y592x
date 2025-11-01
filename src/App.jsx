import React from 'react';
import HeroSection from './components/HeroSection';
import FeatureGrid from './components/FeatureGrid';
import DashboardPreview from './components/DashboardPreview';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-white">
      {/* Top gradient background */}
      <div className="absolute inset-0 -z-0">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full blur-3xl bg-gradient-to-b from-emerald-500/20 via-teal-500/20 to-sky-500/20" />
      </div>

      {/* Header */}
      <header className="relative">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 grid place-items-center border border-white/20">
              <span className="text-sm font-bold text-[#0B1220]">ƒ</span>
            </div>
            <span className="font-semibold tracking-tight">Flow Finance</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-white/80 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#demo" className="hover:text-white">Demo</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <button className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white">Sign in</button>
          </div>
        </nav>
      </header>

      {/* Main sections */}
      <main className="relative">
        <HeroSection />
        <div id="features"><FeatureGrid /></div>
        <div id="demo"><DashboardPreview /></div>
        <CTASection />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <div>© {new Date().getFullYear()} Flow Finance</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
