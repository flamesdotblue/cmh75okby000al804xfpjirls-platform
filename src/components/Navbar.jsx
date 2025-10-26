import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="inline-flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_2px] shadow-emerald-500/60" />
              <span className="text-sm font-semibold tracking-wide text-white/90">CoreVision+</span>
            </a>
            <nav className="hidden items-center gap-8 md:flex">
              <a href="#features" className="text-sm text-white/70 hover:text-white transition-colors">Features</a>
              <a href="#about" className="text-sm text-white/70 hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-sm text-white/70 hover:text-white transition-colors">Contact</a>
            </nav>
            <div className="flex items-center gap-3">
              <a href="#get-started" className="inline-flex items-center rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-400/20 transition-colors">
                Launch App
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
