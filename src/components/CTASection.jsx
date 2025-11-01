import React from 'react';
import { CheckCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-sky-500/10 p-8 md:p-12">
          <div className="absolute -inset-24 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),transparent_50%)] pointer-events-none" />
          <div className="relative">
            <h3 className="text-2xl md:text-3xl font-semibold text-white">Start your financial reset today</h3>
            <p className="mt-3 text-white/80 max-w-2xl">
              Build healthier money habits with clear budgets, real-time alerts, and simple insights.
            </p>
            <ul className="mt-6 grid sm:grid-cols-3 gap-3 text-white/80 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> No credit card required</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> Private & secure</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-emerald-400" /> Cancel anytime</li>
            </ul>
            <div className="mt-8">
              <button className="px-6 py-3 rounded-xl bg-white text-[#0B1220] font-medium shadow-lg hover:bg-white/90 transition">
                Create your free account
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
