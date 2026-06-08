"use client";
import { useState } from "react";
import { trackEvent } from "@/lib/gtag";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-[#0F1F3D]">
          Aether<span className="text-emerald-500">vibe</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#how-it-works" className="hover:text-emerald-600 transition-colors">How It Works</a>
          <a href="#for-sellers" className="hover:text-emerald-600 transition-colors">For Developers</a>
          <a href="#for-buyers" className="hover:text-emerald-600 transition-colors">For Buyers</a>
          <a href="/insights" className="hover:text-emerald-600 transition-colors">Insights</a>
          <a
            href="https://calendly.com/ceo-aethervibe/itc-consultation"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("book_call", { location: "nav_desktop" })}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Book a Call
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setOpen(!open)}>
          <div className="w-5 h-0.5 bg-gray-700 mb-1" />
          <div className="w-5 h-0.5 bg-gray-700 mb-1" />
          <div className="w-5 h-0.5 bg-gray-700" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-gray-600">
          <a href="#how-it-works" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#for-sellers" onClick={() => setOpen(false)}>For Developers</a>
          <a href="#for-buyers" onClick={() => setOpen(false)}>For Buyers</a>
          <a href="/insights" onClick={() => setOpen(false)}>Insights</a>
          <a href="https://calendly.com/ceo-aethervibe/itc-consultation" target="_blank" rel="noopener noreferrer" onClick={() => { trackEvent("book_call", { location: "nav_mobile" }); setOpen(false); }}>
            Book a Call
          </a>
          <a href="#contact" onClick={() => setOpen(false)} className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-center">
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
