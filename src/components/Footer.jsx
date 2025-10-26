import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black/30 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_2px] shadow-emerald-500/60" />
            <span className="text-sm font-semibold tracking-wide text-white/90">CoreVision+</span>
          </div>
          <p className="text-sm text-white/60">© {new Date().getFullYear()} CoreVision+. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-white/70">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="mailto:hello@example.com" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
