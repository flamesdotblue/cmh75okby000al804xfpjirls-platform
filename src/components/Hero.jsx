import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative isolate" aria-labelledby="hero-title">
      <div className="relative h-[88vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12)_0%,rgba(0,0,0,0.0)_40%),linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.75))]" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 pt-24 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
              Intelligence for modern operations
            </h1>
            <p className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg">
              Orchestrate data, automate decisions, and visualize outcomes on a living 3D canvas. Built for teams that ship fast and think faster.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-black shadow-[0_10px_30px_-10px_rgba(16,185,129,0.7)] transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-emerald-300">
                Get Started
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10">
                Explore Features
              </a>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 opacity-90">
              <Stat label="Latency" value="<50ms" />
              <Stat label="Uptime" value="99.99%" />
              <Stat label="Integrations" value="120+" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/40 p-4 text-center backdrop-blur-md">
      <div className="text-xs uppercase tracking-wider text-white/60">{label}</div>
      <div className="mt-1 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}
