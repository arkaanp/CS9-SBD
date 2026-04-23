import React from 'react';

export default function PaxelLandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <nav className="flex items-center justify-between px-8 py-6 bg-[#4b1f73]">
        <div className="flex items-center gap-3 text-white">
          <div className="relative w-7 h-7 flex items-center justify-center">
            <div className="absolute w-5 h-5 border-[1.5px] border-white rounded-sm rotate-45"></div>
            <div className="absolute w-3 h-3 border-[1.5px] border-white rounded-sm"></div>
          </div>
          <span className="text-2xl font-normal tracking-wide">paxel</span>
        </div>
        <button className="px-5 py-2 text-sm font-bold text-[#4b1f73] bg-[#ffcc00] rounded-full hover:bg-yellow-400 transition">
          Download App
        </button>
      </nav>

      <section className="flex flex-col items-center justify-center px-6 py-24 text-center bg-[#4b1f73] text-white">
        <h1 className="text-5xl md:text-7xl font-black mb-6">
          Delivery made <br />
          <span className="text-[#ffcc00]">simple and fast.</span>
        </h1>
        <p className="max-w-2xl text-lg opacity-90 leading-relaxed">
          Experience seamless logistics with our technology-driven delivery ecosystem. We connect your packages to their destinations with speed, precision, and reliability.
        </p>
      </section>

      <section className="px-8 py-20 max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold text-[#4b1f73]">Revolutionizing Logistics</h2>
        <p className="text-slate-600 leading-relaxed">
          At Paxel, we do more than just transport goods. We build a robust technology infrastructure that bridges the gap between expectations and reality in record time. Our modern routing systems ensure maximum efficiency.
        </p>
        <div className="grid md:grid-cols-2 gap-4 pt-4">
          <div className="p-4 border-l-4 border-[#ffcc00] bg-slate-50">
            <h4 className="font-bold">Agile Routing</h4>
            <p className="text-xs text-slate-500">Dynamic route optimization for faster drop-offs.</p>
          </div>
          <div className="p-4 border-l-4 border-[#4b1f73] bg-slate-50">
            <h4 className="font-bold">Real-Time Tracking</h4>
            <p className="text-xs text-slate-500">Complete visibility from pickup to destination.</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#3b3b3b] text-white pt-16 pb-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
          <div className="flex flex-col space-y-4">
            <span className="font-bold cursor-pointer hover:text-gray-300">About Paxel</span>
            <span className="font-bold cursor-pointer hover:text-gray-300">Our Services</span>
            <span className="font-bold cursor-pointer hover:text-gray-300">Paxel Info Center</span>
            <span className="font-bold cursor-pointer hover:text-gray-300">News & Promos</span>
            <span className="font-bold cursor-pointer hover:text-gray-300">#DeliverGoodness</span>
          </div>
          
          <div className="flex flex-col space-y-4">
            <span className="font-bold">Partnerships</span>
            <span className="cursor-pointer hover:text-gray-300">Corporate</span>
            <span className="cursor-pointer hover:text-gray-300">PaxelCo Partners</span>
            <span className="cursor-pointer hover:text-gray-300">PaxelBig</span>
            <span className="cursor-pointer hover:text-gray-300">PaxelBox</span>
          </div>

          <div className="flex flex-col space-y-4">
            <span className="font-bold">Support</span>
            <span className="cursor-pointer hover:text-gray-300">Check Rates</span>
            <span className="cursor-pointer hover:text-gray-300">Track Shipment</span>
            <span className="font-bold cursor-pointer pt-2 hover:text-gray-300">Terms & Conditions</span>
            <span className="font-bold cursor-pointer hover:text-gray-300">Privacy Policy</span>
            <span className="font-bold cursor-pointer hover:text-gray-300">Careers</span>
          </div>

          <div className="flex flex-col space-y-4">
            <span className="font-bold">Consumer Complaint Service</span>
            <span>PT Global Unggul Mandiri (PAXEL)</span>
            <span className="font-bold cursor-pointer hover:text-gray-300">wehearyou@paxel.co</span>
            <div className="pt-2">
              <span className="block">Directorate General of Consumer Protection</span>
              <span className="block">and Trade Compliance</span>
            </div>
            <span className="font-bold block">Ministry of Trade of the Republic of Indonesia</span>
            <span className="font-bold block">Whatsapp DG of CPTC : 0853 1111 1010</span>
          </div>

          <div className="flex flex-col space-y-4">
            <span className="font-bold">Follow Us</span>
            <div className="flex space-x-3">
              <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center cursor-pointer font-serif hover:bg-white hover:text-[#3b3b3b] transition">f</div>
              <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#3b3b3b] transition">ig</div>
              <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#3b3b3b] transition">yt</div>
              <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center cursor-pointer font-sans hover:bg-white hover:text-[#3b3b3b] transition">X</div>
              <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#3b3b3b] transition">tk</div>
            </div>
            <span className="font-bold pt-4 block">Download the Paxel App</span>
            <div className="space-y-3">
              <div className="border border-gray-400 rounded-lg py-1.5 px-3 flex items-center space-x-3 bg-black w-44 cursor-pointer hover:border-white transition">
                <div className="text-left">
                  <div className="text-[10px] leading-none text-gray-300">GET IT ON</div>
                  <div className="text-sm font-semibold leading-tight mt-0.5">Google Play</div>
                </div>
              </div>
              <div className="border border-gray-400 rounded-lg py-1.5 px-3 flex items-center space-x-3 bg-black w-44 cursor-pointer hover:border-white transition">
                <div className="text-left">
                  <div className="text-[10px] leading-none text-gray-300">Download on the</div>
                  <div className="text-sm font-semibold leading-tight mt-0.5">App Store</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 flex items-center text-white">
          <div className="flex items-center gap-3 opacity-80">
            <div className="relative w-7 h-7 flex items-center justify-center">
              <div className="absolute w-5 h-5 border-[1.5px] border-white rounded-sm rotate-45"></div>
              <div className="absolute w-3 h-3 border-[1.5px] border-white rounded-sm"></div>
            </div>
            <span className="text-2xl font-normal tracking-wide">paxel</span>
          </div>
        </div>
      </footer>
    </div>
  );
}