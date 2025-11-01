import React from 'react';
import Spline from '@splinetool/react-spline';
import { CreditCard, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-24 md:pt-16 md:pb-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
              <Sparkles className="h-4 w-4 text-emerald-300" />
              New: Smart budgets with AI suggestions
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Master your money with a clear, modern view
            </h1>
            <p className="mt-5 text-lg md:text-xl text-white/70 leading-relaxed">
              A minimalist personal finance tracker that helps you budget, save, and grow. Visualize your
              spending, set goals, and stay on top of your cash flow.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 text-white font-medium shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition">
                <CreditCard className="h-5 w-5" />
                Start Tracking Free
              </button>
              <button className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-medium transition">
                View Demo
              </button>
            </div>
            <div className="mt-6 text-white/60 text-sm">
              No ads. No spam. Your data stays yours.
            </div>
          </div>

          <div className="h-[420px] md:h-[520px] rounded-3xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 overflow-hidden relative">
            <Spline
              scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Soft glow and gradient overlays that don't block interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1220] via-transparent to-transparent" />
            <div className="pointer-events-none absolute -inset-x-10 -bottom-10 h-40 blur-3xl bg-emerald-500/20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
