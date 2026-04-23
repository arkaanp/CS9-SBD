import React from 'react';

export default function PaxelLandingPage() {
  return (
    <div className="bg-white min-h-screen font-sans">
      <nav className="bg-purple-800 p-5 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">PAXEL</h1>
        <button className="bg-yellow-400 text-purple-900 font-bold py-2 px-4 rounded">
          Download App
        </button>
      </nav>

      <div className="text-center py-20 px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6">
          Delivery made simple and fast.
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          We connect your packages to their destinations with speed, precision, and reliability using our modern logistics network.
        </p>
        <button className="bg-purple-800 text-white font-bold py-3 px-8 rounded shadow">
          Start Shipping
        </button>
      </div>

      <div className="bg-purple-50 p-10 text-center mt-10">
        <h3 className="text-2xl font-bold text-purple-800 mb-4">Revolutionizing Logistics</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our dynamic routing and real-time tracking give you complete visibility from pickup to destination.
        </p>
      </div>

      <footer className="text-center p-8 text-gray-400 mt-10 border-t border-gray-100">
        <p>© 2026 Paxel Logistics Network</p>
      </footer>
    </div>
  );
}