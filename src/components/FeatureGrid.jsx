import React from 'react';
import { Wallet, TrendingUp, Shield, Bell } from 'lucide-react';

const features = [
  {
    title: 'Unified Wallet',
    desc: 'Connect accounts to see your balances and cash flow in one clean view.',
    icon: Wallet,
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    title: 'Smart Insights',
    desc: 'Automatic categorization and trends to reveal where your money goes.',
    icon: TrendingUp,
    color: 'from-indigo-500/20 to-sky-500/20',
  },
  {
    title: 'Bank-level Security',
    desc: 'Your data is encrypted end‑to‑end and never sold to third parties.',
    icon: Shield,
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'Real-time Alerts',
    desc: 'Get notified for budgets, bills, and unusual activity instantly.',
    icon: Bell,
    color: 'from-pink-500/20 to-rose-500/20',
  },
];

const FeatureGrid = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Designed for clarity</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Minimal UI, maximum insight. Everything you need to track, plan, and grow.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ title, desc, icon: Icon, color }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10 transition">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${color} grid place-items-center border border-white/10`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
