import React from 'react';
import { Rocket, Shield, Zap, BarChart3 } from 'lucide-react';

const features = [
  {
    title: 'Realtime Engine',
    description: 'Stream data with sub-50ms latency and act on live signals with configurable automations.',
    icon: Zap,
  },
  {
    title: 'Secure by Design',
    description: 'Zero-trust defaults, role-based controls, and comprehensive audit trails baked in.',
    icon: Shield,
  },
  {
    title: 'Insight Fabric',
    description: 'Fuse metrics, logs, and models into one coherent view with deep drilldowns.',
    icon: BarChart3,
  },
  {
    title: 'Deploy Anywhere',
    description: 'Cloud, hybrid, or on-prem with a single config. Ship updates with one command.',
    icon: Rocket,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_500px_at_20%_20%,rgba(16,185,129,0.10),transparent),radial-gradient(700px_400px_at_80%_30%,rgba(16,185,129,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Build, observe, and scale — beautifully</h2>
          <p className="mt-4 text-white/70">A modular platform that grows with your ambition. Everything you need, nothing you don’t.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#get-started" className="inline-flex items-center rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_rgba(16,185,129,0.7)] transition-transform hover:scale-[1.02]">Start Free</a>
          <a href="#contact" className="inline-flex items-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10">Book a demo</a>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description, icon: Icon }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] p-5 backdrop-blur-md">
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl transition-opacity group-hover:opacity-80" />
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-emerald-300">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
      <div className="mt-4 text-xs text-emerald-300/80">Learn more →</div>
    </div>
  );
}
