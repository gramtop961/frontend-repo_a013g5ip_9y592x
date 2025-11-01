import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Stat = ({ label, value, change, up }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
    <div className="text-sm text-white/60">{label}</div>
    <div className="mt-1 flex items-baseline gap-2">
      <div className="text-2xl font-semibold text-white">{value}</div>
      <div className={`inline-flex items-center gap-1 text-sm ${up ? 'text-emerald-400' : 'text-rose-400'}`}>
        {up ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
        {change}
      </div>
    </div>
  </div>
);

const Progress = ({ label, value, color }) => (
  <div>
    <div className="flex justify-between text-xs text-white/70 mb-1">
      <span>{label}</span>
      <span>{value}%</span>
    </div>
    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
      <div className={`h-full rounded-full ${color}`} style={{ width: `${value}%` }} />
    </div>
  </div>
);

const MiniChart = () => {
  return (
    <svg viewBox="0 0 200 60" className="w-full h-16">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(16,185,129,0.7)" />
          <stop offset="100%" stopColor="rgba(16,185,129,0.05)" />
        </linearGradient>
      </defs>
      <path d="M0,40 C30,20 50,50 80,30 C110,10 130,35 160,18 C180,8 190,18 200,10" fill="none" stroke="rgb(16,185,129)" strokeWidth="2" />
      <path d="M0,60 L0,40 C30,20 50,50 80,30 C110,10 130,35 160,18 C180,8 190,18 200,10 L200,60 Z" fill="url(#g)" />
    </svg>
  );
};

const DashboardPreview = () => {
  return (
    <section className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-white/60">Total Balance</div>
                <div className="text-3xl font-semibold text-white">$8,420.15</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-white/60">This month</div>
                <div className="text-white">+$1,240.87</div>
              </div>
            </div>
            <div className="mt-4"><MiniChart /></div>
            <div className="mt-6 grid sm:grid-cols-3 gap-3">
              <Stat label="Income" value="$4,250" change="12%" up />
              <Stat label="Expenses" value="$2,780" change="-4%" />
              <Stat label="Savings" value="$1,470" change="8%" up />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">Budget overview</h3>
            <div className="mt-4 space-y-4">
              <Progress label="Housing" value={72} color="bg-emerald-400" />
              <Progress label="Groceries" value={58} color="bg-sky-400" />
              <Progress label="Transport" value={33} color="bg-indigo-400" />
              <Progress label="Entertainment" value={44} color="bg-rose-400" />
              <Progress label="Savings" value={65} color="bg-amber-400" />
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-sm text-white/70">Tip</div>
              <p className="text-sm text-white/80 mt-1">
                You’re $120 under your entertainment budget. Consider boosting savings this week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
