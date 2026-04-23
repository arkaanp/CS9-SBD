import React from 'react';

export default function PaxelLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <nav className="flex items-center justify-between px-8 py-6 bg-[#6a3093]">
        <div className="text-2xl font-extrabold text-white">PAXEL<span className="text-[#ffcc00]">.</span></div>
        <button className="px-5 py-2 text-sm font-bold text-[#6a3093] bg-[#ffcc00] rounded-full hover:bg-yellow-400 transition">
          Download App
        </button>
      </nav>

      <section className="relative flex flex-col items-center justify-center px-6 py-24 text-center bg-[#6a3093] text-white">
        <div className="absolute top-10 animate-bounce bg-[#ffcc00] p-4 rounded-xl rotate-12 hidden md:block">
          <p className="text-[#6a3093] font-bold">Same-Day Delivery 🚀</p>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Delivery made <br />
          <span className="text-[#ffcc00]">simple and fast.</span>
        </h1>
        <p className="max-w-2xl text-lg opacity-90 leading-relaxed">
          Experience seamless logistics with our technology-driven delivery ecosystem. We connect your packages to their destinations with speed, precision, and reliability.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-12 px-8 py-20 max-w-6xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-[#6a3093]">Revolutionizing Logistics</h2>
          <p className="text-slate-600 leading-relaxed">
            At Paxel, we do more than just transport goods. We build a robust technology infrastructure that bridges the gap between expectations and reality in record time. Our modern routing systems ensure maximum efficiency.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 border-l-4 border-[#ffcc00] bg-slate-50">
              <h4 className="font-bold">Agile Routing</h4>
              <p className="text-xs text-slate-500">Dynamic route optimization for faster drop-offs.</p>
            </div>
            <div className="p-4 border-l-4 border-[#6a3093] bg-slate-50">
              <h4 className="font-bold">Real-Time Tracking</h4>
              <p className="text-xs text-slate-500">Complete visibility from pickup to destination.</p>
            </div>
          </div>
        </div>
        <div className="bg-[#6a3093]/5 rounded-3xl flex items-center justify-center p-8 border-2 border-dashed border-[#6a3093]/20">
           <div className="text-center">
             <p className="text-[#6a3093] font-mono italic">{"<paxel-logistics-network />"}</p>
           </div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-slate-100">
        <p className="text-sm text-slate-400">© 2026 Paxel Logistics Network</p>
      </footer>
    </div>
  );
}