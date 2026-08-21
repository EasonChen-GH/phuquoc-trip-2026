import React from 'react';
import { Heart, Palmtree, Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-8 px-4 text-center text-xs text-slate-400">
      <div className="max-w-4xl mx-auto space-y-3">
        <div className="flex items-center justify-center gap-2 text-slate-300 font-medium">
          <Palmtree className="w-4 h-4 text-cyan-400" />
          <span>祝你有個美好的越南富國島 4D3N 奢華渡假假期！</span>
          <Palmtree className="w-4 h-4 text-cyan-400" />
        </div>
        <p className="text-slate-500">
          Phú Quốc Vacation Server ‧ Handcrafted with React & Vite
        </p>
      </div>
    </footer>
  );
}
