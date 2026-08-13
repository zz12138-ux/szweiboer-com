"use client";

import React from 'react';

const specs = [
  { feature: "CPU Options", basic: "Intel N-series / Core i3", pro: "Core i5 / i7 / Ryzen 7" },
  { feature: "Memory (RAM)", basic: "4GB / 8GB / 16GB", pro: "16GB / 32GB / 64GB DDR5" },
  { feature: "Storage", basic: "128GB / 256GB / 512GB", pro: "512GB / 1TB / 2TB NVMe" },
  { feature: "Display", basic: "HD / FHD (1920x1080)", pro: "2K / 4K / OLED High Refresh" },
  { feature: "Build Material", basic: "ABS + Polycarbonate", pro: "Aluminum Alloy CNC" },
  { feature: "Customization", basic: "Logo & Packaging", pro: "Full ODM Development" }
];

export default function SpecTable() {
  return (
    <div className="specTableWrap bg-gray-50 py-16 px-6 rounded-[3rem] mt-20 border border-gray-100 shadow-inner">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-sm font-black text-[#0066FF] tracking-widest uppercase mb-6 text-center">Technical Specifications Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-4 font-black text-gray-900 italic">Core Specifications</th>
                <th className="py-4 font-black text-gray-900 uppercase tracking-tighter">Standard Series</th>
                <th className="py-4 font-black text-[#0066FF] uppercase tracking-tighter">Premium / Gaming</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {specs.map((item, idx) => (
                <tr key={idx} className="group hover:bg-white transition-colors">
                  <td className="py-4 text-sm font-bold text-gray-500">{item.feature}</td>
                  <td className="py-4 text-sm font-medium text-gray-700">{item.basic}</td>
                  <td className="py-4 text-sm font-bold text-gray-900">{item.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-[11px] font-bold text-gray-400 uppercase tracking-wider text-center">
          * Flexible configurations available for all product platforms. Talk to our B2B team for exact requirements.
        </p>
      </div>
    </div>
  );
}
